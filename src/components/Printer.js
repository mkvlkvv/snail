import React from "react";
import clock from '../images/Clock.svg';
import star from '../images/star.svg';
import main from '../images/main-photo.png';

const Printer = () => {
  return (
    <div className="printers__list">
            <div className="printer">
              <img className="printer__img" src={main} alt="Фото товара" />
              <div className="printer__description">
                <div className="printer__name">X1 Carbon,P1S,X1,X1E,A1</div>
                <div className="printer__items-container">
                  <div className="printer__char">
                    <p class="printer__item">
                      <img className="printer__time-img" src={clock} alt='time' />
                      2,6ч</p>
                    <p class="printer__item">Прочность</p>
                    <p class="printer__item">Качество</p>
                    <p class="printer__item">Успех</p>
                  </div>
                  <p class="printer__item_star">4,8
                    <img className="printer__star" alt="star" src={star} />
                  </p>
                </div>
              </div>
            </div>

            <div className="printer">
              <img className="printer__img" src={main} alt="Фото товара" />
              <div className="printer__description">
                <div className="printer__name">X1 Carbon,P1S,X1</div>
                <div className="printer__items-container">
                  <div className="printer__char">
                    <p class="printer__item">
                      <img className="printer__time-img" src={clock} alt='time' />
                      2,3ч</p>
                    <p class="printer__item">Качество</p>
                    <p class="printer__item">Успех</p>
                  </div>
                  <p class="printer__item_star">4,1
                    <img className="printer__star" alt="star" src={star} />
                  </p>
                </div>
              </div>
            </div>

            <div className="printer">
              <img className="printer__img" src={main} alt="Фото товара" />
              <div className="printer__description">
                <div className="printer__name">X1 Carbon</div>
                <div className="printer__items-container">
                  <div className="printer__char">
                    <p class="printer__item">
                      <img className="printer__time-img" src={clock} alt='time' />
                      1,6ч</p>
                    <p class="printer__item">Успех</p>
                  </div>
                  <p class="printer__item_star">3,0
                    <img className="printer__star" alt="star" src={star} />
                  </p>
                </div>
              </div>
            </div>

            <div className="printer">
              <img className="printer__img" src={main} alt="Фото товара" />
              <div className="printer__description">
                <div className="printer__name">X1 Carbon</div>
                <div className="printer__items-container">
                  <div className="printer__char">
                    <p class="printer__item">
                      <img className="printer__time-img" src={clock} alt='time' />
                      1,6ч</p>
                    <p class="printer__item">Успех</p>
                  </div>
                  <p class="printer__item_star">3,0
                    <img className="printer__star" alt="star" src={star} />
                  </p>
                </div>
              </div>
            </div>

          </div>
  );
};

export default Printer;
