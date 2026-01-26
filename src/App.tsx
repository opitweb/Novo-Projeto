 import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, Award, Instagram, Facebook, Linkedin, 
  TrendingUp, Users, Heart, Globe, Search, Palette, Zap, Monitor, 
  BarChart3, Bot, Workflow, Calendar, MessageSquare, Cog, Clock, 
  Target, Star 
} from 'lucide-react';

// 1. IMPORTAÇÕES GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ADIÇÃO: Importação do seu componente Chatbot
import Chatbot from './components/chatbot/Chatbot';

export default function Index() {
  const [offset, setOffset] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);

    let ctx = gsap.context(() => {
      // Animação do Hero e Elementos Visuais
      const tl = gsap.timeline();
      tl.from(".hero-badge", { opacity: 0, y: -20, duration: 0.6 })
        .from(".hero-title", { opacity: 0, y: 50, duration: 1, ease: "power4.out" }, "-=0.3")
        .from(".hero-subtitle", { opacity: 0, y: 50, duration: 1 }, "-=0.7")
        .from(".hero-images", { opacity: 0, scale: 0.8, duration: 1.2, ease: "back.out(1.7)" }, "-=1");

      gsap.from(".service-card", {
        scrollTrigger: { trigger: ".service-card", start: "top 85%" },
        opacity: 0, y: 50, duration: 1, stagger: 0.2
      });
    }, mainRef);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-[#F5F5F5] text-[#0A1738] relative overflow-hidden font-['Poppins']">
      
      {/* PARALLAX GRID BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute inset-0 w-full h-full" style={{
            backgroundImage: `linear-gradient(to right, #0A1738 1px, transparent 1px), linear-gradient(to bottom, #0A1738 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            transform: `translateY(${offset * -0.1}px)`
        }} />
      </div>

      <main className="relative z-10">
        
        {/* HERO SECTION COM H1 E FOTOS RESTAURADOS */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-10">
              <span className="hero-badge inline-flex items-center gap-2 bg-[#0DBAAC]/10 text-[#0DBAAC] px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase">
                <Sparkles size={16} /> Marketing para Especialistas
              </span>
              
              {/* H1 AJUSTADO: Tamanho massivo e tracking correto */}
              <h1 className="hero-title text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] text-[#0A1738]">
                Elevamos tu <br />
                <span className="text-[#0DBAAC] italic">Reputación.</span>
              </h1>
              
              <p className="hero-subtitle text-xl md:text-2xl text-slate-500 border-l-4 border-[#0DBAAC] pl-8 max-w-lg leading-relaxed">
                Marketing de alto nivel para médicos que <span className="text-[#0A1738] font-semibold">buscan la excelencia digital.</span>
              </p>

              <div className="hero-button flex gap-6">
                <Link to="/contacto" className="bg-[#0DBAAC] text-white px-12 py-5 rounded-2xl font-bold text-lg items-center flex hover:bg-[#0a8d82] transition-all shadow-2xl shadow-[#0DBAAC]/30 hover:-translate-y-1">
                  Análisis Gratuito <ArrowRight className="ml-2" />
                </Link>
              </div>
            </div>

            {/* SEÇÃO DAS FOTOS + BANNER AZUL (+340%) */}
            <div className="hero-images relative flex justify-end items-center">
              {/* Foto 1: Clínica/Médico */}
              <div className="absolute -left-10 top-0 w-64 h-80 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white z-20 rotate-[-5deg] hidden xl:block">
                <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80" alt="Médico" className="w-full h-full object-cover" />
              </div>
              
              {/* Box Principal +340% */}
              <div className="bg-[#0A1738] p-16 rounded-[5rem] text-white shadow-[0_50px_100px_-20px_rgba(10,23,56,0.3)] text-center relative overflow-hidden border-[12px] border-white max-w-[500px] aspect-square flex flex-col justify-center items-center z-10 transition-transform hover:scale-[1.02]">
                <Award size={56} className="mb-8 text-[#0DBAAC]" />
                <p className="text-8xl font-black mb-2 tracking-tighter">+340%</p>
                <p className="text-[#0DBAAC] text-xl font-bold uppercase tracking-widest leading-tight">Crecimiento en <br/> Facturación</p>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#0DBAAC]/20 rounded-full blur-3xl"></div>
              </div>

              {/* Foto 2: Detalhe Clínica */}
              <div className="absolute -right-6 -bottom-12 w-56 h-56 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white z-20 rotate-[10deg] hidden lg:block">
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80" alt="Clínica" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </section>

        {/* RESTANTE DO CÓDIGO (Barcelona, Social, Automación, etc. seguem iguais ao original) */}
        {/* ... (Omitido para brevidade, mas incluído no seu arquivo final) ... */}
        
      </main>

      <Chatbot />
    </div>
  );
}
