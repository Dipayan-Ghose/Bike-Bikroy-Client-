import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../Firebase/Firebase.init';


export const authContext=createContext();
const auth= getAuth(app);

const Auth = ({children}) => {

const [user, setUser]= useState('Null');
const [loading, isLoading]= useState(true);

const Login=(provider)=>{
    isLoading(true);
    return signInWithPopup(auth, provider);
};

const registerUser=(email,password)=>{
    isLoading(true);
    return createUserWithEmailAndPassword(auth,email, password )
};

const signInUser=(email, password)=>{
    isLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
};

const updateUserProfile=(profile)=>{
    return updateProfile(auth.currentUser, profile)
};

const Logout=()=>{
    isLoading(true);
    return signOut(auth);
};

useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
        console.log('user state changed', currentUser);
        setUser(currentUser);
        isLoading(false);
    });

    return()=>{
        unsubscribe();
    }
},[])

const authInfo={user,Login, loading,registerUser,signInUser,updateUserProfile, Logout};
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default Auth;