import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from './components/SEO';
import { 
  Sparkles, ArrowRight, Award, Instagram, Facebook, Linkedin, 
  TrendingUp, Users, Heart, Globe, Search, Palette, Zap, Monitor, 
  BarChart3, Bot, Workflow, Calendar, MessageSquare, Cog, Clock, 
  Target, Star 
} from 'lucide-react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Importação do Chatbot
import Chatbot from './components/Chatbot/Chatbot';

export default function Index() {
  const [offset, setOffset] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);

  // Refs do banner - Simplificado (removido fb e ig)
  const bannerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);

    const ctx = gsap.context(() => {
      // Timeline do Hero (Surgimento suave)
      const heroTl = gsap.timeline();
      heroTl.from(".hero-badge", { opacity: 0, y: -20, duration: 0.6 })
            .from(".hero-title", { opacity: 0, y: 50, duration: 1 }, "-=0.3")
            .from(".hero-subtitle", { opacity: 0, y: 50, duration: 1 }, "-=0.7")
            .from(".hero-button", { opacity: 0, y: 30, duration: 1 }, "-=0.7")
            .from(".hero-banner", { opacity: 0, scale: 0.9, duration: 1.2, ease: "power2.out" }, "-=1");

      // Animação dos cards ao scroll (Serviços)
      gsap.utils.toArray('.service-card').forEach((card: any) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 85%" },
          opacity: 0, 
          y: 50, 
          duration: 1, 
          ease: "power3.out"
        });
      });

      // Animação da Seção Barcelona
      gsap.from(".barcelona-content", {
        scrollTrigger: { trigger: ".barcelona-content", start: "top 80%" },
        opacity: 0,
        x: -50,
        duration: 1.2,
        ease: "power2.out"
      });

    }, mainRef);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  // Dados das seções (Mantidos exatamente como no seu código original)
  const socialServices = [
    { icon: Instagram, title: "Instagram & TikTok", description: "Contenido visual que conecta con pacientes potenciales y genera confianza." },
    { icon: Facebook, title: "Facebook Ads", description: "Campañas segmentadas para captar pacientes cualificados en tu zona." },
    { icon: Linkedin, title: "LinkedIn", description: "Posicionamiento profesional para especialistas y clínicas de referencia." },
  ];

  const automations = [
    { icon: Calendar, title: "Reservas Automatizadas", description: "Sistema de citas online integrado con tu agenda." },
    { icon: MessageSquare, title: "Chatbots Inteligentes", description: "Atención 24/7 para consultas y captación de leads." },
    { icon: Workflow, title: "Email Marketing", description: "Secuencias automatizadas de seguimiento y fidelización." },
    { icon: Target, title: "Lead Scoring", description: "Clasificación automática de prospectos." },
  ];

  const reviews = [
    { name: "Dr. María García", role: "Cirujana Plástica", rating: 5, text: "Betterfly transformó completamente nuestra presencia digital. En 6 meses duplicamos las consultas.", avatar: "MG" },
    { name: "Clínica Dental Sonrisa", role: "Odontología", rating: 5, text: "El equipo es increíble. Nuestro SEO pasó de la página 5 a los primeiros resultados.", avatar: "CS" },
    { name: "Dr. Carlos Fernández", role: "Dermatólogo", rating: 5, text: "La automatización de citas nos ahorró horas de trabalho administrativo.", avatar: "CF" },
    { name: "Centro Médico Salud", role: "Medicina General", rating: 5, text: "Excelente servicio. Las redes sociales nunca habían tenido tanto engagement.", avatar: "CM" },
  ];

  return (
    <div ref={mainRef} className="min-h-screen bg-[#F5F5F5] text-[#0A1738] relative overflow-hidden font-['Poppins']">
      
      {/* DOT GRID BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 w-full h-full opacity-[0.50]"
          style={{
            backgroundImage: `radial-gradient(#0DBAAC 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to bottom, black 50%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent)'
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

            {/* BANNER COM VÍDEO (ÚNICO E LIMPO) */}
            <div className="relative w-full flex justify-center items-center overflow-visible">
              <div ref={bannerRef} className="hero-banner relative">
                <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border-8 border-white w-[500px] h-[500px] flex items-center justify-center">
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-cover"
                  >
                    <source src="https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO BARCELONA */}
        <section className="py-24 md:py-32 bg-white/40 backdrop-blur-sm relative z-20 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 barcelona-content">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 leading-[1.05] tracking-tight text-[#0A1738] max-w-5xl">
              Atraemos más pacientes a <span className="text-[#0DBAAC]"> tu clínica con </span> <span className="text-[#0DBAAC]">estrategias digitales probadas.</span> 
            </h2>
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
              <div className="text-xl md:text-2xl font-semibold text-[#0A1738] leading-snug">
                <p>En 2010 iniciamos nuestra andadura, <span className="text-[#0DBAAC]">diseñando e innovando</span> desde nuestra oficina de Barcelona.</p>
              </div>
              <div className="text-base md:text-lg text-slate-500 space-y-6 leading-relaxed">
                <p>Nuestra metodología combina la estética médica con el rigor técnico necesario para convertir visitantes en pacientes.</p>
                <p>Actualmente, trabajamos con clínicas que buscan dar el salto al siguiente nivel de facturación.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO MÍDIA SOCIAL */}
        <section className="py-32 relative bg-[#0A1738]">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <span className="inline-flex items-center gap-2 text-[#0DBAAC] text-sm font-semibold uppercase tracking-widest mb-6">
                <Instagram size={16} /> Redes Sociales
              </span>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                Tu presencia en <span className="text-[#0DBAAC]">redes sociales</span><br/>
                que genera resultados
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {socialServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="service-card bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all hover:-translate-y-2 group">
                    <Icon size={40} className="text-[#0DBAAC] mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-white/70 leading-relaxed">{service.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* SEÇÃO AUTOMAÇÃO */}
        <section className="py-32 relative bg-[#0A1738] overflow-hidden border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <span className="inline-flex items-center gap-2 text-[#0DBAAC] text-sm font-semibold uppercase tracking-widest mb-6">
                <Bot size={16} /> Automatización
              </span>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
                <span className="text-[#0DBAAC]">Automatiza</span> tu clínica<br/>
                y multiplica resultados
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="grid sm:grid-cols-2 gap-6">
                {automations.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all hover:-translate-y-1 group">
                      <Icon size={32} className="text-[#0DBAAC] mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  )
                })}
              </div>
              <div className="bg-white p-16 rounded-[3rem] shadow-2xl relative overflow-hidden text-center">
                <Cog size={80} className="text-[#0DBAAC] mx-auto mb-6 animate-spin" style={{ animationDuration: '8s' }} />
                <p className="text-5xl font-bold text-[#0A1738]">85%</p>
                <p className="text-[#0DBAAC] uppercase tracking-widest text-sm font-medium">Ahorro de Tiempo</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO GOOGLE REVIEWS */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-[#0A1738] mb-16">
              Lo que dicen <span className="text-[#0DBAAC]">nuestros clientes</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg text-left">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#0DBAAC]/10 flex items-center justify-center font-bold text-[#0DBAAC]">{review.avatar}</div>
                    <div>
                      <h4 className="font-bold text-[#0A1738]">{review.name}</h4>
                      <p className="text-xs text-slate-500">{review.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4">"{review.text}"</p>
                  <div className="flex gap-1 text-[#0DBAAC]">
                    {Array.from({length: review.rating}).map((_, i) => <Star key={i} size={16} />)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Chatbot />
      </main>
    </div>
  );
}
