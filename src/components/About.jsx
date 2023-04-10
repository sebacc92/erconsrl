/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom';

function About({ images, parrafos }) {
  const navigate = useNavigate();
  return (
    <div className="md:container mx-auto px-4 py-24">
      <div className="flex flex-wrap -mx-2">
        <div className="font-gotham-medium w-full md:w-1/2 px-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide mb-4">
            ACERCA DE <span className="text-[#990000]">NOSOTROS</span>
          </h2>
          {parrafos.map(({ texto }, index) => (
            <p
              className="text-gray-600 leading-relaxed mb-4"
              key={`p-${index}`}
            >
              {texto}
            </p>
          ))}
          <button
            onClick={() => navigate('/emprendimientos')}
            type="button"
            className="border border-[#990000] text-[#990000] hover:bg-[#990000] hover:text-white py-2 px-4 mr-2 rounded"
          >
            Ver emprendimientos
          </button>
          <button
            onClick={() => navigate('/nosotros')}
            type="button"
            className="text-[#990000] hover:underline py-2 px-4 rounded"
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
