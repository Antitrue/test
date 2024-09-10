import { combineReducers } from '@reduxjs/toolkit';
import { authAPI, authenticationSlice } from '../';
import { clientNewsAPI } from '../api/client/clientNews.api';

const rootReducers = combineReducers({
  authenticationSlice: authenticationSlice.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [clientNewsAPI.reducerPath]: clientNewsAPI.reducer,
});

export default rootReducers;
