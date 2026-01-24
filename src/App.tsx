import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Award } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#0A1738] relative font-['Poppins'] overflow-x-hidden">
      
      {/* TEXTURA DE FUNDO FIXA - Estabilizada */}
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
        {/* HERO SECTION - Ajustada para não quebrar as letras */}
        <section className="pt-40 md:pt-56 pb-20 px-6 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="space-y-8 md:space-y-10 animate-reveal">
              {/* Badge de localização */}
              <div className="inline-flex items-center gap-3 bg-white border border-slate-200 text-[#0A1738] px-5 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide shadow-sm">
                <Sparkles size={14} className="text-[#0DBAAC]" /> Marketing Médico en Barcelona
              </div>
              
              {/* TIPOGRAFIA CORRIGIDA: Tamanhos fluidos para não quebrar */}
              <div className="block">
                <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-[#0A1738] tracking-tighter leading-[0.9] mb-2">
                  Betterfly
                </h1>
                <h2 className="font-light italic text-[#0DBAAC] text-5xl md:text-7xl lg:text-8xl lowercase leading-none">
                  media
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-slate-500 border-l-2 border-[#0DBAAC] pl-6 max-w-md leading-relaxed">
                Marketing de alto nivel para especialistas que <span className="text-[#0A1738] font-medium">dominan su mercado</span>.
              </p>

              <Link 
                to="/contacto" 
                className="inline-flex bg-[#0DBAAC] text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold items-center hover:bg-[#0a8d82] transition-all shadow-xl shadow-[#0DBAAC]/20 active:scale-95 text-sm md:text-base"
              >
                Análisis Gratuito <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            
            {/* CARD DE RESULTADOS - Proporcional e estável */}
            <div className="hidden lg:block animate-reveal delay-200">
               <div className="bg-[#0A1738] p-12 xl:p-20 rounded-[3rem] xl:rounded-[4rem] text-white shadow-2xl text-center relative overflow-hidden border-8 border-white/50 backdrop-blur-sm">
                  <Award size={40} className="mx-auto mb-6 text-[#0DBAAC]" />
                  <p className="text-7xl xl:text-8xl font-bold mb-2 tracking-tighter">+340%</p>
                  <p className="text-[#0DBAAC] text-base xl:text-lg font-medium opacity-90 uppercase tracking-widest">Crecimiento en Facturación</p>
                  
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0DBAAC]/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
               </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO BARCELONA - Texto limpo */}
        <section className="py-24 md:py-32 bg-white/40 backdrop-blur-sm relative z-20 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-16 leading-[1.1] tracking-tight text-[#0A1738] animate-reveal">
              Somos una agencia de <span className="text-[#0DBAAC]">desarrollo web</span> <br className="hidden md:block"/>
              y <span className="text-[#0DBAAC]">marketing digital</span> en Barcelona
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
              <div className="text-xl md:text-2xl font-semibold text-[#0A1738] leading-snug">
                <p>En 2010 iniciamos nuestra andadura, <span className="text-[#0DBAAC]">diseñando e innovando</span> desde nuestra oficina de Barcelona.</p>
              </div>
              <div className="text-base md:text-lg text-slate-500 space-y-6 leading-relaxed">
                <p>Nuestra metodología combina la estética médica con el rigor técnico necesario para convertir visitantes en pacientes.</p>
                <p>Actualmente, trabajamos con clínicas que buscan dar el salto al siguiente nivel de facturación.</p>
              </div>
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
        @keyframes reveal {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
