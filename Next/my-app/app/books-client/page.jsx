"use client"
import axios from 'axios';
import React, { useEffect } from 'react'

function Books() {
    const [books, setBooks] = React.useState(null);
    const BaseUrl = "https://book-store-api-liard-three.vercel.app"

    async function getBooks() {
        try {
            const resp = await axios(`${BaseUrl}/books`)

            setBooks(resp.data)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBooks()
    }, [])


    if(!books){
        return <div>Loading...</div>
    }

    return (
        <ul>
            {books?.map((book)=>{
                return (<li key={book.id}>{book.title}</li>)
            })}
        </ul>
    )
}

export default Books