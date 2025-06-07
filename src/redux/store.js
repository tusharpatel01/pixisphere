import { configureStore } from '@reduxjs/toolkit';
import photographersReducer from './photographerSlice';

const store = configureStore({
  reducer: {
    photographers: photographersReducer,
  },
});

export default store;
