import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl, prepareHeaders } from '../lib';

import { TopicsList, Topic, CreateTopic, addCommentToTopic, updateInfoFromTopic } from './topicDTO';
import { IComment } from './userCommentDTO';

export const topicApi = createApi({
  reducerPath: 'topicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/user/topic`,
    prepareHeaders,
  }),
  tagTypes: ['Topic', 'YourTopic'],
  endpoints: builder => ({
    deleteTopic: builder.mutation<void, number>({
      query: topicId => ({
        url: `/${topicId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [
        { type: 'Topic', id: 'Topic-list' },
        { type: 'YourTopic', id: 'YourTopicList' },
      ],
    }),

    getAllTopics: builder.query<TopicsList, void>({
      query: () => ({
        url: '/allTopics',
        method: 'GET',
      }),
      providesTags: result =>
        result
          ? [...result.map(({ id }) => ({ type: 'Topic' as const, id })), { type: 'Topic', id: 'Topic-list' }]
          : [{ type: 'Topic', id: 'Topic-list' }],
    }),

    getAllYourTopics: builder.query<TopicsList, void>({
      query: () => ({
        url: `/yourTopics`,
        method: 'GET',
      }),
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'YourTopic' as const, id })),
              { type: 'YourTopic', id: 'YourTopicList' },
            ]
          : [{ type: 'YourTopic', id: 'YourTopicList' }],
    }),

    getTopicById: builder.query<Topic, number>({
      query: topicId => ({
        url: `/${topicId}`,
        method: 'GET',
      }),
      providesTags: result => [
        { type: 'Topic', id: result?.id },
        { type: 'YourTopic', id: result?.id },
      ],
    }),

    createTopic: builder.mutation<Topic, CreateTopic>({
      query: body => ({
        url: '',
        method: 'POST',
        body,
      }),
      invalidatesTags: [
        { type: 'Topic', id: 'Topic-list' },
        { type: 'YourTopic', id: 'YourTopicList' },
      ],
    }),

    addCommentToTopic: builder.mutation<IComment, addCommentToTopic>({
      query: ({ topicId, body }) => ({
        url: `/${topicId}/addComment`,
        method: 'POST',
        body,
      }),
      invalidatesTags: (_result, _error, { topicId }) => [
        { type: 'Topic', id: topicId },
        { type: 'YourTopic', id: topicId },
      ],
    }),

    updateInfoFromTopic: builder.mutation<Topic, updateInfoFromTopic>({
      query: ({ topicId, body }) => ({
        url: `/${topicId}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: result => [
        { type: 'Topic', id: result?.id },
        { type: 'YourTopic', id: result?.id },
      ],
    }),
  }),
});

export const {
  useDeleteTopicMutation,
  useGetAllTopicsQuery,
  useGetAllYourTopicsQuery,
  useGetTopicByIdQuery,
  useCreateTopicMutation,
  useAddCommentToTopicMutation,
  useUpdateInfoFromTopicMutation,
} = topicApi;
