import React, { useState, useEffect } from 'react';
import '../styles/main.css';
import Nav from '../Components/Nav';
import Clock from '../Components/Clock';
import { Link } from 'react-router-dom';

function SignUp() {

    return(
        <div className="App">
            <Nav />

            <div className="header header-login">
                <Clock />
            </div>

            <div className="login-container">
                <h3>Create your account :</h3>

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
                <Link to="/">Already an account ?</Link>

            </div>

        </div>
    )
};

export default SignUp;