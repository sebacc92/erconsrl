import { useEffect, useMemo, useState } from 'react';
import MapModal from '../components/MapModal';
import WhatsAppButton from '../components/WhatsAppButton';
import Tabs from '../components/Tabs/Tabs';
import PaginatedList from '../components/PaginetedList';

function Emprendimientos({ selectedTab }) {
  console.log('selectedTab', selectedTab);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);

  const itemsEmprendimientosFinalizados = data
    ? data.emprendimientos.filter((item) => item.categoria === 'Finalizada')
    : [];

  const itemsEmprendimientosInversion = data
    ? data.emprendimientos.filter((item) => item.categoria === 'Inversión')
    : [];

  const itemsEmprendimientosProyectos = data
    ? data.emprendimientos.filter((item) => item.categoria === 'Proyecto')
    : [];

  const itemsEmprendimientosTrabajando = data
    ? data.emprendimientos.filter((item) => item.categoria === 'Trabajando')
    : [];

  const tabs = data && [
    {
      id: 'tab1',
      title: 'Trabajando',
      content: (
        <PaginatedList
          itemsPerPage={6}
          items={itemsEmprendimientosTrabajando}
        />
      ),
    },
    {
      id: 'tab2',
      title: 'Proyectos',
      content: (
        <PaginatedList itemsPerPage={6} items={itemsEmprendimientosProyectos} />
      ),
    },
    {
      id: 'tab3',
      title: 'Inversión',
      content: (
        <PaginatedList itemsPerPage={6} items={itemsEmprendimientosInversion} />
      ),
    },
    {
      id: 'tab4',
      title: 'Finalizadas',
      content: (
        <PaginatedList
          itemsPerPage={6}
          items={itemsEmprendimientosFinalizados}
        />
      ),
    },
  ];

  return (
    data && (
      <div className="mx-2 sm:mx-4 md:mx-auto mt-20 lg:mt-28 lg:max-w-7xl">
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
