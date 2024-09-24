import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, prepareHeaders } from '../lib';
import { IAddRep, IReproduction, IReproductionIds, IUpdateRep } from './reproductionDTO.ts';

export const reproductionAPI = createApi({
  reducerPath: 'reproductionApi',
  tagTypes: ['reproduction'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}client/pet`,
    prepareHeaders,
  }),
  endpoints: build => ({
    getAllReproduction: build.query<IReproduction[], number>({
      query: petId => ({
        url: `/${petId}/reproduction`,
      }),
      providesTags: ['reproduction'],
    }),
    getReproduction: build.query<IReproduction, IReproductionIds>({
      query: ({ petId, repId }) => ({
        url: `/${petId}/reproduction/${repId}`,
      }),
      providesTags: ['reproduction'],
    }),
    addReproduction: build.mutation<IReproduction, IAddRep>({
      query: ({ petId, body }) => ({
        url: `/${petId}/reproduction`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['reproduction'],
    }),
    updateReproduction: build.mutation<IReproduction, IUpdateRep>({
      query: ({ petId, repId, body }) => ({
        url: `/${petId}/reproduction/${repId}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['reproduction'],
    }),
    removeReproduction: build.mutation<void, IReproductionIds>({
      query: ({ petId, repId }) => ({
        url: `/${petId}/reproduction/${repId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['reproduction'],
    }),
  }),
});
export const {
  useGetAllReproductionQuery,
  useGetReproductionQuery,
  useAddReproductionMutation,
  useUpdateReproductionMutation,
  useRemoveReproductionMutation,
} = reproductionAPI;
