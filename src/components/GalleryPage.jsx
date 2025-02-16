'use client';
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Just list your image names directly
  const images = [
    'shortlet-1.jpeg',
    'shortlet-2.jpeg',
    'shortlet-3.jpeg',
    'shortlet-4.jpeg',
    'shortlet-5.jpeg',
    'shortlet-6.jpeg',
    'shortlet-7.jpeg',
    'shortlet-8.jpeg',
    'shortlet-9.jpeg',
    'shortlet-10.jpeg',
    'shortlet-11.jpeg',
    'shortlet-12.jpeg',
    'shortlet-13.jpeg',
    'shortlet-14.jpeg',
    'shortlet-15.jpeg',
    'shortlet-16.jpeg',
    'shortlet-17.jpeg',
    'shortlet-18.jpeg',
    'shortlet-19.jpeg',
    'shortlet-20.jpeg',
    'shortlet-21.jpeg',
    'shortlet-22.jpeg',
    'shortlet-23.jpeg',
    'shortlet-24.jpeg',
    'shortlet-25.jpeg',
    'shortlet-26.jpeg',
    'shortlet-27.jpeg',
    'shortlet-28.jpeg',
    'shortlet-29.jpeg',
    'shortlet-30.jpeg',
    'shortlet-31.jpeg',
    'shortlet-32.jpeg',
    'shortlet-33.jpeg',
    'shortlet-34.jpeg',
    'shortlet-35.jpeg',
    'shortlet-36.jpeg',
    'shortlet-37.jpeg',
    'shortlet-38.jpeg',
    'shortlet-39.jpeg',
    'shortlet-40.jpeg',
    'shortlet-41.jpeg',
    'shortlet-42.jpeg',
    'shortlet-43.jpeg',
    'shortlet-44.jpeg',
    'shortlet-45.jpeg',
    'shortlet-46.jpeg',
    'shortlet-47.jpeg',
    'shortlet-48.jpeg',
    'shortlet-49.jpeg',
    'shortlet-50.jpeg',
    'shortlet-51.jpeg',
    'shortlet-52.jpeg',
    'shortlet-53.jpeg',
    'shortlet-54.jpeg',
    'shortlet-55.jpeg',
    'shortlet-56.jpeg',

    // Add all your image filenames here
  ];

  const openLightbox = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const previousImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  return (
    <div className="min-h-screen px-16 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-200"
              onClick={() => openLightbox(index)}
            >
              <img
                src={`/images/shortlet/${image}`}
                alt={`Property image ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-20" />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm">
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-50 rounded-full bg-black bg-opacity-50 p-2 text-white transition-colors hover:bg-opacity-70"
          >
            <X size={24} />
          </button>

          <button
            onClick={previousImage}
            className="absolute left-4 z-50 rounded-full bg-black bg-opacity-50 p-2 text-white transition-colors hover:bg-opacity-70"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 z-50 rounded-full bg-black bg-opacity-50 p-2 text-white transition-colors hover:bg-opacity-70"
          >
            <ChevronRight size={24} />
          </button>

          <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden">
            <img
              src={`/images/shortlet/${selectedImage}`}
              alt="Selected property image"
              className="h-auto max-h-[90vh] w-auto max-w-[90vw] object-contain"
            />
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black bg-opacity-50 px-4 py-2 text-sm text-white">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;