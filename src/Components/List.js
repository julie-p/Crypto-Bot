import React from 'react';
import '../styles/list.css';
import data from '../data';
import { ListGroup, ListGroupItem } from 'reactstrap';
import NumberFormat from 'react-number-format';

import { connect } from 'react-redux';

function List(props) {

    const wallet = data.assets.map((asset, key) => {
        return  <ListGroupItem key={"wallet_" + asset.symbol + "_" + key} className="list-group-item">
                    <img src={asset.img} className="logo-img" alt="Cryptocurrency logo"></img>
                    <p>{asset.name}</p>
                    <p>{props.data[asset.symbol]}%</p>
                    <p>{asset.amount} {asset.symbol}</p>
                    <span>
                        <NumberFormat value={props.amount[asset.symbol]} displayType={'text'} decimalScale={2} thousandSeparator={true} suffix={'€'} />
                    </span>
                </ListGroupItem>
    });

    return (
        <div>

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

        </div>
    )
};

function mapStateToProps(state) {
    return {
        data: state.data, 
        total: state.total, 
        amount: state.amount
    }
};

export default connect(
    mapStateToProps, 
    null
)(List);