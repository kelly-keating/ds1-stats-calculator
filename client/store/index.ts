import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { vinylApi } from '../api/vinyls'

export const store = configureStore({
  reducer: {
    [vinylApi.reducerPath]: vinylApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(vinylApi.middleware),
})

setupListeners(store.dispatch)
