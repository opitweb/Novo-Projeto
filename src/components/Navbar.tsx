import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-[60] bg-white/80 backdrop-blur-md border-b border-slate-100 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Usamos Link em vez de <a> para a página não recarregar */}
        <Link to="/" className="text-xl font-black text-[#1A2B4B]">
          Betterfly <span className="text-[#00A89F]">Media</span>
        </Link>
        
        <div className="hidden md:flex gap-8 font-bold text-[#3156A3]">
          <Link to="/" className="hover:text-[#00A89F] transition-colors text-sm">Inicio</Link>
          <Link to="/sobre" className="hover:text-[#00A89F] transition-colors text-sm">Sobre Nosotros</Link>
          <Link to="/servicios" className="hover:text-[#00A89F] transition-colors text-sm">Servicios</Link>
          <Link to="/contacto" className="bg-[#3156A3] text-white px-5 py-2 rounded-xl hover:bg-[#25417b] transition-all text-sm">Contacto</Link>
        </div>
      </div>
    </nav>
  );
};
