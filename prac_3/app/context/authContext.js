"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, sendEmailVerification } from 'firebase/auth';

import { auth } from '../firebase/firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [])

  // console.log(user);

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

  const SendReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  }

  const SendVerification = () => {
    return sendEmailVerification(auth.currentUser);
  }

  const LogOut = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, SignInEmail, SignUpEmail, SignPop, SendReset, SendVerification, LogOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
