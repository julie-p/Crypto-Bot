import React from 'react';
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

function Footer() {

    let location = useLocation();
    
    let activeMainPage = "footer-link";
    let activeChartPage = "footer-link";

    switch (location.pathname) {
        case '/' :
            activeMainPage += " active-link";
            break;
        case '/chart' :
            activeChartPage += " active-link";
            break;
        default :
            activeMainPage += " active-link";
    }; 

    return (
        <div className="footer-menu">
            <div className="footer-link-col">
                <Link className="footer-link">
                    <FontAwesomeIcon icon={faHome} className="footer-icon" />
                </Link>
                <Link to="/" className={activeMainPage}>
                    <FontAwesomeIcon icon={faList} className="footer-icon" />
                </Link>
                <Link to="/chart" className={activeChartPage}>
                    <FontAwesomeIcon icon={faChartPie} className="footer-icon" />
                </Link>
            </div>
        </div>
    )
};

export default Footer;