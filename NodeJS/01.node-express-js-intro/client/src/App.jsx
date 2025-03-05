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

  let timeout = null;

  const handleSearch =  (e)=>{
    clearTimeout(timeout)
    const searchValue = e.target.value.trim()
    try {
     timeout = setTimeout(async() => {
      const response = await axios(`${apiUrl}/products/search?title=${searchValue}`)
      // console.log(response.data);
      setProducts(response.data.data)
    }, 500);
      
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
    <input type="text" placeholder='search..' onChange={handleSearch} />
    <ul>
      {products.map((product) => (
        <li key={product.id} style={{border: "1px solid", margin: "1rem"}}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </li>
      ))}
    </ul>
    </>
  )
}

export default App
