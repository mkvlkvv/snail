import React from "react";
import Logo from "./Logo"; 
import "./Header.css"; 

const Header = () => {
  return (
    <div className="header">
      <div className="left-section">
        <Logo />
        <div className="left-menu-container">
          <button className="menu-button">3D Модели</button>
          <button className="menu-button">Слайсер</button>
          <button className="menu-button">Печать</button>
        </div>
      </div>
      <div className="right-menu-container">
        <button className="login-button">Вход</button>
      </div>
    </div>
  );
};

export default Header;
