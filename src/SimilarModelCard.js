import React from "react";
import "./SimilarModelCard.css"; 

const SimilarModelCard = ({
  title,
  imageUrl,
  author,
  likes,
  comments,
  rating,
}) => {
  return (
    <div className="similar-model-container">
      <div className="similar-model-card">
        <div className="namesimilarcard">
          <p>Crocs</p>
        </div>
        <div className="photo">
          <img src="photo1.jpeg" alt="logo" />
        </div>
        <div className="card-content">
          <div className="author">
            <p>Автор</p>
          </div>
          <div className="details">
            <p>48</p>
            <p>12</p>
            <p>4.8</p>
          </div>
        </div>
      </div>
      <div className="similar-model-card">
        <div className="namesimilarcard">
          <p>Crocs</p>
        </div>
        <div className="photo">
          <img src="logo.png" alt="logo" />
        </div>
        <div className="card-content">
          <div className="author">
            <p>Автор</p>
          </div>
          <div className="details">
            <p>48</p>
            <p>12</p>
            <p>4.8</p>
          </div>
        </div>
      </div>
      <div className="similar-model-card">
        <div className="namesimilarcard">
          <p>Crocs</p>
        </div>
        <div className="photo">
          <img src="logo.png" alt="logo" />
        </div>
        <div className="card-content">
          <div className="author">
            <p>Автор</p>
          </div>
          <div className="details">
            <p>48</p>
            <p>12</p>
            <p>4.8</p>
          </div>
        </div>
      </div>
      <div className="similar-model-card">
        <div className="namesimilarcard">
          <p>Crocs</p>
        </div>
        <div className="photo">
          <img src="logo.png" alt="logo" />
        </div>
        <div className="card-content">
          <div className="author">
            <p>Автор</p>
          </div>
          <div className="details">
            <p>48</p>
            <p>12</p>
            <p>4.8</p>
          </div>
        </div>
      </div>
      <div className="similar-model-card">
        <div className="namesimilarcard">
          <p>Crocs</p>
        </div>
        <div className="photo">
          <img src="logo.png" alt="logo" />
        </div>
        <div className="card-content">
          <div className="author">
            <p>Автор</p>
          </div>
          <div className="details">
            <p>48</p>
            <p>12</p>
            <p>4.8</p>
          </div>
        </div>
      </div>
      <div className="similar-model-card">
        <div className="namesimilarcard">
          <p>Crocs</p>
        </div>
        <div className="photo">
          <img src="logo.png" alt="logo" />
        </div>
        <div className="card-content">
          <div className="author">
            <p>Автор</p>
          </div>
          <div className="details">
            <p>48</p>
            <p>12</p>
            <p>4.8</p>
          </div>
        </div>
      </div>
      <div className="similar-model-card">
        <div className="namesimilarcard">
          <p>Crocs</p>
        </div>
        <div className="photo">
          <img src="logo.png" alt="logo" />
        </div>
        <div className="card-content">
          <div className="author">
            <p>Автор</p>
          </div>
          <div className="details">
            <p>48</p>
            <p>12</p>
            <p>4.8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarModelCard;
