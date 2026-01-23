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

// Navbar integrada para evitar erros de importação
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

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
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

  const services: ServiceItem[] = [
    { icon: Search, title: "SEO Médico", desc: "Apareça quando o paciente busca por tratamentos no Google em Barcelona." },
    { icon: MousePointer2, title: "Gestão de Autoridade", desc: "Transformamos seu CRM em conteúdo estratégico que gera admiração." },
    { icon: HeartPulse, title: "Ads Éticos", desc: "Campanhas de conversão focadas em agendamentos reais e qualificados." }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-slate-900 selection:bg-[#3156A3]/10 selection:text-[#3156A3] relative overflow-x-hidden">
      
      {/* 1. O CURSOR (BOLA QUE SEGUE O MOUSE) */}
      <div 
        className="fixed top-0 left-0 w-20 h-20 bg-black rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
        style={{
          // O segredo do efeito Invbit: translate3d para performance e transition para o atraso suave
          transform: `translate3d(${mousePos.x - 40}px, ${mousePos.y - 40}px, 0)`,
          transition: 'transform 0.15s ease-out' 
        }}
      >
        <span className="text-[10px] text-white font-bold tracking-[0.2em]">SCROLL</span>
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
        {/* HERO */}
        <section id="inicio" className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 min-h-[95vh] flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                  Construímos posicionamento sólido para clínicas, gerando 
                  <span className="text-[#3156A3] font-bold"> confiança e crescimento sustentável</span>.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="bg-[#3156A3] hover:bg-[#25417b] text-white px-8 py-5 rounded-2xl font-bold flex items-center transition-all transform hover:scale-105 shadow-xl shadow-[#3156A3]/20">
                    Análise Gratuita <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <button className="bg-white border-2 border-slate-200 hover:border-[#3156A3] hover:text-[#3156A3] text-slate-600 px-8 py-5 rounded-2xl font-bold transition-all">
                    Ver Casos
                  </button>
                </div>
              </div>

              {/* CARD DE RESULTADOS */}
              <div className="hidden lg:block relative animate-in zoom-in duration-1000 delay-200">
                <div className="bg-gradient-to-br from-[#3156A3] to-[#1e3a7a] p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden text-center text-white border border-white/10">
                  <div className="mb-8 inline-flex p-5 bg-white/10 rounded-[2rem] backdrop-blur-xl">
                    <Award size={48} className="text-[#00A89F]" />
                  </div>
                  <p className="text-8xl font-black mb-4 tracking-tighter">+340%</p>
                  <p className="text-blue-100/90 text-xl font-medium max-w-[250px] mx-auto">Crescimento médio em faturamento anual</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicios" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-[#00A89F] font-bold uppercase tracking-[0.2em] text-sm">Nossas Soluções</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-[#3156A3]">Especialidades que dominamos</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div key={i} className="bg-[#F8F9FB] p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group hover:-translate-y-2 duration-300">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#3156A3] transition-colors shadow-sm">
                    <service.icon size={32} className="text-[#3156A3] group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#3156A3]">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-20 bg-white border-t border-slate-100 text-center">
        <p className="font-black text-2xl text-[#3156A3] mb-4">Betterfly Media</p>
        <p className="text-slate-500">© 2026 Feito com ❤️ em Barcelona.</p>
      </footer>
    </div>
  );
};

export default App;
