import { useEffect, useState } from "react"
import { endpoints } from "../../../constants"
import { getData } from "../../../services/api"
import BookCard from "../../../components/BookCard"
import Grid from '@mui/material/Grid2';
import { Container } from "@mui/material";

const Books = () => {

    const [books, setBooks] = useState(null)
    const [isLoading, setIsLoading] = useState(true)



    useEffect(() => {
        getData(endpoints.BOOKS).then((data) => {
            setBooks(data)
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setIsLoading(false)
        })
    }, [])


    if (isLoading) {
        return (<>
            <Container>
                <div style={{ fontSize: "3rem" }}>
                    <p>LOADING...</p>
                </div>
            </Container>
        </>)
    }


    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    {books?.map((book) => (
                        <Grid size={{ xs: 12, md: 6, lg: 3 }} key={book.id}>
                            <BookCard book={book} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
          
        </>
    )
}

export default Books