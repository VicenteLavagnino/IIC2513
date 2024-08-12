import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import SignInAndSignUp from "../assets/SignInAndSignUp.png";
import Main from "../assets/Main.png";
import AdolescenteMujer from "../assets/AdolescenteMujerEspejo.webp";
import Adolescentes from "../assets/2Adolescentes.webp";

const Docs: React.FC = () => {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      duration: 1000,
      distance: "50px",
      origin: "bottom",
      delay: 200,
      reset: false,
    });
  }, []);

  const navigate = useNavigate();

  const HandleMerror = () => {
    navigate("/for-you");
  };

  return (
    <div className="Landing bg-long-gradient from-start to-end min-h-screen min-w-screen">
      <div className=" flex flex-col  items-center  mb-5 mt-10">
        <div className="p-10">
          <h1 className="TitleDocs text-center text-4xl sm:text-8xl font-bold">
            Instructions
          </h1>
        </div>
        <div className="flex flex-col mt-10 reveal">
          <h2 className="TitleDocs text-center text-2xl sm:text-4xl font-bold">
            Que es Merror
          </h2>
          <div className="flex flex-col sm:flex-row p-20">
            <div className="flex items-center justify-center mb-4 sm:w-1/2 h-auto ">
              <img
                src={AdolescenteMujer}
                className="h-auto rounded-extra w-9/12 h-9/12"
                alt="Adolescente Mujer"
              />
            </div>
            <div className=" flex justify-center w-full sm:w-1/2 items-center">
              <p className="text-center text-xl sm:text-2xl font-semibold">
                Merror es una red social que busca reflejar como somos en
                verdad.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 reveal">
          <h2 className="TitleDocs text-center text-2xl sm:text-4xl font-bold">
            Como usar Merror
          </h2>
          <div className="flex flex-col sm:flex-row p-20">
            <div className=" flex justify-center w-full sm:w-1/2 items-center">
              <p className="text-center text-xl mb-4 sm:text-2xl font-semibold">
                La idea de Merror es que tu no puedas publicar nada de ti, solo
                tus amigos lo haran. Por lo que tu perfil sera un espejo de ti.
                Y para que tus amigos se reflejen en la aplicación deberas
                añadirlos, publicar y comentar cosas acerca de lo que hiciste
                con ellos el fin de semana o de la vez que fueron al gimnasio
                por ejemplo.
              </p>
            </div>
            <div className="flex items-center justify-center object-cover  sm:w-1/2 h-auto ">
              <img
                src={Adolescentes}
                className="h-auto rounded-extra w-9/12 h-9/12"
                alt="Adolescente Espejo"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 reveal">
          <h2 className="TitleDocs text-center text-2xl sm:text-4xl font-bold">
            Como crear una cuenta
          </h2>
          <div className="flex flex-col sm:flex-row p-20">
            <div className="flex items-center justify-center object-cover mb-4 sm:w-1/2 h-auto ">
              <img
                src={SignInAndSignUp}
                className="h-auto rounded-extra w-9/12 h-9/12"
                alt="SignIn And SignUp"
              />
            </div>
            <div className=" flex justify-center w-full sm:w-1/2 items-center">
              <p className="text-center text-xl sm:text-2xl font-semibold">
                ¡Simple! Tan solo debes entrar a nuesstra página, apretar el
                boton de sign up y registrar tus datos.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 reveal">
          <h2 className="TitleDocs text-center text-2xl sm:text-4xl font-bold">
            Como iniciar sesión
          </h2>
          <div className="flex flex-col sm:flex-row p-20">
            <div className=" flex justify-center w-full sm:w-1/2 items-center">
              <p className="text-center text-xl mb-4 sm:text-2xl font-semibold">
                Para iniciar sesión tan solo debes apretar el boton sign in e
                ingresar tus credenciales.
              </p>
            </div>
            <div className="flex items-center justify-center sm:w-1/2 h-auto ">
              <img
                src={SignInAndSignUp}
                className="h-auto rounded-extra w-9/12 h-9/12"
                alt="SignIn And SignUp"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 reveal">
          <h2 className="TitleDocs text-center text-2xl sm:text-4xl font-bold">
            Como añadir amigos
          </h2>
          <div className="flex flex-col sm:flex-row p-20">
            <div className="flex items-center justify-center sm:w-1/2 h-auto ">
              <img
                src={Main}
                className="h-auto rounded-low mb-4 w-9/12 h-9/12"
                alt="Merror"
              />
            </div>
            <div className=" flex justify-center w-full sm:w-1/2 items-center">
              <p className="text-center text-xl sm:text-2xl font-semibold">
                Si buscas a un amigo en especifico tan solo debes abrir el
                buscador, poner su nombre y al encontrarlo mandarle una
                solicitud de amistad. Si a ti te llega una solicitud de amistad,
                tan solo debes aceptarla, estas se hayasn en inbox. (por
                actualizar)
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 reveal">
          <h2 className="TitleDocs text-center text-2xl sm:text-4xl font-bold">
            Como hacer una publicacion
          </h2>
          <div className="flex flex-col sm:flex-row p-20">
            <div className=" flex justify-center w-full sm:w-1/2 items-center">
              <p className="text-center text-xl mb-4 sm:text-2xl font-semibold">
                Debes apretar el boton "Post Now!", ingresar tus fotos, a quien
                se lo públicas, un poco te texto y listo. Tu publicación se
                añadira el feed de tu amigo.
              </p>
            </div>
            <div className="flex items-center justify-center sm:w-1/2 h-auto ">
              <img
                src={Main}
                className="h-auto rounded-low w-9/12 h-9/12"
                alt="Merror"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 reveal">
          <h2 className="TitleDocs text-center text-2xl sm:text-4xl font-bold">
            Como dar like
          </h2>
          <div className="flex flex-col sm:flex-row p-20">
            <div className="flex items-center justify-center mb-4 sm:w-1/2 h-auto ">
              <img
                src={Main}
                className="h-auto rounded-low w-9/12 h-9/12"
                alt="Merror"
              />
            </div>
            <div className=" flex justify-center w-full sm:w-1/2 items-center">
              <p className="text-center text-xl mb-4 sm:text-2xl font-semibold">
                Cuando encuentres una publicación que te guste pulsa el boton
                con el pulgar arriba.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 reveal">
          <h2 className="TitleDocs text-center text-2xl sm:text-4xl font-bold">
            Como comentar
          </h2>
          <div className="flex flex-col sm:flex-row p-20">
            <div className=" flex justify-center w-full sm:w-1/2 items-center">
              <p className="text-center text-xl mb-4 sm:text-2xl font-semibold">
                Cuando veas una publicación y quieras comentar una opinicón
                pulsa el boton con el simbolo de comentario y escribe lo que tu
                quieras.
              </p>
            </div>
            <div className="flex items-center justify-center sm:w-1/2 h-auto ">
              <img
                src={Main}
                className="h-auto rounded-low w-9/12 h-9/12"
                alt="Merror"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 reveal">
          <h2 className="TitleDocs text-center text-2xl sm:text-4xl font-bold">
            Como editar tu perfil
          </h2>
          <div className="flex flex-col sm:flex-row p-20">
            <div className="flex items-center justify-center mb-4 sm:w-1/2 h-auto ">
              <img
                src={Main}
                className="h-auto rounded-low w-9/12 h-9/12"
                alt="Merror"
              />
            </div>
            <div className=" flex justify-center w-full sm:w-1/2 items-center">
              <p className="text-center text-xl sm:text-2xl font-semibold">
                Entras a tu perfil y si ves una publicación o comentario que no
                te guste puedes eliminarla directamente. Ahora, si quieres
                modificar tu perfil siempre puedes seleccionar el icono editar
                en tu muro.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 reveal">
          <h2 className="TitleDocs text-center text-2xl sm:text-4xl font-bold">
            Como Navegar en la red social
          </h2>
          <div className="flex flex-col sm:flex-row p-20">
            <div className=" flex justify-center w-full sm:w-1/2 items-center">
              <p className="text-center text-xl mb-4 sm:text-2xl font-semibold">
                Tan facil como bajar en la página principal.
              </p>
            </div>
            <div className="flex items-center justify-center sm:w-1/2 h-auto ">
              <img
                src={Main}
                className="h-auto rounded-low w-9/12 h-9/12"
                alt="Merror"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 reveal">
          <h2 className="TitleDocs text-center text-2xl sm:text-4xl font-bold">
            Como chatear
          </h2>
          <div className="flex flex-col sm:flex-row p-20">
            <div className="flex items-center justify-center mb-4 sm:w-1/2 h-auto ">
              <img
                src={Main}
                className="h-auto rounded-low w-9/12 h-9/12"
                alt="Adolescente Espejo"
              />
            </div>
            <div className=" flex justify-center w-full sm:w-1/2 items-center">
              <p className="text-center text-xl sm:text-2xl font-semibold">
                Ingresas a tu inbox y creas un chat con quien tu quieras,
                después aparecera en tu página inbox. Buscas el chat de la
                persona con la que quieres chatear, ingresas al chat y mandas
                todos los mensajes que tu quieras.
              </p>
            </div>
          </div>
        </div>
        <div className="p-10 reveal ">
          <button
            type="submit"
            className=" hover:scale-110 flex justify-center w-full sm:w-auto rounded-md bg-custom-purple px-4 sm:px-8 py-1.5 font-semibold leading-6 text-white hover:bg-custom-purple-70 "
            onClick={HandleMerror}
          >
            ¡QUIERO USAR MERROR!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Docs;
