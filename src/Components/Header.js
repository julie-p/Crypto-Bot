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
        case '/signup' :
            header += " header-login";
        case '/list' :
            header += " header-list";
        case '/chart' :
            header += " header-chart";
            break;
        default :
            header = "header";
    }; 

    return (
        <div className={header}>
            <Clock />
            <div className="button-group">
                {/* <button className="btn buy-btn">Buy Now</button>
                <button className="btn sale-btn">Sell Now</button> */}
            </div>
        </div>
    )
};

export default MainHeader;