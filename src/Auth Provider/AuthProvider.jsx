import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [modeTheme, setModeTheme] = useState(null);
    const [user, setUser] = useState([]);
    
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
   
    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const githubProvider = new GithubAuthProvider();

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider);
    }

    
    const facebookProvider = new FacebookAuthProvider();

    const facebookLogin = () => {
        return signInWithPopup(auth, facebookProvider);
    }

   
    const logOut = () => {
        return signOut(auth);
    }

    const handleMode = (mode) => {
        setModeTheme(mode);
    }

    //? Observe auth state change (get the currently signed-in user)
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })

        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {user, modeTheme, createUser, handleMode, userLogIn, githubLogin, googleLogin, facebookLogin, logOut};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;