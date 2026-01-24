import React from 'react';
import { Link } from 'react-router-dom';
// Importamos o logo que você acabou de subir na pasta src
import logo from '../Logotipo-1024x329.png'; 

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-[60] bg-white/90 backdrop-blur-md border-b border-slate-100 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Aqui entra o seu logotipo oficial */}
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Betterfly Media" 
            className="h-10 md:h-12 w-auto object-contain hover:opacity-80 transition-opacity" 
          />
        </Link>

        <div className="hidden md:flex gap-8 font-bold text-[#3156A3]">
          <Link to="/" className="hover:text-[#00A89F] transition-colors text-sm">Inicio</Link>
          <Link to="/sobre" className="hover:text-[#00A89F] transition-colors text-sm">Sobre Nosotros</Link>
          <Link to="/servicios" className="hover:text-[#00A89F] transition-colors text-sm">Servicios</Link>
          <Link to="/contacto" className="bg-[#3156A3] text-white px-5 py-2 rounded-xl hover:bg-[#25417b] transition-all text-sm shadow-md">Contacto</Link>
        </div>
      </div>
    </nav>
  );
};
