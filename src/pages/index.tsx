import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Sparkles, Zap, ArrowRight } from 'lucide-react';

const HealthMarketingLanding = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Betterfly | Marketing Digital para Saúde em Barcelona</title>
      </Helmet>

      {/* bg-background usa o BRANCO do seu CSS */}
      <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
        
        {/* ELEMENTOS DE FUNDO (PARALLAX SUAVE) */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div 
            className="absolute w-[600px] h-[600px] rounded-full blur-[120px] bg-soft-blue opacity-60"
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
              
              <div className="space-y-8 animate-fade-up">
                <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 text-primary px-5 py-2 rounded-full text-sm font-bold">
                  <Sparkles className="w-4 h-4" />
                  Marketing Médico em Barcelona
                </div>

                {/* Usando sua classe text-gradient do Index.css */}
                <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900">
                  Marketing Médico <br/>
                  <span className="text-gradient">estratégico e ético</span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Construímos posicionamento sólido para clínicas, gerando 
                  <span className="text-primary font-bold"> confiança e crescimento sustentável</span>.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="btn-primary">
                    Análise Gratuita <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <button className="btn-outline">Ver Casos</button>
                </div>
              </div>

              {/* LADO DIREITO: Substituímos o vazio por um card de impacto */}
              <div className="hidden lg:block relative">
                <div className="card-gradient p-8 animate-fade-in">
                  <div className="text-center">
                    <p className="text-5xl font-black text-primary">+340%</p>
                    <p className="text-slate-600 font-medium">Aumento médio em conversão</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SEÇÃO DE SERVIÇOS (Exemplo de como continuar o site) */}
        <section className="section-padding bg-white/50 backdrop-blur-sm border-t border-border">
          <div className="container-wide text-center">
            <h2 className="mb-12">Nossos Serviços</h2>
            <div className="grid md:grid-cols-3 gap-8">
               <div className="card-modern">
                  <Zap className="text-primary w-10 h-10 mb-4" />
                  <h3>SEO Médico</h3>
                  <p className="text-muted-foreground">Apareça no topo do Google quando pacientes buscarem sua especialidade.</p>
               </div>
               {/* Adicione mais cards aqui */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HealthMarketingLanding;
