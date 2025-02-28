import { useNavigate, useParams } from "react-router-dom"
import { useGetCategoryByIdQuery } from "../../redux/app/services/categoryApi"

const CategoryDetails = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const { data: category, isError, isLoading } = useGetCategoryByIdQuery(id || "")

  const handleGoBack = () => {
    navigate("/")
  }

  if (isLoading) {
    return <p className="flex justify-center py-8">Loading...</p>
  }

  if (isError || !category) {
    return <p className="flex justify-center py-8 text-red-500">An error occurred!</p>
  }

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Category Details</h2>
          <div className="mb-4">
            <p className="text-gray-700 font-semibold">ID:</p>
            <p className="text-gray-900">{category.id}</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-700 font-semibold">Name:</p>
            <p className="text-gray-900">{category.name}</p>
          </div>
          <div className="mb-6">
            <p className="text-gray-700 font-semibold">Description:</p>
            <p className="text-gray-900">{category.description}</p>
          </div>
          <button
            onClick={handleGoBack}
            className="w-full py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default CategoryDetails

