import React, {useState} from "react";

const NewCardName = () =>{
    return (
                    <div className="newcard__desc-maininfo">
                        <div className="newcard__desc-maininfo-name">
                            <p>Название</p>

                            <form className="newcard__desc-maininfo-nameinputform">
                                <input
                                    placeholder="Назовите свою модель" 
                                />
                            </form>
                        </div>

                        <div className="newcard__desc-maininfo-category">
                            <p>Категория</p>

                            <form className="newcard__desc-maininfo-nameinputform">
                                
                            </form>
                        </div>

                        <div className="newcard__desc-maininfo-tags">
                            <p>Теги</p>

                            <form className="newcard__desc-maininfo-nameinputform">
                            <input
                                    placeholder="Добавьте теги" 
                                />
                            </form>
                        </div>

                    </div>
    )
};

export default NewCardName;