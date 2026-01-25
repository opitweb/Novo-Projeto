import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const brandRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!brandRef.current) return;

    // Animação suave do texto da marca d'água
    gsap.to(brandRef.current, {
      scrollTrigger: {
        trigger: brandRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        markers: true, // debug
      },
      opacity: 0.25, // Mantém efeito de marca d'água
      ease: "power1.out",
    });
  }, []);

  return (
    <footer className="bg-[#0A1738] text-white pt-32 pb-10 px-6 mt-auto overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Nome da marca em marca d'água gigante */}
        <h1
          ref={brandRef}
          className="text-[18vw] font-bold leading-none tracking-tighter opacity-[0.03] select-none mb-10 text-white"
        >
          betterfly
        </h1>

        <div className="flex flex-col items-center gap-6">
          <p className="text-blue-100/30 text-xs tracking-widest uppercase font-medium">
            Marketing Médico de Alto Nivel
          </p>
          {/* Linha de Copyright */}
          <p className="pt-10 border-t border-white/5 w-full text-[9px] uppercase tracking-[0.3em] font-bold text-white/40">
            © Betterfly Media 2026 — Barcelona & Santiago
          </p>
        </div>
      </div>
    </footer>
  );
};
