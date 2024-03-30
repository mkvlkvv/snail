import React from "react";

const Remixes = () => {
  return (
    <div className="reviews-container">
      <h2>Ремиксы</h2>
      <div className="remixes">
          <div className="remix-image">
            <img src="/images/remix.jpg" alt="licence" />
          </div>
          <div className="remix-text">
            <p className="remix-description">К сожалению, ремиксов ещё нет, но их можете создать вы!</p>
          </div>
        </div>
    </div>
  );
};

export default Remixes;
