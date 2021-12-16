import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username required')
        .min(3, 'Username requires 3 characters minimum'),
    email: yup
        .string()
        .email('Please enter valid email address')
        .trim()
        .required('You must enter a valid email address'),
    terms: yup.boolean(),
})

export default formSchema;