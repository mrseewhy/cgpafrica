import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link'

const CTASection = () => {
  return (
    <div className="w-full bg-white py-12">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-yellow-600 rounded-2xl">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight font-sans">
            Own the Future:
            <span className="block mt-2 text-yellow-100">Your Dream Home Awaits</span>
          </h2>

          <p className="text-lg text-white leading-relaxed w-2/3 mx-auto font-poppins">
            Capricorn Global Properties presents an opportunity to own a piece of tomorrow. 
            Are you ready for a new chapter in your life? Find your dream home with us today and shape your future.
          </p>
          <Link href='/contact' className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-yellow-600 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg font-sans">
            <span className="relative z-10">Take Your First Step</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTASection;