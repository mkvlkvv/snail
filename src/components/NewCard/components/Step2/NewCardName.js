import React, {useState} from "react";

import search_cat from "../alg/categories.js";

import arrow1 from "../../../../images/newcard_arrow_1.svg"
import arrow2 from "../../../../images/newcard_arrow_2.svg"

const NewCardName = () =>{
    const [isList, setList] = useState(false);
    const [searchCat, setCat] = useState('');
    const [inputValue, setInput] = useState('');
    const [choseCat, setChoose] = useState('');

    const list1 = search_cat('');

    const switchList = () =>{
        setList(!isList);
    };

    const handleInputQuery = (e) =>{
      setInput(e);
    }

    const chooseCat = (cats, subcat) =>{
      const rez = cats + '/' + subcat;
      console.log(rez);

      setChoose(rez);
      setList(!isList);
      document.getElementById("category").value = rez;
    }

    const searchValue = () => {
        const data = search_cat(inputValue);
        
        if (!data){
          return (<p>Ничего не найдено</p>)
        };
        const fun = (o, n) => {
        if ((Array.isArray(o))&&(o.length>1)){
        const verst = o.map((cat) =>(
            <div onClick={() => chooseCat(n, cat)}><p>{cat}</p></div>
        ));
        return verst;
      } else {
        const verst = <div onClick={() => chooseCat(n, o)}><p>{o}</p></div>;
        return verst;
        };
        
        };
        const list0 = data.map((obj) =>(
          <div className="rezult__list">
          <div className="rezult__list_block">
              <p>{obj.name}</p>
              <div className="rezult__list_block_subcats">
                {fun(obj.categories, obj.name)}
              </div>
          </div>
        </div>
        ));
        return(list0);
    };

    const handleFocus = () => {
        setList(true);
      };
    
      const handleBlur = () => {
        setList(false);
      };

    const [tag, setTag] = useState('');
    const [tags, setTags] = useState([]);

  const handleInputChange = (event) => {
    setTag(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
      const newTag = tag.trim();
      if (newTag) {
        setTags([...tags, newTag]);
        setTag('');
      }
    }
  };




    return (
                    <div className="newcard__desc-maininfo">
                        <div className="newcard__desc-maininfo-name">
                            <p>Название</p>

                            <form className="newcard__desc-maininfo-nameinputform">
                                <input
                                    placeholder="Введите название" 
                                />
                            </form>
                        </div>

                        <div className="newcard__desc-maininfo-category">
                            <p>Категория</p>

                            <form className="newcard__desc-maininfo-categoryinputform">

                                <input
                                    id = "category" 
                                    placeholder="Выберите категорию"
                                    onChange={(e) => handleInputQuery(e.target.value)}
                                    onFocus={handleFocus}
                                />
                                {isList ? (<img src={arrow2} onClick={switchList} />):(<img src={arrow1} onClick={switchList}/>)}      
                                
                            </form>

                        </div>
                        {isList ? (<div className="newcard__desc-maininfo-category-list">
                               <div className="newcard__desc-maininfo-category-list_search-list">
                                  {searchValue()}
                               </div>
                        </div>):(<v></v>)}

                        <div className="newcard__desc-maininfo-tags">
                            <p>Теги</p>

                            <form className="newcard__desc-maininfo-nameinputform">
                            <input
                                    placeholder="Введите тег"
                                    onChange={handleInputQuery}
                                    onKeyDown={handleInputKeyDown}
                                    value={tag}

                                />
                            </form>

                            <div className="newcard__desc-maininfo-tags-c">
                        {tags.map((tag, index) => (
                            <span key={index}>
                                    {tag}
                            </span>
                        ))}
                        </div>
                            
                        </div>
                        

                    </div>
    )
};

export default NewCardName;