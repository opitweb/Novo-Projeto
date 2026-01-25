import { useRef, useState, useEffect, ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: string; // ex: "0.2s"
}

export function FadeUp({ children, delay = "0s" }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
}
