import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // user create
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // create login
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    // create logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser);
            // if (currentUser === null || currentUser.emailVerified) {
            //     setUser(currentUser);
            // }
            setLoading(false)
        });
        return () => unSubscribe();
    }, []);

    // Update user
    const updateUser = (userInfo) => {
        // console.log(userInfo);
        return updateProfile(auth.currentUser, userInfo);

    };

    // Email Verification
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        updateUser,
        verifyEmail
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;