import { authAPI } from '../';
import { petContactAPI } from '../api/client/petContact.api';

export const middlewares = [authAPI.middleware, petContactAPI.middleware];
