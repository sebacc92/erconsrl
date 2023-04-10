/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MapModal from '../components/MapModal';
import PaginatedItems from '../components/PaginatedItems';
import WhatsAppButton from '../components/WhatsAppButton';
import Card from '../components/Card';
import Tabs from '../components/Tabs/Tabs';

function Emprendimientos({ selectedTab }) {
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);

  const tabs = data && [
    {
      id: 'tab1',
      title: 'Trabajando',
      content: (
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.emprendimientos
            .filter((item) => item.categoria === 'Trabajando')
            .map((item) => (
              <Card
                description={item.description}
                images={item.images}
                location={item.location}
                categoria={item.categoria}
                titulo={item.titulo}
              />
            ))}
        </div>
      ),
    },
    {
      id: 'tab2',
      title: 'Proyectos',
      content: (
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.emprendimientos
            .filter((item) => item.categoria === 'Proyectos')
            .map((item) => (
              <Card
                description={item.description}
                images={item.images}
                location={item.location}
                categoria={item.categoria}
                titulo={item.titulo}
              />
            ))}
        </div>
      ),
    },
    {
      id: 'tab3',
      title: 'Inversión',
      content: (
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.emprendimientos
            .filter((item) => item.categoria === 'Inversión')
            .map((item) => (
              <Card
                description={item.description}
                images={item.images}
                location={item.location}
                categoria={item.categoria}
                titulo={item.titulo}
              />
            ))}
        </div>
      ),
    },
    {
      id: 'tab4',
      title: 'Finalizadas',
      content: (
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.emprendimientos
            .filter((item) => item.categoria === 'Finalizada')
            .map((item) => (
              <Card
                description={item.description}
                images={item.images}
                location={item.location}
                categoria={item.categoria}
                titulo={item.titulo}
              />
            ))}
        </div>
      ),
    },
  ];

  return (
    data && (
      <div className="mx-2 sm:mx-4 mt-20 lg:mt-28">
        <h3 className="mb-4 text-3xl text-center font-semibold uppercase tracking-wide">
          Emprendimientos
        </h3>
        <div className="flex justify-center">
          <Tabs tabs={tabs} selectedTab={selectedTab} />
        </div>

        {/* <h3 className="mt-8 text-3xl text-center font-semibold uppercase tracking-wide">
          Obras finalizadas y entregadas
        </h3>
        <div className="flex justify-center">
          <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <PaginatedItems
              itemsPerPage={6}
              items={data.emprendimientosFinalizados}
            />
          </div>
        </div> */}
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
        <WhatsAppButton phoneNumber={data.contacto.whatsapp} />
      </div>
    )
  );
}

export default Emprendimientos;
