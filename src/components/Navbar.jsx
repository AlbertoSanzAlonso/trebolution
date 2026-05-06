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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#05051E]/95 py-4 border-b border-white/10' : 'bg-transparent py-6 border-b border-white/10'}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="w-[180px]">
          <img 
            src="https://trebolutiontravel.com/wp-content/uploads/2025/06/logo-trebolution-blanco@0.5x.png" 
            alt="Trebolution Travel Designer" 
            className="w-full h-auto"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-2">
          {navItems.map((item) => (
            item.isButton ? (
              <Link 
                key={item.label}
                to={item.path}
                className="ml-4 px-6 py-2 border border-white/60 rounded-full text-[12px] font-sans font-medium uppercase tracking-[0.1em] text-white hover:bg-white hover:text-[#05051E] transition-all"
              >
                {item.label}
              </Link>
            ) : (
              <div key={item.label} className="group relative">
                <Link 
                  to={item.path} 
                  className={`px-4 py-2 text-[12px] font-sans font-medium uppercase tracking-[0.15em] transition-colors flex items-center gap-1 hover:text-[#B59D7C] ${
                    (item.label === 'Trebolution Experiences' || location.pathname.includes('/experience/')) 
                    ? 'text-white border-b-2 border-[#B59D7C]' 
                    : 'text-white'
                  }`}
                >
                  {item.label}
                  {item.hasChevron && <ChevronDown size={14} className="text-white" />}
                </Link>
                
                {item.dropdown && (
                  <div className="absolute top-full left-0 w-[280px] bg-[#05051E] mt-4 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-xl border border-white/10">
                    {item.dropdown.map((sub) => (
                      <Link 
                        key={sub.label}
                        to={sub.path}
                        className="block py-3 text-[11px] uppercase tracking-wider text-white hover:text-[#B59D7C] transition-colors border-b border-white/5 last:border-0"
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
          <div className="flex items-center gap-3 ml-6">
            <img src="https://flagcdn.com/w20/gb.png" alt="EN" className="w-4 h-3 cursor-pointer opacity-70 hover:opacity-100" />
            <img src="https://flagcdn.com/w20/es.png" alt="ES" className="w-4 h-3 cursor-pointer opacity-100" />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
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
              className={`text-lg uppercase tracking-widest font-medium ${item.isButton ? 'text-white border border-white text-center py-4 rounded-full' : 'text-white'}`}
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
