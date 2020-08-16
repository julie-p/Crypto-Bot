import React from 'react';
import { Pie } from 'react-chartjs-2';
import NumberFormat from 'react-number-format';

import { connect } from 'react-redux';

function DisplayChart(props) {

    return (
        <div className="overview">

            <h4>Overview</h4>

            <div className="text-group">
                <h3>Your Wallet</h3>
                <p>
                    <NumberFormat value={props.total} displayType={'text'} decimalScale={2} thousandSeparator={true} suffix={'€'} />
                </p>
            </div>

            <div className="chart-data">
                <Pie data={props.chart} />
            </div>

        </div>
    )
};

function mapStateToProps(state) {
    return {
        chart: state.chart,
        total: state.total
    }
};

export default connect(
    mapStateToProps,
    null
)(DisplayChart);