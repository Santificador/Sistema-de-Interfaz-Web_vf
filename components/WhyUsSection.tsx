import React from 'react';
import { CheckCircle, Users, Eye, Zap } from 'lucide-react';

const WhyUsSection = () => {
  const reasons = [
    {
      icon: Zap,
      title: 'Comparación de múltiples aseguradoras',
      description: 'Analizamos más de 50 opciones de seguros para encontrar la mejor para ti',
      color: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Users,
      title: 'Atención personalizada',
      description: 'Nuestro equipo se dedica a entender tus necesidades específicas',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Eye,
      title: 'Transparencia total',
      description: 'Sin sorpresas, sin letra chica. Sabés exactamente qué estás contratando',
      color: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: CheckCircle,
      title: 'Respuesta rápida',
      description: 'Cotizaciones y asesoramiento en menos de 2 horas',
      color: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section id="porque" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Somos tu aliado en busca del mejor seguro
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className={`${reason.color} w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon size={32} className={reason.iconColor} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <p className="text-xl font-semibold mb-4">
            Desde 2015 confiando en nuestro asesoramiento financiero
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div>
              <p className="text-3xl font-bold">2,500+</p>
              <p className="text-blue-100">Clientes satisfechos</p>
            </div>
            <div>
              <p className="text-3xl font-bold">4.8★</p>
              <p className="text-blue-100">Calificación en reseñas</p>
            </div>
            <div>
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-blue-100">Soporte disponible</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
