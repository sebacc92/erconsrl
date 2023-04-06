/* eslint-disable react/prop-types */
import Card from './Card';

function Emprendimientos({ items }) {
  return (
    <div className="nuestros-emprendimientos p-16 bg-gray-800">
      <div className="mx-2 sm:mx-4 mt-8 text-white">
        <h3 className="mb-4 text-3xl text-center font-semibold uppercase tracking-wide">
          Nuestros Emprendimientos
        </h3>
        <div className="flex justify-center">
          <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Card
                description={item.description}
                images={item.images}
                location={item.location}
                categoria={item.categoria}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emprendimientos;
