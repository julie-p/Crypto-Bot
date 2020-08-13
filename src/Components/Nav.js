import React, { useState } from 'react';
import '../styles/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function Nav(props) {
    
    const [ darkMode, setDarkMode ] = useState(false);

    return (
        <div className="nav-title">
            <div className="logo-title">
                <FontAwesomeIcon icon={faRobot} className="logo-icon" />
                <span className="app-name">CryptoBot</span>
            </div>
            <button 
                className="btn-toggle" 
                onClick={() => setDarkMode(prevMode => !prevMode)}>
                {darkMode ?
                <FontAwesomeIcon icon={faSun} className="logo-sun" />
                :
                <FontAwesomeIcon icon={faMoon} className="logo-moon" />
                }   
            </button>
        </div>
    )
};

export default Nav;