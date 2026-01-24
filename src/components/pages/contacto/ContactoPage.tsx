import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactoPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensaje enviado a Betterfly Media');
  };

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
            <h1 className="text-7xl md:text-8xl font-bold text-[#0A1738] tracking-tighter mb-8 animate-reveal">
              Hablemos
            </h1>
            <p className="text-xl text-slate-500 italic border-l-2 border-[#0DBAAC] inline-block pl-6 max-w-2xl text-left animate-reveal">
              Estamos a un mensaje de distancia de transformar su presencia digital con estrategias de alto impacto.
            </p>
          </div>
        </section>

        {/* SEÇÃO DE CONTATO PRINCIPAL */}
        <section className="py-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          
          {/* COLUNA: INFORMAÇÕES */}
          <div className="space-y-12 animate-reveal delay-200">
            <div>
              <h3 className="text-3xl font-bold text-[#0A1738] mb-10">Información de Contacto</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-slate-50 rounded-2xl text-[#0DBAAC] group-hover:bg-[#0DBAAC] group-hover:text-white transition-all">
                    <MapPin size={24}/>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0A1738] uppercase tracking-widest mb-1">Ubicación</p>
                    <p className="text-lg text-slate-600">Carrer de la Marina, Barcelona, España</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-slate-50 rounded-2xl text-[#0DBAAC] group-hover:bg-[#0DBAAC] group-hover:text-white transition-all">
                    <Phone size={24}/>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0A1738] uppercase tracking-widest mb-1">Teléfono</p>
                    <p className="text-lg text-slate-600">+34 930 000 000</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-slate-50 rounded-2xl text-[#0DBAAC] group-hover:bg-[#0DBAAC] group-hover:text-white transition-all">
                    <Mail size={24}/>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0A1738] uppercase tracking-widest mb-1">Email</p>
                    <p className="text-lg text-slate-600">info@betterfly.media</p>
                  </div>
                </div>
              </div>
            </div>

            {/* MAPA ESTILIZADO */}
            <div className="bg-[#0A1738] w-full h-[350px] rounded-[3rem] flex items-center justify-center text-white/20 font-bold border border-slate-100 shadow-2xl overflow-hidden relative group">
               <div className="absolute inset-0 bg-[#0DBAAC]/5 group-hover:opacity-20 transition-opacity"></div>
               <span className="relative z-10 tracking-widest uppercase text-sm">Barcelona Operations Center</span>
            </div>
          </div>

          {/* COLUNA: FORMULÁRIO - Focado em Contraste e Elegância */}
          <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-slate-50 animate-reveal delay-300">
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
              <button type="submit" className="w-full bg-[#0A1738] text-white py-6 rounded-2xl font-bold flex items-center justify-center gap-4 hover:bg-[#152a61] transition-all shadow-xl shadow-[#0A1738]/20 group">
                ENVIAR CONSULTA <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </section>

        {/* SEÇÃO FAQ - Cores do Ratio 7.24:1 */}
        <section className="py-32 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0A1738] text-center mb-16 tracking-tight">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {[
              { q: "¿Ofrecen exclusividad geográfica?", a: "Sí, trabajamos bajo un estricto código de exclusividade por especialidad y zona, garantizando que su competencia não use nossas mesmas estratégias." },
              { q: "¿Cómo miden el éxito de las campañas?", a: "Transparencia total. Ofrecemos un dashboard en tiempo real donde verá el retorno de inversión (ROI) y el crecimiento de su facturación." }
            ].map((item, i) => (
              <details key={i} className="group bg-white border border-slate-100 rounded-[2rem] p-8 cursor-pointer shadow-sm hover:shadow-xl transition-all">
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
    </div>
  );
}
