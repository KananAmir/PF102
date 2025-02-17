import { useContext } from "react"
import { FavoritesContext } from "../../../context/FavoritesContext";
import { Button, Container } from "@mui/material";
import Grid from '@mui/material/Grid2';

import BookCard from "../../../components/BookCard";
import { Toaster } from "react-hot-toast";

const Favorites = () => {
    const { favs, clearAllFavs } = useContext(FavoritesContext)


    if (favs.length === 0) {
        return (<p style={{ color: "red" }}>No item in favs!</p>)
    }

    return (
        <>
            <Container>

                <Grid container spacing={2}>
                    {favs?.map((book) => (
                        <Grid size={{ xs: 12, md: 6, lg: 3 }} key={book.id}>
                            <BookCard book={book} />
                        </Grid>
                    ))}
                </Grid>

                <hr />
                <Button style={{ backgroundColor: "orange" }} onClick={() => {
                    clearAllFavs()
                }}>clear all</Button>

            </Container>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </>
    )
}

export default Favorites