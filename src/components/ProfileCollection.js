import React from "react";
import profile_works_card_photo1 from "../images/photo1.jpeg";
import profile_works_card_photo2 from "../images/photo2.jpeg";
import profile_works_card_photo4 from "../images/profile_background.jpeg";
import profile_works_card_avatar1 from "../images/avatar.png"
import profile_works_card_avatar2 from "../images/avatar2.png"
import save from "../images/save.png"
import like from "../images/like.png"
import star from "../images/star.png"
import collection1 from "../images/collection_1.svg"
import collection2 from "../images/collection_2.svg"
import collection3 from "../images/collection_5.svg"
import collection4 from "../images/collection_6.svg"
import collection5 from "../images/collection_7.svg"
import collection6 from "../images/collection_8.svg"
import collection7 from "../images/collection_9.svg"
import collection8 from "../images/test_col.svg"

import collection_png1 from "../images/collection_3.png"
import collection_png2 from "../images/collection_4.png"
import collection_png3 from "../images/collection_10.png"


const ProfileCollection = () => {
    return (
        <div class="collection">
            <div className="collection__card-container">
                <div className="collection__background" />
                <div class="collection__card">
                    <div class="profile__works-card-maininfo">
                        <p>Imagine</p>
                        <div class="profile__works-card-buttons">
                            <button className="profile__button profile__button_eye" />
                            <button className="profile__button profile__button_choose" />
                        </div>
                    </div>
                    <div className="collection__photo-container4">
                        <img className="collection__photo4" src={collection1} alt='card_photo' />
                        <img className="collection__photo4"src={collection2} alt='card_photo' />
                        <img className="collection__photo4"src={collection3} alt='card_photo' />
                        <img className="collection__photo4" src={collection4} alt='card_photo' />
                    </div>
                    <div class="profile__works-card-info">
                        <div class="profile__works-card-avatar">
                            4 модели
                        </div>
                        <div class="collection__card-info-count">
                            <div class="collection__card-card-info-likes">
                                <img src={like} alt='like'/>
                                <p>6</p>
                            </div>
                        </div>
                    </div>
                </div>


                
            </div>


            <div className="collection__card-container">
                <div className="collection__background" />
                <div class="collection__card">
                    <div class="profile__works-card-maininfo">
                        <p>Imagine</p>
                        <div class="profile__works-card-buttons">
                            <button className="profile__button profile__button_eye" />
                            <button className="profile__button profile__button_choose" />
                        </div>
                    </div>
                    <div className="collection__photo-container1">
                    
                        <img className="collection__photo1"src={collection5} alt='card_photo' />
                    </div>
                    <div class="profile__works-card-info">
                        <div class="profile__works-card-avatar">
                            1 модель
                        </div>
                        <div class="collection__card-info-count">
                            <div class="collection__card-card-info-likes">
                                <img src={like} alt='like'/>
                                <p>6</p>
                            </div>
                        </div>
                    </div>
                </div>


                
            </div>
            <div className="collection__card-container">
                <div className="collection__background" />
                <div class="collection__card">
                    <div class="profile__works-card-maininfo">
                        <p>Imagine</p>
                        <div class="profile__works-card-buttons">
                            <button className="profile__button profile__button_eye" />
                            <button className="profile__button profile__button_choose" />
                        </div>
                    </div>
                    <div className="collection__photo-container4">
                        <img className="collection__photo3"src={collection6} alt='card_photo' />
                        <img className="collection__photo3" src={collection_png1} alt='card_photo' />
                        <img className="collection__photo3"src={collection7} alt='card_photo' />
                    </div>
                    <div class="profile__works-card-info">
                        <div class="profile__works-card-avatar">
                            3 модели
                        </div>
                        <div class="collection__card-info-count">
                            <div class="collection__card-card-info-likes">
                                <img src={like} alt='like'/>
                                <p>6</p>
                            </div>
                        </div>
                    </div>
                </div>


                
            </div>

            <div className="collection__card-container">
                <div className="collection__background" />
                <div class="collection__card">
                    <div class="profile__works-card-maininfo">
                        <p>Imagine</p>
                        <div class="profile__works-card-buttons">
                            <button className="profile__button profile__button_eye" />
                            <button className="profile__button profile__button_choose" />
                        </div>
                    </div>
                    <div className="collection__photo-container2">
                    
                        <img className="collection__photo2" src={collection_png2} alt='card_photo' />
                        <img className="collection__photo2"src={collection_png3} alt='card_photo' />

                    </div>
                    <div class="profile__works-card-info">
                        <div class="profile__works-card-avatar">
                            2 модели
                        </div>
                        <div class="collection__card-info-count">
                            <div class="collection__card-card-info-likes">
                                <img src={like} alt='like'/>
                                <p>6</p>
                            </div>
                        </div>
                    </div>
                </div>


                
            </div>

            <div className="collection__card-container">
                <div className="collection__background" />
                <div class="collection__card">
                    <div class="profile__works-card-maininfo">
                        <p>Imagine</p>
                        <div class="profile__works-card-buttons">
                            <button className="profile__button profile__button_eye" />
                            <button className="profile__button profile__button_choose" />
                        </div>
                    </div>
                    <div className="collection__photo-container1">
                    
                        <img className="collection__photo1" src={collection8} alt='card_photo' />
                    </div>
                    <div class="profile__works-card-info">
                        <div class="profile__works-card-avatar">
                            1 модель
                        </div>
                        <div class="collection__card-info-count">
                            <div class="collection__card-card-info-likes">
                                <img src={like} alt='like'/>
                                <p>6</p>
                            </div>
                        </div>
                    </div>
                </div>


                
            </div>

        </div>
    );
};

export default ProfileCollection;