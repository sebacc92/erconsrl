import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, animateScroll as scroll } from 'react-scroll';
import {
  faCircleInfo,
  faCirclePlay,
  faImage,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import Map from '../components/Map';
import 'react-image-gallery/styles/css/image-gallery.css';

const videoOptions = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 0, // 1 para reproducción automática, 0 para no
    // Aquí puedes agregar más opciones según la documentación de la API de YouTube IFrame Player:
    // https://developers.google.com/youtube/player_parameters
  },
};

function Emprendimiento() {
  const params = useParams();

  const [data, setData] = useState(null);

  const dataEmprendimiento = data?.emprendimientos.find(
    (e) => e.titulo === params.titulo
  );
  console.log('dataEmprendimiento', dataEmprendimiento);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);

  return (
    data &&
    !!dataEmprendimiento && (
      <div>
        <div className="relative mx-auto">
          <img
            src={dataEmprendimiento.images.main}
            alt="Descripción de la imagen"
            className="w-full h-[550px] object-cover"
          />
          <div className="absolute z-[4] top-0 w-full">
            <div className="flex justify-between h-[550px] max-w-7xl mx-auto">
              <div className="self-end">
                <div className="">
                  <span
                    className={`transform -translate-x-1/2 text-white px-2 py-1 rounded-md border border-white ${
                      dataEmprendimiento.categoria === 'En pozo'
                        ? 'bg-green-500'
                        : 'bg-red-500'
                    }`}
                  >
                    {dataEmprendimiento.categoria}
                  </span>
                  <h1 className="text-white text-7xl font-bold uppercase">
                    <span className="text-7xl font-bold uppercase">
                      {dataEmprendimiento.titulo}
                    </span>
                    <small className="text-2xl font-light">
                      {dataEmprendimiento.location}
                    </small>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="product menu bg-white shadow-md sticky top-90 z-99 py-4 px-0 block">
          <div className="container">
            <div className="row flex justify-center mx-(-15)">
              <Link
                activeClass="active"
                to="infoGeneral"
                spy
                smooth
                offset={-70}
                duration={300}
              >
                <button
                  type="button"
                  className="mr-2 border border-gray-300 text-gray-500 px-4 py-2 rounded flex items-center hover:border-blue-500 hover:text-blue-500"
                >
                  <FontAwesomeIcon icon={faCircleInfo} />
                  <span className="ml-2">Info general</span>
                </button>
              </Link>
              <Link
                activeClass="active"
                to="imagenes"
                spy
                smooth
                offset={-70}
                duration={300}
              >
                <button
                  type="button"
                  className="mr-2 border border-gray-300 text-gray-500 px-4 py-2 rounded flex items-center hover:border-blue-500 hover:text-blue-500"
                >
                  <FontAwesomeIcon icon={faImage} />
                  <span className="ml-2">Imágenes</span>
                </button>
              </Link>
              <Link
                activeClass="active"
                to="video"
                spy
                smooth
                offset={-70}
                duration={300}
              >
                <button
                  type="button"
                  className="mr-2 border border-gray-300 text-gray-500 px-4 py-2 rounded flex items-center hover:border-blue-500 hover:text-blue-500"
                >
                  <FontAwesomeIcon icon={faCirclePlay} />
                  <span className="ml-2">Video</span>
                </button>
              </Link>
              <Link
                activeClass="active"
                to="ubicacion"
                spy
                smooth
                offset={-70}
                duration={300}
              >
                <button
                  type="button"
                  className="mr-2 border border-gray-300 text-gray-500 px-4 py-2 rounded flex items-center hover:border-blue-500 hover:text-blue-500"
                >
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span className="ml-2">Ubicación</span>
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-gray-200 p-8" id="infoGeneral">
          <div className="container bg-white mx-auto px-4 py-1 rounded-lg border border-gray-700">
            <h1 className="text-4xl font-bold text-[#990000] my-8">
              {dataEmprendimiento.info.titulo}
            </h1>
            <h2 className="text-2xl font-semibold text-[#B80000] mb-4">
              {dataEmprendimiento.info.subtitulo}
            </h2>
            {dataEmprendimiento.info.descripcion.map((p) => (
              <p className="text-lg font-normal text-gray-700 mb-4">{p}</p>
            ))}
          </div>
        </section>
        <section
          className="gallery-images mx-auto max-w-7xl sm:p-8 md:p-12 lg:p-16 xl:p-20"
          id="imagenes"
        >
          <ImageGallery
            items={dataEmprendimiento.images.gallery}
            showThumbnails
            showPlayButton={false}
            showBullets={false}
            autoPlay={false}
            bulletClass="image-gallery-image"
          />
        </section>
        <section className="mx-auto max-w-2xl" id="video">
          <YouTube
            videoId={dataEmprendimiento.videoYoutubeId}
            opts={videoOptions}
          />
        </section>
        <section
          className="map my-8 mx-auto max-w-[#1600] sm:p-8 md:p-12 lg:p-16 xl:p-20"
          id="ubicacion"
        >
          <Map
            address={{
              name: 'La Plata, Buenos Aires',
              lat: dataEmprendimiento.ubicacion.latitude,
              lng: dataEmprendimiento.ubicacion.longitude,
            }}
          />
        </section>
      </div>
    )
  );
}

export default Emprendimiento;
