import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice/category.slice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});
