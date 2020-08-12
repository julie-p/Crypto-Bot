import React, { useState, useEffect } from 'react';
import '../styles/login.css';
import Nav from '../Components/Nav';
import Clock from '../Components/Clock';
import { Link } from 'react-router-dom';

function SignIn() {

    return(
        <div className="App">
            <Nav />

            <div className="header header-login">
                <Clock />
            </div>

            <div className="login-container">
                <h3>Login :</h3>

                <input 
                    className="input-signin"
                    type="email" 
                    placeholder="Email" 
                    value="email"
                />

                <input 
                    className="input-signin"
                    placeholder="Password" 
                    value="password"
                />

                <button className="btn btn-signin">Go !</button>
                <Link to="/signup">New here ?</Link>

            </div>

        </div>
    )
};

export default SignIn;