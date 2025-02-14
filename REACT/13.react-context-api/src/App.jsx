
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Books from './pages/Books'
import BooksDetails from './pages/BooksDetails'
import AddBook from './pages/AddBook'
import NotFound from './pages/NotFound'
import Favorites from './pages/Favorites'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/favorites' element={<Favorites />} />

        <Route path='/books'>
          <Route index element={<Books />} />
          <Route path='new' element={<AddBook />} />
          <Route path=':id' element={<BooksDetails />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
