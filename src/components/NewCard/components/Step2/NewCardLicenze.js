import React, {useState} from "react";

import licenze from "../alg/newcard_alg.js";

const NewCardLicenze = () => {
    const [isQ3, setQ3] = useState(false);

    const [isQ3_0, setQ3_0] = useState(false);
    const [isQ3_1, setQ3_1] = useState(true);
    const [quest3, set3] = useState('');

    const [isQ1_0, setQ1_0] = useState(false);
    const [isQ1_1, setQ1_1] = useState(false);

    const [isQ2_0, setQ2_0] = useState(false);
    const [isQ2_1, setQ2_1] = useState(false);
    const [isQ2_2, setQ2_2] = useState(false);

    const arr = [0, 0, 0];

    const [isL, setL] = useState(false);

    const descQ3 = () =>{
        console.log('-------------------------------');
        console.log(isQ1_0, isQ1_1);
        console.log(isQ2_0, isQ2_1, isQ2_2);
        if (isQ1_0&&isQ2_0){
            setQ3(true)
            return('Разрешить совместное использование или распространение вашей работы или ее производных?')
        }else{
            if(isQ1_1&&isQ2_1){
            setQ3(true)
            return('Разрешить делиться без указания авторства?')
        }else{setQ3(false)}}
    };

    const switchL = () => {
        setL(!isL);
    };


    const switchQ1_0 = () => {
        setQ1_0(true); //0
        setQ1_1(false); //1
        arr.splice(0, 1, 0);
        console.log('1, Нет: ', isQ1_1, isQ1_0)
        console.log('1, Нет: ', arr)
        

    };

    const switchQ1_1 = () => {
        setQ1_0(false); //0
        setQ1_1(true);
        arr.splice(0, 1, 1);
        console.log('1, Да: ', isQ1_1, isQ1_0)
        console.log('1, Да: ', arr)
        

    };

    const switchQ3 = () => {
        setQ3_0(!isQ3_0);
        setQ3_1(!isQ3_1);
    }

    const switchQ2_0 = () => {
        setQ2_0(true);
        setQ2_1(false);
        setQ2_2(false);
        arr.splice(1, 1, 0);
        console.log('2, Нет: ', isQ2_1, isQ2_0, isQ2_2)
        console.log('2, Нет: ', arr)
        
        
    };

    const switchQ2_1 = () => {
        setQ2_1(true);
        setQ2_0(false);
        setQ2_2(false);
        arr.splice(1, 1, 1);
        console.log('2, Да: ', isQ2_1, isQ2_0, isQ2_2)
        console.log('2, Да: ', arr)
    };

    const switchQ2_2 = () => {
        setQ2_1(false);
        setQ2_0(false);
        setQ2_2(true);
        arr.splice(1, 1, 2);
        console.log('2, Да пока: ', isQ2_1, isQ2_0, isQ2_2)
        console.log('2, Да пока: ', arr)
    };
   

    return(
        <div className="newcard__desc-licenze">
                        <div className="newcard__desc-licenze-q1">
                            <p>Разрешить коммерческое использование вашей работы?</p>

                            <div className="newcard__desc-licenze-q1-checkbox">
                                <div className="newcard__desc-licenze-q1-checkbox_1">
                                {isQ1_1 ? (
                                        <div className="newcard__desk-privacy-checkbox-krug">
                                        <div>
                                            
                                        </div>
                                    </div>

                                    ):(
                                    <div className="newcard__desk-privacy-checkbox-krug_2" onClick={switchQ1_1}>
                            
                                    </div>)}

                                    <p>Да</p>
                                </div>

                                <div className="newcard__desc-licenze-q1-checkbox_0">

                                {isQ1_0 ? (
                                        <div className="newcard__desk-privacy-checkbox-krug">
                                        <div>
                                            
                                        </div>
                                    </div>

                                    ):(
                                    <div className="newcard__desk-privacy-checkbox-krug_2" onClick={switchQ1_0}>
                            
                                    </div>)}

                                    <p>Нет</p>

                                </div>
                            </div>

                        </div>

                        <div className="newcard__desc-licenze-q2">
                            <p>Разрешить публиковать адаптации вашей работы?</p>

                            <div className="newcard__desc-licenze-q2-checkbox">
                                <div className="newcard__desc-licenze-q2-checkbox_1">
                                {isQ2_1 ? (<div className="newcard__desk-privacy-checkbox-krug">
                                        <div>
                                            
                                        </div>
                                    </div>):(
                                        <div className="newcard__desk-privacy-checkbox-krug_2" onClick={switchQ2_1}>
                            
                                        </div>
                                    )}

                                    <p>Да</p>

                                </div>

                                <div className="newcard__desc-licenze-q2-checkbox_0">

                                {isQ2_0 ? (<div className="newcard__desk-privacy-checkbox-krug">
                                        <div>
                                            
                                        </div>
                                    </div>):(
                                        <div className="newcard__desk-privacy-checkbox-krug_2" onClick={switchQ2_0}>
                            
                                        </div>
                                    )}

                                    <p>Нет</p>

                                </div>

                                <div className="newcard__desc-licenze-q2-checkbox_2">

                                {isQ2_2 ? (<div className="newcard__desk-privacy-checkbox-krug">
                                        <div>
                                            
                                        </div>
                                    </div>):(
                                        <div className="newcard__desk-privacy-checkbox-krug_2" onClick={switchQ2_2}>
                            
                                        </div>
                                    )}

                                    <p>Да, пока другие делятся таким же образом</p>

                                </div>
                            </div>
                        </div>

                        { isQ3 ? ( <div className="newcard__desc-licenze-q3">
                            <p>{}</p>

                            <div className="newcard__desc-licenze-q1-checkbox">
                                <div className="newcard__desc-licenze-q1-checkbox_1">
                                {isQ3_1 ? (
                                        <div className="newcard__desk-privacy-checkbox-krug">
                                        <div>
                                            
                                        </div>
                                    </div>

                                    ):(
                                    <div className="newcard__desk-privacy-checkbox-krug_2" onClick={switchQ3}>
                            
                                    </div>)}

                                    <p>Да</p>
                                </div>

                                <div className="newcard__desc-licenze-q1-checkbox_0">

                                {isQ3_0 ? (
                                        <div className="newcard__desk-privacy-checkbox-krug">
                                        <div>
                                            
                                        </div>
                                    </div>

                                    ):(
                                    <div className="newcard__desk-privacy-checkbox-krug_2" onClick={switchQ3}>
                            
                                    </div>)}

                                    <p>Нет</p>

                                </div>
                            </div>

                        </div>

                        ):(<div className="pd"></div>)

                        }

                        {isL ? (
                            <div className="newcard__desc-licenze-type">
                                
                            </div>
                        ):(<div className="pd"></div>)} 

                    </div>
    )
};

export default NewCardLicenze;