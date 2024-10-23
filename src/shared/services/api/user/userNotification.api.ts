import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../lib';
import { NotificationDTO } from './userNotificationDTO';

export const userNotificationApi = createApi({
  reducerPath: 'userNotificationAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    getUserNotification: builder.query<NotificationDTO, number>({
      query: (notificationId) => `/user/notification/${notificationId}`,
    }),
  }),
});

export const { useGetUserNotificationQuery } = userNotificationApi;
