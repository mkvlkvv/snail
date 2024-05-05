import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import {reviewsClass} from './Rewiews';
import {remixesClass} from './Remixes';
import {similarModelClass} from "./SimilarModelCard";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [dataResponseDescription, setDataResponseDescription] = useState(null);
  const [dataResponseLicence, setDataResponseLicence] = useState(null);
  const { id } = useParams();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchDataFirst = async () => {
      const alias = "radmilaradmila"
      const password = "radmila05122004"
      try {
        const response = await fetch("http://79.174.92.231/api/token/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ alias, password }),
        });

        if (!response.ok) {
          throw new Error("Ошибка при аутентификации");
        }
        const authData = await response.json();
        const token = authData.access;
        console.log(token)
        setToken(token);

        const verifyResponse = await fetch(
          "http://79.174.92.231/api/token/verify/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
          }
        );

        if (!verifyResponse.ok) {
          throw new Error("Ошибка при проверке валидности access токена");
        }

        // Дальнейшие действия при успешной авторизации
      } catch (error) {
        console.error("Произошла ошибка:", error.message);
        // Дополнительная логика обработки ошибок, например, показ сообщения пользователю
      }
    };
    fetchDataFirst()
  }, []);

  const [date, setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        try {
          const response = await fetch(
            `http://79.174.92.231/api/publications/${id}/`,
            {
              headers: {
                'Authorization': `Bearer ${token}`,
              },
            }
          );

          if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
          }

          const responseData = await response.json();
          setData(responseData);
          console.log(id);
          console.log(responseData);
          setDataResponseDescription(responseData.description);
          setDataResponseLicence(responseData.licence);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData(); // Call the function to fetch data
  }, [id, token]); // Dependencies: id and token

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  function scrollToElement(elementId) {
    const id = document.querySelector(elementId);
    if (id) {
      id.scrollIntoView({ behavior: "smooth", block: "center"});
    }
  }

  const componentData = {
    tabContent: {
      description: `Ищете идеальное сочетание стиля, комфорта и функциональности?
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
        и он превзойдет ваши ожидания!`
    },
    tags: [
      "обувь", "спорт", "одежда", "кроссовки", "обувь", "спорт", "одежда", "кроссовки", "обувь", "спорт", "одежда", "кроссовки", "обувь", "спорт", "одежда", "кроссовки"
    ],
    license: {
      imageSrc: "/images/license.jpg",
      type: "Creative Commons Attribution-NonCommercial"
    },
  };

  return (
    <div className="product-details">
      <div className="product-detail">
        <div className="tabs">
          <button
            onClick={() => {
              handleTabChange("description");
            }}
            className={activeTab === "description" ? "active" : ""}
          >
            Описание
          </button>
          <button
            onClick={() => {
              handleTabChange("reviews");
              scrollToElement(reviewsClass);
            }}
            className={activeTab === "reviews" ? "active" : ""}
          >
            Отзывы
          </button>
          <button
            onClick={() => {
              handleTabChange("remixes");
              scrollToElement(remixesClass);
            }}
            className={activeTab === "remixes" ? "active" : ""}
          >
            Ремиксы
          </button>
          <button
            onClick={() => {
              handleTabChange("remixes");
              scrollToElement(similarModelClass);
            }}
            className={activeTab === "similarModels" ? "active" : ""}
          >
            Похожие модели
          </button>
        </div>
        <div className="tab-content">
          <h2>Описание</h2>
          {activeTab === "description" && (
            <p>
              {dataResponseDescription}
            </p>
          )}
          {activeTab === "reviews" && (
            <p>
            </p>
          )}
          {activeTab === "remixes" && (
            <p>
            </p>
          )}
          {activeTab === "similarModels" && (
            <p>
            </p>
          )}
        </div>
        <div className="tags">
          {componentData.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className="license">
          <div className="license-image">
            <img src={componentData.license.imageSrc} alt="licence" />
          </div>
          <div className="license-text">
            <p className="license-title">Лицензия</p>
            <p className="license-description">Эта работа под лицензией</p>
            <p className="license-type">{dataResponseLicence}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
