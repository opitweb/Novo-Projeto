import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function ContactoPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensaje enviado (demo)');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] font-['Poppins']">
      <main>
        {/* HEADER DA PÁGINA */}
        <section className="pt-40 pb-20 bg-white text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-black text-[#3156A3] tracking-tighter mb-6">
              Hablemos
            </h1>
            <p className="text-xl text-slate-500 italic border-l-4 border-[#00A89F] inline-block pl-4">
              Estamos a un mensaje de distancia de transformar su presencia digital.
            </p>
          </div>
        </section>

        {/* SEÇÃO DE CONTATO PRINCIPAL */}
        <section className="py-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          
          {/* COLUNA: INFORMAÇÕES */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-bold text-[#1A2B4B] mb-8">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm text-[#00A89F]"><MapPin size={24}/></div>
                  <p className="text-lg text-slate-600">Carrer de la Marina, 123, 08013 Barcelona, España</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm text-[#00A89F]"><Phone size={24}/></div>
                  <p className="text-lg text-slate-600">+34 93 123 45 67</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm text-[#00A89F]"><Mail size={24}/></div>
                  <p className="text-lg text-slate-600">info@saludmark.es</p>
                </div>
              </div>
            </div>

            {/* MAPA (PLACEHOLDER ESTILIZADO) */}
            <div className="bg-slate-200 w-full h-[300px] rounded-[3rem] flex items-center justify-center text-slate-500 font-bold border-4 border-white shadow-lg overflow-hidden relative">
               <div className="absolute inset-0 bg-[#3156A3]/10"></div>
               <span className="relative z-10">Mapa de Barcelona (Google Maps)</span>
            </div>
          </div>

          {/* COLUNA: FORMULÁRIO */}
          <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-xl border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#3156A3] ml-2">Nombre</label>
                <input type="text" placeholder="Su nombre" required className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-[#00A89F] transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#3156A3] ml-2">Email</label>
                <input type="email" placeholder="su@email.com" required className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-[#00A89F] transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#3156A3] ml-2">Teléfono</label>
                <input type="tel" placeholder="+34 600 000 000" className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-[#00A89F] transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#3156A3] ml-2">Mensaje</label>
                <textarea rows={4} placeholder="¿En qué podemos ayudarle?" required className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-[#00A89F] transition-all outline-none resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#3156A3] text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-[#1e3a7a] transition-all shadow-lg shadow-[#3156A3]/20">
                ENVIAR MENSAJE <Send size={18} />
              </button>
            </form>
          </div>
        </section>

        {/* SEÇÃO FAQ (PERGUNTAS FREQUENTES) */}
        <section className="py-24 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-black text-[#3156A3] text-center mb-12 tracking-tight">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {[
              { q: "¿Ofrecen exclusividad geográfica?", a: "Sí, para servicios de SEO, solo trabajamos con una clínica por especialidad en cada código postal para evitar conflictos de interés." },
              { q: "¿Tienen permanencia?", a: "No creemos en las ataduras. Nuestros clientes se quedan por los resultados, no por contrato." }
            ].map((item, i) => (
              <details key={i} className="group bg-white border border-slate-100 rounded-3xl p-6 cursor-pointer shadow-sm hover:shadow-md transition-all">
                <summary className="font-bold text-[#1A2B4B] flex justify-between items-center list-none">
                  {item.q}
                  <span className="text-[#00A89F] group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed border-t pt-4">
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
