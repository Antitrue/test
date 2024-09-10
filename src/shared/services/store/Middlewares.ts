import { authAPI } from '../';
import { clientNewsAPI } from '../api/client/clientNews.api';

export const middlewares = [authAPI.middleware, clientNewsAPI.middleware];
