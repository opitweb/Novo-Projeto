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

    // Observer para disparar animação ao aparecer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          letters.forEach((span, i) => {
            setTimeout(() => span.classList.add("animate"), i * 100);
          });
        } else {
          letters.forEach((span) => span.classList.remove("animate"));
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(brandRef.current);

    // Parallax leve
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
    <footer className="bg-[#0A1738] text-white pt-32 pb-10 px-6 mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Marca d’água gigante */}
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

      {/* Borboletas */}
      <div className="butterflies">
        <div className="butterfly" style={{ "--i": 1 } as React.CSSProperties} />
        <div className="butterfly" style={{ "--i": 2 } as React.CSSProperties} />
        <div className="butterfly" style={{ "--i": 3 } as React.CSSProperties} />
        <div className="butterfly" style={{ "--i": 4 } as React.CSSProperties} />
      </div>

      <style jsx>{`
        /* Letras suaves */
        @keyframes softWave {
          0% { color: rgba(255,255,255,0.1); }
          25% { color: rgba(255,255,255,0.5); }
          50% { color: #00ff88aa; }
          75% { color: rgba(255,255,255,0.5); }
          100% { color: rgba(255,255,255,0.1); }
        }

        .brand span {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .brand span.animate {
          opacity: 1;
          animation: softWave 6s linear infinite;
          transform: translateY(0);
        }

        /* Borboletas */
        .butterflies {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .butterfly {
          --size: calc(10px + var(--i) * 5px);
          width: var(--size);
          height: var(--size);
          background: #00ff88cc;
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          animation: fly linear infinite;
          animation-duration: calc(8s + var(--i) * 2s);
        }

        @keyframes fly {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          25% { transform: translate(50px, -30px) rotate(20deg); }
          50% { transform: translate(-40px, -60px) rotate(-15deg); }
          75% { transform: translate(30px, -80px) rotate(10deg); }
          100% { transform: translate(0, -100px) rotate(0deg); opacity: 0; }
        }
      `}</style>
    </footer>
  );
};
