import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
  category: {},
  loading: false,
  error: null,
};

// get all categories
export const fetchData = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axios.get(
      "https://northwind.vercel.app/api/categories"
    );
    return response.data;
  }
);

// get category by id
export const fetchByID = createAsyncThunk(
  "categories/fetchByID",
  async (id) => {
    const res = await axios.get(
      `https://northwind.vercel.app/api/categories/${id}`
    );
    return res.data;
  }
);

// create a new category
export const createCategory = createAsyncThunk(
  "categories/createCategory",
  async (category) => {
    const response = await axios.post(
      "https://northwind.vercel.app/api/categories",
      category
    );
    return response.data;
  }
);

// update a category
export const updateCategory = createAsyncThunk(
  "categories/updateCategory",
  async ({ id, category }) => {
    const response = await axios.put(
      `https://northwind.vercel.app/api/categories/${id}`,
      category
    );
    return response.data;
  }
);

// delete a category
export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (id) => {
    await axios.delete(`https://northwind.vercel.app/api/categories/${id}`);
    return id;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchByID.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchByID.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload;
      })
      .addCase(fetchByID.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.categories.findIndex(
          (category) => category.id === action.payload.id
        );
        state.categories[index] = action.payload;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(
          (category) => category.id !== action.payload
        );
      });
  },
});

export default categorySlice.reducer;
