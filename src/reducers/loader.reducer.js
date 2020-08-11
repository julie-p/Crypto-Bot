export default function (loading = null, action) {

    switch (action.type) {
        case 'isLoaded':
            return action.loading;

        default:
            return loading;
    };
};