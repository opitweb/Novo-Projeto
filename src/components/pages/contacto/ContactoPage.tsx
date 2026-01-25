import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactoPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensaje enviado a Betterfly Media');
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] relative font-['Poppins'] overflow-x-hidden">
      
      {/* TEXTURA DE FUNDO FIXA */}
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
        {/* HEADER DA PÁGINA */}
        <section className="pt-48 pb-24 text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-[#0A1738] tracking-tighter mb-8 animate-reveal">
                Contáctanos | Hablemos de Tu Proyecto
            </h1>
            <p className="text-xl text-slate-500 italic border-l-2 border-[#0DBAAC] inline-block pl-6 max-w-2xl text-left animate-reveal">
              Estamos a un mensaje de distancia de transformar su presencia digital con estrategias de alto impacto.
            </p>
          </div>
        </section>

        {/* SEÇÃO DE CONTATO PRINCIPAL */}
        <section className="py-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          
          {/* COLUNA ESQUERDA: INFO + MAPA */}
          <div className="space-y-12 animate-reveal">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-[#0A1738]">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white rounded-2xl text-[#0DBAAC] shadow-sm group-hover:bg-[#0DBAAC] group-hover:text-white transition-all">
                    <MapPin size={24}/>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0A1738] uppercase tracking-widest mb-1">Ubicación</p>
                    <p className="text-lg text-slate-600">Carrer de la Marina, Barcelona, España</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white rounded-2xl text-[#0DBAAC] shadow-sm group-hover:bg-[#0DBAAC] group-hover:text-white transition-all">
                    <Phone size={24}/>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0A1738] uppercase tracking-widest mb-1">Teléfono</p>
                    <p className="text-lg text-slate-600">+34 632 76 28 21</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white rounded-2xl text-[#0DBAAC] shadow-sm group-hover:bg-[#0DBAAC] group-hover:text-white transition-all">
                    <Mail size={24}/>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0A1738] uppercase tracking-widest mb-1">Email</p>
                    <p className="text-lg text-slate-600">betterflymedia.info@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* GOOGLE MAPS INTEGRADO - Ajustado com borda editorial */}
            <div className="w-full h-[350px] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.187313264639!2d2.186835112260659!3d41.39175449557675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2e2d93e506d%3A0x6d36e2f75a760c4a!2sCarrer%20de%20la%20Marina%2C%20Barcelona%2C%20Espanya!5e0!3m2!1spt-PT!2spt!4v1706110000000!5m2!1spt-PT!2spt" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Betterfly Media Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* COLUNA DIREITA: FORMULÁRIO */}
          <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-white animate-reveal">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-[#0A1738] uppercase tracking-widest ml-1">Nombre</label>
                  <input type="text" placeholder="Su nombre" required className="w-full p-5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-[#0DBAAC] transition-all outline-none text-[#0A1738]" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-[#0A1738] uppercase tracking-widest ml-1">Email</label>
                  <input type="email" placeholder="su@email.com" required className="w-full p-5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-[#0DBAAC] transition-all outline-none text-[#0A1738]" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-[#0A1738] uppercase tracking-widest ml-1">Especialidad</label>
                <input type="text" placeholder="Ej: Odontología, Estética..." className="w-full p-5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-[#0DBAAC] transition-all outline-none text-[#0A1738]" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-[#0A1738] uppercase tracking-widest ml-1">Mensaje</label>
                <textarea rows={4} placeholder="¿Cómo podemos potenciar su clínica?" required className="w-full p-5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-[#0DBAAC] transition-all outline-none resize-none text-[#0A1738]"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#0A1738] text-white py-6 rounded-2xl font-bold flex items-center justify-center gap-4 hover:bg-[#0DBAAC] transition-all shadow-xl shadow-[#0A1738]/20 group">
                ENVIAR CONSULTA <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </section>

        {/* SEÇÃO FAQ */}
        <section className="py-32 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0A1738] text-center mb-16 tracking-tight">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {[
              { q: "¿Ofrecen exclusividad geográfica?", a: "Sí, trabajamos bajo un estricto código de exclusividad por especialidad y zona." },
              { q: "¿Cómo miden el éxito de las campañas?", a: "Transparencia total con dashboard en tiempo real." }
            ].map((item, i) => (
              <details key={i} className="group bg-white border border-white rounded-[2rem] p-8 cursor-pointer shadow-sm hover:shadow-xl transition-all">
                <summary className="font-bold text-xl text-[#0A1738] flex justify-between items-center list-none">
                  {item.q}
                  <span className="text-[#0DBAAC] group-open:rotate-45 transition-transform text-3xl font-light">+</span>
                </summary>
                <p className="mt-6 text-slate-500 text-lg leading-relaxed border-t border-slate-50 pt-6">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <style>{`
        .animate-reveal {
          animation: reveal 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        @keyframes reveal {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
