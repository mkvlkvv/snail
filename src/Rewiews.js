import React from "react";
import "./Rewiews.css"; 

const Reviews = () => {
  return (
    <div className="reviews-container">
      <div className="reviews">
        <h2>Отзывы 4.9 ★★★★☆ (4)</h2>
        <div className="container">
          <div className="feedback-form">
            <form>
              <div className="input-and-buttons">
                <button className="attach-file">Прикрепить</button>
                <textarea id="feedback" name="feedback"></textarea>
                <button className="submit">☆☆☆☆☆</button>
                <button className="submit">Отправить</button>
              </div>
            </form>
          </div>
        </div>
        <div className="review-list">
          <div className="review">
            <div class="maininfo">
              <div class="info">
                <div class="left-info">
                  <div class="avatar">
                    <img src="path/to/avatar.jpg" alt="Аватар" />
                  </div>
                  <div class="details">
                    <span>Иван Иванов</span>
                    <span>15 февраля 2024</span>
                  </div>
                </div>
                <div class="rating">★★★★★</div>
              </div>
              <div class="text">
                <p>Отличный продукт!</p>
              </div>
            </div>
            <div class="rewiew_photo">
              <img src="path/to/avatar.jpg" alt="Фото" />
            </div>
          </div>
          <div className="review">
            <div class="maininfo">
              <div class="info">
                <div class="left-info">
                  <div class="avatar">
                    <img src="path/to/avatar.jpg" alt="Аватар" />
                  </div>
                  <div class="details">
                    <span>Пётр Петров</span>
                    <span>14 февраля 2024</span>
                  </div>
                </div>
                <div class="rating">★★★★☆</div>
              </div>
              <div class="text">
                <p>Были проблемы</p>
              </div>
            </div>
            <div class="rewiew_photo">
              <img src="path/to/avatar.jpg" alt="Фото" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
