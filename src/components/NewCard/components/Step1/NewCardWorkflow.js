import React, {useState} from "react";
import upload from "../../../../images/save.png"

const NewCardWorkflow = () =>{
    const [drag, setDrag] = useState(false);

    const onDropHandler = (e) =>{
        e.preventDefault();
        let files =[...e.dataTransfer.files];
        console.log(files);
        setDrag(false);
      }

      const dragStartHandler = (e) =>{
        e.preventDefault();
        setDrag(true);
      }

      const dragLeaveHandler = (e) =>{
        e.preventDefault();
        setDrag(false);
      };

      

    return(<div>
        {drag ? (
            <div className="newcard__workflow_drag" onDragStart={(e) => dragStartHandler(e)} onDragLeave={(e) => dragLeaveHandler(e)} onDragOver={(e) => dragStartHandler(e)} onDrop={(e) => onDropHandler(e)}>
                <div className="newcard__workflow_txt">
                    <p className="newcard__workflow_txt_1">Перетащите файл сюда</p>
                    <p className="newcard__workflow_txt_2">.stl,.3mf,.step,.zip</p>
                    <img src={upload}/>
                </div>
        </div>
        ):(<div className="newcard__workflow" onDragStart={(e) => dragStartHandler(e)} onDragLeave={(e) => dragLeaveHandler(e)} onDragOver={(e) => dragStartHandler(e)}>
                <div className="newcard__workflow_txt">
                    <p className="newcard__workflow_txt_1">Перетащите файл сюда</p>
                    <p className="newcard__workflow_txt_2">.stl,.3mf,.step,.zip</p>
                    <p className="newcard__workflow_txt_3">или</p>
                    <div className="newcard__workflow_txt_overview">
                        <p>Обзор</p>
                    </div>

                </div>
        </div>)}
        </div>
    )
};

export default NewCardWorkflow;