import React, { useState } from "react";
import star from '../images/Star-white-fill.svg';
import star_black from '../images/Star-white.svg';
import star_yellow_fill from '../images/star.svg';
import star_yellow from '../images/Star-black.svg';
import like from '../images/like.svg'

const Reviews = () => {
  const [mainPhotoFirst, setMainPhotoFirst] = useState("/images/photo4.jpg");
  const [mainPhotoSecond, setMainPhotoSecond] = useState("/images/photo4.jpg");
  const [activePhotoSet1, setActivePhotoSet1] = useState(0);
  const [activePhotoSet2, setActivePhotoSet2] = useState(0);

  const handleFirstPhotoClick = (photo, index) => {
    setMainPhotoFirst(photo);
    setActivePhotoSet1(index);
  };

  const handleSecondPhotoClick = (photo, index) => {
    setMainPhotoSecond(photo);
    setActivePhotoSet2(index);
  };

  const handleReviewClick = (event) => {
    event.preventDefault(); 
    const starButtons = document.querySelectorAll('.submit'); 
    const clickedButtonIndex = Array.from(starButtons).indexOf(event.target); 
    for (let i = 0; i <= clickedButtonIndex; i++) {
      starButtons[i].style.backgroundImage = `url(${star})`; 
    }
};

  return (
    <div className="reviews-container">
      <div className="reviews">
        <div class="rewiew-name">
          <h2>Отзывы 4,9</h2> 
          <div class="rating-stars">
            <img src={star_yellow_fill} alt='star'></img>
            <img src={star_yellow_fill} alt='star'></img>
            <img src={star_yellow_fill} alt='star'></img>
            <img src={star_yellow_fill} alt='star'></img>
            <img src={star_yellow} alt='star'></img>
          </div>
          <h2>(3)</h2>
          <div class="rating-up">
            <img src="/images/up.png" alt="up" />
          </div>
        </div>
        <div className="container">
          <div className="feedback-form">
            <form>
              <div className="input-and-buttons">
                <a href="http://example.com" className="attach-file">
                  <img src="/images/skrepka.png" alt="skrepka" />
                </a>
                <textarea id="feedback" name="feedback" placeholder="Нам важен ваш отзыв!"></textarea>
                <div class="submit-button"></div>
                <div class="star-button">
                  <button class="submit" onClick={handleReviewClick}></button>
                  <button class="submit" onClick={handleReviewClick}></button>
                  <button class="submit" onClick={handleReviewClick}></button>
                  <button class="submit" onClick={handleReviewClick}></button>
                  <button class="submit" onClick={handleReviewClick}></button>
                </div>
                <a href="http://example.com" className="submit-button">
                  <img src="/images/send.png" alt="send" />
                </a>
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
                    <img src="/images/photo3.jpeg" alt="Аватар" />
                  </div>
                  <div class="details">
                    <span>Иван Иванов</span>
                    <span class="date">15 февраля 2024</span>
                  </div>
                </div>
                <div class="rating">
                <img src={star} alt='star'></img>
                <img src={star} alt='star'></img>
                <img src={star} alt='star'></img>
                <img src={star} alt='star'></img>
                <img src={star} alt='star'></img>
                </div>
              </div>
              <div class="text">
                <p>
                  Я впервые попробовал 3D печать, и это был настоящий переворот
                  для меня. Возможность создавать трехмерные объекты прямо на
                  моем столе просто поражает воображение. Я уже использовал ее
                  для создания прототипов для моих проектов и даже для
                  персональных подарков. Это такая удивительная технология,
                  которая точно изменит будущее производства!
                </p>
                <div class='rewiew_likes'>
                  <img src={like} alt='like'></img>
                  <div class='count_likes'>6</div>
                </div>
              </div>
            </div>
            <div class="rewiew_photo">
              <img src={mainPhotoFirst} alt="Фото" />
              <div className="small-photos">
                <img
                  src="/images/photo4.jpg"
                  alt="Маленькое фото 1"
                  onClick={() => handleFirstPhotoClick("/images/photo4.jpg", 1)}
                  className={activePhotoSet1 === 1 ? "active" : ""}
                />
                <img
                  src="/images/photo2.jpeg"
                  alt="Маленькое фото 2"
                  onClick={() =>
                    handleFirstPhotoClick("/images/photo2.jpeg", 2)
                  }
                  className={activePhotoSet1 === 2 ? "active" : ""}
                />
                <img
                  src="/images/photo3.jpeg"
                  alt="Маленькое фото 3"
                  onClick={() =>
                    handleFirstPhotoClick("/images/photo3.jpeg", 3)
                  }
                  className={activePhotoSet1 === 3 ? "active" : ""}
                />
              </div>
            </div>
          </div>
          <div className="review">
            <div class="maininfo">
              <div class="info">
                <div class="left-info">
                  <div class="avatar">
                    <img src="/images/photo3.jpeg" alt="Аватар" />
                  </div>
                  <div class="details">
                    <span>Пётр Петров</span>
                    <span class="date">14 февраля 2024</span>
                  </div>
                </div>
                <div class="rating">
                <img src={star} alt='star'></img>
                <img src={star} alt='star'></img>
                <img src={star} alt='star'></img>
                <img src={star} alt='star'></img>
                <img src={star_black} alt='star_black'></img>
                </div>
              </div>
              <div class="text">
                <p>Были проблемы</p>
                <div class='rewiew_likes'>
                  <img src={like} alt='like'></img>
                  <div class='count_likes'>4</div>
                </div>
              </div>
            </div>
            <div class="rewiew_photo">
              <img src={mainPhotoSecond} alt="Фото" />
              <div className="small-photos">
                <img
                  src="/images/photo4.jpg"
                  alt="Маленькое фото 1"
                  onClick={() =>
                    handleSecondPhotoClick("/images/photo4.jpg", 1)
                  }
                  className={activePhotoSet2 === 1 ? "active" : ""}
                />
                <img
                  src="/images/photo2.jpeg"
                  alt="Маленькое фото 2"
                  onClick={() =>
                    handleSecondPhotoClick("/images/photo2.jpeg", 2)
                  }
                  className={activePhotoSet2 === 2 ? "active" : ""}
                />
                <img
                  src="/images/photo3.jpeg"
                  alt="Маленькое фото 3"
                  onClick={() =>
                    handleSecondPhotoClick("/images/photo3.jpeg", 3)
                  }
                  className={activePhotoSet2 === 3 ? "active" : ""}
                />
                <img
                  src="/images/photo1.jpeg"
                  alt="Маленькое фото 4"
                  onClick={() =>
                    handleSecondPhotoClick("/images/photo1.jpeg", 4)
                  }
                  className={activePhotoSet2 === 4 ? "active" : ""}
                />
              </div>
            </div>
          </div>
          <div className="review" id='no_photo'>
            <div class="maininfo">
              <div class="info">
                <div class="left-info">
                  <div class="avatar">
                    <img src="/images/photo3.jpeg" alt="Аватар" />
                  </div>
                  <div class="details">
                    <span>Пётр Петров</span>
                    <span class="date">14 февраля 2024</span>
                  </div>
                </div>
                <div class="rating">
                <div class="rating">
                <img src={star} alt='star'></img>
                <img src={star} alt='star'></img>
                <img src={star} alt='star'></img>
                <img src={star} alt='star'></img>
                <img src={star} alt='star'></img>
                </div>
                </div>
              </div>
              <div class="text">
                <p>Были проблемы</p>
                <div class='rewiew_likes' id='no_photo'>
                <img src={like} alt='like' id='no_photo1'></img>
                  <div class='count_likes' id='no_photo2'>1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const reviewsClass = ".review"
export default Reviews;
