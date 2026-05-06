import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center leading-none group">
          <span className={`text-2xl md:text-3xl font-serif font-bold tracking-tight ${isScrolled ? 'text-[#0A192F]' : 'text-white'}`}>
            Trebolution
          </span>
          <span className={`text-[7px] md:text-[9px] font-medium tracking-[0.3em] uppercase mt-1 ${isScrolled ? 'text-brand-accent' : 'text-white/80'}`}>
            Travel Designer
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-12">
          <Link to="/" className={`nav-link ${isScrolled ? 'text-[#0A192F]' : 'text-white'}`}>Inicio</Link>
          <div className="flex items-center gap-1 group cursor-pointer border-b border-transparent hover:border-brand-accent transition-all pb-1">
            <span className={`nav-link ${isScrolled ? 'text-[#0A192F]' : 'text-white'}`}>Trebolution Experiences</span>
            <ChevronDown size={14} className={isScrolled ? 'text-[#0A192F]' : 'text-white'} />
          </div>
          <Link to="/conocenos" className={`nav-link ${isScrolled ? 'text-[#0A192F]' : 'text-white'}`}>Conócenos</Link>
          <Link to="/comunidad" className={`nav-link ${isScrolled ? 'text-[#0A192F]' : 'text-white'}`}>Comunidad Trebolera</Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 md:gap-8">
          <button className={`nav-button hidden md:block ${isScrolled ? 'border-[#0A192F] text-[#0A192F] hover:bg-[#0A192F] hover:text-white' : 'border-white text-white hover:bg-white hover:text-[#0A192F]'}`}>
            Trebolution Privé
          </button>
          
          <div className="flex items-center gap-3">
            <img src="https://flagcdn.com/w20/gb.png" alt="English" className="w-5 h-3.5 object-cover rounded-sm cursor-pointer opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://flagcdn.com/w20/es.png" alt="Español" className="w-5 h-3.5 object-cover rounded-sm cursor-pointer opacity-100" />
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`xl:hidden ${isScrolled ? 'text-[#0A192F]' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-8 px-6 flex flex-col gap-6 animate-fade-in text-brand-primary">
          <Link to="/" className="nav-link text-lg text-[#0A192F]" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
          <div className="nav-link text-lg text-[#0A192F]">Trebolution Experiences</div>
          <Link to="/conocenos" className="nav-link text-lg text-[#0A192F]" onClick={() => setIsMenuOpen(false)}>Conócenos</Link>
          <Link to="/comunidad" className="nav-link text-lg text-[#0A192F]" onClick={() => setIsMenuOpen(false)}>Comunidad Trebolera</Link>
          <button className="nav-button border-[#0A192F] text-[#0A192F] w-full py-4 text-sm mt-4">
            Trebolution Privé
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
