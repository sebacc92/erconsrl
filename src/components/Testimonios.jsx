'use client'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function TestimoniosSlider({ testimoniosData }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: true,
    rtl: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!testimoniosData) return <div />;

  return (
    <div className="max-w-6xl mx-auto my-8 px-4 py-16">
      <h3 className="mb-4 text-3xl font-semibold uppercase tracking-wide text-center">
        Testimonios
      </h3>
      <Slider {...settings}>
        {testimoniosData.data.map((item, index) => (
          <div key={`testimonio-${index}`} className="px-2">
            <div className="mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.attributes.imagen?.data?.attributes?.url && <img
                    className="h-10 w-10 rounded-full mr-2"
                    src={item.attributes.imagen.data.attributes.url}
                    alt={item.attributes.nombre}
                  />}
                  <h2 className="text-gray-900 text-lg font-medium">
                    {item.attributes.nombre}
                  </h2>
                </div>
                <p className="mt-2 text-gray-600">{item.attributes.content}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimoniosSlider;
