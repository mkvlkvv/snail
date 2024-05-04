import React, {useState} from "react";

import plus_photo from "../../../../images/plus_photo.svg";
import pic1 from "../../../../images/pic1.svg";
import pic2 from "../../../../images/pic2.svg";
import pic3 from "../../../../images/photo2.jpeg"
import pic4 from "../../../../images/photo3.jpeg"

const NewCardImages = () =>{
    const [draggingIndex, setDraggingIndex] = useState(null);
  const [initialIndex, setInitialIndex] = useState(null);
  const [images, setImages] = useState([
    { url: pic1, offsetX: 0 },
    { url: pic2, offsetX: 0 },
    { url: pic3, offsetX: 0 },
    { url: pic4, offsetX: 0 }
  ]);
    
  const handleDragStart = (index) => {
    setDraggingIndex(index);
    setInitialIndex(index);
  };

  const handleDragOver = (index, e) => {
    e.preventDefault();
    if (index !== draggingIndex && draggingIndex !== null && initialIndex !== null) {
      const newImages = [...images];
      const draggedImage = newImages[draggingIndex];
      newImages.splice(draggingIndex, 1);
      newImages.splice(index, 0, draggedImage);
      setImages(newImages);
      setDraggingIndex(index);
    }
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
    setInitialIndex(null);
  };

    return(
        <div className="newcard__desc-images">
                        <p>Изображения</p>

                        <div className="newcard__desc-images-workcontainer">
                            <div className="newcard__desc-images-workcontainer__newphoto">
                                <img src={plus_photo} />
                            </div>
                            <div className="newcard__desc-images-workcontainer__slider">
                            {images.map((image, index) => (
        <div
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(index, e)}
          onDragEnd={handleDragEnd}
          onDragEnter={(e) => e.preventDefault()}
        >
          <img src={image.url} alt={`Image ${index}`}/>
        </div>
      ))}
                            </div>
                        </div>

                    </div>
    )
};

export default NewCardImages;