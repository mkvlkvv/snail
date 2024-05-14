import React from "react";
import Bio from "./components/Bio";
import Account from "./components/Account";

const AccountSettings = () =>{
    
    return(
        <div className="account_settings__container">
            <div className="account_settings__menu">
                <div><p>Изменение профиля</p></div>
                <div><p>Управление аккаунтом</p></div>
                <div><p>Уведомления</p></div>
            </div>
            <div className="account_settings__settings">
                <Bio />
                <Account />
            </div>
        </div>
    )
};

export default AccountSettings;