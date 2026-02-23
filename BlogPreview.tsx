
import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Innovaciones en el Tratamiento de Aguas Residuales 2024",
    excerpt: "Descubra las nuevas tecnologías que están revolucionando la recuperación de aguas industriales.",
    image: "https://images.unsplash.com/photo-1574482620262-99b3a079ed78?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "15 Oct 2023",
    author: "Ing. Carlos Ruiz"
  },
  {
    id: 2,
    title: "Importancia de la Calidad del Aire en Espacios Cerrados",
    excerpt: "Análisis sobre cómo los sistemas de purificación impactan la salud y productividad laboral.",
    image: "https://images.unsplash.com/photo-1632053001728-2d2d7634292c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "28 Sep 2023",
    author: "Dra. Ana López"
  },
  {
    id: 3,
    title: "Optimización de Riego en el Sector Agrícola",
    excerpt: "Estrategias para maximizar el uso del recurso hídrico en cultivos extensivos.",
    image: "https://images.unsplash.com/photo-1625246333195-58197bd47d26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "10 Sep 2023",
    author: "Ing. Pedro Méndez"
  }
];

export default function BlogPreview() {
  return (
    <section className="py-20 bg-gray-50" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Actualidad</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Blog Técnico</h2>
          </div>
          <a href="#" className="hidden md:flex items-center text-primary font-bold hover:text-blue-700 transition">
            Ver todas las noticias <ArrowRight size={20} className="ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 flex items-center">
                  <Calendar size={12} className="mr-1 text-primary" />
                  {post.date}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <User size={12} className="mr-1" />
                  {post.author}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <a href="#" className="inline-flex items-center text-primary font-bold text-sm hover:text-blue-700 transition">
                  Leer Artículo <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center text-primary font-bold hover:text-blue-700 transition">
            Ver todas las noticias <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
