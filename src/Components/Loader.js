import React, { useState } from 'react';
import { Spinner } from 'reactstrap';

function Loader() {
    
    return (
        <div className='fullpage-spinner'>
            <Spinner type="grow" color="warning" style={{marginRight: '0.5rem'}}/>
            <Spinner type="grow" color="warning"style={{marginRight: '0.5rem'}}/>
            <Spinner type="grow" color="warning"/>
        </div>
    )
};

export default Loader;