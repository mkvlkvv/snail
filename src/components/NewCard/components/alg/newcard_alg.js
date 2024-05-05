const data_lycense =[
    {
        code: "111",
        type: 'CC0',
        url_photo: 'http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg',
        url_desc: 'https://creativecommons.org/publicdomain/zero/1.0/'
    },
    {
        code: '110',
        type: 'CC BY',
        url_photo: 'https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by.svg',
        url_desc: 'https://creativecommons.org/licenses/by/4.0/'
    },
    {
        code: '010',
        type: 'CC BY-NC',
        url_photo: 'http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc.svg',
        url_desc: 'https://creativecommons.org/licenses/by-nc/4.0/'
    },
    {
        code: '100',
        type: 'CC BY-ND',
        url_photo: 'https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nd.svg',
        url_desc: 'https://creativecommons.org/licenses/by-nd/4.0/'
    },
    {
        code: '001',
        type: 'CC BY NC ND',
        url_photo: 'http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-nd.svg',
        url_desc: 'https://creativecommons.org/licenses/by-nc-nd/4.0/'
    },
    {
        code: '000',
        type: 'Standart digital file license',
        url_photo: '',
        url_desc: 'This work is licensed under a Standard Digital File License.'
    },
    {
        code: '120',
        type: 'CC BY-SA',
        url_photo: 'https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-sa.svg',
        url_desc: 'https://creativecommons.org/licenses/by-sa/4.0/'
    },
    {
        code: '020',
        type: 'CC DY-NC-SA',
        url_photo: 'http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.svg',
        url_desc: 'https://creativecommons.org/licenses/by-nc-sa/4.0/'
    }
];



const licenze = (arr) =>{
    for (const lic in data_lycense){
        if (data_lycense[lic].code === arr){
            return data_lycense[lic];
        }else{
            console.log('Err',data_lycense[lic].code)
            console.log('Err',arr);
        }
    }

};

export default licenze;
