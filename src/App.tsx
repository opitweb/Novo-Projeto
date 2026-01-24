import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importante para a navegação
import { 
  Sparkles, ArrowRight, Award, Search, 
  Layers, Zap, Share2, BarChart3 
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-[60] bg-white/80 backdrop-blur-md border-b border-slate-100 p-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
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

export default function App() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#1A2B4B] relative overflow-x-hidden font-['Poppins']">
      
      {/* CURSOR PERSONALIZADO */}
      <div 
        className={`fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full transition-all duration-150 ease-out border-2 border-[#3156A3]/20
          ${isScrolling ? 'w-6 h-6 bg-[#3156A3]/10' : 'w-20 h-20 bg-[#3156A3]/5'}`}
        style={{ 
          transform: `translate3d(${mousePos.x - (isScrolling ? 12 : 40)}px, ${mousePos.y - (isScrolling ? 12 : 40)}px, 0)`,
          mixBlendMode: 'multiply'
        }}
      />

      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="pt-40 pb-20 px-4 min-h-screen flex items-center bg-white">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 text-[#3156A3] px-5 py-2 rounded-full text-sm font-bold">
                <Sparkles size={16} className="text-[#00A89F]" /> Marketing Médico en Barcelona
              </div>
              <h1 className="text-7xl lg:text-8xl font-black text-[#3156A3] tracking-tighter leading-[0.9]">
                Betterfly <br/><span className="font-elegant-italic text-[#00A89F] text-6xl lg:text-7xl lowercase leading-none">Media</span>
              </h1>
              <p className="text-xl text-slate-500 border-l-4 border-[#00A89F] pl-4 italic">Marketing de alto nivel para especialistas que dominan su mercado.</p>
              <Link to="/contacto" className="inline-flex bg-[#3156A3] text-white px-10 py-5 rounded-2xl font-bold items-center hover:scale-105 transition-all shadow-xl shadow-[#3156A3]/20">
                Análisis Gratuito <ArrowRight className="ml-2" />
              </Link>
            </div>
            
            <div className="hidden lg:block">
               <div className="bg-gradient-to-br from-[#3156A3] to-[#1e3a7a] p-16 rounded-[4rem] text-white shadow-2xl text-center relative overflow-hidden group">
                  <Award size={64} className="mx-auto mb-6 text-[#00A89F]" />
                  <p className="text-8xl font-black mb-2 tracking-tighter">+340%</p>
                  <p className="text-blue-100 text-xl font-medium">Crecimiento en Facturación</p>
               </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO BARCELONA COM BOLINHAS */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-20 leading-[1.1] tracking-tight text-[#1A2B4B]">
              Somos una agencia de <span className="bg-[#3156A3]/10 px-2 font-elegant-italic text-[#3156A3]">desarrollo</span> <br/>
              <span className="bg-[#3156A3]/10 px-2 font-elegant-italic text-[#3156A3]">web y marketing digital</span> en Barcelona
            </h2>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="text-2xl font-bold text-[#1A2B4B] leading-snug">
                <p>En 2010 iniciamos nuestra andadura en el mundo digital, diseñando y desarrollando páginas web desde nuestra oficina de Santiago de Compostela.</p>
              </div>
              <div className="text-lg text-slate-600 space-y-6">
                <p>Poco a poco, nuestro equipo ha ido creciendo, destacando el de <span className="font-bold text-[#3156A3]">marketing digital</span>.</p>
                <p>Actualmente, trabajamos de forma conjunta para ofrecerte un servicio completamente personalizado.</p>
              </div>
            </div>

            <div className="mt-24 flex flex-wrap justify-center gap-3 px-10">
              {Array.from({ length: 48 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-slate-100 transition-colors"
                  style={{ 
                    animation: `fullPulse 4s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`,
                    '--dot-color': i % 7 === 0 ? '#00A89F' : i % 5 === 0 ? '#FF4D00' : '#3156A3'
                  } as any}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#3156A3] text-white pt-32 pb-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-[18vw] font-black leading-none tracking-tighter opacity-10 select-none mb-10">betterfly</h1>
          <p className="pt-10 border-t border-white/5 text-[9px] uppercase tracking-[0.3em] font-bold text-white/40">
            © Betterfly Media 2026 — Barcelona & Santiago
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fullPulse {
          0%, 100% { background-color: #f1f5f9; transform: scale(1); }
          50% { background-color: var(--dot-color); transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}
