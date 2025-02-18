import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import FavoritesProvider from './context/FavoritesContext.jsx'
import BasketProvider from './context/BasketContext.jsx'
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <FavoritesProvider>
      <BasketProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BasketProvider>
    </FavoritesProvider>
  </BrowserRouter>

)
