// features/modal/modalSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Vinyl } from '../../models'

interface ModalState {
  isOpen: boolean
  selectedVinyl: Vinyl | null
}

const initialState: ModalState = {
  isOpen: false,
  selectedVinyl: null,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {

    openModal: (state, action: PayloadAction<Vinyl>) => {
      state.isOpen = true
      state.selectedVinyl = action.payload
    },

    closeModal: (state) => {
      state.isOpen = false
      state.selectedVinyl = null
    },

  },
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
