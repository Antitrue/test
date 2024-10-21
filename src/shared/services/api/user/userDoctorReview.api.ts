import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl, prepareHeaders } from '../lib';
import { DoctorReview } from './userDoctorReviewDTO';

export const userDoctorReviewAPI = createApi({
  reducerPath: 'userDoctorReviewAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl, prepareHeaders }),
  endpoints: build => ({
    getUserDoctorReview: build.query<DoctorReview[], { doctorId: number }>({
      query: ({ doctorId }) => ({
        url: `user/doctor/${doctorId}/review`,
      }),
    }),
  }),
});

export const { useGetUserDoctorReviewQuery } = userDoctorReviewAPI;
