import { useEffect, useState } from "react"
import { endpoints } from "../../../constants"
import { getData } from "../../../services/api"
import BookCard from "../../../components/BookCard"
import Grid from '@mui/material/Grid2';
import { Container } from "@mui/material";

const Books = () => {

    const [books, setBooks] = useState(null)
    const [genres, setGenres] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [filter, setFilter] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")



    const handleFilter = (value)=>{
        setFilter(value)
    }
    const getGenres = async() =>{
        try {
            const data = await getData(endpoints.GENRES)
            setGenres(data)
        } catch (error) {
            console.log(error);
            
        }
    }


    const filteredBooks = books?.filter((book)=>{
        if(filter !== "all"){
            return book.genre === filter
        }
        return book
    }).filter((q)=>q.title.toLowerCase().includes(searchQuery.trim()))

    useEffect(() => {
        getData(endpoints.BOOKS).then((data) => {
            setBooks(data)
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setIsLoading(false)
        })

        getGenres()
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
                <div className="p-4 text-gray-600 dark:text-gray-300 outline-none focus:outline-none">
                    <div className="relative flex">
                        <select className="bg-white dark:bg-gray-800 h-10 px-5 rounded-l-full text-sm focus:outline-none outline-none border-2 border-gray-500 dark:border-gray-600 border-r-1 cursor-pointer max-h-10 overflow-y-hidden"
                            onChange={(e)=>{handleFilter(e.target.value)}}
                            >
                            <option value={"all"}>All</option>
                            {genres?.map((genre) => {
                                return (
                                <option className="font-medium cursor-pointer" value={genre.id} key={genre.id}>
                                    {genre.name}
                                </option>)
                            })}
                        </select>
                        <input
                            type="search"
                            name="search"
                            placeholder="Search"
                            className="bg-white dark:bg-gray-800 h-10 flex px-5 w-full rounded-r-full text-sm focus:outline-none border-2 border-l-0 border-gray-500 dark:border-gray-600"
                            autoComplete="off"
                            spellCheck="false"
                            required=""
                            step="any"
                            autoCapitalize="none"
                            onChange={(e)=>{setSearchQuery(e.target.value)}}
                            value={searchQuery}
                        />
                        <button
                            type="submit"
                            className="absolute inset-y-0 right-0 mr-2 flex items-center px-2"
                        >
                            <svg
                                className="h-4 w-4 fill-current dark:text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                id="Capa_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 56.966 56.966"
                                xmlSpace="preserve"
                                width="512px"
                                height="512px"
                            >
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <Grid container spacing={2}>
                    {books && filteredBooks.map((book) => (
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