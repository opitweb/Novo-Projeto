import React from 'react';
import { Users, Code, Palette, HeartPulse, Target, ShieldCheck } from 'lucide-react';

export default function SobrePage() {
  const team = [
    {
      name: "Dra. Elena Gómez",
      role: "Consultora Médica",
      icon: <HeartPulse className="text-[#0DBAAC]" size={32} />
    },
    {
      name: "Marc Torres",
      role: "Director Técnico",
      icon: <Code className="text-[#0A1738]" size={32} />
    },
    {
      name: "Sofia Riera",
      role: "Directora Creativa",
      icon: <Palette className="text-[#0DBAAC]" size={32} />
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
             Agencia de Marketing Digital en Barcelona

            </h1>
            <p className="text-xl text-slate-500 italic border-l-2 border-[#0DBAAC] inline-block pl-6 max-w-2xl text-left animate-reveal">
              Transforma tu presencia digital con estrategias de marketing de alto impacto. ¡Estamos a un mensaje de distancia!

            </p>
          </div>
        </section>

        {/* HISTÓRIA - Contraste e Elegância */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="bg-white p-12 md:p-24 rounded-[4rem] shadow-2xl border border-slate-50 flex flex-col lg:flex-row gap-20 items-center animate-reveal delay-200">
            <div className="flex-1 space-y-10">
              <h2 className="text-4xl font-bold text-[#0A1738] tracking-tight">Nuestra Historia</h2>
              <div className="space-y-8 text-xl text-slate-600 leading-relaxed">
                <p>
                  Fundada en <span className="font-bold text-[#0A1738]">2025</span> en Barcelona, Betterfly Media nació de una necesidad clara: los profesionales de la salud merecem una comunicación a la altura de su excelencia.
                </p>
                <p className="border-l-2 border-[#0DBAAC] pl-8 italic text-slate-500">
                  No somos una agencia generalista. Hablamos su idioma, entendemos la ética médica y sabemos cómo comunicar resultados sin comprometer su reputación.
                </p>
              </div>
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-6 w-full">
              <div className="bg-slate-50 p-10 rounded-[3rem] text-center group hover:bg-[#0A1738] transition-all duration-500">
                <Target className="mx-auto mb-6 text-[#0DBAAC]" size={40} />
                <span className="block font-bold text-2xl text-[#0A1738] group-hover:text-white transition-colors">Foco</span>
                <span className="text-xs uppercase font-bold text-slate-400 tracking-widest">100% Médico</span>
              </div>
              <div className="bg-slate-50 p-10 rounded-[3rem] text-center group hover:bg-[#0DBAAC] transition-all duration-500">
                <ShieldCheck className="mx-auto mb-6 text-[#0A1738] group-hover:text-white transition-colors" size={40} />
                <span className="block font-bold text-2xl text-[#0A1738] group-hover:text-white transition-colors">Ética</span>
                <span className="text-xs uppercase font-bold text-slate-400 tracking-widest">Sin Conflictos</span>
              </div>
            </div>
          </div>
        </section>

        {/* EQUIPE - Grid Profissional */}
        <section className="py-32 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-[#0A1738] mb-20 tracking-tighter">El Equipo</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="group p-12 bg-white rounded-[4rem] border border-slate-50 shadow-sm hover:shadow-2xl transition-all duration-500 animate-reveal"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-8 w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center mx-auto group-hover:bg-[#0A1738] group-hover:scale-110 transition-all duration-500 shadow-inner">
                  <div className="group-hover:text-white transition-colors duration-500">
                    {member.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#0A1738] mb-3 tracking-tight">{member.name}</h3>
                <p className="text-[#0DBAAC] font-bold text-sm uppercase tracking-[0.2em] mb-8">{member.role}</p>
                <div className="pt-8 border-t border-slate-50">
                  <p className="text-slate-400 text-sm leading-relaxed">Comprometido con la excelencia y la innovación en el sector salud.</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
