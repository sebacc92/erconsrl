'use client'

import useBreakpoint from '@/hooks/useBreakpoint';

const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 1000,
};

function Proveedores({ proveedoresData }) {
  // Quitamos la llamada a "useGetProveedoresQuery" porque ahora obtenemos los datos de la prop "proveedoresData"

  const breakpoint = useBreakpoint();

  if (breakpoint === 'sm') {
    settings.slidesToShow = 3;
  }
  if (breakpoint === 'md') {
    settings.slidesToShow = 4;
  }
  if (breakpoint === 'lg') {
    settings.slidesToShow = 5;
  }
  if (breakpoint === 'xl') {
    settings.slidesToShow = 6;
  }

  // Verificamos si "proveedoresData" existe, en caso de que la petición inicial no haya terminado todavía
  if (!proveedoresData) return <div />;

  return (
    <div className="mt-10 mx-auto text-center lg:max-w-5xl">
      <h3 className="mb-4 text-3xl font-semibold uppercase tracking-wide">
        Nuestros proveedores
      </h3>
      <div className="flex flex-wrap justify-center">
        {proveedoresData.data.map((item, index) => (
          <div key={`item-proveedor-${index}`} className="p-2">
            {' '}
            {/* Añade margen horizontal para separar un poco las imágenes */}
            <img
              className="w-full h-auto rounded-md transition duration-500 ease-in-out transform"
              src={item.attributes.imagen.data.attributes.url}
              alt="proveedores"
              style={{ maxHeight: '70px' }} // Ajusta la altura máxima de las imágenes para que sean más grandes
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proveedores;
