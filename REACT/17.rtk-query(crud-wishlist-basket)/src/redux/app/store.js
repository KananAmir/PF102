import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { categoryApi } from '../services/categoryApi'
import favoritesReducer from "../features/favoritesSlice"
export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        // Add the generated reducer as a specific top-level slice
        [categoryApi.reducerPath]: categoryApi.reducer,
      },
      // Adding the api middleware enables caching, invalidation, polling,
      // and other useful features of `rtk-query`.
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(categoryApi.middleware),
})

setupListeners(store.dispatch)
