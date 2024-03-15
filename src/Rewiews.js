import React, { useState } from 'react';
import "./Rewiews.css"; 

const Reviews = () => {
  const [mainPhoto, setMainPhoto] = useState("/images/photo4.jpg");
  const [activePhotoSet1, setActivePhotoSet1] = useState(0);
  const [activePhotoSet2, setActivePhotoSet2] = useState(0);

  const handleFirstPhotoClick = (photo, index) => {
    setMainPhoto(photo);
    setActivePhotoSet1(index);
  };

  const handleSecondPhotoClick = (photo, index) => {
    setMainPhoto(photo);
    setActivePhotoSet2(index);
  };

  const handleReviewClick = (event) => {
    event.preventDefault();
    const mouseX = event.pageX - event.target.offsetLeft;
    const width = event.target.offsetWidth;
    const starPercentage = (mouseX / width) * 100;
    const starRating = Math.round((starPercentage / 100) * 5);
    const stars = '★'.repeat(starRating) + '☆'.repeat(5 - starRating);
    event.target.textContent = stars;  };

  return (
    <div className="reviews-container">
      <div className="reviews">
        <div class="rewiew-name">
          <h2>Отзывы 4,9</h2> <h2 class="rating-stars">★★★★☆ </h2>
          <h2>(3)</h2>
          <div class="similar-card-avatar">
            <img src="/images/up.png" alt="up" />
          </div>
        </div>
        <div className="container">
          <div className="feedback-form">
            <form>
              <div className="input-and-buttons">
                <a href="http://example.com" className='attach-file'>
                  <img src="/images/skrepka.png" alt="skrepka" />
                </a>
                <textarea id="feedback" name="feedback"></textarea>
                <div class="submit-button"></div>
                <button class="submit" onClick={handleReviewClick}>☆☆☆☆☆</button>
                <a href="http://example.com" className='submit'>
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
                <div class="rating">★★★★★</div>
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
              </div>
            </div>
            <div class="rewiew_photo">
              <img src={mainPhoto} alt="Фото" />
              <div className="small-photos">
              <img
  src="/images/photo4.jpg"
  alt="Маленькое фото 1"
  onClick={() => handleFirstPhotoClick("/images/photo4.jpg", 1)}
  className={activePhotoSet1 === 1 ? 'active' : ''}
/>
<img
  src="/images/photo2.jpeg"
  alt="Маленькое фото 2"
  onClick={() => handleFirstPhotoClick("/images/photo2.jpeg", 2)}
  className={activePhotoSet1 === 2 ? 'active' : ''}
/>
<img
  src="/images/photo3.jpeg"
  alt="Маленькое фото 3"
  onClick={() => handleFirstPhotoClick("/images/photo3.jpeg", 3)}
  className={activePhotoSet1 === 3 ? 'active' : ''}
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
                <div class="rating">★★★★☆</div>
              </div>
              <div class="text">
                <p>Были проблемы</p>
              </div>
            </div>
            <div class="rewiew_photo">
              <img src="/images/photo4.jpg"alt="Фото" />
              <div className="small-photos">
          <img
            src="/images/photo4.jpg"
            alt="Маленькое фото 1"
            onClick={() => handleSecondPhotoClick("/images/photo4.jpg", 1)}
            className={activePhotoSet2 === 1 ? 'active' : ''}
          />
          <img
            src="/images/photo2.jpeg"
            alt="Маленькое фото 2"
            onClick={() => handleSecondPhotoClick("/images/photo2.jpeg", 2)}
            className={activePhotoSet2 === 2 ? 'active' : ''}
          />
          <img
            src="/images/photo3.jpeg"
            alt="Маленькое фото 3"
            onClick={() =>handleSecondPhotoClick("/images/photo3.jpeg", 3)}
            className={activePhotoSet2 === 3 ? 'active' : ''}
          />
          <img
            src="/images/photo1.jpeg"
            alt="Маленькое фото 4"
            onClick={() => handleSecondPhotoClick("/images/photo1.jpeg", 4)}
            className={activePhotoSet2 === 4 ? 'active' : ''}
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
                <div class="rating">★★★★☆</div>
              </div>
              <div class="text">
                <p>Были проблемы</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;