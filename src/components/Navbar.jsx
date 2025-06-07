import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Home', 'Portfolio', 'Services', 'About', 'Contact'];

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 tracking-wider">
          <span className="text-red-600">Pixi</span>Sphere
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-700 hover:text-pink-600 transition duration-300 font-medium"
            >
              {link}
            </a>
          ))}
          <button className="ml-4 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
            Book Now
          </button>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 transition-all">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-gray-700 hover:text-pink-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <button
            onClick={() => setIsOpen(false)}
            className="w-full bg-pink-600 text-white py-2 rounded-full hover:bg-pink-700 transition"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
