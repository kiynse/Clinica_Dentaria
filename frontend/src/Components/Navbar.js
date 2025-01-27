// src/Components/Navbar.js
import React from 'react';
import { Person, PersonAdd } from 'react-bootstrap-icons'; // Importando ícones para Login e Cadastrar
import '../Style/Navbar.css'; // Importando o arquivo CSS para estilizar

import logo from '../img/logo.png'; // Caminho para a imagem

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <img src={logo} alt="Logo" className="navbar-logo" />
      </div>

      <div className="navbar-center">
        <a href="/" className="navbar-link">Opção 1</a>
        <a href="/opcao2" className="navbar-link">Opção 2</a>
        <a href="/opcao3" className="navbar-link">Opção 3</a>
        <a href="/opcao4" className="navbar-link">Opção 4</a>
        <a href="/opcao5" className="navbar-link">Opção 5</a>
        <a href="/opcao6" className="navbar-link">Opção 6</a>
      </div>

      <div className="navbar-right">
        {/* Botão de Login com ícone */}
        <button className="navbar-button">
          <Person /> Login
        </button>
        
        {/* Botão de Cadastrar com ícone */}
        <button className="navbar-button">
          <PersonAdd /> Cadastrar
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
