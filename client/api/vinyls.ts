import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Vinyl } from '../../models'

export const vinylApi = createApi({
  reducerPath: 'vinylApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1/' }),
  endpoints: (builder) => ({
    getVinyls: builder.query<Vinyl[], void>({
      query: () => 'vinyls'
    })
  })
})

export const { useGetVinylsQuery } = vinylApi
