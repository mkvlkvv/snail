import React, { useRef, useState, useEffect } from "react";
import author from "../images/avatar_author.svg";
import like from "../images/like.png";
import smallLeft from "../images/smallLeft.svg";
import smallRight from "../images/smallRight.svg";

const MainPageAuthors = () => {
  const containerRef = useRef(null);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const updateTotalItems = () => {
      const container = containerRef.current;
      if (container) {
        const cards = container.querySelectorAll(".mainpage__authors-author-container");
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
  const visibleItems = 12;
  const totalDots = Math.ceil((totalItems - visibleItems) / visibleItems) + 1;

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

  return (
    <div class="mainpage__authors-container">
      <div class="mainpage__authors-container-topic-name">
        <a>Топ авторов</a>
      </div>

      <div class="mainpage__topworks-container-keyboard">
        <img
          src={smallLeft}
          alt="left"
          class="small-left-image"
          onClick={() => scrollLeft()}
        ></img>
        <img
          src={smallRight}
          alt="right"
          class="small-right-image"
          onClick={() => scrollRight()}
        />
      </div>

      <div class="mainpage__authors-author" ref={containerRef}>
        <div class="mainpage__authors-author-container">
          <img src={author} />
          <div class="mainpage__authors-author-info">
            <a>yaane</a>
            <div class="mainpage__authors-author-container-count">
              <img src={like} />
              <a>600k</a>
            </div>
          </div>
        </div>

        <div class="mainpage__authors-author-container">
          <img src={author} />
          <div class="mainpage__authors-author-info">
            <a>yaane</a>
            <div class="mainpage__authors-author-container-count">
              <img src={like} />
              <a>600k</a>
            </div>
          </div>
        </div>

        <div class="mainpage__authors-author-container">
          <img src={author} />
          <div class="mainpage__authors-author-info">
            <a>yaane</a>
            <div class="mainpage__authors-author-container-count">
              <img src={like} />
              <a>600k</a>
            </div>
          </div>
        </div>

        <div class="mainpage__authors-author-container">
          <img src={author} />
          <div class="mainpage__authors-author-info">
            <a>yaane</a>
            <div class="mainpage__authors-author-container-count">
              <img src={like} />
              <a>600k</a>
            </div>
          </div>
        </div>

        <div class="mainpage__authors-author-container">
          <img src={author} />
          <div class="mainpage__authors-author-info">
            <a>yaane</a>
            <div class="mainpage__authors-author-container-count">
              <img src={like} />
              <a>600k</a>
            </div>
          </div>
        </div>

        <div class="mainpage__authors-author-container">
          <img src={author} />
          <div class="mainpage__authors-author-info">
            <a>yaane</a>
            <div class="mainpage__authors-author-container-count">
              <img src={like} />
              <a>600k</a>
            </div>
          </div>
        </div>

        <div class="mainpage__authors-author-container">
          <img src={author} />
          <div class="mainpage__authors-author-info">
            <a>yaane</a>
            <div class="mainpage__authors-author-container-count">
              <img src={like} />
              <a>600k</a>
            </div>
          </div>
        </div>

        <div class="mainpage__authors-author-container">
          <img src={author} />
          <div class="mainpage__authors-author-info">
            <a>yaane</a>
            <div class="mainpage__authors-author-container-count">
              <img src={like} />
              <a>600k</a>
            </div>
          </div>
        </div>

        <div class="mainpage__authors-author-container">
          <img src={author} />
          <div class="mainpage__authors-author-info">
            <a>yaane</a>
            <div class="mainpage__authors-author-container-count">
              <img src={like} />
              <a>600k</a>
            </div>
          </div>
        </div>

        <div class="mainpage__authors-author-container">
          <img src={author} />
          <div class="mainpage__authors-author-info">
            <a>yaane</a>
            <div class="mainpage__authors-author-container-count">
              <img src={like} />
              <a>600k</a>
            </div>
          </div>
        </div>

        <div class="mainpage__authors-author-container">
          <img src={author} />
          <div class="mainpage__authors-author-info">
            <a>yaane</a>
            <div class="mainpage__authors-author-container-count">
              <img src={like} />
              <a>600k</a>
            </div>
          </div>
        </div>

        <div class="mainpage__authors-author-container">
          <img src={author} />
          <div class="mainpage__authors-author-info">
            <a>yaane</a>
            <div class="mainpage__authors-author-container-count">
              <img src={like} />
              <a>600k</a>
            </div>
          </div>
        </div>
        <div class="mainpage__authors-author-container">
          <img src={author} />
          <div class="mainpage__authors-author-info">
            <a>yaane</a>
            <div class="mainpage__authors-author-container-count">
              <img src={like} />
              <a>600k</a>
            </div>
          </div>
        </div>

        <div class="mainpage__authors-author-container">
          <img src={author} />
          <div class="mainpage__authors-author-info">
            <a>yaane</a>
            <div class="mainpage__authors-author-container-count">
              <img src={like} />
              <a>600k</a>
            </div>
          </div>
        </div>

        <div class="mainpage__authors-author-container">
          <img src={author} />
          <div class="mainpage__authors-author-info">
            <a>yaane</a>
            <div class="mainpage__authors-author-container-count">
              <img src={like} />
              <a>600k</a>
            </div>
          </div>
        </div>

        <div class="mainpage__authors-author-container">
          <img src={author} />
          <div class="mainpage__authors-author-info">
            <a>yaane</a>
            <div class="mainpage__authors-author-container-count">
              <img src={like} />
              <a>600k</a>
            </div>
          </div>
        </div>

        <div class="mainpage__authors-author-container">
          <img src={author} />
          <div class="mainpage__authors-author-info">
            <a>yaane</a>
            <div class="mainpage__authors-author-container-count">
              <img src={like} />
              <a>600k</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageAuthors;
