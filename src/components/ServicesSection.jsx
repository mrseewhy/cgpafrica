import { ArrowRight, Building2, Home, Key, Construction } from 'lucide-react';
import Link from 'next/link';

const ServicesSection = () => {
  const services = [
    {
      icon: <Building2 className="w-12 h-12 text-yellow-600" />,
      title: "Low-Cost Buildings",
      description: "Affordable housing solutions without compromising on quality and comfort.",
      image: "/images/Services_1.jpg"
    },
    {
      icon: <Home className="w-12 h-12 text-yellow-600" />,
      title: "Luxury Apartments",
      description: "Premium living spaces designed for those who appreciate refined elegance.",
      image: "/images/Services_2.jpg"
    },
    {
      icon: <Key className="w-12 h-12 text-yellow-600" />,
      title: "Shortlet",
      description: "Making your dream getaway more affordable and convenient.",
      image: "/images/shortlet.jpeg"
    },
    {
      icon: <Construction className="w-12 h-12 text-yellow-600" />,
      title: "Building Construction",
      description: "Expert construction services delivering projects of all scales.",
      image: "/images/Services_4.jpg"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className=" text-yellow-600 font-sans">
              Our Services
            </span>
          </h2>
          <p className="text-lg text-gray-800 font-poppins">
            Comprehensive real estate solutions tailored to meet your unique needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300
                hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300
                    hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex justify-center ">{service.icon}</div>
                <h3 className="text-xl font-sans font-semibold text-center text-black">
                  {service.title}
                </h3>
                <p className="text-gray-800 text-center font-poppins">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center font-sans">
          <Link href="/services">
          <button className="group inline-flex items-center justify-center gap-2 px-6 py-3 
            bg-yellow-600 text-white rounded-lg font-semibold transition-all duration-300 
            hover:bg-yellow-700 hover:shadow-lg hover:-translate-y-0.5">
            View More
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;