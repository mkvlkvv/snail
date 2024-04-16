import React, {useState} from "react";
import east from "../images/east.svg" 
import telegram from "../images/telegram.svg"
import gmail from "../images/gmail.svg"
import instagram from "../images/instagram.svg"

const AuthModal = ({ show, onCloseButtonClick }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    if (!show){
        return  null;
    }

    const handleLogin = () => {
        fetch('api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
        .then((Response) => {
            if(!Response.ok){
                throw new Error('Ошибка авторизации');
            }
            return Response.json();
        })
        .then((data) =>{
            const token = data.token;
            //Сохраняем в локальном хранилище или в cookie?
            //Закрыть модал
        })
        .catch((Error) => {
            console.error('Ошибка авторизации', Error)

        })
    };
    
    return(
        <div class="auth___form-container">
           <div class="auth__login">
                <div class="auth__login__vhod">
                    <p>Вход</p>
                </div>
                <div class="auth__login__social">
                    <img src={gmail}/>
                    <img src={instagram}/>
                    <img src={telegram}/>
                </div>
                <div class="auth__login__or">
                    <p class="auth__login__or_p">или</p>
                </div>
                <div class="auth__login__forms">
                    <form class="auth__login__form_login">
                        <input
                            className="auth__login__form__input__login"
                            name="form_login"
                            value="Почта"
                            type="text"
                        />
                        <div class="auth__login__form__up" id="form1">
                        <p>Почта</p>
                    </div>
                    </form>
                    <form class="auth__login__form_password">
                    <input
                            className="auth__login__form__input__password"
                            name="form_login"
                            value="Пароль"
                            type="text"
                        />
                        <div class="auth__login__form__down" id="form1">
                        <p>Пароль</p>
                    </div>
                    </form>
                </div>
                <div class="auth__login__enter">
                    <p>Войти</p>
                </div>
           </div>
           <div class="auth__back">
                <div class="auth__back__reg">
                    <p>Регистрация</p>
                    <img src={east}/>                
                </div>
           </div>
        </div>
    )
}

export default AuthModal;