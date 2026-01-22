import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Award, BarChart3, Users, CheckCircle2, Star, Calendar, Shield, TrendingUp, Heart, Stethoscope, ChevronRight, Zap, Target, Globe, Lock, Clock, MessageSquare, ArrowUpRight, Play, X, Menu, Phone, Mail, MapPin, Sparkles } from 'lucide-react';

// Mudamos o nome para App para o Vite reconhecer de imediato
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
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="text-blue-500" />
            <span className="font-bold text-xl">MedGrow Elite</span>
          </div>
          <button className="bg-blue-600 px-4 py-2 rounded-lg font-bold">Auditoria Gratuita</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          Marketing Médico <br/>
          <span className="text-blue-400">que Multiplica</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Captamos pacientes qualificados para sua clínica com estratégias de alto rendimento.
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 mx-auto">
          Análise Gratuita <ArrowRight />
        </button>
      </section>

      <footer className="py-10 text-center text-gray-600 border-t border-white/10">
        <p>© 2026 MedGrow Elite. Todos os derechos reservados.</p>
      </footer>
    </div>
  );
}
