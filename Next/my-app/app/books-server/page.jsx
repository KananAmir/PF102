import axios from 'axios'
import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: 'Books',
    description: 'Books page',
}

async function Books() {
    const BaseUrl = "https://book-store-api-liard-three.vercel.app"
    const resp = await axios(`${BaseUrl}/books`)

    const books = resp.data
    console.log(books);
    
    return (
        <ul>
            {books.map((book)=>{
                return (<li key={book.id}>
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                    <Link href={`books-server/${book.id}`} className='text-blue-500'>details</Link>
                </li>)
            })}
        </ul>
    )
}

export default Books