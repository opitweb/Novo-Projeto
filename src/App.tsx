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
import Chatbot from './components/chatbot/Chatbot';

export default function Index() {
  const [offset, setOffset] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);

    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.service-card');
      cards.forEach((card: any) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" },
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
    { name: "Clínica Dental Sonrisa", role: "Odontología", rating: 5, text: "El equipo es increíble. Nuestro SEO pasó de la página 5 a los primeiros resultados.", avatar: "CS" },
    { name: "Dr. Carlos Fernández", role: "Dermatólogo", rating: 5, text: "La automatización de citas nos ahorró horas de trabajo administrativo.", avatar: "CF" },
    { name: "Centro Médico Salud", role: "Medicina General", rating: 5, text: "Excelente servicio. Las redes sociales nunca habían tenido tanto engagement.", avatar: "CM" },
  ];

  return (
    <div ref={mainRef} className="min-h-screen bg-[#F5F5F5] text-[#0A1738] relative overflow-hidden font-['Poppins']">
      
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div id="parallax-lines" className="absolute inset-0 w-full h-[200%]" style={{ backgroundImage: `linear-gradient(to right, #0A1738 1px, transparent 1px)`, backgroundSize: '80px 100%' }} />
      </div>

      <main className="relative z-10">
        
        {/* HERO SECTION - REVISADA PARA CABER NA TELA */}
        <section className="pt-24 pb-12 px-6 min-h-[90vh] lg:h-screen flex items-center relative">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-6 md:space-y-8 animate-reveal">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-slate-200 text-[#0A1738] px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                <Sparkles size={14} className="text-[#0DBAAC]" /> Marketing Médico en Barcelona
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-[#0A1738] tracking-tight leading-[1.1] lg:leading-[1.15]">
                  Estratégias de <br className="lg:hidden" /> marketing digital <br />
                  <span className="font-light italic text-[#0DBAAC] text-4xl lg:text-6xl lowercase">Barcelona</span>
                </h1>
              </div>
              
              <p className="text-lg md:text-xl text-slate-500 border-l-2 border-[#0DBAAC] pl-6 max-w-md leading-relaxed">
                Marketing de alto nivel para especialistas que desean aumentar la visibilidad y las citas de su clínica.
              </p>

              <div className="pt-4">
                <Link to="/contacto" className="inline-flex bg-[#0DBAAC] text-white px-10 py-4 md:py-5 rounded-2xl font-bold items-center hover:bg-[#0a8d82] transition-all shadow-xl shadow-[#0DBAAC]/20 hover:-translate-y-1">
                  Análisis Gratuito <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block animate-reveal delay-200" style={{ transform: `translateY(${offset * 0.05}px)` }}>
              <div className="bg-[#0A1738] p-16 rounded-[4rem] text-white shadow-2xl text-center relative overflow-hidden border-8 border-white/50 backdrop-blur-sm">
                <Award size={48} className="mx-auto mb-6 text-[#0DBAAC]" />
                <p className="text-7xl font-bold mb-2 tracking-tighter">+340%</p>
                <p className="text-[#0DBAAC] text-lg font-medium opacity-90 uppercase tracking-widest">Crecimiento en Facturación</p>
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

        {/* MÍDIA SOCIAL */}
        <section className="py-32 relative bg-[#0A1738]">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <span className="inline-flex items-center gap-2 text-[#0DBAAC] text-sm font-semibold uppercase tracking-widest mb-6"><Instagram size={16} /> Redes Sociales</span>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">Tu presencia en <span className="text-[#0DBAAC]">redes sociales</span> que genera resultados</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {socialServices.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all hover:-translate-y-2 group">
                  <service.icon size={40} className="text-[#0DBAAC] mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WEBSITES & SEO */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
              <div>
                <span className="inline-flex items-center gap-2 text-[#0DBAAC] text-sm font-semibold uppercase tracking-widest mb-6"><Globe size={16} /> Web & SEO & UX</span>
                <h2 className="text-5xl md:text-7xl font-bold text-[#0A1738] tracking-tight leading-[1.1] mb-8">Websites que <span className="text-[#0DBAAC]">dominan</span> los resultados</h2>
                <p className="text-xl text-slate-500 leading-relaxed max-w-lg">Combinamos diseño excepcional y SEO para posicionar tu clínica en la cima de Google.</p>
              </div>
              <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-200">
                <div className="space-y-4">
                  <div className="h-4 bg-[#0A1738]/10 rounded-full w-3/4"></div>
                  <div className="h-24 bg-[#0DBAAC]/20 rounded-2xl mt-6 flex items-center justify-center"><Search size={32} className="text-[#0DBAAC]" /></div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {webFeatures.map((f, i) => (
                <div key={i} className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-[#0DBAAC]/30 transition-all">
                  <f.icon size={36} className="text-[#0DBAAC] mb-6" />
                  <h3 className="text-xl font-bold text-[#0A1738] mb-3">{f.title}</h3>
                  <p className="text-slate-500">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AUTOMATIZAÇÃO */}
        <section className="py-32 bg-[#0A1738]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8"><span className="text-[#0DBAAC]">Automatiza</span> tu clínica</h2>
            <div className="grid md:grid-cols-4 gap-6 mt-16">
              {automations.map((a, i) => (
                <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10">
                  <a.icon size={32} className="text-[#0DBAAC] mb-4 mx-auto" />
                  <h3 className="text-lg font-bold text-white">{a.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-bold text-center mb-16 text-[#0A1738]">Lo que dicen <span className="text-[#0DBAAC]">nuestros clientes</span></h2>
            <div className="grid md:grid-cols-4 gap-6">
              {reviews.map((r, i) => (
                <div key={i} className="p-8 rounded-3xl border border-slate-100 shadow-lg">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, s) => <Star key={s} size={16} className="fill-[#0DBAAC] text-[#0DBAAC]" />)}
                  </div>
                  <p className="text-slate-500 text-sm mb-4 italic">"{r.text}"</p>
                  <p className="font-bold text-[#0A1738]">{r.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Chatbot />

      <style>{`
        .animate-reveal { animation: reveal 1s forwards; opacity: 0; transform: translateY(30px); }
        @keyframes reveal { to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
