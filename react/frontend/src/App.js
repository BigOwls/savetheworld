import React, { useState } from 'react';
import api from './services/api'
import './App.css';

import logo from './images/logoG.png';

function App() {

  const [email,setEmail] = useState('');

  async function handleSubmit(event){
    event.preventDefault();

    const response = await api.post('/sessions', {email})

    console.log(email)
  }
  return (
    <div className='container'>  
      <img src={logo} alt='Teste'/>

      <div className='content'>
        <p className='t1'>
          Eco World
        </p>

        <p className='t2'>
          Encontre o Ponto mais Proximo
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>E-MAIL *</label>
          <input 
            type='email' 
            id='email'  
            placeholder='Digite seu e-mail'
            value={email}
            onChange={event => setEmail(event.target.value) }
          />
          <button className='btn' type='submit'>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
