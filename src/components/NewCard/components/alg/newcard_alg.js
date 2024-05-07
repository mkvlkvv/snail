const data_lycense =[
    {
        code: "111",
        type: 'Public Domain',
        url_photo: 'http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg',
        url_desc: 'https://creativecommons.org/publicdomain/zero/1.0/'
    },
    {
        code: '110',
        type: 'Creative Commons Attribution',
        url_photo: 'https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by.svg',
        url_desc: 'https://creativecommons.org/licenses/by/4.0/'
    },
    {
        code: '010',
        type: 'Creative Commons Attribution-NonCommercial',
        url_photo: 'http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc.svg',
        url_desc: 'https://creativecommons.org/licenses/by-nc/4.0/'
    },
    {
        code: '100',
        type: 'Creative Commons Attribution-NoDerivs',
        url_photo: 'https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nd.svg',
        url_desc: 'https://creativecommons.org/licenses/by-nd/4.0/'
    },
    {
        code: '001',
        type: 'Creative Commons Attribution-NonCommercial-NoDerivs',
        url_photo: 'http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-nd.svg',
        url_desc: 'https://creativecommons.org/licenses/by-nc-nd/4.0/'
    },
    {
        code: '000',
        type: 'Standart digital file license',
        url_photo: 'https://www.colorhexa.com/222222.png',
        url_desc: 'This work is licensed under a Standard Digital File License.'
    },
    {
        code: '120',
        type: 'Creative Commons Attribution-ShareAlike',
        url_photo: 'https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-sa.svg',
        url_desc: 'https://creativecommons.org/licenses/by-sa/4.0/'
    },
    {
        code: '020',
        type: 'Creative Commons Attribution-NonCommercial-ShareAlike  -',
        url_photo: 'http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.svg',
        url_desc: 'https://creativecommons.org/licenses/by-nc-sa/4.0/'
    }
];



const licenze = (arr) =>{
    var lic = '';
    console.log('Вошло', arr);
    for (var i = 0; i < data_lycense.length; i++){
        if (data_lycense[i].code === arr){
            lic = data_lycense[i];
            console.log('Положительный результат', lic);
        }else{
            console.log('Отрицательный результат', data_lycense[i].code);
        }
    }
    return(lic);

};

export default licenze;
