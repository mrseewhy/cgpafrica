

const WorkWithUs = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-600 mb-6 font-sans">Why Work With Us</h2>
        <p className="text-gray-700 text-lg mb-12 mx-auto w-2/3 font-poppins">
          Choosing Capricorn Global Properties means choosing a partner in your journey towards homeownership. Here’s why you should work with us:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Affordability */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col items-center">
            <img 
              src="/images/affordability.webp" 
              alt="Affordability" 
              className="w-32 h-32 object-cover rounded-full shadow-sm shadow-black mb-4"
            />
            <h3 className="text-xl font-semibold text-yellow-600 mb-4 font-sans">Affordability</h3>
            <p className="text-gray-600 text-center font-poppins">
              We make homeownership achievable with affordable housing options tailored to your needs.
            </p>
          </div>

          {/* Card 2: Global Reach */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col items-center">
            <img 
              src="/images/global.jpg" 
              alt="Global Reach" 
              className="w-32 h-32 object-cover rounded-full mb-4 shadow-sm shadow-black"
            />
            <h3 className="text-xl font-semibold text-yellow-600 mb-4 font-sans">Global Reach</h3>
            <p className="text-gray-600 text-center font-poppins">
              Our services extend across continents, connecting you to homes anywhere in the world.
            </p>
          </div>

          {/* Card 3: Inclusivity */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col items-center">
            <img 
              src="/images/inclu.jpg" 
              alt="Inclusivity" 
              className="w-32 h-32 object-cover rounded-full   mb-4 shadow-sm shadow-black"
            />
            <h3 className="text-xl font-semibold text-yellow-600 mb-4 font-sans">Inclusivity</h3>
            <p className="text-gray-600 text-center font-poppins">
              We embrace diversity and ensure that everyone has access to quality housing opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
