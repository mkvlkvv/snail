import React from "react";
import logo from "../../images/logo.svg";
import AuthModal from "./Auth";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-alice-carousel";
import search from "../../images/search.svg"
import enter from "../../images/enter.svg"
import plus from "../../images/addcard.svg"
import chat from "../../images/chat_bubble.svg"
import notif from "../../images/notifications.svg"
import packag from "../../images/package_2.svg"
//import ava from "../../images/avatarka.jpg"
import ava from "../../images/av.jpg"
import { useSelector } from "react-redux";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
 

  function toggle() {
    setIsShowing(!isShowing);
    if (!isShowing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  function closeModal() {
    setIsShowing(false);
    document.body.style.overflow = "auto";
  }

  return [isShowing, toggle, closeModal];
};

const Header = ({ isAuthenticated, onLogout }) => {
  const alias = useSelector(state => state.alias)
  const data = useSelector(state => state.app)
  console.log(data);
  const [headerClass, setHeaderClass] = useState("header");
  const [isAuth, setAuth] = useState(data);
  const [isShowingModal, toggleModal, closeModal] = useModal();

  const modalRef = useRef();

  useEffect(() =>{
    setAuth(data);
  }, [data])


  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, closeModal]);

  return (<div>
    {isAuth ? (<div className={headerClass}>
        <NavLink to="/snailweb">
        <img src={logo} alt="Логотип" className="logo" />
        </NavLink>
        <div className="left-menu-container">
          <a className="a1">О нас</a>
          <a className="a2">3D модели</a>
          <a className="a3">Слайсер</a>
          <a className="a4">Печать</a>
        </div>
          <form className="header__form_active">
            <img src={search}></img>

            <input placeholder="Поиск">
            </input>

          </form>
          <div className="header__user-panel">
              <div className="header__user-panel-newcard">
                <img src={plus}></img>
              </div>
              <img src={chat}></img>
              <img src={packag}></img>
              <img src={notif}></img>
              <div className="header__user-panel-user">
                  <p>diduk</p>
                  <img src={ava}></img>
              </div>
          </div>
    </div>):(
    <div className={headerClass}>
        <NavLink to="/snailweb">
        <img src={logo} alt="Логотип" className="logo" />
        </NavLink>
        <div className="left-menu-container">
          <a className="a1">О нас</a>
          <a className="a2">3D модели</a>
          <a className="a3">Слайсер</a>
          <a className="a4">Печать</a>
        </div>
        <div className="header__search_form">
          <form className="header__form">
            <img src={search}></img>

            <input placeholder="Поиск">
            </input>

          </form>
        </div>
      <AuthModal
        show={isShowingModal}
        onCloseButtonClick={closeModal}
      ></AuthModal>
      <div
        className= "header_auth"
        onClick={toggleModal}
      >
        <img src={enter}></img>
      </div>
      {isAuthenticated && <button>Кнопка</button>}
    </div>)}
    </div>
  );
};

export default Header;
