import React from "react";
import slider from '../images/slider.svg'
import arrow from '../images/arrow.svg'

import profile_works_card_photo1 from "../images/profile_card_1.svg";
import profile_works_card_photo2 from "../images/profile_card_2.svg";
import profile_works_card_photo3 from "../images/profile_card_3.svg";
import profile_works_card_photo4 from "../images/profile_card_4.svg";
import profile_works_card_photo5 from "../images/profile_card_5.svg";
import profile_works_card_photo6 from "../images/profile_card_6.svg";

import profile_works_card_photo from "../images/new_work.svg";

import profile_works_card_avatar1 from "../images/avatarka.png"
import profile_works_card_avatar2 from "../images/avatar2.png"
import save from "../images/save.png"
import like from "../images/like.png"
import star from "../images/star.png"


const MainPageTop = () => {
    return(
        <div class="mainpage__topworks-container">
            <div class="mainpage__topworks-container-topic">

                <div class="mainpage__topworks-container-topic-name">
                    <a>Топ работ</a>
                    <img src={arrow}/>
                </div>

                <div class="mainpage__topworks-container-topic-bound">
                    <img src={slider}/>
                </div>

            </div>

            <div class="mainpage__topworks-container-cards">

            <div class="mainpage__works-card">
                <div class="mainpage__works-card-maininfo">
                    <p>Монстр кибер железный человек</p>
                </div>
                <div class="mainpage__works-card-photo">
                    <img src={profile_works_card_photo} alt='card_photo'/>
                </div>
                <div class="mainpage__foryou-card-info">
                <div class="mainpage__foryou-card-authors">
                        <div class="mainpage__foryou-card-avatar">
                            <img src={profile_works_card_avatar1} alt='card_avatar'/>
                            <img src={profile_works_card_avatar2} alt='card_avatar'/>
                        </div>
                        <a>yaane</a>
                    </div>
                    
                    <div class="mainpage__foryou-card-info-count">
                        <div class="mainpage__foryou-card-info-likes">
                            <img src={like} alt='like'/>
                            <p>6</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mainpage__works-card">
                <div class="mainpage__works-card-maininfo">
                    <p>Монстр кибер железный человек</p>
                </div>
                <div class="mainpage__works-card-photo">
                    <img src={profile_works_card_photo} alt='card_photo'/>
                </div>
                <div class="mainpage__foryou-card-info">
                <div class="mainpage__foryou-card-authors">
                        <div class="mainpage__foryou-card-avatar">
                            <img src={profile_works_card_avatar1} alt='card_avatar'/>
                            <img src={profile_works_card_avatar2} alt='card_avatar'/>
                        </div>
                        <a>yaane</a>
                    </div>
                    
                    <div class="mainpage__foryou-card-info-count">
                        <div class="mainpage__foryou-card-info-likes">
                            <img src={like} alt='like'/>
                            <p>6</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mainpage__works-card">
                <div class="mainpage__works-card-maininfo">
                    <p>Монстр кибер железный человек</p>
                </div>
                <div class="mainpage__works-card-photo">
                    <img src={profile_works_card_photo} alt='card_photo'/>
                </div>
                <div class="mainpage__foryou-card-info">
                <div class="mainpage__foryou-card-authors">
                        <div class="mainpage__foryou-card-avatar">
                            <img src={profile_works_card_avatar1} alt='card_avatar'/>
                            <img src={profile_works_card_avatar2} alt='card_avatar'/>
                        </div>
                        <a>yaane</a>
                    </div>
                    
                    <div class="mainpage__foryou-card-info-count">
                        <div class="mainpage__foryou-card-info-likes">
                            <img src={like} alt='like'/>
                            <p>6</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mainpage__works-card">
                <div class="mainpage__works-card-maininfo">
                    <p>Монстр кибер железный человек</p>
                </div>
                <div class="mainpage__works-card-photo">
                    <img src={profile_works_card_photo} alt='card_photo'/>
                </div>
                <div class="mainpage__foryou-card-info">
                <div class="mainpage__foryou-card-authors">
                        <div class="mainpage__foryou-card-avatar">
                            <img src={profile_works_card_avatar1} alt='card_avatar'/>
                            <img src={profile_works_card_avatar2} alt='card_avatar'/>
                        </div>
                        <a>yaane</a>
                    </div>
                    
                    <div class="mainpage__foryou-card-info-count">
                        <div class="mainpage__foryou-card-info-likes">
                            <img src={like} alt='like'/>
                            <p>6</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mainpage__works-card">
                <div class="mainpage__works-card-maininfo">
                    <p>Монстр кибер железный человек</p>
                </div>
                <div class="mainpage__works-card-photo">
                    <img src={profile_works_card_photo} alt='card_photo'/>
                </div>
                <div class="mainpage__foryou-card-info">
                <div class="mainpage__foryou-card-authors">
                        <div class="mainpage__foryou-card-avatar">
                            <img src={profile_works_card_avatar1} alt='card_avatar'/>
                            <img src={profile_works_card_avatar2} alt='card_avatar'/>
                        </div>
                        <a>yaane</a>
                    </div>
                    
                    <div class="mainpage__foryou-card-info-count">
                        <div class="mainpage__foryou-card-info-likes">
                            <img src={like} alt='like'/>
                            <p>6</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mainpage__works-card">
                <div class="mainpage__works-card-maininfo">
                    <p>Монстр кибер железный человек</p>
                </div>
                <div class="mainpage__works-card-photo">
                    <img src={profile_works_card_photo} alt='card_photo'/>
                </div>
                <div class="mainpage__foryou-card-info">
                <div class="mainpage__foryou-card-authors">
                        <div class="mainpage__foryou-card-avatar">
                            <img src={profile_works_card_avatar1} alt='card_avatar'/>
                            <img src={profile_works_card_avatar2} alt='card_avatar'/>
                        </div>
                        <a>yaane</a>
                    </div>
                    
                    <div class="mainpage__foryou-card-info-count">
                        <div class="mainpage__foryou-card-info-likes">
                            <img src={like} alt='like'/>
                            <p>6</p>
                        </div>
                    </div>
                </div>
            </div>

           </div>
        </div>
    )
}

export default MainPageTop;