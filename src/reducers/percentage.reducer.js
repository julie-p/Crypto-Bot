export default function (percentage = {}, action) {

    switch (action.type) {
        case 'addPercentage':
            return action.percentage;

        default:
            return percentage;
    };
};