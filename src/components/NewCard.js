import React, {useState} from "react";

import save from "../images/save.png";
import like from "../images/like.png";
import star from "../images/star.png";
import photo from "../images/untitled image.png";
import avatar from "../images/avatar.png"

const NewCard = () =>{
    const [isStep1, setIsStep1] = useState(true);
    const [isdiv1, setdiv1] = useState(true);
    const [isdiv2, setdiv2] = useState(false);
    const [iskrug, setkrug] = useState(true);
    const switchToStep2 = () => {
        setIsStep1(!isStep1);
        setdiv1(!isdiv1);
        setdiv2(!isdiv2);
      };
    
    return(
        <div className="newcard__container">

            <div className="newcard__toolbar">
                <div className="newcard__toolbar_load">
                    {isdiv1 ? (<div className="newcard__toolbar_1" onClick={switchToStep2}>
                        <p>1</p>
                    </div>):(
                    <div className="newcard__toolbar_2" onClick={switchToStep2}>
                        <p>1</p>
                    </div>)}
                    <p>Загрузка</p>
                </div>
                <div className="newcard__toolbar_desc">
                    {isdiv2 ? (<div className="newcard__toolbar_1" onClick={switchToStep2}>
                        <p>2</p>
                    </div>):(<div className="newcard__toolbar_2" onClick={switchToStep2}>
                        <p>2</p>
                    </div>)}
                    <p>Описание</p>
                </div>
            </div>

            {isStep1 ? (<div className="newcard__workflow">
                <div className="newcard__workflow_txt">
                    <p className="newcard__workflow_txt_1">Перетащите файл сюда</p>
                    <p className="newcard__workflow_txt_2">.stl,.3mf,.step,.zip</p>
                    <p className="newcard__workflow_txt_3">или</p>
                    <div className="newcard__workflow_txt_overview">
                        <p>Обзор</p>
                    </div>

                </div>
            </div>):(
                <div className="card__desc">

            <div className="card__conteiner">
            <div class="profile__works-card">
          <div class="profile__works-card-maininfo">
            <p>untitled model</p>
          </div>
          <div class="profile__works-card-photo">
            <img src={photo} alt="card_photo" />
          </div>
          <div class="profile__works-card-info">
            <div class="profile__works-card-avatar">
                <img src={avatar} alt="card_avatar" />
            </div>
            <div class="profile__works-card-info-count">
              <div class="profile__works-card-info-saves">
                <img src={save} alt="save" />
                <p>0</p>
              </div>
              <div class="profile__works-card-info-likes">
                <img src={like} alt="like" />
                <p>0</p>
              </div>
              <div class="profile__works-card-info-stars">
                <img src={star} alt="star" />
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
        </div>

                <div className="newcard__desc-area">
                    <div className="newcard__desc-maininfo">

                    </div>

                    <div className="newcard__desc-images">

                    </div>

                    <div className="newcard__desc-privacy">
                        <div className="newcard__desc-privacy-check">
                            <p>Доступ</p>
                            <div className="newcard__desc-privacy-checkbox">
                                <div className="newcard__desk-privacy-checkbox-public">
                                    <div className="newcard__desk-privacy-checkbox-krug">
                                        <div>
                                            
                                        </div>
                                    </div>  
                                </div> 
                                <div className="newcard__desk-privacy-checkbox-private">
                                    <div className="newcard__desk-privacy-checkbox-krug_2">
                                        <div>
                                            
                                        </div>
                                    </div>
                                </div> 
                            </div>

                        </div>

                    </div>

                    <div className="newcard__desc-licenze">

                    </div>

                    <div className="newcard__desc-button">
                        <p>Опубликовать</p>
                    </div>

                </div>

                </div>
            )}
        </div>
    );
}

export default NewCard;