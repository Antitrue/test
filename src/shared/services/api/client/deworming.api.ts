import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { prepareHeaders, baseUrl } from '../lib';
import { IPetId } from './dewormingDTO';

export const dewormingAPI = createApi({
  reducerPath: 'dewormingAPI',
  tagTypes: ['deworming'],
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl, prepareHeaders }),
  endpoints: build => ({
    getDewormingByPet: build.query<IPetId, { id: number }>({
      query: id => ({
        url: `client/procedure/deworming?petId=${id}`,
      }),
      providesTags: ['deworming'],
    }),
    getDewormingByID: build.query<IPetId, { id: number }>({
      query: id => ({
        url: `client/procedure/deworming/${id}`,
      }),
      providesTags: ['deworming'],
    }),
    deleteDewormingByID: build.mutation<IPetId, { id: number }>({
      query: id => ({
        url: `client/procedure/deworming/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['deworming'],
    }),
    updateDewormingProcedure: build.mutation<IPetId, { id: number; body: string }>({
      query: ({ id, body }) => ({
        url: `client/procedure/deworming/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['deworming'],
    }),
    addDewormingProcedure: build.mutation<IPetId, { id: number; body: string }>({
      query: ({ id, body }) => ({
        url: `client/procedure/deworming?petId=${id}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['deworming'],
    }),
  }),
});

export const {
  useGetDewormingByPetQuery,
  useGetDewormingByIDQuery,
  useDeleteDewormingByIDMutation,
  useUpdateDewormingProcedureMutation,
  useAddDewormingProcedureMutation,
} = dewormingAPI;
