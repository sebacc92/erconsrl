/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom';

function About({ images }) {
  const navigate = useNavigate();
  return (
    <div className="md:container mx-auto px-4 py-24">
      <div className="flex flex-wrap -mx-2">
        <div className="font-gotham-medium w-full md:w-1/2 px-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide mb-4">
            ACERCA DE <span className="text-red-500">NOSOTROS</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Somos una empresa constructora joven que nace en noviembre de 2004
            con el aporte de profesionales de vasta experiencia en el campo de
            la construcción y arquitectura. En este tiempo de vida hemos
            desarrollado proyectos y ejecuciones de obra de arquitectura que nos
            incentiva a crecer con el impulso de la actividad pública y privada.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            El objetivo de equipo es desarrollar la creatividad de proyectos y
            la excelencia en la construcción de obras propias y de terceros que
            respalden el crecimiento con la experiencia de nuestros
            profesionales.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            En la actividad privada nos enorgullece comunicar que en este breve
            camino transitado ya hemos realizado y finalizado hasta la
            actualidad 18 unidades de edificios multifamiliares.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            En la actividad pública hemos participado y ganado licitaciones con
            entes provinciales (U.E.P), municipales (M.L.P) y privados
            (Federación Patronal Seguros), que respaldan nuestra seriedad,
            trayectoria y rutina de trabajo.
          </p>
          <button
            onClick={() => navigate('/emprendimientos')}
            type="button"
            className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 mr-2 rounded"
          >
            Ver emprendimientos
          </button>
          <button
            onClick={() => navigate('/nosotros')}
            type="button"
            className="text-blue-500 hover:text-blue-700 py-2 px-4 rounded"
          >
            Conocer mas
          </button>
        </div>
        <div className="w-full md:w-1/2 px-2 mt-8 md:mt-0">
          <div className="grid grid-cols-3 gap-2">
            <img
              src={images[0]}
              alt="Imagen 1"
              className="w-full h-56 object-cover"
            />
            <img
              src={images[1]}
              alt="Imagen 2"
              className="w-full h-56 object-cover"
            />
            <img
              src={images[2]}
              alt="Imagen 3"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <img
              src={images[3]}
              alt="Imagen 4"
              className="w-full h-56 object-cover col-span-1"
            />
            <img
              src={images[4]}
              alt="Imagen 5"
              className="w-full h-56 object-cover col-span-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
