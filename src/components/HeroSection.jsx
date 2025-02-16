import { PlayCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="min-h-[90vh] bg-white pt-12 md:pt-20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 py-12 md:py-20">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-left">
              <span className="text-yellow-600 font-sans">
                Capricorn Global
              </span>
              <span className="text-gray-800 font-sans"> Properties</span>
            </h1>
            
            <p className="text-left text-lg md:text-xl text-gray-800 max-w-xl leading-relaxed font-poppins">
              Experience the art of living with Capricorn Global Properties, your trusted partner for luxurious yet affordable homes. From opulent residences to cozy abodes, our diverse portfolio is designed to cater to every taste, budget, and dream.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Link href='/properties' className="flex items-center justify-center gap-2 px-6 py-3 bg-yellow-600 text-white 
                rounded-lg font-semibold transition-all duration-300 hover:bg-yellow-700 
                hover:shadow-lg hover:-translate-y-0.5 font-sans">
                <PlayCircle size={20} />
                Our Properties
              </Link>
              
              <Link href="/about" className="group flex items-center justify-center gap-2 px-6 py-3 bg-white 
                text-yellow-600 rounded-lg font-semibold transition-all duration-300 
                hover:bg-gray-50 hover:shadow-lg hover:-translate-y-0.5 border-2 border-yellow-600 font-sans">
                About Us
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          
          {/* Video Section */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl 
              transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
              <video 
                autoPlay 
                controls 
                loop 
                className="w-full h-full object-cover"
                poster="/images/overlay.jpg"
              >
                <source src="/videos/ipetu.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
