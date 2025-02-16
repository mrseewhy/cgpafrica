

const Cards = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <img 
            src="/images/mission.jpg" 
            alt="Card 1 Image" 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-black mb-2 font-sans">Our Mission</h3>
            <p className="text-gray-800 text-base md:text-lg font-poppins">
            Our mission is to provide an opportunity for every individual to own a piece of tomorrow. We are committed to crafting affordable homes that not only meet the needs of today but also anticipate the dreams of the future. Through innovation and inclusivity, we aim to be the catalyst for positive change in communities worldwide.            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <img 
            src="/images/vision.jpg" 
            alt="Card 2 Image" 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-black mb-2 font-sans">Our Vision</h3>
            <p className="text-gray-800 text-base md:text-lg font-poppins">
            Capricorn Global Properties envisions a world where the dream of owning a home knows no boundaries. From Nigeria to every corner of Africa and beyond, we aspire to create communities that resonate with diversity, warmth, and the promise of a brighter future.            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
