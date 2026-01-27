import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from './components/SEO';
import { 
  Sparkles, ArrowRight, Instagram, Facebook, Linkedin, 
  Award, Bot, Cog, Calendar, MessageSquare, Workflow, Target, Star
} from 'lucide-react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Chatbot from './components/Chatbot/Chatbot';

export default function Index() {
  const [offset, setOffset] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);

    const ctx = gsap.context(() => {
      // 1. Entrada da Hero Section
      const heroTl = gsap.timeline();
      heroTl.from(".hero-badge", { opacity: 0, y: -20, duration: 0.6 })
            .from(".hero-title", { opacity: 0, y: 50, duration: 1 }, "-=0.3")
            .from(".hero-subtitle", { opacity: 0, y: 50, duration: 1 }, "-=0.7")
            .from(".hero-button", { opacity: 0, y: 30, duration: 1 }, "-=0.7")
            .from(".hero-sphere-container", { opacity: 0, scale: 0.5, duration: 1.5, ease: "power2.out" }, "-=1");

      // 2. GIRO VERTICAL (Eixo Y) + FLUTUAÇÃO
      if (sphereRef.current) {
        // Giro Vertical infinito
        gsap.to(sphereRef.current, {
          rotationY: 360,
          duration: 15,
          repeat: -1,
          ease: "none"
        });

        // Flutuação suave (Sobe e desce)
        gsap.to(sphereRef.current, {
          y: -15,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        });
      }

      // Animação de cards ao scroll
      gsap.utils.toArray('.service-card').forEach((card: any) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 85%" },
          opacity: 0, y: 50, duration: 1, ease: "power3.out"
        });
      });
    }, mainRef);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  // ... (Dados socialServices, automations, reviews mantidos iguais)

  return (
    <div ref={mainRef} className="min-h-screen bg-[#F5F5F5] text-[#0A1738] relative overflow-hidden font-['Poppins']">
      
      {/* BACKGROUND DOTS */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 w-full h-full opacity-[0.40]"
          style={{
            backgroundImage: `radial-gradient(#0DBAAC 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to bottom, black 50%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent)'
          }}
        />
      </div>

      <main className="relative z-10">
        <section className="pt-24 pb-12 px-6 min-h-[90vh] lg:h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-8">
              <div className="hero-badge inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-slate-200 text-[#0A1738] px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                <Sparkles size={14} className="text-[#0DBAAC]" /> Marketing Médico en Barcelona
              </div>
              <h1 className="hero-title text-5xl lg:text-7xl font-bold text-[#0A1738] tracking-tight leading-[1.1]">
                Estratégias de <br/> marketing digital <br/>
                <span className="font-light italic text-[#0DBAAC] text-4xl lg:text-6xl lowercase">Barcelona</span>
              </h1>
              <p className="hero-subtitle text-lg md:text-xl text-slate-500 border-l-2 border-[#0DBAAC] pl-6 max-w-md leading-relaxed">
                Marketing de alto nivel para especialistas que <span className="text-[#0A1738] font-medium">desean aumentar la visibilidad y las citas de su clínica.</span>
              </p>
              <div className="hero-button">
                <Link to="/contacto" className="inline-flex bg-[#0DBAAC] text-white px-10 py-5 rounded-2xl font-bold items-center hover:bg-[#0a8d82] transition-all shadow-xl shadow-[#0DBAAC]/20">
                  Análisis Gratuito <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>

            {/* ESFERA DE VÍDEO SEM BORDAS E COM GIRO VERTICAL */}
            <div className="hero-sphere-container relative w-full flex justify-center items-center perspective-[1000px]">
              
              {/* Aura de luz atrás da esfera */}
              <div className="absolute w-[400px] h-[400px] bg-[#0DBAAC]/20 blur-[100px] rounded-full"></div>
              
              <div 
                ref={sphereRef}
                className="relative w-[450px] h-[450px] rounded-full overflow-hidden shadow-[0_0_50px_rgba(13,186,172,0.15)] bg-transparent"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <video 
                  autoPlay muted loop playsInline 
                  className="w-full h-full object-cover scale-105"
                >
                  <source src="https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/video.mp4" type="video/mp4" />
                </video>

                {/* Camada de brilho fixo para simular reflexo de vidro externo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none"></div>
                
                {/* Sombra interna para dar volume esférico */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(0,0,0,0.1)] pointer-events-none"></div>
              </div>
            </div>

          </div>
        </section>

        {/* Mantenha as seções abaixo (Barcelona, Social, etc.) conforme o código anterior */}
        {/* ... */}
        
        <Chatbot />
      </main>
    </div>
  );
}
