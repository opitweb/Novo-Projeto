import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, Award, Instagram, Facebook, Linkedin, 
  TrendingUp, Users, Heart, Globe, Search, Palette, Zap, Monitor, 
  BarChart3, Bot, Workflow, Calendar, MessageSquare, Cog, Clock, 
  Target, Star 
} from 'lucide-react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Index() {
  const [offset, setOffset] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [count, setCount] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);

  // 1. Lógica do Slider (Velocidade aumentada para 3.5s)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 3500); 
    return () => clearInterval(timer);
  }, []);

  // 2. Efeito do Contador Animado (+340%)
  useEffect(() => {
    if (activeSlide === 0) {
      let start = 0;
      const end = 340;
      const duration = 1500; 
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    } else {
      setCount(0); 
    }
  }, [activeSlide]);

  // 3. Animações GSAP e Scroll
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);

    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".hero-badge", { opacity: 0, y: -20, duration: 0.6 })
        .from(".hero-title", { opacity: 0, y: 50, duration: 1 }, "-=0.3")
        .from(".hero-subtitle", { opacity: 0, y: 50, duration: 1 }, "-=0.7")
        .from(".hero-button", { opacity: 0, y: 30, duration: 1 }, "-=0.7")
        .from(".hero-banner", { opacity: 0, scale: 0.8, duration: 1.2, ease: "back.out(1.7)" }, "-=1");

      gsap.utils.toArray('.service-card').forEach((card: any) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 85%" },
          opacity: 0, y: 50, duration: 1, ease: "power3.out"
        });
      });

      gsap.from(".barcelona-content", {
        scrollTrigger: { trigger: ".barcelona-content", start: "top 80%" },
        opacity: 0, x: -50, duration: 1.2, ease: "power2.out"
      });
    }, mainRef);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  // Dados (Mantidos originais)
  const socialServices = [
    { icon: Instagram, title: "Instagram & TikTok", description: "Contenido visual que conecta con pacientes potenciales y genera confianza." },
    { icon: Facebook, title: "Facebook Ads", description: "Campañas segmentadas para captar pacientes cualificados en tu zona." },
    { icon: Linkedin, title: "LinkedIn", description: "Posicionamiento profesional para especialistas y clínicas de referencia." },
  ];

  const socialStats = [
    { icon: Users, value: 200, label: "Alcance Mensual" },
    { icon: Heart, value: 98, label: "Engagement Rate" },
    { icon: TrendingUp, value: 180, label: "Crecimiento Seguidores" },
  ];

  return (
    <div ref={mainRef} className="min-h-screen bg-[#F5F5F5] text-[#0A1738] relative overflow-hidden font-['Poppins']">
      
      {/* BACKGROUND PARALLAX */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute inset-0 w-full h-[200%]"
          style={{
            backgroundImage: `linear-gradient(to right, #0A1738 1px, transparent 1px)`,
            backgroundSize: '80px 100%',
            transform: `translateY(${offset * -0.1}px)`
          }}
        />
      </div>

      <main className="relative z-10">
        
        {/* HERO SECTION */}
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
                <Link to="/contacto" className="inline-flex bg-[#0DBAAC] text-white px-10 py-5 rounded-2xl font-bold items-center hover:bg-[#0a8d82] transition-all shadow-xl shadow-[#0DBAAC]/20 hover:-translate-y-1">
                  Análisis Gratuito <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>

            {/* BANNER DINÂMICO QUADRADO CORRIGIDO */}
            <div className="hero-banner hidden lg:flex justify-end" style={{ transform: `translateY(${offset * 0.05}px)` }}>
              <div className="relative w-[500px] h-[500px] bg-[#0A1738] rounded-[4rem] text-white shadow-2xl overflow-hidden border-8 border-white/50 backdrop-blur-sm flex items-center justify-center">
                
                {/* SLIDE 1: +340% ANIMADO */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center p-12 transition-all duration-700 ${activeSlide === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <Award size={60} className="mb-6 text-[#0DBAAC]" />
                  <p className="text-8xl font-bold mb-2 tracking-tighter">+{count}%</p>
                  <p className="text-[#0DBAAC] text-lg font-medium uppercase tracking-widest text-center leading-tight">Crecimiento en <br/> Facturación</p>
                </div>

                {/* SLIDE 2: FACEBOOK COM FOTO */}
                <div className={`absolute inset-0 transition-all duration-700 ${activeSlide === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                  <img src="/foto-facebook.jpg" alt="Facebook Ads" className="w-full h-full object-cover opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1738] via-transparent to-transparent flex flex-col items-center justify-center p-12">
                    <div className="bg-[#1877F2] p-4 rounded-2xl mb-4 shadow-lg"><Facebook size={40} fill="white" /></div>
                    <h3 className="text-3xl font-bold mb-2">Facebook Ads</h3>
                    <p className="text-center text-slate-200">Resultados reales en campañas.</p>
                  </div>
                </div>

                {/* SLIDE 3: INSTAGRAM COM FOTO */}
                <div className={`absolute inset-0 transition-all duration-700 ${activeSlide === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                  <img src="/foto-instagram.jpg" alt="Instagram Results" className="w-full h-full object-cover opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1738] via-transparent to-transparent flex flex-col items-center justify-center p-12">
                    <div className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-4 rounded-2xl mb-4 shadow-lg"><Instagram size={40} /></div>
                    <h3 className="text-3xl font-bold mb-2">Social Media</h3>
                    <p className="text-center text-slate-200">Autoridad visual para tu clínica.</p>
                  </div>
                </div>

                {/* PONTINHOS */}
                <div className="absolute bottom-10 flex gap-3 z-20">
                  {[0,1,2].map(i => (
                    <div key={i} className={`h-2 rounded-full transition-all duration-500 ${activeSlide === i ? 'w-10 bg-[#0DBAAC]' : 'w-2 bg-white/50'}`} />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SEÇÃO BARCELONA */}
        <section className="py-24 barcelona-content bg-white/40 backdrop-blur-sm border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-[#0A1738] max-w-5xl">
              Atraemos más pacientes a <span className="text-[#0DBAAC]"> tu clínica con </span> estrategias digitales probadas.
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <p className="text-2xl font-semibold text-[#0A1738]">
                En 2010 iniciamos nuestra andadura, <span className="text-[#0DBAAC]">diseñando e innovando</span> desde Barcelona.
              </p>
              <div className="text-slate-500 space-y-6 text-lg">
                <p>Nuestra metodología combina la estética médica con el rigor técnico necesario para convertir visitantes en pacientes.</p>
                <p>Actualmente, trabajamos con clínicas que buscan dar el salto al siguiente nivel de facturación.</p>
              </div>
            </div>
          </div>
        </section>

        {/* RESTANTE DO SITE (REDES SOCIAIS, ETC) */}
        <section className="py-32 bg-[#0A1738] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <span className="text-[#0DBAAC] text-sm font-bold uppercase tracking-widest mb-4 block">Redes Sociales</span>
              <h2 className="text-5xl md:text-7xl font-bold mb-12">Tu presencia que <span className="text-[#0DBAAC]">genera resultados</span></h2>
              <div className="grid md:grid-cols-3 gap-8">
                {socialServices.map((s, i) => (
                  <div key={i} className="bg-white/5 p-10 rounded-3xl border border-white/10 service-card">
                    <s.icon size={40} className="text-[#0DBAAC] mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                    <p className="text-white/70">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
