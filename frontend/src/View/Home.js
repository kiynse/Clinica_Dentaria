// src/View/Home.js
import React from 'react';
import Navbar from '../Components/Navbar'; // Importando o componente Navbar
import SliderComponent from '../Components/Slider'; // Importando o Slider

function Home() {
  return (
    <div>
      <Navbar /> {/* Adicionando a Navbar no topo da página */}
      
      <SliderComponent /> {/* Adicionando o Slider na Home */}

      <h1>Bem-vindo à Home!</h1>
      <p>Esta é a sua página inicial.</p>
    </div>
  );
}

export default Home;
