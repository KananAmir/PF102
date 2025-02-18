"use client"

import { useState, useEffect } from "react"
import { useFormik } from "formik"
import { addNewData, getData } from "../../../services/api"
import { endpoints } from "../../../constants"
import { bookValidationSchema } from "../../../validations/bookValidation"

const AddBook = () => {
  const [genres, setGenres] = useState([])

  const getGenres = async () => {
    try {
      const data = await getData(endpoints.GENRES)
      setGenres(data)
    } catch (error) {
      console.error("Error fetching genres:", error)
    }
  }
  
  useEffect(() => {
    getGenres()
  }, [])

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      price: "",
      description: "",
      stock: "",
      genre: "",
      language: "",
      coverImageURL: "",
    },
    validationSchema: bookValidationSchema,
    onSubmit: async (values) => {
      try {
        const response = await addNewData(endpoints.BOOKS, values)
        console.log(response)
      
        formik.resetForm()
      } catch (error) {
        console.error("Error adding book:", error)
      }
    },
  })

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Book</h2>
      <p className="text-gray-600 mb-6">Enter the details of the new book to add to the library.</p>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {formik.touched.title && formik.errors.title && (
            <p className="mt-1 text-sm text-red-600">{formik.errors.title}</p>
          )}
        </div>

        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            id="author"
            name="author"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.author}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {formik.touched.author && formik.errors.author && (
            <p className="mt-1 text-sm text-red-600">{formik.errors.author}</p>
          )}
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {formik.touched.price && formik.errors.price && (
            <p className="mt-1 text-sm text-red-600">{formik.errors.price}</p>
          )}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            rows="3"
          ></textarea>
          {formik.touched.description && formik.errors.description && (
            <p className="mt-1 text-sm text-red-600">{formik.errors.description}</p>
          )}
        </div>

        <div>
          <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
            Stock
          </label>
          <input
            id="stock"
            name="stock"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.stock}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {formik.touched.stock && formik.errors.stock && (
            <p className="mt-1 text-sm text-red-600">{formik.errors.stock}</p>
          )}
        </div>

        <div>
          <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
            Genre
          </label>
          <select
            id="genre"
            name="genre"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.genre}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option selected disabled>Select a genre</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
          {formik.touched.genre && formik.errors.genre && (
            <p className="mt-1 text-sm text-red-600">{formik.errors.genre}</p>
          )}
        </div>

        <div>
          <label htmlFor="language" className="block text-sm font-medium text-gray-700">
            Language
          </label>
          <input
            id="language"
            name="language"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.language}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {formik.touched.language && formik.errors.language && (
            <p className="mt-1 text-sm text-red-600">{formik.errors.language}</p>
          )}
        </div>

        <div>
          <label htmlFor="coverImageURL" className="block text-sm font-medium text-gray-700">
            Cover Image URL
          </label>
          <input
            id="coverImageURL"
            name="coverImageURL"
            type="url"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.coverImageURL}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {formik.touched.coverImageURL && formik.errors.coverImageURL && (
            <p className="mt-1 text-sm text-red-600">{formik.errors.coverImageURL}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddBook

