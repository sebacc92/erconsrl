/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

function Gallery({ images }) {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex flex-col items-center md:flex-row md:justify-center">
        <img
          src={currentImage}
          alt="Main"
          className="max-w-full md:max-w-3/4 lg:max-w-1200 my-4 md:mr-4 cursor-pointer"
          onClick={openModal}
        />
        <div className="hidden md:block">
          <button
            type="button"
            onClick={() => {
              const currentIndex = images.indexOf(currentImage);
              const previousIndex =
                currentIndex === 0 ? images.length - 1 : currentIndex - 1;
              setCurrentImage(images[previousIndex]);
            }}
            className="text-3xl text-gray-500 hover:text-gray-800 absolute top-1/2 transform -translate-y-1/2 left-0 z-10"
          >
            {'<'}
          </button>
          <button
            type="button"
            onClick={() => {
              const currentIndex = images.indexOf(currentImage);
              const nextIndex =
                currentIndex === images.length - 1 ? 0 : currentIndex + 1;
              setCurrentImage(images[nextIndex]);
            }}
            className="text-3xl text-gray-500 hover:text-gray-800 absolute top-1/2 transform -translate-y-1/2 right-0 z-10"
          >
            {'>'}
          </button>
        </div>
      </div>
      <div className="flex flex-no-wrap overflow-x-auto justify-center pb-4">
        {images.map((image) => (
          <img
            key={image}
            src={image}
            alt="Thumbnail"
            className={`w-1/3 md:w-1/4 lg:w-1/5 my-1 mx-2 cursor-pointer ${
              currentImage === image && 'border-2 border-gray-500'
            }`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => {
            const currentIndex = images.indexOf(currentImage);
            const previousIndex =
              currentIndex === 0 ? images.length - 1 : currentIndex - 1;
            setCurrentImage(images[previousIndex]);
          }}
          className="text-3xl text-gray-500 hover:text-gray-800 absolute top-1/2 transform -translate-y-1/2 left-0 z-10"
        >
          {'<'}
        </button>
        <button
          type="button"
          onClick={() => {
            const currentIndex = images.indexOf(currentImage);
            const nextIndex =
              currentIndex === images.length - 1 ? 0 : currentIndex + 1;
            setCurrentImage(images[nextIndex]);
          }}
          className="text-3xl text-gray-500 hover:text-gray-800 absolute top-1/2 transform -translate-y-1/2 right-0 z-10"
        >
          {'>'}
        </button>
      </div>
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center"
          onClick={closeModal}
        >
          <img
            src={currentImage}
            alt="Full"
            className="max-h-full max-w-full cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default Gallery;
