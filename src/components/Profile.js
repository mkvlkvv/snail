import React from "react";
import { useState } from "react";
import profile_background from "../images/profile_background.jpeg";
import avatarka from '../images/avatarka.png';
import like from '../images/like-button.svg';
import follow from '../images/follow.svg';
import save from '../images/save.svg';
import email from '../images/email.svg';
import inst from '../images/inst.svg';
import tg from '../images/tg.svg';

const Profile = () => {
  const [activeButton, setActiveButton] = useState(null); // Состояние для активной кнопки

  // Функция для обработки клика по кнопке
  const handleButtonClick = (index) => {
    setActiveButton(index); // Устанавливаем индекс активной кнопки
  };
  return (
    <div class="profile">
      <div class="profile__background-container">
        <img src={profile_background} alt="Фото" />
      </div>
      <div class="profile__card">
        <img className="profile__avatar" src={avatarka} alt="Аватвр профиля" />
        <div className="profile__info">
          <p className="profile__name">yaane</p>
          <p className="profile__nickname">@coemet</p>
            <div className="profile__stat">
              <button className="profile__stat-item">
                <img className="" src={follow} alt="repost button" />
                </button>
              <button className="profile__stat-item">
                <img className="" src={save} alt="save button" />
              </button>
              <button className="profile__stat-item">
                <img className="" src={like} alt="like button" />
              </button>
          </div>
          <button className="profile__edit-button">Редактировать профиль</button>
          <div className="profile__bio">
            <h1 className="profile__bio-name">Bio</h1>
            <p className="profile__bio-description">Привет! Сделанные на базе интернет-аналитики выводы, вне зависимости от их уровня!</p>
          </div>
          <div className="profile__links">
            
          </div>
        </div>
      </div>
      <div class="profile__objects">
        <div className="profile__objects-info">
          <div className="profile__objects-leftinfo">
            <button
              className={`profile__objects-info-button ${activeButton === 0 ? "active" : ""
                }`}
              onClick={() => handleButtonClick(0)}
            >
              Работы
            </button>
            <button
              className={`profile__objects-info-button ${activeButton === 1 ? "active" : ""
                }`}
              onClick={() => handleButtonClick(1)}
            >
              Коллекции
            </button>
            <button
              className={`profile__objects-info-button ${activeButton === 2 ? "active" : ""
                }`}
              onClick={() => handleButtonClick(2)}
            >
              Отзывы
            </button>
            <button
              className={`profile__objects-info-button ${activeButton === 3 ? "active" : ""
                }`}
              onClick={() => handleButtonClick(3)}
            >
              Жалобы
            </button>
          </div>
          <div className="profile__objects-rightinfo">
            <form className="printers__form" action="" method="get">
              <button className="search-button" type="submit" />
              <input
                className="printers__input"
                name="printer-search"
                placeholder="Поиск"
                type="text"
              />
            </form>
            <button class="profile__objects-newfile-button">Новый файл</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
