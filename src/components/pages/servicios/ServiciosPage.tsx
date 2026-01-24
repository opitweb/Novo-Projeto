import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Monitor, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServiciosPage() {
  const services = [
    {
      title: "SEO Médico Local",
      icon: <Search className="text-[#00A89F]" size={32} />,
      desc: "Aparezca cuando sus pacientes buscan especialistas en Barcelona.",
      features: ["Optimización de Google My Business", "Contenido médico verificado", "Linkbuilding ético"]
    },
    {
      title: "Diseño Web Especializado",
      icon: <Monitor className="text-[#00A89F]" size={32} />,
      desc: "Webs rápidas, seguras y que cumplen con la RGPD sanitaria.",
      features: ["Reserva de citas online", "Experiencia móvil perfecta", "Diseño limpio y tranquilizador"]
    },
    {
      title: "Publicidad PPC",
      icon: <BarChart3 className="text-[#00A89F]" size={32} />,
      desc: "Campañas de Google Ads y Social Ads con alto retorno.",
      features: ["Segmentación por patología", "Remarketing ético", "Informes mensuales transparentes"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FB] font-['Poppins']">
      <main>
        {/* HEADER DA PÁGINA */}
        <section className="pt-40 pb-20 bg-white text-center px-6 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-black text-[#3156A3] tracking-tighter mb-6">
              Nuestros <span className="font-elegant-italic text-[#00A89F]">Servicios</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Estrategias integrales diseñadas exclusivamente para cada etapa de crecimiento de su clínica.
            </p>
          </div>
        </section>

        {/* GRID DE SERVIÇOS */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 group">
                <div className="mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-[#3156A3]/5 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1A2B4B] mb-4">{service.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">{service.desc}</p>
                
                <ul className="space-y-3 mb-10">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                      <CheckCircle2 size={16} className="text-[#00A89F]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto bg-[#3156A3] rounded-[4rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Elemento decorativo de fundo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter italic">
                ¿Listo para llenar su agenda?
              </h2>
              <p className="text-blue-100 text-lg mb-12 max-w-xl mx-auto">
                Analizamos su situación actual y crecemos su volumen de pacientes de forma ética y constante.
              </p>
              <Link 
                to="/contacto" 
                className="inline-flex bg-[#00A89F] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#008f88] transition-all hover:scale-105 shadow-xl"
              >
                Agendar Consultoría <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
