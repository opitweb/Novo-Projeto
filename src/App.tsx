import React, { useEffect, useState } from 'react';
import { 
  Sparkles, ArrowRight, Award, Search, MousePointer2, HeartPulse, 
  Layers, Zap, Share2, BarChart3
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-[60] bg-white/80 backdrop-blur-md border-b border-slate-100 p-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <span className="text-xl font-black text-[#1A2B4B]">Betterfly <span className="text-[#00A89F]">Media</span></span>
      <div className="hidden md:flex gap-8 font-bold text-[#3156A3]">
        <a href="#inicio" className="hover:text-[#00A89F] transition-colors text-sm">Início</a>
        <a href="#servicios" className="hover:text-[#00A89F] transition-colors text-sm">Serviços</a>
        <a href="#contacto" className="bg-[#3156A3] text-white px-5 py-2 rounded-xl hover:bg-[#25417b] transition-all text-sm">Contato</a>
      </div>
    </div>
  </nav>
);

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#1A2B4B] relative overflow-x-hidden md:cursor-none">
      
      {/* CURSOR */}
      <div 
        className={`fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full transition-all duration-300 ease-out shadow-lg
          ${isScrolling ? 'w-5 h-5 bg-[#3156A3]' : 'w-24 h-24 bg-[#3156A3]'}`}
        style={{ transform: `translate3d(${mousePos.x - (isScrolling ? 10 : 48)}px, ${mousePos.y - (isScrolling ? 10 : 48)}px, 0)` }}
      >
        <span className={`text-[10px] text-white font-bold tracking-widest ${isScrolling ? 'opacity-0' : 'opacity-100'}`}>SCROLL</span>
      </div>

      <Navbar />

      <main>
        {/* HERO SECTION - COM BLOCO +340% */}
        <section id="inicio" className="pt-40 pb-20 px-4 min-h-screen flex items-center bg-white">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-reveal">
              <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 text-[#3156A3] px-5 py-2 rounded-full text-sm font-bold shadow-sm">
                <Sparkles size={16} className="text-[#00A89F]" /> Marketing Médico Barcelona
              </div>
              <h1 className="text-7xl lg:text-8xl font-black text-[#3156A3] tracking-tighter leading-[0.9]">
                Betterfly <br/><span className="font-elegant-italic text-[#00A89F] text-6xl lg:text-7xl lowercase leading-none">Media</span>
              </h1>
              <p className="text-xl text-slate-500 border-l-4 border-[#00A89F] pl-4 italic">Marketing de alto nível para especialistas.</p>
              <button className="bg-[#3156A3] text-white px-10 py-5 rounded-2xl font-bold flex items-center hover:scale-105 transition-all shadow-xl shadow-[#3156A3]/20">
                Análise Gratuita <ArrowRight className="ml-2" />
              </button>
            </div>
            
            <div className="hidden lg:block animate-reveal delay-200">
               <div className="bg-gradient-to-br from-[#3156A3] to-[#1e3a7a] p-16 rounded-[4rem] text-white shadow-2xl text-center relative overflow-hidden group">
                  <Award size={64} className="mx-auto mb-6 text-[#00A89F]" />
                  <p className="text-8xl font-black mb-2 tracking-tighter">+340%</p>
                  <p className="text-blue-100 text-xl font-medium">Crescimento Faturamento</p>
               </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO BARCELONA COM BOLINHAS RESTAURADAS */}
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
                <p>Poco a poco, nuestro equipo ha ido creciendo, ampliando nuestra oferta de servicios, destacando o de <span className="font-bold text-[#3156A3]">marketing digital</span>.</p>
                <p>Actualmente, trabalhamos de forma conjunta para oferecerte um serviço completamente personalizado.</p>
              </div>
            </div>

            {/* GRID DE BOLINHAS COM ANIMAÇÃO COMPLETA */}
            <div className="mt-24 flex flex-wrap justify-center gap-3 px-10">
              {Array.from({ length: 48 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-slate-100 transition-colors"
                  style={{ 
                    animation: `fullPulse 4s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`,
                    '--dot-color': i % 7 === 0 ? '#00A89F' : i % 5 === 0 ? '#FF4D00' : '#3156A3'
                  } as React.CSSProperties}
                />
              ))}
            </div>
          </div>
          
          <style>{`
            @keyframes fullPulse {
              0%, 100% { background-color: #f1f5f9; transform: scale(1); }
              50% { background-color: var(--dot-color); transform: scale(1.1); }
            }
          `}</style>
        </section>

        {/* SEÇÃO SOCIAL MEDIA */}
        <section className="py-32 bg-[#F8F9FB]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-reveal">
              <h2 className="text-6xl font-black text-[#3156A3] tracking-tighter">Social <br/><span className="font-elegant-italic text-[#00A89F] lowercase text-5xl">Intelligence</span></h2>
              <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-[#3156A3] pl-6">Criamos autoridade digital que transforma seguidores em pacientes. Estratégia visual de alto padrão para clínicas exclusivas.</p>
              <div className="grid gap-4 font-bold text-[#1A2B4B]">
                <div className="flex items-center gap-3"><div className="w-2 h-2 bg-[#00A89F] rounded-full"/> Curadoria de Conteúdo Premium</div>
                <div className="flex items-center gap-3"><div className="w-2 h-2 bg-[#00A89F] rounded-full"/> Short Video Strategy</div>
              </div>
            </div>
            <div className="bg-[#3156A3] p-12 rounded-[3rem] text-white shadow-2xl rotate-2">
              <Share2 size={48} className="mb-6 text-[#00A89F]" />
              <h3 className="text-3xl font-bold mb-4">Presença de Elite</h3>
              <p className="opacity-80">Design cinematográfico para mídias sociais que comunicam excelência médica.</p>
            </div>
          </div>
        </section>

        {/* SEÇÃO SEO & AUTOMAÇÃO */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-6xl font-black text-[#3156A3] tracking-tighter">SEO <span className="font-elegant-italic text-[#00A89F]">&</span> Automação</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Layers, title: "UX Design", desc: "Interfaces focadas na jornada de agendamento do paciente." },
                { icon: BarChart3, title: "SEO Performance", desc: "Primeira página do Google para termos de alto ticket." },
                { icon: Zap, title: "Automação", desc: "Integração total do marketing com o seu fluxo de atendimento." }
              ].map((card, i) => (
                <div key={i} className="p-12 bg-[#F8F9FB] rounded-[3rem] border border-slate-100 group hover:bg-[#3156A3] transition-all duration-500">
                  <card.icon size={40} className="text-[#00A89F] mb-6 group-hover:text-white transition-colors" />
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{card.title}</h3>
                  <p className="text-slate-500 group-hover:text-blue-100 transition-colors leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contacto" className="bg-[#3156A3] text-white pt-32 pb-10 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12 text-6xl md:text-8xl font-medium tracking-tighter">
              <h2>Get started today</h2>
              <button className="bg-[#ff4d00] text-white px-8 py-5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-4 transition-all hover:scale-105">
                Agendar Diagnóstico <ArrowRight size={18} />
              </button>
            </div>
            <div className="py-20 border-t border-white/10 text-center overflow-hidden">
              <h1 className="text-[18vw] font-black leading-none tracking-tighter opacity-10 select-none">betterfly</h1>
            </div>
            <div className="pt-10 border-t border-white/5 text-[9px] uppercase tracking-[0.3em] font-bold text-white/40 flex justify-between">
               <p>© Betterfly Media 2026</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
