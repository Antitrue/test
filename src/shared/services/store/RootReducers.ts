import { combineReducers } from '@reduxjs/toolkit';
import { authAPI, authenticationSlice } from '../';
import { clientReviewAPI } from '../api/client/clientReview.api';

const rootReducers = combineReducers({
  authenticationSlice: authenticationSlice.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [clientReviewAPI.reducerPath]: clientReviewAPI.reducer,
});

export default rootReducers;
