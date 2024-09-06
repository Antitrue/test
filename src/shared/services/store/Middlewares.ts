import { authAPI } from '../';
import { userCommentAPI } from '../api/user/userComment.api';

export const middlewares = [authAPI.middleware, userCommentAPI.middleware];
