import React from 'react';

function InputLogin() {

    return (
        <div className="login-container input">

            <div>
                <input 
                    className="input-signin"
                    name="email"
                    autoComplete="off"
                    required
                /> 
                <label for="email" className="label-name">
                    <span className="content-name">Email</span>
                </label>
            </div>

            <div>
                <input 
                    className="input-signin"
                    type="password"
                    name="password"
                    required
                />
                <label for="password" className="label-name">
                    <span className="content-name">Password</span>
                </label>
            </div>

            <button className="btn btn-signin" type="submit">Go !</button>

        </div>
    )
};

export default InputLogin;