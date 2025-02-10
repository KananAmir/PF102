import { useEffect, useState } from "react"
import Welcome from "./components/Wellcome"
import Logout from "./components/Logout"
import Login from "./components/Login"
import Product from "./components/Product"
import { BASE_URL } from "./constants"
import axios from "axios"


function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}products`)
      setProducts(response.data)

    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getProducts()
    //cleanup function
    return () => {
      console.log("cleanup")
    }
  }, [isLogged])
  return (
    <div>
      <header>
        {isLogged ? (
          <>
            <Welcome />
            <Logout setIsLogged={setIsLogged} />
          </>
        ) : (
          <Login setIsLogged={setIsLogged} />
        )}
      </header>
      <main>
        {isLogged ? (
          <Product products={products} setProducts={setProducts} />
        ) : (
          <p>You should login to see products</p>
        )}
      </main>
    </div>
  )
}

export default App

