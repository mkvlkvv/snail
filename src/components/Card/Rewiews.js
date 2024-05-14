import React, { useState, useEffect } from "react";
import star from "../../images/Star-white-fill.svg";
import star_black from "../../images/Star-white.svg";
import star_yellow_fill from "../../images/star.svg";
import star_yellow from "../../images/Star-black.svg";
import like from "../../images/like.svg";
import rdml from "../../images/rdml.jpeg" 
import lob from "../../images/lobashik.jpg"
import anlnv from "../../images/anlnv.jpg"
import c1 from "../../images/c1.webp"
import c2 from "../../images/c21.webp"
import c21 from "../../images/c22.webp"
import c3 from "../../images/c3.webp"
import mk from "../../images/mkvlkv.jpg"
import cm1 from "../../images/cm1.webp"
import cm2 from "../../images/cm2.webp"
import dn from "../../images/danila.jpg"


const Reviews = () => {
  const data = {
    reviews: [
      {
        name: "rdml",
        date: "10 мая 2024",
        text: "Этот горшок для фикуса просто великолепен! Он выглядит настолько реалистично, что иногда забываешь, что это всего лишь виртуальная модель. Дизайн безупречен, текстуры прекрасно передают структуру глины, а детализация поражает воображение. Нет никаких сомнений, что это лучший выбор для моего сада!",
        rating: 5,
        likes: 7,
        mainPhoto: c1,
        photos: [
        ],
        avatar: rdml,
      },
      {
        name: "Lobaaashik",
        date: "9 мая 2024",
        text: "При масштабировании некоторые детали начинают выглядеть не слишком реалистично. В целом, хороший продукт, но надеюсь на улучшения в будущем",
        rating: 4,
        likes: 7,
        mainPhoto: c2,
        photos: [
          c2, c21
        ],
        avatar: lob
      },
      {
        name: "annlnv",
        date: "13 марта 2024",
        rating: 5,
        text: "Всё круто! 5 из 5 звёзд!",
        likes: 1,
        id: "no_photo",
        mainPhoto: null,
        photos: [],
        avatar: anlnv
      },
      {
        name: "mkvlkvv",
        date: "12 марта 2024",
        text: "Этот горшок для растений - настоящая находка!",
        rating: 5,
        likes: 7,
        mainPhoto: cm1,
        photos: [
          cm1, cm2
        ],
        avatar: mk
      },
      {
        name: "Danila",
        date: "11 января 2024",
        text: "Этот горшок для фикуса просто великолепен!",
        rating: 5,
        likes: 8,
        mainPhoto: "https://makerworld.bblmw.com/makerworld/model/428498/comment/05b19620-08b2-11ef-b04a-f3cf0ef06e7c.jpg?image_process=resize,w_300/format,webp",
        photos: [
        ],
        avatar: dn,
      },
    ],
  };

  const [reviewState, setReviewState] = useState({});

  useEffect(() => {
    if (data.reviews) {
      const initialState = {};
      data.reviews.forEach((review, index) => {
        initialState[index] = {
          mainPhoto: review.mainPhoto,
          activePhotoIndex: Array(review.photos.length).fill(0),
          smallPhotos: Array(review.photos.length).fill(false),
        };
      });
      setReviewState(initialState);
    }
  }, []);

  const handlePhotoClickGenerator = (reviewIndex, photoIndex) => {
    return () => {
      setReviewState((prevState) => {
        const newState = { ...prevState };
        newState[reviewIndex] = {
          ...prevState[reviewIndex],
          mainPhoto: data.reviews[reviewIndex].photos[photoIndex],
          activePhotoIndex: Array(data.reviews[reviewIndex].photos.length).fill(-1).map((_, idx) => idx === photoIndex ? idx : -1),
        };
        return newState;
      });
    };
  };

  const handleReviewClick = (event) => {
    event.preventDefault();
    const starButtons = document.querySelectorAll(".submit");
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
            <img src={star_yellow_fill} alt="star"></img>
            <img src={star_yellow_fill} alt="star"></img>
            <img src={star_yellow_fill} alt="star"></img>
            <img src={star_yellow_fill} alt="star"></img>
            <img src={star_yellow} alt="star"></img>
          </div>
          <h2>({data.reviews.length})</h2>
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
                <textarea
                  id="feedback"
                  name="feedback"
                  placeholder="Нам важен ваш отзыв!"
                ></textarea>
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
          {data.reviews.map((review, reviewIndex) => (
            <div
              className={
                review.id === "no_photo" ? "review no_photo" : "review"
              }
              key={reviewIndex}
              id={review.id === "no_photo" ? "no_photo" : undefined}
            >
              <div className="maininfo">
                <div className="info">
                  <div className="left-info">
                    <div className="avatar">
                      <img src={review.avatar} alt="Аватар" />
                    </div>
                    <div className="details">
                      <span>{review.name}</span>
                      <span className="date">{review.date}</span>
                    </div>
                  </div>
                  <div className="rating">
                    {[
                      ...Array.from({ length: review.rating }, (_, i) => (
                        <img src={star} alt="star" key={`star-${i}`} />
                      )),
                      ...Array.from({ length: 5 - review.rating }, (_, i) => (
                        <img
                          src={star_black}
                          alt="empty-star"
                          key={`empty-star-${i}`}
                        />
                      )),
                    ]}
                  </div>
                </div>
                <div className="text">
                  <p>{review.text}</p>
                  <div
                    className="rewiew_likes"
                    id={review.id === "no_photo" ? "no_photo" : undefined}
                  >
                    <img
                      src={like}
                      alt="like"
                      id={review.id === "no_photo" ? "no_photo1" : undefined}
                    />
                    <div
                      className="count_likes"
                      id={review.id === "no_photo" ? "no_photo2" : undefined}
                    >
                      {review.likes}
                    </div>
                  </div>
                </div>
              </div>
              {review.id !== "no_photo" && (
                <div className="rewiew_photo">
                  {reviewState[reviewIndex] &&
                    reviewState[reviewIndex].mainPhoto && (
                      <img
                        src={reviewState[reviewIndex].mainPhoto}
                        alt="Фото"
                      />
                    )}
                  <div className="small-photos">
                    {review.photos.map((photo, photoIndex) => (
                      <img
                        src={photo}
                        alt={`Маленькое фото ${photoIndex + 1}`}
                        onClick={handlePhotoClickGenerator(
                          reviewIndex,
                          photoIndex
                        )}
                        className={
                          reviewState[reviewIndex] &&
                          reviewState[reviewIndex].activePhotoIndex[
                            photoIndex
                          ] === photoIndex
                            ? "active"
                            : ""
                        }
                        id={`reviewPhoto-${reviewIndex}-${photoIndex}`}
                        key={photoIndex}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const reviewsClass = ".review";
export default Reviews;
