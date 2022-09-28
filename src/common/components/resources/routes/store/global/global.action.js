import { STORE_INIT_CONTAINER } from './global.constants';

export const storeInitContainer = (data) => ({
    type: STORE_INIT_CONTAINER,
    payload: data,
});
