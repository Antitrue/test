import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, prepareHeaders } from '../lib';
import { IPetClient, IPetClientSpecific_1, IPetClientSpecific_2 } from './petClientDTO.ts';

export const petClientAPI = createApi({
  reducerPath: 'petClientApi',
  tagTypes: ['petClient'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}client/`,
    prepareHeaders,
  }),
  endpoints: build => ({
    getAllPets: build.query<IPetClient[], void>({
      query: () => ({
        url: 'pet',
      }),
      providesTags: ['petClient'],
    }),
    getPet: build.query<IPetClient, number>({
      query: petId => ({
        url: `pet/${petId}`,
      }),
      providesTags: ['petClient'],
    }),
    addNewPet: build.mutation<IPetClient, IPetClientSpecific_1>({
      query: body => ({
        url: 'pet',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['petClient'],
    }),
    updatePet: build.mutation<IPetClient, IPetClientSpecific_2>({
      query: ({ petId, body }) => ({
        url: `pet/${petId}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['petClient'],
    }),
    deletePet: build.mutation<string, number>({
      query: petId => ({
        url: `pet/${petId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['petClient'],
    }),
  }),
});
export const { useGetPetQuery, useGetAllPetsQuery, useAddNewPetMutation, useUpdatePetMutation, useDeletePetMutation } =
  petClientAPI;
