export default function (loading = null, action) {

    switch (action.type) {
        case 'setLoading':
            return action.loading;

        default:
            return loading;
    };
};