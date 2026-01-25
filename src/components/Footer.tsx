import React, { useEffect, useRef } from "react";

export const Footer = () => {
  const brandRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = brandRef.current;
    if (!el) return;

    // IntersectionObserver para disparar a animação quando o footer aparecer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
        }
      },
      { threshold: 0.3 } // dispara quando ~30% do footer aparecer
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-[#0A1738] text-white pt-32 pb-10 px-6 mt-20 relative overflow-visible">
      <div className="max-w-7xl mx-auto text-center">
        {/* Nome da marca em marca d'água gigante */}
        <h1
          ref={brandRef}
          className="text-[18vw] font-bold leading-none tracking-tighter opacity-[0.03] select-none mb-10 text-white pointer-events-none brand"
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

      {/* CSS inline ou Tailwind custom */}
      <style jsx>{`
        .brand span {
          display: inline-block;
          color: rgba(255, 255, 255, 0.05);
          transform: translateY(10px);
          transition: color 0.6s ease, transform 0.6s ease;
        }
        .brand.visible {
          color: rgba(255, 255, 255, 1);
          transform: translateY(0);
          transition: color 0.8s ease, transform 0.8s ease;
        }
      `}</style>
    </footer>
  );
};
