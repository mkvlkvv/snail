import React from "react";
import main from '../images/main-photo.png';
import photo2 from '../images/photo2.jpeg';
import photo3 from '../images/photo3.jpeg';
import like from '../images/like-button.svg';
import repost from '../images/repost-button.svg';
import save from '../images/save-button.svg';
import star from '../images/star.svg';
import star_black from '../images/Star-black.svg';
import Printer from "./Printer";

const ProductCard = () => {
  return (
    <div className="card">
      <div className="slider">
        <div className="card__img-container">
          <button className="slider__button_back " />
          <img className="card__img" src={main} alt="основное фото" />
          <button className="slider__button_next" />
        </div>
        <div className="slider__photo-set">
          <img className="slider__photo" src={main} alt="фото1" />
          <img className="slider__photo" src={photo2} alt="фото2" />
          <img className="slider__photo" src={photo3} alt="фото3" />
        </div>
      </div>
      <div className="card__info">
        <div className="profile">
          <p className="profile__description">3D/Обувь</p>
          <p className="card__name">cross</p>
          <div className="avatar">
            <img className="avatar__img" src={main} alt="Avatar" />
            <p className="avatar__name">anlnv</p>
            <button className="avatar__button" />
          </div>
        </div>
        <div className="printers">
          <div className="printers__menu">
            <p className="printers__text">Профили печати (4)</p>
            <div className="printers__search-menu">
              <form className="printers__form" action="" method="get">
                <button className="search-button" type="submit" />
                <input className="printers__input" name="printer-search" placeholder="Выбрать принтер" type="text" />
              </form>
              <button className="printers__add-button" />
            </div>
          </div>
          <Printer />
        </div>
        <div className="printers__options">
          <button className="printers__option">Подготовить к печати</button>
          <button className="printers__option">Скачать<p className="printers__option-description">Row model</p></button>
          <button className="printers__option">Заказать печать<p className="printers__option-description">от 7$</p> </button>
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
            <img className="card__star" src={star} alt='star' />
            <img className="card__star" src={star} alt='star' />
            <img className="card__star" src={star} alt='star' />
            <img className="card__star" src={star} alt='star' />
            <img className="card__star" src={star_black} alt='star' />
            <p className="card__text">(3)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
