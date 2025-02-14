import { useContext } from "react"
import { FavoritesContext } from "../../context/FavoritesContext"
import { Link } from "react-router-dom"
import { FaHeart } from "react-icons/fa";

const Favorites = () => {
    const { favs, toggleFavorites, clearAllFavs } = useContext(FavoritesContext)


    if (favs.length === 0) {
        return (<p style={{ color: "red" }}>No item in favs!</p>)
    }

    return (
        <>
            <ul>
                {favs.map((book) => {
                    return (<li key={book.id}>
                        <span>{book.title}</span>
                        <button>
                            <Link to={`${book.id}`}>details</Link>
                        </button>
                        <button onClick={() => { toggleFavorites(book) }}>
                            {
                                <FaHeart style={{color: "red"}}/>
                            }
                        </button>
                    </li>)
                })}
            </ul>
            <hr />
            <button style={{ backgroundColor: "orange" }} onClick={() => {
                clearAllFavs()
            }}>clear all</button>
        </>
    )
}

export default Favorites