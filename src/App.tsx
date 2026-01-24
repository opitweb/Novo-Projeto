import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Award } from 'lucide-react';

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
    <div className="min-h-screen bg-white text-[#0A1738] relative overflow-x-hidden">
      
      {/* CURSOR PERSONALIZADO - Cores atualizadas para a nova paleta */}
      <div 
        className={`fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full transition-all duration-150 ease-out border border-[#0A1738]/20
          ${isScrolling ? 'w-6 h-6 bg-[#0A1738]/10' : 'w-16 h-16 bg-[#0DBAAC]/5'}`}
        style={{ 
          transform: `translate3d(${mousePos.x - (isScrolling ? 12 : 32)}px, ${mousePos.y - (isScrolling ? 12 : 32)}px, 0)`,
        }}
      />

      <main>
        {/* HERO SECTION - Aplicando ratio 7.24:1 aprovado */}
        <section className="pt-48 pb-24 px-4 min-h-[90vh] flex items-center bg-white">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 animate-reveal">
              <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-100 text-[#0A1738] px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
                <Sparkles size={14} className="text-[#0DBAAC]" /> Marketing Médico en Barcelona
              </div>
              
              <h1 className="text-7xl lg:text-8xl font-bold text-[#0A1738] tracking-tighter leading-[0.85]">
                Betterfly <br/>
                <span className="font-light italic text-[#0DBAAC] text-6xl lg:text-7xl lowercase">media</span>
              </h1>
              
              <p className="text-xl text-slate-500 border-l-2 border-[#0DBAAC] pl-6 max-w-md leading-relaxed">
                Marketing de alto nivel para especialistas que <span className="text-[#0A1738] font-medium">dominan su mercado</span>.
              </p>

              <Link to="/contacto" className="inline-flex bg-[#0DBAAC] text-white px-10 py-5 rounded-2xl font-bold items-center hover:bg-[#0a8d82] transition-all shadow-xl shadow-[#0DBAAC]/20 hover:-translate-y-1">
                Análisis Gratuito <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            
            <div className="hidden lg:block animate-reveal delay-200">
               <div className="bg-[#0A1738] p-20 rounded-[4rem] text-white shadow-2xl text-center relative overflow-hidden">
                  <Award size={48} className="mx-auto mb-8 text-[#0DBAAC]" />
                  <p className="text-8xl font-bold mb-2 tracking-tighter">+340%</p>
                  <p className="text-[#0DBAAC] text-lg font-medium opacity-90 uppercase tracking-widest">Crecimiento en Facturación</p>
               </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO BARCELONA - Cores harmônicas e nítidas */}
        <section className="py-32 bg-white relative overflow-hidden border-t border-slate-50">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-20 leading-[1.1] tracking-tight text-[#0A1738] animate-reveal">
              Somos una agencia de <span className="text-[#0DBAAC]">desarrollo web</span> <br/>
              y <span className="text-[#0DBAAC]">marketing digital</span> en Barcelona
            </h2>
            
            <div className="grid md:grid-cols-2 gap-20 items-start animate-reveal delay-200">
              <div className="text-2xl font-semibold text-[#0A1738] leading-snug">
                <p>En 2010 iniciamos nuestra andadura en el mundo digital, <span className="text-[#0DBAAC]">diseñando y desarrollando</span> páginas web desde nuestra oficina.</p>
              </div>
              <div className="text-lg text-slate-500 space-y-6 leading-relaxed">
                <p>Poco a poco, nuestro equipo ha ido creciendo, destacando el de marketing digital.</p>
                <p>Actualmente, trabajamos de forma conjunta para ofrecerte un servicio <span className="italic">completamente personalizado</span>.</p>
              </div>
            </div>

            {/* EFEITO DE BOLINHAS - Cores da marca ajustadas */}
            <div className="mt-24 flex flex-wrap justify-center gap-4 opacity-40">
              {Array.from({ length: 42 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 rounded-full bg-slate-100"
                  style={{ 
                    animation: `fullPulse 4s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`,
                    '--dot-color': i % 3 === 0 ? '#0DBAAC' : '#0A1738'
                  } as any}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <style>{`
        @keyframes fullPulse {
          0%, 100% { background-color: #f8fafc; transform: scale(1); }
          50% { background-color: var(--dot-color); transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}
