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
  type LucideIcon 
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
    { q: "¿Cuánto tempo tardan en verse los resultados?", a: "Ads são imediatos. SEO leva de 3 a 6 meses." }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-slate-900 relative overflow-x-hidden md:cursor-none font-['Poppins']">
      
      {/* CURSOR DINÂMICO AZUL */}
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
              <p className="text-xl text-slate-500 max-w-md">Marketing de alto nível em Barcelona.</p>
            </div>
          </div>
        </section>

        {/* NOVA SECÇÃO: SOBRE (ESTILO PRINT COM BOLINHAS) */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Título Principal com destaque */}
            <h2 className="text-5xl md:text-7xl font-bold mb-20 leading-tight">
              Somos uma agência de <span className="bg-[#D9F99D]/50 px-2 italic font-serif">desenvolvimento</span> <br/>
              <span className="bg-[#D9F99D]/50 px-2 italic font-serif">web e marketing digital</span> em Barcelona
            </h2>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="text-2xl font-bold leading-snug">
                <p>Em 2024 iniciamos a nossa trajetória no mundo digital, desenhando e desenvolvendo estratégias desde Barcelona para o mundo.</p>
              </div>
              <div className="text-lg text-slate-600 space-y-6">
                <p>Pouco a pouco, a nossa equipa foi crescendo, o que nos permitiu ampliar a nossa oferta de serviços, entre os quais se destaca o marketing médico especializado.</p>
                <p>Atualmente, trabalhamos de forma conjunta para lhe oferecer um serviço completamente personalizado e dar visibilidade à sua clínica no mundo digital.</p>
              </div>
            </div>
          </div>

          {/* AS BOLINHAS DO PRINT (RODAPÉ DA SECÇÃO) */}
          <div className="mt-20 flex flex-wrap justify-center gap-2 opacity-80 pointer-events-none">
            {Array.from({ length: 40 }).map((_, i) => (
              <div 
                key={i} 
                className={`w-10 h-10 rounded-full ${
                  i % 7 === 0 ? 'bg-[#00A89F]' : 
                  i % 5 === 0 ? 'bg-[#FF4D00]' : 
                  i % 3 === 0 ? 'bg-[#D9F99D]' : 'bg-slate-100'
                }`}
              />
            ))}
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicios" className="py-32 bg-[#F8F9FB]">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all">
                <s.icon size={40} className="text-[#00A89F] mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-[#3156A3]">{s.title}</h3>
                <p className="text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-32 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h3 className="text-4xl font-black text-[#3156A3] text-center mb-12">FAQ</h3>
            {faqData.map((f, i) => (
              <div key={i} className="mb-4 border rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-6 text-left font-bold flex justify-between">
                  {f.q} <ChevronDown className={openFaq === i ? 'rotate-180' : ''} />
                </button>
                {openFaq === i && <div className="p-6 bg-slate-50 text-slate-500">{f.a}</div>}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER AZUL BETTERFLY (Estilo Vooma) */}
      <footer id="contacto" className="bg-[#3156A3] text-white pt-32 pb-10 px-6 border-t border-white/10">
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
          <div className="flex justify-between items-center text-[9px] uppercase tracking-[0.3em] text-white/50 pt-10 border-t border-white/5">
             <p>© Betterfly Media 2026</p>
             <div className="flex gap-8">
                <a href="#">Barcelona</a>
                <a href="#">Espanha</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
