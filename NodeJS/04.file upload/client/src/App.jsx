
import { useEffect, useRef, useState } from 'react'
import './App.css'
import { FaUpload } from "react-icons/fa6";


function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: null
  })

  const fileInputRef = useRef(null)

  const getAllProducts = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/products/')
      const { data } = await response.json()
      setProducts(data)

    }
    catch (error) {
      console.log(error);
    }
  }
  const getAllCategories = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/categories/')
      const { data } = await response.json()
      setCategories(data)
      console.log(data);

    }
    catch (error) {
      console.log(error);
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const form = new FormData()
      form.append('title', formData.title)
      form.append('price', formData.price)
      form.append('description', formData.description)
      form.append('category', formData.category)
      form.append('image', formData.image)

      for (let [key, value] of form) {
        console.log(key, value);
      }

      const response = await fetch('http://localhost:8000/api/products/', {
        method: 'POST',
        body: form,
      })
      const data = await response.json()
      console.log(data);

      if (response.ok) {
        setFormData({
          title: '',
          price: '',
          description: '',
          category: '',
          image: null
        })
        getAllProducts()
      }

    } catch (error) {
      console.log(error);

    }
  }
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/products/${id}`, {
        method: 'DELETE',
      })
      console.log(response);

      const res = await response.json()
      console.log(res);

      if (response.ok) {
        getAllProducts()
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllProducts()
    getAllCategories()
  }, [])

  if (products.length === 0) {
    return <h1>No Item..</h1>
  }

  return (
    <>
      <h2>Add Product</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
        onSubmit={handleSubmit}
      >
        <div>
          <input type="text" name="name" placeholder="Enter Product Name" onChange={(e) => {
            setFormData({ ...formData, title: e.target.value })
          }} />
        </div>       <div>
          <input type="number" name="price" placeholder="Enter Product Price" onChange={(e) => {
            setFormData({ ...formData, price: e.target.value })
          }} />
        </div>
        <div>
          <input type="text" name="description" placeholder="Enter Product Description" onChange={(e) => {
            setFormData({ ...formData, description: e.target.value })
          }} />
        </div>
        <div>
          <select name="" id="" onChange={(e) => {
            setFormData({ ...formData, category: e.target.value })
          }}>
            <option value="" selected disabled>Select Category</option>
            {categories.map((category) => (
              <option value={category._id} key={category._id}>{category.title}</option>
            ))}
          </select>
        </div>
        <div>
          <FaUpload style={{ fontSize: "2rem", cursor: "pointer" }}
            onClick={() => { fileInputRef.current.click() }}
          />
          <input type="file" name="image" onChange={(e) => {
            // console.log(e.target.files[0])
            setFormData({ ...formData, image: e.target.files[0] })
          }}
            style={{ display: "none" }}
            ref={fileInputRef}
          />
        </div>
        <div>
          <button type="submit">Add Product</button>
        </div>
      </form>
      <h2>Products List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td><img src={product.image} alt={product.name} width="100" /></td>
              <td><button style={{ color: "red" }} onClick={() => { handleDelete(product._id) }}>delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <a href="tel:+994505555555">+994 50 555 55 55</a>
        <a href="mailto:nihat@code.edu.az">nihat@code.edu.az</a>
      </div>

    </>
  )
}

export default App
