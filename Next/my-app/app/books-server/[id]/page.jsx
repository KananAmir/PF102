import GoBackBtn from '@/components/ui/goBackBtn'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'

export async function generateMetadata(
    { params, searchParams },
) {

    const { id } = await params
    const response = await axios.get(`https://book-store-api-liard-three.vercel.app/books/${id}`)
    const book = response.data
    return {
        title: book.title,
        description: book.description
    }
}
async function BookDetails({ params }) {
    const { id } = params
    const resp = await axios(`https://book-store-api-liard-three.vercel.app/books/${id}`)
    const book = resp.data

    return (
        <div>
            <h3>{book.title}</h3>
            <img src={book.coverImageURL} alt={book.title} width={200} />
            {/* <Link href={"/"}>go home</Link> */}
            <GoBackBtn />
        </div>
    )
}

export default BookDetails