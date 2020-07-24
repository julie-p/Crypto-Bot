import React, { useState, useEffect } from 'react';
import '../styles/list.css';
import data from '../data';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import { ListGroup, ListGroupItem, Spinner } from 'reactstrap';
import NumberFormat from 'react-number-format';

import { connect } from 'react-redux';

function List(props) {

    const today = new Date();
    const date = today.toLocaleDateString("en-EN");
    const time = today.toLocaleTimeString("en-EN");

    const [ rate, setRate ] = useState({});
    const [ loading, setLoading ] = useState(false);

    const [ convertedAmounts, setConvertedAmounts ] = useState({});
    let [ totalConvertedAmount, setTotalConvertedAmount ] = useState(0);
    const [ percentageAmounts, setPercentageAmounts ] = useState({});


    useEffect(() => {
        const loadData = async () => {
            //get rate data
            const apiData = await fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DASH,BAT,USDC&tsyms=EUR&api_key=b200f3172f07713ebb556ca20eab4e5b0884d68bc2f89a8326077294489e4943');
            const apiResponse = await apiData.json();
            return await updateData(apiResponse);
        };

        const updateData = function(rate){
            return new Promise(resolve => {
                setRate(rate);
                //calculate converted amount
                data.assets.map((asset, key) => {
                    if (typeof rate[asset.symbol] !== "undefined") {
                        convertedAmounts[asset.symbol] = asset.amount * rate[asset.symbol]['EUR'];
                    }
                });
                setConvertedAmounts(convertedAmounts);

                //get total mount
                totalConvertedAmount = Object.keys(convertedAmounts).reduce((sum, key) => sum + (convertedAmounts[key]), 0);
                setTotalConvertedAmount(totalConvertedAmount);

                //get percentage amount
                Object.keys(convertedAmounts).map((key, index) => {
                    percentageAmounts[key] = ((convertedAmounts[key] * 100) / totalConvertedAmount).toFixed(2);
                });
                setPercentageAmounts(percentageAmounts);
                props.addData(percentageAmounts);

                setLoading(true);
            })
        };

        loadData();
        setInterval(loadData, 10000);
    }, []);

    const wallet = data.assets.map((asset, key) => {
        return <ListGroupItem key={"wallet_" + asset.symbol + "_" + key} style={{display: 'flex', justifyContent: 'space-between'}} className="list-group-item">
                    <img src={asset.img} className="logo-img" alt="Cryptocurrency logo"></img>
                    <p>{asset.name}</p>
                    <p>{percentageAmounts[asset.symbol]}%</p>
                    <p>{asset.amount} {asset.symbol}</p>
                    <span><NumberFormat value={convertedAmounts[asset.symbol]} displayType={'text'} decimalScale={2} thousandSeparator={true} suffix={'€'} /></span>
                </ListGroupItem>
    });

    return(

        <div className="App">

            <Nav />

            <div className="header">
                <h4 className="date">{date}, {time}</h4>
                <div className="button-group">
                    <button className="btn buy-btn">Buy Now</button>
                    <button className="btn sale-btn">Sell Now</button>
                </div>

            </div>

            <ListGroup style={{marginTop: '40px'}}>
                <h4>Details</h4>
                <div className="text-group">
                        <h3>Your Wallet</h3>
                        <p style={{paddingTop: '8px'}}>
                            <NumberFormat value={totalConvertedAmount} displayType={'text'} decimalScale={2} thousandSeparator={true} suffix={'€'} />
                        </p>
                </div>
                { loading ?
                (wallet)
                :
                (
                <div style={{margin: "0 auto"}}>
                    <Spinner type="grow" color="warning"/>
                    <Spinner type="grow" color="warning"/>
                    <Spinner type="grow" color="warning"/>
                </div>
                )}

            </ListGroup>

            <Footer />

        </div>
    )
};

function mapDispatchToProps (dispatch) {
    return {
        addData: function(data) {
            dispatch({type: 'addData', data: data})
        }
    }
};

export default connect(
    null, 
    mapDispatchToProps
)(List);