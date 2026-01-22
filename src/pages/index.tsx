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
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-100 text-blue-600 px-5 py-2 rounded-full text-sm font-bold animate-in fade-in zoom-in duration-700">
                <Sparkles className="w-4 h-4" />
                Estúdio de Marketing em Barcelona
              </div>

              {/* TÍTULO COM EFEITO DE REVELAÇÃO (LETREIRO) */}
              <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900">
                <span className="block overflow-hidden">
                  <span className="block animate-in slide-in-from-top-full duration-1000 ease-in-out">
                    Marketing Médico
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent animate-in slide-in-from-bottom-full duration-1000 delay-300 ease-in-out">
                    estratégico e ético
                  </span>
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                Construímos posicionamento sólido para clínicas e profissionais, gerando 
                <span className="text-blue-600 font-bold"> confiança e crescimento sustentável</span>.
              </p>

              <div className="flex flex-wrap gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center transition-all transform hover:scale-105 shadow-lg shadow-blue-200">
                  Análise Gratuita <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-600 px-8 py-4 rounded-xl font-bold transition-all">
                  Ver Casos
                </button>
              </div>
            </div>

            {/* CARD DE IMPACTO LADO DIREITO */}
            <div className="hidden lg:block relative animate-in fade-in zoom-in duration-1000 delay-300">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                  <TrendingUp size={120} />
                </div>
                <div className="relative z-10 text-center text-white">
                  <p className="text-7xl font-black mb-2">+340%</p>
                  <p className="text-blue-10/80 text-xl font-medium">Aumento médio de novos pacientes</p>
                  <div className="mt-8 flex justify-center gap-4">
                    <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-md">
                      <p className="text-xs uppercase tracking-wider opacity-70">Confiança</p>
                      <p className="font-bold">100% Ético</p>
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-md">
                      <p className="text-xs uppercase tracking-wider opacity-70">Retorno</p>
                      <p className="font-bold">ROI Garantido</p>
                    </div>
                  </div>
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
            Especialidades que <span className="text-blue-600">dominamos</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all text-left group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Zap className="text-blue-600 group-hover:text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">SEO Médico</h3>
                <p className="text-slate-600 leading-relaxed">Fique no topo das buscas do Google quando o paciente precisar da sua especialidade.</p>
             </div>

             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all text-left group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Users className="text-blue-600 group-hover:text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">Gestão de Autoridade</h3>
                <p className="text-slate-600 leading-relaxed">Transformamos seu conhecimento em conteúdo que gera desejo e confiança imediata.</p>
             </div>

             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all text-left group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <CheckCircle2 className="text-blue-600 group-hover:text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">Anúncios Éticos</h3>
                <p className="text-slate-600 leading-relaxed">Campanhas focadas em conversão, respeitando todas as normas do conselho de saúde.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
