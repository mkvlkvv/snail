import React from "react";
import { useState } from "react";
import profile_background from "../images/profile_background.jpeg";

const Profile = () => {
  const [activeButton, setActiveButton] = useState(null); // Состояние для активной кнопки

  // Функция для обработки клика по кнопке
  const handleButtonClick = (index) => {
    setActiveButton(index); // Устанавливаем индекс активной кнопки
  };
  return (
    <div class="profile">
      <div class="profile_background_container">
        <img src={profile_background} alt="Фото" />
      </div>
      <div class="profile_card"></div>
      <div class="profile_objects">
        <div className="profile_objects_info">
          <div className="profile_objects_leftinfo">
            <button
              className={`profile_objects_info_button ${
                activeButton === 0 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(0)}
            >
              Работы
            </button>
            <button
              className={`profile_objects_info_button ${
                activeButton === 1 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(1)}
            >
              Коллекции
            </button>
            <button
              className={`profile_objects_info_button ${
                activeButton === 2 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(2)}
            >
              Отзывы
            </button>
            <button
              className={`profile_objects_info_button ${
                activeButton === 3 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(3)}
            >
              Жалобы
            </button>
          </div>
          <div className="profile_objects_rightinfo">
            <form className="printers__form" action="" method="get">
              <button className="search-button" type="submit" />
              <input
                className="printers__input"
                name="printer-search"
                placeholder="Поиск"
                type="text"
              />
            </form>
            <button class="profile_objects_new-file_button">Новый файл</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
