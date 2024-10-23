import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, prepareHeaders } from '../lib';
import { DoctorDiagnosis, AddDiagnosis } from './doctorDTO';

export const doctorApi = createApi({
  reducerPath: 'doctorApi',
  tagTypes: ['Doctor'],
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}doctor/pet`, prepareHeaders }),
  endpoints: build => ({
    addDiagnosis: build.mutation<DoctorDiagnosis, AddDiagnosis>({
      query: ({ petId, body }) => ({
        url: `/${petId}/addDiagnosis`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Doctor' }],
    }),
  }),
});

export const { useAddDiagnosisMutation } = doctorApi;