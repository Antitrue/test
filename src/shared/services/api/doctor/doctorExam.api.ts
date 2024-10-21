import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, prepareHeaders } from '../lib';
import { Exception, IGetExam, NewExam, UpdateExam } from './doctorExamDTO';

export const doctorExamApi = createApi({
  reducerPath: 'doctorExamApi',
  tagTypes: ['Exam'],
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}doctor/exam`, prepareHeaders }),
  endpoints: build => ({
    deleteExam: build.mutation<Exception, number>({
      query: examId => ({
        url: `/${examId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Exam'],
    }),
    getExam: build.query<IGetExam, number>({
      query: examId => `/${examId}`,
      providesTags: ['Exam'],
    }),
    getExamPetId: build.query<IGetExam, number>({
      query: petId => ({
        url: '',
        params: {
          petId,
        },
      }),
      providesTags: ['Exam'],
    }),
    addNewExam: build.mutation<IGetExam, NewExam>({
      query: ({ petId, body }) => ({
        url: '',
        method: 'POST',
        params: {
          petId,
        },
        body,
      }),
      invalidatesTags: ['Exam'],
    }),
    updateExam: build.mutation<Exception, UpdateExam>({
      query: ({ examId, body }) => ({
        url: `/${examId}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Exam'],
    }),
  }),
});

export const {
  useDeleteExamMutation,
  useGetExamQuery,
  useGetExamPetIdQuery,
  useAddNewExamMutation,
  useUpdateExamMutation,
} = doctorExamApi;
