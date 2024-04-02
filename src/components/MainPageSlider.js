import React from "react";

import slide1 from '../images/main1.svg';
import slide2 from '../images/main2.svg';
import slider from '../images/slider.svg'

const MainPageSlider = () => {
    return (
        <div class="mainpage__slider-container">
            <div class="mainpage__slider-container_sliderpanel">
                <div class="mainpage-slider_container_slide">
                    <img src={slide1}/>
                </div>
                <div class="mainpage-slider_container_slide">
                    <img src={slide2}/>
                </div>
            </div>
            <div class="mainpage-slider_container_slide_bound">
                <img src={slider}/>
            </div>

        </div>
    )
}

export default MainPageSlider;