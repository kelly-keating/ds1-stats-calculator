import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Vinyl } from '../../models'

export const vinylApi = createApi({
  reducerPath: 'vinylApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.BASE_URL + 'api/v1/' }),
  tagTypes: ['Vinyls'],
  
  endpoints: (builder) => ({
    getVinyls: builder.query<Vinyl[], void>({
      query: () => 'vinyls',
      providesTags: ['Vinyls'],
    }),

    createVinyl: builder.mutation<Vinyl, Omit<Vinyl, 'id'>>({
      query: ({ artist, title, image }) => ({
        url: 'vinyls',
        method: 'POST',
        body: { artist, title, image },
      }),
      invalidatesTags: ['Vinyls'],
    }),

    updateVinyl: builder.mutation<Vinyl, {id: number, newDetails: Vinyl}>({
      query: ({id, newDetails}) => ({
        url: 'vinyls/' + id,
        method: 'PUT',
        body: { ...newDetails }
      }),
      invalidatesTags: ['Vinyls'],
    }),

    deleteVinyl: builder.mutation({
      query: (id) => ({
        url: 'vinyls/' + id,
        method: 'DELETE',
      }),
      invalidatesTags: ['Vinyls'],
    }),
  })
})

export const {
  useGetVinylsQuery,
  useCreateVinylMutation,
  useUpdateVinylMutation,
  useDeleteVinylMutation,
} = vinylApi
