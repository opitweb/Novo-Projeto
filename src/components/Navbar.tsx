import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// CORREÇÃO DO CAMINHO: Recuar uma pasta para encontrar a logo na raiz de src
import logoBetterfly from '../Logotipo-1024x329.png'; 

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
  scrolled 
    ? 'bg-[#F5F5F5]/90 backdrop-blur-md shadow-sm py-6' 
    : 'bg-transparent py-6'
}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGOTIPO COM CAMINHO CORRIGIDO */}
        <Link to="/" className="flex items-center group">
          <img 
            src={logoBetterfly} 
            alt="Betterfly Media" 
            className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105" 
          />
        </Link>

        {/* MENU COM CORES DE ALTO CONTRASTE (#0A1738) */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-[#0DBAAC] ${location.pathname === '/' ? 'text-[#0DBAAC]' : 'text-[#0A1738]'}`}>Inicio</Link>
          <Link to="/sobre" className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-[#0DBAAC] ${location.pathname === '/sobre' ? 'text-[#0DBAAC]' : 'text-[#0A1738]'}`}>Sobre Nosotros</Link>
          <Link to="/servicios" className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-[#0DBAAC] ${location.pathname === '/servicios' ? 'text-[#0DBAAC]' : 'text-[#0A1738]'}`}>Servicios</Link>
          
          <Link
            to="/contacto"
            className="bg-[#0A1738] text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#0DBAAC] transition-all shadow-lg shadow-[#0A1738]/20"
          >
            Contacto
          </Link>
        </div>

        <button className="md:hidden text-[#0A1738]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};
