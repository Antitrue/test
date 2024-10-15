import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl } from '../lib/consts';
import { prepareHeaders } from '../lib/prepareHeadersApi';
import { IDoctorReview } from './userDoctorReviewDTO';

export const userDoctorReviewAPI = createApi({
  reducerPath: 'userDoctorReviewAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl, prepareHeaders }),
  endpoints: build => ({
    getUserDoctorReview: build.query<IDoctorReview[], { doctorId: number }>({
      query: ({ doctorId }) => ({
        url: `user/doctor/${doctorId}/review`,
      }),
    }),
  }),
});

export const { useGetUserDoctorReviewQuery } = userDoctorReviewAPI;
