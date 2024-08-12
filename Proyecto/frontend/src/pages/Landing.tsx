import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import merrorLogoMorado from "../assets/LogoMorado.svg";
import MerrorMorado from "../assets/MerrorMorado.svg";
import AdolescenteEspejo from "../assets/AdolescenteEspejo.webp";
import Mujer from "../assets/Mujer.webp";
import AdultoViejoEspejo from "../assets/AdultoViejoEspejo.webp";
import Hombre from "../assets/Hombre.webp";
import Espejo from "../assets/Espejo.webp";
import { useAuth } from "../auth/AuthContext.tsx";

const Landing: React.FC = () => {
  const [indiceActual, setearIndice] = useState(0);

  const listaDeImagenes = [
    Espejo,
    AdolescenteEspejo,
    Mujer,
    AdultoViejoEspejo,
    Hombre,
  ];

  const navigate = useNavigate();

  const { token } = useAuth();

  useEffect(() => {
    if (token !== null) {
      navigate("/for-you");
    }
  }, [navigate, token]);

  const handleLogIn = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const siguienteImagen = () => {
    setearIndice((Indice) =>
      Indice === listaDeImagenes.length - 1 ? 0 : indiceActual + 1,
    );
  };

  const imagenAnterior = () => {
    setearIndice((Indice) =>
      listaDeImagenes.length === 1
        ? 0
        : Indice === 0
          ? listaDeImagenes.length - 1
          : indiceActual - 1,
    );
  };

  return (
    <div className="Landing bg-gradient-to-r from-start to-end min-h-screen min-w-screen flex flex-col sm:flex-row sm:mb-0 mb-5">
      <div className=" flex justify-center w-full sm:w-1/2 items-center">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row items-center justify-center space-x-4  mt-20 sm:mt-8 sm:ml-8">
            <img
              src={merrorLogoMorado}
              className="w-1/2 sm:w-44 h-auto "
              alt="Logo Morado"
            />
            <img
              src={MerrorMorado}
              className="w-1/2 sm:w-60 h-auto "
              alt="Merror Morado"
            />
          </div>
          <div className="mt-6 flex flex-1 flex-col items-center justify-center">
            <div>
              <h2 className="slogan text-center text-xl sm:text-2xl font-bold">
                A place that reflects
              </h2>
            </div>
            <div className="mt-6">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5">
                <button
                  type="submit"
                  className="flex justify-center w-full sm:w-auto rounded-md bg-custom-purple px-4 sm:px-8 py-1.5 font-semibold leading-6 text-white hover:bg-custom-purple-70"
                  onClick={handleLogIn}
                >
                  Log in
                </button>
                <button
                  type="submit"
                  className="flex justify-center w-full sm:w-auto rounded-md bg-custom-purple px-4 sm:px-8 py-1.5 font-semibold leading-6 text-white hover:bg-custom-purple-70"
                  onClick={handleSignUp}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full sm:w-1/2 h-auto sm:h-screen p-10 sm:p-20">
        <div className="relative w-auto inline-block">
          <div
            className="absolute left-0 top-0 bottom-0 w-1/2 cursor-pointer"
            onClick={imagenAnterior}
            style={{ zIndex: 10 }}
          ></div>
          <img
            src={listaDeImagenes[indiceActual]}
            className="max-w-full h-auto rounded-extra"
            alt="Carousel"
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-1/2 cursor-pointer"
            onClick={siguienteImagen}
            style={{ zIndex: 10 }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
