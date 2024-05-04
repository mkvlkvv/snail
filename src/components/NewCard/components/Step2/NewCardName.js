import React, {useState} from "react";

import data from "../alg/categories.js";

import arrow1 from "../../../../images/newcard_arrow_1.svg"
import arrow2 from "../../../../images/newcard_arrow_2.svg"

const NewCardName = () =>{
    const [isList, setList] = useState(false);
    const [searchCat, setCat] = useState('');

    const switchList = () =>{
        setList(!isList);
    };

    const searchValue = (atr) => {
        setCat(atr);
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
                                    placeholder="Выберите категорию"
                                    onChange={(e) => setCat(e.target.value)}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                                {isList ? (<img src={arrow2} onClick={switchList} />):(<img src={arrow1} onClick={switchList}/>)}      
                                
                            </form>

                        </div>
                        {isList ? (<div className="newcard__desc-maininfo-category-list">
                               <div className="newcard__desc-maininfo-category-list_search-list">

                               </div>
                        </div>):(<v></v>)}

                        <div className="newcard__desc-maininfo-tags">
                            <p>Теги</p>

                            <form className="newcard__desc-maininfo-nameinputform">
                            <input
                                    placeholder="Введите тег"
                                    onChange={handleInputChange}
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