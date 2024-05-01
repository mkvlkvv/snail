const data_lycense =[
    {
        code: '111',
        type: 'CC0',
        url_photo: '',
        url_desc: ''
    },
    {
        code: '110',
        type: 'CC BY',
        url_photo: '',
        url_desc: ''
    },
    {
        code: '10',
        type: 'CC BY-NC',
        url_photo: '',
        url_desc: ''
    },
    {
        code: '01',
        type: 'CC BY-ND',
        url_photo: '',
        url_desc: ''
    },
    {
        code: '001',
        type: 'CC BY NC ND',
        url_photo: '',
        url_desc: ''
    },
    {
        code: '000',
        type: 'Standart digital file license',
        url_photo: '',
        url_desc: ''
    },
    {
        code: '21',
        type: 'CC BY-SA',
        url_photo: '',
        url_desc: ''
    },
    {
        code: '20',
        type: 'CC DY-NC-SA',
        url_photo: '',
        url_desc: ''
    }
];



export default licenze = (arr) =>{
    for (lic in data_lycense){
        if (lic.code = arr){
            return lic;
        }
    }

};
