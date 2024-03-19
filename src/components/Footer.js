import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="header__menu">
        <div className="left-menu-container">
            <button className="footer__button">© 2024 SnailLabs</button>
          <button className="footer__button">Условия пользования</button>
          <button className="footer__button">FAQ</button>
          <button className="footer__button">Поддержка</button>
        </div>
      </div>
      <div class='social_media_buttons'>
        <button className="footer__button footer__button_exit1"/>
        <button className="footer__button footer__button_exit2"/>
        <button className="footer__button footer__button_exit3"/>
      </div>
    </div>
  );
};

export default Footer;