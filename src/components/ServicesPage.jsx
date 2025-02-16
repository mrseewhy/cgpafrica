// components/ServicesPage.js

// import { Link } from "lucide-react";
import Link from 'next/link';

const ServicesPage = () => {
    const services = [
      {
        headline: "Low-Cost Buildings",
        description:
          "Discover the affordability without compromise with our Low-Cost Buildings service. At Capricorn Global Properties, we believe that everyone deserves a place to call home. Our low-cost building solutions are designed to provide budget-friendly housing options without sacrificing quality. Whether you’re a first-time homebuyer or seeking an investment opportunity, our low-cost buildings are crafted with the same attention to detail and commitment to excellence that defines all our projects. Your dream home is within reach, and we are here to make it a reality.",
        image: "/images/Services_1.jpg",
      },
      {
        headline: "Luxury Apartments",
        description:
          "Indulge in the epitome of refined living with our Luxury Apartments service. Capricorn Global Properties presents a collection of meticulously designed and elegantly appointed luxury apartments that redefine modern living. Our luxury apartments are more than residences; they are expressions of sophistication and lifestyle. From breathtaking views to premium amenities, each space is crafted to elevate your living experience. Immerse yourself in the luxury you deserve – choose Capricorn Global Properties for a residence that reflects your discerning taste and aspirations.",
        image: "/images/Services_2.jpg",
      },
      {
        headline: "Shortlet",
        description:
          "Discover the convenience and comfort of shortlet living with our tailored service designed to meet your needs. Whether you're traveling for business, relocating, or simply seeking a temporary home, our shortlet offerings provide fully furnished, stylish spaces equipped with all the essentials for a seamless stay. Enjoy the flexibility of short-term leases, personalized amenities, and prime locations, all at competitive rates. Perfect for those who value comfort, privacy, and hassle-free living, our shortlet service ensures a home-away-from-home experience that adapts to your lifestyle. We offer premium shortets in Africa’s richest square mile, Sandton",
        image: "/images/shortlet.jpeg",
        link: "/properties#shortlet"
      },
      {
        headline: "Building Construction",
        description:
          "Capricorn Global Properties offers a comprehensive Building Construction service, dedicated to bringing your vision to life. Our construction expertise encompasses residential and commercial projects, ensuring that every structure is a testament to quality and innovation. From conceptualization to completion, we are committed to delivering projects that stand the test of time. Whether it’s a new home, an office space, or a community development, our skilled team ensures that each construction project aligns with our commitment to excellence and client satisfaction.",
        image: "/images/Services_4.jpg",
      },
    ];
  
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center gap-y-8 md:gap-x-8`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={service.image}
                  alt={service.headline}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
  
              {/* Text */}
              <div className="w-full md:w-1/2 text-gray-800">
                <h3 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-4 font-sans">
                  {service.headline}
                </h3>
                <p className="text-base md:text-lg leading-relaxed font-poppins mb-4">{service.description}</p>
                {service.link && (<Link href={service.link} className="bg-yellow-600 text-white font-medium px-6 py-2 rounded-lg border border-yellow-200"> view </Link>)}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ServicesPage;
  