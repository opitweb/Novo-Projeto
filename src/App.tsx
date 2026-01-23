import React, { useEffect, useState } from 'react';
import { 
  Sparkles, ArrowRight, Award, ChevronDown, 
  Search, MousePointer2, HeartPulse 
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-[60] bg-white/80 backdrop-blur-md border-b border-slate-100 p-4 font-['Poppins']">
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
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
      setIsScrolling(currentScroll > 50);
    };
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const services = [
    { icon: Search, title: "SEO Médico", desc: "Apareça quando o paciente busca por tratamentos no Google em Barcelona." },
    { icon: MousePointer2, title: "Gestão de Autoridade", desc: "Transformamos seu CRM em conteúdo estratégico que gera admiração." },
    { icon: HeartPulse, title: "Ads Éticos", desc: "Campanhas de conversão focadas em agendamentos reais e qualificados." }
  ];

  const faqData = [
    { q: "¿Es ético hacer publicidad médica?", a: "Absolutamente. Seguimos todas las normativas del sector en Barcelona, enfocándonos en información útil y profesionalismo." },
    { q: "¿Quanto tempo tardan en verse los resultados?", a: "Las campañas de Ads generan tráfico inmediato. El posicionamiento orgánico (SEO) suele dar frutos sólidos entre 3 y 6 meses." },
    { q: "¿Trabajan con todas las especialidades?", a: "Sí, estamos especializados en Odontología estética, Cirugía, Dermatología y clínicas premium." }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-slate-900 relative overflow-x-hidden md:cursor-none font-['Poppins']">
      
      {/* 1. CURSOR DINÂMICO AZUL */}
      <div 
        className={`fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full transition-all duration-300 ease-out shadow-lg
          ${isScrolling ? 'w-5 h-5 bg-[#3156A3]' : 'w-24 h-24 bg-[#3156A3]'}`}
        style={{
          transform: `translate3d(${mousePos.x - (isScrolling ? 10 : 48)}px, ${mousePos.y - (isScrolling ? 10 : 48)}px, 0)`,
        }}
      >
        <span className={`text-[10px] text-white font-bold tracking-widest transition-opacity duration-300 ${isScrolling ? 'opacity-0' : 'opacity-100'}`}>
          SCROLL
        </span>
      </div>

      <Navbar />

      <main>
        {/* 2. HERO SECTION COM ANIMAÇÃO REVEAL */}
        <section id="inicio" className="pt-40 pb-20 px-4 min-h-screen flex items-center bg-white relative">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-reveal">
              <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 text-[#3156A3] px-5 py-2 rounded-full text-sm font-bold shadow-sm">
                <Sparkles size={16} className="text-[#00A89F]" /> Marketing Médico Barcelona
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-[#3156A3] tracking-tighter leading-tight">
                Betterfly <br/><span className="italic text-[#00A89F]">Media</span>
              </h1>
              <p className="text-xl text-slate-500 border-l-4 border-[#00A89F] pl-4 italic delay-200 animate-reveal">
                Marketing de alto nível para quem domina o mercado.
              </p>
              <button className="bg-[#3156A3] text-white px-10 py-5 rounded-2xl font-bold flex items-center hover:scale-105 transition-all shadow-xl shadow-[#3156A3]/20 delay-400 animate-reveal">
                Análise Gratuita <ArrowRight className="ml-2" />
              </button>
            </div>
            
            <div className="hidden lg:block animate-reveal delay-200">
               <div className="bg-gradient-to-br from-[#3156A3] to-[#1e3a7a] p-16 rounded-[4rem] text-white shadow-2xl text-center relative overflow-hidden">
                  <Award size={64} className="mx-auto mb-6 text-[#00A89F]" />
                  <p className="text-8xl font-black mb-2 tracking-tighter">+340%</p>
                  <p className="text-blue-100 text-xl font-medium">Crescimento Faturamento</p>
               </div>
            </div>
          </div>
        </section>

        {/* 3. SERVIÇOS */}
        <section id="servicios" className="py-32 bg-[#F8F9FB]">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-[#F8F9FB] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#3156A3] transition-colors">
                  <s.icon size={32} className="text-[#3156A3] group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#3156A3] group-hover:text-[#00A89F] transition-colors">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. SEÇÃO BARCELONA (COM TEXTOS ORIGINAIS E BOLINHAS ANIMADAS) */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-20 leading-tight">
              Somos una agencia de <span className="bg-[#3156A3]/10 px-2 italic font-serif">desarrollo</span> <br/>
              <span className="bg-[#3156A3]/10 px-2 italic font-serif">web y marketing digital</span> en Barcelona
            </h2>
            <div className="grid md:grid-cols-2 gap-16 items-start text-slate-600">
              <div className="text-2xl font-bold text-slate-900 leading-snug">
                <p>En 2010 iniciamos nuestra andadura en el mundo digital, diseñando y desarrollando páginas web desde nuestra oficina de Santiago de Compostela.</p>
              </div>
              <div className="text-lg space-y-6">
                <p>Poco a poco, nuestro equipo ha ido creciendo, lo que nos ha permitido ampliar nuestra oferta de servicios, entre los que destaca el de <span className="font-bold text-[#3156A3]">marketing digital</span>.</p>
                <p>Actualmente, trabajamos de forma conjunta para ofrecerte un servicio completamente personalizado y dar visibilidad a tu empresa en el mundo digital.</p>
              </div>
            </div>

            {/* GRID DE BOLINHAS COM ANIMAÇÃO DE COR */}
            <div className="mt-24 flex flex-wrap justify-center gap-3 px-10">
              {Array.from({ length: 48 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-slate-100 transition-colors duration-1000"
                  style={{ 
                    animation: `pulseColor 3s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`,
                    '--target-color': i % 7 === 0 ? '#00A89F' : i % 5 === 0 ? '#FF4D00' : '#3156A3'
                  } as any}
                />
              ))}
            </div>
          </div>
          
          <style>{`
            @keyframes pulseColor {
              0%, 100% { background-color: #f1f5f9; transform: scale(1); }
              50% { background-color: var(--target-color); transform: scale(1.05); }
            }
          `}</style>
        </section>

        {/* 5. FAQ (POSICIONADO APÓS BARCELONA) */}
        <section className="py-32 bg-[#F8F9FB]">
          <div className="max-w-3xl mx-auto px-4">
            <h3 className="text-4xl font-black text-[#3156A3] text-center mb-12">Perguntas Frequentes</h3>
            <div className="space-y-4">
              {faqData.map((item, i) => (
                <div key={i} className="border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                    className="w-full p-6 flex justify-between items-center text-left font-bold text-[#3156A3]"
                  >
                    {item.q} <ChevronDown className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="p-6 pt-0 text-slate-500 bg-slate-50/50 italic animate-reveal">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FOOTER AZUL BETTERFLY ESTILO VOOMA */}
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
              <h1 className="text-[18vw] font-black leading-none tracking-tighter opacity-20 select-none">betterfly</h1>
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
