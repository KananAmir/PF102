
import './App.css'

import { Route, Routes } from "react-router-dom"
import ClientLayout from './layouts/Client'
import AdminLayout from './layouts/Admin'
import Home from './pages/Client/Home'
import About from './pages/Client/About'
import Books from './pages/Client/Books'
import Dashboard from './pages/Admin/Dashboard'
import BooksAdmin from "./pages/Admin/Books"
import AddBook from './pages/Admin/AddBook'
import EditBook from './pages/Admin/EditBook'
import BookDetails from './pages/Client/BookDetails'
import NotFound from './pages/Client/NotFound'
import Favorites from './pages/Client/Favorites'
import Basket from './pages/Client/Basket'
// import { FormikExample } from './pages/Admin/FormikExample'


function App() {

  return (
    <>

      {/* <FormikExample/> */}
      <Routes>

        {/* Client Layout */}
        <Route path='/' element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='basket' element={<Basket />} />

      
          <Route path='books'>
            <Route index element={<Books />} />
            <Route path=':id' element={<BookDetails />} />
          </Route>
        </Route>

        {/* Admin Layout */}
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='books'>
            <Route index element={<BooksAdmin />} />
            <Route path='new' element={<AddBook />} />
            <Route path='edit' element={<EditBook />} />
          </Route>
        </Route>
        
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
