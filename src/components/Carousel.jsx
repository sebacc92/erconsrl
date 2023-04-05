/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { useNavigate } from 'react-router-dom';
import useBreakpoint from '../hooks/useBreakpoint';
import 'react-image-gallery/styles/css/image-gallery.css';
import CustomDescription from './CustomDescription';

function MyGallery() {
  const breakpoint = useBreakpoint();
  const navigate = useNavigate();

  const [itemsCarousel, setItemsCarousel] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('http://api.erconsrl.com.ar/carousel')
      .then((response) => response.json())
      .then((data) => setItemsCarousel(data));
  }, []);

  const renderCustomSlide = (item) => (
    <div key={item.original} className="relative">
      <img src={item.original} alt="" className="w-full h-full object-cover" />
      <CustomDescription
        description={itemsCarousel[currentIndex].descriptionCard}
        title={itemsCarousel[currentIndex].title}
        onClick={() =>
          navigate(`/emprendimientos/${itemsCarousel[currentIndex].title}`)
        }
      />
    </div>
  );

  return (
    <ImageGallery
      items={itemsCarousel}
      renderItem={renderCustomSlide}
      showThumbnails={false}
      showPlayButton={false}
      showBullets={breakpoint !== 'xs'}
      autoPlay
      bulletClass="image-gallery-image"
      onSlide={(index) => setCurrentIndex(index)}
    />
  );
}

export default MyGallery;
