
import React, { useEffect, useState } from 'react';
import { 
  Sparkles, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Award, 
  MessageCircle,
  ShieldCheck,
  Stethoscope,
  ChevronDown,
  Globe,
  Star
} from 'lucide-react';
import Navbar from './components/Navbar';

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-slate-900 selection:bg-[#3156A3]/10 selection:text-[#3156A3]">
      
      <Navbar />

      {/* ELEMENTOS DE FUNDO DINÂMICOS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full blur-[140px] bg-[#3156A3]/10 opacity-40 transition-transform duration-1000 ease-out"
          style={{ transform: `translate(${20 + scrollY * 0.02}%, ${-10 + scrollY * -0.05}%)` }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] bg-[#00A89F]/10 opacity-30 bottom-0 left-0 transition-transform duration-1000 ease-out"
          style={{ transform: `translate(-20%, ${50 + scrollY * 0.05}%)` }}
        />
      </div>

      {/* HERO SECTION - ESTRUTURA ORIGINAL COMPLETA */}
      <section id="inicio" className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 min-h-[95vh] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
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

            {/* IMPACT CARD - ESTRUTURA ORIGINAL */}
            <div className="hidden lg:block relative animate-in fade-in zoom-in duration-1000 delay-300">
              <div className="bg-gradient-to-br from-[#3156A3] to-[#1e3a7a] p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden group border border-white/10">
                <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <TrendingUp size={160} className="text-white" />
                </div>
                
                <div className="relative z-10 text-center text-white">
                  <div className="mb-8 inline-flex p-5 bg-white/10 rounded-[2rem] backdrop-blur-xl border border-white/10">
                    <Award size={48} className="text-[#00A89F]" />
                  </div>
                  <p className="text-8xl font-black mb-4 tracking-tighter">+340%</p>
                  <p className="text-blue-100/90 text-xl font-medium max-w-[300px] mx-auto leading-relaxed">Aumento médio de novos pacientes e faturamento</p>
                  
                  <div className="mt-12 grid grid-cols-2 gap-4">
                    <div className="bg-white/5 px-6 py-5 rounded-3xl backdrop-blur-md border border-white/5 hover:bg-white/10 transition-all group/card">
                      <ShieldCheck className="w-6 h-6 mx-auto mb-2 text-[#00A89F]" />
                      <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Confiança</p>
                      <p className="font-bold text-sm">100% Ético</p>
                    </div>
                    <div className="bg-white/5 px-6 py-5 rounded-3xl backdrop-blur-md border border-white/5 hover:bg-white/10 transition-all group/card">
                      <Globe className="w-6 h-6 mx-auto mb-2 text-[#00A89F]" />
                      <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Alcance</p>
                      <p className="font-bold text-sm">Google Ads</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Elementos flutuantes decorativos */}
              <div className="absolute -top-6 -left-6 bg-white p-5 rounded-2xl shadow-xl animate-bounce duration-[3000ms]">
                <Stethoscope className="text-[#00A89F] w-8 h-8" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO DE SERVIÇOS - COMPLETA */}
      <section id="servicios" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-20 space-y-4 max-w-3xl mx-auto">
            <h2 className="text-[#00A89F] font-bold uppercase tracking-[0.2em] text-sm">Nossas Soluções</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-[#3156A3]">
              Especialidades que <span className="text-[#00A89F]">dominamos</span>
            </h3>
            <p className="text-slate-500 text-lg">Combinamos ciência de dados com criatividade para atrair os pacientes certos para sua especialidade.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-[#F8F9FB] p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:border-[#00A89F]/30 transition-all text-left group hover:-translate-y-3 duration-500">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#3156A3] shadow-sm transition-all duration-500">
                  <Zap className="text-[#3156A3] group-hover:text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#3156A3]">SEO Médico</h3>
                <p className="text-slate-500 leading-relaxed font-medium">Fique no topo das buscas orgânicas quando o paciente estiver procurando por tratamentos específicos.</p>
                <div className="mt-8 h-1 w-12 bg-[#00A89F] group-hover:w-full transition-all duration-500"></div>
             </div>

             <div className="bg-[#F8F9FB] p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:border-[#00A89F]/30 transition-all text-left group hover:-translate-y-3 duration-500">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#3156A3] shadow-sm transition-all duration-500">
                  <Users className="text-[#3156A3] group-hover:text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#3156A3]">Gestão de Autoridade</h3>
                <p className="text-slate-500 leading-relaxed font-medium">Transformamos seu conhecimento técnico em conteúdo estratégico que constrói admiração.</p>
                <div className="mt-8 h-1 w-12 bg-[#00A89F] group-hover:w-full transition-all duration-500"></div>
             </div>

             <div className="bg-[#F8F9FB] p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:border-[#00A89F]/30 transition-all text-left group hover:-translate-y-3 duration-500">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#3156A3] shadow-sm transition-all duration-500">
                  <CheckCircle2 className="text-[#3156A3] group-hover:text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#3156A3]">Anúncios Éticos</h3>
                <p className="text-slate-500 leading-relaxed font-medium">Campanhas focadas em conversão, respeitando rigorosamente as normas éticas de Barcelona.</p>
                <div className="mt-8 h-1 w-12 bg-[#00A89F] group-hover:w-full transition-all duration-500"></div>
             </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO "POR QUE NÓS" - EXPANDIDA */}
      <section className="py-32 bg-[#F8F9FB] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative z-10 aspect-[4/5] bg-[#3156A3] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800" 
                  alt="Doctor Expert" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 bg-white p-10 rounded-[2.5rem] shadow-2xl max-w-xs border border-slate-100">
                <div className="bg-[#00A89F]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="text-[#00A89F]" />
                </div>
                <p className="text-4xl font-black text-[#3156A3] mb-2">+10 Anos</p>
                <p className="text-slate-500 font-bold leading-tight">De experiência focada exclusivamente no mercado médico.</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-black text-[#3156A3] leading-tight">
                Entendemos que saúde é <span className="text-[#00A89F]">diferente</span> de varejo.
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Não somos apenas uma agência. Somos um estúdio estratégico que fala a língua da medicina, respeitando a sensibilidade do paciente.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Estratégia sob medida", desc: "Cada especialidade tem uma jornada de decisão única." },
                  { title: "Foco em Pacientes High-Ticket", desc: "Atraímos quem valoriza a sua expertise, não o preço." },
                  { title: "Ética Inegociável", desc: "Todas as ações respeitam as normas do setor em Barcelona." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1 w-6 h-6 rounded-full bg-[#00A89F] flex-shrink-0 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#3156A3] text-lg">{item.title}</h4>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-8">
                <button className="bg-[#3156A3] text-white px-10 py-5 rounded-2xl font-bold flex items-center hover:bg-[#25417b] transition-all shadow-xl shadow-[#3156A3]/20">
                  Nossa Metodologia <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL - DESIGN IMPACTANTE */}
      <section id="contacto" className="py-24 px-4">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#3156A3] to-[#1e3a7a] rounded-[3.5rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <svg width="100%" height="100%"><pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid-pattern)" /></svg>
          </div>
          
          <div className="relative z-10 space-y-10 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-black leading-tight">¿Pronto para elevar o padrão da sua <span className="text-[#00A89F]">Clínica</span>?</h2>
            <p className="text-xl lg:text-2xl text-blue-100/80 leading-relaxed">
              Agende agora uma consultoria estratégica gratuita e descubra o potencial real de crescimento digital da sua especialidade em Barcelona.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <button className="bg-[#00A89F] hover:bg-[#008f88] text-white px-12 py-6 rounded-2xl font-black text-lg transition-all shadow-2xl flex items-center justify-center transform hover:scale-105">
                <MessageCircle className="mr-3" /> Falar via WhatsApp
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white/20 px-12 py-6 rounded-2xl font-black text-lg transition-all flex items-center justify-center">
                Solicitar Diagnóstico
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - COMPLETO */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#3156A3] rounded-xl flex items-center justify-center text-white font-black text-2xl italic shadow-lg shadow-[#3156A3]/20">B</div>
                <span className="text-3xl font-black text-[#3156A3]">Betterfly <span className="text-[#00A89F]">Media</span></span>
              </div>
              <p className="text-slate-500 max-w-sm text-lg leading-relaxed">
                Estúdio boutique especializado em marketing médico e odontológico. Criamos autoridade, geramos confiança e entregamos resultados exponenciais.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-[#3156A3] mb-8 text-lg uppercase tracking-widest">Navegação</h4>
              <ul className="space-y-4 text-slate-500 font-bold">
                <li><a href="#inicio" className="hover:text-[#00A89F] transition-colors">Início</a></li>
                <li><a href="#servicios" className="hover:text-[#00A89F] transition-colors">Serviços</a></li>
                <li><a href="#" className="hover:text-[#00A89F] transition-colors">Cases de Sucesso</a></li>
                <li><a href="#contacto" className="hover:text-[#00A89F] transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-[#3156A3] mb-8 text-lg uppercase tracking-widest">Contato</h4>
              <ul className="space-y-4 text-slate-500 font-bold">
                <li className="flex items-center gap-3"><MessageCircle size={18} className="text-[#00A89F]"/> +34 600 000 000</li>
                <li className="flex items-center gap-3"><Globe size={18} className="text-[#00A89F]"/> Barcelona, España</li>
                <li className="text-[#3156A3] underline">info@betterflymedia.es</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-slate-400 text-sm font-medium italic">© 2024 Betterfly Media. Feito com paixão em Barcelona.</p>
            <div className="flex gap-10 text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
              <a href="#" className="hover:text-[#3156A3] transition-colors">Privacidade</a>
              <a href="#" className="hover:text-[#3156A3] transition-colors">Cookies</a>
              <a href="#" className="hover:text-[#3156A3] transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTION BUTTON */}
      <a 
        href="#" 
        className="fixed bottom-10 right-10 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all animate-bounce"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>
    </div>
  );
};

export default App;
