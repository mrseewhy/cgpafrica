// components/AboutUs.js

import React from 'react';

const AboutUs = () => {
  return (
    <section className="w-full py-0 sm:py-12 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-4 p-4">
        <div className="w-full md:w-1/2">
          <img 
            src="/images/about.jpeg" 
            alt="About Us Image" 
            className="w-full h-auto sm:rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-800 font-poppins">
          <p className="text-base lg:text-lg mb-4 font-poppins">
            {`
              Capricorn Global Properties is more than a real estate enterprise; 
              we’re global dream builders. Our mission is straightforward yet profound: 
              to create affordable homes that go beyond borders, income brackets, and social classes.
              We are driven by the belief that homeownership should be within reach for everyone, 
              irrespective of their location or financial standing.
            `}
          </p>
          <p className="text-base lg:text-lg font-poppins">
            {`
              At Capricorn, we turn aspirations into addresses, transforming the dream of a secure and beautiful home 
              into a tangible reality. In our pursuit of inclusivity, we extend our reach across continents, envisioning 
              a world where the warmth of a home knows no boundaries. Capricorn Global Properties is a beacon of possibility, 
              welcoming individuals from all walks of life to experience the joy of having a place to call their own.
            `}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;