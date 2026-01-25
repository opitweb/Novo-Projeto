import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, Award, Instagram, Facebook, Linkedin, 
  TrendingUp, Users, Heart, Globe, Search, Palette, Zap, Monitor, 
  BarChart3, Bot, Workflow, Calendar, MessageSquare, Cog, Clock, 
  Target, Star 
} from 'lucide-react';
import gsap from 'gsap';

export default function Index() {
  const [offset, setOffset] = useState(0);

  // ======== GSAP REFS ========
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLSpanElement>(null);
  const heroTextRef = useRef<HTMLParagraphElement>(null);
  const heroButtonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ======== GSAP ANIMATION ========
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });
    tl.from(heroTitleRef.current, { y: 50, opacity: 0 })
      .from(heroSubtitleRef.current, { y: 20, opacity: 0 }, "-=0.5")
      .from(heroTextRef.current, { y: 20, opacity: 0 }, "-=0.5")
      .from(heroButtonRef.current, { y: 20, opacity: 0 }, "-=0.5");
  }, []);

  // ======== SEUS DADOS ========
  const socialServices = [
    { icon: Instagram, title: "Instagram & TikTok", description: "Contenido visual que conecta con pacientes potenciales y genera confianza." },
    { icon: Facebook, title: "Facebook Ads", description: "Campañas segmentadas para captar pacientes cualificados en tu zona." },
    { icon: Linkedin, title: "LinkedIn", description: "Posicionamiento profesional para especialistas y clínicas de referencia." },
  ];

  const socialStats = [
    { icon: Users, value: "+2M", label: "Alcance Mensual" },
    { icon: Heart, value: "98%", label: "Engagement Rate" },
    { icon: TrendingUp, value: "+180%", label: "Crecimiento Seguidores" },
  ];

  const webFeatures = [
    { icon: Globe, title: "Diseño Web Premium", description: "Websites que convierten visitantes en pacientes con diseño profesional." },
    { icon: Search, title: "SEO Médico", description: "Posicionamiento orgánico especializado para clínicas y especialistas." },
    { icon: Palette, title: "UX/UI Design", description: "Experiencias de usuario intuitivas que facilitan la conversión." },
    { icon: Zap, title: "Velocidad Optimizada", description: "Tiempos de carga ultrarrápidos que mejoran el SEO." },
    { icon: Monitor, title: "Responsive Design", description: "Diseños que se adaptan perfectamente a todos los dispositivos." },
    { icon: BarChart3, title: "Analítica Avanzada", description: "Seguimiento detallado del comportamiento de usuarios." },
  ];

  const automations = [
    { icon: Calendar, title: "Reservas Automatizadas", description: "Sistema de citas online integrado con tu agenda." },
    { icon: MessageSquare, title: "Chatbots Inteligentes", description: "Atención 24/7 para consultas y captación de leads." },
    { icon: Workflow, title: "Email Marketing", description: "Secuencias automatizadas de seguimiento y fidelización." },
    { icon: Target, title: "Lead Scoring", description: "Clasificación automática de prospectos." },
  ];

  const reviews = [
    { name: "Dr. María García", role: "Cirujana Plástica", rating: 5, text: "Betterfly transformó completamente nuestra presencia digital. En 6 meses duplicamos las consultas.", avatar: "MG" },
    { name: "Clínica Dental Sonrisa", role: "Odontología", rating: 5, text: "El equipo es increíble. Nuestro SEO pasó de la página 5 a los primeros resultados.", avatar: "CS" },
    { name: "Dr. Carlos Fernández", role: "Dermatólogo", rating: 5, text: "La automatización de citas nos ahorró horas de trabajo administrativo.", avatar: "CF" },
    { name: "Centro Médico Salud", role: "Medicina General", rating: 5, text: "Excelente servicio. Las redes sociales nunca habían tenido tanto engagement.", avatar: "CM" },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#0A1738] relative overflow-hidden font-['Poppins']">
      
      {/* EFEITO PARALLAX DE LINHAS */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div 
          className="absolute inset-0 w-full h-[200%]"
          style={{
            backgroundImage: `linear-gradient(to right, #0A1738 1px, transparent 1px)`,
            backgroundSize: '80px 100%',
            transform: `translateY(${offset * -0.1}px)`, 
          }}
        />
      </div>

      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="pt-32 pb-12 px-6 h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-slate-200 text-[#0A1738] px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                <Sparkles size={14} className="text-[#0DBAAC]" /> Marketing Médico en Barcelona
              </div>
              
              <div className="space-y-4">
                <h1 ref={heroTitleRef} className="text-5xl lg:text-7xl font-bold text-[#0A1738] tracking-tighter leading-[0.85]">
                  Estratégias de marketing digital <br/>
                  <span ref={heroSubtitleRef} className="font-light italic text-[#0DBAAC] text-4xl lg:text-6xl lowercase">Barcelona</span>
                </h1>
              </div>
              
              <p ref={heroTextRef} className="text-xl text-slate-500 border-l-2 border-[#0DBAAC] pl-6 max-w-md leading-relaxed">
                Marketing de alto nivel para especialistas que <span className="text-[#0A1738] font-medium">que desean aumentar la visibilidad y las citas de su clínica.</span>.
              </p>

              <Link 
                ref={heroButtonRef}
                to="/contacto" 
                className="inline-flex bg-[#0DBAAC] text-white px-10 py-5 rounded-2xl font-bold items-center hover:bg-[#0a8d82] transition-all shadow-xl shadow-[#0DBAAC]/20 hover:-translate-y-1"
              >
                Análisis Gratuito <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            
            <div className="hidden lg:block" style={{ transform: `translateY(${offset * 0.05}px)` }}>
              <div className="bg-[#0A1738] p-20 rounded-[4rem] text-white shadow-2xl text-center relative overflow-hidden border-8 border-white/50 backdrop-blur-sm">
                <Award size={48} className="mx-auto mb-8 text-[#0DBAAC]" />
                <p className="text-8xl font-bold mb-2 tracking-tighter">+340%</p>
                <p className="text-[#0DBAAC] text-lg font-medium opacity-90 uppercase tracking-widest">Crecimiento en Facturación</p>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0DBAAC]/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ...o resto do conteúdo permanece igual, sem mudanças ... */}

      </main>
    </div>
  );
}
