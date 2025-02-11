
import './App.css'

import { Route, Routes } from "react-router-dom"
import ClientLayout from './layouts/Client'
import AdminLayout from './layouts/Admin'
import Home from './pages/Client/Home'
import About from './pages/Client/About'
import Products from './pages/Client/Products'
import Dashboard from './pages/Admin/Dashboard'
import ProductsAdmin from "./pages/Admin/Products"
import AddProduct from './pages/Admin/AddProduct'
import EditProduct from './pages/Admin/EditProduct'
import ProductDetails from './pages/Client/ProductDetails'
import NotFound from './pages/Client/NotFound'


function App() {

  return (
    <>

      <Routes>
        {/* Client Layout */}

        <Route path='/' element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          {/* <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<ProductDetails />} /> */}

          <Route path='products'>
            <Route index element={<Products />} />
            <Route path=':id' element={<ProductDetails />} />
          </Route>

          <Route path='*' element={<NotFound />} />

        </Route>


        {/* Admin Layout */}

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='products'>
            <Route index element={<ProductsAdmin />} />
            <Route path='new' element={<AddProduct />} />
            <Route path='edit' element={<EditProduct />} />
          </Route>
        </Route>
      </Routes>

      {/* <Route path='*' element={<NotFound />} /> */}



    </>
  )
}

export default App
