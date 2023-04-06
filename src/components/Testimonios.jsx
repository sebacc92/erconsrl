/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

function TestimoniosSlider({ items }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id}>
            <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-4 py-3">
                <div className="flex items-center justify-center">
                  <img
                    className="h-10 w-10 rounded-full mr-2"
                    src={item.image}
                    alt={item.nombre}
                  />
                  <h2 className="text-gray-900 text-lg font-medium">
                    {item.name}
                  </h2>
                </div>
                <p className="mt-2 text-gray-600">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimoniosSlider;
