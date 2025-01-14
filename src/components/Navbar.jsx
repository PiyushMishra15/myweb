import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu} className="focus:outline-none md:hidden">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <nav className={`fixed inset-0 bg-black bg-opacity-75 backdrop-blur-md flex flex-col items-center justify-center space-y-4 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex-row md:space-y-0 md:space-x-4 md:bg-transparent md:backdrop-blur-none`}>
        <Link href="/" className="text-white text-2xl md:text-base hover:underline" onClick={toggleMenu}>Home</Link>
        <Link href="/AboutUs" className="text-white text-2xl md:text-base hover:underline" onClick={toggleMenu}>About Us</Link>
        <Link href="/Team" className="text-white text-2xl md:text-base hover:underline" onClick={toggleMenu}>Team</Link>
        <Link href="/ContactUs" className="text-white text-2xl md:text-base hover:underline" onClick={toggleMenu}>Contact Us</Link>
      </nav>
    </div>
  );
};

export default Navbar;