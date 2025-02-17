import * as Yup from 'yup';

export const bookValidationSchema = Yup.object({
    title: Yup.string()
    .min(4, 'Must be at least 4 characters or more')
    .required('Required'),
    author: Yup.string()
    .max(30, 'Must be 30 characters or less')
    .required('Required'),
    price: Yup.string().required('Required'),
})