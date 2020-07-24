import React, { useState, useEffect } from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import { Pie } from 'react-chartjs-2';

function Chart() {

    const today = new Date();
    const date = today.toLocaleDateString("en-EN");
    const time = today.toLocaleTimeString("en-EN");

    const [ chartData, setChartData ] = useState({});

    const chart = () => {
        setChartData({
            labels: ["Bitcoin", "Ethereum", "Dash", "BAT", 'USD Coin'],
            datasets: [
                {
                    data: [75.34, 17.62, 1.29, 1.19, 1.04],
                    backgroundColor: [
                        '#F1642B',
                        '#ffce82',
                        '#7a61e3',
                        '#f980a2',
                        '#c4b9fe'
                    ],
                    borderWidth: 1
                }
            ]
        });
    }

    useEffect(() => {
        chart();
    }, []);

    return(
        <div className="App">

            <Nav />

            <div className="header header-chart">
                <h4 className="date">{date}, {time}</h4>
                <div className="button-group">
                    <button className="btn buy-btn">Buy Now</button>
                    <button className="btn sale-btn">Sell Now</button>
                </div>

            </div>

            <div style={{marginTop: '40px', marginBottom: '40px'}}>
                <h4>Overview</h4>
                <div className="text-group" style={{marginBottom: '20px'}}>
                </div>
                <Pie data={chartData}/>
            </div>

            <Footer />
            
        </div>
    )
};

export default Chart;