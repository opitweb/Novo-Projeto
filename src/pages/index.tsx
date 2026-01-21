import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Award, BarChart3, Users, CheckCircle2, Star, Calendar, Shield, TrendingUp, Heart, Stethoscope, ChevronRight, Zap, Target, Globe, Lock, Clock, MessageSquare, ArrowUpRight, Play, X, Menu, Phone, Mail, MapPin, Sparkles } from 'lucide-react';

const HealthMarketingLanding = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animação de partículas no canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }, []);

  const stats = [
    { number: '250+', label: 'Centros Médicos', sublabel: 'confían en nosotros', icon: Heart, color: 'from-rose-500 to-pink-500' },
    { number: '340%', label: 'Aumento Medio', sublabel: 'en captación de pacientes', icon: TrendingUp, color: 'from-emerald-500 to-teal-500' },
    { number: '50K+', label: 'Pacientes Nuevos', sublabel: 'generados mensualmente', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { number: '4.9★', label: 'Valoración', sublabel: '127 reseñas verificadas', icon: Award, color: 'from-amber-500 to-orange-500' }
  ];

  const services = [
    {
      icon: Target,
      title: 'SEO Médico Avanzado',
      description: 'Dominamos el posicionamiento orgánico en Google para clínicas y profesionales sanitarios en Barcelona. Estrategias white-hat que generan resultados sostenibles.',
      metrics: ['+280% tráfico orgánico', 'TOP 3 en 6 meses', '95% keywords objetivo'],
      color: 'from-blue-500 to-cyan-500',
      image: '🎯'
    },
    {
      icon: Zap,
      title: 'Google Ads Sanitario',
      description: 'Campañas de pago por clic especializadas en sector salud. Optimización continua con IA para maximizar ROI y minimizar coste por cita médica.',
      metrics: ['ROI medio 420%', 'CPC -45%', 'Conversión 8.7%'],
      color: 'from-purple-500 to-pink-500',
      image: '⚡'
    },
    {
      icon: Globe,
      title: 'Social Media Médico',
      description: 'Gestión integral de redes sociales cumpliendo normativa sanitaria. Contenido visual premium que humaniza tu marca y construye confianza.',
      metrics: ['+15K seguidores/mes', '12% engagement', '3.5M impresiones'],
      color: 'from-emerald-500 to-teal-500',
      image: '🌐'
    },
    {
      icon: Shield,
      title: 'Reputación Online',
      description: 'Protección y mejora activa de tu imagen digital. Monitorización 24/7, gestión de reseñas y estrategias anti-crisis según código deontológico.',
      metrics: ['4.8★ media clientes', '98% reseñas positivas', 'Respuesta <2h'],
      color: 'from-orange-500 to-red-500',
      image: '🛡️'
    },
    {
      icon: BarChart3,
      title: 'Analytics & BI Médico',
      description: 'Dashboards personalizados con métricas que importan: coste por paciente, LTV, ROI por servicio. Decisiones basadas en datos reales.',
      metrics: ['Dashboard tiempo real', 'KPIs personalizados', 'Informes semanales'],
      color: 'from-indigo-500 to-purple-500',
      image: '📊'
    },
    {
      icon: Stethoscope,
      title: 'Web Médica Premium',
      description: 'Diseño y desarrollo de webs sanitarias de alta conversión. UX optimizado para agendar citas, velocidad sub-2s, accesibilidad AAA.',
      metrics: ['Conversión 12%+', 'PageSpeed 95+', 'Mobile-first'],
      color: 'from-cyan-500 to-blue-500',
      image: '💻'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Auditoría Integral 360°',
      description: 'Análisis profundo de tu presencia digital actual: SEO técnico, competencia, oportunidades de mercado, análisis de conversión y benchmarking con top performers del sector.',
      duration: '2-3 días',
      deliverable: 'Informe ejecutivo + Plan estratégico'
    },
    {
      number: '02',
      title: 'Estrategia Personalizada',
      description: 'Diseñamos un roadmap único para tu clínica basado en objetivos SMART. Definimos KPIs, presupuesto óptimo, canales prioritarios y proyecciones realistas de ROI.',
      duration: '3-5 días',
      deliverable: 'Estrategia completa + Calendario'
    },
    {
      number: '03',
      title: 'Implementación Ágil',
      description: 'Ejecución por sprints quincenales con equipo dedicado. Setup técnico, creación de contenido premium, lanzamiento de campañas y configuración de tracking avanzado.',
      duration: '2-4 semanas',
      deliverable: 'Campañas activas + Assets creativos'
    },
    {
      number: '04',
      title: 'Optimización Continua',
      description: 'Testing A/B constante, ajuste de pujas, refinamiento de segmentación y escalado de campañas ganadoras. Machine learning aplicado a la captación de pacientes.',
      duration: 'Ongoing',
      deliverable: 'Reportes semanales + Optimizaciones'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Carlos Méndez',
      role: 'Director Médico',
      clinic: 'Clínica Dental Excellence',
      image: '👨‍⚕️',
      rating: 5,
      text: 'En 8 meses pasamos de 45 a 280 pacientes nuevos al mes. El ROI ha sido espectacular y el equipo entiende perfectamente las particularidades del sector dental. Inversión totalmente recuperada.',
      metrics: { before: '45', after: '280', unit: 'pacientes/mes' }
    },
    {
      name: 'Dra. Ana Soler',
      role: 'Directora',
      clinic: 'Centro Médico Diagonal',
      image: '👩‍⚕️',
      rating: 5,
      text: 'Profesionalidad absoluta y cumplimiento estricto de normativa sanitaria. Han triplicado nuestras consultas en medicina estética manteniendo la calidad de los leads. Sin duda, la mejor agencia médica de Barcelona.',
      metrics: { before: '3.2%', after: '9.8%', unit: 'conversión' }
    },
    {
      name: 'Dr. Miguel Torres',
      role: 'Oftalmólogo',
      clinic: 'Instituto de la Visión',
      image: '👨‍⚕️',
      rating: 5,
      text: 'Hemos conseguido posicionarnos en TOP 3 para todas nuestras cirugías. El coste por paciente bajó un 52% y la calidad de los leads mejoró sustancialmente. Trabajo impecable, datos transparentes.',
      metrics: { before: '€142', after: '€68', unit: 'coste/paciente' }
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-30" />
      
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full blur-[120px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20"
          style={{
            top: `${scrollY * 0.1}px`,
            left: `${mousePosition.x * 0.02}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
      </div>

      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur-lg opacity-75 animate-pulse" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  MedGrow Elite
                </span>
              </div>
            </div>
            
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#servicios" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Servicios</a>
              <a href="#proceso" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Proceso</a>
              <a href="#casos" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Casos de Éxito</a>
            </nav>

            <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-bold transition-all">
              <Calendar className="w-4 h-4" />
              Auditoría Gratuita
            </button>
          </div>
        </div>
      </header>

      <section className="relative pt-32 pb-20 px-4 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 px-5 py-3 rounded-full text-sm font-bold text-cyan-400">
                <Sparkles className="w-5 h-5" />
                #1 Agencia Salud en Barcelona
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                <span className="block text-white">Marketing Médico</span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  que Multiplica
                </span>
                <span className="block text-white">tu Facturación</span>
              </h1>
              
              <p className="text-xl text-gray-300">
                Captamos <span className="text-cyan-400 font-bold">+50.000 pacientes al año</span> con estrategias de <span className="text-purple-400 font-bold">alto rendimiento</span>.
              </p>

              <div className="flex gap-4">
                <button className="px-8 py-5 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl font-bold text-lg flex items-center gap-3">
                  <Zap className="w-6 h-6" />
                  Análisis Gratuito
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
               <div className="flex items-center justify-between mb-6">
                  <span className="text-gray-400">Resultados Reales</span>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold">+340% GROWTH</span>
               </div>
               <div className="text-center">
                  <p className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">228</p>
                  <p className="text-sm text-cyan-400">Pacientes Nuevos/Mes</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-32 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-slate-900/50 p-8 rounded-3xl border border-white/10">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="casos" className="py-32 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-slate-900/70 p-8 rounded-3xl border border-white/10">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <span className="text-3xl">{testimonial.image}</span>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.clinic}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-12 border-t border-white/10 text-center text-gray-500">
        <p>© 2026 MedGrow Elite. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default HealthMarketingLanding;
