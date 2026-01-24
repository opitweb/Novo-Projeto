import React from 'react';
import { Navbar } from '../../Navbar'; // Ajuste o caminho conforme sua estrutura
import { Footer } from '../../Footer';
import { Search, ArrowRight } from 'lucide-react';

export default function SeoMedico() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#1A2B4B]">
      <Navbar />
      
      <main className="pt-40">
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl font-black text-[#3156A3] tracking-tighter mb-6">
                SEO <span className="font-elegant-italic text-[#00A89F]">Médico</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Posicionamos su clínica en los primeros resultados de búsqueda de Barcelona, conectando con pacientes que buscan activamente sus servicios.
              </p>
              <button className="bg-[#3156A3] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3">
                Solicitar Auditoría <ArrowRight size={20} />
              </button>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100">
              <Search size={80} className="text-[#00A89F] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Visibilidad Garantizada</h3>
              <p className="text-slate-500">Optimizamos su contenido bajo las normativas éticas de salud en España.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
