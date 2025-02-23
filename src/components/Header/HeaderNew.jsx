import React, { useState, useEffect } from 'react';
import { WebLogo } from '../../assets';
import { FiMenu, FiX } from 'react-icons/fi';

const HeaderNew = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

  useEffect(() => {
    const currentPath = window.location.pathname;
    const activeLink = currentPath === '/' ? 'Home' : currentPath.replace('/', '').charAt(0).toUpperCase() + currentPath.slice(2);
    setActiveNav(activeLink);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='w-full fixed top-0 z-50 bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-lg'>
      <nav className="w-full flex justify-between px-6 md:px-10 items-center py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={WebLogo} alt="Black Panther Token" className="h-12" />
          <div>
            <p className="text-white font-bold">Black Panther</p>
            <p className='text-[#7A7A7A]'>Token</p>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FiX size={30} className="text-white" /> : <FiMenu size={30} className="text-white" />}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-white font-medium">
          {['Home', 'About', 'DAO', 'Lottery', 'Game'].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`hover:text-purple-400 transition duration-300 ${
                activeNav === item ? 'border-b-2 border-purple-500' : ''
              }`}
              onClick={() => setActiveNav(item)}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Buy Button */}
        <a
          href="/presale"
          className="hidden md:block bg-[#571C86] hover:bg-purple-800 px-4 py-2 rounded-full shadow-lg cursor-pointer text-white font-bold transition-transform transform hover:scale-105"
        >
          Buy $BPNTHR
        </a>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex flex-col items-center space-y-4 pt-24 z-40 transition-all duration-500">
          {['Home', 'About', 'DAO', 'Lottery', 'Game'].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`text-white font-bold text-lg hover:text-purple-400 transition ${
                activeNav === item ? 'underline underline-offset-4 decoration-purple-500' : ''
              }`}
              onClick={() => {
                setActiveNav(item);
                setMenuOpen(false);
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderNew;
