import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, prepareHeaders } from '../lib';
import { IException, IGetExam, INewExam, IUpdateExam } from './doctorExamDTO';

export const doctorExamApi = createApi({
  reducerPath: 'doctorExamApi',
  tagTypes: ['Exam'],
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}doctor/exam`, prepareHeaders }),
  endpoints: build => ({
    deleteExam: build.mutation<IException, number>({
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
    addNewExam: build.mutation<IGetExam, INewExam>({
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
    updateExam: build.mutation<IException, IUpdateExam>({
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
