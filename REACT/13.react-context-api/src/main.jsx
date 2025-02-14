import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './context/ThemeContext.jsx'
import FavoritesProvider, { FavoritesContext } from './context/FavoritesContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <ThemeProvider>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
   </ThemeProvider>
  </BrowserRouter>

)
