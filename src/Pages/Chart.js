import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Loader from '../Components/Loader';
import DisplayChart from '../Components/DisplayChart';
import Footer from '../Components/Footer';

import { connect } from 'react-redux';

function Chart(props) {

    useEffect(() => {
        const chart = () => {
            let data = Object.values(props.percentage);
            props.chartData({
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
                        borderWidth: 1,
                    }
                ]
            })
        };

        chart();
        setInterval(chart, 10000);
    }, []);

    return(
        <div>

            <Header />
            
            {props.loading ?
            <DisplayChart />
            :
            <Loader />
            }

            <Footer />
            
        </div>
    )
};

function mapStateToProps(state) {
    return {
        percentage: state.percentage,
        loading: state.loading
    }
};

function mapDispatchToProps(dispatch) {
    return {
        chartData: function(chart) {
            dispatch({type: 'chartData', chart: chart})
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chart);