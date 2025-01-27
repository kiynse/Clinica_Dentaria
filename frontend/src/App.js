// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css'; // Estilos do aplicativo
import Home from './View/Home'; // Importando a página Home

function App() {
  return (
    <Router>
      <div className="App">
        {/* Definindo as rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
