'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Properties', href: '/properties' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (isOpen && !e.target.closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isOpen]);

  const handleMenuItemClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-yellow-700/10 transition-shadow duration-300 ${
        hasShadow ? 'shadow-lg' : 'shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <div
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent 
              transition-all duration-300 hover:from-teal-600 hover:to-blue-600"
            >
              <Link href="/">
                <img className="h-16" src="/images/logo.png" />
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleMenuItemClick}
                className="relative px-3 py-2 font-bold text-black transition-all duration-300 
                  hover:text-yellow-600 group font-sans"
              >
                <span className="relative z-10">{item.name}</span>
                {/* Hover background effect */}
                <span className="absolute inset-0 bg-yellow-50 rounded-lg transform scale-0 transition-transform 
                  duration-300 origin-center group-hover:scale-100"></span>
                {/* Bottom border slide effect */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-600 transform scale-x-0 
                  transition-transform duration-300 origin-center group-hover:scale-x-100"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center ">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="bg-black inline-flex items-center justify-center p-2 rounded-md text-gray-200
                hover:text-gray-100 hover:bg-gray-700 transition duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full transform transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-full invisible h-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleMenuItemClick}
              className="block relative px-3 py-2 text-base font-bold text-black font-sans transition-all 
                duration-300 hover:text-yellow-600 group rounded-md"
            >
              <span className="relative z-10">{item.name}</span>
              {/* Hover background effect */}
              <span className="absolute inset-0 bg-yellow-50 rounded-md transform scale-x-0 
                transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
              {/* Left border slide effect */}
              <span className="absolute left-0 top-0 h-full w-1 bg-yellow-600 transform scale-y-0 
                transition-transform duration-300 origin-top group-hover:scale-y-100"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
