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

  // Refs do banner/carrossel
  const bannerRef = useRef<HTMLDivElement>(null);
  const fbRef = useRef<HTMLDivElement>(null);
  const igRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLParagraphElement>(null);

  // 1. Lógica de Scroll e GSAP
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);

    const ctx = gsap.context(() => {
      // Timeline do Hero
      const heroTl = gsap.timeline();
      heroTl.from(".hero-badge", { opacity: 0, y: -20, duration: 0.6 })
            .from(".hero-title", { opacity: 0, y: 50, duration: 1 }, "-=0.3")
            .from(".hero-subtitle", { opacity: 0, y: 50, duration: 1 }, "-=0.7")
            .from(".hero-button", { opacity: 0, y: 30, duration: 1 }, "-=0.7")
            .from(".hero-banner", { opacity: 0, scale: 0.8, duration: 1.2, ease: "back.out(1.7)" }, "-=1");

      // Animação dos cards ao scroll
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
        scrollTrigger: {
          trigger: ".barcelona-content",
          start: "top 80%",
        },
        opacity: 0,
        x: -50,
        duration: 1.2,
        ease: "power2.out"
      });

      // NOVA ANIMAÇÃO: Contador de 0 até 340
      if (counterRef.current) {
        gsap.from(counterRef.current, {
          scrollTrigger: {
            trigger: counterRef.current,
            start: "top 80%",
          },
          textContent: 0,
          duration: 2.5,
          ease: "power1.inOut",
          snap: { textContent: 1 },
          onUpdate: function() {
            if (counterRef.current) {
              counterRef.current.textContent = `+${Math.ceil(parseFloat(counterRef.current.textContent))}%`;
            }
          }
        });
      }

      // Timeline do carrossel banner +340% / Facebook / Instagram
      if (bannerRef.current && fbRef.current && igRef.current) {
        const carouselTl = gsap.timeline({
          repeat: -1,
          defaults: { duration: 1, ease: "power1.inOut" }
        });

        carouselTl
          .to(bannerRef.current, { opacity: 1 })
          .to(fbRef.current, { opacity: 1, delay: 1 })
          .to(fbRef.current, { opacity: 0, delay: 1 })
          .to(igRef.current, { opacity: 1, delay: 0.5 })
          .to(igRef.current, { opacity: 0, delay: 1 });
      }

    }, mainRef);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  // Dados das seções (omitidos para brevidade, mas mantidos no seu código original)
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
      
      {/* EFEITO DE BOLINHAS */}
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

            {/* BANNER - SOMENTE VÍDEO */}
<div className="relative w-full flex justify-center items-center">
  <div ref={bannerRef} className="hero-banner relative z-20">
    <div className="relative w-[500px] h-[500px] rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl bg-white">
      
      <video 
        autoPlay 
        muted 
        loop 
        playsinline 
        className="w-full h-full object-cover"
      >
        <source 
          src="https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/video.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Brilho sutil no canto para integrar com o vidro do vídeo */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#0DBAAC]/5 rounded-full blur-3xl"></div>
    </div>
  </div>
</div>

                  {/* CONTEÚDO SOBREPOSTO */}
                  <div className="relative z-10 p-16">
                    <Award size={48} className="mb-6 text-[#0DBAAC] mx-auto" />
                    <p ref={counterRef} className="text-8xl font-bold mb-2 tracking-tighter">+340%</p>
                    <p className="text-[#0DBAAC] text-lg font-medium uppercase tracking-widest leading-tight">
                      Crecimiento en <br/> Facturación
                    </p>
                  </div>
                  
                  {/* Brilho decorativo */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0DBAAC]/10 rounded-full -mr-16 -mt-16 blur-2xl z-0"></div>
                </div>
              </div>

              {/* Cards do Carrossel (Facebook / Instagram) */}
              <div ref={fbRef} className="absolute z-10 opacity-0">
                <img
                  src="https://images.unsplash.com/photo-1532570122812-6c53b4cdd5f7?auto=format&fit=crop&q=80"
                  className="w-56 h-56 rounded-[3rem] object-cover shadow-2xl border-8 border-white"
                  alt="Facebook"
                />
              </div>

              <div ref={igRef} className="absolute z-10 opacity-0">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
                  className="w-56 h-56 rounded-[3rem] object-cover shadow-2xl border-8 border-white"
                  alt="Instagram"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO BARCELONA E RESTANTE DO CÓDIGO (Igual ao seu original) */}
        <section className="py-24 md:py-32 bg-white/40 backdrop-blur-sm relative z-20 border-y border-slate-100">
           {/* ... conteúdo da seção barcelona ... */}
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

        {/* Mantenha todas as outras seções (Mídia Social, Automação, Reviews) como estavam */}
        {/* ... */}
        
        <Chatbot />
      </main>
    </div>
  );
}
