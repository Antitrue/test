import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, prepareHeaders } from '../lib';
import { UserProfile } from './userProfileDTO';

export const userProfileAPI = createApi({
  reducerPath: 'userProfileAPI',
  tagTypes: ['UserProfile'],
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}user/profile`, prepareHeaders }),
  endpoints: build => ({
    getUserProfile: build.query<UserProfile, void>({
      query: () => ({
        url: '/',
      }),
      providesTags: ['UserProfile'],
    }),
    updateUserProfile: build.mutation<UserProfile, UserProfile>({
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
