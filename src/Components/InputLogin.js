import React from 'react';

function InputLogin() {

    return (
        <div className="login-container input">
            <input 
                className="input-signin"
                name="email"
                type="email" 
                placeholder="Email" 
            />

            <input 
                className="input-signin"
                name="password"
                type="password"
                placeholder="Password" 
            />

            <button className="btn btn-signin" type="submit">Go !</button>
        </div>
    )
};

export default InputLogin;