import React, { useState, useEffect} from "react";
import { connect } from 'react-redux';
import { saveCardId } from '../actions';
import { selectSavedCardId } from '../selectors';
import { useParams } from 'react-router-dom';

import profile_works_card_photo1 from "../../images/profile_card_1.svg";
import profile_works_card_photo2 from "../../images/profile_card_2.svg";
import profile_works_card_photo3 from "../../images/profile_card_3.svg";
import profile_works_card_photo4 from "../../images/profile_card_4.svg";
import profile_works_card_photo5 from "../../images/profile_card_5.svg";
import profile_works_card_photo6 from "../../images/profile_card_6.svg";

import profile_works_card_avatar1 from "../../images/avatarka.jpg";
import profile_works_card_avatar2 from "../../images/avatar2.png";
import save from "../../images/save.png";
import like from "../../images/like.png";
import star from "../../images/star.png";
import ava from "../../images/av.jpg"
import dn from "../../images/danila.jpg"
import { NavLink } from "react-router-dom";

const ProfileWorks = ({ onDataReceived, saveCardId, savedCardId }) => {
  const { id } = useParams();
  const works = [
    {
      name: "Modern Apple Home",
      imgSrc: "https://makerworld.bblmw.com/makerworld/model/USdd016072f24da4/design/2024-04-14_d86efdeddff48.png?image_process=resize,w_1000/format,webp",
      star: "5",
      saved: "1",
      like: "6",
      owners: [ava],
    },
    {
      name: "Chibi Figure",
      imgSrc: "https://makerworld.bblmw.com/makerworld/model/USdc7b34753bb31f/design/2024-05-10_1ad4105e1755e.png?image_process=resize,w_1000/format,webp",
      star: "3",
      saved: "4",
      like: "4",
      owners: [dn, ava],
    },
    {
      name: "Sea Turtle Pendant",
      imgSrc: "https://makerworld.bblmw.com/makerworld/model/US68ca4842829262/design/2024-05-09_d249f01334e3f.jpg?image_process=resize,w_1000/format,webp",
      star: "2",
      saved: "8",
      like: "1",
      owners: [ava],
    },
    {
      name: "Ghostbusters Logo",
      imgSrc: "https://makerworld.bblmw.com/makerworld/model/USbab466328a5856/design/2024-05-10_eefdf7d80dcb1.jpg?image_process=resize,w_400/format,webp",
      star: "4",
      saved: "4",
      like: "4",
      owners: [ava],
    },
    {
      name: "Crocs",
      imgSrc: "https://makerworld.bblmw.com/makerworld/model/USdbedef32f86041/design/2024-05-11_53a3dd22b19228.jpg?image_process=resize,w_400/format,webp",
      star: "6",
      saved: "6",
      like: "6",
      owners: [ava],
    },
    {
      name: "Naruto - Side View",
      imgSrc: "https://makerworld.bblmw.com/makerworld/model/US23f47fda3d882e/design/2024-05-12_5a590169826a2.jpg?image_process=resize,w_400/format,webp",
      star: "7",
      saved: "7",
      like: "9",
      owners: [ava],
    },
  ];

  const [token, setToken] = useState("");
  const [responseDataState, setResponseDataState] = useState(null);
  console.log('onDataReceived:', onDataReceived);
  

  const handleButtonClick = async (index) => {
    try {
      // First, fetch the token
      const tokenResponse = await fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          alias: "radmilaradmila",
          password: "radmila05122004",
        }),
      });

      if (!tokenResponse.ok) {
        throw new Error(
          "Ошибка при получении токена:",
          tokenResponse.statusText
        );
      }

      const tokenData = await tokenResponse.json();
      setToken(tokenData.access);
      console.log("Успешный ответ (Токен):", tokenData);

      // Once token is fetched, use it to fetch data
      const dataResponse = await fetch(
        `http://127.0.0.1:8000/api/publications/1/`,
        {
          headers: {
            Authorization: `Bearer ${tokenData.access}`,
          },
        }
      );

      if (!dataResponse.ok) {
        throw new Error(
          "Ошибка при получении данных:",
          dataResponse.statusText
        );
      }

      const responseData = await dataResponse.json(); // Используем другое имя для переменной данных
      console.log(responseData);
      setResponseDataState(responseData[index]);
      saveCardId(index);
      window.location.href = `/card/${index}`;
      console.log("Успешный ответ (Данные):", responseData[index]);
    } catch (error) {
      console.error("Произошла ошибка:", error);
    }

  };

  useEffect(() => {
    if (responseDataState) {
      onDataReceived(responseDataState);
    }
  }, [responseDataState, onDataReceived]);

  useEffect(() => {
    console.log("Saved Card ID:", savedCardId+1);
  }, [savedCardId]);

  return (
    <div class="profile__works">
      {works.map((work, index) => (
        <div
          class="profile__works-card"
          key={work.name}
          onClick={() => handleButtonClick(index)}
        >
          <div class="profile__works-card-maininfo">
            <p>{work.name}</p>
            <div class="profile__works-card-buttons">

              <button className="profile__button profile__button_choose" />
            </div>
          </div>
          <div class="profile__works-card-photo">
            <img src={work.imgSrc} alt="card_photo" />
          </div>
          <div class="profile__works-card-info">
            <div class="profile__works-card-avatar">
              {work.owners.map((owner) => (
                <NavLink to="/card/5">
                <img src={owner} key={owner} alt="card_avatar" />
                </NavLink>
              ))}
            </div>
            <div class="profile__works-card-info-count">
              <div class="profile__works-card-info-saves">
                <img src={save} alt="save" />
                <p>{work.saved}</p>
              </div>
              <div class="profile__works-card-info-likes">
                <img src={like} alt="like" />
                <p>{work.like}</p>
              </div>
              <div class="profile__works-card-info-stars">
                <img src={star} alt="star" />
                <p>{work.star}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    savedCardId: selectSavedCardId(state),
  };
};

const mapDispatchToProps = {
  saveCardId: saveCardId,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWorks);