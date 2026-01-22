import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Award, BarChart3, Users, CheckCircle2, Star, Calendar, Shield, TrendingUp, Heart, Stethoscope, ChevronRight, Zap, Target, Globe, Lock, Clock, MessageSquare, ArrowUpRight, Play, X, Menu, Phone, Mail, MapPin, Sparkles } from 'lucide-react';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Aqui entra todo o conteúdo das 324 linhas: Header, Hero, Serviços, Testemunhos e Footer */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="text-blue-500 w-6 h-6" />
            <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">MedGrow Elite</span>
          </div>
          <button className="bg-blue-600 px-6 py-2 rounded-xl font-bold hover:bg-blue-500 transition-all">Auditoria Gratuita</button>
        </div>
      </header>

      <main className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-cyan-400 text-sm font-bold mb-8">
            <Sparkles className="w-4 h-4" /> #1 Agência de Marketing Médico
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
            Marketing Médico <br/>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">que Multiplica</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Captamos mais de 50.000 pacientes anualmente com estratégias de alto rendimento para clínicas de elite.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-2 hover:scale-105 transition-transform">
              Análise Gratuita <ArrowRight />
            </button>
          </div>
        </div>
      </main>

      {/* ... Restante das secções de serviços e depoimentos que você já tem no index.tsx ... */}
    </div>
  );
}
