"use client";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';


const PropertiesSection = () => {
  const pathname = usePathname();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample images array - replace with your actual images
  const images = [
    '/images/1.jpeg',
    '/images/2.jpeg',
    '/images/3.jpeg',
    '/images/4.jpeg',
    '/images/5.jpeg',
    '/images/6.jpeg',
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const isServicesRoute = pathname === '/properties';

 

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        
        {!isServicesRoute && (<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-600 mb-8 font-sans">
  Our Properties
</h2>)}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Video Column */}
          <div className="lg:w-1/2">
            <div 
              className="relative h-[400px] rounded-lg overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
              onClick={() => setIsVideoModalOpen(true)}
            >
              {/* Replace with your video thumbnail */}
              <img
                src="/images/overlay.jpg"
                alt="Property Video Thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <Play size={64} className="text-yellow-600 fill-yellow-600" />
              </div>
            </div>
          </div>

          {/* Images Grid Column */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-[400px]">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setIsGalleryOpen(true);
                  }}
                >
                  <img
                    src={image}
                    alt={`Property ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setIsVideoModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>
          <div className="w-full max-w-4xl aspect-video">
            <video
              autoPlay
              controls
              className="w-full h-full"
            >
              <source src="/videos/ipetu.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Image Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setIsGalleryOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={previousImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="w-full max-w-4xl aspect-[4/3] px-16">
            <img
              src={images[currentImageIndex]}
              alt={`Property ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
};

export default PropertiesSection;