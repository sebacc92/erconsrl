/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { useNavigate } from 'react-router-dom';
import useBreakpoint from '../hooks/useBreakpoint';
import 'react-image-gallery/styles/css/image-gallery.css';
import CustomDescription from './CustomDescription';

function MyGallery({ items }) {
  const breakpoint = useBreakpoint();
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);

  const renderCustomSlide = (item) => (
    <div key={item.original} className="relative">
      <img src={item.original} alt="" className="w-full h-full object-cover" />
      <CustomDescription
        description={items[currentIndex].descriptionCard}
        title={items[currentIndex].title}
        onClick={() =>
          navigate(`/emprendimientos/${items[currentIndex].title}`)
        }
      />
    </div>
  );

  return (
    <div id="test2">
      <ImageGallery
        items={items}
        renderItem={renderCustomSlide}
        showThumbnails={false}
        showPlayButton={false}
        showBullets={breakpoint !== 'xs'}
        autoPlay
        bulletClass="image-gallery-image"
        onSlide={(index) => setCurrentIndex(index)}
      />
    </div>
  );
}

export default MyGallery;
