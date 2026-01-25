import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    if (!elements) return;

    elements.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // anima quando o topo do elemento chega a 80% da viewport
          toggleActions: "play none none none",
          markers: false, // true para debug
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <div ref={sectionRef} className="space-y-24 p-8">
      <h1 className="animate-on-scroll text-5xl font-bold text-center">
        Bem-vindo ao meu site
      </h1>
      <p className="animate-on-scroll text-lg max-w-xl mx-auto text-center">
        Aqui vamos usar GSAP + ScrollTrigger para animar elementos ao scroll.
      </p>
      <div className="animate-on-scroll bg-blue-500 h-64 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
        Card animado
      </div>
      <div className="animate-on-scroll bg-purple-500 h-64 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
        Outro card animado
      </div>
    </div>
  );
}
