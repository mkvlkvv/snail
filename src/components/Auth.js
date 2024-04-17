import React, {useState} from "react";
import east from "../images/east.svg" 
import telegram from "../images/telegram.svg"
import gmail from "../images/gmail.svg"
import instagram from "../images/instagram.svg"
import west from "../images/west.svg"
import west_dark from "../images/west_dark.svg"

const AuthModal = ({ show, onCloseButtonClick, ref}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [isStep1, setIsStep1] = useState(false);
    const [isStep2, setIsStep2] = useState(false);

    if (!show){
        return  null;
    }

    const switchToRegistration = () => {
        setIsLogin(!isLogin);
        setIsStep1(!isStep1);
    };

    const switchToRegistration1 = () => {
        setIsLogin(!isLogin);
        setIsStep2(!isStep2)
    };

    const switchToRegistration2 = () => {
        setIsLogin(!isLogin);
    };

    const switchToStep2 = () => {
        setIsStep1(!isStep1);
        setIsStep2(!isStep2);
    }

    const switchToStep3 = () => {
        setIsStep2(!isStep2)
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
    <div class="auth-background">
        {isLogin ? (
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
                        placeholder="Почта"
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
                        placeholder="Пароль"
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
            <button onClick={onCloseButtonClick}></button>
            <div class="auth__back__reg" onClick={switchToRegistration}>
                <p>Регистрация</p>
                <img src={east}/>                
            </div>
       </div>
       </div>
        ):(  isStep1 ? (
            <div class="auth___form-container">

            <div class="auth__back_2">
                <div class="auth__back__reg_2" onClick={switchToRegistration}>
                <img src={west}/>
                <p>Вход</p>  
                </div>              
            </div>

            <div class="auth__login_2">
            <button onClick={onCloseButtonClick}></button>
            <div class="auth__login__vhod_2">
                <p>Регистрация</p>
            </div>
            <div class="auth__login__social_2">
                <img src={gmail}/>
                <img src={instagram}/>
                <img src={telegram}/>
            </div>
            <div class="auth__login__or_2">
                <p class="auth__login__or_p_2">или</p>
            </div>
            <div class="auth__login__forms_2">
                <form class="auth__login__form_login_2">
                    <input
                        className="auth__login__form__input__login_2"
                        name="form_login"
                        placeholder="Почта"
                        type="text"
                    />
                    <div class="auth__login__form__up_2" id="form1">
                    <p>Почта</p>
                </div>
                </form>
            </div>
            <div class="auth__login__enter_2" onClick={switchToStep2}>
                <p>Продолжить</p>
            </div>
            <div class="auth__login__text_2">
                <p>Продолжая, вы соглашаетесь с нашим 
                Пользовательским соглашением и 
                подтверждаете, что понимаете Политику конфиденциальности.</p>
            </div>                
       </div>
       </div>):(isStep2 ? (
       <div class="auth___form-container">
            <div class="auth__back_3">
                <div class="auth__back__reg_3" onClick={switchToRegistration1}>
                <img src={west}/>
                <p>Вход</p>  
                </div>              
            </div>
            <div class="auth__login_2">
            <button onClick={onCloseButtonClick}></button>
            <div class="auth__login__vhod_2">
                <p>Регистрация</p>
            </div>
            <div class="auth__login__forms_3">
                <form class="auth__login__form_alias">
                    <input
                        className="auth__login__form__input__login3"
                        name="form_login"
                        placeholder="Придумайте алиас"
                        type="text"
                    />
                    <div class="auth__login__form__up_3" id="form1">
                    <p>Алиас</p>
                </div>
                </form>
                <form class="auth__login__form_password_3">
                <input
                        className="auth__login__form__input__password3"
                        name="form_login"
                        placeholder="Придумайте пароль"
                        type="text"
                    />
                    <div class="auth__login__form__medium_3" id="form1">
                    <p>Пароль</p>
                </div>
                </form>
                <form class="auth__login__form_passwordagain_3">
                <input
                        className="auth__login__form__input__passwordagain3"
                        name="form_login"
                        placeholder="Пароль повторно"
                        type="text"
                    />
                    <div class="auth__login__form__down_3" id="form1">
                    <p>Пароль повторно</p>
                </div>
                </form>
            </div>

            <div class="auth__login__buttons_3">
                <div class="auth__login__button_back" onClick={switchToStep2}>
                    <img src={west_dark}/>
                </div>
                <div class="auth__login__button_next" onClick={switchToStep3}>
                    <p>Продолжить</p>
                </div>
            </div>


            </div>



       </div>)
       :(<div class="auth___form-container">
            <div class="auth__back_3">
                <div class="auth__back__reg_3" onClick={switchToRegistration2}>
                <img src={west}/>
                <p>Вход</p>  
                </div>
            </div>
            <div class="auth__login_3">
                <button onClick={onCloseButtonClick}></button>
                <div class="auth__login__vhod_3">
                    <p>Подтверждение</p>
                </div>              
            <div class="auth__login__forms_4">
            <form class="auth__login__form_passwordagain_3">
                <input
                        className="auth__login__form__input__passwordagain3"
                        name="form_login"
                        placeholder="Введите код"
                        type="text"
                    />
            </form>
            </div>
            <div class="auth__login__buttons_3">
                <div class="auth__login__button_back" onClick={switchToStep3}>
                    <img src={west_dark}/>
                </div>
                <div class="auth__login__button_next_3" onClick={onCloseButtonClick}>
                    <p>Завершить</p>
                </div>
            </div>
            </div>


       </div>)
       )
    )};  
        </div>
    )
}

export default AuthModal;