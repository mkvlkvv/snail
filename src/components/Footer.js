import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="header__menu">
        <div className="left-menu-container">
            <button className="header__button">© 2024 SnailLabs</button>
          <button className="header__button">Условия пользования</button>
          <button className="header__button">FAQ</button>
          <button className="header__button">Поддержка</button>
        </div>
      </div>
      <div class='social_media_buttons'>
        <button className="header__button header__button_exit1"/>
        <button className="header__button header__button_exit2"/>
        <button className="header__button header__button_exit3"/>
      </div>
    </div>
  );
};

export default Footer;