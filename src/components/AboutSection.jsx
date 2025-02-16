import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link'

const AboutSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl 
              transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
              <img 
                src="/images/about.jpeg" 
                alt="About Capricornia Global Properties" 
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6  text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className=" text-yellow-600 font-sans">
                About us
              </span>
            </h2>
            
            <p className="text-left text-lg text-gray-800 leading-relaxed font-poppins">
              At Capricorn Global Properties, we&#39;ve been crafting exceptional real estate experiences 
              for over two decades. Our commitment to excellence and deep understanding of the global 
              property market has established us as a trusted name in luxury real estate.
            </p>
            
            <p className="text-left text-lg text-gray-800 leading-relaxed font-poppins">
              We pride ourselves on our personalized approach, ensuring each client&#39;s unique vision 
              is transformed into reality. Our portfolio spans across prestigious locations worldwide, 
              offering exclusive properties that represent the pinnacle of luxury living.
            </p>
            
            <div className="pt-4">
              <Link href='/about'>
              <button  className="group flex items-center justify-center gap-2 px-6 py-3 
                bg-yellow-600 text-white rounded-lg font-semibold transition-all duration-300 
                hover:bg-yellow-700 hover:shadow-lg hover:-translate-y-0.5 font-sans ">
                Read More
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;