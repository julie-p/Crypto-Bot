import React from 'react';
import '../styles/error.css';
import Clock from '../Components/Clock';
import { Link } from 'react-router-dom';

function Error() {

    return(
        <div className="error-container">
            <div className="header error">
            </div>

            <div className="error-main">
                <h3>Oops !</h3>
                <h5>Seems you got lost somewhere :( </h5>
                <button className="btn btn-error"><Link className="link-back" to="/">And back you go !</Link></button>
            </div>
        </div>
    )
};

export default Error;