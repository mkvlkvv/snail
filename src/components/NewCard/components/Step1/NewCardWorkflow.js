import React from "react";

const NewCardWorkflow = () =>{
    return(
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
    )
};

export default NewCardWorkflow;