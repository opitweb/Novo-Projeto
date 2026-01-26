import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, Award, Instagram, Facebook, Linkedin, 
  TrendingUp, Users, Heart, Globe, Search, Palette, Zap, Monitor, 
  BarChart3, Bot, Workflow, Calendar, MessageSquare, Cog, Target, Star 
} from 'lucide-react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Importação do Chatbot
import Chatbot from './components/Chatbot/Chatbot';

export default function Index() {
  const [offset, setOffset] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  // Estado para o Banner Rotativo
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { value: 340, label: "Crecimiento en \n Facturación", icon: Award, suffix: "%" },
    { value: 150, label: "Nuevos Pacientes \n Mensuales", icon: Users, suffix: "+" },
    { value: 98, label: "Tasa de \n Fidelización", icon: Heart, suffix: "%" }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);

    const ctx = gsap.context(() => {
      // 1. Animação das Bolinhas de Fundo
      if (dotsRef.current) {
        gsap.to(dotsRef.current, {
          y: -20,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }

      // 2. Animação de Flutuação do Banner
      gsap.to(".hero-banner", {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // 3. Função do Contador (0 até o alvo)
      const animateNumber = (target: number) => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power3.out",
          onUpdate: () => {
            if (numberRef.current) numberRef.current.innerText = Math.ceil(obj.val).toString();
          }
        });
      };

      // Inicia o primeiro contador
      animateNumber(steps[0].value);

      // 4. Loop de Troca de Banner (cada 5 segundos)
      const bannerTimer = setInterval(() => {
        setActiveStep((prev) => {
          const next = (prev + 1) % steps.length;
          animateNumber(steps[next].value);
          gsap.fromTo(".banner-content-inner", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5 });
          return next;
        });
      }, 5000);

      // 5. Timeline de Entrada (Hero)
      const heroTl = gsap.timeline();
      heroTl.from(".hero-badge", { opacity: 0, y: -20, duration: 0.6 })
            .from(".hero-title", { opacity: 0, y: 50, duration: 1 }, "-=0.3")
            .from(".hero-subtitle", { opacity: 0, y: 50, duration: 1 }, "-=0.7")
            .from(".hero-button", { opacity: 0, y: 30, duration: 1 }, "-=0.7")
            .from(".hero-banner", { opacity: 0, scale: 0.8, duration: 1.2, ease: "back.out(1.7)" }, "-=1");

      // 6. Animação dos cards ao scroll
      gsap.utils.toArray('.service-card').forEach((card: any) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 85%" },
          opacity: 0, 
          y: 50, 
          duration: 1, 
          ease: "power3.out"
        });
      });

      return () => clearInterval(bannerTimer);
    }, mainRef);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  // Dados das Seções (Mantidos integralmente)
  const socialServices = [
    { icon: Instagram, title: "Instagram & TikTok", description: "Contenido visual que conecta con pacientes potenciales." },
    { icon: Facebook, title: "Facebook Ads", description: "Campañas segmentadas para captar pacientes cualificados." },
    { icon: Linkedin, title: "LinkedIn", description: "Posicionamiento profesional para especialistas." },
  ];

  const automations = [
    { icon: Calendar, title: "Reservas Automatizadas", description: "Sistema de citas online integrado con tu agenda." },
    { icon: MessageSquare, title: "Chatbots Inteligentes", description: "Atención 24/7 para consultas y captación de leads." },
    { icon: Workflow, title: "Email Marketing", description: "Secuencias automatizadas de seguimiento." },
    { icon: Target, title: "Lead Scoring", description: "Clasificación automática de prospectos." },
  ];

  const reviews = [
    { name: "Dr. María García", role: "Cirujana Plástica", rating: 5, text: "Betterfly transformó nuestra presencia digital.", avatar: "MG" },
    { name: "Clínica Dental Sonrisa", role: "Odontología", rating: 5, text: "Nuestro SEO pasó de la página 5 a los primeros resultados.", avatar: "CS" },
    { name: "Dr. Carlos Fernández", role: "Dermatólogo", rating: 5, text: "La automatización de citas nos ahorró horas de trabajo.", avatar: "CF" },
    { name: "Centro Médico Salud", role: "Medicina General", rating: 5, text: "Excelente servicio y engagement en redes sociales.", avatar: "CM" },
  ];

  const CurrentIcon = steps[activeStep].icon;

  return (
    <div ref={mainRef} className="min-h-screen bg-[#F5F5F5] text-[#0A1738] relative overflow-hidden font-['Poppins']">
      
      {/* FUNDO DE BOLINHAS ANIMADO */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          ref={dotsRef}
          className="absolute inset-0 w-full h-[115%] opacity-[0.12]"
          style={{
            backgroundImage: `radial-gradient(#0DBAAC 2px, transparent 2px)`,
            backgroundSize: '45px 45px',
            maskImage: 'radial-gradient(circle at center, black, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 90%)'
          }}
        />
      </div>

      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="pt-24 pb-12 px-6 min-h-[90vh] lg:h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-8">
              <div className="hero-badge inline-flex items-center gap-3 bg-white/80 border border-slate-200 px-6 py-2 rounded-full text-sm font-semibold shadow-sm">
                <Sparkles size={14} className="text-[#0DBAAC]" /> Marketing Médico en Barcelona
              </div>
              <h1 className="hero-title text-5xl lg:text-7xl font-bold text-[#0A1738] leading-[1.1]">
                Estratégias de <br/> marketing digital <br/>
                <span className="font-light italic text-[#0DBAAC] text-4xl lg:text-6xl lowercase">barcelona</span>
              </h1>
              <p className="hero-subtitle text-lg md:text-xl text-slate-500 border-l-2 border-[#0DBAAC] pl-6 max-w-md">
                Marketing de alto nivel para especialistas que desean aumentar la visibilidad y citas.
              </p>
              <div className="hero-button">
                <Link to="/contacto" className="inline-flex bg-[#0DBAAC] text-white px-10 py-5 rounded-2xl font-bold items-center hover:bg-[#0a8d82] transition-all shadow-xl shadow-[#0DBAAC]/20">
                  Análisis Gratuito <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>

            {/* BANNER DINÂMICO COM CONTADOR */}
            <div className="relative w-full flex justify-center items-center">
              <div className="hero-banner relative z-20">
                <div className="bg-[#0A1738] p-12 lg:p-16 rounded-[4rem] text-white shadow-2xl text-center border-8 border-white/50 max-w-[450px] aspect-square flex flex-col justify-center items-center overflow-hidden">
                  <div className="banner-content-inner flex flex-col items-center">
                    <CurrentIcon size={54} className="text-[#0DBAAC] mb-6" />
                    <p className="text-7xl lg:text-8xl font-bold mb-2 tracking-tighter">
                      {steps[activeStep].suffix === '+' ? '' : '+'}<span ref={numberRef}>0</span>{steps[activeStep].suffix}
                    </p>
                    <p className="text-[#0DBAAC] text-sm lg:text-lg font-bold uppercase tracking-[0.2em] whitespace-pre-line leading-tight h-12">
                      {steps[activeStep].label}
                    </p>
                  </div>
                  {/* Indicadores de Progresso */}
                  <div className="flex gap-2 mt-8">
                    {steps.map((_, i) => (
                      <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === activeStep ? 'bg-[#0DBAAC] w-10' : 'bg-white/20 w-4'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO BARCELONA */}
        <section className="py-24 bg-white/40 backdrop-blur-sm border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-[#0A1738]">
              Atraemos más pacientes a <span className="text-[#0DBAAC]">tu clínica.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <p className="text-xl font-semibold">Diseñando e innovando desde Barcelona.</p>
              <p className="text-slate-500">Nuestra metodología combina estética médica con rigor técnico.</p>
            </div>
          </div>
        </section>

        {/* SEÇÃO MÍDIA SOCIAL */}
        <section className="py-32 bg-[#0A1738]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-white mb-6">Redes Sociales que <span className="text-[#0DBAAC]">venden</span></h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {socialServices.map((s, i) => (
                <div key={i} className="service-card bg-white/5 p-10 rounded-3xl border border-white/10">
                  <s.icon size={40} className="text-[#0DBAAC] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
                  <p className="text-white/70">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO AUTOMAÇÃO */}
        <section className="py-32 bg-[#0A1738] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-center text-5xl font-bold text-white mb-20">Automatiza tu <span className="text-[#0DBAAC]">clínica</span></h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="grid sm:grid-cols-2 gap-6">
                {automations.map((a, i) => (
                  <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                    <a.icon size={32} className="text-[#0DBAAC] mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">{a.title}</h3>
                    <p className="text-white/60 text-sm">{a.description}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white p-16 rounded-[3rem] text-center">
                <Cog size={80} className="text-[#0DBAAC] mx-auto mb-6 animate-spin-slow" />
                <p className="text-6xl font-bold text-[#0A1738]">85%</p>
                <p className="text-[#0DBAAC] font-bold">Ahorro de Tiempo</p>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold text-[#0A1738] mb-16">Opiniones</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reviews.map((r, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg text-left">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#0DBAAC]/10 flex items-center justify-center font-bold text-[#0DBAAC]">{r.avatar}</div>
                    <div><h4 className="font-bold text-sm">{r.name}</h4></div>
                  </div>
                  <p className="text-slate-700 text-sm italic mb-4">"{r.text}"</p>
                  <div className="flex text-[#0DBAAC]">{Array.from({length: 5}).map((_, j) => <Star key={j} size={14} fill="#0DBAAC" />)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Chatbot />
      </main>

      <style>{`
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
