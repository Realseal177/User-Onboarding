import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './Form';
import User from './User';
import formSchema from './formSchema';
import axios from 'axios';
import * as yup from 'yup';

const initialFormValues = {

}

function App() {
  const [users, setUsers] = useState([])

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(resp => {
      console.log(resp.data.data);
      setUsers(resp)
    }).catch(err => console.error(err))
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="container">
      <header><h1>User Onboarding</h1></header>

    </div>
  );
}

export default App;
