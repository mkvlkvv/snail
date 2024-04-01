import React from "react";
import logo from '../images/logo.svg'

const Header = () => {
  return (
    <div className="header">
      <div className="header__menu">
        <img src={logo} alt="Логотип" className="logo" />
        <div className="left-menu-container">
          <a className="header__button">3D модели</a>
          <a className="header__button">Слайсер</a>
          <a className="header__button">Печать</a>
        </div>
      </div>
      <button className="header__button header__button_exit">
      </button>
    </div>
  );
};

export default Header;

