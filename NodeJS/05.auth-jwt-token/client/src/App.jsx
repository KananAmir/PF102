import React from 'react'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Client/HomePage'
import "./App.css"
import PrivateRoute from './components/PrivateRoute'
import ClientLayout from './pages/Client'
import AdminLayout from './pages/Admin'
import AdminProducts from './pages/Admin/Products'
import Dashboard from './pages/Admin/Dashboard'

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path='/' element={<ClientLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path='/' element={<PrivateRoute roles={["admin"]}/>}>
          <Route path='admin' element={<AdminLayout />} >
            <Route index element={<Dashboard />} />
            <Route path='products' element={<AdminProducts />} />
          </Route>
        </Route>


      </Routes>
    </>
  )
}

export default App