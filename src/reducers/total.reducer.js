export default function (total = 0, action) {

    switch (action.type) {
        case 'addTotal':
            return action.total;

        default:
            return total;
    };
};