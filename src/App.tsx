import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, Instagram, Facebook, Linkedin, 
  Bot, Workflow, Calendar, MessageSquare, Cog, Star 
} from 'lucide-react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
      // 1. Entrada da Hero Section
      const heroTl = gsap.timeline();
      heroTl.from(".hero-badge", { opacity: 0, y: -20, duration: 0.6 })
            .from(".hero-title", { opacity: 0, y: 50, duration: 1 }, "-=0.3")
            .from(".hero-subtitle", { opacity: 0, y: 50, duration: 1 }, "-=0.7")
            .from(".hero-button", { opacity: 0, y: 30, duration: 1 }, "-=0.7")
            .from(".sphere-frame", { opacity: 0, scale: 0.8, duration: 1.2, ease: "power2.out" }, "-=1");

      // 2. GIRO VERTICAL APENAS DO VÍDEO DENTRO DA ESFERA
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          rotationY: 360,
          duration: 15,
          repeat: -1,
          ease: "none"
        });
      }

      // 3. EFEITO LETREIRO NOS TÍTULOS H1, H2, H3, H4
      const headings = document.querySelectorAll('h1, h2, h3, h4');
      
      headings.forEach((heading) => {
        const text = heading.textContent || '';
        const spans = text.split('').map(char => 
          char === ' ' ? '<span class="inline-block">&nbsp;</span>' : 
          `<span class="inline-block">${char}</span>`
        ).join('');
        
        heading.innerHTML = spans;
        const letters = heading.querySelectorAll('span');

        // Animação ao passar o mouse - efeito letreiro
        heading.addEventListener('mouseenter', () => {
          gsap.to(letters, {
            x: -20,
            opacity: 0,
            stagger: 0.02,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
              gsap.fromTo(letters,
                { x: 20, opacity: 0 },
                { x: 0, opacity: 1, stagger: 0.02, duration: 0.3, ease: "power2.out" }
              );
            }
          });
        });
      });

    }, mainRef);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  // Dados das seções restaurados
  const socialServices = [
    { icon: Instagram, title: "Instagram & TikTok", description: "Contenido visual que conecta con pacientes potenciales y genera confianza." },
    { icon: Facebook, title: "Facebook Ads", description: "Campañas segmentadas para captar pacientes cualificados en tu zona." },
    { icon: Linkedin, title: "LinkedIn", description: "Posicionamiento profesional para especialistas y clínicas de referencia." },
  ];

  const automations = [
    { icon: Calendar, title: "Reservas Automatizadas", description: "Sistema de citas online integrado con tu agenda." },
    { icon: MessageSquare, title: "Chatbots Inteligentes", description: "Atención 24/7 para consultas y captación de leads." },
    { icon: Workflow, title: "Email Marketing", description: "Secuencias automatizadas de seguimiento y fidelización." },
    { icon: Cog, title: "Lead Scoring", description: "Clasificación automática de prospectos." },
  ];

  const reviews = [
    { name: "Dr. María García", role: "Cirujana Plástica", rating: 5, text: "Betterfly transformó completamente nuestra presencia digital. En 6 meses duplicamos las consultas.", avatar: "MG" },
    { name: "Clínica Dental Sonrisa", role: "Odontología", rating: 5, text: "El equipo es increíble. Nuestro SEO pasó de la página 5 a los primeiros resultados.", avatar: "CS" },
    { name: "Dr. Carlos Fernández", role: "Dermatólogo", rating: 5, text: "La automatización de citas nos ahorró horas de trabalho administrativo.", avatar: "CF" },
    { name: "Centro Médico Salud", role: "Medicina General", rating: 5, text: "Excelente servicio. Las redes sociales nunca habían tenido tanto engagement.", avatar: "CM" },
  ];

  return (
    <div ref={mainRef} className="min-h-screen bg-[#F5F5F5] text-[#0A1738] relative overflow-hidden font-['Poppins']">
      
      {/* Background Dot Grid */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(#0DBAAC 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to bottom, black 50%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent)'
          }}
        />
      </div>

      {/* CSS para animações */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .social-card {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .social-card:nth-child(1) {
          animation-delay: 0.2s;
        }

        .social-card:nth-child(2) {
          animation-delay: 0.4s;
        }

        .social-card:nth-child(3) {
          animation-delay: 0.6s;
        }

        .social-card:hover {
          transform: translateY(-8px);
          transition: transform 0.3s ease;
        }

        /* Estilo para títulos com efeito letreiro */
        h1, h2, h3, h4 {
          cursor: pointer;
          user-select: none;
        }

        h1 span, h2 span, h3 span, h4 span {
          display: inline-block;
          transition: color 0.3s ease;
        }
      `}</style>

      <main className="relative z-10">
        
        {/* HERO SECTION COM ESFERA #0DBAAC - RESPONSIVO */}
        <section className="pt-24 pb-12 px-4 sm:px-6 min-h-[90vh] lg:h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            <div className="hero-content space-y-6 sm:space-y-8">
              <div className="hero-badge inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-slate-200 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
                <Sparkles size={14} className="text-[#0DBAAC]" /> Marketing Médico en Barcelona
              </div>
              <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[#0A1738] leading-[1.1]">
                Estratégias de marketing digital Barcelona
              </h1>
              <p className="hero-subtitle text-base sm:text-lg text-slate-500 border-l-2 border-[#0DBAAC] pl-4 sm:pl-6 max-w-md">
                Marketing de alto nivel para especialistas que desean aumentar la visibilidad y las citas de su clínica.
              </p>
              <div className="hero-button">
                <Link to="/contacto" className="inline-flex bg-[#0DBAAC] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold items-center hover:bg-[#0a8d82] transition-all shadow-xl shadow-[#0DBAAC]/20 text-sm sm:text-base">
                  Análisis Gratuito <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>

            {/* ESFERA FIXA COM VÍDEO GIRANDO - RESPONSIVA */}
            <div className="flex justify-center items-center perspective-[1000px] mt-8 lg:mt-0">
              <div className="sphere-frame relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] rounded-full flex items-center justify-center">
                <div className="absolute inset-0 bg-[#0DBAAC]/20 blur-[80px] sm:blur-[120px] rounded-full" />
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_20px_50px_rgba(13,186,172,0.3)] bg-[#0DBAAC] flex items-center justify-center">
                  <video 
                    ref={videoRef}
                    autoPlay muted loop playsInline 
                    className="w-full h-full object-cover scale-110 opacity-90 mix-blend-screen"
                  >
                    <source src="https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/video.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#0DBAAC]/20 via-transparent to-white/30 pointer-events-none" />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_80px_rgba(0,0,0,0.2)] pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO BARCELONA */}
        <section className="py-24 md:py-32 bg-white/40 backdrop-blur-sm relative z-20 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 leading-[1.05] text-[#0A1738]">
              Atraemos más pacientes a tu clínica con estrategias digitales probadas.
            </h2>
            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              <div className="text-xl md:text-2xl font-semibold text-[#0A1738]">
                <p>En 2010 iniciamos nuestra andadura, diseñando e innovando desde nuestra oficina de Barcelona.</p>
              </div>
              <div className="text-base md:text-lg text-slate-500 space-y-6">
                <p>Nuestra metodología combina la estética médica con el rigor técnico necesario para convertir visitantes en pacientes.</p>
                <p>Actualmente, trabajamos con clínicas que buscan dar el salto al siguiente nivel.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO MÍDIA SOCIAL - COM ANIMAÇÃO CSS */}
        <section className="py-32 bg-[#0A1738]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">Tu presencia en redes sociales</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {socialServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="social-card bg-white/5 border border-white/10 p-10 rounded-3xl group cursor-pointer">
                    <Icon size={40} className="text-[#0DBAAC] mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-white/70">{service.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* SEÇÃO AUTOMAÇÃO */}
        <section className="py-32 bg-[#0A1738] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid sm:grid-cols-2 gap-6">
              {automations.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                    <Icon size={32} className="text-[#0DBAAC] mb-4" />
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </div>
                )
              })}
            </div>
            <div className="mt-12 lg:mt-0 bg-white p-16 rounded-[3rem] text-center">
              <Cog size={80} className="text-[#0DBAAC] mx-auto mb-6 animate-spin" style={{ animationDuration: '8s' }} />
              <p className="text-5xl font-bold text-[#0A1738]">85%</p>
              <p className="text-[#0DBAAC] uppercase text-sm font-medium">Ahorro de Tiempo</p>
            </div>
          </div>
        </section>

        {/* SEÇÃO REVIEWS - ESTILO GOOGLE MELHORADO */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A1738] mb-4">Lo que dicen nuestros clientes</h2>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex gap-1 text-[#FBBC04]">
                  {Array.from({length: 5}).map((_, i) => <Star key={i} size={28} fill="currentColor" />)}
                </div>
                <span className="text-3xl font-bold text-[#0A1738] ml-2">5.0</span>
              </div>
              <p className="text-slate-500 text-sm">Basado en 127 reseñas</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#0DBAAC] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {review.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-[#0A1738] text-sm truncate">{review.name}</h4>
                      <p className="text-slate-500 text-xs truncate">{review.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({length: 5}).map((_, i) => (
                      <Star key={i} size={16} fill="#FBBC04" className="text-[#FBBC04]" />
                    ))}
                  </div>
                  
                  <p className="text-slate-700 text-sm leading-relaxed">{review.text}</p>
                  
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-xs text-slate-400">Reseña verificada • Google</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-[#0DBAAC] hover:text-[#0a8d82] font-semibold transition-colors"
              >
                Ver todas las reseñas
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <Chatbot />
      </main>
    </div>
  );
}
