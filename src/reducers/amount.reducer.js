export default function (amount = {}, action) {

    switch (action.type) {
        case 'convertedAmounts':
            return action.amount;

        default:
            return amount;
    };
};