import { useGetEdificiosDestacadosQuery } from '../services/api';
import Card from './Card';

function Emprendimientos() {
  const { data, isFetching } = useGetEdificiosDestacadosQuery();
  if (isFetching) return <div />;
  const items = data.data;
  return (
    <div className="nuestros-emprendimientos px-2 py-16 bg-gray-200">
      <div className="sm:mx-4 mt-8">
        <h3 className="mb-4 text-3xl text-center text-black font-semibold uppercase tracking-wide font-gotham-narrow-bold">
          Nuestros Emprendimientos
        </h3>
        <div className="flex justify-center">
          <div className="grid justify-items-center align-items-center gap-8 text-neutral-600 sm:grid-cols-1 lg:grid-cols-3">
            {items.map((item) => (
              <Card
                description={item.attributes.description}
                imagenes={item.attributes.imagenes}
                location={item.attributes.location}
                categoria={item.attributes.categoria.data.attributes.nombre}
                titulo={item.attributes.titulo}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emprendimientos;
