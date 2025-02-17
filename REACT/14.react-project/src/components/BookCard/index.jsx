import { Info } from "lucide-react"
import PropTypes from "prop-types";
import { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FavoritesContext } from "../../context/FavoritesContext";
import { Toaster } from "react-hot-toast";

export default function BookCard({ book }) {
    const { toggleFavorites, favs } = useContext(FavoritesContext)

    return (
        <div className="max-w-sm rounded-lg overflow-hidden bg-white shadow-lg py-5">
            {/* Book Cover Image */}
            <div className="relative">
                <div style={{ height: "400px" }}>
                    <img
                        src={book.coverImageURL}
                        alt="1984 Book Cover"
                        className="w-full h-auto"

                        style={{ height: "100%", objectFit: "cover" }}
                    />
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                    <button
                        className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                        onClick={() => { toggleFavorites(book) }}>
                        {
                            favs.find((q) => q.id === book.id)
                                ?
                                <FaHeart style={{ color: "red" }} 
                                className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors"
                                />
                                :
                                <FaRegHeart style={{ color: "red" }} 
                                className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors"
                                />
                        }
                    </button>
                    <button className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                        <Info className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>

            {/* Book Details */}
            <div className="p-6 space-y-4">
                <div>
                    <h2 className="text-2xl font-bold mb-1">{book.title}</h2>
                    <p className="text-gray-600">by {book.author}</p>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">${book.price}</span>
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-400">★</span>
                        <span className="text-gray-700">{book.rating} ({book.sold} sold)</span>
                    </div>
                </div>

                <div className="text-gray-600">In stock: {book.stock}</div>
            </div>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    )
}

BookCard.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        coverImageURL: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        sold: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
    }).isRequired,
};
