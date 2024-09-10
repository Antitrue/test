import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { prepareHeaders } from '../lib/prepareHeadersApi';
import { baseUrl } from '../lib/consts';
import { IComment } from './userCommentDTO';

export const userCommentAPI = createApi({
  reducerPath: 'userCommentApi',
  tagTypes: ['userComment'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}user/comment/`,
    prepareHeaders,
  }),
  endpoints: builder => ({
    deleteComment: builder.mutation<IComment, number>({
      query: id => ({
        url: `${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['userComment'],
    }),
    updateComment: builder.mutation<IComment, { id: number; body: { content: string } }>({
      query: ({ id, body }) => ({
        url: `${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['userComment'],
    }),
    likeComment: builder.mutation<IComment, { id: number; positive: boolean }>({
      query: ({ id, positive }) => ({
        url: `${id}/${positive}`,
        method: 'PUT',
      }),
      invalidatesTags: ['userComment'],
    }),
  }),
});

export const { useDeleteCommentMutation, useUpdateCommentMutation, useLikeCommentMutation } = userCommentAPI;
