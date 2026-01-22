import React, { useEffect, useState } from 'react';
import { Sparkles, Zap, ArrowRight, CheckCircle2, TrendingUp, Users } from 'lucide-react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-500">
      
      {/* CSS INTERNO PARA AS ANIMAÇÕES (Garante que funcione sem plugins) */}
      <style>{`
        @keyframes revealUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-reveal {
          animation: revealUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
      `}</style>

      {/* ELEMENTOS DE FUNDO (PARALLAX) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] bg-blue-100 opacity-60"
          style={{
            transform: `translateY(${scrollY * -0.2}px) translateX(20%)`,
            top: '10%',
            right: '0'
          }}
        />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full relative z-10 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-100 text-blue-600 px-5 py-2 rounded-full text-sm font-bold opacity-0 animate-reveal">
                <Sparkles className="w-4 h-4" />
                Estúdio de Marketing em Barcelona
              </div>

              {/* TÍTULO COM EFEITO LETREIRO */}
              <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900">
                <span className="block overflow-hidden">
                  <span className="block opacity-0 animate-reveal delay-1">
                    Marketing Médico
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="block opacity-0 animate-reveal delay-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    estratégico e ético
                  </span>
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-xl opacity-0 animate-reveal delay-2">
                Construímos posicionamento sólido para clínicas e profissionais, gerando 
                <span className="text-blue-600 font-bold"> confiança e crescimento sustentável</span>.
              </p>

              <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-reveal delay-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center transition-all shadow-lg shadow-blue-200">
                  Análise Gratuita <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-600 px-8 py-4 rounded-xl font-bold transition-all">
                  Ver Casos
                </button>
              </div>
            </div>

            {/* CARD DE IMPACTO */}
            <div className="hidden lg:block relative opacity-0 animate-reveal delay-2">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                <div className="relative z-10 text-center text-white">
                  <p className="text-7xl font-black mb-2">+340%</p>
                  <p className="text-blue-10/80 text-xl font-medium">Aumento médio de pacientes</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO DE SERVIÇOS */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-16 text-slate-900">
            Nossas <span className="text-blue-600">Especialidades</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <Zap className="text-blue-600 w-10 h-10 mb-6" />
                <h3 className="text-xl font-bold mb-4">SEO Médico</h3>
                <p className="text-slate-600 leading-relaxed">Fique no topo das buscas do Google.</p>
             </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <Users className="text-blue-600 w-10 h-10 mb-6" />
                <h3 className="text-xl font-bold mb-4">Autoridade Digital</h3>
                <p className="text-slate-600 leading-relaxed">Gere confiança absoluta no seu paciente.</p>
             </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <CheckCircle2 className="text-blue-600 w-10 h-10 mb-6" />
                <h3 className="text-xl font-bold mb-4">Anúncios Éticos</h3>
                <p className="text-slate-600 leading-relaxed">Campanhas focadas em conversão real.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
