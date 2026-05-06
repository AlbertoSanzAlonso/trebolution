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
    { label: 'INICIO', path: '/' },
    { label: 'TREBOLUTION EXPERIENCES', path: '#', hasChevron: true, dropdown: [
      { label: 'India Trebolution Experience', path: '/experience/india' },
      { label: 'Costa Rica Trebolution Experience', path: '/experience/costa-rica' }
    ]},
    { label: 'CONÓCENOS', path: '#' },
    { label: 'COMUNIDAD TREBOLERA', path: '#' },
    { label: 'TREBOLUTION PRIVÉ', path: '#', isButton: true },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#05051E]/95 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1700px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center border-b border-white/20 pb-6">
          {/* Logo */}
          <Link to="/" className="w-[180px]">
            <img 
              src="https://trebolutiontravel.com/wp-content/uploads/2025/06/logo-trebolution-blanco@0.5x.png" 
              alt="Trebolution Travel Designer" 
              className="w-full h-auto"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-10">
            {navItems.map((item) => (
              item.isButton ? (
                <Link 
                  key={item.label}
                  to={item.path}
                  className="px-6 py-2 border border-white/40 rounded-full text-[11px] font-sans font-medium tracking-[0.15em] text-white hover:bg-white hover:text-[#05051E] transition-all"
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item.label} className="group relative">
                  <Link 
                    to={item.path} 
                    className={`text-[11px] font-sans font-medium tracking-[0.15em] transition-colors flex items-center gap-1 hover:text-[#B59D7C] pb-2 -mb-[26px] relative z-10 ${
                      (item.label === 'TREBOLUTION EXPERIENCES' || location.pathname.includes('/experience/')) 
                      ? 'text-white after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white' 
                      : 'text-white'
                    }`}
                  >
                    {item.label}
                    {item.hasChevron && <ChevronDown size={12} className="opacity-80" />}
                  </Link>
                  
                  {item.dropdown && (
                    <div className="absolute top-full left-0 w-[300px] bg-[#05051E] mt-8 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-2xl border border-white/10">
                      {item.dropdown.map((sub) => (
                        <Link 
                          key={sub.label}
                          to={sub.path}
                          className="block py-3 text-[10px] uppercase tracking-widest text-white hover:text-[#B59D7C] transition-colors border-b border-white/5 last:border-0"
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
            <div className="flex items-center gap-3 ml-4">
              <img src="https://flagcdn.com/w20/gb.png" alt="EN" className="w-4 h-3 cursor-pointer opacity-70 hover:opacity-100" />
              <img src="https://flagcdn.com/w20/es.png" alt="ES" className="w-4 h-3 cursor-pointer opacity-100" />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
              className={`text-[13px] uppercase tracking-widest font-medium ${item.isButton ? 'text-white border border-white/40 text-center py-4 rounded-full' : 'text-white'}`}
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
