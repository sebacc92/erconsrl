import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Topbar() {
  const [data, setData] = useState({ email: '', direccion: '', telefono: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://strapi-erconsrl.onrender.com/api/informacion-de-contacto'
        );

        setData({
          email: response.data.data.attributes.email,
          direccion: response.data.data.attributes.direccion,
          telefono: response.data.data.attributes.telefono,
        });
      } catch (error) {
        console.error('Error al obtener los datos: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    data?.telefono &&
    data?.direccion &&
    data?.email && (
      <div className="bg-gray-900 hidden lg:block lg:fixed lg:top-0 lg:w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="text-gray-300 mr-4">📞 {data.telefono}</div>
            <div className="text-gray-300">🏠 {data.direccion}</div>
            <div className="text-gray-300 mr-4">📧 {data.email}</div>
          </div>
        </div>
      </div>
    )
  );
}

export default Topbar;
