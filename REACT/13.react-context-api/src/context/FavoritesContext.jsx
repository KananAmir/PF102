import { createContext, useState } from "react"


export const FavoritesContext = createContext(null)

const FavoritesProvider = ({children}) => {
    const [favs, setFavs] = useState([])

    const toggleFavorites = (book) =>{
        const idx = favs.findIndex((q)=>q.id === book.id)

        if(idx === -1){
            setFavs([...favs, book])
        }else{
            setFavs(favs.filter((q)=>q.id !== book.id))
        }
    }

    const clearAllFavs = () =>{
        setFavs([])
    }

  return (
    <FavoritesContext.Provider value={{favs, toggleFavorites, clearAllFavs}}>
        {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesProvider