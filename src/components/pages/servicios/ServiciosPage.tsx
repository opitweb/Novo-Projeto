import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Monitor, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServiciosPage() {
  const services = [
    {
      title: "SEO Médico Local",
      icon: <Search className="text-[#0DBAAC]" size={32} />,
      desc: "Aparezca cuando sus pacientes buscan especialistas en Barcelona y optimice su visibilidad orgánica.",
      features: ["Optimización de Google My Business", "Contenido médico verificado", "Linkbuilding ético"]
    },
    {
      title: "Diseño Web Especializado",
      icon: <Monitor className="text-[#0DBAAC]" size={32} />,
      desc: "Webs rápidas, seguras y que cumplen con la RGPD sanitaria para una conversión impecable.",
      features: ["Reserva de citas online", "Experiencia móvil perfecta", "Arquitectura de alta velocidad"]
    },
    {
      title: "Publicidad PPC",
      icon: <BarChart3 className="text-[#0DBAAC]" size={32} />,
      desc: "Campañas de Google Ads y Social Ads con segmentación precisa para captar pacientes de alto valor.",
      features: ["Segmentación por patología", "Remarketing ético", "Informes mensuales transparentes"]
    }
  ];

  return (
/* FUNDO CORRIGIDO: De bg-white para bg-[#F5F5F5] com relative */
    <div className="min-h-screen bg-[#F5F5F5] relative font-['Poppins'] overflow-x-hidden">
      
      {/* TEXTURA DE FUNDO FIXA - Igual à Home */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, #0A1738 1px, transparent 1px)`,
            backgroundSize: '80px 100%',
          }}
        />
      </div>

      <main className="relative z-10">
        {/* HEADER DA PÁGINA - Com respiro para a Navbar */}
        <section className="pt-48 pb-24 text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-[#0A1738] tracking-tighter mb-8 animate-reveal">
              Servicios de Marketing Digital | Agencia Mejor Impacto

            </h1>
            <p className="text-xl text-slate-500 italic border-l-2 border-[#0DBAAC] inline-block pl-6 max-w-2xl text-left animate-reveal">
              Transforma tu presencia online con nuestros servicios de marketing digital en Barcelona: SEO, publicidad digital, redes sociales y estrategias personalizadas para crecer tu negocio.

            </p>
          </div>
        </section>

        {/* GRID DE SERVIÇOS - Layout Limpo */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-slate-50 hover:shadow-2xl transition-all duration-500 group animate-reveal"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-8 bg-slate-50 w-20 h-20 rounded-[2rem] flex items-center justify-center group-hover:bg-[#0A1738] transition-all duration-500 group-hover:scale-110">
                  <div className="group-hover:text-white transition-colors duration-500">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#0A1738] mb-4 tracking-tight">{service.title}</h3>
                <p className="text-slate-500 mb-10 leading-relaxed text-lg">{service.desc}</p>
                
                <ul className="space-y-4 mb-2 border-t border-slate-50 pt-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-4 text-sm font-semibold text-slate-700">
                      <CheckCircle2 size={18} className="text-[#0DBAAC]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION - Fundo Azul Noite com Destaque Verde Oceano */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto bg-[#0A1738] rounded-[4rem] p-12 md:p-24 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Elemento decorativo de fundo */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0DBAAC]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold mb-10 tracking-tighter">
                ¿Listo para llenar <br/><span className="text-[#0DBAAC] italic font-light">su agenda?</span>
              </h2>
              <p className="text-blue-100/70 text-xl mb-14 max-w-2xl mx-auto font-medium">
                Analizamos su situación actual sin compromiso y trazamos una hoja de ruta para escalar su volumen de pacientes.
              </p>
              <Link 
                to="/contacto" 
                className="inline-flex bg-[#0DBAAC] text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-[#0a8d82] transition-all hover:-translate-y-2 shadow-xl shadow-[#0DBAAC]/20 group"
              >
                Agendar Consultoría <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
