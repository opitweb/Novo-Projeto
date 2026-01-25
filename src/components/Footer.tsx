import React, { useEffect, useRef } from "react";

export const Footer = () => {
  const brandRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!brandRef.current) return;

    // Transformar cada letra em span
    const text = brandRef.current.textContent || "";
    brandRef.current.textContent = "";
    const letters = text.split("").map((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      brandRef.current!.appendChild(span);
      return span;
    });

    // IntersectionObserver para disparar animação quando footer aparecer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          letters.forEach((span, i) => {
            setTimeout(() => {
              span.classList.add("animate");
            }, i * 100); // Delay progressivo por letra
          });
        } else {
          letters.forEach((span) => span.classList.remove("animate"));
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(brandRef.current);

    // Parallax leve baseado no scroll
    const handleScroll = () => {
      const rect = brandRef.current!.getBoundingClientRect();
      const offset = window.innerHeight - rect.top;
      letters.forEach((span, i) => {
        const move = Math.min(Math.max(offset / 60 - i, 0), 20);
        span.style.transform = `translateY(${20 - move}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="bg-[#0A1738] text-white pt-32 pb-10 px-6 mt-20 relative overflow-visible">
      <div className="max-w-7xl mx-auto text-center">
        <h1
          ref={brandRef}
          className="text-[18vw] font-bold leading-none tracking-tighter select-none mb-10 pointer-events-none brand"
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

      <style jsx>{`
        /* Loop de cores em onda */
        @keyframes neonWave {
          0% { color: rgba(255,255,255,0.05); text-shadow: none; }
          20% { color: white; text-shadow: 0 0 10px white, 0 0 20px white; }
          40% { color: #00ff88; text-shadow: 0 0 10px #00ff88, 0 0 20px #00ff88; }
          60% { color: white; text-shadow: 0 0 10px white, 0 0 20px white; }
          80% { color: rgba(255,255,255,0.05); text-shadow: none; }
          100% { color: rgba(255,255,255,0.05); text-shadow: none; }
        }

        .brand span {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .brand span.animate {
          opacity: 1;
          animation: neonWave 4s linear infinite;
          transform: translateY(0);
        }
      `}</style>
    </footer>
  );
};
