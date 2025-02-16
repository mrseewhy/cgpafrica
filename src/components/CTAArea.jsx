import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link'

const CTAArea = ({heading, button}) => {
  return (
    <div className="w-full bg-yellow-600 py-12">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight font-sans w-4/6 mx-auto mb-8">
            {heading}
          </h2>

         
          <Link href='/contact' className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-yellow-600 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg font-sans">
            <span className="relative z-10 font-sans">{button}</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTAArea;