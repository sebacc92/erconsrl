/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import Slider from 'react-slick';

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 500,
};

function Proveedores({ items }) {
  return (
    <div className="mt-10 mx-auto text-center lg:max-w-5xl">
      <h3 className="mb-4 text-3xl font-semibold uppercase tracking-wide">
        Nuestros proveedores
      </h3>
      <div className="">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={`item-proveedor-${index}`}>
              <img
                className="w-full h-auto rounded-md transition duration-500 ease-in-out transform"
                src={item.image}
                alt="proveedores"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Proveedores;
