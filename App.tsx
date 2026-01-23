import React, { useEffect, useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  Award, 
  MessageCircle,
  ChevronDown,
  Star,
  Search,
  MousePointer2,
  HeartPulse,
  LucideIcon // Adicionado para tipagem
} from 'lucide-react';
import Navbar from './components/Navbar';

// Interface para garantir que os ícones funcionem corretamente com TS
interface ServiceItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup funcional
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqData = [
    { q: "¿Es ético hacer publicidad médica?", a: "Absolutamente. Seguimos todas las normativas del sector en Barcelona, enfocándonos en información útil y profesionalismo." },
    { q: "¿Cuánto tiempo tardan en verse los resultados?", a: "Las campañas de Ads generan tráfico inmediato. El posicionamiento orgánico (SEO) suele dar frutos sólidos entre 3 y 6 meses." },
    { q: "¿Trabajan con todas las especialidades?", a: "Sí, aunque estamos especializados en Odontología estética, Cirugía, Dermatología y clínicas de bienestar premium." }
  ];

  const services: ServiceItem[] = [
    { icon: Search, title: "SEO Médico", desc: "Apareça quando o paciente busca por tratamentos no Google em Barcelona." },
    { icon: MousePointer2, title: "Gestão de Autoridade", desc: "Transformamos seu CRM em conteúdo estratégico que gera admiração." },
    { icon: HeartPulse, title: "Ads Éticos", desc: "Campanhas de conversão focadas em agendamentos reais e qualificados." }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-slate-900 selection:bg-[#3156A3]/10 selection:text-[#3156A3]">
      
      <Navbar />

      {/* ELEMENTOS DE FUNDO (Efeito Parallax) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full blur-[140px] bg-[#3156A3]/10 opacity-40 transition-transform duration-700 ease-out"
          style={{ transform: `translate(${20 + scrollY * 0.02}%, ${-10 + scrollY * -0.05}%)` }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] bg-[#00A89F]/10 opacity-30 bottom-0 left-0 transition-transform duration-700 ease-out"
          style={{ transform: `translate(-20%, ${50 + scrollY * 0.05}%)` }}
        />
      </div>

      {/* HERO SECTION */}
      <section id="inicio" className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 min-h-[95vh] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-3 bg-white border border-slate-200 text-[#3156A3] px-5 py-2 rounded-full text-sm font-bold shadow-sm">
                <Sparkles className="w-4 h-4 text-[#00A89F]" />
                Estúdio de Marketing em Barcelona
              </div>

              <h1 className="text-5xl lg:text-7xl font-black leading-tight text-[#3156A3]">
                Marketing Médico <br/>
                <span className="bg-gradient-to-r from-[#3156A3] to-[#00A89F] bg-clip-text text-transparent">estratégico e ético</span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-xl border-l-4 border-[#00A89F] pl-6">
                Construímos posicionamento sólido para clínicas e profissionais, gerando 
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

              {/* Prova Social */}
              <div className="flex items-center gap-6 pt-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 shadow-sm overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="doctor" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-400 mb-1">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-sm font-bold text-[#3156A3]">Referência para +50 clínicas</p>
                </div>
              </div>
            </div>

            {/* Card de Destaque Estatístico */}
            <div className="hidden lg:block relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-[#3156A3] to-[#1e3a7a] p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden group border border-white/10">
                <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <TrendingUp size={160} className="text-white" />
                </div>
                
                <div className="relative z-10 text-center text-white">
                  <div className="mb-8 inline-flex p-5 bg-white/10 rounded-[2rem] backdrop-blur-xl border border-white/10">
                    <Award size={48} className="text-[#00A89F]" />
                  </div>
                  <p className="text-8xl font-black mb-4 tracking-tighter">+340%</p>
                  <p className="text-blue-100/90 text-xl font-medium max-w-[300px] mx-auto leading-relaxed">Crescimento médio em faturamento anual</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicios" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-20 space-y-4 max-w-3xl mx-auto">
            <h2 className="text-[#00A89F] font-bold uppercase tracking-[0.2em] text-sm text-center">Nossas Soluções</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-[#3156A3] text-center">
              Especialidades que <span className="text-[#00A89F]">dominamos</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
              {services.map((service, i) => (
                <div key={i} className="bg-[#F8F9FB] p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:border-[#00A89F]/30 transition-all text-left group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#3156A3] shadow-sm transition-all duration-500">
                    <span className="text-[#3156A3] group-hover:text-white">
                      <service.icon size={32} />
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#3156A3]">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">{service.desc}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-[#F8F9FB]">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-4xl font-black text-[#3156A3] text-center mb-12">Preguntas Frecuentes</h3>
          <div className="space-y-4">
            {faqData.map((item, i) => (
              <div key={i} className="border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 flex justify-between items-center text-left font-bold text-[#3156A3] hover:bg-slate-50 transition-colors"
                >
                  {item.q}
                  <ChevronDown className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="p-6 pt-0 text-slate-500 leading-relaxed bg-slate-50/50 animate-accordion-down">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contacto" className="py-24 px-4">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#3156A3] to-[#1e3a7a] rounded-[3.5rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl border border-white/10">
          <div className="relative z-10 space-y-10 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-black leading-tight">¿Pronto para elevar o padrão da sua <span className="text-[#00A89F]">Clínica</span>?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <button className="bg-[#00A89F] hover:bg-[#008f88] text-white px-12 py-6 rounded-2xl font-black text-lg transition-all shadow-2xl flex items-center justify-center transform hover:scale-105">
                <MessageCircle className="mr-3" /> Falar via WhatsApp
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white/20 px-12 py-6 rounded-2xl font-black text-lg transition-all">
                Solicitar Diagnóstico
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="space-y-4 text-center md:text-left">
              <span className="text-3xl font-black text-[#3156A3]">Betterfly <span className="text-[#00A89F]">Media</span></span>
              <p className="text-slate-500">Estúdio boutique especializado em marketing médico em Barcelona.</p>
            </div>
            <div className="flex gap-8 font-bold text-[#3156A3]">
              <a href="#inicio" className="hover:text-[#00A89F] transition-colors">Início</a>
              <a href="#servicios" className="hover:text-[#00A89F] transition-colors">Serviços</a>
              <a href="#contacto" className="hover:text-[#00A89F] transition-colors">Contato</a>
            </div>
          </div>
          <div className="pt-12 mt-12 border-t border-slate-100 text-center text-slate-400 text-sm">
            © 2026 Betterfly Media. Feito em Barcelona.
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a 
        href="https://wa.me/seunumerodecelular" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>
    </div>
  );
};

export default App;
