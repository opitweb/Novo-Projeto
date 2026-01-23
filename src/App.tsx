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
    { icon: Search, title: "SEO Médico", desc: "Apareça quando o paciente busca por tratamentos no Google." },
    { icon: MousePointer2, title: "Gestão de Autoridade", desc: "Transformamos seu CRM em conteúdo estratégico." },
    { icon: HeartPulse, title: "Ads Éticos", desc: "Campanhas de conversão focadas em agendamentos reais." }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-slate-900 relative overflow-x-hidden md:cursor-none">
      
      {/* CURSOR DINÂMICO AZUL (Seu efeito favorito) */}
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
        <section id="inicio" className="relative pt-40 pb-20 px-4 min-h-screen flex items-center bg-white">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 opacity-0 animate-reveal">
              <h1 className="text-6xl lg:text-8xl font-black leading-tight text-[#3156A3] tracking-tighter">
                Betterfly <br/>
                <span className="bg-gradient-to-r from-[#3156A3] to-[#00A89F] bg-clip-text text-transparent italic">Media</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-md">Marketing de alto nível para especialistas que dominam o mercado.</p>
              <button className="bg-[#3156A3] text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl">
                Começar agora
              </button>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicios" className="py-32 bg-[#F8F9FB]">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-2">
                <s.icon size={40} className="text-[#00A89F] mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-[#3156A3]">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER ESTILO VOOMA (Dark Mode) */}
      <footer className="bg-[#050505] text-white pt-32 pb-10 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
            <div>
              <h2 className="text-6xl md:text-8xl font-medium tracking-tighter mb-8">
                Get started today
              </h2>
            </div>
            
            <button className="bg-[#ff4d00] hover:bg-[#e64500] text-white px-8 py-5 rounded-full flex items-center gap-4 transition-all group">
              <span className="font-bold uppercase tracking-wider text-xs">Book a demo</span>
              <div className="bg-white/20 p-2 rounded-full group-hover:translate-x-1 transition-transform">
                <ArrowRight size={18} />
              </div>
            </button>
          </div>

          <div className="py-20 border-t border-white/10 overflow-hidden">
            <h1 className="text-[18vw] font-black leading-none tracking-tighter text-white/90 select-none">
              vooma
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 py-16 border-t border-white/10 text-[11px] text-gray-500 uppercase tracking-[0.2em] font-bold">
            <div>
              <p className="text-white mb-6 opacity-50">Contact Us</p>
              <p className="text-gray-400">Barcelona, Spain</p>
              <p className="text-[#00A89F] mt-2 lowercase">hello@vooma.com</p>
            </div>
            
            <div>
              <p className="text-white mb-6 opacity-50">Stay up to date</p>
              <div className="flex border-b border-white/20 pb-2">
                <input type="text" placeholder="Your email" className="bg-transparent w-full focus:outline-none text-white lowercase tracking-normal" />
                <button className="text-white text-[9px]">SUBMIT</button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-white/5 text-[9px] uppercase tracking-[0.3em] font-bold text-gray-600">
             <div className="flex gap-10">
                <a href="#" className="hover:text-white transition-colors">Build</a>
                <a href="#" className="hover:text-white transition-colors">Services</a>
                <a href="#" className="hover:text-white transition-colors">About</a>
             </div>
             <p>© Betterfly Media 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
