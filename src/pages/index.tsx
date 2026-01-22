import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight, Award, BarChart3, Users, CheckCircle2, Star, Calendar,
  Shield, TrendingUp, Heart, Stethoscope, ChevronRight, Zap, Target,
  Globe, Clock, ArrowUpRight, Play, X, Menu,
  Phone, Mail, MapPin, Sparkles
} from 'lucide-react';

const HealthMarketingLanding = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) =>
      setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* SEO TÉCNICO – VITE */}
      <Helmet>
        <title>
          Betterfly | Estudio de Marca y Marketing Digital para Salud en Barcelona
        </title>
        <meta
          name="description"
          content="Estudio de marca y marketing digital para profesionales de la salud en Barcelona. Posicionamiento estratégico, ética y presencia digital que genera confianza."
        />
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
        <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-30" />

        {/* HERO */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div className="space-y-8">

                {/* H1 SEO INVISÍVEL */}
                <h1 className="sr-only">
                  Estudio de Marca y Marketing Digital para Profesionales de la Salud en Barcelona
                </h1>

                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm text-cyan-400 px-5 py-3 rounded-full text-sm font-bold">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                  Estudio especializado en salud en Barcelona
                </div>

                {/* Headline visual – INALTERADA */}
                <div className="text-6xl lg:text-7xl font-black leading-tight">
                  <span className="block text-white mb-2">Marketing Médico</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
                    estratégico
                  </span>
                  <span className="block text-white">y ético</span>
                </div>

                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                  Construimos posicionamiento digital sólido para profesionales y clínicas
                  de salud en Barcelona, con estrategias que generan
                  <span className="text-cyan-400 font-bold">
                    {' '}confianza, claridad y crecimiento sostenible
                  </span>.
                </p>
              </div>

              {/* VISUAL: permanece exatamente igual */}
              <div />
            </div>
          </div>
        </section>

        {/* SEO LOCAL INVISÍVEL */}
        <section className="sr-only">
          <h2>Estudio de Marketing Digital en Barcelona</h2>
          <p>
            Betterfly es un estudio de marca y marketing digital especializado en
            profesionales de la salud, bienestar y cuidado en Barcelona.
            Trabajamos con clínicas, terapeutas, psicólogos y profesionales sanitarios
            respetando la ética y la comunicación responsable.
          </p>
        </section>
      </div>
    </>
  );
};

export default HealthMarketingLanding;
