import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
  Workflow,
  Calendar,
  MessageSquare,
  Cog,
  Star,
} from 'lucide-react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Chatbot from './components/Chatbot/Chatbot';

export default function Index() {
  const mainRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const butterfliesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      /* HERO ENTRANCE */
      gsap
        .timeline()
        .from('.hero-title', { opacity: 0, y: 50, duration: 1 })
        .from('.hero-subtitle', { opacity: 0, y: 30, duration: 0.8 }, '-=0.6')
        .from('.hero-button', { opacity: 0, y: 20, duration: 0.8 }, '-=0.6');

      /* VIDEO ROTATION */
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          rotationY: 360,
          duration: 15,
          repeat: -1,
          ease: 'none',
        });
      }

      /* BUTTERFLIES – DESKTOP ONLY */
      if (butterfliesRef.current && window.innerWidth >= 1024) {
        const butterflies =
          butterfliesRef.current.querySelectorAll('.butterfly');

        butterflies.forEach((butterfly, index) => {
          const particles = butterfly.querySelectorAll('.particle');

          const tl = gsap.timeline({
            delay: index * 0.4,
            repeat: -1,
            repeatDelay: 6,
          });

          tl.from(butterfly, {
            scale: 0,
            rotation: -180,
            opacity: 0,
            duration: 0.8,
            ease: 'back.out(1.7)',
          })
            .to(butterfly, {
              rotation: 720,
              duration: 2.5,
              ease: 'none',
            })
            .to(
              particles,
              {
                opacity: 1,
                scale: 1.2,
                x: (i) =>
                  Math.cos((i / particles.length) * Math.PI * 2) * 100,
                y: (i) =>
                  Math.sin((i / particles.length) * Math.PI * 2) * 100,
                duration: 1,
                ease: 'power2.out',
              },
              '-=1'
            )
            .to(particles, {
              opacity: 0,
              scale: 0,
              duration: 0.6,
              ease: 'power2.in',
            })
            .set(butterfly, { rotation: 0 })
            .set(particles, { x: 0, y: 0, scale: 0, opacity: 0 });
        });
      }
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const socialServices = [
    {
      icon: Instagram,
      title: 'Instagram & TikTok',
      description:
        'Contenido visual que conecta con pacientes potenciales y genera confianza.',
    },
    {
      icon: Facebook,
      title: 'Facebook Ads',
      description:
        'Campañas segmentadas para captar pacientes cualificados en tu zona.',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description:
        'Posicionamiento profesional para especialistas y clínicas de referencia.',
    },
  ];

  const automations = [
    {
      icon: Calendar,
      title: 'Reservas Automatizadas',
      description: 'Sistema de citas online integrado con tu agenda.',
    },
    {
      icon: MessageSquare,
      title: 'Chatbots Inteligentes',
      description: 'Atención 24/7 para consultas y captación de leads.',
    },
    {
      icon: Workflow,
      title: 'Email Marketing',
      description: 'Secuencias automatizadas de seguimiento y fidelización.',
    },
    {
      icon: Cog,
      title: 'Lead Scoring',
      description: 'Clasificación automática de prospectos.',
    },
  ];

  const reviews = [
    {
      name: 'Dr. María García',
      role: 'Cirujana Plástica',
      rating: 5,
      text:
        'Betterfly transformó completamente nuestra presencia digital. En 6 meses duplicamos las consultas.',
      avatar: 'MG',
    },
    {
      name: 'Clínica Dental Sonrisa',
      role: 'Odontología',
      rating: 5,
      text:
        'El equipo es increíble. Nuestro SEO pasó de la página 5 a los primeros resultados.',
      avatar: 'CS',
    },
    {
      name: 'Dr. Carlos Fernández',
      role: 'Dermatólogo',
      rating: 5,
      text:
        'La automatización de citas nos ahorró horas de trabajo administrativo.',
      avatar: 'CF',
    },
    {
      name: 'Centro Médico Salud',
      role: 'Medicina General',
      rating: 5,
      text:
        'Excelente servicio. Las redes sociales nunca habían tenido tanto engagement.',
      avatar: 'CM',
    },
  ];

  return (
    <div
      ref={mainRef}
      className="min-h-screen bg-[#F5F5F5] text-[#0A1738] overflow-hidden font-['Poppins']"
    >
      <main className="relative z-10">
        {/* HERO */}
        <section className="pt-32 lg:pt-40 pb-24">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="hero-title text-[3rem] md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight max-w-2xl">
                Marketing Digital
                <span className="block mt-2 font-light italic text-[#0DBAAC] text-2xl md:text-4xl lg:text-5xl lowercase">
                  Barcelona
                </span>
              </h1>

              <p className="hero-subtitle mt-6 text-base sm:text-lg text-slate-500 border-l-2 border-[#0DBAAC] pl-6 max-w-md">
                Marketing de alto nivel para especialistas que desean aumentar la
                visibilidad y las citas de su clínica.
              </p>

              <div className="hero-button mt-8">
                <Link
                  to="/contacto"
                  className="inline-flex items-center bg-[#0DBAAC] text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#0a8d82] transition-all shadow-xl"
                >
                  Análisis Gratuito <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div
                ref={butterfliesRef}
                className="absolute inset-0 hidden lg:block pointer-events-none"
              >
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="butterfly absolute"
                    style={{
                      top: `${20 + i * 12}%`,
                      left: i % 2 ? '15%' : '70%',
                    }}
                  >
                    <div className="butterfly-icon">🦋</div>
                    {Array.from({ length: 12 }).map((_, j) => (
                      <div key={j} className="particle" />
                    ))}
                  </div>
                ))}
              </div>

              <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden shadow-2xl bg-[#0DBAAC]">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover scale-110 opacity-90"
                >
                  <source
                    src="https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL */}
        <section className="py-28 bg-[#0A1738]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-20 text-center">
              Tu presencia en redes sociales
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {socialServices.map((service, i) => {
                const Icon = service.icon;
                return (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 p-10 rounded-3xl"
                  >
                    <Icon size={40} className="text-[#0DBAAC] mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-white/70">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* AUTOMATIONS */}
        <section className="py-28 bg-[#0A1738] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid sm:grid-cols-2 gap-6">
              {automations.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 p-8 rounded-3xl"
                  >
                    <Icon size={32} className="text-[#0DBAAC] mb-4" />
                    <h4 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-white/60 text-sm">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 lg:mt-0 bg-white p-16 rounded-[3rem] text-center">
              <Cog
                size={80}
                className="text-[#0DBAAC] mx-auto mb-6 animate-spin"
                style={{ animationDuration: '8s' }}
              />
              <p className="text-5xl font-bold text-[#0A1738]">85%</p>
              <p className="text-[#0DBAAC] uppercase text-sm font-medium">
                Ahorro de Tiempo
              </p>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Lo que dicen nuestros clientes
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border shadow-md"
                >
                  <h4 className="font-bold mb-1">{review.name}</h4>
                  <p className="text-xs text-slate-500 mb-3">{review.role}</p>
                  <p className="text-sm text-slate-700">{review.text}</p>
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
