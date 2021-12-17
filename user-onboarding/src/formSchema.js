import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('First name required')
        .min(2, 'First name requires 2 characters minimum'),
    last_name: yup
        .string()
        .trim()
        .required('Last name required')
        .min(2, 'Last name requires 2 characters minimum'),
    email: yup
        .string()
        .email('Please enter valid email address')
        .trim()
        .required('You must enter a valid email address'),
    password: yup
        .string()
        .trim()
        .required('You must enter a password')
        .min(6, 'Password must be at least 6 characters long'),
    terms: yup.boolean(),
})

export default formSchema;