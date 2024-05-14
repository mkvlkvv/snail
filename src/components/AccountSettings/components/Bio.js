import React, { useState } from "react";

import ava from "../../../images/avatarka.jpg"
import { useSelector } from "react-redux";
import plus_photo from "../../../images/plus_photo.svg";
import upload from "../../../images/save.png"

const Bio = () =>{
    const[isQ0, setQ0] = useState(false);
    const[isQ1, setQ1] = useState(true);

    const [drag, setDrag] = useState(false);
    const [images, setImages] = useState(<img src={ava}></img>);
    const [isDrag, setdDrag] = useState(false);

    const handleD = () =>{
        setdDrag(!isDrag);
    }


    const dragStartHandler = (e) =>{
        e.preventDefault();
        setDrag(true);
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
            const render = base64Images.map(base64 => (
                <img src={`data:image/png;base64, ${base64}`} />
            ));
            
            console.log(render);
            setImages(render[0]);
            
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

    const alias = useSelector(state => state.alias);

    const handleQ1 = () =>{
        setQ0(false);
        setQ1(true)
    }

    const handleQ0 = () =>{
        setQ1(false);
        setQ0(true)
    }

    return(<div className="account_settings__settings-bio">
        <p>Изменение профиля</p>
        <div className="bio_ava">
            <div className="ava_cont">
            <p>Аватар</p>
            <div className="bio_ava_div">
               {images}
               <div className="bio_ava_change" onClick={handleD}>
                    {isDrag ? (<p>Отменить</p>):(<p>Изменить</p>)}
            </div>
            </div>
            </div>

            {isDrag ? (<div>{drag ? (<div className="ava__drag_drag" onDragStart={(e) => dragStartHandler(e)} onDragLeave={(e) => dragLeaveHandler(e)} onDragOver={(e) => dragStartHandler(e)} onDrop={(e) => onDropHandler(e)}>
                <img src={upload}></img>
            </div>):(<div className="ava__drag" onDragStart={(e) => dragStartHandler(e)} onDragLeave={(e) => dragLeaveHandler(e)} onDragOver={(e) => dragStartHandler(e)}>
                <img src={plus_photo}></img>
            </div>)}</div>):(<iii></iii>)}
            
        </div>
        <div className="bio_inf">
            <div className="bio_inf_name">
                <p>Имя</p>
                <form>
                    <input placeholder="всандаль имя">
                    </input>
                </form>

            </div>
            <div className="bio_inf_alias">
                <p>Алиас</p>
                <form>
                    <input placeholder={alias}>
                    </input>
                </form>

            </div>
            <div className="bio_inf_desc">
                <p>Описание</p>
                <form>
                    <textarea placeholder="Добавьте описание">
                    </textarea>
                </form>

            </div>
            <div className="bio_inf_social">
                <p>Социальные сети</p>
                <form>
                    <input placeholder="https://socialmedia">
                    </input>
                </form>
                <div>Добавить ссылку</div>
            </div>
        </div>
        <div className="bio_fav">
            <div className="bio_fav_div">
                <p>Открыть ли другим пользоателям "Избранное"?</p>
                <div className="bio_fav_menu">
                    <div className="bio_fav_menu_1">
                        {isQ1 ? (<div className="krug_1">
                            <div></div>
                        </div>):(<div className="krug_0" onClick={handleQ1}>
                    </div>)}

                    <p>Да</p>
                    </div>
                    <div className="bio_fav_menu_0">
                    {isQ0 ? (<div className="krug_1">
                            <div></div>
                        </div>):(<div className="krug_0" onClick={handleQ0}>
                    </div>)}
                    <p>Нет</p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
};

export default Bio;