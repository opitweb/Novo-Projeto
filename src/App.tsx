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
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);

    let ctx = gsap.context(() => {
      // Animação dos cards de serviço ao scroll
      const cards = gsap.utils.toArray('.service-card');
      cards.forEach((card: any) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
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
    }, mainRef);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  // Animação inicial do Hero
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".hero-content", { opacity: 0, y: 30, duration: 1, ease: "power3.out" });
  }, []);

  const socialServices = [
    { icon: Instagram, title: "Instagram & TikTok", description: "Contenido visual que conecta con pacientes potenciales." },
    { icon: Facebook, title: "Facebook Ads", description: "Campañas segmentadas para captar pacientes cualificados." },
    { icon: Linkedin, title: "LinkedIn", description: "Posicionamiento profesional para especialistas." },
  ];

  const socialStats = [
    { icon: Users, value: "+200M", label: "Alcance Mensual" },
    { icon: Heart, value: "98%", label: "Engagement Rate" },
    { icon: TrendingUp, value: "+180%", label: "Crecimiento" },
  ];

  const webFeatures = [
    { icon: Globe, title: "Diseño Web Premium", description: "Websites que convierten visitantes en pacientes." },
    { icon: Search, title: "SEO Médico", description: "Posicionamiento orgánico especializado." },
    { icon: Palette, title: "UX/UI Design", description: "Experiencias de usuario intuitivas." },
    { icon: Zap, title: "Velocidad", description: "Tiempos de carga ultrarrápidos." },
    { icon: Monitor, title: "Responsive", description: "Adaptado a todos los dispositivos." },
    { icon: BarChart3, title: "Analítica", description: "Seguimiento detallado de conversiones." },
  ];

  const automations = [
    { icon: Calendar, title: "Reservas", description: "Sistema de citas online integrado." },
    { icon: MessageSquare, title: "Chatbots", description: "Atención 24/7 para captación de leads." },
    { icon: Workflow, title: "Email Marketing", description: "Fidelización automatizada." },
    { icon: Target, title: "Lead Scoring", description: "Clasificación de prospectos." },
  ];

  const reviews = [
    { name: "Dr. María García", role: "Cirujana Plástica", rating: 5, text: "Duplicamos las consultas en 6 meses.", avatar: "MG" },
    { name: "Clínica Dental", role: "Odontología", rating: 5, text: "Primeros resultados en Google.", avatar: "CD" },
    { name: "Dr. Carlos F.", role: "Dermatólogo", rating: 5, text: "La automatización nos ahorró horas.", avatar: "CF" },
    { name: "Centro Salud", role: "Medicina General", rating: 5, text: "Excelente engagement en redes.", avatar: "CS" },
  ];

  return (
    <div ref={mainRef} className="min-h-screen bg-[#F5F5F5] text-[#0A1738] relative overflow-hidden font-['Poppins']">
      
      {/* BACKGROUND PARALLAX */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div 
          className="absolute inset-0 w-full h-[200%]"
          style={{
            backgroundImage: `linear-gradient(to right, #0A1738 1px, transparent 1px)`,
            backgroundSize: '80px 100%',
            transform: `translateY(${offset * -0.1}px)`
          }}
        />
      </div>

      <main className="relative z-10">
        
        {/* HERO SECTION - REFEITA E COMPACTADA */}
        <section className="pt-20 pb-12 px-6 min-h-[90vh] lg:h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-center">
            
            <div className="hero-content space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-slate-200 text-[#0A1738] px-6 py-2 rounded-full text-sm font-semibold shadow-sm">
                <Sparkles size={14} className="text-[#0DBAAC]" /> Marketing Médico en Barcelona
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-[#0A1738] tracking-tight leading-[1.1] lg:leading-[1.15]">
                Estratégias de <br className="lg:hidden" /> marketing digital <br />
                <span className="font-light italic text-[#0DBAAC] text-4xl lg:text-6xl lowercase">Barcelona</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-500 border-l-2 border-[#0DBAAC] pl-6 max-w-md leading-relaxed">
                Marketing de alto nivel para especialistas que desean aumentar la visibilidad y las citas de su clínica.
              </p>

              <div className="pt-2">
                <Link 
                  to="/contacto" 
                  className="inline-flex bg-[#0DBAAC] text-white px-10 py-4 md:py-5 rounded-2xl font-bold items-center hover:bg-[#0a8d82] transition-all shadow-xl shadow-[#0DBAAC]/20 hover:-translate-y-1"
                >
                  Análisis Gratuito <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
            
            {/* CARD DIREITO */}
            <div className="hidden lg:block" style={{ transform: `translateY(${offset * 0.05}px)` }}>
              <div className="bg-[#0A1738] p-16 rounded-[4rem] text-white shadow-2xl text-center border-8 border-white/50 backdrop-blur-sm">
                <Award size={48} className="mx-auto mb-6 text-[#0DBAAC]" />
                <p className="text-7xl font-bold mb-2 tracking-tighter">+340%</p>
                <p className="text-[#0DBAAC] text-lg font-medium uppercase tracking-widest">Crecimiento en Facturación</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO BARCELONA */}
        <section className="py-24 bg-white/40 backdrop-blur-sm border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 barcelona-content">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#0A1738]">
              Atraemos más pacientes a <span className="text-[#0DBAAC]">tu clínica</span> con estrategias probadas.
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <p className="text-xl font-semibold">Desde 2010, <span className="text-[#0DBAAC]">diseñando e innovando</span> desde Barcelona.</p>
              <p className="text-slate-500">Nuestra metodología combina estética médica con rigor técnico para convertir visitas en citas reales.</p>
            </div>
          </div>
        </section>

        {/* MÍDIA SOCIAL */}
        <section className="py-24 bg-[#0A1738] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Tu presencia en <span className="text-[#0DBAAC]">redes sociales</span></h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {socialServices.map((s, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                  <s.icon size={32} className="text-[#0DBAAC] mb-4" />
                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-white/60">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GOOGLE REVIEWS */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">Opiniones en <span className="text-[#0DBAAC]">Google</span></h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {reviews.map((r, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl shadow-md border border-slate-100">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, star) => <Star key={star} size={14} className="fill-[#0DBAAC] text-[#0DBAAC]" />)}
                  </div>
                  <p className="text-sm italic text-slate-600 mb-4">"{r.text}"</p>
                  <p className="font-bold text-xs">{r.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <style>{`
        .hero-content { animation: fadeIn 1s ease-out; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
