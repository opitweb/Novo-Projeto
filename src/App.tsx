import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    // Animação do Título (GSAP)
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
    );

    // Efeito Parallax nas bolhas de fundo
    gsap.to(".parallax-blob", {
      y: (i, target) => -100 * (i + 1), // Velocidades diferentes
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        scrub: 1, // Suaviza o movimento com o scroll
      }
    });
  }, []);

  return (
    <section className="relative bg-background overflow-hidden min-h-screen flex items-center">
      {/* Elementos Parallax usando suas classes CSS */}
      <div className="absolute inset-0 z-0">
        <div className="parallax-blob blob-shape absolute -top-20 -right-20 w-96 h-96 bg-soft-blue opacity-60 blur-3xl" />
        <div className="parallax-blob blob-shape absolute top-[40%] -left-20 w-72 h-72 bg-soft-purple opacity-40 blur-3xl" />
      </div>

      <div className="container-wide relative z-10 text-center">
        {/* Título com sua classe text-gradient corrigida */}
        <h1 ref={titleRef} className="text-gradient mb-6">
          Marketing Médico que Multiplica
        </h1>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto mb-10">
          Estratégias digitais de alto impacto para clínicas premium.
        </p>
        <div className="flex justify-center gap-4">
          <button className="btn-primary">Auditoria Gratuita</button>
          <button className="btn-outline">Ver Casos</button>
        </div>
      </div>
    </section>
  );
}
