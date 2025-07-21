"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
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

  const SignUpEmail = (email, password) => {

    return createUserWithEmailAndPassword(auth, email, password);
  }



  const SignPop = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);

  };

  const SignInEmail = (email, password) => {

    return signInWithEmailAndPassword(auth, email, password);
  };



  const LogOut = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, SignInEmail, SignUpEmail, SignPop, LogOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
