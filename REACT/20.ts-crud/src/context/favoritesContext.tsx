import React, { createContext, ReactNode, useState } from 'react'
import { Book } from '../types/book'

type FavoritesProviderProps = {children: ReactNode}
type FavoritesContextType = {
    favs: Book[],
    toggleFavorites: (book: Book)=>void,
    clearAllFavorites: ()=>void,
}
export const FavoritesContext = createContext<FavoritesContextType | null>(null)

const FavoritesProvider:React.FC<FavoritesProviderProps> = ({ children }) => {

    const [favs, setFavs] = useState<Book[]>([])

    const toggleFavorites = (book: Book) => {
        const idx = favs.findIndex((q) => q.id === book.id)
        if (idx === -1) {
            setFavs([...favs, book])
        } else {
            setFavs(favs.filter((q) => q.id !== book.id))
        }
    }

    const clearAllFavorites = () => {
        setFavs([])
    }
    return (
        <FavoritesContext.Provider value={{ favs, toggleFavorites, clearAllFavorites}}>{children}</FavoritesContext.Provider>
    )
}

export default FavoritesProvider