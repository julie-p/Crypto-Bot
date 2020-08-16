import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons';

function InputLogin() {

    const [ passwordShow, setPasswordShow ] = useState(false);

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
                <div className="password-icon">
                    <FontAwesomeIcon 
                        icon={passwordShow ? faEyeSlash : faEye} 
                        onClick={() => setPasswordShow(passwordShow => !passwordShow)} />
                </div>
                <input 
                    className="input-signin"
                    type={passwordShow ? "text" : "password"}
                    name="password"
                    autoComplete="off"
                    required
                />
                <label for="password" className="label-name">
                    <span className="content-name">
                        Password
                    </span>
                </label>
            </div>

            <button className="btn btn-signin" type="submit">Go !</button>

        </div>
    )
};

export default InputLogin;