import React from "react";
import "./ProductCard.css"; 

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="slider">
        <div className="row">
          <button>Previsios</button>
          <img src="photo1.jpeg" alt="Photo 1" />
          <button>Next</button>
        </div>
        <div className="row photo-set">
          <img src="photo2.jpeg" alt="Photo 2" />
          <img src="photo2.jpeg" alt="Photo 2" />
          <img src="photo3.jpeg" alt="Photo 3" />
        </div>
      </div>
      <div className="text">
        <div className="text-content">
          <p>3D/Обувь</p>
          <div className="card-name">
            <p>Crocs</p>
          </div>
          <div className="avatar">
            <img src="avatar.jpg" alt="Avatar" />
            <p>Имя пользователя</p>
            <button>Подписаться</button>
          </div>
          <div className="printing-profiles">
            <p>Профили печати (4)</p>
            <div className="all-printers">
              <p>Все принтеры</p>
              <button>Добавить</button>
            </div>
          </div>
          <div
            className="div-colored"
            style={{ backgroundColor: "#333", width: "100%", height: "50px" }}
          >
            <div className="photo-div">
              <img src="your_photo_url" alt="Photo" />
            </div>
            <div className="text-div">
              <div className="text-content">
                <div className="title">X1 Carbon,P1S,X1,X1E,A1</div>
                <div className="description">
                  <div class="circle">2,6ч</div>
                  <div class="circle">Гарантия</div>
                  <div class="circle">Прочность</div>
                  <div class="circle">Качества</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="div-colored"
            style={{ backgroundColor: "#333", width: "100%", height: "50px" }}
          >
            <div className="photo-div">
              <img src="your_photo_url" alt="Photo" />
            </div>
            <div className="text-div">
              <div className="text-content">
                <div className="title">X1 Carbon,P1S,X1</div>
                <div className="description">
                  <div class="circle">2,1ч</div>
                  <div class="circle">Гарантия</div>
                  <div class="circle">Прочность</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="div-colored"
            style={{ backgroundColor: "#333", width: "100%", height: "50px" }}
          >
            <div className="photo-div">
              <img src="your_photo_url" alt="Photo" />
            </div>
            <div className="text-div">
              <div className="text-content">
                <div className="title">X1 Carbon</div>
                <div className="description">
                  <div class="circle">1,8ч</div>
                  <div class="circle">Гарантия</div>
                </div>
              </div>
            </div>
          </div>

          <div className="printing-options">
            <button>Подготовить к печати</button>
            <button>Скачать</button>
            <button>Заказать печать</button>
          </div>
          <div className="last-div"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
