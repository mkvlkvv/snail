import React, {useState, useRef} from "react";
import upload from "../../../../images/save.png"
import draft from "../../../../images/draft.png"
import delet from "../../../../images/delete.png"
import drug from "../../../../images/drag_indicator.png"

function transform(bytes, decimals=2){
    console.log(bytes);
    var k = 1024;
    var dm = decimals < 0 ? 0 : decimals;
    var ras = ['b','Kb', 'Mb', 'Gb', 'Tb'];
    var s = Math.floor(Math.log(bytes)/Math.log(k));
    return Math.round(parseFloat((bytes/Math.pow(k, s)).toFixed(dm))) + ras[s];
}

const NewCardWorkflow = () =>{
    const [drag, setDrag] = useState(false);
    const fileInputRef = useRef(null);

    const [filegrid, setFileGrid] = useState(false);
    const [file_mass, setFile_mass] = useState([]);
    const [items, setItems] = useState([]);

    const handleOverviewClick = () =>{
        fileInputRef.current.click();
    };

    const handleFileChange = (e) =>{
        let file = [...e.target.files];
        setFileGrid(true);
        setItems(prev => [...prev, ...file])
        render2Files(file);
        console.log(file);
    }

    const render2Files = () =>{
        const chunks = Array.from({length: Math.ceil(items.length / 9)}, (_, index) => items.slice(index*9, index*9+9));
        const data = chunks.map((chunk, index) =>(
            <div className="newcard__step1_fileblock_filesgrid_div" key={index}>
                <div className=".newcard__step1_fileblock_filesgrid_f">
                {chunk.map((item) => (
                    <div className="file">
                    <img src={draft}></img>
                    <p className="file_p1">{item.name.substring(0, 27)}</p>
                    <p className="file_p2">{transform(item.size)}</p>
                    <img src={delet} className="file_img_2"></img>
                    <img src={drug} className="file_img_2"></img>

                </div>
                ))}
                </div>
            </div>
        ));
        return data;
    }

    const renderFiles = (files) =>{
        const data = files.map((file) => (
            <div className="file">
                            <img src={draft}></img>
                            <p className="file_p1">{file.name.substring(0, 27)}</p>
                            <p className="file_p2">{transform(file.size)}</p>
                            <img src={delet} className="file_img_2"></img>
                            <img src={drug} className="file_img_2"></img>

                        </div>
        )

        )
        console.log(data);
        setFile_mass(previosdata => [...previosdata, ...data]);
    }

    const onDropHandler = (e) =>{
        e.preventDefault();
        let files =[...e.dataTransfer.files];
        
        files.forEach((file) => {
            console.log(file);
            console.log(file.size)
        });
        setDrag(false);
        setFileGrid(true);
        setItems(prev => [...prev, ...files])
        render2Files(files);
    };

    

      const dragStartHandler = (e) =>{
        e.preventDefault();
        setDrag(true);
      };

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
                    <div className="newcard__workflow_txt_overview" onClick={handleOverviewClick}>
                        <p>Обзор</p>
                        <input 
                            type="file"
                            ref={fileInputRef}
                            accept=".stl, .3mf, .step, .zip"
                            style={{display:"none"}}
                            onChange={handleFileChange}
                        />
                    </div>

                </div>
        </div>)}
        {filegrid ? (<div className="newcard__step1_fileblock">
            <div className="newcard__step1_fileblock_head">
                <div>Продолжить</div>
            </div>
            <div className="newcard__step1_fileblock_filesgrid">
                {render2Files()}
            </div>
        </div>):(<op></op>)}
        </div>
    )
};

export default NewCardWorkflow;
