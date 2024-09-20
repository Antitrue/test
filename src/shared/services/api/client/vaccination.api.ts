import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, prepareHeaders } from '../lib';
import { IAddProcedure, IUpdateProcedure, IVac } from './vaccinationDTO.ts';

export const vaccinationApi = createApi({
  reducerPath: 'vaccinationApi',
  tagTypes: ['vaccination'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/client/procedure`,
    prepareHeaders,
  }),
  endpoints: build => ({
    getAllVaccinations: build.query<IVac, number>({
      query: id => ({
        url: 'vaccination',
        params: {
          petId: id,
        },
      }),
      providesTags: ['vaccination'],
    }),
    getVaccination: build.query<IVac, number>({
      query: id => ({
        url: `vaccination/${id}`,
      }),
      providesTags: ['vaccination'],
    }),
    addProcedure: build.mutation<IVac, IAddProcedure>({
      query: ({ petId, body }) => ({
        url: 'vaccination',
        method: 'POST',
        params: {
          petId: petId,
        },
        body,
      }),
      invalidatesTags: ['vaccination'],
    }),
    updateProcedure: build.mutation<IVac, IUpdateProcedure>({
      query: ({ id, body }) => ({
        url: `vaccination/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['vaccination'],
    }),
    deleteProcedure: build.mutation<IVac, number>({
      query: id => ({
        url: `vaccination/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['vaccination'],
    }),
  }),
});
// const { useDeleteProcedureMutation, useAddProcedureMutation, useUpdateProcedureMutation, useGetVaccinationQuery, useGetAllVaccinationsQuery } =
//   vaccinationApi;
