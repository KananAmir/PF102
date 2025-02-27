
import { useContext, useEffect, useState } from 'react'
import './App.css'
import { Book, Endpoints } from './types/book'
import { deleteDataById, getAllData } from './services/api'
import axios from 'axios'
import { BASE_URL } from './constants'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AddBook from './components/AddBook'
import { FavoritesContext } from './context/favoritesContext'

function App() {

  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState<boolean>(true)
const {toggleFavorites, favs} = useContext(FavoritesContext)

console.log(favs);

  // const fetchBooks = async ():Promise<void> => {
  //   try {
  //     setLoading(true)
  //     const resp = await axios.get<Book[]>(`${BASE_URL}/${Endpoints.books}`)
  //     setBooks(resp.data)
  //   } catch (error) {
  //     console.log(error);
  //   }finally{
  //     setLoading(false)
  //   }
  // }

  // useEffect(() => {
  //   fetchBooks()
  // }, [])

  const getBooks = async () => {
    try {
      setLoading(true)
      const data: Book[] = await getAllData(Endpoints.books)
      setBooks(data)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (bookId: string) => {
    // console.log(bookId);

    try {
      await deleteDataById(Endpoints.books, bookId)
      setBooks(books.filter((b) => b.id !== bookId))
    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    getBooks()
  }, [])


  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h1>
        Add Book Form
      </h1>
      <AddBook setBooks={setBooks} getBooks={getBooks}/>
      <h1>Books</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Photo</th>
            <th>Author</th>
            <th>Book Title</th>
            <th>Price</th>
            <th>Delete</th>
            <th>Favs</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            return (<tr key={book.id}>
              <td>{book.id}</td>
              <td><img src={book.coverImageURL} alt={book.title} width={100} /></td>
              <td>{book.author}</td>
              <td>{book.title}</td>
              <td>{book.price}</td>
              <td><button
                style={{ color: "red" }}
                onClick={() => { handleDelete(book.id) }}
              >delete</button></td>
              <td><button onClick={()=>{
                toggleFavorites(book)
              }}>{
                favs.find((q: Book)=>q.id === book.id) ? "Remove from Favs" : "Add to Favs"
              }</button></td>
            </tr>)
          })}
        </tbody>
      </table>

      <hr />
      <Container>
        <Row>
          {books.length > 0 && <>
            {
              books.map((book: Book) => {
                return (
                  <Col key={book.id} md={6} lg={4} xl={3}>
                    <Card>
                      <Card.Img variant="top" src={book.coverImageURL} />
                      <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>
                          {book.description}
                        </Card.Text>
                        <Button variant="primary">Add To Cart</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })
            }
          </>}
        </Row>
      </Container>
    </>
  )
}

export default App
