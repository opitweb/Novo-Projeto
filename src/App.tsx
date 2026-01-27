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

// Importação do Chatbot
import Chatbot from './components/Chatbot/Chatbot';

export default function Index() {
  const [offset, setOffset] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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
            .from(".hero-sphere-wrapper", { opacity: 0, scale: 0.8, duration: 1.2, ease: "back.out(1.7)" }, "-=1");

      // GIRO 3D REALISTA (Sem efeito achatado)
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          rotationY: 360,
          duration: 20,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50% 0"
        });
      }

      // Animações de Scroll nos cards
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

  // --- DADOS ORIGINAIS ---
  const socialServices = [
    { icon: Instagram, title: "Instagram & TikTok", description: "Contenido visual que conecta con pacientes potenciales y genera confianza." },
    { icon: Facebook, title: "Facebook Ads", description: "Campañas segmentadas para captar pacientes cualificados en tu zona." },
    { icon: Linkedin, title: "LinkedIn", description: "Posicionamiento profesional para especialistas y clínicas de referencia." },
  ];
  const socialStats = [
    { icon: Users, value: 200, suffix: "M", prefix: "+", label: "Alcance Mensual" },
    { icon: Heart, value: 98, suffix: "%", prefix: "", label: "Engagement Rate" },
    { icon: TrendingUp, value: 180, suffix: "%", prefix: "+", label: "Crecimiento Seguidores" },
  ];
  const webFeatures = [
    { icon: Globe, title: "Diseño Web Premium", description: "Websites que convierten visitantes en pacientes con diseño profesional." },
    { icon: Search, title: "SEO Médico", description: "Posicionamiento orgánico especializado para clínicas y especialistas." },
    { icon: Palette, title: "UX/UI Design", description: "Experiencias de usuario intuitivas que facilitan la conversión." },
    { icon: Zap, title: "Velocidad Optimizada", description: "Tiempos de carga ultrarrápidos que mejoran el SEO." },
    { icon: Monitor, title: "Responsive Design", description: "Diseños que se adaptan perfectamente a todos los dispositivos." },
    { icon: BarChart3, title: "Analítica Avanzada", description: "Seguimiento detallado del comportamento de usuarios." },
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
    <div ref={mainRef} className="min-h-screen bg-[#F5F5F5] text-[#0A1738] relative overflow-x-hidden font-['Poppins']">
      
      {/* BACKGROUND DOT GRID */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 w-full h-full opacity-[0.40]"
          style={{
            backgroundImage: `radial-gradient(#0DBAAC 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to bottom, black 50%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent)'
          }}
        />
      </div>

      <main className="relative z-10">
        
        {/* HERO SECTION - REVISADA PARA RESPONSIVIDADE TOTAL */}
        <section className="pt-28 lg:pt-36 pb-20 px-4 md:px-6 min-h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-10 items-center">
            
            {/* TEXTO - FONTE AJUSTADA PARA MOBILE */}
            <div className="hero-content space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left px-2">
              <div className="hero-badge inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-slate-200 text-[#0A1738] px-5 py-2 rounded-full text-xs md:text-sm font-semibold shadow-sm">
                <Sparkles size={14} className="text-[#0DBAAC]" /> Marketing Médico en Barcelona
              </div>
              
              <h1 className="hero-title text-[32px] sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[#0A1738] leading-[1.2] lg:leading-[1.1] break-words">
                Estratégias de <br/> marketing digital <br/>
                <span className="font-light italic text-[#0DBAAC] text-[28px] sm:text-3xl lg:text-6xl lowercase">barcelona</span>
              </h1>
              
              <p className="hero-subtitle text-base md:text-lg text-slate-500 border-l-0 lg:border-l-2 border-[#0DBAAC] lg:pl-6 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Marketing de alto nivel para especialistas que <span className="text-[#0A1738] font-medium">desean aumentar la visibilidad y las citas de su clínica.</span>
              </p>

              <div className="hero-button pt-4">
                <Link to="/contacto" className="inline-flex bg-[#0DBAAC] text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold items-center hover:bg-[#0a8d82] transition-all shadow-xl shadow-[#0DBAAC]/20">
                  Análisis Gratuito <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>

            {/* ESFERA - CORRIGIDA: SEM SOBREPOSIÇÃO E COM PERSPECTIVA */}
            <div className="hero-sphere-wrapper relative w-full flex justify-center items-center order-1 lg:order-2 py-10 lg:py-0">
              <div className="absolute w-[240px] h-[240px] lg:w-[450px] lg:h-[450px] bg-[#0DBAAC]/15 blur-[50px] lg:blur-[120px] rounded-full" />
              
              <div 
                className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden bg-[#0DBAAC] shadow-2xl flex items-center justify-center"
                style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
              >
                <video 
                  ref={videoRef}
                  autoPlay muted loop playsInline 
                  className="w-full h-full object-cover scale-110 opacity-90 mix-blend-screen"
                >
                  <source src="https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#0DBAAC]/30 via-transparent to-white/40 pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] lg:shadow-[inset_0_0_80px_rgba(0,0,0,0.3)] pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* --- SEÇÃO BARCELONA --- */}
        <section className="py-24 bg-white/40 backdrop-blur-sm border-y border-slate-100 relative z-20">
          <div className="max-w-7xl mx-auto px-6 barcelona-content">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 text-[#0A1738] leading-tight">
              Atraemos más pacientes a <span className="text-[#0DBAAC]"> tu clínica con </span> estrategias digitales.
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <p className="text-lg md:text-xl font-semibold">Fundada em <span className="text-[#0DBAAC]">Barcelona</span>, ajudamos clínicas a escalar com autoridade.</p>
              <p className="text-slate-500">Unimos a estética visual de alto luxo com automações que convertem.</p>
            </div>
          </div>
        </section>

        {/* --- SEÇÃO SOCIAL SERVICES --- */}
        <section className="py-32 bg-[#0A1738]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {socialServices.map((s, i) => (
                <div key={i} className="service-card bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <s.icon size={40} className="text-[#0DBAAC] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
                  <p className="text-white/70">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
            {webFeatures.map((f, i) => (
              <div key={i} className="service-card p-10 rounded-3xl border border-slate-100 hover:shadow-xl transition-all">
                <f.icon size={30} className="text-[#0DBAAC] mb-8" />
                <h3 className="text-2xl font-bold text-[#0A1738] mb-4">{f.title}</h3>
                <p className="text-slate-500">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        <Chatbot />
      </main>
    </div>
  );
}
