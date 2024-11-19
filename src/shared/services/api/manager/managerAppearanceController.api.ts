import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { baseUrl, prepareHeaders } from '../lib';

const apiColorPath = 'manager/appearance/color';
const apiBreedPath = 'manager/appearance/breed';

export const managerAppearenceControllerApi = createApi({
  reducerPath: 'managerAppearenceControllerApi',
  tagTypes: ['breeds', 'color'],
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl, prepareHeaders }),
  endpoints: build => ({
    getColor: build.query<string[], string | null>({
      query: color => ({
        url: apiColorPath + `${color ? `?color=${color}` : ''}`,
      }),
      providesTags: ['color'],
    }),
    getBreed: build.query<string[], string | null>({
      query: breeds => ({
        url: apiBreedPath + `${breeds ? `?breed=${breeds}` : ''}`,
      }),
      providesTags: ['color'],
    }),
    addColor: build.mutation<void, string[]>({
      query: colors => ({
        url: apiColorPath,
        method: 'POST',
        body: JSON.stringify(colors),
      }),
      invalidatesTags: ['color'],
    }),
    deleteColor: build.mutation<void, string[]>({
      query: colors => ({
        url: apiColorPath,
        method: 'DELETE',
        body: JSON.stringify(colors),
      }),
      invalidatesTags: ['breeds'],
    }),
    addBreed: build.mutation<void, string[]>({
      query: breeds => ({
        url: apiBreedPath + '?petType=CAT',
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(breeds),
      }),
      invalidatesTags: ['breeds'],
    }),
    deleteBreed: build.mutation<void, string[]>({
      query: breeds => ({
        url: apiBreedPath + '?petType=CAT',
        method: 'DELETE',
        body: JSON.stringify(breeds),
      }),
      invalidatesTags: ['breeds'],
    }),
  }),
});

export const { useGetColorQuery, useGetBreedQuery, useAddBreedMutation, useDeleteBreedMutation } =
  managerAppearenceControllerApi;
