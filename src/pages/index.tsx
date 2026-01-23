
import React, { useEffect, useState } from 'react';
import { 
  Sparkles, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Award, 
  MousePointer2, 
  MessageCircle,
  ShieldCheck,
  Stethoscope
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

      {/* ELEMENTOS DE FUNDO (PARALLAX MELHORADO) */}
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

      {/* HERO SECTION - ESTRUTURA ORIGINAL */}
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

              {/* Prova social rápida */}
              <div className="flex items-center gap-4 pt-6 text-slate-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                  ))}
                </div>
                <span className="text-sm font-medium italic">+50 Clínicas em Barcelona confiam em nós</span>
              </div>
            </div>

            {/* CARD DE IMPACTO LADO DIREITO - DESIGN PREMIUM */}
            <div className="hidden lg:block relative animate-in fade-in zoom-in duration-1000 delay-300">
              <div className="bg-gradient-to-br from-[#3156A3] to-[#1e3a7a] p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group border border-white/10">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00A89F] opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                
                <div className="relative z-10 text-center text-white">
                  <div className="mb-6 inline-flex p-4 bg-white/10 rounded-3xl backdrop-blur-xl border border-white/10">
                    <TrendingUp size={48} className="text-[#00A89F]" />
                  </div>
                  <p className="text-8xl font-black mb-4 tracking-tighter">+340%</p>
                  <p className="text-blue-100/90 text-xl font-medium max-w-[280px] mx-auto">Aumento médio de novos pacientes</p>
                  
                  <div className="mt-12 grid grid-cols-2 gap-4">
                    <div className="bg-white/5 px-6 py-4 rounded-3xl backdrop-blur-md border border-white/5 hover:bg-white/10 transition-colors">
                      <ShieldCheck className="w-6 h-6 mx-auto mb-2 text-[#00A89F]" />
                      <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Confiança</p>
                      <p className="font-bold text-sm">100% Ético</p>
                    </div>
                    <div className="bg-white/5 px-6 py-4 rounded-3xl backdrop-blur-md border border-white/5 hover:bg-white/10 transition-colors">
                      <Award className="w-6 h-6 mx-auto mb-2 text-[#00A89F]" />
                      <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Retorno</p>
                      <p className="font-bold text-sm">ROI Garantido</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos flutuantes */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce">
                <Stethoscope className="text-[#00A89F]" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO DE SERVIÇOS - ESTRUTURA ORIGINAL */}
      <section id="servicios" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-20 space-y-4">
            <h2 className="text-[#00A89F] font-bold uppercase tracking-[0.2em] text-sm">Nossas Especialidades</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-[#3156A3]">
              Especialidades que <span className="text-[#00A89F]">dominamos</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-[#F8F9FB] p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:border-[#00A89F]/30 transition-all text-left group hover:-translate-y-2">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#3156A3] shadow-sm transition-all duration-500">
                  <Zap className="text-[#3156A3] group-hover:text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#3156A3]">SEO Médico</h3>
                <p className="text-slate-500 leading-relaxed font-medium">Fique no topo das buscas do Google quando o paciente precisar da sua especialidade em Barcelona.</p>
                <div className="mt-8 flex items-center gap-2 text-[#00A89F] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Saber mais <ArrowRight size={16} />
                </div>
             </div>

             <div className="bg-[#F8F9FB] p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:border-[#00A89F]/30 transition-all text-left group hover:-translate-y-2">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#3156A3] shadow-sm transition-all duration-500">
                  <Users className="text-[#3156A3] group-hover:text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#3156A3]">Gestão de Autoridade</h3>
                <p className="text-slate-500 leading-relaxed font-medium">Transformamos seu conhecimento em conteúdo estratégico que gera desejo e confiança imediata.</p>
                <div className="mt-8 flex items-center gap-2 text-[#00A89F] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Saber mais <ArrowRight size={16} />
                </div>
             </div>

             <div className="bg-[#F8F9FB] p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:border-[#00A89F]/30 transition-all text-left group hover:-translate-y-2">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#3156A3] shadow-sm transition-all duration-500">
                  <CheckCircle2 className="text-[#3156A3] group-hover:text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#3156A3]">Anúncios Éticos</h3>
                <p className="text-slate-500 leading-relaxed font-medium">Campanhas focadas em conversão direta, respeitando rigorosamente as normas do conselho de saúde.</p>
                <div className="mt-8 flex items-center gap-2 text-[#00A89F] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Saber mais <ArrowRight size={16} />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO "POR QUE BETTERFLY" - PARA COMPLETAR O SITE */}
      <section className="py-32 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-video bg-[#3156A3] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" 
                  alt="Doctor with tablet" 
                  className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#00A89F] text-white p-8 rounded-3xl shadow-2xl max-w-xs animate-pulse">
                <p className="text-3xl font-black mb-2">10+ Anos</p>
                <p className="text-sm font-medium opacity-90">De experiência exclusiva no setor médico e saúde.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-[#3156A3] leading-tight">Por que escolher o nosso <span className="text-[#00A89F]">Estúdio Médico</span>?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Diferente de agências genéricas, nós entendemos as restrições éticas e as particularidades da jornada do paciente. 
              </p>
              
              <ul className="space-y-4">
                {[
                  "Conformidade total com as leis de ética médica.",
                  "Foco em pacientes de alto valor (High-Ticket).",
                  "Relatórios mensais de ROI e novos agendamentos.",
                  "Suporte personalizado via WhatsApp."
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00A89F]/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-[#00A89F]" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
              
              <div className="pt-6">
                <button className="bg-[#3156A3] text-white px-8 py-4 rounded-xl font-bold flex items-center hover:bg-[#25417b] transition-all">
                  Descubra nossa metodologia <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL - PARA CONVERSÃO */}
      <section id="contacto" className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#3156A3] to-[#1e3a7a] rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
          </div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-black">¿Preparado para ser la <span className="text-[#00A89F]">referencia</span> de su sector?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Agende agora uma consultoria estratégica gratuita e receba um diagnóstico completo do seu posicionamento digital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="bg-[#00A89F] hover:bg-[#008f88] text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl flex items-center justify-center">
                <MessageCircle className="mr-2" /> Hablar por WhatsApp
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center">
                Solicitar Diagnóstico
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER COMPLETO */}
      <footer className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#3156A3] rounded-lg flex items-center justify-center text-white font-black text-xl italic">B</div>
                <span className="text-2xl font-black text-[#3156A3]">Betterfly <span className="text-[#00A89F]">Media</span></span>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed">
                Estúdio especializado em marketing médico e odontológico de alto padrão em Barcelona. Estratégia, ética e resultados exponenciais.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-[#3156A3] mb-6">Links Rápidos</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li><a href="#inicio" className="hover:text-[#00A89F] transition-colors">Início</a></li>
                <li><a href="#servicios" className="hover:text-[#00A89F] transition-colors">Serviços</a></li>
                <li><a href="#" className="hover:text-[#00A89F] transition-colors">Casos</a></li>
                <li><a href="#contacto" className="hover:text-[#00A89F] transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-[#3156A3] mb-6">Contacto</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li className="flex items-center gap-2"><MessageCircle size={16}/> +34 600 000 000</li>
                <li className="underline">info@betterflymedia.es</li>
                <li>Barcelona, España</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-sm">© 2024 Betterfly Media. Todos los derechos reservados.</p>
            <div className="flex gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <a href="#" className="hover:text-[#3156A3]">Privacidad</a>
              <a href="#" className="hover:text-[#3156A3]">Cookies</a>
              <a href="#" className="hover:text-[#3156A3]">Legal</a>
            </div>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a 
        href="#" 
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce"
        aria-label="WhatsApp"
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>
    </div>
  );
};

export default App;
