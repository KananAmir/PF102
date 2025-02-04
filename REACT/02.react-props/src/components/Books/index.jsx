import React from 'react'
import BookCard from '../BookCard';

const Books = ({ books }) => {

    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
            {books.map((book, index) => {
                {
                    console.log(book);
                }
                return <BookCard book={book} key={book.id} />
            })}
        </div>
    )
}

export default Books