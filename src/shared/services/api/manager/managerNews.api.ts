import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { baseUrl, prepareHeaders } from '../lib';
import { INews } from './managerNewsApiDTO';

const baseNewsApiPath = 'manager/news';

export const managerNewsApi = createApi({
  reducerPath: 'managerNewsApi',
  tagTypes: ['news'],
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl, prepareHeaders }),
  endpoints: build => ({
    getNews: build.query<INews[] | INews, number | null>({
      query: id => ({
        url: baseNewsApiPath + `${id ? `/${id}` : ''}`,
      }),
      providesTags: ['news'],
    }),
    createNews: build.mutation<void, Omit<INews, 'id' | 'pictures' | 'published'>>({
      query: news => ({
        url: baseNewsApiPath,
        method: 'POST',
        body: JSON.stringify(news),
      }),
      invalidatesTags: ['news'],
    }),
    updateNews: build.mutation<void, [number, Omit<INews, 'id' | 'pictures' | 'published'>]>({
      query: ([id, news]) => ({
        url: `${baseNewsApiPath}/${id}`,
        method: 'PUT',
        body: JSON.stringify(news),
      }),
      invalidatesTags: ['news'],
    }),
    deleteNews: build.mutation<void, number>({
      query: id => ({
        url: baseNewsApiPath + `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['news'],
    }),
    addImgToNews: build.mutation<void, [number, string[]]>({
      query: ([id, imgs]) => ({
        url: `${baseNewsApiPath}/${id}/pictures/`,
        method: 'PUT',
        body: JSON.stringify(imgs),
      }),
      invalidatesTags: ['news'],
    }),
    publishNews: build.mutation<void, string[]>({
      query: idArr => ({
        url: `${baseNewsApiPath}/publish`,
        method: 'PUT',
        body: JSON.stringify(idArr),
      }),
      invalidatesTags: ['news'],
    }),
    UnPublishNews: build.mutation<void, string[]>({
      query: idArr => ({
        url: `${baseNewsApiPath}/unpublish`,
        method: 'PUT',
        body: JSON.stringify(idArr),
      }),
      invalidatesTags: ['news'],
    }),
  }),
});

export const {
  useGetNewsQuery,
  useCreateNewsMutation,
  useUpdateNewsMutation,
  useDeleteNewsMutation,
  useAddImgToNewsMutation,
  usePublishNewsMutation,
  useUnPublishNewsMutation,
} = managerNewsApi;
