import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles, ArrowRight, Award, Instagram, Facebook,
  TrendingUp, Users, Heart, Globe, Search, Palette, Zap, Monitor,
  BarChart3, Bot, Workflow, Calendar, MessageSquare, Cog, Clock,
  Target, Star
} from 'lucide-react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Chatbot from './components/chatbot/Chatbot';

export default function Index() {
  const [offset, setOffset] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [count, setCount] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);

  /* ---------------- PARALLAX ---------------- */
  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ---------------- GSAP ---------------- */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".barcelona-content", {
        scrollTrigger: { trigger: ".barcelona-content", start: "top 80%" },
        opacity: 0,
        x: -50,
        duration: 1.2,
        ease: "power2.out"
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  /* ---------------- HERO GSAP ---------------- */
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".hero-badge", { opacity: 0, y: -20, duration: 0.6 })
      .from(".hero-title", { opacity: 0, y: 50, duration: 1 }, "-=0.3")
      .from(".hero-subtitle", { opacity: 0, y: 50, duration: 1 }, "-=0.7")
      .from(".hero-button", { opacity: 0, y: 30, duration: 1 }, "-=0.7");
  }, []);

  /* ---------------- SLIDER ---------------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  /* ---------------- CONTADOR +340 ---------------- */
  useEffect(() => {
    if (activeSlide === 0) {
      let start = 0;
      const end = 340;
      const duration = 1500;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    } else {
      setCount(0);
    }
  }, [activeSlide]);

  return (
    <div
      ref={mainRef}
      className="min-h-screen bg-[#F5F5F5] text-[#0A1738] relative overflow-hidden font-['Poppins']"
    >

      {/* LINHAS */}
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

        {/* HERO */}
        <section className="pt-24 pb-16 px-6 min-h-[90vh] lg:h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

            {/* TEXTO */}
            <div className="space-y-8">
              <span className="hero-badge inline-flex items-center gap-2 bg-[#0DBAAC]/10 text-[#0DBAAC] px-4 py-2 rounded-full text-sm font-bold">
                <Sparkles size={16} /> AGENCIA DE MARKETING MÉDICO
              </span>

              <h1 className="hero-title text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="block leading-[1.1]">Estratégias de</span>
                <span className="block leading-[1.15]">marketing digital</span>
                <span className="block font-light italic text-[#0DBAAC] text-4xl lg:text-6xl mt-3 lowercase">
                  Barcelona
                </span>
              </h1>

              <p className="hero-subtitle text-lg text-slate-500 border-l-2 border-[#0DBAAC] pl-6 max-w-md">
                Marketing de alto nivel para especialistas que
                <span className="text-[#0A1738] font-medium"> desean aumentar la visibilidad y las citas.</span>
              </p>

              <div className="hero-button">
                <Link
                  to="/contacto"
                  className="inline-flex bg-[#0DBAAC] text-white px-10 py-4 rounded-2xl font-bold items-center hover:bg-[#0a8d82] transition shadow-xl"
                >
                  Análisis Gratuito <ArrowRight className="ml-2" />
                </Link>
              </div>
            </div>

            {/* BANNER */}
            <div
              className="hidden lg:flex justify-end"
              style={{ transform: `translateY(${offset * 0.05}px)` }}
            >
              <div className="relative w-[500px] h-[500px] bg-[#0A1738] rounded-[4rem] text-white shadow-2xl overflow-hidden border-8 border-white/50">

                {/* SLIDE 1 */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center p-12 transition-all duration-700 ${activeSlide === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <Award size={60} className="mb-6 text-[#0DBAAC]" />
                  <p className="text-8xl font-bold mb-2">+{count}%</p>
                  <p className="text-[#0DBAAC] uppercase tracking-widest text-center">
                    Crecimiento en <br /> Facturación
                  </p>
                </div>

                {/* SLIDE 2 */}
                <div className={`absolute inset-0 transition-all duration-700 ${activeSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
                  <img src="/foto-facebook.jpg" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1738] via-[#0A1738]/40 to-transparent flex flex-col items-center justify-center p-12">
                    <div className="bg-[#1877F2] p-4 rounded-2xl mb-4">
                      <Facebook size={40} fill="white" />
                    </div>
                    <h3 className="text-3xl font-bold">Facebook Ads</h3>
                  </div>
                </div>

                {/* SLIDE 3 */}
                <div className={`absolute inset-0 transition-all duration-700 ${activeSlide === 2 ? 'opacity-100' : 'opacity-0'}`}>
                  <img src="/foto-instagram.jpg" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1738] via-[#0A1738]/40 to-transparent flex flex-col items-center justify-center p-12">
                    <div className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-4 rounded-2xl mb-4">
                      <Instagram size={40} />
                    </div>
                    <h3 className="text-3xl font-bold">Social Media</h3>
                  </div>
                </div>

                {/* DOTS */}
                <div className="absolute bottom-10 flex gap-3 left-1/2 -translate-x-1/2">
                  {[0, 1, 2].map(i => (
                    <div
                      key={i}
                      className={`h-2 rounded-full transition-all ${
                        activeSlide === i ? 'w-10 bg-[#0DBAAC]' : 'w-2 bg-white/50'
                      }`}
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      {/* CHATBOT ADICIONADO AQUI */}
      <Chatbot />

      <style>{`
        .animate-reveal {
          animation: reveal 1s cubic-bezier(0, 0, 0.2, 1) forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        @keyframes reveal {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
