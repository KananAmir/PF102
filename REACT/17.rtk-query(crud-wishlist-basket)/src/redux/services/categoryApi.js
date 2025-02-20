import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://northwind.vercel.app/api/' }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => `categories`,
    }),
    getCategoryById: builder.query({
      query: (id) => `categories/${id}`,
    }),
    deleteCategoryById: builder.mutation({
      query: (id) => ({
        url: `categories/${id}`,
        method: "DELETE"
      }),
    }),
  }),
})


export const {useGetAllCategoriesQuery, useGetCategoryByIdQuery, useDeleteCategoryByIdMutation} = categoryApi