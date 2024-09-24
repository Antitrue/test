import { combineReducers } from '@reduxjs/toolkit';
import { authAPI, authenticationSlice } from '../';
import { userCommentAPI } from '../api/user/userComment.api';
import { clientReviewAPI } from '../api/client/clientReview.api';
import { petContactAPI } from '../api/client/petContact.api';
import { clientNewsAPI } from '../api/client/clientNews.api';
import { topicApi } from '../api/user/topic.api';
import { reproductionAPI } from '../api/client/reproduction.api.ts';
import { dewormingAPI } from '../api/client/deworming.api';
import { clientAPI } from '../api/client/client.api';
import { petClientAPI } from '../api/client/petClient.api';
import { vaccinationApi } from '../api/client/vaccination.api';

const rootReducers = combineReducers({
  authenticationSlice: authenticationSlice.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [userCommentAPI.reducerPath]: userCommentAPI.reducer,
  [clientReviewAPI.reducerPath]: clientReviewAPI.reducer,
  [petContactAPI.reducerPath]: petContactAPI.reducer,
  [clientNewsAPI.reducerPath]: clientNewsAPI.reducer,
  [topicApi.reducerPath]: topicApi.reducer,
  [reproductionAPI.reducerPath]: reproductionAPI.reducer,
  [dewormingAPI.reducerPath]: dewormingAPI.reducer,
  [clientAPI.reducerPath]: clientAPI.reducer,
  [petClientAPI.reducerPath]: petClientAPI.reducer,
  [vaccinationApi.reducerPath]: vaccinationApi.reducer,
});

export default rootReducers;
