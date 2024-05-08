import React, {useState} from "react";

import plus_photo from "../../../../images/plus_photo.svg";
import pic1 from "../../../../images/pic1.svg";
import pic2 from "../../../../images/pic2.svg";
import pic3 from "../../../../images/photo2.jpeg"
import pic4 from "../../../../images/photo3.jpeg"
import upload from "../../../../images/save.png"




const NewCardImages = (props) =>{
    const [drag, setDrag] = useState(false);
    const [images, setImages] = useState([]);
    
    const dragStartHandler = (e) =>{
      e.preventDefault();
      setDrag(true);
    }

    const sendDataToParent = (i) =>{
      const data = i;
      props.sendDataToParent(data);
    }

    const toBase64 = (file) => {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result.split(',')[1]);
        };
        reader.onerror = (error) => {
            reject(error);
        };
        reader.readAsDataURL(file);
    });
    }

    const dragLeaveHandler = (e) =>{
      e.preventDefault();
      setDrag(false);
    }

    const handleImg = async (files) => {
      try {
          const base64Images = await Promise.all(files.map(file => toBase64(file)));
          sendDataToParent(`data:image/png;base64, ${base64Images[0]}`);
          const render = base64Images.map(base64 => (
              <img src={`data:image/png;base64, ${base64}`} />
          ));
          
          console.log(render);
          setImages(prevImages => [...render, ...prevImages]);
          
      } catch (error) {
          console.error('Произошла ошибка при обработке изображений:', error);
          return null;
      }
  };

    const onDropHandler = (e) =>{
      e.preventDefault();
      let files =[...e.dataTransfer.files];
      console.log(files);
      setDrag(false);
      
      handleImg(files);
    }
  
    

    return(
        <div className="newcard__desc-images">
                        <p>Изображения</p>

                        <div className="newcard__desc-images-workcontainer">
                            {drag ? (<div className="newcard__desc-images-workcontainer__newphoto_drag" onDragStart={(e) => dragStartHandler(e)} onDragLeave={(e) => dragLeaveHandler(e)} onDragOver={(e) => dragStartHandler(e)} onDrop={(e) => onDropHandler(e)}>
                                <img src={upload} />
                            </div>):(<div className="newcard__desc-images-workcontainer__newphoto" onDragStart={(e) => dragStartHandler(e)} onDragLeave={(e) => dragLeaveHandler(e)} onDragOver={(e) => dragStartHandler(e)}>
                                <img src= {plus_photo} />
                            </div>)}
                            <div className="newcard__desc-images-workcontainer__slider">
                              {images}
                            </div>
                        </div>

                    </div>
    )
};

export default NewCardImages;