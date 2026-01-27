import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

export default function Index() {
  const mainRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrada suave dos textos (estáticos)
      const heroTl = gsap.timeline();
      heroTl.from(".hero-content", { opacity: 0, x: -30, duration: 1 })
            .from(".sphere-frame", { opacity: 0, scale: 0.9, duration: 1.2 }, "-=0.5");

      // 2. GIRO APENAS DO VÍDEO (DENTRO DA ESFERA)
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          rotationY: 360,
          duration: 15,
          repeat: -1,
          ease: "none"
        });
      }
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-[#F5F5F5] overflow-hidden font-['Poppins']">
      
      {/* Background Dot Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40" 
           style={{ backgroundImage: 'radial-gradient(#0DBAAC 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />

      <main className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
          
          {/* LADO ESQUERDO: TEXTOS ESTÁTICOS */}
          <div className="hero-content space-y-8">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-slate-200 px-6 py-2 rounded-full text-sm font-semibold shadow-sm">
              <Sparkles size={14} className="text-[#0DBAAC]" /> Marketing Médico en Barcelona
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-[#0A1738] leading-[1.1]">
              Estratégias de <br/> marketing digital <br/>
              <span className="font-light italic text-[#0DBAAC] text-4xl lg:text-6xl lowercase">Barcelona</span>
            </h1>
            
            <p className="text-lg text-slate-500 border-l-2 border-[#0DBAAC] pl-6 max-w-md">
              Marketing de alto nivel para especialistas que desean aumentar la visibilidad y las citas de su clínica.
            </p>

            <Link to="/contacto" className="inline-flex bg-[#0DBAAC] text-white px-10 py-5 rounded-2xl font-bold items-center hover:bg-[#0a8d82] transition-all shadow-xl shadow-[#0DBAAC]/20">
              Análisis Gratuito <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>

          {/* LADO DIREITO: A ESFERA ESTÁTICA COM VÍDEO GIRANDO DENTRO */}
          <div className="flex justify-center items-center perspective-[1000px]">
            <div className="sphere-frame relative w-[500px] h-[500px] rounded-full flex items-center justify-center">
              
              {/* Glow de fundo (estático) */}
              <div className="absolute inset-0 bg-[#0DBAAC]/10 blur-[100px] rounded-full" />
              
              {/* Moldura da Esfera (estática) */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-[inset_0_0_60px_rgba(0,0,0,0.1)] bg-transparent border-none">
                
                {/* O VÍDEO (Único elemento que gira) */}
                <video 
                  ref={videoRef}
                  autoPlay muted loop playsInline 
                  className="w-full h-full object-cover scale-110"
                >
                  <source src="https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/video.mp4" type="video/mp4" />
                </video>

                {/* Reflexo de vidro fixo por cima (ajuda a dar realismo) */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/30 pointer-events-none" />
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
