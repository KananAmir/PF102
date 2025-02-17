import { createContext, useState } from "react"
import toast from "react-hot-toast"


export const FavoritesContext = createContext(null)

const FavoritesProvider = ({children}) => {
    const [favs, setFavs] = useState([])

    const toggleFavorites = (book) =>{
        const idx = favs.findIndex((q)=>q.id === book.id)
        if(idx === -1){
            setFavs([...favs, book])
        toast.success('Added to favs!')
            
        }else{
            setFavs(favs.filter((q)=>q.id !== book.id))
            toast.success('Removed from favs!')

        }
    }

    const clearAllFavs = () =>{
        toast.success('Cleared all favs!')
        setTimeout(() => {
            setFavs([])
        }, 1000);

    }

  return (
    <FavoritesContext.Provider value={{favs, toggleFavorites, clearAllFavs}}>
        {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesProvider