import React from 'react';
import { Users, Code, Palette, HeartPulse, Target, ShieldCheck } from 'lucide-react';

export default function SobrePage() {
  const team = [
    {
      name: "Dra. Elena Gómez",
      role: "Consultora Médica",
      icon: <HeartPulse className="text-[#00A89F]" size={32} />
    },
    {
      name: "Marc Torres",
      role: "Director Técnico",
      icon: <Code className="text-[#3156A3]" size={32} />
    },
    {
      name: "Sofia Riera",
      role: "Directora Creativa",
      icon: <Palette className="text-[#ff4d00]" size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FB] font-['Poppins']">
      <main>
        {/* HEADER DA PÁGINA */}
        <section className="pt-40 pb-20 bg-white text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-black text-[#3156A3] tracking-tighter mb-6 leading-none">
              Nuestra <span className="font-elegant-italic text-[#00A89F]">Misión</span>
            </h1>
            <p className="text-2xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
              Humanizar la tecnología para conectar doctores y pacientes de forma ética y elegante.
            </p>
          </div>
        </section>

        {/* HISTÓRIA */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-xl border border-slate-100 flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl font-black text-[#1A2B4B] tracking-tight">Nuestra Historia</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Fundada en <span className="font-bold text-[#3156A3]">2025</span> en el corazón de Barcelona, Betterfly Media nació de una necesidad simple: los profesionales de la salud necesitaban alguien que entendiera tanto de medicina como de algoritmos.
                </p>
                <p className="border-l-4 border-[#00A89F] pl-6 italic">
                  No somos una agencia generalista. Hablamos su idioma, entendemos la ética médica y sabemos cómo comunicar sin vender humo.
                </p>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4 w-full">
              <div className="bg-[#3156A3]/5 p-8 rounded-3xl text-center">
                <Target className="mx-auto mb-4 text-[#3156A3]" />
                <span className="block font-black text-2xl text-[#3156A3]">Foco</span>
                <span className="text-xs uppercase font-bold text-slate-400">100% Médico</span>
              </div>
              <div className="bg-[#00A89F]/5 p-8 rounded-3xl text-center">
                <ShieldCheck className="mx-auto mb-4 text-[#00A89F]" />
                <span className="block font-black text-2xl text-[#00A89F]">Ética</span>
                <span className="text-xs uppercase font-bold text-slate-400">Sin Conflictos</span>
              </div>
            </div>
          </div>
        </section>

        {/* EQUIPE */}
        <section className="py-24 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black text-[#3156A3] mb-16 tracking-tighter">El Equipo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group p-10 bg-white rounded-[3rem] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="mb-6 w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-inner">
                  {member.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1A2B4B] mb-2">{member.name}</h3>
                <p className="text-[#00A89F] font-bold text-sm uppercase tracking-widest">{member.role}</p>
                <div className="mt-6 pt-6 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-slate-400 text-sm italic">Experto en comunicación sanitaria digital.</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
