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
        <a href="#contacto" className="bg-[#3156A3] text-white px-5 py-2 rounded-xl hover:bg-[#25417b] transition-all">Contato</a>
      </div>
    </div>
  </nav>
);

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
      // Se rolou mais de 50px, ativa o modo "bolinha menor"
      setIsScrolling(currentScroll > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-slate-900 relative overflow-x-hidden">
      
      {/* CURSOR DINÂMICO */}
      <div 
        className={`fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full transition-all duration-300 ease-out shadow-lg
          ${isScrolling 
            ? 'w-4 h-4 bg-[#3156A3]' // Bolinha menor azul quando rola
            : 'w-24 h-24 bg-[#3156A3] backdrop-blur-sm' // Círculo maior azul no topo
          }`}
        style={{
          transform: `translate3d(${mousePos.x - (isScrolling ? 8 : 48)}px, ${mousePos.y - (isScrolling ? 8 : 48)}px, 0)`,
          transition: 'transform 0.1s ease-out, width 0.3s, height 0.3s, background-color 0.3s'
        }}
      >
        {/* O texto some suavemente quando isScrolling for true */}
        <span className={`text-[10px] text-white font-bold tracking-widest transition-opacity duration-300 
          ${isScrolling ? 'opacity-0' : 'opacity-100'}`}>
          SCROLL
        </span>
      </div>

      <Navbar />

      {/* ELEMENTOS DE FUNDO */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full blur-[140px] bg-[#3156A3]/10 opacity-40 transition-transform duration-700 ease-out"
          style={{ transform: `translate(${20 + scrollY * 0.02}%, ${-10 + scrollY * -0.05}%)` }}
        />
      </div>

      <main className="relative z-10">
        <section id="inicio" className="relative pt-40 pb-20 px-4 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16">
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
              <div className="inline-flex items-center gap-3 bg-white border border-slate-200 text-[#3156A3] px-5 py-2 rounded-full text-sm font-bold shadow-sm">
                <Sparkles className="w-4 h-4 text-[#00A89F]" />
                Marketing Médico em Barcelona
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight text-[#3156A3]">
                Marketing Médico <br/>
                <span className="bg-gradient-to-r from-[#3156A3] to-[#00A89F] bg-clip-text text-transparent">estratégico e ético</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl border-l-4 border-[#00A89F] pl-6">
                Construímos posicionamento sólido para clínicas com foco em resultados reais.
              </p>
              <button className="bg-[#3156A3] text-white px-8 py-5 rounded-2xl font-bold flex items-center hover:scale-105 transition-transform">
                Análise Gratuita <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            
            <div className="hidden lg:flex items-center justify-center">
               <div className="bg-[#3156A3] p-16 rounded-[4rem] text-white text-center shadow-2xl">
                  <Award size={64} className="mx-auto mb-6 text-[#00A89F]" />
                  <p className="text-7xl font-black">+340%</p>
                  <p className="text-blue-100">Crescimento Anual</p>
               </div>
            </div>
          </div>
        </section>

        {/* Seção extra para permitir o scroll */}
        <section id="servicios" className="py-32 bg-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="p-10 bg-[#F8F9FB] rounded-[2rem] border border-slate-100">
                <s.icon className="text-[#3156A3] mb-6" size={40} />
                <h3 className="text-2xl font-bold text-[#3156A3] mb-4">{s.title}</h3>
                <p className="text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-20 bg-white border-t text-center">
        <p className="font-black text-[#3156A3]">Betterfly Media © 2026</p>
      </footer>
    </div>
  );
};

export default App;
