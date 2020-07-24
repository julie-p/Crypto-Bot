import React, { useState, useEffect } from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import { Pie } from 'react-chartjs-2';

import { connect } from 'react-redux';

function Chart(props) {
    
    const [ customDate, setCustomDate ] = useState();
    const [ customTime, setCustomTime ] = useState();
    const [ chartData, setChartData ] = useState({});

    useEffect(() => {
        const updateTime = function(){
            setCustomDate(new Date().toLocaleDateString("en-EN"));
            setCustomTime(new Date().toLocaleTimeString("en-EN"));
        }
        updateTime();
        setInterval(updateTime, 1000);
    }, []);

    let data = Object.values(props.data);

    const chart = () => {
        setChartData({
            labels: ["Bitcoin", "Ethereum", "Dash", "BAT", 'USD Coin'],
            datasets: [
                {
                    data: data,
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
                <h4 className="date">{customDate}, {customTime}</h4>
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

function mapStateToProps(state) {
    return {
        data: state.data
    }
};

export default connect(
    mapStateToProps,
    null
  )(Chart);