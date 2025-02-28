import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Category, CategoryFormData } from "../../../types";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://northwind.vercel.app/api/" }),
  tagTypes: ["Categories", "Category"],
  endpoints: (builder) => ({
    getAllCategories: builder.query<Category[], void>({
      query: () => `categories`,
      providesTags: ["Categories"],
    }),
    getCategoryById: builder.query<Category, number | string>({
      query: (id) => `categories/${id}`,
      providesTags: (result, error, id) => [{ type: "Category", id }],
    }),
    deleteCategoryById: builder.mutation<void, number | string>({
      query: (id) => ({
        url: `categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),
    addNewCategory: builder.mutation<Category, CategoryFormData>({
      query: (payload) => ({
        url: `categories`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Categories"],
    }),
    editCategory: builder.mutation<Category, { id: number | string; category: CategoryFormData }>({
      query: ({ id, category }) => ({
        url: `categories/${id}`,
        method: "PATCH",
        body: category,
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
})

export const {
  useGetAllCategoriesQuery,
  useGetCategoryByIdQuery,
  useDeleteCategoryByIdMutation,
  useAddNewCategoryMutation,
  useEditCategoryMutation,
} = categoryApi

