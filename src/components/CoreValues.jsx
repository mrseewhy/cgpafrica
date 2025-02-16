import { Users, Shield, Lightbulb, Handshake } from 'lucide-react';

const CoreValues = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center p-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-600 mb-12 font-sans">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Core Value 1: Inclusivity */}
          <div className="bg-yellow-600 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105">
            <div className="text-yellow-100 text-2xl mb-4 flex items-center justify-center">
              <div className="bg-yellow-500 p-4 rounded-full flex items-center justify-center w-16 h-16">
                <Users className="text-yellow-100 w-8 h-8" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 font-sans">Inclusivity</h3>
            <p className="text-gray-100 text-base md:text-lg font-poppins">
            We believe in providing homes that are inclusive and accessible to individuals from all walks of life.            </p>
          </div>

          {/* Core Value 2: Integrity */}
          <div className="bg-yellow-600 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105">
            <div className="text-yellow-100 text-2xl mb-4 flex items-center justify-center">
              <div className="bg-yellow-500 p-4 rounded-full flex items-center justify-center w-16 h-16">
                <Shield className="text-yellow-100 w-8 h-8" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 font-sans">Integrity</h3>
            <p className="text-gray-100 text-base md:text-lg font-poppins">
            Our commitment to honesty and transparency forms the foundation of our business relationships.            </p>
          </div>

          {/* Core Value 3: Innovation */}
          <div className="bg-yellow-600 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105">
            <div className="text-yellow-100 text-2xl mb-4 flex items-center justify-center">
              <div className="bg-yellow-500 p-4 rounded-full flex items-center justify-center w-16 h-16">
                <Lightbulb className="text-yellow-100 w-8 h-8" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 font-sans">Innovation</h3>
            <p className="text-gray-100 text-base md:text-lg font-poppins">
            We embrace innovation to create homes that are not just structures but living experiences.            </p>
          </div>

          {/* Core Value 4: Community Focus */}
          <div className="bg-yellow-600 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105">
            <div className="text-yellow-100 text-2xl mb-4 flex items-center justify-center">
              <div className="bg-yellow-500 p-4 rounded-full flex items-center justify-center w-16 h-16">
                <Handshake className="text-yellow-100 w-8 h-8" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 font-sans">Community Focus</h3>
            <p className="text-gray-100 text-base md:text-lg font-poppins">
            We prioritize community well-being and actively contribute to the areas where we build.            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
