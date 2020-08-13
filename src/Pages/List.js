import React, { useState, useEffect } from 'react';
import '../styles/list.css';
import data from '../data';
import Nav from '../Components/Nav';
import MainHeader from '../Components/Header';
import Loader from '../Components/Loader';
import Footer from '../Components/Footer';
import { ListGroup, ListGroupItem } from 'reactstrap';
import NumberFormat from 'react-number-format';

import { connect } from 'react-redux';

function List(props) {

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
                setConvertedAmounts(convertedAmounts);

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

    const wallet = data.assets.map((asset, key) => {
        return  <ListGroupItem key={"wallet_" + asset.symbol + "_" + key} className="list-group-item">
                    <img src={asset.img} className="logo-img" alt="Cryptocurrency logo"></img>
                    <p>{asset.name}</p>
                    <p>{props.data[asset.symbol]}%</p>
                    <p>{asset.amount} {asset.symbol}</p>
                    <span>
                        <NumberFormat value={convertedAmounts[asset.symbol]} displayType={'text'} decimalScale={2} thousandSeparator={true} suffix={'€'} />
                    </span>
                </ListGroupItem>
    });

    return (
        <div>
            
            <MainHeader />

            {props.loading ?
            <ListGroup className="overview">
                <h4>Details</h4>
                <div className="text-group">
                    <h3>Your Wallet</h3>
                    <p>
                        <NumberFormat value={props.total} displayType={'text'} decimalScale={2} thousandSeparator={true} suffix={'€'} />
                    </p>
                </div>
                {wallet}
            </ListGroup>
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
)(List);