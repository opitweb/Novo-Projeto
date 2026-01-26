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
import Chatbot from './components/chatbot/Chatbot';

export default function Index() {
  const [offset, setOffset] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);

  // 1. Lógica de Scroll e GSAP
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);

    let ctx = gsap.context(() => {
      // Animação Hero
      const tl = gsap.timeline();
      tl.from(".hero-badge", { opacity: 0, y: -20, duration: 0.6 })
        .from(".hero-title", { opacity: 0, y: 50, duration: 1 }, "-=0.3")
        .from(".hero-subtitle", { opacity: 0, y: 50, duration: 1 }, "-=0.7")
        .from(".hero-button", { opacity: 0, y: 30, duration: 1 }, "-=0.7")
        .from(".hero-banner", { opacity: 0, scale: 0.8, duration: 1.2, ease: "back.out(1.7)" }, "-=1");

      // Animação dos cards ao scroll
      gsap.utils.toArray('.service-card').forEach((card: any) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 85%" },
          opacity: 0, y: 50, duration: 1, ease: "power3.out"
        });
      });

      // Animação Seção Barcelona
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

  // Dados das Seções
  const socialServices = [
    { icon: Instagram, title: "Instagram & TikTok", description: "Contenido visual que conecta con pacientes potenciales y genera confianza." },
    { icon: Facebook, title: "Facebook Ads", description: "Campañas segmentadas para captar pacientes cualificados en tu zona." },
    { icon: Linkedin, title: "LinkedIn", description: "Posicionamiento profesional para especialistas y clínicas de referencia." },
  ];

  const socialStats = [
    { icon: Users, value: "+200M", label: "Alcance Mensual" },
    { icon: Heart, value: "98%", label: "Engagement Rate" },
    { icon: TrendingUp, value: "+180%", label: "Crecimiento Seguidores" },
  ];

  const webFeatures = [
    { icon: Globe, title: "Diseño Web Premium", description: "Websites que convierten visitantes en pacientes con diseño profesional." },
    { icon: Search, title: "SEO Médico", description: "Posicionamiento orgánico especializado para clínicas y especialistas." },
    { icon: Palette, title: "UX/UI Design", description: "Experiencias de usuario intuitivas que facilitan la conversión." },
    { icon: Zap, title: "Velocidad Optimizada", description: "Tiempos de carga ultrarrápidos que mejoran el SEO." },
    { icon: Monitor, title: "Responsive Design", description: "Diseños que se adaptan perfectamente a todos los dispositivos." },
    { icon: BarChart3, title: "Analítica Avanzada", description: "Seguimiento detallado del comportamiento de usuarios." },
  ];

  const automations = [
    { icon: Calendar, title: "Reservas Automatizadas", description: "Sistema de citas online integrado con tu agenda." },
    { icon: MessageSquare, title: "Chatbots Inteligentes", description: "Atención 24/7 para consultas y captación de leads." },
    { icon: Workflow, title: "Email Marketing", description: "Secuencias automatizadas de seguimiento y fidelización." },
    { icon: Target, title: "Lead Scoring", description: "Clasificación automática de prospectos." },
  ];

  const reviews = [
    { name: "Dr. María García", role: "Cirujana Plástica", rating: 5, text: "Betterfly transformó completamente nuestra presencia digital. En 6 meses duplicamos las consultas.", avatar: "MG" },
    { name: "Clínica Dental Sonrisa", role: "Odontología", rating: 5, text: "El equipo es increíble. Nuestro SEO pasó de la página 5 a los primeros resultados.", avatar: "CS" },
    { name: "Dr. Carlos Fernández", role: "Dermatólogo", rating: 5, text: "La automatización de citas nos ahorró horas de trabajo administrativo.", avatar: "CF" },
    { name: "Centro Médico Salud", role: "Medicina General", rating: 5, text: "Excelente servicio. Las redes sociales nunca habían tenido tanto engagement.", avatar: "CM" },
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

            {/* BOX +340% CORRIGIDO */}
            <div className="hero-banner hidden lg:flex justify-end" style={{ transform: `translateY(${offset * 0.05}px)` }}>
              <div className="bg-[#0A1738] p-16 rounded-[4rem] text-white shadow-2xl text-center relative overflow-hidden border-8 border-white/50 backdrop-blur-sm max-w-[480px] aspect-square flex flex-col justify-center items-center">
                <Award size={48} className="mb-6 text-[#0DBAAC]" />
                <p className="text-8xl font-bold mb-2 tracking-tighter">+340%</p>
                <p className="text-[#0DBAAC] text-lg font-medium uppercase tracking-widest leading-tight">Crecimiento en <br/> Facturación</p>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0DBAAC]/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              </div>
            </div>

          </div>
        </section>

        {/* SEÇÃO BARCELONA */}
        <section className="py-24 barcelona-content bg-white/40 backdrop-blur-sm border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-[#0A1738] max-w-5xl leading-tight">
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

        {/* SEÇÃO REDES SOCIAIS */}
        <section className="py-32 bg-[#0A1738] text-white relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <span className="text-[#0DBAAC] text-sm font-bold uppercase tracking-widest mb-4 block">Redes Sociales</span>
              <h2 className="text-5xl md:text-7xl font-bold mb-12">Tu presencia que <span className="text-[#0DBAAC]">genera resultados</span></h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-20">
                {socialServices.map((s, i) => (
                  <div key={i} className="bg-white/5 p-10 rounded-3xl border border-white/10 text-left service-card">
                    <s.icon size={40} className="text-[#0DBAAC] mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                    <p className="text-white/70">{s.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {socialStats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <stat.icon size={32} className="mx-auto text-[#0DBAAC] mb-4" />
                    <p className="text-6xl font-bold mb-2">{stat.value}</p>
                    <p className="text-[#0DBAAC] uppercase tracking-widest text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO WEB & SEO */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-[#0A1738] mb-6">Websites que <span className="text-[#0DBAAC]">dominan</span> Google</h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">Diseño premium y SEO técnico para que tu clínica sea la primera opción.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {webFeatures.map((f, i) => (
                <div key={i} className="p-8 rounded-3xl border border-slate-100 hover:border-[#0DBAAC]/30 transition-all bg-[#F8FAFC]">
                  <f.icon size={36} className="text-[#0DBAAC] mb-6" />
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-slate-500">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO REVIEWS GOOGLE */}
        <section className="py-32 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">Lo que dicen <span className="text-[#0DBAAC]">nuestros clientes</span></h2>
            <div className="grid md:grid-cols-4 gap-6">
              {reviews.map((r, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 text-left">
                  <div className="flex gap-1 mb-4">
                    {[...Array(r.rating)].map((_, idx) => <Star key={idx} size={16} className="fill-[#0DBAAC] text-[#0DBAAC]" />)}
                  </div>
                  <p className="text-slate-600 mb-6 text-sm italic">"{r.text}"</p>
                  <div className="font-bold text-[#0A1738]">{r.name}</div>
                  <div className="text-xs text-slate-400">{r.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* COMPONENTE CHATBOT */}
      <Chatbot />

    </div>
  );
}
