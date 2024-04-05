import React, { useState, useRef, useEffect } from "react";
import slider from "../images/slider.svg";
import arrow from "../images/arrow.svg";
import dotActive from "../images/dot_active.svg";
import dotUnactive from "../images/dot_unactive.svg";

import profile_works_card_photo1 from "../images/profile_card_1.svg";
import profile_works_card_photo2 from "../images/profile_card_2.svg";
import profile_works_card_photo3 from "../images/profile_card_3.svg";
import profile_works_card_photo4 from "../images/profile_card_4.svg";
import profile_works_card_photo5 from "../images/profile_card_5.svg";
import profile_works_card_photo6 from "../images/profile_card_6.svg";

import profile_works_card_photo from "../images/new_work.svg";

import profile_works_card_avatar1 from "../images/avatarka.png";
import profile_works_card_avatar2 from "../images/avatar2.png";
import save from "../images/save.png";
import like from "../images/like.png";
import star from "../images/star.png";

const MainPageTop = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  useEffect(() => {
    const updateTotalItems = () => {
      const container = containerRef.current;
      if (container) {
        const cards = container.querySelectorAll(".mainpage__works-card");
        setTotalItems(cards.length);
      }
    };

    updateTotalItems();

    // Добавляем прослушиватель событий на изменение размеров окна, чтобы обновлять количество элементов при изменении размера экрана
    window.addEventListener("resize", updateTotalItems);

    // Очищаем прослушиватель событий при размонтировании компонента
    return () => {
      window.removeEventListener("resize", updateTotalItems);
    };
  }, []);

  // Вычисление количества точек
  const visibleItems = 5;
  const totalDots = Math.ceil((totalItems - visibleItems) / visibleItems) + 1;
  const itemsPerScroll = 5;

  // Функция для прокрутки контейнера вправо на ширину 5 элементов или до конца, если осталось меньше
  const scrollRight = () => {
    const container = containerRef.current;
    if (container) {
      // Вычисляем ширину контейнера и ширину одного элемента
      const containerWidth = container.clientWidth;
      const itemWidth = container.scrollWidth / totalItems;
      // Вычисляем количество элементов, на которое нужно прокрутить
      const itemsToScroll = Math.min(
        Math.ceil(containerWidth / itemWidth),
        totalItems - visibleItems
      );
      // Прокручиваем контейнер на необходимое количество элементов
      container.scrollBy({
        left: itemWidth * itemsToScroll,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({ left: 0, behavior: "smooth" }); // Скроллим влево до самого начала
    }
  };

  // Генерация точек
  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < totalDots; i++) {
      if (i === activeDotIndex) {
        dots.push(
          <img key={i} src={dotActive} onClick={() => handleClick(i)} />
        );
      } else {
        dots.push(
          <img key={i} src={dotUnactive} onClick={() => handleClick(i)} />
        );
      }
    }
    return dots;
  };

  const handleClick = (index) => {
    if (index === totalDots - 1) {
      scrollLeft(); // Скроллим влево, если последняя точка
      setActiveDotIndex(0); // Устанавливаем первую точку активной
    } else {
      setActiveDotIndex(index + 1); // Следующая точка становится активной
      scrollRight(); // Скроллим вправо, если не последняя точка
    }
  };

  return (
    <div class="mainpage__topworks-container">
      <div class="mainpage__topworks-container-topic">
        <div class="mainpage__topworks-container-topic-name">
          <a>Топ работ</a>
          <img src={arrow} />
        </div>

        <div class="mainpage__topworks-container-topic-bound">
          {renderDots()}
        </div>
      </div>

      <div class="mainpage__topworks-container-cards" ref={containerRef}>
        <div class="mainpage__works-card">
          <div class="mainpage__works-card-maininfo">
            <p>Монстр кибер железный человек</p>
          </div>
          <div class="mainpage__works-card-photo">
            <img src={profile_works_card_photo} alt="card_photo" />
          </div>
          <div class="mainpage__foryou-card-info">
            <div class="mainpage__foryou-card-authors">
              <div class="mainpage__foryou-card-avatar">
                <img src={profile_works_card_avatar1} alt="card_avatar" />
                <img src={profile_works_card_avatar2} alt="card_avatar" />
              </div>
              <a>yaane</a>
            </div>

            <div class="mainpage__foryou-card-info-count">
              <div class="mainpage__foryou-card-info-likes">
                <img src={like} alt="like" />
                <p>6</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mainpage__works-card">
          <div class="mainpage__works-card-maininfo">
            <p>Монстр кибер железный человек</p>
          </div>
          <div class="mainpage__works-card-photo">
            <img src={profile_works_card_photo} alt="card_photo" />
          </div>
          <div class="mainpage__foryou-card-info">
            <div class="mainpage__foryou-card-authors">
              <div class="mainpage__foryou-card-avatar">
                <img src={profile_works_card_avatar1} alt="card_avatar" />
                <img src={profile_works_card_avatar2} alt="card_avatar" />
              </div>
              <a>yaane</a>
            </div>

            <div class="mainpage__foryou-card-info-count">
              <div class="mainpage__foryou-card-info-likes">
                <img src={like} alt="like" />
                <p>6</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mainpage__works-card">
          <div class="mainpage__works-card-maininfo">
            <p>Монстр кибер железный человек</p>
          </div>
          <div class="mainpage__works-card-photo">
            <img src={profile_works_card_photo} alt="card_photo" />
          </div>
          <div class="mainpage__foryou-card-info">
            <div class="mainpage__foryou-card-authors">
              <div class="mainpage__foryou-card-avatar">
                <img src={profile_works_card_avatar1} alt="card_avatar" />
                <img src={profile_works_card_avatar2} alt="card_avatar" />
              </div>
              <a>yaane</a>
            </div>

            <div class="mainpage__foryou-card-info-count">
              <div class="mainpage__foryou-card-info-likes">
                <img src={like} alt="like" />
                <p>6</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mainpage__works-card">
          <div class="mainpage__works-card-maininfo">
            <p>Монстр кибер железный человек</p>
          </div>
          <div class="mainpage__works-card-photo">
            <img src={profile_works_card_photo} alt="card_photo" />
          </div>
          <div class="mainpage__foryou-card-info">
            <div class="mainpage__foryou-card-authors">
              <div class="mainpage__foryou-card-avatar">
                <img src={profile_works_card_avatar1} alt="card_avatar" />
                <img src={profile_works_card_avatar2} alt="card_avatar" />
              </div>
              <a>yaane</a>
            </div>

            <div class="mainpage__foryou-card-info-count">
              <div class="mainpage__foryou-card-info-likes">
                <img src={like} alt="like" />
                <p>6</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mainpage__works-card">
          <div class="mainpage__works-card-maininfo">
            <p>Монстр кибер железный человек</p>
          </div>
          <div class="mainpage__works-card-photo">
            <img src={profile_works_card_photo} alt="card_photo" />
          </div>
          <div class="mainpage__foryou-card-info">
            <div class="mainpage__foryou-card-authors">
              <div class="mainpage__foryou-card-avatar">
                <img src={profile_works_card_avatar1} alt="card_avatar" />
                <img src={profile_works_card_avatar2} alt="card_avatar" />
              </div>
              <a>yaane</a>
            </div>

            <div class="mainpage__foryou-card-info-count">
              <div class="mainpage__foryou-card-info-likes">
                <img src={like} alt="like" />
                <p>6</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mainpage__works-card">
          <div class="mainpage__works-card-maininfo">
            <p>Монстр кибер железный человек</p>
          </div>
          <div class="mainpage__works-card-photo">
            <img src={profile_works_card_photo} alt="card_photo" />
          </div>
          <div class="mainpage__foryou-card-info">
            <div class="mainpage__foryou-card-authors">
              <div class="mainpage__foryou-card-avatar">
                <img src={profile_works_card_avatar1} alt="card_avatar" />
                <img src={profile_works_card_avatar2} alt="card_avatar" />
              </div>
              <a>yaane</a>
            </div>

            <div class="mainpage__foryou-card-info-count">
              <div class="mainpage__foryou-card-info-likes">
                <img src={like} alt="like" />
                <p>6</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mainpage__works-card">
          <div class="mainpage__works-card-maininfo">
            <p>Монстр кибер железный человек</p>
          </div>
          <div class="mainpage__works-card-photo">
            <img src={profile_works_card_photo} alt="card_photo" />
          </div>
          <div class="mainpage__foryou-card-info">
            <div class="mainpage__foryou-card-authors">
              <div class="mainpage__foryou-card-avatar">
                <img src={profile_works_card_avatar1} alt="card_avatar" />
                <img src={profile_works_card_avatar2} alt="card_avatar" />
              </div>
              <a>yaane</a>
            </div>

            <div class="mainpage__foryou-card-info-count">
              <div class="mainpage__foryou-card-info-likes">
                <img src={like} alt="like" />
                <p>6</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mainpage__works-card">
          <div class="mainpage__works-card-maininfo">
            <p>Монстр кибер железный человек</p>
          </div>
          <div class="mainpage__works-card-photo">
            <img src={profile_works_card_photo} alt="card_photo" />
          </div>
          <div class="mainpage__foryou-card-info">
            <div class="mainpage__foryou-card-authors">
              <div class="mainpage__foryou-card-avatar">
                <img src={profile_works_card_avatar1} alt="card_avatar" />
                <img src={profile_works_card_avatar2} alt="card_avatar" />
              </div>
              <a>yaane</a>
            </div>

            <div class="mainpage__foryou-card-info-count">
              <div class="mainpage__foryou-card-info-likes">
                <img src={like} alt="like" />
                <p>6</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mainpage__works-card">
          <div class="mainpage__works-card-maininfo">
            <p>Монстр кибер железный человек</p>
          </div>
          <div class="mainpage__works-card-photo">
            <img src={profile_works_card_photo} alt="card_photo" />
          </div>
          <div class="mainpage__foryou-card-info">
            <div class="mainpage__foryou-card-authors">
              <div class="mainpage__foryou-card-avatar">
                <img src={profile_works_card_avatar1} alt="card_avatar" />
                <img src={profile_works_card_avatar2} alt="card_avatar" />
              </div>
              <a>yaane</a>
            </div>

            <div class="mainpage__foryou-card-info-count">
              <div class="mainpage__foryou-card-info-likes">
                <img src={like} alt="like" />
                <p>6</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mainpage__works-card">
          <div class="mainpage__works-card-maininfo">
            <p>Монстр кибер железный человек</p>
          </div>
          <div class="mainpage__works-card-photo">
            <img src={profile_works_card_photo} alt="card_photo" />
          </div>
          <div class="mainpage__foryou-card-info">
            <div class="mainpage__foryou-card-authors">
              <div class="mainpage__foryou-card-avatar">
                <img src={profile_works_card_avatar1} alt="card_avatar" />
                <img src={profile_works_card_avatar2} alt="card_avatar" />
              </div>
              <a>yaane</a>
            </div>

            <div class="mainpage__foryou-card-info-count">
              <div class="mainpage__foryou-card-info-likes">
                <img src={like} alt="like" />
                <p>6</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mainpage__works-card">
          <div class="mainpage__works-card-maininfo">
            <p>Монстр кибер железный человек</p>
          </div>
          <div class="mainpage__works-card-photo">
            <img src={profile_works_card_photo} alt="card_photo" />
          </div>
          <div class="mainpage__foryou-card-info">
            <div class="mainpage__foryou-card-authors">
              <div class="mainpage__foryou-card-avatar">
                <img src={profile_works_card_avatar1} alt="card_avatar" />
                <img src={profile_works_card_avatar2} alt="card_avatar" />
              </div>
              <a>yaane</a>
            </div>

            <div class="mainpage__foryou-card-info-count">
              <div class="mainpage__foryou-card-info-likes">
                <img src={like} alt="like" />
                <p>6</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mainpage__works-card">
          <div class="mainpage__works-card-maininfo">
            <p>Монстр кибер железный человек</p>
          </div>
          <div class="mainpage__works-card-photo">
            <img src={profile_works_card_photo} alt="card_photo" />
          </div>
          <div class="mainpage__foryou-card-info">
            <div class="mainpage__foryou-card-authors">
              <div class="mainpage__foryou-card-avatar">
                <img src={profile_works_card_avatar1} alt="card_avatar" />
                <img src={profile_works_card_avatar2} alt="card_avatar" />
              </div>
              <a>yaane</a>
            </div>

            <div class="mainpage__foryou-card-info-count">
              <div class="mainpage__foryou-card-info-likes">
                <img src={like} alt="like" />
                <p>6</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageTop;
