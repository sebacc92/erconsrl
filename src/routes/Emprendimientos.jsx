import { useState } from 'react';
import Card from '../components/Card';
import MapModal from '../components/MapModal';

const obras = [];

function Emprendimientos() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mx-2 sm:mx-4 mt-20 lg:mt-28">
      <h3 className="mb-4 text-3xl text-center font-semibold uppercase tracking-wide">
        Emprendimientos
      </h3>
      <div className="flex justify-center">
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {obras.map((obra) => (
            <Card
              description={obra.description}
              id={obra.id}
              image={obra.image}
              place={obra.place}
              setIsOpen={setIsOpen}
              status={obra.status}
              title={obra.title}
            />
          ))}
        </div>
      </div>

      <h3 className="mt-8 text-3xl text-center font-semibold uppercase tracking-wide">
        Obras finalizadas y entregadas
      </h3>
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
  );
}

export default Emprendimientos;
