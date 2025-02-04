import React from 'react'
import "./index.css"
import PropTypes from 'prop-types';

const BookCard = ({ book }) => {
    console.log(book);

    return (
        <div className="book-card">
            <img
                src={book.coverImageURL}
                alt={book.title}
                className="book-cover"
            />
            <div className="book-info">
                <h2 className="book-title">{book.title}</h2>
                <p className="book-author">by {book.author}</p>
                <div className="info">
                    <p className="book-price">${book.price}</p>
                    <div className="book-rating">
                        <span className="star">★</span>
                        <span className="rating-value">{book.rating} ({book.sold} sold)</span>
                    </div>
                </div>
                <p className="book-stock">In stock: {book.stock}</p>
            </div>
        </div>
    )
}

// BookCard.propTypes = {
//     book: PropTypes.object
// }
BookCard.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        coverImageURL: PropTypes.string,
        stock: PropTypes.number,
        rating: PropTypes.number,
        author: PropTypes.string,
    })
}

export default BookCard