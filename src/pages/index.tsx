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

  const faqs = [
    {
      q: '¿Cuánto tiempo hasta ver resultados reales?',
      a: 'SEO: resultados significativos en 3-4 meses. Google Ads: primeras citas en 2-3 semanas. Nuestro enfoque híbrido genera tracción rápida mientras construimos posicionamiento orgánico sostenible.'
    },
    {
      q: '¿Cómo garantizáis el cumplimiento normativo?',
      a: 'Contamos con asesoría legal sanitaria permanente. Revisamos cada creatividad, landing y contenido según Ley 29/2006 de Publicidad Sanitaria y código deontológico de cada especialidad médica.'
    },
    {
      q: '¿Qué inversión mínima recomendáis?',
      a: 'Desde €2.500/mes para clínicas pequeñas hasta planes enterprise para grupos hospitalarios. Incluye gestión completa, creatividades, landing pages y reporting avanzado. ROI medio 4:1 en 6 meses.'
    },
    {
      q: '¿Trabajáis con todas las especialidades médicas?',
      a: 'Sí. Tenemos experiencia en: odontología, medicina estética, oftalmología, traumatología, fisioterapia, clínicas de reproducción asistida, cirugía plástica, dermatología y centros multidisciplinares.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Canvas de fondo */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-30" />
      
      {/* Gradientes animados de fondo */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full blur-[120px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20"
          style={{
            top: `${scrollY * 0.1}px`,
            left: `${mousePosition.x * 0.02}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[100px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 right-0"
          style={{
            top: `${400 + scrollY * 0.15}px`,
            right: `${mousePosition.x * -0.01}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
      </div>

      {/* Header Premium */}
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
                <p className="text-xs text-gray-400">Premium Health Marketing</p>
              </div>
            </div>
            
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#servicios" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Servicios</a>
              <a href="#proceso" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Proceso</a>
              <a href="#casos" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Casos de Éxito</a>
              <a href="#equipo" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Equipo</a>
            </nav>

            <div className="flex items-center gap-4">
              <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105">
                <Calendar className="w-4 h-4" />
                Auditoría Gratuita
              </button>
              <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl pt-20">
          <nav className="flex flex-col items-center gap-6 p-8">
            <a href="#servicios" className="text-2xl text-gray-300 hover:text-cyan-400 transition-colors">Servicios</a>
            <a href="#proceso" className="text-2xl text-gray-300 hover:text-cyan-400 transition-colors">Proceso</a>
            <a href="#casos" className="text-2xl text-gray-300 hover:text-cyan-400 transition-colors">Casos de Éxito</a>
            <button className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-bold text-lg">
              Auditoría Gratuita
            </button>
          </nav>
        </div>
      )}

      {/* Hero Section Ultra Premium */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Contenido */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm text-cyan-400 px-5 py-3 rounded-full text-sm font-bold">
                <Sparkles className="w-5 h-5 animate-pulse" />
                #1 Agencia Salud en Barcelona
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                <span className="block text-white mb-2">Marketing Médico</span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
                  que Multiplica
                </span>
                <span className="block text-white">tu Facturación</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                Captamos <span className="text-cyan-400 font-bold">+50.000 pacientes al año</span> para 
                clínicas y profesionales sanitarios en Barcelona con estrategias digitales de 
                <span className="text-purple-400 font-bold"> alto rendimiento</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group relative px-8 py-5 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-2xl font-bold text-lg overflow-hidden transition-all transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center justify-center gap-3">
                    <Zap className="w-6 h-6" />
                    Análisis Gratuito 360°
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
                
                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="group px-8 py-5 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                >
                  <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  Ver Caso de Éxito
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {['👨‍⚕️', '👩‍⚕️', '👨‍⚕️', '👩‍⚕️', '👨‍⚕️'].map((emoji, i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-slate-950 flex items-center justify-center text-lg">
                        {emoji}
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="flex gap-0.5 mb-1">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <p className="text-sm text-gray-400">250+ clínicas confían en nosotros</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-400">
                  <Shield className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm">Certificado ISO 27001</span>
                </div>

                <div className="flex items-center gap-2 text-gray-400">
                  <Award className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">Google Partner Premier</span>
                </div>
              </div>
            </div>

            {/* Visualización de Resultados */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
              
              <div className="relative space-y-4">
                {/* Card Principal */}
                <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10 transform hover:scale-105 transition-transform">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-gray-400 font-medium">Resultados Reales Cliente</span>
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold">+340% GROWTH</span>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Pacientes Nuevos/Mes</p>
                        <div className="flex items-end gap-4">
                          <div className="text-center">
                            <p className="text-3xl font-bold text-gray-500">52</p>
                            <p className="text-xs text-gray-500">Antes</p>
                          </div>
                          <ArrowRight className="w-6 h-6 text-cyan-400 mb-2" />
                          <div className="text-center">
                            <p className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">228</p>
                            <p className="text-xs text-cyan-400">Ahora</p>
                          </div>
                        </div>
                      </div>
                      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                          <p className="text-2xl font-bold text-blue-400">€68</p>
                          <p className="text-xs text-gray-400">Coste/Paciente</p>
                        </div>
                        <div className="text-center p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                          <p className="text-2xl font-bold text-purple-400">520%</p>
                          <p className="text-xs text-gray-400">ROI</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mini Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-slate-900/70 to-slate-800/70 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                    <TrendingUp className="w-8 h-8 text-emerald-400 mb-3" />
                    <p className="text-3xl font-bold mb-1">+280%</p>
                    <p className="text-sm text-gray-400">Tráfico Orgánico</p>
                  </div>
                  <div className="bg-gradient-to-br from-slate-900/70 to-slate-800/70 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                    <Clock className="w-8 h-8 text-cyan-400 mb-3" />
                    <p className="text-3xl font-bold mb-1">3 meses</p>
                    <p className="text-sm text-gray-400">Tiempo Promedio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-16 border-y border-white/10 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-teal-600/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group cursor-pointer">
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <p className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-300 font-bold mb-1">{stat.label}</p>
                <p className="text-sm text-gray-500">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Premium */}
      <section id="servicios" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-sm font-bold mb-6">
              SERVICIOS PREMIUM
            </span>
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              <span className="text-white">Marketing Médico</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                360° Especializado
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Estrategias multicanal diseñadas específicamente para el sector sanitario en Barcelona. 
              Cumplimiento normativo garantizado en cada acción.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-4xl">{service.image}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                  {/* Metrics */}
                  <div className="space-y-2 mb-6">
                    {service.metrics.map((metric, midx) => (
                      <div key={midx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className={`w-4 h-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                        <span className="text-gray-300">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-3 bg-gradient-to-r ${service.color} rounded-xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2`}>
                    Más Información
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full text-sm font-bold mb-6">
              METODOLOGÍA PROBADA
            </span>
            <h2 className="text-5xl lg:text-6xl font-black mb-6 text-white">
              Proceso de Trabajo
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                Orientado a Resultados
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, idx) => (
              <div 
                key={idx}
                className="group relative bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all">
                      <span className="text-4xl font-black text-white">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-lg text-gray-400 mb-6 leading-relaxed">{step.description}</p>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                        <Clock className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-gray-300">{step.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-gray-300">{step.deliverable}</span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:flex items-center">
                      <ChevronRight className="w-8 h-8 text-purple-500" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section id="casos" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-sm font-bold mb-6">
              CASOS DE ÉXITO VERIFICADOS
            </span>
            <h2 className="text-5xl lg:text-6xl font-black mb-6 text-white">
              Lo Que Dicen Nuestros
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Clientes Reales
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-slate-900/70 to-slate-800/70 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-emerald-500/50 transition-all transform hover:-translate-y-2"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                {/* Metrics */}
                <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-4 mb-6 border border-emerald-500/20">
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-400">{testimonial.metrics.before}</p>
                      <p className="text-xs text-gray-500">Antes</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-emerald-400" />
                    <div className="text-center">
                      <p className="text-3xl font-black text-emerald-400">{testimonial.metrics.after}</p>
                      <p className="text-xs text-emerald-400">Después</p>
                    </div>
                  </div>
                  <p className="text-center text-sm text-gray-400 mt-2">{testimonial.metrics.unit}</p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.clinic}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Premium */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-teal-500/30 rounded-[3rem] blur-3xl" />
            
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-12 lg:p-16 border border-white/20 overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>

              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-500/30 rounded-full mb-8">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 font-bold text-sm">OFERTA LIMITADA</span>
                </div>

                <h2 className="text-4xl lg:text-6xl font-black mb-6">
                  <span className="text-white">¿Listo para</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    Transformar tu Clínica?
                  </span>
                </h2>

                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                  Auditoría digital gratuita valorada en <span className="font-bold text-cyan-400">€1.500</span>. 
                  Analizamos tu competencia, oportunidades SEO y plan de acción personalizado.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                  <button className="group relative px-10 py-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-2xl font-bold text-xl text-white overflow-hidden transform hover:scale-105 transition-all shadow-2xl shadow-cyan-500/50">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative flex items-center gap-3">
                      <Zap className="w-6 h-6" />
                      Solicitar Auditoría Gratuita
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </button>

                  <button className="px-10 py-6 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-2xl font-bold text-xl text-white hover:bg-white/10 transition-all flex items-center gap-3">
                    <Phone className="w-6 h-6" />
                    Llamar Ahora
                  </button>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-2 text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm">Sin permanencia</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm">Resultados en 90 días</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm">Garantía satisfacción</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Premium */}
      <footer className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-white block">MedGrow Elite</span>
                  <span className="text-xs text-gray-500">Premium Health Marketing</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Agencia especializada en marketing digital para el sector sanitario en Barcelona. 
                Más de 15 años impulsando clínicas médicas.
              </p>
              <div className="flex gap-3">
                {['LinkedIn', 'Instagram', 'YouTube'].map((social, idx) => (
                  <button key={idx} className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all border border-white/10">
                    <span className="text-xs text-gray-400">{social[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-6">Servicios</h4>
              <ul className="space-y-3">
                {['SEO Médico', 'Google Ads Sanitario', 'Social Media', 'Web Médica', 'Reputación Online', 'Marketing Analytics'].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-bold mb-6">Empresa</h4>
              <ul className="space-y-3">
                {['Sobre Nosotros', 'Casos de Éxito', 'Equipo', 'Blog', 'Recursos Gratuitos', 'Trabaja con Nosotros'].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-6">Contacto</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">Passeig de Gràcia, 123<br />08008 Barcelona, España</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-400">+34 931 234 567</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-400">hola@medgrowelite.es</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © 2026 MedGrow Elite. Todos los derechos reservados.
              </p>
              <div className="flex gap-6 text-sm text-gray-500">
                <a href="#" className="hover:text-cyan-400 transition-colors">Privacidad</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Términos</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={() => setIsVideoOpen(false)}>
          <div className="relative max-w-5xl w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="w-full h-full flex items-center justify-center">
              <Play className="w-20 h-20 text-white/50" />
              <p className="absolute text-white/50 mt-32">Video demo de caso de éxito</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthMarketingLanding;
