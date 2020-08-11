import React, { useState, useEffect } from 'react';
import Nav from '../Components/Nav';
import Header from '../Components/Header';
import Loader from '../Components/Loader';
import Footer from '../Components/Footer';
import { Pie } from 'react-chartjs-2';
import NumberFormat from 'react-number-format';

import { connect } from 'react-redux';

function Chart(props) {
    
    const [ chartData, setChartData ] = useState({});

    useEffect(() => {
        const chart = () => {
            let data = Object.values(props.data);
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
            })
        };

        chart();
        setInterval(chart, 10000);
    }, []);

    return(
        <div className="App">

            <Nav />

            <Header />
            
            {props.loading ?
            <div className="overview">
                <h4>Overview</h4>
                <div className="text-group">
                    <h3>Your Wallet</h3>
                    <p>
                        <NumberFormat value={props.total} displayType={'text'} decimalScale={2} thousandSeparator={true} suffix={'€'} />
                    </p>
                </div>
                <Pie data={chartData} />
            </div>
            :
            <Loader />
            }

            <Footer />
            
        </div>
    )
};

function mapStateToProps(state) {
    return {
        data: state.data, 
        total: state.total, 
        loading: state.loading
    }
};

export default connect(
    mapStateToProps,
    null
  )(Chart);