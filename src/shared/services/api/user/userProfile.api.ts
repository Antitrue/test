import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl } from '../lib/consts';
import { prepareHeaders } from '../lib/prepareHeadersApi';
import { IUserProfile } from './userProfileDTO';

export const userProfileAPI = createApi({
  reducerPath: 'userProfileAPI',
  tagTypes: ['UserProfile'],
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}user/profile`, prepareHeaders }),
  endpoints: build => ({
    getUserProfile: build.query<IUserProfile, void>({
      query: () => ({
        url: '/',
      }),
      providesTags: ['UserProfile'],
    }),
    updateUserProfile: build.mutation<IUserProfile, IUserProfile>({
      query: body => ({
        url: '/',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['UserProfile'],
    }),
  }),
});

export const { useGetUserProfileQuery, useUpdateUserProfileMutation } = userProfileAPI;
