import React, { useState, useEffect } from 'react';
import '../styles/list.css';
import data from '../data';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import { ListGroup, ListGroupItem, Spinner } from 'reactstrap';
import NumberFormat from 'react-number-format';

function List() {

    const today = new Date();
    const date = today.toLocaleDateString("en-EN");
    const time = today.toLocaleTimeString("en-EN");
    
    const [ rate, setRate ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    
    useEffect(() => {
        const loadData = async () => {
            const apiData = await fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DASH,BAT,USDC&tsyms=EUR&api_key=0ea99a120eeb7ed913b4b514ab9a535a758670fec27d574ee306aa633c59420d');
            const apiResponse = await apiData.json();
            setRate(apiResponse);
            setLoading(true);
        }
        loadData();
        /* setInterval(loadData, 10000); */ 
    }, []);

    let amountEach = [];
    let totalWallet = [];

    const convertedAmount = function(asset) {
        let toReturn;
        if (typeof rate[asset.symbol] !== "undefined") {
            let useThisRate = rate[asset.symbol];
            toReturn = asset.amount * useThisRate.EUR;
            amountEach.push(toReturn);
        }

        if (typeof toReturn !== "undefined") {
            return <span><NumberFormat value={toReturn} displayType={'text'} decimalScale={2} thousandSeparator={true} suffix={'€'} /></span>
        }
    };

    const totalAmount = function(obj) {
        let total = Object.keys(obj).reduce((sum, key) => sum + (obj[key]), 0);
        totalWallet.push(total);
        return total;
    };

    const totalPercentage = function(amountEach, totalWallet) {
        console.log(amountEach);
      	console.log(typeof amountEach);
      	console.log(totalWallet);
        console.log(typeof totalWallet);
      	console.log(Math.round((amountEach * 100) / totalWallet));
        return Math.round((amountEach * 100) / totalWallet);
    };

    const wallet = data.assets.map((asset, key) => {
        return <ListGroupItem style={{display: 'flex', justifyContent: 'space-between'}} className="list-group-item">
                    <img src={asset.img} className="logo-img" alt="Cryptocurrency logo"></img>
                    <p>{asset.name}</p>
                    <p>{totalPercentage(amountEach, totalWallet)} %</p>
                    <p>{asset.amount} {asset.symbol}</p>
                    {convertedAmount(asset)}
                </ListGroupItem> 
    });

    console.log(Object.keys(amountEach).length)
    console.log(Object.keys(totalWallet).length)

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
                            <NumberFormat value={totalAmount(amountEach)} displayType={'text'} decimalScale={2} thousandSeparator={true} suffix={'€'} />
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

export default List;