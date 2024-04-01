import React from "react";

import profile_works_card_photo1 from "../images/profile_card_1.svg";
import profile_works_card_photo2 from "../images/profile_card_2.svg";
import profile_works_card_photo3 from "../images/profile_card_3.svg";
import profile_works_card_photo4 from "../images/profile_card_4.svg";
import profile_works_card_photo5 from "../images/profile_card_5.svg";
import profile_works_card_photo6 from "../images/profile_card_6.svg";

import profile_works_card_avatar1 from "../images/avatarka.png"
import profile_works_card_avatar2 from "../images/avatar2.png"
import save from "../images/save.png"
import like from "../images/like.png"
import star from "../images/star.png"


const ProfileWorks = () => {
  return (
    <div class="profile__works">
      <div class="profile__works-card">
        <div class="profile__works-card-maininfo">
          <p>Crocs</p>
          <div class="profile__works-card-buttons">
            <button className="profile__button profile__button_eye"/>
            <button className="profile__button profile__button_choose"/>
          </div>
        </div>
        <div class="profile__works-card-photo">
          <img src={profile_works_card_photo1} alt='card_photo'/>
        </div>
        <div class="profile__works-card-info">
            <div class="profile__works-card-avatar">
              <img src={profile_works_card_avatar1} alt='card_avatar'/>
              <img src={profile_works_card_avatar2} alt='card_avatar'/>
            </div>
            <div class="profile__works-card-info-count">
              <div class="profile__works-card-info-saves">
                <img src={save} alt='save'/>
                <p>1</p>
              </div>
              <div class="profile__works-card-info-likes">
                <img src={like} alt='like'/>
                <p>6</p>
              </div>
              <div class="profile__works-card-info-stars">
                <img src={star} alt='star'/>
                <p>2</p>
              </div>
            </div>
          </div>
      </div>
      <div class="profile__works-card">
      <div class="profile__works-card-maininfo">
          <p>Монстрик</p>
          <div class="profile__works-card-buttons">
            <button className="profile__button profile__button_choose"/>
          </div>
        </div>
        <div class="profile__works-card-photo">
          <img src={profile_works_card_photo2} alt='card_photo'/>
        </div>
        <div class="profile__works-card-info">
            <div class="profile__works-card-avatar">
              <img src={profile_works_card_avatar1} alt='card_avatar'/>
            </div>
            <div class="profile__works-card-info-count">
              <div class="profile__works-card-info-saves">
                <img src={save} alt='save'/>
                <p>5</p>
              </div>
              <div class="profile__works-card-info-likes">
                <img src={like} alt='like'/>
                <p>3</p>
              </div>
              <div class="profile__works-card-info-stars">
                <img src={star} alt='star'/>
                <p>7</p>
              </div>
            </div>
          </div>
      </div>
      <div class="profile__works-card">
      <div class="profile__works-card-maininfo">
          <p>Девушка в одежде</p>
          <div class="profile__works-card-buttons">
            <button className="profile__button profile__button_eye"/>
            <button className="profile__button profile__button_choose"/>
          </div>
        </div>
        <div class="profile__works-card-photo">
          <img src={profile_works_card_photo3} alt='card_photo'/>
        </div>
        <div class="profile__works-card-info">
            <div class="profile__works-card-avatar">
              <img src={profile_works_card_avatar1} alt='card_avatar'/>
            </div>
            <div class="profile__works-card-info-count">
              <div class="profile__works-card-info-saves">
                <img src={save} alt='save'/>
                <p>8</p>
              </div>
              <div class="profile__works-card-info-likes">
                <img src={like} alt='like'/>
                <p>2</p>
              </div>
              <div class="profile__works-card-info-stars">
                <img src={star} alt='star'/>
                <p>5</p>
              </div>
            </div>
          </div>
      </div>
      <div class="profile__works-card">
      <div class="profile__works-card-maininfo">
          <p>Crocs</p>
          <div class="profile__works-card-buttons">
            <button className="profile__button profile__button_eye"/>
            <button className="profile__button profile__button_choose"/>
          </div>
        </div>
        <div class="profile__works-card-photo">
          <img src={profile_works_card_photo4} alt='card_photo'/>
        </div>
        <div class="profile__works-card-info">
            <div class="profile__works-card-avatar">
              <img src={profile_works_card_avatar1} alt='card_avatar'/>
              <img src={profile_works_card_avatar2} alt='card_avatar'/>
            </div>
            <div class="profile__works-card-info-count">
              <div class="profile__works-card-info-saves">
                <img src={save} alt='save'/>
                <p>4</p>
              </div>
              <div class="profile__works-card-info-likes">
                <img src={like} alt='like'/>
                <p>3</p>
              </div>
              <div class="profile__works-card-info-stars">
                <img src={star} alt='star'/>
                <p>5</p>
              </div>
            </div>
          </div>
      </div>
      <div class="profile__works-card">
        <div class="profile__works-card-maininfo">
          <p>Crocs</p>
          <div class="profile__works-card-buttons">
            <button className="profile__button profile__button_eye"/>
            <button className="profile__button profile__button_choose"/>
          </div>
        </div>
        <div class="profile__works-card-photo">
          <img src={profile_works_card_photo5} alt='card_photo'/>
        </div>
        <div class="profile__works-card-info">
            <div class="profile__works-card-avatar">
              <img src={profile_works_card_avatar1} alt='card_avatar'/>
              <img src={profile_works_card_avatar2} alt='card_avatar'/>
            </div>
            <div class="profile__works-card-info-count">
              <div class="profile__works-card-info-saves">
                <img src={save} alt='save'/>
                <p>4</p>
              </div>
              <div class="profile__works-card-info-likes">
                <img src={like} alt='like'/>
                <p>2</p>
              </div>
              <div class="profile__works-card-info-stars">
                <img src={star} alt='star'/>
                <p>8</p>
              </div>
            </div>
          </div>
      </div>
      <div class="profile__works-card">
      <div class="profile__works-card-maininfo">
          <p>Crocs</p>
          <div class="profile__works-card-buttons">
            <button className="profile__button profile__button_eye"/>
            <button className="profile__button profile__button_choose"/>
          </div>
        </div>
        <div class="profile__works-card-photo">
          <img src={profile_works_card_photo6} alt='card_photo'/>
        </div>
        <div class="profile__works-card-info">
            <div class="profile__works-card-avatar">
              <img src={profile_works_card_avatar1} alt='card_avatar'/>
            </div>
            <div class="profile__works-card-info-count">
              <div class="profile__works-card-info-saves">
                <img src={save} alt='save'/>
                <p>7</p>
              </div>
              <div class="profile__works-card-info-likes">
                <img src={like} alt='like'/>
                <p>9</p>
              </div>
              <div class="profile__works-card-info-stars">
                <img src={star} alt='star'/>
                <p>1</p>
              </div>
            </div>
          </div>
      </div>  
    </div>
  );
};

export default ProfileWorks;