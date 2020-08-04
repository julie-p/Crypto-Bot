export default function (data = {}, action) {

    switch (action.type) {
        case 'addData':
            return action.data;

        default:
            return data;
    };
};