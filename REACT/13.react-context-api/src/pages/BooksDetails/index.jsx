import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"
import { BASE_URL } from "../../constants";

const BooksDetails = () => {
    const [book, setBook] = useState(null);



    // const params = useParams()
    const { id } = useParams()

    console.log(id);

    const navigate = useNavigate()

    const handleGoBack = () => {
        // navigate("/")
        navigate(-1)
    }


    const getBooks = async () => {
        try {
            const response = await axios(`${BASE_URL}books/${id}`)
            console.log(response.data);
            setBook(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <div>
            <h1>BooksDetails</h1>
            {book && <h4>{book.title}</h4>}
            <hr />
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    )
}

export default BooksDetails

