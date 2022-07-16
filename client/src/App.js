import './App.css';
import React, { useState } from 'react';
import axios from 'axios';


function App() {

  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [description, setDescription] = useState('')
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    description: ''
  })


  // will change the state of the form 
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.value]: event.target.value
    })
  }



  const handleSubmit = (event) => {
    event.defaultPrevented();
    if (!event.target.value) {
      alert('please write your information!')
      console.log('yooo'.event.target.value)
    } else {
      alert("form submitted!");

      axios.post('http://localhost:4000/users/submit', { form })
        .then(res => {
          console.log(res);
          console.log(res.data);
          console.log("it works")
        })


    }

  }





  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" value={form.name} onChange={handleChange} />
        </label>
        <label>
          Email
          <input type="email" value={form.email} onChange={handleChange} />
        </label><br />
        <label>
          Why should we hire you?
          <textarea id="description" type="text" value={form.description} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
