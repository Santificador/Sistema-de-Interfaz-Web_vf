import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Dejá tu seguro en nuestras manos
          </h1>
          <p className="text-xl text-blue-100">
            Comparamos las mejores opciones por vos. Atención personalizada, transparencia total y respuesta rápida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105">
              <span>Cotizar ahora</span>
              <ArrowRight size={20} />
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-lg font-semibold transition">
              Contactar por WhatsApp
            </button>
          </div>

          <div className="flex items-center space-x-4 pt-4 border-t border-blue-400">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-blue-300 border-2 border-blue-600" />
              ))}
            </div>
            <div>
              <p className="font-semibold">⭐ 4.8 de 5</p>
              <p className="text-sm text-blue-100">Basado en 15 reseñas</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-blue-500 rounded-2xl p-8 space-y-4">
            <div className="space-y-3">
              {['Seguros de auto', 'Seguros de vida', 'Seguros de hogar'].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 bg-blue-600 bg-opacity-50 p-3 rounded-lg">
                  <CheckCircle size={20} className="text-green-300" />
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-blue-600 bg-opacity-50 p-4 rounded-lg border-2 border-green-300 text-center">
              <p className="text-green-300 font-bold text-lg">✓ Comparamos +50 opciones</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
