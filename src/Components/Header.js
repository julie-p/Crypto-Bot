import React from 'react';
import "../styles/header.css";
import Clock from './Clock';
import { useLocation } from 'react-router-dom';

function MainHeader() {

    let location = useLocation();
    
    let header = "header";
    
    switch (location.pathname) {
        case '/' :
            header += " header-login";
            break;
        case '/signup' :
            header += " header-login";
            break;
        case '/list' :
            header += " header-list";
            break;
        case '/chart' :
            header += " header-chart";
            break;
        default :
            header = "header";
            break;
    }; 

    return (
        <div className={header}>
            <Clock />
            <div className="button-group">
            </div>
        </div>
    )
};

export default MainHeader;