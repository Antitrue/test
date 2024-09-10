import { authAPI } from '../';
import { petContactAPI } from '../api/client/petContact.api';
import { clientNewsAPI } from '../api/client/clientNews.api';

export const middlewares = [authAPI.middleware, clientNewsAPI.middleware, petContactAPI.middleware];
