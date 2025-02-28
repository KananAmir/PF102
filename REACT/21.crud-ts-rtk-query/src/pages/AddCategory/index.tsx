import type React from "react"
import { useState } from "react"
import type { CategoryFormData } from "../../types"
import { useAddNewCategoryMutation } from "../../redux/app/services/categoryApi"

const AddCategory = () => {
  const [category, setCategory] = useState<CategoryFormData>({
    name: "",
    description: "",
  })

  const [addCategory] = useAddNewCategoryMutation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (category.name && category.description) {
      await addCategory(category)
      // Reset form after submission
      setCategory({ name: "", description: "" })
    } else {
      window.alert("Please fill all inputs!")
    }
  }

  return (
    <div className="container mx-auto py-8">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Add Category</h3>
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
          className="px-4 py-2 bg-blue-600 text-black rounded-md hover:bg-blue-700 transition-colors"
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default AddCategory

