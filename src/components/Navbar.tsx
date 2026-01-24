import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre Nosotros', path: '/sobre' },
    { name: 'Servicios', path: '/servicios' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${
      scrolled ? 'bg-[#F5F5F5]/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGOTIPO */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/Logotipo-1024x329.png" alt="Betterfly Media" className="h-10 w-auto" />
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-[#0DBAAC] ${
                location.pathname === link.path ? 'text-[#0DBAAC]' : 'text-[#0A1738]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contacto"
            className="bg-[#0A1738] text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#0DBAAC] transition-all shadow-lg shadow-[#0A1738]/10 active:scale-95"
          >
            Contacto
          </Link>
        </div>

        {/* BOTÃO MOBILE */}
        <button className="md:hidden text-[#0A1738]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F5F5F5] border-t border-slate-100 p-6 flex flex-col gap-6 md:hidden shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-[#0A1738] text-lg font-bold uppercase tracking-tighter"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contacto"
            onClick={() => setIsOpen(false)}
            className="bg-[#0DBAAC] text-white p-4 rounded-2xl text-center font-bold uppercase tracking-widest"
          >
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
};
