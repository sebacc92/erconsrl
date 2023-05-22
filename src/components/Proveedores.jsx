/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import useBreakpoint from '../hooks/useBreakpoint';
import { useGetProveedoresQuery } from '../services/api';

const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 1000,
};

function Proveedores() {
  const { data, isFetching } = useGetProveedoresQuery();
  console.log('data', data);
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
  if (isFetching) return <div />;
  return (
    <div className="mt-10 mx-auto text-center lg:max-w-5xl">
      <h3 className="mb-4 text-3xl font-semibold uppercase tracking-wide">
        Nuestros proveedores
      </h3>
      <div className="flex flex-wrap justify-center">
        {data.data.map((item, index) => (
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
