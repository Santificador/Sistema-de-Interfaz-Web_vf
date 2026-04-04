import React from 'react';
import { Car, Heart, Home, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Car,
      title: 'Seguro de Autos',
      description: 'Protege tu vehículo con las mejores coberturas del mercado',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Heart,
      title: 'Seguro de Vida',
      description: 'Asegura el futuro de tu familia con planes personalizados',
      color: 'bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      icon: Home,
      title: 'Seguro de Hogar',
      description: 'Protege tu casa y todos tus bienes de forma integral',
      color: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Shield,
      title: 'Otros Seguros',
      description: 'Cobertura para mascotas, viajes, responsabilidad y más',
      color: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section id="servicios" className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ofrecemos una amplia gama de seguros adaptados a tu necesidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
              >
                <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon size={32} className={service.iconColor} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
