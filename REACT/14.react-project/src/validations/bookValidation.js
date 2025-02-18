import * as Yup from 'yup';

export const bookValidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  author: Yup.string().required("Author is required"),
  price: Yup.number().positive("Price must be positive").required("Price is required"),
  description: Yup.string().required("Description is required"),
  stock: Yup.number()
    .integer("Stock must be an integer")
    .min(0, "Stock cannot be negative")
    .required("Stock is required"),
  genre: Yup.string().required("Genre is required"),
  language: Yup.string().required("Language is required"),
  coverImageURL: Yup.string().url("Must be a valid URL").required("Cover Image URL is required"),
})