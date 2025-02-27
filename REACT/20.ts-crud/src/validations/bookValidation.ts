import * as Yup from 'yup';

export const bookValidation = Yup.object({
    title: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
    author: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
    price: Yup.number().positive().required(),
})