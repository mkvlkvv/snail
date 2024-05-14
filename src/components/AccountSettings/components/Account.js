import React, { useState } from "react";

const Account = () =>{
    const[isQ0, setQ0] = useState(false);
    const[isQ1, setQ1] = useState(true);

    const[isQ20, setQ20] = useState(false);
    const[isQ21, setQ21] = useState(true);

    const handleQ21 = () =>{
        setQ20(false);
        setQ21(true)
    }

    const handleQ20 = () =>{
        setQ21(false);
        setQ20(true)
    }

    const handleQ1 = () =>{
        setQ0(false);
        setQ1(true)
    }

    const handleQ0 = () =>{
        setQ1(false);
        setQ0(true)
    }

    return(<div className="account_settings__account">
            <p>Управление аккаунтом</p>
            <div className="account_settings__inf">
                <div className="inf_email">
                    <p>Email</p>
                    <form>
                        <input placeholder="email@email.com">
                        </input>
                    </form>
                </div>
                <div className="inf_region">
                    <p>Регион</p>
                    <form>
                        <input placeholder="Московская область">
                        </input>
                    </form>
                </div>
                <div className="inf_dr">
                    <p>Дата рождения</p>
                    <form>
                        <input placeholder="18.10.2002">
                        </input>
                    </form>
                </div>
                <div className="inf_gender">
                    <p>Пол</p>
                    <div className="inf_gender_menu">
                        <div className="g_1">
                        {isQ1 ? (<div className="krug_1">
                            <div></div>
                        </div>):(<div className="krug_0" onClick={handleQ1}>
                    </div>)}
                            <p>Мужской</p>
                        </div>
                        <div className="g_1">
                        {isQ0 ? (<div className="krug_1">
                            <div></div>
                        </div>):(<div className="krug_0" onClick={handleQ0}>
                    </div>)}
                            <p>Женский</p>
                        </div>

                    </div>

                </div>

            </div>
            <div className="account_settings__tresh">
                <div className="tresh">
                    <p>Показывать 18+ контент?</p>
                    <div className="tresh_choose">
                    <div className="bio_fav_menu_1">
                        {isQ21 ? (<div className="krug_1">
                            <div></div>
                        </div>):(<div className="krug_0" onClick={handleQ21}>
                    </div>)}

                    <p>Да</p>
                    </div>
                    <div className="bio_fav_menu_0">
                    {isQ20 ? (<div className="krug_1">
                            <div></div>
                        </div>):(<div className="krug_0" onClick={handleQ20}>
                    </div>)}
                    <p>Нет</p>
                    </div>

                    </div>
                </div>
            </div>
            <div className="account_settings__pswd">
                <div className="pswd_1">
                    <p>Пароль</p>
                    <div className="pswd_pswd">
                        <form>

                        </form>

                        <div className="pswd_change">
                            <p>Изменить</p>
                        </div>
                    </div>

                    
                </div>
            </div>
            <div className="account_settings__acc">
                <p>Аккаунт</p>

                <div className="acc_delete"><p>Удалить аккаунт</p></div>
            </div>
    </div>)
}

export default Account;