import React from "react";

import profile_works_card_photo1 from "../images/profile_card_1.svg";
import profile_works_card_photo2 from "../images/profile_card_2.svg";
import profile_works_card_photo3 from "../images/profile_card_3.svg";
import profile_works_card_photo4 from "../images/profile_card_4.svg";
import profile_works_card_photo5 from "../images/profile_card_5.svg";
import profile_works_card_photo6 from "../images/profile_card_6.svg";

import profile_works_card_avatar1 from "../images/avatarka.jpg"
import profile_works_card_avatar2 from "../images/avatar2.png"
import save from "../images/save.png"
import like from "../images/like.png"
import star from "../images/star.png"


const ProfileWorks = () => {


 const works = [
 {
      name: "Crocs",
      imgSrc: "../images/profile_card_1.svg",
      star: "2",
      saved: "1",
      like: "6",
      owners: [
        "../images/avatar.png",
        "../images/avatar2.png"
      ]
    },
    {
      name: "Монстрик",
      imgSrc: "../images/profile_card_2.svg",
      star: "3",
      saved: "4",
      like: "4",
      owners: [
        "../images/avatar.png"
      ]
    },
    {
      name: "Девушка в одежде",
      imgSrc: "../images/profile_card_3.svg",
      star: "2",
      saved: "8",
      like: "1",
      owners: [
        "../images/avatar.png",
        "../images/avatar2.png"
      ]
    },
    {
      name: "Crocs",
      imgSrc: "../images/profile_card_4.svg",
      star: "4",
      saved: "4",
      like: "4",
      owners: [
        "../images/avatar.png"
      ]
    },
    {
      name: "Crocs",
      imgSrc: "../images/profile_card_5.svg",
      star: "6",
      saved: "6",
      like: "6",
      owners: [
        "../images/avatar.png"
      ]
    },
    {
      name: "Crocs",
      imgSrc: "../images/profile_card_6.svg",
      star: "7",
      saved: "7",
      like: "9",
      owners: [
        "../images/avatar.png"
      ]
    },
  ]

  return (
    <div class="profile__works">
      
{works.map(work => (
    <div class="profile__works-card" key={work.name}>
    <div class="profile__works-card-maininfo">
      <p>{work.name}</p>
      <div class="profile__works-card-buttons">
        <button className="profile__button profile__button_eye"/>
        <button className="profile__button profile__button_choose"/>
      </div>
    </div>
    <div class="profile__works-card-photo">
      <img src={work.imgSrc} alt='card_photo'/>
    </div>
    <div class="profile__works-card-info">
        <div class="profile__works-card-avatar">
          {work.owners.map( owner => (
            <img src={owner} key={owner} alt='card_avatar'/>
          ))}
        </div>
        <div class="profile__works-card-info-count">
          <div class="profile__works-card-info-saves">
            <img src={save} alt='save'/>
            <p>{work.saved}</p>
          </div>
          <div class="profile__works-card-info-likes">
            <img src={like} alt='like'/>
            <p>{work.like}</p>
          </div>
          <div class="profile__works-card-info-stars">
            <img src={star} alt='star'/>
            <p>{work.star}</p>
          </div>
        </div>
      </div>
  </div>
    ))}


    </div>
  );
};

export default ProfileWorks;