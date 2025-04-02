import AdminTable from '@/components/ui/adminTable'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'



async function AdminBooks() {
    const BaseUrl = "https://book-store-api-liard-three.vercel.app"
    const resp = await axios(`${BaseUrl}/books`)

    const books = resp.data
    console.log(books);
    
    return (
        <>
           <AdminTable books={books} />
        </>
    )
}

export default AdminBooks