/* eslint-disable react/prop-types */

function Proveedores({ items }) {
  return (
    <div className="mt-10 mx-auto text-center lg:max-w-5xl">
      <h3 className="mb-4 text-3xl font-semibold uppercase tracking-wide">
        Nuestros proveedores
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.map((item) => (
          <img
            className="w-full h-auto rounded-md transition duration-500 ease-in-out transform"
            src={item.image}
            alt="proveedores"
          />
        ))}
      </div>
    </div>
  );
}

export default Proveedores;
