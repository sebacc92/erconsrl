/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function TestimoniosSlider({ items }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://strapi-erconsrl.onrender.com/api/testimonios?populate=img'
        );
        console.log('response', response);

        setData(response.data);
      } catch (error) {
        console.error('Error al obtener los datos: ', error);
      }
    };

    fetchData();
  }, []);

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

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={`testimonio-${index}`} className="px-2">
            <div className="mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
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
