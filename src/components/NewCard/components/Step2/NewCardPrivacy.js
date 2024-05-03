import React, {useState} from "react";

const NewCardPrivacy = () => {
    const [isPublic, setPublic] = useState(true);
    const [isPrivate, setPrivate] = useState(false);

    const switchPublic = () => {
        setPrivate(!isPrivate);
        setPublic (!isPublic)
    };

    return(
        <div className="newcard__desc-privacy">
                        <div className="newcard__desc-privacy-check">
                            <p>Доступ</p>
                            <div className="newcard__desc-privacy-checkbox">
                                <div className="newcard__desk-privacy-checkbox-public">
                                    {isPublic ? (<div className="newcard__desk-privacy-checkbox-krug">
                                        <div>
                                            
                                        </div>
                                    </div>):(
                                        <div className="newcard__desk-privacy-checkbox-krug_2" onClick={switchPublic}>
                            
                                        </div>
                                    )}

                                    <p>Публичный</p>  
                                </div> 
                                <div className="newcard__desk-privacy-checkbox-private">
                                    {isPrivate ? (
                                        <div className="newcard__desk-privacy-checkbox-krug">
                                        <div>
                                            
                                        </div>
                                    </div>

                                    ):(
                                    <div className="newcard__desk-privacy-checkbox-krug_2" onClick={switchPublic}>
                            
                                    </div>)}
                                    <p>Личный</p>
                                </div> 
                            </div>

                            <div className="newcard__desk-privacy-desk">
                                <p>Описание</p>

                                <form className="newcard__desk-privacy-desk-inputform">
                                    <textarea
                                    type="text"
                                    placeholder="Добавить описание"
                                    ></textarea>

                                </form>
                            </div>

                        </div>

                    </div>
    )
}

export default NewCardPrivacy;