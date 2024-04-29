import React from "react";

const NewCard = () =>{
    
    
    return(
        <div className="newcard__container">

            <div className="newcard__toolbar">
                <div className="newcard__toolbar_load">
                    <div className="newcard__toolbar_1">
                        <p>1</p>
                    </div>
                    <p>Загрузка</p>
                </div>
                <div className="newcard__toolbar_desc">
                    <div className="newcard__toolbar_2">
                        <p>2</p>
                    </div>
                    <p>Описание</p>
                </div>
            </div>

            <div className="newcard__workflow">
                <div className="newcard__workflow_txt">
                    <p className="newcard__workflow_txt_1">Перетащите файл сюда</p>
                    <p className="newcard__workflow_txt_2">.stl,.3mf,.step,.zip</p>
                    <p className="newcard__workflow_txt_3">или</p>
                    <div className="newcard__workflow_txt_overview">
                        <p>Обзор</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default NewCard;