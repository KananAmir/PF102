"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useEditCategoryMutation, useGetCategoryByIdQuery } from "../../redux/app/services/categoryApi"
import { useNavigate, useParams } from "react-router-dom"
import type { CategoryFormData } from "../../types"

const EditCategory = () => {
  const [category, setCategory] = useState<CategoryFormData>({
    name: "",
    description: "",
  })

  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const { data, isLoading } = useGetCategoryByIdQuery(id || "")
  const [editCategory] = useEditCategoryMutation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!id) return

    try {
      await editCategory({ id, category })
      navigate("/")
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (data) {
      setCategory({
        name: data.name,
        description: data.description,
      })
    }
  }, [data])

  if (isLoading) {
    return <p className="flex justify-center py-8">Loading...</p>
  }

  return (
    <div className="container mx-auto py-8">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Edit Category</h3>
      <form className="max-w-md mx-auto flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={category.name}
          onChange={(e) => {
            setCategory({ ...category, name: e.target.value })
          }}
        />
        <input
          type="text"
          placeholder="Description"
          className="px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={category.description}
          onChange={(e) => {
            setCategory({ ...category, description: e.target.value })
          }}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
        >
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default EditCategory

