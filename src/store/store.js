import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        // Add other reducers here if any
    },
});

export default store;