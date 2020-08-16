export default function (chart = {}, action) {

    switch (action.type) {
        case 'chartData':
            return action.chart;

        default:
            return chart;
    };
};