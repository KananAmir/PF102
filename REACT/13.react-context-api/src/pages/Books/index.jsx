import { useState, useEffect, useContext } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FavoritesContext } from "../../context/FavoritesContext";

const Books = () => {
    const [books, setBooks] = useState(null);


    const { toggleFavorites, favs } = useContext(FavoritesContext)

    const getBooks = async () => {
        try {
            const response = await axios(`${BASE_URL}books`)
            console.log(response.data);
            setBooks(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBooks()
    }, [])


    return (
        <div>
            <h1>Book List</h1>
            <ul>
                {books && books.map((book) => {
                    return (<li key={book.id}>
                        <span>{book.title}</span>
                        <button>
                            <Link to={`${book.id}`}>details</Link>
                        </button>
                        <button onClick={() => { toggleFavorites(book) }}>
                            {
                                favs.find((q) => q.id === book.id)
                                    ?
                                    <FaHeart style={{color: "red"}}/>
                                    :
                                    <FaRegHeart style={{color: "red"}}/>
                            }
                        </button>
                    </li>)
                })}
            </ul>

        </div>
    )
}


export default Books