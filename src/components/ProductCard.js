import React, { useState } from "react";
import like from "../images/like-button.svg";
import repost from "../images/repost-button.svg";
import save from "../images/save-button.svg";
import star from "../images/star.svg";
import star_black from "../images/Star-black.svg";
import Printer from "./Printer";

const ProductCard = () => {
  const data = {
    mainPhoto: "/images/main-photo.png",
    photo2: "../images/photo2.jpeg",
    photo3: "../images/photo3.jpeg",
    name: "cross",
    avatar: "avatar.jpg",
    avatarName: "anlnv",
    description: "3D/Обувь",
    rating_data: "4",
    likes: "6",
    repost: "5", 
    save: "1",
    printers: [
      {
        name: "X1 Carbon,P1S,X1,X1E,A1",
        imgSrc: "../images/main-photo.png",
        time: "2,6ч",
        items: ["Прочность", "Качество", "Успех"],
        rating: "4,8",
      },
      {
        name: "X1 Carbon,P1S,X1",
        imgSrc: "../images/main-photo.png",
        time: "2,3ч",
        items: ["Качество", "Успех"],
        rating: "4,1",
      },
      {
        name: "X1 Carbon",
        imgSrc: "../images/main-photo.png",
        time: "1,6ч",
        items: ["Успех"],
        rating: "3,0",
      },
      {
        name: "X1 Carbon",
        imgSrc: "../images/main-photo.png",
        time: "1,6ч",
        items: ["Успех"],
        rating: "3,0",
      },
    ],
  };

  const slides = [[data.mainPhoto], [data.photo2], [data.photo3]]; // Массив со всеми изображениями
  const [slideIndex, setSlideIndex] = useState(0); // Индекс текущего активного слайда

  // Обработчик нажатия кнопки "Назад"
  const handlePrev = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  // Обработчик нажатия кнопки "Вперед"
  const handleNext = () => {
    if (slideIndex < slides.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <div className="card">
      <div className="slider">
        <div className="card__img-container">
          <button className="slider__button_back" onClick={handlePrev} />
          <img
            className="card__img"
            src={slides[slideIndex]}
            alt="основное фото"
          />
          <button className="slider__button_next" onClick={handleNext} />
        </div>
        <div className="slider__photo-set">
          <img className="slider__photo" src={[data.mainPhoto]} alt="фото1" />
          <img className="slider__photo" src={[data.photo2]} alt="фото2" />
          <img className="slider__photo" src={[data.photo3]} alt="фото3" />
        </div>
      </div>
      <div className="card__info">
        <div className="bio">
          <p className="bio__description">{data.description}</p>
          <p className="card__name">{data.name}</p>
          <div className="avatar">
            <img className="avatar__img" src={[data.mainPhoto]} alt="Avatar" />
            <p className="avatar__name">{data.avatarName}</p>
            <button className="avatar__button" />
          </div>
        </div>
        <div className="printers">
          <div className="printers__menu">
            <p className="printers__text">
              Профили печати ({data.printers.length})
            </p>
            <div className="printers__search-menu">
              <form className="printers__form" action="" method="get">
                <button className="search-button" type="submit" />
                <input
                  className="printers__input"
                  name="printer-search"
                  placeholder="Выбрать принтер"
                  type="text"
                />
              </form>
              <button className="printers__add-button" />
            </div>
          </div>
          <Printer />
        </div>
        <div className="printers__options">
          <button className="printers__option">Подготовить к печати</button>
          <button className="printers__option">
            Скачать<p className="printers__option-description">Row model</p>
          </button>
          <button className="printers__option">
            Заказать печать<p className="printers__option-description">от 7$</p>{" "}
          </button>
        </div>
        <div className="card__stat">
          <div className="card__stat_left">
            <button className="card__stat-item">
              <img className="" src={like} alt="like button" />
            </button>
            <button className="card__stat-item">
              <img className="" src={repost} alt="repost button" />
            </button>
            <button className="card__stat-item">
              <img className="" src={save} alt="save button" />
            </button>
          </div>
          <div className="card__mark-container">
            <p className="card__text">4,8</p>
            {Array.from({ length: data.rating_data }, (_, i) => (
              <img src={star} alt="star" key={i} />
            ))}
            {Array.from({ length: 5 - data.rating_data }, (_, i) => (
              <img src={star_black} alt="star_black" key={i} />
            ))}
            <p className="card__text">(3)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
