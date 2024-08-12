import { useState } from "react";
import "./Card.css";
import pencil from "./../img/pencil-edit-button.svg";
import trash from "./../img/trash-can.svg";
import check from "./../img/check-mark.png";
import VITE_BACKEND_URL from "../../config";
import axios from "axios";

function Card({identifier, title, body, date, user}) {
    const [edit_title, setTitle] = useState(title);
    const [edit_body, setBody] = useState(body);
    const [edit_mode, setEditMode] = useState(false)
    const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre, diciembre"];

    const delete_entry = async(e) => {
        const config_delete_entry = {
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'delete',
            url: `${VITE_BACKEND_URL}entries/${identifier}`
        }
        try {
            const response_delete = await axios(config_delete_entry);
            console.log(response_delete);
            window.location.reload();
        }
        catch (error) {
            console.log(error);
        }
    }

    function change_edit_mode() {
        if (edit_mode) {
            const update_entry = async(e) => {
                const config_update_entry = {
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    method: 'patch',
                    url: `${VITE_BACKEND_URL}entries/${identifier}`,
                    data: {'id': `${identifier}`,
                            'title': `${edit_title}`,
                            'body': `${edit_body}`,
                            "belongs_to": `${user}`,
                            "date": `${date}`}
                }
                try {
                    const response_update = await axios(config_update_entry);
                    console.log(response_update);
                    window.location.reload();
                }
                catch (error) {
                    console.log(error);
                }
            }
            update_entry()
        }
        setEditMode(!edit_mode)
    }

    function onInputTitle(e) {
        setTitle(e.target.value);
    }

    function onInputParagraph(e) {
        setBody(e.target.value);
    }

    return(
        <>
            <div className="label-box">
                {edit_mode ? (
                    <>
                    <div className="text-container">
                        <h3 className="title"/>
                        <input value={edit_title} onChange={onInputTitle} className="edit_title"/>
                        <textarea value={edit_body} onChange={onInputParagraph} className="edit_paragraph"/>
                        <p className="date">{date.slice(8,10) + " de " + months[parseInt(date.slice(5,7))] + " del " + date.slice(0,4)}</p>
                    </div>
                    <img className="pencil-button" onClick={change_edit_mode} src={check}/>
                    </>
                ) : (
                    <>
                    <div className="text-container">
                        <h3 className="title">{title}</h3>
                        <p className="paragraph">{body}</p>
                        <p className="date">{date.slice(8,10) + " de " + months[parseInt(date.slice(5,7))] + " del " + date.slice(0,4)}</p>
                    </div>
                    <img className="pencil-button" onClick={change_edit_mode} src={pencil}/>
                    <img className="trash-button" onClick={delete_entry} src={trash}/>
                    </>)
                }
            </div>
        </>
    )
}

export default Card;