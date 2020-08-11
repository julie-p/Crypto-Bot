import React from 'react';
import '../styles/loader.css';
import { Spinner } from 'reactstrap';

function Loader() {
    
    return (
        <div className='fullpage-spinner'>
            <Spinner type="grow" className="spinner" />
            <Spinner type="grow" className="spinner" />
            <Spinner type="grow" />
        </div>
    )
};

export default Loader;