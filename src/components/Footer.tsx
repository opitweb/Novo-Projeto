import React, {  "useEffect", useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Mova o registro para dentro ou garanta que ele rode apenas uma vez
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Footer = () => {
  const brandRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Verificação de segurança
    if (!brandRef.current) return;

    // 2. Use o context do GSAP (limpa automaticamente a memória no React)
    let ctx = gsap.context(() => {
      gsap.to(brandRef.current, {
        scrollTrigger: {
          trigger: brandRef.current,
          start: "top 95%", // Inicia quando o topo do texto entra quase no fim da tela
          end: "bottom bottom",
          scrub: 1, // Suaviza o movimento (número em vez de true)
          markers: true, // Se não aparecer, o problema é o overflow do elemento pai
        },
        opacity: 0.25,
        y: -20, // Pequeno movimento para confirmar que funcionou
        ease: "power1.out",
      });
    }, containerRef); // Escopo da animação

    return () => ctx.revert(); // 3. Limpeza obrigatória para evitar bugs de duplicidade
  }, []);

  return (
    <footer 
      ref={containerRef} 
      className="bg-[#0A1738] text-white pt-32 pb-10 px-6 mt-20 relative overflow-visible"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Nome da marca em marca d'água gigante */}
        <h1
          ref={brandRef}
          className="text-[18vw] font-bold leading-none tracking-tighter opacity-[0.03] select-none mb-10 text-white pointer-events-none"
        >
          betterfly
        </h1>

        <div className="flex flex-col items-center gap-6 relative z-10">
          <p className="text-blue-100/30 text-xs tracking-widest uppercase font-medium">
            Marketing Médico de Alto Nivel
          </p>
          <p className="pt-10 border-t border-white/5 w-full text-[9px] uppercase tracking-[0.3em] font-bold text-white/40">
            © Betterfly Media 2026 — Barcelona & Santiago
          </p>
        </div>
      </div>
    </footer>
  );
};
