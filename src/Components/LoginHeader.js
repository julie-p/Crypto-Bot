import React from 'react';
import "../styles/header.css";
import Clock from './Clock';

function LoginHeader() {

    return (
        <div className="header header-login">
            <Clock />
        </div>
    )
};

export default LoginHeader;