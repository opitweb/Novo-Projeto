import React, { useEffect, useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Award, 
  MessageCircle,
  ChevronDown,
  Search, 
  MousePointer2,
  HeartPulse,
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-[60] bg-white/80 backdrop-blur-md border-b border-slate-100 p-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <span className="text-xl font-black text-[#1A2B4B]">Betterfly <span className="text-[#00A89F]">Media</span></span>
      <div className="hidden md:flex gap-8 font-bold text-[#3156A3]">
        <a href="#inicio" className="hover:text-[#00D1C1] transition-colors">Início</a>
        <a href="#servicios" className="hover:text-[#00A89F] transition-colors">Serviços</a>
        <a href="#contacto" className="bg-[#3156A3] text-white px-5 py-2 rounded-xl hover:bg-[#25417b] transition-all text-sm">Contato</a>
      </div>
    </div>
  </nav>
);

const App: React.FC = () => {
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const services = [
    { icon: Search, title: "SEO Médico", desc: "Apareça quando o paciente busca por tratamentos no Google em Barcelona." },
    { icon: MousePointer2, title: "Gestão de Autoridade", desc: "Transformamos seu CRM em conteúdo estratégico." },
    { icon: HeartPulse, title: "Ads Éticos", desc: "Campanhas de conversão focadas em agendamentos reais." }
  ];

  const faqData = [
    { q: "¿Es ético hacer publicidad médica?", a: "Absolutamente. Seguimos todas las normativas del sector en Barcelona." },
    { q: "¿Cuánto tempo tardan en verse los resultados?", a: "Las campañas de Ads generan tráfico inmediato. El SEO suele dar frutos entre 3 y 6 meses." }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-slate-900 relative overflow-x-hidden md:cursor-none font-['Poppins']">
      
      {/* 1. CURSOR DINÂMICO */}
      <div 
        className={`fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full transition-all duration-300 ease-out shadow-lg
          ${isScrolling ? 'w-5 h-5 bg-[#3156A3]' : 'w-24 h-24 bg-[#3156A3]'}`}
        style={{
          transform: `translate3d(${mousePos.x - (isScrolling ? 10 : 48)}px, ${mousePos.y - (isScrolling ? 10 : 48)}px, 0)`,
          transition: 'transform 0.1s ease-out, width 0.3s, height 0.3s'
        }}
      >
        <span className={`text-[10px] text-white font-bold tracking-widest transition-opacity duration-300 ${isScrolling ? 'opacity-0' : 'opacity-100'}`}>
          SCROLL
        </span>
      </div>

      <Navbar />

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section id="inicio" className="pt-40 pb-20 px-4 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 opacity-0 animate-reveal">
              <h1 className="text-6xl lg:text-8xl font-black text-[#3156A3] tracking-tighter">
                Betterfly <br/><span className="italic text-[#00A89F]">Media</span>
              </h1>
              <p className="text-xl text-slate-500 italic font-medium border-l-4 border-[#00A89F] pl-4">Marketing de alto nível em Barcelona.</p>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicios" className="py-32 bg-[#F8F9FB]">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-2 group">
                <s.icon size={40} className="text-[#00A89F] mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-[#3156A3]">{s.title}</h3>
                <p className="text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SEÇÃO BARCELONA (COM ANIMAÇÃO DE BOLINHAS E AZUL DO SITE) */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-20 leading-tight">
              Somos una agencia de <span className="bg-[#3156A3]/20 px-2 italic font-serif">desarrollo</span> <br/>
              <span className="bg-[#3156A3]/20 px-2 italic font-serif">web y marketing digital</span> en Barcelona
            </h2>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="text-2xl font-bold leading-snug">
                <p>En 2010 iniciamos nuestra andadura en el mundo digital, diseñando y desarrollando páginas web desde nuestra oficina de Santiago de Compostela.</p>
              </div>
              <div className="text-lg text-slate-600 space-y-6">
                <p>Poco a poco, nuestro equipo ha ido creciendo, lo que nos ha permitido ampliar nuestra oferta de servicios, entre los que destaca el de <span className="font-bold text-[#3156A3]">marketing digital</span>.</p>
                <p>Actualmente, trabajamos de forma conjunta para ofrecerte un servicio completamente personalizado y dar visibilidade a tu empresa en el mundo digital.</p>
              </div>
            </div>
          </div>

          {/* AS BOLINHAS COM ANIMAÇÃO DE PREENCHIMENTO */}
          <div className="mt-20 flex flex-wrap justify-center gap-3 px-10">
            {Array.from({ length: 42 }).map((_, i) => (
              <div 
                key={i} 
                className={`w-8 h-8 md:w-11 md:h-11 rounded-full bg-slate-100 animate-fill-dots`}
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                  // Definindo as cores de preenchimento dinamicamente
                  '--fill-color': i % 8 === 0 ? '#00A89F' : i % 6 === 0 ? '#FF4D00' : i % 4 === 0 ? '#3156A3' : '#3156A3/50'
                } as React.CSSProperties}
              />
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-32 bg-[#F8F9FB]">
          <div className="max-w-3xl mx-auto px-4">
            <h3 className="text-4xl font-black text-[#3156A3] text-center mb-12">Perguntas Frequentes</h3>
            <div className="space-y-4">
              {faqData.map((item, i) => (
                <div key={i} className="border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-6 flex justify-between items-center text-left font-bold text-[#3156A3]">
                    {item.q} <ChevronDown className={openFaq === i ? 'rotate-180' : ''} />
                  </button>
                  {openFaq === i && <div className="p-6 pt-0 text-slate-500 bg-slate-50">{item.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER AZUL BETTERFLY */}
        <footer id="contacto" className="bg-[#3156A3] text-white pt-32 pb-10 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
              <h2 className="text-6xl md:text-8xl font-medium tracking-tighter">Get started today</h2>
              <button className="bg-[#ff4d00] hover:bg-[#e64500] text-white px-8 py-5 rounded-full flex items-center gap-4 transition-all">
                <span className="font-bold uppercase tracking-wider text-xs">Agendar Diagnóstico</span>
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="py-20 border-t border-white/10 overflow-hidden">
              <h1 className="text-[18vw] font-black leading-none tracking-tighter opacity-20 select-none">betterfly</h1>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
