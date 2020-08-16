import React, { useState, useEffect } from 'react';
import List from '../Components/List';
import Header from '../Components/Header';
import Loader from '../Components/Loader';
import Footer from '../Components/Footer';
import data from '../data';

import { connect } from 'react-redux';

function Wallet(props) {

    const [ rate, setRate ] = useState({});
    const [ convertedAmounts, setConvertedAmounts ] = useState({});
    const [ percentageAmounts, setPercentageAmounts ] = useState({});
    let   [ totalConvertedAmount, setTotalConvertedAmount ] = useState(0);

    useEffect(() => {
        const loadData = async () => {
            //get rate data from api
            const apiData = await fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DASH,BAT,USDC&tsyms=EUR&api_key=b200f3172f07713ebb556ca20eab4e5b0884d68bc2f89a8326077294489e4943');
            const apiResponse = await apiData.json();
            return await updateData(apiResponse);
        };

        const updateData = function(rate) {
            return new Promise(resolve => {
                setRate(rate);
                //calculate converted amount per currency
                data.assets.map((asset, key) => {
                    if (typeof rate[asset.symbol] !== "undefined") {
                        convertedAmounts[asset.symbol] = asset.amount * rate[asset.symbol]['EUR'];
                    }
                });
                props.convertedAmounts(convertedAmounts);

                //get total amount wallet
                totalConvertedAmount = Object.keys(convertedAmounts).reduce((sum, key) => sum + (convertedAmounts[key]), 0);//Part de la valeur initiale 0
                props.addTotal(totalConvertedAmount);

                //get percentage per currency
                Object.keys(convertedAmounts).map((key, index) => {
                    percentageAmounts[key] = ((convertedAmounts[key] * 100) / totalConvertedAmount).toFixed(2); 
                });
                props.addData(percentageAmounts);
 
                props.isLoaded(true);
            })
        };

        loadData();
        setInterval(loadData, 10000);
    }, []);

    return (
        <div>

            <Header />

            {props.loading ?
            <List />
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

function mapDispatchToProps(dispatch) {
    return {
        convertedAmounts: function(amount) {
            dispatch({type: 'convertedAmounts', amount: amount})
        },
        addData: function(data) {
            dispatch({type: 'addData', data: data})
        },
        addTotal: function(total) {
            dispatch({type: 'addTotal', total: total})
        },
        isLoaded: function(loading) {
            dispatch({type: 'isLoaded', loading: loading})
        }
    }
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Wallet);