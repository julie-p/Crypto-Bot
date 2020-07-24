import React from 'react';
import '../styles/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    return (
        <div className="nav-title">
            <FontAwesomeIcon icon={faRobot} className="logo-icon" />
            <span className="app-name">CryptoBot</span>
        </div>
    )
};

export default Nav;