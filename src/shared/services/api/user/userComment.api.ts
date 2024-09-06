import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IComment } from './userCommentDTO';

const TOKEN = 'TOKEN';

export const userCommentAPI = createApi({
  reducerPath: 'userCommentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/api/user/comment/',
    prepareHeaders: headers => {
      headers.set('authorization', `Bearer ${TOKEN}`);
      headers.set('accept', 'application/json');
      headers.set('Content-Type', 'application/json');

      return headers;
    },
  }),
  endpoints: builder => ({
    deleteComment: builder.mutation<IComment, string>({
      query: id => ({
        url: id,
        method: 'DELETE',
      }),
    }),
    updateComment: builder.mutation<IComment, { id: string; body: { content: string } }>({
      query: ({ id, body }) => ({
        url: id,
        method: 'PUT',
        body,
      }),
    }),
    likeComment: builder.mutation<IComment, { id: string; positive: boolean }>({
      query: ({ id, positive }) => ({
        url: `${id}/${positive}`,
        method: 'PUT',
      }),
    }),
  }),
});

export const { useDeleteCommentMutation, useUpdateCommentMutation, useLikeCommentMutation } = userCommentAPI;
