"use client"

import { useContext } from "react"
import { BasketContext } from "../../../context/BasketContext"
import { Trash2, Plus, Minus } from "lucide-react"

const Basket = () => {
  const { basket, removeFromBasket, incrementBasketItemQuantity, decrementBasketItemQuantity, clearBasket } =
    useContext(BasketContext)

  const total = basket.reduce((acc, item) => acc + item.price * item.quantity, 0)

  if (basket.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-red-500 text-xl font-semibold">Your Basket Is Empty!</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {basket.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">${item.price.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => decrementBasketItemQuantity(item.id)}
                      className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      onClick={() => incrementBasketItemQuantity(item.id)}
                      className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => removeFromBasket(item.id)}
                    className="text-red-600 hover:text-red-900 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 flex justify-between items-center">
        <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
        <button
          onClick={clearBasket}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          Clear Basket
        </button>
      </div>
    </div>
  )
}

export default Basket

