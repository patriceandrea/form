import './App.css';
import React, { useState } from 'react';
import axios from 'axios';


function App() {


  const url = 'http://localhost:4000/users/submit';

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (event) => {

    try {
      const resp = await axios.post(url, { name: name, email: email, description: description })
      event.preventDefault();
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div className='App'>
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <label>
          Full Name:
          <input id="name" type="text" placeholder="Write your full name" value={name} onChange={(e) => { setName(e.target.value) }} />
        </label>
        <label>
          Email
          <input id="email" type="email" placeholder="patrice@yahoo.ca" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </label><br />
        <label>
          Why should we hire you?
          <textarea id="description" type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
