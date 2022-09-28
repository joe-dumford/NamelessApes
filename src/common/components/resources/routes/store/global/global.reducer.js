import globalState from './global.state';
import { STORE_INIT_CONTAINER } from './global.constants';

const initState = globalState;

const reducer = (state = initState, action) => {
    const { payload, type} = action || {};

    switch (type) {
        case STORE_INIT_CONTAINER:
            return { ...state, initContainer: payload };
        default:
            return state;
    }
};

export default reducer;
