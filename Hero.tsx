
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Wind, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [activeCategory, setActiveCategory] = useState<null | 'AGUA' | 'AIRE'>(null);

  const categories = {
    AGUA: [
      { label: "Agua Potable", href: "/productos?cat=AGUA&sub=Agua Potable" },
      { label: "Tratamiento de Aguas Residuales", href: "/productos?cat=AGUA&sub=Tratamiento de Aguas Residuales" },
      { label: "Industrial", href: "/productos?cat=AGUA&sub=Industrial" },
      { label: "Piscina", href: "/productos?cat=AGUA&sub=Piscina" },
    ],
    AIRE: [
      { label: "Iones", href: "/productos?cat=AIRE&sub=Iones" },
      { label: "Desinfección", href: "/productos?cat=AIRE&sub=Desinfección" },
    ]
  };

  return (
    <div className="relative h-screen w-full overflow-hidden font-sans">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/55 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/klingvideo.mp4" type="video/mp4" />
          Tu navegador no soporta el tag de video.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full overflow-y-auto">
        <div className="min-h-full flex flex-col items-center justify-center px-4 py-20">
        
          {/* Header Section */}
          <div className="text-center mb-20 max-w-4xl mx-auto shrink-0 px-4 relative">
            {/* Spotlight Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent blur-3xl -z-10 pointer-events-none"></div>

            <p className="text-sm md:text-base uppercase tracking-widest text-gray-300 mb-2 font-bold drop-shadow-sm">SOLUCIONES ESPECIALIZADAS</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#0398D7] mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] text-shadow-lg">PURIFIL INTERNACIONAL</h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed mb-10 font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">Diseñamos soluciones robustas para los sectores más exigentes, con enfoque en rendimiento y confiabilidad.</p>
            
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <span className="text-xs md:text-sm uppercase tracking-widest text-white/90 font-bold">NUESTRAS LÍNEAS DE NEGOCIO</span>
              <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            </div>
          </div>

          {/* Dual Entry Selector */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-20 w-full max-w-5xl items-center justify-center shrink-0">
          
          {/* AGUA Card */}
          <div 
            className="group relative w-full md:w-[320px] h-[250px] md:h-[320px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl cursor-pointer overflow-hidden transition-all duration-500 hover:bg-white/20 hover:border-white/40 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(0,168,232,0.3)] motion-reduce:transition-none motion-reduce:hover:transform-none"
            onMouseEnter={() => setActiveCategory('AGUA')}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${activeCategory === 'AGUA' ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
              <div className="p-6 bg-blue-500/20 rounded-full mb-6">
                <Droplet size={64} className="text-blue-300 animate-water" />
              </div>
              <h2 className="text-4xl font-bold text-white tracking-widest">AGUA</h2>
            </div>

            {/* Expanded List */}
            <div className={`absolute inset-0 p-8 flex flex-col justify-center bg-blue-900/90 transition-all duration-500 ${activeCategory === 'AGUA' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
              <div className="flex items-center gap-3 mb-6 border-b border-white/20 pb-4">
                <Droplet className="text-blue-300" />
                <h3 className="text-2xl font-bold text-white">AGUA</h3>
              </div>
              <ul className="space-y-3">
                {categories.AGUA.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.href} className="flex items-center text-blue-100 hover:text-white hover:translate-x-2 transition-all group/item">
                      <ChevronRight size={16} className="mr-2 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* AIRE Card */}
          <div 
            className="group relative w-full md:w-[320px] h-[250px] md:h-[320px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl cursor-pointer overflow-hidden transition-all duration-500 hover:bg-white/20 hover:border-white/40 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] motion-reduce:transition-none motion-reduce:hover:transform-none"
            onMouseEnter={() => setActiveCategory('AIRE')}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${activeCategory === 'AIRE' ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
              <div className="p-6 bg-white/10 rounded-full mb-6">
                <Wind size={64} className="text-cyan-200 animate-air" />
              </div>
              <h2 className="text-4xl font-bold text-white tracking-widest">AIRE</h2>
            </div>

            {/* Expanded List */}
            <div className={`absolute inset-0 p-8 flex flex-col justify-center bg-gray-900/90 transition-all duration-500 ${activeCategory === 'AIRE' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
              <div className="flex items-center gap-3 mb-6 border-b border-white/20 pb-4">
                <Wind className="text-cyan-200" />
                <h3 className="text-2xl font-bold text-white">AIRE</h3>
              </div>
              <ul className="space-y-3">
                {categories.AIRE.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.href} className="flex items-center text-gray-300 hover:text-white hover:translate-x-2 transition-all group/item">
                      <ChevronRight size={16} className="mr-2 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white/50">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
