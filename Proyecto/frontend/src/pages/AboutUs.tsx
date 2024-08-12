import React from "react";
import "../styles/AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <div className="main-container bg-gradient-to-b from-purple-700 via-purple-300 to-white">
      <div className="container mx-auto py-4 flex flex-col items-center">
        <div className="main-page-about w-full max-w-6xl bg-gray-100 p-6 rounded-lg shadow-lg px-8 overflow-y-auto">
          <div className="grid grid-cols-1 gap-8">
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-purple-700 mb-4 text-center">
                Nuestro Equipo
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src="https://github.com/VicenteLavagnino.png"
                        alt="Vicente Lavagnino"
                        className="rounded-full w-24 h-24 mx-auto mb-2"
                      />
                      <h3 className="text-xl font-semibold text-purple-600">
                        Vicente Lavagnino
                      </h3>
                      <p className="text-gray-600">Full Stack Dev</p>
                      <p className="text-gray-600">&</p>
                      <p className="text-gray-600">CoFounder</p>
                    </div>
                    <div className="flip-card-back">
                      <a href="https://github.com/VicenteLavagnino">
                        <h3 className="text-xl font-semibold">
                          Vicente Lavagnino
                        </h3>
                      </a>
                      <p>Estudiante de Ingeniería UC, generación 2021.</p>
                      <p>Major Software y Minor en Data Science</p>
                      <p>
                        Apasionado por el desarrollo web, la ciberseguridad y el
                        desarrollo de tecnologías emergentes
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src="https://github.com/franco-anfossi.png"
                        alt="Franco Anfossi"
                        className="rounded-full w-24 h-24 mx-auto mb-2"
                      />
                      <h3 className="text-xl font-semibold text-purple-600">
                        Franco Anfossi
                      </h3>
                      <p className="text-gray-600">Full Stack Dev</p>
                      <p className="text-gray-600">&</p>
                      <p className="text-gray-600">CoFounder</p>
                    </div>
                    <div className="flip-card-back">
                      <a href="https://github.com/franco-anfossi">
                        <h3 className="text-xl font-semibold">
                          Franco Anfossi
                        </h3>
                      </a>
                      <p>Estudiante de Ingeniería UC, generación 2021.</p>
                      <p>Major Software y Minor en Data Science</p>
                      <p>
                        Apasionado por el desarrollo web, la inteligencia
                        artificial y el desarrollo de tecnologías emergentes
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src="https://github.com/IanZmen.png"
                        alt="Ian Fuenzalida"
                        className="rounded-full w-24 h-24 mx-auto mb-2"
                      />
                      <h3 className="text-xl font-semibold text-purple-600">
                        Ian Fuenzalida
                      </h3>
                      <p className="text-gray-600">Full Stack Dev</p>
                      <p className="text-gray-600">&</p>
                      <p className="text-gray-600">CoFounder</p>
                    </div>
                    <div className="flip-card-back">
                      <a href="https://github.com/IanZmen">
                        <h3 className="text-xl font-semibold">
                          Ian Fuenzalida
                        </h3>
                      </a>
                      <p>Estudiante de Ingeniería UC, generación 2021.</p>
                      <p>Major Software y Minor en Data Science</p>
                      <p>
                        Apasionado por el desarrollo web, el machine learning y
                        el desarrollo de tecnologías emergentes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-purple-700 mb-4 text-center">
                Nosotros
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  En nuestra red social, promovemos la autenticidad y la
                  realidad en las interacciones diarias. Nos inspiramos en
                  estudios que muestran la presión que sienten los jóvenes por
                  editar sus fotos y alcanzar estándares de belleza poco
                  realistas. Creemos que al permitir solo a los amigos publicar
                  en tu perfil, fomentamos un ambiente más genuino y
                  representativo de la vida real.
                </p>
                <h3 className="text-2xl font-semibold text-purple-600">
                  ¿Por qué es importante?
                </h3>
                <p>
                  El{" "}
                  <strong>
                    23% de las niñas y jóvenes de edades entre 10 y 17 años
                  </strong>{" "}
                  ‘no se ven lo suficientemente bien’ sin editar sus fotos,
                  mientras que el <strong>20%</strong> se siente decepcionado
                  por no tener el mismo aspecto en la vida real que en sus fotos
                  de Internet. Estas tristes estadísticas reflejan la presión
                  que enfrentan los jóvenes hoy en día.
                </p>
                <p>
                  Al nosotros poder elegir la foto "perfecta", estamos generando
                  como sociedad una burbuja de perfección difícil de alcanzar
                  para adolescentes, e incluso adultos jóvenes. Con el aumento
                  de influencers que marcan tendencias o metas no siempre sanas,
                  es crucial promover una imagen realista y saludable.
                </p>
                <h3 className="text-2xl font-semibold text-purple-600">
                  Nuestra Diferencia
                </h3>
                <p>
                  Lo que distingue esta red social de las demás es que no puedes
                  postear nada en tu perfil. Solo tus AMIGOS pueden hacerlo. De
                  esta forma, si te juntas con tu mejor amigo a jugar a la
                  pelota, él no podrá subir su historia diciendo que se pasó a
                  todos y marcó 10 goles, sino que tú subirás en su muro un
                  mensaje de lo bien que la pasaron jugando y una foto del
                  tercer tiempo.
                </p>
                <p>
                  Así, buscamos incentivar un ambiente donde seamos más reales
                  con lo que hacemos en nuestro día a día, cómo nos vemos, con
                  quién nos relacionamos y lo que realmente somos: seres humanos
                  disfrutando la vida.
                </p>
                <h3 className="text-2xl font-semibold text-purple-600">
                  Nuestro Público Objetivo
                </h3>
                <p>
                  Defendemos el uso de redes sociales en adolescentes, puesto
                  que están inmersos en el siglo 21, con una sociedad que vive
                  conectada. No pueden quedarse atrás ni desperdiciar la gran
                  oportunidad de pasar un buen rato con amigos y familiares a
                  través de sus celulares. Por esto mismo, aquellos jóvenes
                  serán nuestro público objetivo.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-purple-700 mb-4 text-center">
                Súmate
              </h2>
              <div className="text-gray-700 space-y-4">
                <p className="text-center">
                  Si compartes nuestra visión y quieres ser parte de esta nueva
                  forma de interactuar en redes sociales, contáctanos en{" "}
                  <a
                    href="mailto:hola@merror.com"
                    className="text-purple-700 underline"
                  >
                    hola@merror.com
                  </a>
                  .
                </p>
                <p className="text-center">
                  Estamos emocionados de recibir nuevas ideas y colaborar con
                  personas apasionadas por crear un entorno digital más
                  saludable y auténtico. ¡Únete a nosotros y se parte del
                  cambio!
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
