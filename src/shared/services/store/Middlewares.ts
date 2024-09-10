import { authAPI } from '../';
import { userCommentAPI } from '../api/user/userComment.api';
import { clientReviewAPI } from '../api/client/clientReview.api';
import { petContactAPI } from '../api/client/petContact.api';
import { clientNewsAPI } from '../api/client/clientNews.api';

export const middlewares = [authAPI.middleware, clientNewsAPI.middleware, petContactAPI.middleware, clientReviewAPI.middleware, userCommentAPI.middleware];
