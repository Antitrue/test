import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl, prepareHeaders } from '../lib';
import { IClientAvatar, IClientWithPets } from './clientDTO';

export const clientAPI = createApi({
  reducerPath: 'clientAPI',
  tagTypes: ['client'],
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl, prepareHeaders }),
  endpoints: build => ({
    getClientAvatar: build.query<string[], string>({
      query: () => ({
        url: 'client/avatar',
      }),
      providesTags: ['client'],
    }),
    getClientWithPets: build.query<IClientWithPets, void>({
      query: () => ({
        url: 'client',
      }),
      providesTags: ['client'],
    }),
    uploadClientAvatar: build.mutation<IClientAvatar, string>({
      query: file => {
        const formData = new FormData();
        formData.append('file', file);
        return {
          url: 'client/avatar',
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data;',
          },
          body: { formData },
          formData: true,
        };
      },
      invalidatesTags: ['client'],
    }),
  }),
});

export const { useGetClientAvatarQuery, useGetClientWithPetsQuery, useUploadClientAvatarMutation } = clientAPI;
