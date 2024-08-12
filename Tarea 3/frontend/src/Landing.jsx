import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import VITE_BACKEND_URL from "../config";

function Landing() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function onInput(e) {
    setUsername(e.target.value)
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const config_get = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'get',
      url: `${VITE_BACKEND_URL}users/${username}`,
    }

    const config_post = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      url: `${VITE_BACKEND_URL}users`,
      data: {'username': `${username}`}
    }

    try {
      const response_get = await axios(config_get);
      const user = response_get.data.username;
      navigate(`/Entries/${user}`)
    }
    catch (error) {
      if (error.response.status === 404) {
        try {
          const response_post = await axios(config_post); // Post para crear usuario
          if (response_post.status == 201) {
            const user = response_post.data.username
            navigate(`/Entries/${user}`)
          }
        }
        catch (error2) {
          setError(`Error ${error2.response.status} en POST`)
        }
      }
      else {
        setError(`Error ${error.response.status} en GET`);
      }
    }
  };

  return (
    <>
      <div id="landing-background">
        <div className="circles">
          <div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/> {/*¡Estos son los circulos bonitos!*/}
        </div>
        <div id="login-box">
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Nombre de usuario:</Form.Label>
              <Form.Control type="usuario" onChange={onInput}/>
              <Form.Text className="text-muted">
                Se creará al usuario si no existe.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">Enviar</Button>
            {error && <div id='alert'> {error}</div>}
          </Form>
        </div>
      </div>
    </>
  )
}

export default Landing
