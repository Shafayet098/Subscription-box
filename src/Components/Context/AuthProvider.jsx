
import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../FireBase/firebase.init';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();
    const providerGitHub = new GithubAuthProvider();

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    const updateUser =(obj)=>{
        return updateProfile(auth.currentUser,obj)
    }
    const signInWithGoogle=()=>{
        return signInWithPopup(auth, provider)
    }
    const signInWIthGithub=()=>{
        return signInWithPopup(auth, providerGitHub)
    }
    const forgetpassword=(email)=>{
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current User On Auth State Changed: ", currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const userInfo = {
        user,
        signIn,
        signUp,
        logOut,
        loading,
        updateUser,
        signInWithGoogle,
        signInWIthGithub,
        forgetpassword

    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;