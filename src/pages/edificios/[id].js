/* eslint-disable @next/next/no-img-element */
import ImageGallery from 'react-image-gallery';
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';
import {
  faCircleInfo,
  faCirclePlay,
  faImage,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import Topbar from '@/components/Topbar';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';

import 'react-image-gallery/styles/css/image-gallery.css';
import WhatsAppButton from '@/components/WhatsAppButton';
import Image from 'next/image';
import Footer from '@/components/Footer';

const Map = dynamic(
  () => import('@/components/Map'), // reemplaza './Map' con la ruta de tu componente Map
  { ssr: false }
);

const videoOptions = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 0, // 1 para reproducción automática, 0 para no
    // Aquí puedes agregar más opciones según la documentación de la API de YouTube IFrame Player:
    // https://developers.google.com/youtube/player_parameters
  },
};

function Edificio({ contactoData, categoriesData, logoData, edificioData }) {

  if (!edificioData) return <div />

  const edificio = edificioData.data.attributes;
  console.log('edificio', edificio)

  const listImages = edificio.imagenes?.data?.map((item) => ({
    original: item.attributes.url,
    fullscreen: item.attributes.url,
    renderItem: () => (
      <div className="flex items-center justify-center h-[500px] bg-gray-200 shadow-md overflow-hidden">
        <img
          src={item.attributes.url}
          alt="Descripción de la imagen"
        />
      </div>
    ),
  }));
  
  const listPlanos = edificio.planos?.data?.map((item) => ({
    original: item.attributes.url,
    fullscreen: item.attributes.url,
    renderItem: () => (
      <div className="flex items-center justify-center h-[500px] bg-gray-200 shadow-md overflow-hidden">
        <img
          src={item.attributes.url}
          alt="Descripción de la imagen"
        />
      </div>
    ),
  }));

  return (
    <div>
      <Topbar contactoData={contactoData} />
      <Header categoriesData={categoriesData} logoData={logoData} />  
      <div className="mt-[7rem]">
        <div className="relative mx-auto">
          {edificio?.imagenPrincipal?.data?.length > 0 && (
            <Image
              src={edificio?.imagenPrincipal?.data[0].attributes.url}
              alt="Descripción de la imagen"
              className="w-full h-[550px] object-cover"
              width={700}
              height={100}
            />
          )}
          <div className="absolute z-[4] top-0 w-full">
            <div className="flex justify-between h-[550px] max-w-7xl mx-auto">
              <div className="self-end">
                <div className="">
                  {edificio.categoria?.data?.attributes?.nombre && <span
                    className={`transform -translate-x-1/2 text-white px-2 py-1 rounded-md border border-white ${
                      edificio.categoria === 'En pozo'
                        ? 'bg-green-500'
                        : 'bg-red-500'
                    }`}
                  >
                    {edificio.categoria.data.attributes.nombre}
                  </span>}
                  <h1 className="text-white text-7xl font-bold uppercase">
                    <span className="text-7xl font-bold uppercase">
                      {edificio.titulo}
                    </span>
                    <small className="text-2xl font-light">
                      {edificio.location}
                    </small>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="bg-white shadow-md sticky top-90 z-99 py-4 px-0 block">
          <div className="container">
            <div className="flex flex-wrap justify-center mx-(-15) gap-2">
              {edificio.descripcion && (
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
              )}
              {listImages?.length > 0 && (
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
              )}
              {edificio.videoYoutubeId && (
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
              )}
              {edificio.longitud && edificio.latitud && (
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
              )}
              {listPlanos && (
                <a href={edificio.pdf} download>
                  <button
                    className="mr-2 border border-gray-300 text-gray-500 px-4 py-2 rounded flex items-center hover:border-blue-500 hover:text-blue-500"
                    type="button"
                  >
                    Brochure
                  </button>
                </a>
              )}
            </div>
          </div>
        </section>
        {edificio.descripcion && (
          <section className="  -200 p-8" id="infoGeneral">
            <div className="container bg-white mx-auto px-4 py-1 rounded-lg border border-gray-700">
              {edificio.descripcion}
            </div>
          </section>
        )}
        {listImages?.length > 0 && (
          <section
            className="gallery-images p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 bg-gray-300"
            id="imagenes"
          >
            <h2 className="text-center font-bold text-3xl mb-2">Imágenes</h2>
            <div className="max-w-7xl mx-auto">
              <ImageGallery
                items={listImages}
                showThumbnails
                showPlayButton={false}
                showBullets={false}
                autoPlay={false}
                bulletClass="image-gallery-image"
              />
            </div>
          </section>
        )}
        {listPlanos?.length > 0 && (
          <section
            className="gallery-images p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 bg-gray-300"
            id="imagenes"
          >
            <h2 className="text-center font-bold text-3xl mb-2">Planos</h2>
            <div className="max-w-7xl mx-auto">
              <ImageGallery
                items={listPlanos}
                showThumbnails
                showPlayButton={false}
                showBullets={false}
                autoPlay={false}
                bulletClass="image-gallery-image"
              />
            </div>
          </section>
        )}
        {edificio.videoYoutubeId && (
          <section className="mx-auto max-w-2xl mt-8" id="video">
            <h2 className="text-center font-bold text-3xl mb-2">Video</h2>
            <YouTube videoId={edificio.videoYoutubeId} opts={videoOptions} />
          </section>
        )}
        {edificio.latitud && edificio.longitud && (
  <section
    className="map my-8 mx-auto max-w-[900px] sm:p-8 md:p-12 lg:p-16 xl:p-20"
    id="ubicacion"
  >
    <h2 className="text-center font-bold text-3xl mb-2">Ubicación</h2>
    <Map
      address={{
        name: 'La Plata, Buenos Aires',
        lat: edificio.latitud,
        lng: edificio.longitud,
      }}
    />
  </section>
)}

      </div>
      <WhatsAppButton contactoData={contactoData} />

      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  // Fetch data para todas las rutas
  const res = await fetch('https://strapi-erconsrl.onrender.com/api/edificios');
  const edificios = await res.json();

  // Genera las rutas
  const paths = edificios.data.map((edificio) => ({
    params: { id: edificio.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {

  // Fetch data for Informacion de Contacto
  const contactoRes = await fetch('https://strapi-erconsrl.onrender.com/api/informacion-de-contacto');
  let contactoData = null;
  if (contactoRes.status === 200) {
    contactoData = await contactoRes.json();
  }

    // Fetch data for Categories
  const categoriesRes = await fetch('https://strapi-erconsrl.onrender.com/api/categorias');
  let categoriesData = null;
  if (categoriesRes.status === 200) {
    categoriesData = await categoriesRes.json();
  }

  // Fetch data for Logo
  const logoRes = await fetch('https://strapi-erconsrl.onrender.com/api/logo?populate=*');
  let logoData = null;
  if (logoRes.status === 200) {
    logoData = await logoRes.json();
  }

  // Fetch data for Edificio
  const edificioRes = await fetch(`https://strapi-erconsrl.onrender.com/api/edificios/${params.id}?populate=*`);
  let edificioData = null;
  if (edificioRes.status === 200) {
    edificioData = await edificioRes.json();
  }

  return {
    props: {
      contactoData,
      categoriesData,
      edificioData,
      logoData
    },
  };
}
  

export default Edificio;