import { useEffect, useState } from 'react';

function Proveedores() {
  const [proveedores, setProveedores] = useState([]);
  useEffect(() => {
    fetch('http://api.erconsrl.com.ar/proveedores')
      .then((response) => response.json())
      .then((data) => setProveedores(data));
  }, []);
  return (
    <div className="mt-10 mx-auto text-center lg:max-w-5xl">
      <h3 className="mb-4 text-3xl font-semibold uppercase tracking-wide">
        Nuestros proveedores
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {proveedores.map((item) => (
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
