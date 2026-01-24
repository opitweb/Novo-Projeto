import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Award } from 'lucide-react';

export default function App() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#0A1738] relative overflow-hidden font-['Poppins']">
      
      {/* EFEITO PARALLAX DE LINHAS (SUAVE) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div 
          className="absolute inset-0 w-full h-[200%]"
          style={{
            backgroundImage: `linear-gradient(to right, #0A1738 1px, transparent 1px)`,
            backgroundSize: '80px 100%',
            transform: `translateY(${offset * -0.1}px)`, 
          }}
        />
      </div>

      <main className="relative z-10">
        {/* HERO SECTION - CORRIGIDA: Aumentado pt-48 para pt-64 para descer o conteúdo */}
        <section className="pt-64 pb-24 px-6 min-h-screen flex items-start lg:items-center">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-12 animate-reveal">
              {/* Badge com mais destaque e respiro superior */}
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-slate-200 text-[#0A1738] px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                <Sparkles size={14} className="text-[#0DBAAC]" /> Marketing Médico en Barcelona
              </div>
              
              <div className="space-y-4">
                <h1 className="text-7xl lg:text-9xl font-bold text-[#0A1738] tracking-tighter leading-[0.8] transition-all">
                  Betterfly <br/>
                  <span className="font-light italic text-[#0DBAAC] text-6xl lg:text-8xl lowercase">media</span>
                </h1>
              </div>
              
              <p className="text-xl text-slate-500 border-l-2 border-[#0DBAAC] pl-6 max-w-md leading-relaxed">
                Marketing de alto nivel para especialistas que <span className="text-[#0A1738] font-medium">dominan su mercado</span>.
              </p>

              <Link 
                to="/contacto" 
                className="inline-flex bg-[#0DBAAC] text-white px-10 py-5 rounded-2xl font-bold items-center hover:bg-[#0a8d82] transition-all shadow-xl shadow-[#0DBAAC]/20 hover:-translate-y-1"
              >
                Análisis Gratuito <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            
            {/* CARD COM EFEITO FLUTUANTE - Ajustado para sincronia com o fundo */}
            <div className="hidden lg:block animate-reveal delay-200" style={{ transform: `translateY(${offset * 0.05}px)` }}>
               <div className="bg-[#0A1738] p-20 rounded-[4rem] text-white shadow-2xl text-center relative overflow-hidden border-8 border-white/50 backdrop-blur-sm">
                  <Award size={48} className="mx-auto mb-8 text-[#0DBAAC]" />
                  <p className="text-8xl font-bold mb-2 tracking-tighter">+340%</p>
                  <p className="text-[#0DBAAC] text-lg font-medium opacity-90 uppercase tracking-widest">Crecimiento en Facturación</p>
                  
                  {/* Detalhe visual interno */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0DBAAC]/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
               </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO BARCELONA */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-20 leading-[1.1] tracking-tight text-[#0A1738] animate-reveal">
              Somos una agencia de <span className="text-[#0DBAAC]">desarrollo web</span> <br/>
              y <span className="text-[#0DBAAC]">marketing digital</span> en Barcelona
            </h2>
            
            <div className="grid md:grid-cols-2 gap-20 items-start animate-reveal delay-200">
              <div className="text-2xl font-semibold text-[#0A1738] leading-snug">
                <p>En 2010 iniciamos nuestra andadura, <span className="text-[#0DBAAC]">diseñando e innovando</span> desde nuestra oficina de Barcelona.</p>
              </div>
              <div className="text-lg text-slate-500 space-y-6 leading-relaxed">
                <p>Nuestra metodología combina la estética médica con el rigor técnico necesario para convertir visitantes en pacientes.</p>
                <p>Actualmente, trabajamos con clínicas que buscan dar el salto al siguiente nivel de facturación.</p>
              </div>
            </div>

            {/* EFEITO DE BOLINHAS EM PARALLAX */}
            <div 
              className="mt-24 flex flex-wrap justify-center gap-4 opacity-20"
              style={{ transform: `translateY(${offset * -0.08}px)` }}
            >
              {Array.from({ length: 42 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 rounded-full bg-[#0A1738]"
                  style={{ 
                    animation: `fullPulse 4s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <style>{`
        @keyframes fullPulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .animate-reveal {
          animation: reveal 1s cubic-bezier(0, 0, 0.2, 1) forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        @keyframes reveal {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
