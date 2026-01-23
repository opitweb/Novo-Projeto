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

  const faqData = [
    { q: "¿Es ético hacer publicidad médica?", a: "Absolutamente. Seguimos todas las normativas del sector en Barcelona, enfocándonos en información útil y profesionalismo." },
    { q: "¿Cuánto tempo tardan en verse los resultados?", a: "Las campañas de Ads generan tráfico inmediato. El posicionamiento orgánico (SEO) suele dar frutos sólidos entre 3 y 6 meses." },
    { q: "¿Trabajan con todas las especialidades?", a: "Sí, aunque estamos especializados en Odontología estética, Cirugía, Dermatología y clínicas de bienestar premium." }
  ];

  const services = [
    { icon: Search, title: "SEO Médico", desc: "Apareça quando o paciente busca por tratamentos no Google em Barcelona." },
    { icon: MousePointer2, title: "Gestão de Autoridade", desc: "Transformamos seu CRM em conteúdo estratégico que gera admiração." },
    { icon: HeartPulse, title: "Ads Éticos", desc: "Campanhas de conversão focadas em agendamentos reais e qualificados." }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-slate-900 relative overflow-x-hidden md:cursor-none">
      
      {/* CURSOR DINÂMICO AZUL */}
      <div 
        className={`fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full transition-all duration-300 ease-out shadow-lg
          ${isScrolling ? 'w-4 h-4 bg-[#3156A3]' : 'w-24 h-24 bg-[#3156A3]'}`}
        style={{
          transform: `translate3d(${mousePos.x - (isScrolling ? 8 : 48)}px, ${mousePos.y - (isScrolling ? 8 : 48)}px, 0)`,
          transition: 'transform 0.1s ease-out, width 0.3s, height 0.3s'
        }}
      >
        <span className={`text-[10px] text-white font-bold tracking-widest transition-opacity duration-300 ${isScrolling ? 'opacity-0' : 'opacity-100'}`}>
          SCROLL
        </span>
      </div>

      <Navbar />

      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute w-[800px] h-[800px] rounded-full blur-[140px] bg-[#3156A3]/10 opacity-40"
          style={{ transform: `translate(${20 + scrollY * 0.02}%, ${-10 + scrollY * -0.05}%)` }} />
      </div>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section id="inicio" className="relative pt-40 pb-20 px-4 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 opacity-0 animate-reveal">
              <div className="inline-flex items-center gap-3 bg-white border border-slate-200 text-[#3156A3] px-5 py-2 rounded-full text-sm font-bold">
                <Sparkles className="w-4 h-4 text-[#00A89F]" /> Marketing Médico em Barcelona
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight text-[#3156A3]">
                Marketing Médico <br/>
                <span className="bg-gradient-to-r from-[#3156A3] to-[#00A89F] bg-clip-text text-transparent">estratégico e ético</span>
              </h1>
              <p className="text-xl text-slate-600 border-l-4 border-[#00A89F] pl-6">Construímos posicionamento sólido para clínicas, gerando confiança.</p>
              <div className="flex gap-4">
                <button className="bg-[#3156A3] text-white px-8 py-5 rounded-2xl font-bold flex items-center hover:scale-105 transition-transform shadow-xl shadow-[#3156A3]/20">
                  Análise Gratuita <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="hidden lg:block opacity-0 animate-reveal delay-200 text-center">
               <div className="bg-gradient-to-br from-[#3156A3] to-[#1e3a7a] p-16 rounded-[4rem] text-white shadow-2xl">
                  <Award size={64} className="mx-auto mb-6 text-[#00A89F]" />
                  <p className="text-8xl font-black mb-2 tracking-tighter">+340%</p>
                  <p className="text-blue-100 text-xl">Crescimento Faturamento</p>
               </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicios" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-20">
              <h3 className="text-4xl lg:text-5xl font-black text-[#3156A3]">Especialidades que dominamos</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((s, i) => (
                <div key={i} className="p-10 bg-[#F8F9FB] rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                    <s.icon size={32} className="text-[#3156A3]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#3156A3]">{s.title}</h3>
                  <p className="text-slate-500">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-32 bg-[#F8F9FB]">
          <div className="max-w-3xl mx-auto px-4">
            <h3 className="text-4xl font-black text-[#3156A3] text-center mb-12">Perguntas Frequentes</h3>
            <div className="space-y-4">
              {faqData.map((item, i) => (
                <div key={i} className="border border-slate-200 bg-white rounded-2xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-6 flex justify-between items-center text-left font-bold text-[#3156A3]">
                    {item.q} <ChevronDown className={`transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && <div className="p-6 pt-0 text-slate-500 bg-slate-50">{item.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

       {/* FOOTER ESTILO VOOMA */}
<footer className="bg-[#050505] text-white pt-24 pb-10 px-4 border-t border-white/5">
  <div className="max-w-7xl mx-auto">
    
    {/* PARTE SUPERIOR: GET STARTED */}
    <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
      <div>
        <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">
          Get started today
        </h2>
        <p className="text-gray-400 text-xl max-w-sm">
          Marketing estratégico para médicos que buscam o próximo nível de autoridade.
        </p>
      </div>
      
      <button className="bg-[#ff4d00] hover:bg-[#e64500] text-white px-8 py-4 rounded-full flex items-center gap-4 transition-all group">
        <span className="font-bold uppercase tracking-wider text-sm">Agendar Diagnóstico</span>
        <div className="bg-white/20 p-2 rounded-full group-hover:translate-x-1 transition-transform">
          <ArrowRight size={20} />
        </div>
      </button>
    </div>

    {/* LOGO GIGANTE CENTRAL */}
    <div className="py-20 border-t border-white/10">
      <h1 className="text-[15vw] font-black leading-none tracking-tighter text-white opacity-90">
        betterfly
      </h1>
    </div>

    {/* GRID DE INFORMAÇÕES */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-12 border-t border-white/10 text-sm text-gray-400 uppercase tracking-widest font-medium">
      <div>
        <p className="text-white mb-6">Contact Us</p>
        <p>Barcelona, Espanha</p>
        <p className="mt-2 text-[#00A89F]">hello@betterfly.media</p>
      </div>
      
      <div>
        <p className="text-white mb-6">Stay up to date</p>
        <div className="relative">
          <input 
            type="email" 
            placeholder="Your email" 
            className="bg-transparent border-b border-white/20 w-full py-2 focus:outline-none focus:border-[#00A89F] transition-colors"
          />
          <button className="absolute right-0 top-2 text-white hover:text-[#00A89F]">SUBMIT</button>
        </div>
      </div>
    </div>

    {/* LINKS FINAIS ESTILO TABELA */}
    <div className="flex flex-wrap justify-between gap-4 pt-10 border-t border-white/10 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
      <div className="flex flex-wrap gap-8">
        <a href="#" className="hover:text-white transition-colors">Build</a>
        <a href="#" className="hover:text-white transition-colors">Services</a>
        <a href="#" className="hover:text-white transition-colors">About</a>
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
        <a href="#" className="hover:text-white transition-colors">Terms</a>
      </div>
      <p>© Betterfly Media. All Rights Reserved 2026</p>
    </div>
  </div>
</footer>

export default App;
