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
    {
      label: 'Trebolution Experiences', path: '#', hasChevron: true, dropdown: [
        { label: 'India Trebolution Experience', path: '/experience/india' },
        { label: 'Costa Rica Trebolution Experience', path: '/experience/costa-rica' },
        { label: 'PROYECTO CLON (PRUEBA)', path: '/experience/test-landing' }
      ]
    },
    { label: 'Conócenos', path: '#' },
    { label: 'Comunidad Trebolera', path: '#' },
    { label: 'Trebolution Privé', path: '#', isButton: true },
  ];

  return (
    <>
      {/* Test Mode Banner - Now absolute so it stays at the top and disappears on scroll */}
      <div className="bg-brand-accent text-brand-primary py-1 text-center text-[10px] font-serif font-bold uppercase tracking-[0.3em] absolute top-0 w-full z-60">
        MODO PRUEBA: Clonando Proyecto para Nueva Landing
      </div>

      <nav className={`fixed w-full z-50 transition-all duration-500 border-b-[1.5px] border-white/80 ${isScrolled ? 'bg-brand-primary/95 py-3 top-0' : 'bg-transparent py-7 top-6'}`}>
        <div className="max-w-[1600px] mx-auto px-10 md:px-12 2xl:px-32">
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="w-[170px] xl:w-[190px] shrink-0 ml-4 xl:ml-8 2xl:ml-12 mr-8 xl:mr-10 2xl:mr-16">
              <img
                src="https://trebolutiontravel.com/wp-content/uploads/2025/06/logo-trebolution-blanco@0.5x.png"
                alt="Trebolution Travel Designer"
                className="w-full h-auto"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center gap-1 2xl:gap-2 grow justify-start h-[40px]">
              {navItems.map((item, index) => (
                item.isButton ? (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="ml-4 2xl:ml-6 px-6 2xl:px-8 py-3 border-[1.5px] border-white rounded-full text-[13px] 2xl:text-[15px] font-serif font-bold uppercase tracking-widest text-white hover:bg-white hover:text-brand-primary transition-all whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div key={item.label} className="group relative flex items-center h-full">
                    <Link
                      to={item.path}
                      className={`px-2 2xl:px-4 text-[13px] 2xl:text-[15px] font-serif font-bold uppercase tracking-[0.12em] transition-colors flex items-center gap-1 hover:text-brand-accent whitespace-nowrap relative py-2 ${index === 1
                        ? 'text-white after:content-[""] after:absolute after:bottom-0 after:left-2 2xl:after:left-4 after:right-2 2xl:after:right-4 after:h-[2.5px] after:bg-white'
                        : 'text-white'
                        }`}
                    >
                      {item.label}
                      {item.hasChevron && <ChevronDown size={14} className="opacity-90 mt-0.5" />}
                    </Link>

                    {item.dropdown && (
                      <div className="absolute top-full left-0 w-[400px] bg-brand-secondary mt-0 p-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-2xl border border-white/20">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.path}
                            className="block py-4 text-[14px] font-serif font-bold tracking-widest text-brand-accent hover:text-brand-primary transition-colors border-b border-brand-accent/10 last:border-0 whitespace-nowrap"
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
              <div className="flex items-center gap-4 ml-8 shrink-0">
                <img src="/assets/images/en.svg" alt="EN" className="w-[24px] h-auto cursor-pointer opacity-70 hover:opacity-100" />
                <img src="/assets/images/es.svg" alt="ES" className="w-[24px] h-auto cursor-pointer opacity-100" />
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
      </nav>
    </>
  );
};

export default Navbar;
