import { combineReducers } from '@reduxjs/toolkit';
import { authAPI, authenticationSlice } from '../';

const rootReducers = combineReducers({
  authenticationSlice: authenticationSlice.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
});

export default rootReducers;
