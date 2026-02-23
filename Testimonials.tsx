
export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Lo que opinan nuestros clientes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="bg-light p-8 rounded-xl relative">
            <i className="fas fa-quote-left text-4xl text-blue-200 absolute top-4 left-4"></i>
            <p className="text-gray-600 mb-6 mt-6 italic">"Se encuentran bastantes opciones en equipos para acueducto. Acabo de comprar por internet un filtro de arena para piscina. Hoy me llegó en perfectas condiciones y tal como lo pedí. Precio muy competitivo."</p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <h4 className="font-bold text-gray-900">Carlos Rodríguez</h4>
                <div className="text-yellow-400 text-sm">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-light p-8 rounded-xl relative">
            <i className="fas fa-quote-left text-4xl text-blue-200 absolute top-4 left-4"></i>
            <p className="text-gray-600 mb-6 mt-6 italic">"La atención es excelente, brindan buena asesoría y los productos son de buena calidad. Recomendados totalmente."</p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <h4 className="font-bold text-gray-900">María Fernanda</h4>
                <div className="text-yellow-400 text-sm">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-light p-8 rounded-xl relative">
            <i className="fas fa-quote-left text-4xl text-blue-200 absolute top-4 left-4"></i>
            <p className="text-gray-600 mb-6 mt-6 italic">"Excelente servicio post-venta. Tienen un gran conocimiento técnico sobre los equipos de bombeo."</p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <h4 className="font-bold text-gray-900">Juan Pérez</h4>
                <div className="text-yellow-400 text-sm">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
