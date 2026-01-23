import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-[#3156A3] font-bold border-b-2 border-[#00A89F] pb-1 transition-all">Início</a>
            <a href="#servicios" className="text-gray-600 hover:text-[#3156A3] font-semibold transition-colors">Servicios</a>
            <a href="#" className="text-gray-600 hover:text-[#3156A3] font-semibold transition-colors">Resultados</a>
            <a href="#contacto" className="text-gray-600 hover:text-[#3156A3] font-semibold transition-colors">Contacto</a>
            
            <button className="bg-[#3156A3] text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#25417b] transition-all shadow-md">
              Diagnóstico Gratis
            </button>
            
            <div className="flex items-center space-x-2 border-l pl-6">
              <span className="w-5 h-4 bg-yellow-400 rounded-sm shadow-sm opacity-100" title="ES"></span>
              <span className="w-5 h-4 bg-blue-800 rounded-sm shadow-sm opacity-40 hover:opacity-100 cursor-pointer" title="UK"></span>
              <span className="w-5 h-4 bg-green-600 rounded-sm shadow-sm opacity-40 hover:opacity-100 cursor-pointer" title="BR"></span>
            </div>
          </div>
          
          <button className="md:hidden p-2 text-gray-600 bg-slate-50 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
