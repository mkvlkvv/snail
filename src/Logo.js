import React from 'react';
import logo from './logo.png'; // Путь к изображению вашего логотипа

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Логотип" className="logo-image" />
    </div>
  );
};

export default Logo;
