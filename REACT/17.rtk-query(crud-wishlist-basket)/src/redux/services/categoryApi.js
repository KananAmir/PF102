import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://northwind.vercel.app/api/' }),
  tagTypes: ["Categories", "Category"],
  endpoints: (builder) => ({
    
    getAllCategories: builder.query({
      query: () => `categories`,
      providesTags:["Categories"]
    }),
    getCategoryById: builder.query({
      query: (id) => `categories/${id}`,
      providesTags: (result, error, {id}) => [{ type: 'Category', id }]
    }),
    deleteCategoryById: builder.mutation({
      query: (id) => ({
        url: `categories/${id}`,
        method: "DELETE"
      }),
      invalidatesTags:["Categories"]
    }),
    addNewCategory: builder.mutation({
      query: (payload) => ({
        url: `categories`,
        method: "POST",
        body: payload
      }),
      invalidatesTags:["Categories"]
    }),
    editCategory: builder.mutation({
      query: ({id, category}) => ({
        url: `categories/${id}`,
        method: "PATCH",
        body: category
      }),
      invalidatesTags:["Categories"]

    }),
  }),
})


export const {useGetAllCategoriesQuery, useGetCategoryByIdQuery, useDeleteCategoryByIdMutation, useAddNewCategoryMutation, useEditCategoryMutation} = categoryApi