import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Category } from "../../types"

interface FavoritesState {
  items: Category[]
}

const initialState: FavoritesState = {
  items: [],
}

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, action: PayloadAction<Category>) => {
      const idx = state.items.findIndex((q) => q.id === action.payload.id)
      if (idx === -1) {
        state.items.push(action.payload)
      } else {
        state.items.splice(idx, 1)
      }
    },
    clearAllFavorites: (state) => {
      state.items = []
    },
  },
})

export const { toggleFavorites, clearAllFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer

