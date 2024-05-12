import React from "react";

import ava from "../../../images/avatarka.jpg"
import { useSelector } from "react-redux";

const Bio = () =>{
    const alias = useSelector(state => state.alias);
    return(<div className="account_settings__settings-bio">
        <p>Изменение профиля</p>
        <div className="bio_ava">
            <p>Аватар</p>
            <div className="bio_ava_div">
               <img src={ava}></img> 
               <div className="bio_ava_change">
                    <p>Изменить</p>
                </div>
            </div>
            
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
        <div className="bio_fav"></div>
    </div>)
};

export default Bio;