import { useFormik } from 'formik';
import { bookValidation } from '../../validations/bookValidation';
import { Book, Endpoints } from '../../types/book';
import { addNewData } from '../../services/api';

interface AddBookProps {
    setBooks: React.Dispatch<React.SetStateAction<Book[]>>
    getBooks: () => void
}
const AddBook:React.FC<AddBookProps> = ({setBooks, getBooks}) => {
    const formik = useFormik({
        initialValues: {
            title: '',
            author: '',
            price: 0,
        },
        validationSchema: bookValidation,
        onSubmit: async (values: Omit<Book, "id">, {resetForm}) => {
            // console.log(values);
            try {
                const response = addNewData(Endpoints.books, values);
                console.log(response);
                getBooks()
                resetForm()
            } catch (error) {
                console.log(error);
            }
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="title">Book Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                />
                {formik.touched.title && formik.errors.title && (
                    <div style={{ color: "red" }}>{formik.errors.title}</div>
                )}
            </div>
            <div>
                <label htmlFor="author">Book Author</label>
                <input
                    id="author"
                    name="author"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.author}
                />
                {formik.touched.author && formik.errors.author && (
                    <div style={{ color: "red" }}>{formik.errors.author}</div>
                )}
            </div>
            <div>
                <label htmlFor="price">Book Price</label>
                <input
                    id="price"
                    name="price"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                />
                {formik.touched.price && formik.errors.price && (
                    <div style={{ color: "red" }}>{formik.errors.price}</div>
                )}
            </div>



            <button type="submit">Submit</button>
        </form>
    );
};


export default AddBook