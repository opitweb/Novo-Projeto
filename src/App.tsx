import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, Award, Instagram, Facebook, Linkedin, 
  TrendingUp, Users, Heart, Globe, Search, Palette, Zap, Monitor, 
  BarChart3, Bot, Workflow, Calendar, MessageSquare, Cog, Clock, 
  Target, Star 
} from 'lucide-react';

export default function Index() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialServices = [
    { icon: Instagram, title: "Instagram & TikTok", description: "Contenido visual que conecta con pacientes potenciales y genera confianza." },
    { icon: Facebook, title: "Facebook Ads", description: "Campañas segmentadas para captar pacientes cualificados en tu zona." },
    { icon: Linkedin, title: "LinkedIn", description: "Posicionamiento profesional para especialistas y clínicas de referencia." },
  ];

  const socialStats = [
    { icon: Users, value: "+2M", label: "Alcance Mensual" },
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
    <div className="min-h-screen bg-[#F5F5F5] text-[#0A1738] relative overflow-hidden font-['Poppins']">
      
      {/* EFEITO PARALLAX DE LINHAS */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div 
          className="absolute inset-0 w-full h-[200%]"
          style={{
            backgroundImage: `linear-gradient(to right, #0A1738 1px, transparent 1px)`,
            backgroundSize: '80px 100%',
            transform: `translateY(${offset * -0.1}px)`, 
          }}
        />
      </div>

      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="pt-32 pb-24 px-6 min-h-screen flex items-start lg:items-center">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12 animate-reveal">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-slate-200 text-[#0A1738] px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                <Sparkles size={14} className="text-[#0DBAAC]" /> Marketing Médico en Barcelona
              </div>
              
              <div className="space-y-4">
                <h1 className="text-7xl lg:text-9xl font-bold text-[#0A1738] tracking-tighter leading-[0.8] transition-all">
                  Betterfly <br/>
                  <span className="font-light italic text-[#0DBAAC] text-6xl lg:text-8xl lowercase">media</span>
                </h1>
              </div>
              
              <p className="text-xl text-slate-500 border-l-2 border-[#0DBAAC] pl-6 max-w-md leading-relaxed">
                Marketing de alto nivel para especialistas que <span className="text-[#0A1738] font-medium">dominan su mercado</span>.
              </p>

              <Link 
                to="/contacto" 
                className="inline-flex bg-[#0DBAAC] text-white px-10 py-5 rounded-2xl font-bold items-center hover:bg-[#0a8d82] transition-all shadow-xl shadow-[#0DBAAC]/20 hover:-translate-y-1"
              >
                Análisis Gratuito <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            
            <div className="hidden lg:block animate-reveal delay-200" style={{ transform: `translateY(${offset * 0.05}px)` }}>
              <div className="bg-[#0A1738] p-20 rounded-[4rem] text-white shadow-2xl text-center relative overflow-hidden border-8 border-white/50 backdrop-blur-sm">
                <Award size={48} className="mx-auto mb-8 text-[#0DBAAC]" />
                <p className="text-8xl font-bold mb-2 tracking-tighter">+340%</p>
                <p className="text-[#0DBAAC] text-lg font-medium opacity-90 uppercase tracking-widest">Crecimiento en Facturación</p>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0DBAAC]/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO BARCELONA */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-20 leading-[1.1] tracking-tight text-[#0A1738] animate-reveal">
              Somos una agencia de <span className="text-[#0DBAAC]">desarrollo web</span> <br/>
              y <span className="text-[#0DBAAC]">marketing digital</span> en Barcelona
            </h2>
            
            <div className="grid md:grid-cols-2 gap-20 items-start animate-reveal delay-200">
              <div className="text-2xl font-semibold text-[#0A1738] leading-snug">
                <p>En 2010 iniciamos nuestra andadura, <span className="text-[#0DBAAC]">diseñando e innovando</span> desde nuestra oficina de Barcelona.</p>
              </div>
              <div className="text-lg text-slate-500 space-y-6 leading-relaxed">
                <p>Nuestra metodología combina la estética médica con el rigor técnico necesario para convertir visitantes en pacientes.</p>
                <p>Actualmente, trabajamos con clínicas que buscan dar el salto al siguiente nivel de facturación.</p>
              </div>
            </div>

            <div 
              className="mt-24 flex flex-wrap justify-center gap-4 opacity-20"
              style={{ transform: `translateY(${offset * -0.08}px)` }}
            >
              {Array.from({ length: 42 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 rounded-full bg-[#0A1738]"
                  style={{ animation: `fullPulse 4s ease-in-out infinite`, animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO MÍDIA SOCIAL */}
        <section className="py-32 relative bg-[#0A1738]">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20 animate-reveal">
              <span className="inline-flex items-center gap-2 text-[#0DBAAC] text-sm font-semibold uppercase tracking-widest mb-6">
                <Instagram size={16} /> Redes Sociales
              </span>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                Tu presencia en <span className="text-[#0DBAAC]">redes sociales</span><br/>
                que genera resultados
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20 animate-reveal delay-200">
              {socialServices.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all hover:-translate-y-2 group">
                  <service.icon size={40} className="text-[#0DBAAC] mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8 animate-reveal delay-300" style={{ transform: `translateY(${offset * 0.03}px)` }}>
              {socialStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon size={32} className="mx-auto text-[#0DBAAC] mb-4" />
                  <p className="text-6xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-[#0DBAAC] uppercase tracking-widest text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0DBAAC]/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0DBAAC]/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        </section>

        {/* SEÇÃO WEBSITE & SEO & UX */}
        <section className="py-32 relative overflow-hidden">
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.02] z-0"
            style={{
              backgroundImage: `radial-gradient(circle, #0A1738 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
              transform: `translateY(${offset * -0.05}px)`,
            }}
          />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
              <div className="animate-reveal">
                <span className="inline-flex items-center gap-2 text-[#0DBAAC] text-sm font-semibold uppercase tracking-widest mb-6">
                  <Globe size={16} /> Web & SEO & UX
                </span>
                <h2 className="text-5xl md:text-7xl font-bold text-[#0A1738] tracking-tight leading-[1.1] mb-8">
                  Websites que <span className="text-[#0DBAAC]">dominan</span><br/>
                  los resultados de búsqueda
                </h2>
                <p className="text-xl text-slate-500 leading-relaxed max-w-lg">
                  Combinamos diseño excepcional, experiencia de usuario optimizada y estrategias SEO avanzadas para posicionar tu clínica en la cima de Google.
                </p>
              </div>

              <div className="animate-reveal delay-200" style={{ transform: `translateY(${offset * 0.04}px)` }}>
                <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-200 relative overflow-hidden">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-[#0DBAAC]/60"></div>
                    <div className="w-3 h-3 rounded-full bg-[#0DBAAC]"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-[#0A1738]/10 rounded-full w-3/4"></div>
                    <div className="h-4 bg-[#0DBAAC]/30 rounded-full w-1/2"></div>
                    <div className="h-24 bg-[#0DBAAC]/20 rounded-2xl mt-6 flex items-center justify-center">
                      <Search size={32} className="text-[#0DBAAC]" />
                    </div>
                    <div className="h-4 bg-[#0A1738]/10 rounded-full w-full"></div>
                    <div className="h-4 bg-[#0A1738]/10 rounded-full w-5/6"></div>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#0DBAAC]/10 rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-reveal delay-300">
              {webFeatures.map((feature, index) => (
                <div key={index} className="group p-8 rounded-3xl border border-slate-200 hover:border-[#0DBAAC]/30 bg-white hover:bg-white/80 transition-all hover:-translate-y-1">
                  <feature.icon size={36} className="text-[#0DBAAC] mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-[#0A1738] mb-3">{feature.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO AUTOMAÇÃO */}
        <section className="py-32 relative bg-[#0A1738] overflow-hidden">
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(45deg, transparent 45%, #0DBAAC 45%, #0DBAAC 55%, transparent 55%)`,
              backgroundSize: '20px 20px',
              transform: `translateX(${offset * 0.02}px)`,
            }}
          />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20 animate-reveal">
              <span className="inline-flex items-center gap-2 text-[#0DBAAC] text-sm font-semibold uppercase tracking-widest mb-6">
                <Bot size={16} /> Automatización
              </span>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
                <span className="text-[#0DBAAC]">Automatiza</span> tu clínica<br/>
                y multiplica resultados
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Implementamos sistemas inteligentes que trabajan 24/7 para captar, convertir y fidelizar pacientes.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="grid sm:grid-cols-2 gap-6 animate-reveal delay-200">
                {automations.map((item, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all hover:-translate-y-1 group">
                    <item.icon size={32} className="text-[#0DBAAC] mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="animate-reveal delay-300" style={{ transform: `translateY(${offset * 0.04}px)` }}>
                <div className="bg-white p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-center mb-8">
                    <div className="relative">
                      <Cog size={80} className="text-[#0DBAAC] animate-spin" style={{ animationDuration: '8s' }} />
                      <Cog size={50} className="text-[#0A1738]/20 absolute -top-6 -right-8 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
                      <Cog size={35} className="text-[#0DBAAC]/50 absolute -bottom-4 -left-6 animate-spin" style={{ animationDuration: '10s' }} />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <Clock size={24} className="text-[#0DBAAC]" />
                      <span className="text-5xl font-bold text-[#0A1738]">85%</span>
                    </div>
                    <p className="text-[#0DBAAC] uppercase tracking-widest text-sm font-medium">Ahorro de Tiempo</p>
                  </div>
                  <div className="absolute top-0 left-0 w-32 h-32 bg-[#0DBAAC]/10 rounded-full -ml-16 -mt-16 blur-2xl"></div>
                </div>
              </div>
            </div>

            <div className="text-center animate-reveal delay-400">
              <Link 
                to="/contacto" 
                className="inline-flex bg-[#0DBAAC] text-white px-12 py-6 rounded-2xl font-bold items-center hover:bg-[#0a8d82] transition-all shadow-xl shadow-[#0DBAAC]/20 hover:-translate-y-1 text-lg"
              >
                Descubre Cómo Automatizar <ArrowRight className="ml-3" size={24} />
              </Link>
            </div>
          </div>
        </section>

        {/* SEÇÃO GOOGLE REVIEWS */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16 animate-reveal">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-slate-200 text-[#0A1738] px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm mb-6">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google Reviews
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-[#0A1738] tracking-tight leading-[1.1]">
                Lo que dicen <span className="text-[#0DBAAC]">nuestros clientes</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-reveal delay-200">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-[#0DBAAC]/20 flex items-center justify-center text-[#0DBAAC] font-bold text-lg">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0A1738]">{review.name}</h4>
                      <p className="text-sm text-slate-500">{review.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={18} className="fill-[#0DBAAC] text-[#0DBAAC]" />
                    ))}
                  </div>
                  <p className="text-slate-500 leading-relaxed text-sm">"{review.text}"</p>
                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="text-xs text-slate-500">Publicado en Google</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 animate-reveal delay-300">
              <div className="inline-flex items-center gap-3 bg-white border border-slate-200 px-8 py-4 rounded-2xl shadow-md">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={20} className="fill-[#0DBAAC] text-[#0DBAAC]" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-[#0A1738]">5.0</span>
                <span className="text-slate-500">basado en +50 reseñas</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <style>{`
        @keyframes fullPulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .animate-reveal {
          animation: reveal 1s cubic-bezier(0, 0, 0.2, 1) forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        @keyframes reveal {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
