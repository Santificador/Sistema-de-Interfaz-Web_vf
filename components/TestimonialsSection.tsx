import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Carlos López',
      role: 'Propietario de auto',
      text: 'Encontré todas las opciones en un solo lugar y la atención fue excepcional. Contraté en 2 días, ¡increíble!',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'María García',
      role: 'Empleada',
      text: 'Profesionales, transparentes y confiables. Muy satisfecha con el seguro de vida que me recomendaron.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Jorge Sánchez',
      role: 'Emprendedor',
      text: 'Servicio práctico y rápido. Ahora recomiendo a Quiero Mi Seguro a todos mis amigos.',
      rating: 5,
      image: '👨‍🔧'
    }
  ];

  return (
    <section id="testimonios" className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 text-lg">
            Más de 2,500 clientes satisfechos en Paraguay
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
