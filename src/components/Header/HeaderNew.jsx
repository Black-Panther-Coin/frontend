import React, { useState } from 'react';
import { WebLogo } from '../../assets';
import { FiMenu, FiX } from 'react-icons/fi';

const HeaderNew = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState("Home");

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='w-full '>
            <nav className="w-full flex justify-between px-6 md:px-10 items-center py-4">
                <div className="flex items-center space-x-2">
                    <img src={WebLogo} alt="Black Panther Token" className="h-12" />
                    <div>
                        <p className="text-white font-bold">Black Panther</p>
                        <p className='text-[#7A7A7A]'>Token</p>
                    </div>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                    {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6 text-white font-bold">
                    {['Home', 'About', 'DAO', 'Lottery', 'Game'].map((item) => (
                        <a
                            key={item}
                            href={item=="Home" ? "/": `/${item.toLowerCase()}`}
                            className={`hover:text-white ${activeNav === item ? 'border-b-2 border-white' : ''}`}
                            onClick={() => setActiveNav(item)}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <a href="/presale" className="hidden md:block bg-[#571C86] hover:bg-purple-800 px-4 py-2 rounded-[40px] shadow-2xl cursor-pointer text-white font-bold">
                    Buy $BPNTHR
                </a>
            </nav>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 py-4 ">
                    {['Home', 'About', 'DAO', 'Lottery', 'Game'].map((item) => (
                        <a
                            key={item}
                            href={item=="Home" ? "/": `/${item.toLowerCase()}`}
                            className={`text-white font-bold hover:text-white ${activeNav === item ? 'border-b-2 border-white' : ''}`}
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
