import React from "react";
import logo from '../images/logo.svg'
import AuthModal from "./Auth";
import { useState, useEffect } from 'react';

const Header = () => {
 
    const useModal = () => {
      const [isShowing, setIsShowing] = useState(false);
  
      function toggle() {
          setIsShowing(!isShowing);
      }
  
      return [
          isShowing,
          toggle
      ];
  }

  const [isShowingModal, toggleModal] = useModal();


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
      <AuthModal show={isShowingModal} onCloseButtonClick={toggleModal}>
        
      </AuthModal>
      <button className="header__button header__button_exit" onClick={toggleModal}>
      </button>
      
    </div>
  );
};

export default Header;

