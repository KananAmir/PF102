import { useFormik } from 'formik';
import { addNewData } from '../../../services/api';
import { endpoints } from '../../../constants';
import { bookValidationSchema } from '../../../validations/bookValidation';

const AddBook = () => {
  const formik = useFormik({
    initialValues: {
        title: '',
        author: '',
        price: '',
    },
    validationSchema: bookValidationSchema,
    onSubmit: async (values) => {
     const response = await addNewData(endpoints.BOOKS, values)
     console.log(response);
     
    },
  });

  
  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col items-center'>
      <label htmlFor="firstName">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
      />
      {/* {console.log(formik.errors)} */}
      {formik.touched.title && formik.errors.title ? (
        <div className='text-red-500'>{formik.errors.title}</div>
      ) : null}

      <label htmlFor="lastName">Price</label>
      <input
        id="price"
        name="price"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.price}
      />
      {formik.touched.price && formik.errors.price ? (
        <div className='text-red-500'>{formik.errors.price}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="author"
        name="author"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.author}
      />
      {formik.touched.author && formik.errors.author ? (
        <div className='text-red-500'>{formik.errors.author}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};


export default AddBook