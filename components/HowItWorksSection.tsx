import { PhoneCall, BarChart3, Lightbulb, CheckCircle } from 'lucide-react';

type HowItWorksSectionProps = {
  onOpenQuote: () => void;
};

const HowItWorksSection = ({ onOpenQuote }: HowItWorksSectionProps) => {
  const steps = [
    {
      number: 1,
      icon: PhoneCall,
      title: 'Contactanos',
      description: 'Comunicáte con nosotros por teléfono, WhatsApp o formulario web'
    },
    {
      number: 2,
      icon: Lightbulb,
      title: 'Analizamos tu necesidad',
      description: 'Nuestro equipo comprende tus requerimientos específicos de cobertura'
    },
    {
      number: 3,
      icon: BarChart3,
      title: 'Te ofrecemos las mejores opciones',
      description: 'Comparamos múltiples aseguradoras y presentamos las mejores cotizaciones'
    },
    {
      number: 4,
      icon: CheckCircle,
      title: 'Contratás fácilmente',
      description: 'Realizamos toda la gestión para que contrates de forma simple y rápida'
    }
  ];

  return (
    <section id="como" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-gray-600 text-lg">
            4 pasos simples para encontrar tu seguro ideal
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[60%] w-full h-1 bg-gradient-to-r from-blue-400 to-transparent" />
                )}

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center relative z-10">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-2xl">
                    {step.number}
                  </div>
                  <Icon size={32} className="text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">¿Listo para empezar?</h3>
          <p className="mb-6 text-blue-100">
            Contáctanos hoy y obtén una cotización sin compromiso
          </p>
          <button onClick={onOpenQuote} className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105">
            Comenzar ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
