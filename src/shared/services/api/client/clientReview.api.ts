import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { prepareHeaders } from '../lib/prepareHeadersApi';
import { baseUrl } from '../lib/consts';
import { IClientReview } from './clientReviewDTO';

export const clientReviewAPI = createApi({
  reducerPath: 'clientReviewApi',
  tagTypes: ['clientReview'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}client/doctor/`,
    prepareHeaders,
  }),
  endpoints: builder => ({
    deleteClientReview: builder.mutation<IClientReview, number>({
      query: id => ({
        url: `${id}/review`,
        method: 'DELETE',
      }),
      invalidatesTags: ['clientReview'],
    }),
    getClientReview: builder.query<IClientReview, number>({
      query: id => ({
        url: `${id}/review`,
      }),
      providesTags: ['clientReview'],
    }),
    addClientReview: builder.mutation<IClientReview, { id: number; text: string }>({
      query: ({ id, text }) => ({
        url: `${id}/review?text=${text}`,
        method: 'POST',
      }),
      invalidatesTags: ['clientReview'],
    }),
    updateClientReview: builder.mutation<IClientReview, { id: number; body: string }>({
      query: ({ id, body }) => ({
        url: `${id}/review`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['clientReview'],
    }),
  }),
});

export const {
  useDeleteClientReviewMutation,
  useGetClientReviewQuery,
  useAddClientReviewMutation,
  useUpdateClientReviewMutation,
} = clientReviewAPI;
