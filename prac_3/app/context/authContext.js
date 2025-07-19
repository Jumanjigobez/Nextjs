"use client";


import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         setUser(user);
    //     });
    //     return () => unsubscribe();
    // }, [])

    const SignIn = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    const LogOut = () => {
        return signOut(auth);
    };
    return (

        <AuthContext.Provider value={{ user, SignIn, LogOut }}>
            {children}
        </AuthContext.Provider>


    )
};


export const useAuth = () => {
    return useContext(AuthContext);
}