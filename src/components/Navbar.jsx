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

  const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Trebolution Experiences', path: '#', hasChevron: true, dropdown: [
      { label: 'India Trebolution Experience', path: '/experience/india' },
      { label: 'Costa Rica Trebolution Experience', path: '/experience/costa-rica' }
    ]},
    { label: 'Conócenos', path: '#' },
    { label: 'Comunidad Trebolera', path: '#' },
    { label: 'Trebolution Privé', path: '#', isButton: true },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b-[1.5px] border-white/80 ${isScrolled ? 'bg-[#05051E]/95 py-3' : 'bg-transparent py-7'}`}>
      <div className="max-w-[1600px] mx-auto px-10 md:px-32">
        <div className="flex items-center">
          {/* Logo - Pushed in with container margin */}
          <Link to="/" className="w-[190px] shrink-0 mr-16">
            <img 
              src="https://trebolutiontravel.com/wp-content/uploads/2025/06/logo-trebolution-blanco@0.5x.png" 
              alt="Trebolution Travel Designer" 
              className="w-full h-auto"
            />
          </Link>

          {/* Desktop Navigation Links - Moved to the left (closer to logo) */}
          <div className="hidden xl:flex items-center gap-1 flex-grow justify-start h-[40px]">
            {navItems.map((item, index) => (
              item.isButton ? (
                <Link 
                  key={item.label}
                  to={item.path}
                  className="ml-6 px-8 py-3 border-[1.5px] border-white rounded-full text-[15px] font-serif font-bold uppercase tracking-[0.1em] text-white hover:bg-white hover:text-[#05051E] transition-all whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item.label} className="group relative flex items-center h-full">
                  <Link 
                    to={item.path} 
                    className={`px-4 text-[15px] font-serif font-bold uppercase tracking-[0.12em] transition-colors flex items-center gap-1 hover:text-[#B59D7C] whitespace-nowrap relative py-2 ${
                      index === 1 
                      ? 'text-white after:content-[""] after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2.5px] after:bg-white' 
                      : 'text-white'
                    }`}
                  >
                    {item.label}
                    {item.hasChevron && <ChevronDown size={14} className="opacity-90 mt-0.5" />}
                  </Link>
                  
                  {item.dropdown && (
                    <div className="absolute top-full left-0 w-[380px] bg-[#FFFCF4] mt-0 p-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-2xl border border-white/20">
                      {item.dropdown.map((sub) => (
                        <Link 
                          key={sub.label}
                          to={sub.path}
                          className="block py-4 text-[15px] font-serif font-bold tracking-widest text-[#B59D7C] hover:text-[#05051E] transition-colors border-b border-[#B59D7C]/10 last:border-0 whitespace-nowrap"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            ))}
            
            {/* Language Selector */}
            <div className="flex items-center gap-4 ml-8">
              <img src="https://flagcdn.com/w20/gb.png" alt="EN" className="w-5 h-4 cursor-pointer opacity-70 hover:opacity-100" />
              <img src="https://flagcdn.com/w20/es.png" alt="ES" className="w-5 h-4 cursor-pointer opacity-100" />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden ml-auto text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-0 bg-[#05051E] z-[60] p-8 flex flex-col gap-6 pt-24 animate-fade-in">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-white">
            <X size={32} />
          </button>
          {navItems.map((item) => (
            <Link 
              key={item.label}
              to={item.path}
              className={`text-[18px] uppercase tracking-[0.2em] font-serif font-bold ${item.isButton ? 'text-white border border-white/40 text-center py-4 rounded-full' : 'text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
