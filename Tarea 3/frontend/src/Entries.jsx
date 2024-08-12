import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Entries.css';
import Card from './components/Card';
import Button from 'react-bootstrap/Button';
import return_sign from "./img/return.png";
import VITE_BACKEND_URL from "../config";
import axios from "axios";

function Entries() {
    const [new_title, setTitle] = useState("");
    const [new_paragraph, setParagraph] = useState("");
    const [user_entries, setUserEntries] = useState([]);
    const [gotEntries, setGot] = useState(false);
    const user = useParams().user;

    const getCurrentDateTime = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const hours = String(currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');
        const seconds = String(currentDate.getSeconds()).padStart(2, '0');
        const milliseconds = String(currentDate.getMilliseconds()).padStart(3, '0');
    
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
    };

    const config_get_user_entries = {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'get',
        url: `${VITE_BACKEND_URL}entries/user/${user}`,
    }

    useEffect(() => {
        const fecthData = async() => {
            if (!gotEntries) {
                try {
                    const entries = await axios(config_get_user_entries);
                    setUserEntries(entries.data.reverse())
                    setGot(true);
                }
                catch (error) {
                    console.log(error);
                }
            }
        }
        fecthData();
    })

    function onInputTitle(e) {
        setTitle(e.target.value)
    }

    function onInputParagraph(e) {
        setParagraph(e.target.value)
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const config_post_entry = {
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'post',
            url: `${VITE_BACKEND_URL}entries`,
            data: {'title': `${new_title}`, 'body': `${new_paragraph}`, "belongs_to": `${user}`, "date": `${getCurrentDateTime()}`}
        }
        try {
            const response_post_entry = await axios(config_post_entry);
            console.log(response_post_entry);
            window.location.reload();
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div id='entries-background'>
                <div className='return-label'><a href="/"><img className="return-button" src={return_sign}/></a></div>
                <div className='slide'>
                    {gotEntries ? (user_entries.map((values, key) => {
                        return(
                            <Card key={key} identifier={values.id} title={values.title} body={values.body} date={values.date} user={user}/>
                        )
                    })): (<div>Cargando...</div>)}
                </div>
                <div className='new-entry'>
                    <input type="text" placeholder='¡Un Nuevo día!' onChange={onInputTitle}></input>
                    <form className="" onSubmit={handleSubmit}>
                        <textarea className="write-area" onChange={onInputParagraph}/>
                        <Button type="submit" style={{position: "absolute", bottom: "20px", left: "20px"}}>Enviar</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Entries
