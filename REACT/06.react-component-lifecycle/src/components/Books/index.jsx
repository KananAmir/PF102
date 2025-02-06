import axios from "axios"
import { BASE_URL } from "../../constants/api";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../Loading";
import Swal from 'sweetalert2'

import { FaTrashCan } from "react-icons/fa6";

const Books = () => {
    const [books, setBooks] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getBooks = async () => {
        setIsLoading(true)
        try {
            const response = await axios(`${BASE_URL}/books`)
            console.log(response.data);
            setBooks(response.data);

        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const handleDelete = async (id) => {
        try {
            const response = axios.delete(`${BASE_URL}/books/${id}`)
            // console.log(response);

            // if ((await response).status === 200) {
            //     setBooks([...books].filter((book) => book.id !== id))
            // }

            setBooks([...books].filter((book) => book.id !== id))


        } catch (error) {
            console.log(error);

        }
    }

    //infinite loop
    // getBooks()

    // infinite loop
    // useEffect(() => {
    //     getBooks()
    // })

    //correnct version
    useEffect(() => {
        getBooks()
    }, [])

    return (
        <div>
            <h2>
                Book List
            </h2>
            {isLoading && <Loading />}
            {error && <p>{error}</p>}
            {books
                &&
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Book Name</th>
                            <th>Book Author</th>
                            <th>Price</th>
                            <th>Photo</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book) => {
                                return (<tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.price}</td>
                                    <td><img src={book.coverImageURL} alt={book.title} width={100} /></td>
                                    <td>
                                        <button onClick={() => {
                                            Swal.fire({
                                                title: "Are you sure delete book?",
                                                text: "You won't be able to revert this!",
                                                icon: "warning",
                                                showCancelButton: true,
                                                confirmButtonColor: "#3085d6",
                                                cancelButtonColor: "#d33",
                                                confirmButtonText: "Yes, delete it!"
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    handleDelete(book.id)
                                                    Swal.fire({
                                                        title: "Deleted!",
                                                        text: "Your file has been deleted.",
                                                        icon: "success"
                                                    });
                                                }
                                            });
                                        }}> <FaTrashCan style={{ color: "red" }} /> </button>
                                    </td>
                                </tr>)
                            })

                        }
                    </tbody>
                </table>
            }

        </div>
    )
}

export default Books