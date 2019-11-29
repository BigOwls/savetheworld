import React from 'react';
import './App.css';

import logo from './images/logoG.png';

function App() {
  return (
    <div className='container'>  
      <img src={logo} alt='Teste'/>

      <div className='content'>
        <p class='t1'>
          Eco World
        </p>

        <p class='t2'>
          Encontre o Ponto mais Proximo
        </p>

        <form>
          <label htmlFor='email'>E-MAIL *</label>
          <input 
            type='email' 
            id='email'  
            placeholder='Digite seu e-mail'
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
