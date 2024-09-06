import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { petContact } from './petContactDTO';
import { prepareHeaders } from '../lib/prepareHeadersApi';
import { baseUrl } from '../lib/consts';

export const petContactAPI = createApi({
  reducerPath: 'petContactAPI',
  tagTypes: ['petContact'],
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl, prepareHeaders }),
  endpoints: build => ({
    getPetContact: build.query<petContact, number>({
      query: id => ({
        url: `client/pet/contact/?petId=${id}`,
        method: 'GET',
      }),
      providesTags: ['petContact'],
    }),
    getPetContactQr: build.query<[string], number>({
      query: id => ({
        url: `client/pet/contact/qr?petId=${id}`,
        method: 'GET',
      }),
      providesTags: ['petContact'],
    }),
    updatePetContact: build.mutation<petContact, { id: number; body: petContact }>({
      query: ({ id, body }) => ({
        url: `client/pet/contact/?petId=${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['petContact'],
    }),
  }),
});

export const { useGetPetContactQuery, useGetPetContactQrQuery, useUpdatePetContactMutation } = petContactAPI;
