import { useEffect, useState } from 'react'
import './App.css'
import { apiUrl } from './constants'
import axios from 'axios'
function App() {

  const [products, setProducts] = useState([])
  const getProducts = async () => {
    try {
      const response = await axios(`${apiUrl}/products`)
      // console.log(response.data);
      setProducts(response.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    
    getProducts()

  }, [])
  
  products.length === 0 && <h1>No Product Item!</h1>
  return (
    <>
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </li>
      ))}
    </ul>
    </>
  )
}

export default App
