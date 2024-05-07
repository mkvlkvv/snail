import React, {useState} from "react";

import licenze from "../alg/newcard_alg.js";

const NewCardLicenze = () => {
    const [isQ3, setQ3] = useState(true);

    const [isQ3_0, setQ3_0] = useState(false);
    const [isQ3_1, setQ3_1] = useState(true);


    const [isQ1_0, setQ1_0] = useState(false);
    const [isQ1_1, setQ1_1] = useState(true);

    const [isQ2_0, setQ2_0] = useState(false);
    const [isQ2_1, setQ2_1] = useState(true);
    const [isQ2_2, setQ2_2] = useState(false);
    const arr = [1, 1, 1];
    

    const [otv1, set1] = useState('1')
    const [otv2, set2] = useState('1')
    const [otv3, set3] = useState('1');
    const [licenzze, setlicenze] = useState(licenze('111'));

    

    const [isL, setL] = useState(true);

    const descQ3 = () =>{

        if (isQ1_0&&isQ2_0){
            return('Разрешить совместное использование или распространение вашей работы или ее производных?')
        }
        if(isQ1_1&&isQ2_1){
           return('Разрешить делиться без указания авторства?')
        }
    };

    const renderLicense = () =>{
        const news = licenze(otv1+otv2+otv3);
        console.log(news.url_photo, news.url_desc, news.type)
        return(<div className="newcard__desc-licenze-type">
        <img src={news.url_photo}></img> 
        <div>
            <p>Лицензия</p>
            <a>Эта работа под лицензией</a>
            <a href={news.url_desc} className="desc">{news.type}</a>
        </div>    
    </div>)
         
    }

    const redArr = (p, i) =>{
        arr[i] = p;
        console.log(arr);
    }

    const switchQ1_0 = () => {
        setQ1_0(true); //0
        setQ1_1(false); //1
        if (isQ2_0){
            setQ3(true);
        } else {
            setQ3(false);
        };
        set1('0');
        
    };

    const switchQ1_1 = () => {
        setQ1_0(false); //0
        setQ1_1(true);
        if (isQ2_1){
            setQ3(true);
        } else {
            setQ3(false);
        }
        set1('1');
    };


    const switchQ2_0 = () => {
        setQ2_0(true);
        setQ2_1(false);
        setQ2_2(false);
        if (isQ1_0){
            setQ3(true);
        } else {
            setQ3(false);
        }
        set2('0');
    };

    const switchQ2_1 = () => {
        setQ2_1(true);
        setQ2_0(false);
        setQ2_2(false);
        if (isQ1_1){
            setQ3(true);
        } else {
            setQ3(false);
        }
        set2('1');
        
    };

    const switchQ2_2 = () => {
        setQ2_1(false);
        setQ2_0(false);
        setQ2_2(true);
        setQ3(false);
        set2('2');
        
    };

    const switchQ3_0 = () => {
        setQ3_1(false);
        setQ3_0(true);
        set3('0');
    }

    const switchQ3_1 = () => {
        setQ3_0(false);
        setQ3_1(true);
        set3('1');
    }
   

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
                            <p>{descQ3()}</p>

                            <div className="newcard__desc-licenze-q1-checkbox">
                                <div className="newcard__desc-licenze-q1-checkbox_1">
                                {isQ3_1 ? (
                                        <div className="newcard__desk-privacy-checkbox-krug">
                                        <div>
                                            
                                        </div>
                                    </div>

                                    ):(
                                    <div className="newcard__desk-privacy-checkbox-krug_2" onClick={switchQ3_1}>
                            
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
                                    <div className="newcard__desk-privacy-checkbox-krug_2" onClick={switchQ3_0}>
                            
                                    </div>)}

                                    <p>Нет</p>

                                </div>
                            </div>

                        </div>

                        ):(<div className="pd"></div>)

                        }

                        {isL ? ( renderLicense()
                            
                        ):(<div className="pd"></div>)} 

                    </div>
    )
};

export default NewCardLicenze;