import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import Card from '../models/ICard';

export const charactersApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (build) => ({
    fetchAllCharacters: build.query<{ info: string; results: Card[] }, string>({
      query: (name: string) => ({
        url: '/character',
        params: {
          name,
        },
      }),
    }),
  }),
});
