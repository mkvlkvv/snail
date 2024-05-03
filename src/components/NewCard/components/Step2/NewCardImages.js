import React, {useState} from "react";

import plus_photo from "../../../../images/plus_photo.svg";
import pic1 from "../../../../images/pic1.svg";
import pic2 from "../../../../images/pic2.svg";

const NewCardImages = () =>{
    return(
        <div className="newcard__desc-images">
                        <p>Изображения</p>

                        <div className="newcard__desc-images-workcontainer">
                            <div className="newcard__desc-images-workcontainer__newphoto">
                                <img src={plus_photo} />
                            </div>
                            <div className="newcard__desc-images-workcontainer__slider">
                                <img src={pic1} />
                                <img src={pic2} />
                            </div>
                        </div>

                    </div>
    )
};

export default NewCardImages;