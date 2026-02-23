
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, FileText } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Sistema de Filtración Industrial",
    category: "Agua",
    description: "Filtración de alta capacidad para procesos industriales.",
    image: "https://images.unsplash.com/photo-1581093588402-4857474d88db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Purificador de Aire UV-C",
    category: "Aire",
    description: "Desinfección de aire mediante luz ultravioleta.",
    image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Bombas Centrífugas",
    category: "Agua",
    description: "Equipos de bombeo de alto rendimiento y durabilidad.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Sistema de Osmosis Inversa",
    category: "Agua",
    description: "Purificación avanzada para agua ultra pura.",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <section className="py-32 bg-gray-50 relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Productos Destacados</h2>
            <p className="text-lg text-gray-600">Equipos de vanguardia para sus necesidades industriales.</p>
          </div>
          <div className="flex gap-3">
            <button onClick={prevSlide} className="p-3 rounded-full border border-gray-300 hover:bg-primary hover:text-white transition z-10">
              <ChevronLeft size={28} />
            </button>
            <button onClick={nextSlide} className="p-3 rounded-full border border-gray-300 hover:bg-primary hover:text-white transition z-10">
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden relative max-w-6xl mx-auto">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="flex-shrink-0 w-full px-6"
              >
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full flex flex-col md:flex-row border border-gray-100 min-h-[500px]">
                  <div className="relative h-80 md:h-auto md:w-1/2 overflow-hidden bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-primary text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                      {product.category}
                    </div>
                  </div>
                  
                  <div className="p-10 flex flex-col justify-center md:w-1/2">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <button className="w-full md:w-auto self-start border border-gray-200 bg-white text-gray-700 font-semibold py-4 px-8 rounded-xl hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center justify-center gap-3 group/btn text-lg shadow-sm">
                      <FileText size={20} />
                      Ficha Técnica
                      <ArrowRight size={18} className="opacity-0 group-hover/btn:opacity-100 transform translate-x-[-10px] group-hover/btn:translate-x-0 transition-all" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
