import React, { useState, useEffect } from 'react';
import app from "./base.js";

//createContext permet de propager data dans tous les components
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

    const [ currentUser, setCurrentUser ] = useState(null);

    useEffect(() => {
        //Update user à chaque fois que le statut d'auth de l'user change 
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider
            value={{currentUser}}
        >
            {children}
        </AuthContext.Provider>
    )
};
