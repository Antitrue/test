import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl } from '../lib/consts';
import { prepareHeaders } from '../lib/prepareHeadersApi';
import { clientNewsResponse } from './clientNewsDTO';

export const clientNewsAPI = createApi({
  reducerPath: 'clientNewsAPI',
  tagTypes: ['clientNews'],
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl, prepareHeaders }),
  endpoints: build => ({
    getClientNews: build.query<clientNewsResponse[], void>({
      query: () => ({
        url: 'client/news',
        method: 'GET',
      }),
      providesTags: ['clientNews'],
    }),
  }),
});

export const { useGetClientNewsQuery } = clientNewsAPI;
