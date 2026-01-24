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
      scrolled ? 'bg-[#F5F5F5]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGOTIPO RECUPERADO */}
        <Link to="/" className="flex items-center group transition-transform hover:scale-105">
          <img 
            src="/Logotipo-1024x329.png" 
            alt="Betterfly Media Logo" 
            className="h-12 md:h-14 w-auto object-contain" // Tamanho otimizado para visibilidade
          />
        </Link>

        {/* MENU DESKTOP - Cores de Alto Contraste */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold uppercase tracking-[0.15em] transition-all hover:text-[#0DBAAC] ${
                location.pathname === link.path ? 'text-[#0DBAAC]' : 'text-[#0A1738]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contacto"
            className="bg-[#0A1738] text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#0DBAAC] transition-all shadow-lg shadow-[#0A1738]/20 hover:-translate-y-0.5"
          >
            Contacto
          </Link>
        </div>

        {/* BOTÃO MOBILE */}
        <button className="md:hidden text-[#0A1738]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE - Fundo Off-White */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F5F5F5] border-t border-slate-200 p-8 flex flex-col gap-8 md:hidden shadow-2xl animate-reveal">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-xl font-bold uppercase tracking-tighter ${
                location.pathname === link.path ? 'text-[#0DBAAC]' : 'text-[#0A1738]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contacto"
            onClick={() => setIsOpen(false)}
            className="bg-[#0DBAAC] text-white p-5 rounded-2xl text-center font-bold uppercase tracking-widest text-sm"
          >
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
};
