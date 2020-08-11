import React, { useState, useEffect } from 'react';

function Clock() {

    const [ customDate, setCustomDate ] = useState();
    const [ customTime, setCustomTime ] = useState();

    useEffect(() => {
        const updateTime = () => {
            setCustomDate(new Date().toLocaleDateString("fr-FR"));
            setCustomTime(new Date().toLocaleTimeString("fr-FR"));
        };

        updateTime();
        setInterval(updateTime, 1000); //Update l'heure toutes les secondes 
    }, []);

    return (
        <h4 className="date">{customDate}, {customTime}</h4>
    )
};

export default Clock;