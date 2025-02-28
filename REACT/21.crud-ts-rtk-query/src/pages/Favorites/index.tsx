import { useDispatch, useSelector } from "react-redux"
import { toggleFavorites } from "../../redux/features/favoritesSlice"
import { RootState } from "@reduxjs/toolkit/query"

const Favorites = () => {
  const favorites = useSelector((state: RootState) => state.favorites.items)
  const dispatch = useDispatch()

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto py-8 text-center">
        <p className="text-gray-500 text-lg">No items in favorites!</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Favorites</h2>
      <ul className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {favorites.map((item) => (
          <li key={item.id} className="flex justify-between items-center p-4 border-b last:border-b-0 hover:bg-gray-50">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
            <button
              className="px-3 py-1 bg-orange-300 hover:bg-orange-400 text-gray-800 rounded border-2 transition-colors"
              onClick={() => {
                dispatch(toggleFavorites(item))
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Favorites

