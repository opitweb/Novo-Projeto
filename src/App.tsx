import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Award } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#0A1738] relative font-['Poppins']">
      
      {/* TEXTURA DE FUNDO FIXA - Estabilizada para eliminar o efeito chiclete */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, #0A1738 1px, transparent 1px)`,
            backgroundSize: '80px 100%',
          }}
        />
      </div>

      <main className="relative z-10">
        {/* HERO SECTION - Corrigida com pt-56 para evitar sobreposição da Navbar */}
        <section className="pt-56 pb-20 px-6 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-10 animate-reveal">
              {/* Badge de localização estável com fundo sólido para legibilidade */}
              <div className="inline-flex items-center gap-3 bg-white border border-slate-200 text-[#0A1738] px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                <Sparkles size={14} className="text-[#0DBAAC]" /> Marketing Médico en Barcelona
              </div>
              
              <div className="space-y-4">
                <h1 className="text-7xl lg:text-9xl font-bold text-[#0A1738] tracking-tighter leading-[0.8]">
                  Betterfly <br/>
                  <span className="font-light italic text-[#0DBAAC] text-6xl lg:text-8xl lowercase">media</span>
                </h1>
              </div>
              
              <p className="text-xl text-slate-500 border-l-2 border-[#0DBAAC] pl-6 max-w-md leading-relaxed">
                Marketing de alto nivel para especialistas que <span className="text-[#0A1738] font-medium">dominan su mercado</span>.
              </p>

              <Link 
                to="/contacto" 
                className="inline-flex bg-[#0DBAAC] text-white px-10 py-5 rounded-2xl font-bold items-center hover:bg-[#0a8d82] transition-all shadow-xl shadow-[#0DBAAC]/20 active:scale-95"
              >
                Análisis Gratuito <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            
            {/* CARD ESTÁTICO - Removido translateY para estabilidade total */}
            <div className="hidden lg:block animate-reveal delay-200">
               <div className="bg-[#0A1738] p-20 rounded-[4rem] text-white shadow-2xl text-center relative overflow-hidden border-8 border-white/50 backdrop-blur-sm">
                  <Award size={48} className="mx-auto mb-8 text-[#0DBAAC]" />
                  <p className="text-8xl font-bold mb-2 tracking-tighter">+340%</p>
                  <p className="text-[#0DBAAC] text-lg font-medium opacity-90 uppercase tracking-widest">Crecimiento en Facturación</p>
                  
                  {/* Detalhe visual decorativo */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0DBAAC]/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
               </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO BARCELONA - Fundo semi-transparente para profundidade */}
        <section className="py-32 bg-white/40 backdrop-blur-sm relative z-20 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl md:text-7xl font-bold mb-20 leading-[1.1] tracking-tight text-[#0A1738] animate-reveal">
              Somos una agencia de <span className="text-[#0DBAAC]">desarrollo web</span> <br/>
              y <span className="text-[#0DBAAC]">marketing digital</span> en Barcelona
            </h2>
            
            <div className="grid md:grid-cols-2 gap-20 items-start animate-reveal delay-100">
              <div className="text-2xl font-semibold text-[#0A1738] leading-snug">
                <p>En 2010 iniciamos nuestra andadura, <span className="text-[#0DBAAC]">diseñando e innovando</span> desde nuestra oficina de Barcelona.</p>
              </div>
              <div className="text-lg text-slate-500 space-y-6 leading-relaxed">
                <p>Nuestra metodología combina la estética médica con el rigor técnico necesario para convertir visitantes en pacientes.</p>
                <p>Actualmente, trabajamos con clínicas que buscan dar el salto al siguiente nivel de facturación.</p>
              </div>
            </div>

            {/* ELEMENTOS DECORATIVOS PULSANTES */}
            <div className="mt-24 flex flex-wrap justify-center gap-4 opacity-10">
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
        .animate-reveal {
          animation: reveal 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        @keyframes reveal {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fullPulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}
