import React from "react";
import { Link } from "react-router-dom";
import VideoPlayer from 'react-video-js-player';
import poster from '../images/not_found.png'
//https://www.youtube.com/watch?v=8f7lRUrZY-Q&ysclid=lvgnul6deu156583303

/*<div class="not_found__number">
                404
            </div>
            <div class="not_found__desc">
                <p>Страница не найдена</p>
                <Link to="/snailweb">
                    <div class="not_found__to">
                        На главную
                    </div>
                </Link>

            </div> */

const NotFound = () => {
    
    return(
        <div class="not_found__container">
            <iframe margin-left="800px" width="560" height="315" src="https://www.youtube.com/embed/8f7lRUrZY-Q?si=87x-0ZnZNeskdMVW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>
    )
}

export default NotFound;