// src/Components/Slider.js
import React from 'react';
import Slider from 'react-slick'; // Importando o Slider da biblioteca react-slick

import '../Style/Slider.css'; // Importando os estilos

// Importando o CSS do slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importando as imagens
import img1 from '../img/Slider1.jpeg'; // Caminho relativo para a imagem
import img2 from '../img/Slider2.png';
import img3 from '../img/Slider3.webp';
import img4 from '../img/Slider4.png';

// Componente do botão de navegação para o "próximo"
const CustomNextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#03b1b4',
        borderRadius: '50%',
        padding: '10px',
        color: 'white',
        zIndex: '2',  // Garantindo que o botão fique acima das imagens
      }}
      onClick={onClick}
    >
    </div>
  );
};

// Componente do botão de navegação para o "anterior"
const CustomPrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#03b1b4',
        borderRadius: '50%',
        padding: '10px',
        color: 'white',
        zIndex: '2',  // Garantindo que o botão fique acima das imagens
      }}
      onClick={onClick}
    >
    </div>
  );
};

function SliderComponent() {
  // Definindo as configurações do slider
  const settings = {
    dots: true, // Adiciona os pontos de navegação abaixo
    infinite: true, // Habilita navegação infinita
    speed: 500, // Velocidade de transição
    slidesToShow: 1, // Exibe 1 slide por vez
    slidesToScroll: 1, // Navega 1 slide por vez
    nextArrow: <CustomNextArrow />, // Customizando o botão "próximo"
    prevArrow: <CustomPrevArrow />, // Customizando o botão "anterior"
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={img1} alt="Slide 1" />
        </div>
        <div>
          <img src={img2} alt="Slide 2" />
        </div>
        <div>
          <img src={img3} alt="Slide 3" />
        </div>
        <div>
          <img src={img4} alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
}

export default SliderComponent;
