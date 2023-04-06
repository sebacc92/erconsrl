/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import MapModal from '../components/MapModal';
import PaginatedItems from '../components/PaginatedItems';

function Emprendimientos() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  console.log('data 3', data);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);

  return (
    data && (
      <div className="mx-2 sm:mx-4 mt-20 lg:mt-28">
        {/* <h3 className="mb-4 text-3xl text-center font-semibold uppercase tracking-wide">
          Emprendimientos
        </h3>
        <div className="flex justify-center">
          <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.emprendimientos.map((item) => (
              <Card
                description={item.description}
                images={item.images}
                location={item.location}
                categoria={item.categoria}
                title={item.title}
              />
            ))}
          </div>
        </div> */}

        <h3 className="mt-8 text-3xl text-center font-semibold uppercase tracking-wide">
          Obras finalizadas y entregadas
        </h3>
        <div className="flex justify-center">
          <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <PaginatedItems
              itemsPerPage={6}
              items={data.emprendimientosFinalizados}
            />
          </div>
        </div>
        {/* Modal */}
        <MapModal
          address={{
            name: 'La Plata, Buenos Aires',
            lat: -34.921451,
            lng: -57.954529,
          }}
          isOpen={isOpen.open}
          closeModal={() => setIsOpen({ open: false, data: null })}
        />
      </div>
    )
  );
}

export default Emprendimientos;
