import React, { useState } from "react";

const Account = () =>{
    const[isQ0, setQ0] = useState(false);
    const[isQ1, setQ1] = useState(true);

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
            <div className="account_settings__tresh"></div>
            <div className="account_settings__pswd"></div>
            <div className="account_settings__acc"></div>
    </div>)
}

export default Account;