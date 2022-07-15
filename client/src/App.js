import './App.css';
import React, { useState } from 'react';



function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')

  // will change the state of the form 
  const handleChangeName = (event) => {
    setName(event.target.value)
  }
  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  }


  const handleSubmit = (event) => {

    if (!event.target.value) {
      alert('please write your information!')
    } else {
      alert("form submitted!");
      event.defaultPrevented();
    }

  }



  return (
    <div className='App'>
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <label>
          Full Name:
          <input type="text" value={name} onChange={(e) => { handleChangeName(e) }} />
        </label>
        <label>
          Email
          <input type="email" value={email} onChange={e => { handleChangeEmail(e) }} />
        </label><br />
        <label>
          Why should we hire you?
          <textarea id="description" type="text" value={description} onChange={(e) => { handleChangeDescription(e) }} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
