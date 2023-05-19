import { useEffect, useState } from 'react';
import axios from 'axios';
import ParallaxSection from './Parallax';

function Objetivo() {
  const [objetivo, setObjetivo] = useState(null);
  console.log('objetivo', objetivo);
  useEffect(() => {
    axios
      .get(`https://strapi-erconsrl.onrender.com/api/objetivo`)
      .then((response) => {
        setObjetivo(response.data.data);
      });
  }, []);

  return (
    objetivo && (
      <div className="bg-gray-800">
        <ParallaxSection>
          <div className="bg-black bg-opacity-70 rounded-lg p-8 max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-white mb-8 font-gotham-bold">
              {objetivo.titulo}
            </h1>
            <p className="text-xl font-gotham-narrow-black-italic text-white opacity-75">
              {objetivo.descripcion}
              <br /> <i>Ercon Srl.</i>
            </p>
          </div>
        </ParallaxSection>
      </div>
    )
  );
}

export default Objetivo;
