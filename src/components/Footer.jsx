import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" font-sans text-sm text-black py-4 border-t border-yellow-600/10">
      <div className="max-w-7xl mx-auto text-center flex flex-col sm:flex-row items-center justify-between px-6">
        <p>&copy; {currentYear} <span className='text-yellow-600 font-bold font-sans'><Link href='/'>Capricorn Global Properties.</Link></span> All rights reserved!</p>
        <p className="mt-2 sm:mt-0">Website crafted by <span className="font-semibold text-yellow-600"><Link href='https://bigyarddigital.com/' target='_blank'>Bigyard Digital</Link></span>.</p>
      </div>
    </footer>
  );
};

export default Footer;
