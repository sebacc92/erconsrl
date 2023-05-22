import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import useBreakpoint from '../hooks/useBreakpoint';
import 'react-image-gallery/styles/css/image-gallery.css';
import CustomDescription from './CustomDescription';
import { useGetCarouselQuery } from '../services/api';

function Carousel() {
  const { data, isFetching } = useGetCarouselQuery();
  const breakpoint = useBreakpoint();

  const [currentIndex, setCurrentIndex] = useState(0);

  if (isFetching) return <div />;
  const items = data.data.map((item) => ({
    title: item.attributes.titulo,
    original: item.attributes.img.data.attributes.url,
    fullscreen: item.attributes.img.data.attributes.url,
    descriptionCard: item.attributes.description,
    buttonLink: item.attributes.link,
  }));
  const renderCustomSlide = (item) => (
    <div key={item.original} className="relative w-full h-[50vh] lg:h-[60vh]">
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={item.original}
          alt="Imagen del slide"
          className="w-full h-full object-cover"
        />
        <CustomDescription
          description={items[currentIndex].descriptionCard}
          title={items[currentIndex].title}
          buttonLink={items[currentIndex].buttonLink}
        />
      </div>
    </div>
  );

  return (
    <div className="relative mt-[7rem] lg:mt-36">
      <ImageGallery
        items={items}
        renderItem={renderCustomSlide}
        showThumbnails={false}
        showPlayButton={false}
        showBullets={breakpoint !== 'xs'}
        showNav={breakpoint !== 'xs'}
        // autoPlay
        bulletClass="image-gallery-image"
        onSlide={(index) => setCurrentIndex(index)}
      />
    </div>
  );
}

export default Carousel;
