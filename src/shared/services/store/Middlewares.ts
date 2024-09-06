import { authAPI } from '../';
import { clientReviewAPI } from '../api/client/clientReview.api';

export const middlewares = [authAPI.middleware, clientReviewAPI.middleware];
