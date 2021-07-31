import React, { useState } from 'react';
import './App.css';

function App(props) {
  const usuario = useState('Mario')
  return (
    <>
    <input name="usuario" id="usuario" className="usuarioInput" placeholder="Usuário" />
    <button type="button">Pesquisar</button>
    </>  
  );
}

export default App;


// [ usuario, setUsuario ]