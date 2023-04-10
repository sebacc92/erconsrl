import React from 'react';
import Slider from 'react-slick';

const data = [
  { id: 1, content: 'Elemento 1' },
  { id: 2, content: 'Elemento 2' },
  { id: 3, content: 'Elemento 3' },
  // ...otros elementos
];

function HorizontalSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
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
    <div>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id}>
            <div className="item-container border border-black mr-2">
              <h3>{item.content}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HorizontalSlider;
