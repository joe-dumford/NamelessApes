import { configureStore } from 'redux';

import globalReducer from './store/global/global.reducer';



const configStore = () => {
    return configureStore(
        globalReducer,
    );
};

export default configStore;
