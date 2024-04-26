import React from "react";
import { Link } from "react-router-dom";
import VideoPlayer from 'react-video-js-player';
import poster from '../images/not_found.png'
//https://www.youtube.com/watch?v=8f7lRUrZY-Q&ysclid=lvgnul6deu156583303

/* */

const NotFound = () => {
    
    return(
        <div class="not_found__container">
            <div class="not_found__number">
                <a>404</a>
            </div>
            <div class="not_found__desc">
                <p>Страница не найдена</p>
                <Link class="not_found__link" to="/snailweb">
                    <div class="not_found__to">
                        <a>На главную</a>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default NotFound;