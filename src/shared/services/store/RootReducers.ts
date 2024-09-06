import { combineReducers } from '@reduxjs/toolkit';
import { authAPI, authenticationSlice } from '../';
import { petContactAPI } from '../api/client/petContact.api';

const rootReducers = combineReducers({
  authenticationSlice: authenticationSlice.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [petContactAPI.reducerPath]: petContactAPI.reducer,
});

export default rootReducers;
