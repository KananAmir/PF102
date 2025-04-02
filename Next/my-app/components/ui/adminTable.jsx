"use client"

import axios from "axios";

const AdminTable = ({ books }) => {
    const handleDelete = async (id) => {
        console.log(id);

        try {
            await axios.delete(`https://book-store-api-liard-three.vercel.app/books/${id}`)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>description</th>
                </tr>
            </thead>
            <tbody>
                {books.map((b) => {
                    return (
                        <tr key={b.id}>
                            <td>
                                {b.id}
                            </td>
                            <td>
                                {b.title}
                            </td>
                            <td>
                                {b.description}
                            </td>
                            <td><button onClick={() => { handleDelete(b.id) }}>delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default AdminTable