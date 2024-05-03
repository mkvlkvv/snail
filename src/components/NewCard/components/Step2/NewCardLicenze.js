import React, {useState} from "react";

import licenze from "../alg/newcard_alg.js";

const NewCardLicenze = () => {
    const [isQ3, setQ3] = useState(true);

    const [isQ3_0, setQ3_0] = useState(false);
    const [isQ3_1, setQ3_1] = useState(false);

    const [isQ1_0, setQ1_0] = useState(false);
    const [isQ1_1, setQ1_1] = useState(true);

    const [isQ2_0, setQ2_0] = useState(false);
    const [isQ2_1, setQ2_1] = useState(true);
    const [isQ2_2, setQ2_2] = useState(false);

    const arr = [1, 1, 1];

    const [isL, setL] = useState(true);

    const switchL = () => {
        setL(!isL);
    };

    const switchQ1 = () => {
        setQ1_0(!isQ1_0);
        setQ1_1(!isQ1_1);
        if (isQ1_0){
            arr[0] = 0
        }
        if (isQ1_1){
            arr[0] = 1
        }
        console.log(licenze(arr.join('')))
    };

    const switchQ2_0 = () => {
        if(isQ2_1){
            setQ2_1(!isQ2_1)
        };
        if(isQ2_2){
            setQ2_2(!isQ2_2)
        };
        if (isL){
            setL(!isL);
        };

        if (isQ1_0){
            setQ3(!isQ3);
        };
        arr[1] = 0;
        setQ2_0(!isQ2_0);
        console.log(licenze(arr.join()))
    };

    const switchQ2_1 = () => {
        if(isQ2_0){
            setQ2_0(!isQ2_0)
        };
        if(isQ2_2){
            setQ2_2(!isQ2_2)
        };
        if (isL){
            setL(!isL);
        };
        arr[1] = 1;
        setQ2_1(!isQ2_1);
        console.log(licenze(arr.join()))
    };

    const switchQ2_2 = () => {
        if(isQ2_1){
            setQ2_1(!isQ2_1)
        };
        if(isQ2_0){
            setQ2_0(!isQ2_0)
        };
        arr[1] = 2;
        setQ2_2(!isQ2_2);
        console.log(licenze(arr.join()))
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
                                    <div className="newcard__desk-privacy-checkbox-krug_2" onClick={switchQ1}>
                            
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
                                    <div className="newcard__desk-privacy-checkbox-krug_2" onClick={switchQ1}>
                            
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
                                        <div className="newcard__desk-privacy-checkbox-krug_2" onClick={() => {switchQ2_2(); switchL();}}>
                            
                                        </div>
                                    )}

                                    <p>Да, пока другие делятся таким же образом</p>

                                </div>
                            </div>
                        </div>

                        { isQ3 ? ( <div className="newcard__desc-licenze-q3">
                            <p>Разрешить делиться без указания авторства?</p>

                            <div className="newcard__desc-licenze-q1-checkbox">
                                <div className="newcard__desc-licenze-q1-checkbox_1">
                                {isQ1_1 ? (
                                        <div className="newcard__desk-privacy-checkbox-krug">
                                        <div>
                                            
                                        </div>
                                    </div>

                                    ):(
                                    <div className="newcard__desk-privacy-checkbox-krug_2" onClick={switchQ1}>
                            
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
                                    <div className="newcard__desk-privacy-checkbox-krug_2" onClick={switchQ1}>
                            
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