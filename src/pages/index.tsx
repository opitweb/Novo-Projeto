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
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* ELEMENTOS DE FUNDO */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] bg-blue-100 opacity-60 transition-transform duration-700"
          style={{ transform: `translateY(${scrollY * -0.2}px) translateX(20%)` }}
        />
      </div>

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-8">
              {/* Badge com animação nativa de pulso */}
              <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-100 text-blue-600 px-5 py-2 rounded-full text-sm font-bold animate-pulse">
                <Sparkles className="w-4 h-4" />
                Estúdio de Marketing em Barcelona
              </div>

              {/* TÍTULO - Usando transições de entrada nativas do Tailwind/Vite */}
              <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900 transition-all duration-1000 transform translate-y-0 opacity-100">
                <span className="block mb-2">
                  Marketing Médico
                </span>
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  estratégico e ético
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-xl border-l-4 border-blue-100 pl-6">
                Construímos posicionamento sólido para clínicas e profissionais, gerando 
                <span className="text-blue-600 font-bold"> confiança e crescimento sustentável</span>.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center transition-all hover:shadow-xl shadow-blue-200">
                  Análise Gratuita <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-600 px-8 py-4 rounded-xl font-bold transition-all">
                  Ver Casos
                </button>
              </div>
            </div>

            {/* CARD DIREITO - Otimizado para não quebrar o layout */}
            <div className="hidden lg:block relative group">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 rounded-[2rem] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                <div className="text-center text-white">
                  <TrendingUp className="mx-auto mb-6 opacity-50" size={64} />
                  <p className="text-7xl font-black mb-2">+340%</p>
                  <p className="text-blue-100 text-xl font-medium">Crescimento médio</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO DE SERVIÇOS - Simples e Funcional */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16 text-slate-900">Nossas Soluções</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
             {[
               { title: "SEO Médico", icon: <Zap /> },
               { title: "Autoridade", icon: <Users /> },
               { title: "Ads Ético", icon: <CheckCircle2 /> }
             ].map((item, i) => (
               <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-300 transition-colors">
                  <div className="text-blue-600 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-600">Estratégias validadas para o mercado de saúde em Barcelona.</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
