import { useEffect, useState } from 'react';
import Card from './Card';

function Obras() {
  const [emprendimientos, setEmprendimientos] = useState([]);
  console.log('emprendimientos', emprendimientos);
  useEffect(() => {
    fetch('http://localhost:3001/emprendimientos')
      .then((response) => response.json())
      .then((data) => setEmprendimientos(data));
  }, []);
  return (
    <div className="nuestros-emprendimientos p-16 bg-gray-800">
      <div className="mx-2 sm:mx-4 mt-8 text-white">
        <h3 className="mb-4 text-3xl text-center font-semibold uppercase tracking-wide">
          Nuestros Emprendimientos
        </h3>
        <div className="flex justify-center">
          <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {emprendimientos.map((emprendimiento) => (
              <Card
                description={emprendimiento.description}
                images={emprendimiento.images}
                location={emprendimiento.location}
                categoria={emprendimiento.categoria}
                title={emprendimiento.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Obras;
