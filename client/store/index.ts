import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { vinylApi } from '../api/vinyls'
import modalReducer from './modalSlice'

export const store = configureStore({
  reducer: {
    [vinylApi.reducerPath]: vinylApi.reducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(vinylApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

setupListeners(store.dispatch)
