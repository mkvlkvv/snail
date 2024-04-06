import React from "react";
import photo from "../images/photo3.jpeg";

const SimilarModelCard = ({ model = [
  {
    title: "Crocs",
    imageUrl: "/images/photo3.jpeg",
    author: {
      name: "John Doe",
      avatar: '../images/ava.svg'
    },
    likes: 48,
    comments: 12,
    rating: 4.8
  },
  {
    title: "Nike Air Max",
    imageUrl: "/images/collection_4.png",
    author: {
      name: "Jane Smith",
      avatar: '../images/ava.svg'
    },
    likes: 32,
    comments: 8,
    rating: 4.5
  },
  {
    title: "Adidas Superstar",
    imageUrl: "../images/photo2.jpeg",
    author: {
      name: "Alex Johnson",
      avatar: '../images/ava.svg'
    },
    likes: 56,
    comments: 20,
    rating: 4.9
  },
  {
    title: "Puma Suede",
    imageUrl: "../images/collection_4.png",
    author: {
      name: "Emily Wilson",
      avatar: '../images/ava.svg'
    },
    likes: 40,
    comments: 15,
    rating: 4.7
  },
  {
    title: "Vans Old Skool",
    imageUrl: "../images/photo4.jpg",
    author: {
      name: "Michael Brow",
      avatar: '../images/ava.svg'
    },
    likes: 65,
    comments: 25,
    rating: 4.6
  },
  {
    title: "Nike Air Max",
    imageUrl: "/images/photo4.jpg",
    author: {
      name: "Jane Smith",
      avatar: '../images/ava.svg'
    },
    likes: 32,
    comments: 8,
    rating: 4.5
  }
] }) => {
  return (
    <div className="similarmodellist">
      <div className="similar-text">Похожие модели</div>
      <div className="similar-model-container">
        {model.map((model, index) => (
          <div className="similar-model-card" key={index}>
            <div className="namesimilarcard">
              <p className="similar-main-text">{model.title}</p>
            </div>
            <div className="photo">
              <img src={model.imageUrl} alt="logo" />
            </div>
            <div className="card-content">
              <div className="author">
                <div className="similar-card-avatar">
                  <img src={model.author.avatar} alt="Аватар" />
                </div>
                <p>{model.author.name}</p>
              </div>
              <div className="details">
                <div className="similar-card-info">
                  <img src="/images/save.png" alt="save" />
                </div>
                <p>{model.likes}</p>
                <div className="similar-card-info">
                  <img src="/images/like.png" alt="like" />
                </div>
                <p>{model.comments}</p>
                <div className="similar-card-info">
                  <img src="/images/star.png" alt="star" />
                </div>
                <p>{model.rating}</p>
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
