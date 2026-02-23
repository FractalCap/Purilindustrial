
import React from 'react';
import { Droplets, Wind, Sprout, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    title: "AGUA",
    icon: Droplets,
    description: "Soluciones integrales para el ciclo del agua.",
    items: [
      "Agua Potable",
      "Tratamiento Residual",
      "Agua Industrial",
      "Piscinas",
      "Sistemas de Bombeo"
    ],
    color: "bg-blue-100 text-blue-600",
    hover: "hover:shadow-blue-200"
  },
  {
    title: "AIRE",
    icon: Wind,
    description: "Tecnología para la purificación ambiental.",
    items: [
      "Iones",
      "Desinfección",
      "Control de Olores",
      "Filtración HEPA"
    ],
    color: "bg-cyan-100 text-cyan-600",
    hover: "hover:shadow-cyan-200"
  },
  {
    title: "AGROINDUSTRIAL",
    icon: Sprout,
    description: "Optimización de procesos para el agro.",
    items: [
      "Sector Pecuario",
      "Sector Agrícola",
      "Riego Tecnificado",
      "Tratamiento de Efluentes"
    ],
    color: "bg-green-100 text-green-600",
    hover: "hover:shadow-green-200"
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-white" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestras Líneas de Negocio</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones especializadas para cada sector, garantizando eficiencia y sostenibilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 border border-gray-100 shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${service.hover}`}
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                <service.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 text-sm font-medium hover:text-primary transition-colors cursor-pointer group">
                    <CheckCircle size={16} className="text-gray-300 mr-2 group-hover:text-primary transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <a href="#" className="inline-flex items-center text-primary font-bold text-sm hover:text-blue-700 transition-colors group">
                EXPLORAR SOLUCIONES
                <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
