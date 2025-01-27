// src/View/Home.js
import React from 'react';
import Navbar from '../Components/Navbar'; // Importando o componente Navbar

function Home() {
  return (
    <div>
      <Navbar /> {/* Adicionando a Navbar no topo da página */}
      <h1>Bem-vindo à Home!</h1>
      <p>Esta é a sua página inicial.</p>
    </div>
  );
}

export default Home;
