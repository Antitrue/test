import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, prepareHeaders } from '../lib';
import { IClientAppointment } from './clientAppointmentDTO.ts';

export const clientAppointmentAPI = createApi({
  reducerPath: 'clientAppointmentAPI',
  tagTypes: ['clientAppointment'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}client`,
    prepareHeaders,
  }),
  endpoints: build => ({
    getAppointmentCalendar: build.query<IClientAppointment, void>({
      query: () => ({
        url: '/appointment',
      }),
      providesTags: ['clientAppointment'],
    }),
  }),
});
export const { useGetAppointmentCalendarQuery } = clientAppointmentAPI;
