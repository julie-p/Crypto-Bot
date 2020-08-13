import React, { useState } from 'react';
import '../styles/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function Nav(props) {

    return (
        <div className="nav-title">
            <div className="logo-title">
                <FontAwesomeIcon icon={faRobot} className="logo-icon" />
                <span className="app-name">CryptoBot</span>
            </div>
        </div>
    )
};

export default Nav;