import { Link } from "react-router-dom"
import { useDeleteCategoryByIdMutation, useGetAllCategoriesQuery } from "../../redux/services/categoryApi"
import { toggleFavorites } from "../../redux/features/favoritesSlice"
import { useDispatch } from "react-redux"

const Categories = () => {
  const { data, isError, isLoading, refetch } = useGetAllCategoriesQuery()
const [deleteData, response] = useDeleteCategoryByIdMutation()
const dispatch = useDispatch()
  const handleDelete = async (id)=>{
    await deleteData(id)
    refetch()
  }
  const handleFavorites =  (category)=>{
   dispatch(toggleFavorites(category))
   
  }
  if (isLoading) {
    return <p className="text-center text-gray-500 my-8">Loading...</p>
  }

  if (isError) {
    return <p className="text-center text-red-500 my-8">An error occurred while fetching categories.</p>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Categories</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((category) => (
              <tr key={category.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{category.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Link className="text-indigo-600 hover:text-indigo-900 mr-2 cursor-pointer border-2 p-2" to={`/${category.id}`}>Details</Link>
                  <button className="text-orange-300 hover:text-indigo-900 mr-2 cursor-pointer border-2 p-2">Edit</button>
                  <button className="text-red-600 hover:text-red-900 cursor-pointer mr-2 border-2 p-2" onClick={()=>handleDelete(category.id)}>Delete</button>
                  <button className="text-green-600 hover:text-red-900 cursor-pointer mr-2 border-2 p-2" onClick={()=>{handleFavorites(category)}}>add to favs</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Categories

