import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// Importação da logo
import logoBetterfly from '../Logotipo-1024x329.png'; 

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Efeito 1: Controlar o scroll para mudar o fundo da Navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efeito 2: Fechar o menu mobile sempre que o usuário mudar de página
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      scrolled || isOpen 
        ? 'bg-[#F5F5F5]/90 backdrop-blur-md shadow-sm py-4' 
        : 'bg-transparent py-6'
    }`}>
      {/* Container Principal (Logo + Menu Desktop + Botão Mobile) */}
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        <Link to="/" className="flex items-center group">
          <img 
            src={logoBetterfly} 
            alt="Betterfly Media" 
            className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105" 
          />
        </Link>

        {/* Menu Desktop: Fica oculto no mobile (hidden) e visível em telas médias (md:flex) */}
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

        {/* Botão Hambúrguer: Visível apenas no mobile (md:hidden) */}
        <button className="md:hidden text-[#0A1738]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* BLOCO DO MENU MOBILE: 
          Ele só aparece se 'isOpen' for true. 
          Note que ele está fora da 'div' do desktop para não herdar o 'justify-between'
      */}
      {isOpen && (
        <div className="md:hidden bg-[#F5F5F5] border-t border-gray-100 absolute w-full left-0 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-8 gap-6">
            <Link to="/" className="text-[#0A1738] text-lg font-bold uppercase tracking-widest">Inicio</Link>
            <Link to="/sobre" className="text-[#0A1738] text-lg font-bold uppercase tracking-widest">Sobre Nosotros</Link>
            <Link to="/servicios" className="text-[#0A1738] text-lg font-bold uppercase tracking-widest">Servicios</Link>
            <Link
              to="/contacto"
              className="bg-[#0A1738] text-white px-8 py-4 rounded-full text-center text-lg font-bold uppercase tracking-widest"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
