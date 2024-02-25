import React, { useState } from "react";
import "./ProductDetails.css"; 

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="product-details">
      <div className="product-detail">
        <div className="tabs">
          <button
            onClick={() => handleTabChange("description")}
            className={activeTab === "description" ? "active" : ""}
          >
            Описание
          </button>
          <button
            onClick={() => handleTabChange("reviews")}
            className={activeTab === "reviews" ? "active" : ""}
          >
            Отзывы
          </button>
          <button
            onClick={() => handleTabChange("remixes")}
            className={activeTab === "remixes" ? "active" : ""}
          >
            Ремиксы
          </button>
          <button
            onClick={() => handleTabChange("similarModels")}
            className={activeTab === "similarModels" ? "active" : ""}
          >
            Похожие модели
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "description" && (
            <p>
              Ищете идеальное сочетание стиля, комфорта и функциональности?
              Представляем вам наш последний продукт - элегантный и
              многофункциональный предмет, который станет незаменимым
              аксессуаром в вашем повседневном образе. Этот товар не просто
              удовлетворяет все ваши потребности, но и делает это с
              непревзойденным стилем и элегантностью. Изготовленный из
              высококачественных материалов, наш товар обещает долговечность и
              надежность. Каждая деталь продумана до мелочей, чтобы обеспечить
              максимальное удобство использования. Эргономичный дизайн и
              инновационные технологии делают этот товар идеальным выбором для
              тех, кто ценит качество и стиль. Независимо от вашего образа жизни
              или повседневных задач, наш товар поможет вам справиться с любыми
              задачами. Он идеально подходит для активного образа жизни, деловых
              встреч, поездок или просто для отдыха. С ним вы будете выглядеть
              стильно и уверенно в любой ситуации. Наш продукт не просто предмет
              обихода, он станет частью вашего стиля и выражением вашей
              личности. Выберите качество, выберите стиль - выберите наш товар,
              и он превзойдет ваши ожидания!
            </p>
          )}
          {activeTab === "reviews" && (
            <p>
              Отзывы о товаре: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit...
            </p>
          )}
          {activeTab === "remixes" && (
            <p>
              Ремиксы товара: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit...
            </p>
          )}
          {activeTab === "similarModels" && (
            <p>
              Похожие модели: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit...
            </p>
          )}
        </div>
        <div className="tags">
          <span>Обувь</span>
          <span>Спорт</span>
          <span>Одежда</span>
          <span>Кроссовки</span>
          <span>Обувь</span>
          <span>Одежда</span>
          <span>Кроссовки</span>
          <span>Обувь</span>
          <span>Одежда</span>
          <span>Кроссовки</span>
          <span>Обувь</span>
          <span>Одежда</span>
          <span>Кроссовки</span>
          <span>Обувь</span>
          {/* Добавьте другие теги здесь */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
