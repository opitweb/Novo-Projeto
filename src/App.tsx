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
        <a href="#contacto" className="bg-[#3156A3] text-white px-5 py-2 rounded-xl hover:bg-[#25417b] transition-all text-sm text-center">Contato</a>
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
      
      {/* CURSOR AZUL */}
      <div 
        className={`fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full transition-all duration-300 ease-out shadow-lg
          ${isScrolling ? 'w-5 h-5 bg-[#3156A3]' : 'w-24 h-24 bg-[#3156A3]'}`}
        style={{ transform: `translate3d(${mousePos.x - (isScrolling ? 10 : 48)}px, ${mousePos.y - (isScrolling ? 10 : 48)}px, 0)` }}
      >
        <span className={`text-[10px] text-white font-bold tracking-widest ${isScrolling ? 'opacity-0' : 'opacity-100'}`}>SCROLL</span>
      </div>

      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section id="inicio" className="pt-40 pb-20 px-4 min-h-[90vh] flex items-center bg-white">
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

        {/* SEÇÃO BARCELONA (A do Print) */}
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
                <p>Poco a poco, nuestro equipo ha ido creciendo, ampliando nuestra oferta de servicios, destacando el de <span className="font-bold text-[#3156A3]">marketing digital</span>.</p>
                <p>Actualmente, trabalhamos de forma conjunta para oferecerte um serviço completamente personalizado.</p>
              </div>
            </div>
            {/* BOLINHAS */}
            <div className="mt-24 flex flex-wrap justify-center gap-3">
              {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-slate-100 animate-pulse-color"
                  style={{ '--target-color': i % 3 === 0 ? '#3156A3' : '#00A89F', animationDelay: `${i * 0.1}s` } as any} />
              ))}
            </div>
          </div>
        </section>

        {/* NOVA SEÇÃO: SOCIAL MEDIA */}
        <section className="py-32 bg-[#F8F9FB]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-[#3156A3] p-12 rounded-[3rem] text-white shadow-2xl relative z-10">
                <Share2 size={48} className="mb-6 text-[#00A89F]" />
                <h3 className="text-4xl font-black mb-6 leading-tight">Social <span className="font-elegant-italic">Elegance</span></h3>
                <p className="text-blue-100 text-lg opacity-80 leading-relaxed">Criamos uma presença digital que reflete a autoridade do seu consultório. Design de alto padrão para Instagram e LinkedIn.</p>
              </div>
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#3156A3]/10 rounded-[3rem] -z-10" />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-6xl font-black text-[#3156A3] tracking-tighter">Mídias Sociais <br/><span className="text-[#00A89F]">Estratégicas</span></h2>
              <div className="grid gap-6">
                {[
                  { t: "Curadoria Visual", d: "Estética premium para atrair pacientes de alto ticket." },
                  { t: "Gestão de Reputação", d: "Monitoramento constante da sua imagem médica." },
                  { t: "Short Video", d: "Vídeos educativos com edição cinematográfica." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 w-5 h-5 bg-[#00A89F] rounded-full flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-xl">{item.t}</h4>
                      <p className="text-slate-500">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NOVA SEÇÃO: SEO UX & AUTOMAÇÃO */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-6xl font-black text-[#3156A3] tracking-tighter">SEO, UX <span className="font-elegant-italic text-[#00A89F]">&</span> Automação</h2>
              <p className="text-slate-500 text-xl mt-4 max-w-2xl mx-auto">Eficiência operacional para empresas que buscam escala sem perder a qualidade.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Layers, title: "UX Design", desc: "Interfaces focadas na jornada de agendamento do paciente." },
                { icon: BarChart3, title: "SEO Performance", desc: "Primeira página do Google para os termos mais rentáveis." },
                { icon: Zap, title: "Automação", desc: "Integração total do marketing com o seu software de gestão." }
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

        {/* FOOTER VOOMA ESTILO PRINT */}
        <footer id="contacto" className="bg-[#3156A3] text-white pt-32 pb-10 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
              <h2 className="text-6xl md:text-8xl font-medium tracking-tighter">Get started today</h2>
              <button className="bg-[#ff4d00] hover:bg-[#e64500] text-white px-8 py-5 rounded-full flex items-center gap-4 transition-all group">
                <span className="font-bold uppercase tracking-wider text-xs">Agendar Diagnóstico</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            <div className="py-20 border-t border-white/10 overflow-hidden text-center">
              <h1 className="text-[18vw] font-black leading-none tracking-tighter opacity-10 select-none">betterfly</h1>
            </div>
            <div className="flex justify-between items-center text-[9px] uppercase tracking-[0.3em] font-bold text-white/40 pt-10 border-t border-white/5">
               <p>© Betterfly Media 2026</p>
               <div className="flex gap-10">
                  <a href="#" className="hover:text-white transition-colors">Services</a>
                  <a href="#" className="hover:text-white transition-colors">Privacy</a>
               </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
