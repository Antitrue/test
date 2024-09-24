import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { prepareHeaders, baseUrl } from '../lib';
import { IExternalPet } from './externalDTO';

export const externalAPI = createApi({
  reducerPath: 'externalAPI',
  tagTypes: ['external'],
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl, prepareHeaders }),
  endpoints: build => ({
    getExternalProcedureById: build.query<IExternalPet, { id: number }>({
      query: id => ({
        url: `client/procedure/external/${id}`,
      }),
      providesTags: ['external'],
    }),
    getExternalProcedure: build.query<IExternalPet, { id: number }>({
      query: id => ({
        url: `client/procedure/external/?petId=${id}`,
      }),
      providesTags: ['external'],
    }),
    deleteExternalProcedure: build.mutation<IExternalPet, { id: number }>({
      query: id => ({
        url: `client/procedure/external/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['external'],
    }),
    updateExternalProcedure: build.mutation<IExternalPet, { id: number; body: string }>({
      query: ({ id, body }) => ({
        url: `client/procedure/external/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['external'],
    }),
    addExternalProcedure: build.mutation<IExternalPet, { id: number; body: string }>({
      query: ({ id, body }) => ({
        url: `client/procedure/external/?petId=${id}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['external'],
    }),
  }),
});

export const {
  useGetExternalProcedureByIdQuery,
  useGetExternalProcedureQuery,
  useDeleteExternalProcedureMutation,
  useUpdateExternalProcedureMutation,
  useAddExternalProcedureMutation,
} = externalAPI;
