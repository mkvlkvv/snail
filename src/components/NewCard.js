import React, {useState} from "react";

import data from "./categories.js"

import licenze from "./newcard_alg.js";

import save from "../images/save.png";
import like from "../images/like.png";
import star from "../images/star.png";
import photo from "../images/untitled image.png";
import avatar from "../images/avatar.png";
import plus_photo from "../images/plus_photo.svg";
import pic1 from "../images/pic1.svg";
import pic2 from "../images/pic2.svg";

const NewCard = () =>{
    const [isStep1, setIsStep1] = useState(true);
    const [isdiv1, setdiv1] = useState(true);
    const [isdiv2, setdiv2] = useState(false);
    const [isPublic, setPublic] = useState(true);
    const [isPrivate, setPrivate] = useState(false);

    const [isQ3, setQ3] = useState(true);

    const [isQ3_0, setQ3_0] = useState(false);
    const [isQ3_1, setQ3_1] = useState(false);

    const [isQ1_0, setQ1_0] = useState(false);
    const [isQ1_1, setQ1_1] = useState(true);

    const [isQ2_0, setQ2_0] = useState(false);
    const [isQ2_1, setQ2_1] = useState(true);
    const [isQ2_2, setQ2_2] = useState(false);

    const arr = [1, 1, 1];

    const [isL, setL] = useState(true);


    const switchL = () => {
        setL(!isL);
    }

    const switchToStep2 = () => {
        setIsStep1(!isStep1);
        setdiv1(!isdiv1);
        setdiv2(!isdiv2);
      };

    const switchPublic = () => {
        setPrivate(!isPrivate);
        setPublic (!isPublic)
    };

    const switchQ1 = () => {
        setQ1_0(!isQ1_0);
        setQ1_1(!isQ1_1);
        if (isQ1_0){
            arr[0] = 0
        }
        if (isQ1_1){
            arr[0] = 1
        }
        console.log(licenze(arr.join('')))
    };

    const switchQ2_0 = () => {
        if(isQ2_1){
            setQ2_1(!isQ2_1)
        };
        if(isQ2_2){
            setQ2_2(!isQ2_2)
        };
        if (isL){
            setL(!isL);
        };

        if (isQ1_0){
            setQ3(!isQ3);
        };
        arr[1] = 0;
        setQ2_0(!isQ2_0);
        console.log(licenze(arr.join()))
    };

    const switchQ2_1 = () => {
        if(isQ2_0){
            setQ2_0(!isQ2_0)
        };
        if(isQ2_2){
            setQ2_2(!isQ2_2)
        };
        if (isL){
            setL(!isL);
        };
        arr[1] = 1;
        setQ2_1(!isQ2_1);
        console.log(licenze(arr.join()))
    };

    const switchQ2_2 = () => {
        if(isQ2_1){
            setQ2_1(!isQ2_1)
        };
        if(isQ2_0){
            setQ2_0(!isQ2_0)
        };
        arr[1] = 2;
        setQ2_2(!isQ2_2);
        console.log(licenze(arr.join()))
    };
   




    
    return(
        <div className="newcard__container">

            <div className="newcard__toolbar">
                <div className="newcard__toolbar_load">
                    {isdiv1 ? (<div className="newcard__toolbar_1">
                        <p>1</p>
                    </div>):(
                    <div className="newcard__toolbar_2" onClick={switchToStep2}>
                        <p>1</p>
                    </div>)}
                    <p>Загрузка</p>
                </div>
                <div className="newcard__toolbar_desc">
                    {isdiv2 ? (<div className="newcard__toolbar_1">
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
                        <div className="newcard__desc-maininfo-name">
                            <p>Название</p>

                            <form className="newcard__desc-maininfo-nameinputform">
                                <input
                                    placeholder="Назовите свою модель" 
                                />
                            </form>
                        </div>

                        <div className="newcard__desc-maininfo-category">
                            <p>Категория</p>

                            <form className="newcard__desc-maininfo-nameinputform">
                                
                            </form>
                        </div>

                        <div className="newcard__desc-maininfo-tags">
                            <p>Теги</p>

                            <form className="newcard__desc-maininfo-nameinputform">
                            <input
                                    placeholder="Добавьте теги" 
                                />
                            </form>
                        </div>

                    </div>

                    <div className="newcard__desc-images">
                        <p>Изображения</p>

                        <div className="newcard__desc-images-workcontainer">
                            <div className="newcard__desc-images-workcontainer__newphoto">
                                <img src={plus_photo} />
                            </div>
                            <div className="newcard__desc-images-workcontainer__slider">
                                <img src={pic1} />
                                <img src={pic2} />
                            </div>
                        </div>

                    </div>

                    <div className="newcard__desc-privacy">
                        <div className="newcard__desc-privacy-check">
                            <p>Доступ</p>
                            <div className="newcard__desc-privacy-checkbox">
                                <div className="newcard__desk-privacy-checkbox-public">
                                    {isPublic ? (<div className="newcard__desk-privacy-checkbox-krug">
                                        <div>
                                            
                                        </div>
                                    </div>):(
                                        <div className="newcard__desk-privacy-checkbox-krug_2" onClick={switchPublic}>
                            
                                        </div>
                                    )}

                                    <p>Публичный</p>  
                                </div> 
                                <div className="newcard__desk-privacy-checkbox-private">
                                    {isPrivate ? (
                                        <div className="newcard__desk-privacy-checkbox-krug">
                                        <div>
                                            
                                        </div>
                                    </div>

                                    ):(
                                    <div className="newcard__desk-privacy-checkbox-krug_2" onClick={switchPublic}>
                            
                                    </div>)}
                                    <p>Личный</p>
                                </div> 
                            </div>

                            <div className="newcard__desk-privacy-desk">
                                <p>Описание</p>

                                <form className="newcard__desk-privacy-desk-inputform">
                                    <textarea
                                    type="text"
                                    placeholder="Добавить описание"
                                    ></textarea>

                                </form>
                            </div>

                        </div>

                    </div>

                    <div className="newcard__desc-licenze">
                        <div className="newcard__desc-licenze-q1">
                            <p>Разрешить коммерческое использование вашей работы?</p>

                            <div className="newcard__desc-licenze-q1-checkbox">
                                <div className="newcard__desc-licenze-q1-checkbox_1">
                                {isQ1_1 ? (
                                        <div className="newcard__desk-privacy-checkbox-krug">
                                        <div>
                                            
                                        </div>
                                    </div>

                                    ):(
                                    <div className="newcard__desk-privacy-checkbox-krug_2" onClick={switchQ1}>
                            
                                    </div>)}

                                    <p>Да</p>
                                </div>

                                <div className="newcard__desc-licenze-q1-checkbox_0">

                                {isQ1_0 ? (
                                        <div className="newcard__desk-privacy-checkbox-krug">
                                        <div>
                                            
                                        </div>
                                    </div>

                                    ):(
                                    <div className="newcard__desk-privacy-checkbox-krug_2" onClick={switchQ1}>
                            
                                    </div>)}

                                    <p>Нет</p>

                                </div>
                            </div>

                        </div>

                        <div className="newcard__desc-licenze-q2">
                            <p>Разрешить публиковать адаптации вашей работы?</p>

                            <div className="newcard__desc-licenze-q2-checkbox">
                                <div className="newcard__desc-licenze-q2-checkbox_1">
                                {isQ2_1 ? (<div className="newcard__desk-privacy-checkbox-krug">
                                        <div>
                                            
                                        </div>
                                    </div>):(
                                        <div className="newcard__desk-privacy-checkbox-krug_2" onClick={switchQ2_1}>
                            
                                        </div>
                                    )}

                                    <p>Да</p>

                                </div>

                                <div className="newcard__desc-licenze-q2-checkbox_0">

                                {isQ2_0 ? (<div className="newcard__desk-privacy-checkbox-krug">
                                        <div>
                                            
                                        </div>
                                    </div>):(
                                        <div className="newcard__desk-privacy-checkbox-krug_2" onClick={switchQ2_0}>
                            
                                        </div>
                                    )}

                                    <p>Нет</p>

                                </div>

                                <div className="newcard__desc-licenze-q2-checkbox_2">

                                {isQ2_2 ? (<div className="newcard__desk-privacy-checkbox-krug">
                                        <div>
                                            
                                        </div>
                                    </div>):(
                                        <div className="newcard__desk-privacy-checkbox-krug_2" onClick={() => {switchQ2_2(); switchL();}}>
                            
                                        </div>
                                    )}

                                    <p>Да, пока другие делятся таким же образом</p>

                                </div>
                            </div>
                        </div>

                        { isQ3 ? ( <div className="newcard__desc-licenze-q3">
                            <p>Разрешить делиться без указания авторства?</p>

                            <div className="newcard__desc-licenze-q1-checkbox">
                                <div className="newcard__desc-licenze-q1-checkbox_1">
                                {isQ1_1 ? (
                                        <div className="newcard__desk-privacy-checkbox-krug">
                                        <div>
                                            
                                        </div>
                                    </div>

                                    ):(
                                    <div className="newcard__desk-privacy-checkbox-krug_2" onClick={switchQ1}>
                            
                                    </div>)}

                                    <p>Да</p>
                                </div>

                                <div className="newcard__desc-licenze-q1-checkbox_0">

                                {isQ1_0 ? (
                                        <div className="newcard__desk-privacy-checkbox-krug">
                                        <div>
                                            
                                        </div>
                                    </div>

                                    ):(
                                    <div className="newcard__desk-privacy-checkbox-krug_2" onClick={switchQ1}>
                            
                                    </div>)}

                                    <p>Нет</p>

                                </div>
                            </div>

                        </div>

                        ):(<div className="pd"></div>)

                        }

                        {isL ? (
                            <div className="newcard__desc-licenze-type">
                                
                            </div>
                        ):(<div className="pd"></div>)} 

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