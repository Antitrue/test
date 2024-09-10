import { authAPI } from '../';
import { clientReviewAPI } from '../api/client/clientReview.api';
import { petContactAPI } from '../api/client/petContact.api';
import { clientNewsAPI } from '../api/client/clientNews.api';

export const middlewares = [authAPI.middleware, clientNewsAPI.middleware, petContactAPI.middleware, clientReviewAPI.middleware];
