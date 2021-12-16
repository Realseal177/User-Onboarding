import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './Form';
import User from './User';
import schema from './formSchema';
import axios from 'axios';
import * as yup from 'yup';

const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  terms: false,
}
const initialFormErrors = {
  first_name: '',
  last_name: '', 
  email: '', 
  password: '',
  terms: false,
}
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);


  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(resp => {
      console.log(resp.data.data);
      setUsers(resp.data.data)
    }).catch(err => console.error(err))
  }

  const postNewUser = newUser => {
    axios.post('http://reqrs.in/api/users', newUser)
      .then(resp => {
        setUsers([resp.data.data, ...users])
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: ['terms'].filter(trm => !!formValues[trm])
    }
    postNewUser(newUser);
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="container">
      <header><h1>User Onboarding</h1></header>
        <Form
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />


    </div>
  );
}

export default App;
