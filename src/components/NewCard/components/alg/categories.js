const data = [
    {
        name: "3D принтер",
        categories: ['Аксессуары', 'Части принтера', 'Тестовые модели']
    }, 
    {
        name: "Искусство",
        categories: ['2D', 'Бейджи', 'Вывески', 'Скульптуры', 'Другое']
    },
    {
        name: "Образование",
        categories: ['Биология', 'Химия', 'Инженерия', 'География', 'Математика', 'Физика', 'Астрономия', 'Другое'],

    },
    {
        name: "Хобби & DIY",
        categories: ['Электроника', 'Музыка', 'Робототехника', 'Спорт', 'Транспорт', 'Другое']
    },
    {
        name: "Дом",
        categories: ['Декор', 'Праздники', 'Сад', 'Офис', 'Питомцы', 'Другое']
    },
    {
        name: "Миниатюры",
        categories: ['Животные', 'Архитектура', 'Существа', 'Люди', 'Другое']
    },
    {
        name: "Косплей",
        categories: ['Костюмы', 'Маски и шлемы', 'Оружие', 'Другое']
    },
    {
        name: "Инструменты",
        categories: ['Гаджеты', 'Ручные', 'Станки', 'Измерение', 'Медицина', 'Органайзеры', 'Другое'],
    },
    {
        name: "Игры",
        categories: ['Настольные', 'Персонажи', 'Головоломки', 'Конструкторы', 'Другое']
    },
    {
        name: "Дегенеративные",
        categories: ['Липофеймы']
    }

];

const search_cat = (atr) =>{
    let rezult = [];

    data.forEach (category => {

        if ((category.name.includes(atr))&&(!rezult.find(item => item.name === category.name))){
            rezult.push({name: category.name, categories: category.categories});
        };

        category.categories.forEach(subCategory => {
            if (subCategory.includes(atr)&&(!rezult.find(item => item.name === category.name))){
                rezult.push({name: category.name, categories: subCategory});
            };
        });

    });

    return rezult;

};


export default search_cat;