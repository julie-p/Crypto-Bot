import React, { useState, useEffect } from 'react';

function Clock() {

    const [ customDate, setCustomDate ] = useState();
    const [ customTime, setCustomTime ] = useState();

    useEffect(() => {
        const updateTime = function(){
            setCustomDate(new Date().toLocaleDateString("fr-FR"));
            setCustomTime(new Date().toLocaleTimeString("fr-FR"));
        };

        updateTime();
        setInterval(updateTime, 1000);
    }, []);

    return (
        <h4 className="date">{customDate}, {customTime}</h4>
    )
};


export default Clock;