import React from "react";
import save from "../../images/save.png"
import like from "../../images/like.png"
import star from "../../images/star.png"
import anlnv from "../../images/anlnv.jpg"
import rdml from "../../images/rdml.jpeg" 
import lob from "../../images/lobashik.jpg"

const SimilarModelCard = ({ model = [
  {
    title: "Modern Planter",
    imageUrl: 'https://makerworld.bblmw.com/makerworld/model/DSM00000000459516/design/2024-05-10_6bf99c39ea3c2.jpg?image_process=resize,w_400/format,webp',
    author: {
      name: "annlnv",
      avatar: anlnv
    },
    likes: 3,
    comments: 1,
    rating: 4
  },
  {
    title: "Plant Pot Vase Series6",
    imageUrl: "https://makerworld.bblmw.com/makerworld/model/US533ef0d592bed0/design/2024-05-03_c1adeeb8f47bb.png?image_process=resize,w_400/format,webp",
    author: {
      name: "rdmllmnglv",
      avatar: rdml
    },
    likes: 12,
    comments: 5,
    rating: 6
  },
  {
    title: "Roots Hands Vase",
    imageUrl: "https://makerworld.bblmw.com/makerworld/model/DSM00000000455387/design/2024-05-06_a056b1218346b.jpg?image_process=resize,w_400/format,webp",
    author: {
      name: "lobaaashik",
      avatar: lob
    },
    likes: 12,
    comments: 26,
    rating: 21
  },
  {
    title: "Plant Pot Vase Series2",
    imageUrl: "https://makerworld.bblmw.com/makerworld/model/US845d4a2fdbb652/design/2024-05-03_545ade04fa42b.png?image_process=resize,w_1000/format,webp",
    author: {
      name: "rdmllmnglv",
      avatar: rdml
    },
    likes: 20,
    comments: 6,
    rating: 5
  }
] }) => {
  return (
    <div className="similarmodellist">
      <div className="similar-text">Похожие модели</div>
      <div className="similar-model-container">
        {model.map((model, index) => (
          <div className="profile__works-card" key={index}>
            <div className="profile__works-card-maininfo">
              <p>{model.title}</p>
            </div>
            <div className="profile__works-card-photo">
              <img src={model.imageUrl} alt="logo" />
            </div>
            <div className="similarmodels-card-info">
              <div className="similarmodels-card-authors">
                <div className="similarmodels-card-avatar">
                  <img src={model.author.avatar} alt="Аватар" />
                </div>
                <a>{model.author.name}</a>
              </div>
              <div className="profile__works-card-info-count">
                <div className="profile__works-card-info-saves">
                  <img src={save} alt="save" />
                  <p>{model.likes}</p>
                </div>
                
                <div className="profile__works-card-info-likes">
                  <img src={like} alt="like" />
                  <p>{model.comments}</p>
                </div>
                
                <div className="profile__works-card-info-stars">
                  <img src={star} alt="star" />
                  <p>{model.rating}</p>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const similarModelClass = ".similarmodellist"
export default SimilarModelCard;
