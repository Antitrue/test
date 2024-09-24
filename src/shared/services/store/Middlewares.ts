import { authAPI } from '../';
import { userCommentAPI } from '../api/user/userComment.api';
import { clientReviewAPI } from '../api/client/clientReview.api';
import { petContactAPI } from '../api/client/petContact.api';
import { clientNewsAPI } from '../api/client/clientNews.api';
import { topicApi } from '../api/user/topic.api';
import { reproductionAPI } from '../api/client/reproduction.api.ts';

export const middlewares = [
  authAPI.middleware,
  clientNewsAPI.middleware,
  petContactAPI.middleware,
  clientReviewAPI.middleware,
  userCommentAPI.middleware,
  topicApi.middleware,
  reproductionAPI.middleware,
];
