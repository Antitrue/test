import { authAPI } from '../';
import { userCommentAPI } from '../api/user/userComment.api';
import { clientReviewAPI } from '../api/client/clientReview.api';
import { clientNewsAPI } from '../api/client/clientNews.api';
import { topicApi } from '../api/user/topic.api';
import { externalAPI } from '../api/client/external.api';
import { reproductionAPI } from '../api/client/reproduction.api.ts';
import { dewormingAPI } from '../api/client/deworming.api';
import { clientAPI } from '../api/client/client.api';
import { petClientAPI } from '../api/client/petClient.api.ts';
import { vaccinationApi } from '../api/client/vaccination.api.ts';
import { clientAppointmentAPI } from '../api/client/clientAppointment.api.ts';
import { userDoctorReviewAPI } from '../api/user/userDoctorReview.api.ts';
import { userProfileAPI } from '../api/user/userProfile.api.ts';

export const middlewares = [
  authAPI.middleware,
  clientNewsAPI.middleware,
  clientReviewAPI.middleware,
  userCommentAPI.middleware,
  topicApi.middleware,
  externalAPI.middleware,
  reproductionAPI.middleware,
  dewormingAPI.middleware,
  clientAPI.middleware,
  petClientAPI.middleware,
  vaccinationApi.middleware,
  clientAppointmentAPI.middleware,
  userDoctorReviewAPI.middleware,
  userProfileAPI.middleware,
];
