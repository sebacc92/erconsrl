import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Gallery from '../components/Gallery';
import Map from '../components/Map';

function Emprendimiento() {
  const params = useParams();
  console.log('params', params);

  const [dataEmprendimiento, setDataEmprendimiento] = useState(null);
  console.log('dataEmprendimiento', dataEmprendimiento);

  useEffect(() => {
    fetch(`http://localhost:3001/emprendimientos/${params.title}`)
      .then((response) => response.json())
      .then((data) => setDataEmprendimiento(data));
  }, []);

  const images = [
    'https://via.placeholder.com/1200x800.png?text=Image+1',
    'https://via.placeholder.com/1200x800.png?text=Image+2',
    'https://via.placeholder.com/1200x800.png?text=Image+3',
    'https://via.placeholder.com/1200x800.png?text=Image+4',
    'https://via.placeholder.com/1200x800.png?text=Image+5',
    'https://via.placeholder.com/1200x800.png?text=Image+6',
    'https://via.placeholder.com/1200x800.png?text=Image+7',
    'https://via.placeholder.com/1200x800.png?text=Image+8',
    'https://via.placeholder.com/1200x800.png?text=Image+9',
  ];

  return (
    !!dataEmprendimiento && (
      <div>
        <div className="relative mx-auto">
          <img
            src={dataEmprendimiento.images[0]}
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
                      {dataEmprendimiento.title}
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
              <button
                type="button"
                className="mr-2 border border-gray-300 text-gray-500 px-4 py-2 rounded flex items-center hover:border-blue-500 hover:text-blue-500"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm2 0a10 10 0 11-20 0 10 10 0 0120 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{dataEmprendimiento.content}</span>
              </button>
              <button
                type="button"
                className="mr-2 border border-gray-300 text-gray-500 px-4 py-2 rounded flex items-center hover:border-blue-500 hover:text-blue-500"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm2 0a10 10 0 11-20 0 10 10 0 0120 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Imágenes</span>
              </button>
              <button
                type="button"
                className="mr-2 border border-gray-300 text-gray-500 px-4 py-2 rounded flex items-center hover:border-blue-500 hover:text-blue-500"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm2 0a10 10 0 11-20 0 10 10 0 0120 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{dataEmprendimiento.location}</span>
              </button>
            </div>
          </div>
        </section>
        <section className="bg-gray-200 p-8">
          <div className="m-8">
            <div className="detail-body bg-white p-8 mx-auto max-w-7xl">
              {dataEmprendimiento.content}
            </div>
          </div>
        </section>
        <section className="gallery-images">
          <Gallery images={dataEmprendimiento.images} />
        </section>
        <section className="map w-full my-8">
          <Map
            address={{
              name: 'La Plata, Buenos Aires',
              lat: -34.921451,
              lng: -57.954529,
            }}
          />
        </section>
      </div>
    )
  );
}

export default Emprendimiento;
