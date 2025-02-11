import React, {useState} from "react";

import NewCardName from "./components/Step2/NewCardName.js";
import NewCardImages from "./components/Step2/NewCardImages.js";
import NewCardPrivacy from "./components/Step2/NewCardPrivacy.js";
import NewCardLicenze from "./components/Step2/NewCardLicenze.js";

import NewCardWorkflow from "./components/Step1/NewCardWorkflow.js";

import save from "../../images/save.png";
import like from "../../images/like.png";
import star from "../../images/star.png";
import photo from "../../images/untitled image.png";
import avatar from "../../images/avatar.png";

const NewCard = () =>{
    const [isStep1, setIsStep1] = useState(true);
    const [isdiv1, setdiv1] = useState(true);
    const [isdiv2, setdiv2] = useState(false);

    const [name, setName] = useState('untitled model');
    const [mainPhoto, setPhoto] = useState(photo);

    const[step1_data, setData1] = useState();
    const[step2_data, setData2] = useState();

    const switchToStep2 = () => {
        setIsStep1(!isStep1);
        setdiv1(!isdiv1);
        setdiv2(!isdiv2);
      };
    
    const handleDataFromName = (data) =>{
      setName(data);
    }

    const handleDataFromImage = (data) =>{
      setPhoto(data);
    }

    const handleDataFromStep1 = (data) =>{
      if (data.command === 'next'){
        switchToStep2()
      };
      setData1(data.files);
      console.log(data.files)
    }
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

            {isStep1 ? (<NewCardWorkflow sendDataToParent={handleDataFromStep1}/>):(
                <div className="card__desc">

            <div className="card__conteiner">
            <div class="profile__works-card">
          <div class="profile__works-card-maininfo">
            <p>{name}</p>
          </div>
          <div class="profile__works-card-photo">
            <img src={mainPhoto} alt="card_photo" />
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
                    <NewCardName sendDataToParent={handleDataFromName}/>
                    <NewCardImages sendDataToParent={handleDataFromImage}/>
                    <NewCardPrivacy />
                    <NewCardLicenze />

                    

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