import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FadeUpProps {
  children: ReactNode;
  delay?: number; // em segundos, ex: 0.2
}

export function FadeUp({ children, delay = 0 }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Registrar o ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Criar a animação
    const anim = gsap.from(ref.current, {
      y: 40,
      opacity: 0,
      duration: 0.7,
      delay: delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 90%", // quando o topo do elemento alcançar 90% da viewport
        toggleActions: "play none none none",
        markers: false, // coloque true só para debug
      },
    });

    return () => {
      // Limpar a animação e ScrollTrigger
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
      anim.kill();
    };
  }, [delay]);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
}
