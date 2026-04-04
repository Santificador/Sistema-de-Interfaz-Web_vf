import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    insuranceType: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
          insuranceType: ''
        });
      }, 3000);
    }
  };

  return (
    <section id="contacto" className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Información de contacto */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ponte en contacto
            </h2>
            <p className="text-gray-600 text-lg">
              Estamos aquí para responder tus preguntas y ayudarte a encontrar el seguro perfecto
            </p>
          </div>

          <div className="space-y-6">
            {/* Dirección */}
            <div className="flex gap-4">
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Ubicación</h3>
                <p className="text-gray-600">
                  O'higgins 979 casi<br />
                  Asunción, Paraguay
                </p>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex gap-4">
              <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Teléfono</h3>
                <p className="text-gray-600">
                  <a href="tel:+595983514376" className="hover:text-green-600 transition">
                    +595 983 514376
                  </a>
                </p>
                <p className="text-sm text-gray-500">Lunes a Viernes, 8:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@quieromiseguro.com.py" className="hover:text-purple-600 transition">
                    info@quieromiseguro.com.py
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Mapa simulado */}
          <div className="bg-gray-300 rounded-xl h-64 flex items-center justify-center text-gray-600">
            📍 Asunción, Paraguay
          </div>
        </div>

        {/* Formulario */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          {submitted ? (
            <div className="h-full flex items-center justify-center text-center space-y-4">
              <div text-4xl>✅</div>
              <h3 className="text-2xl font-bold text-green-600">¡Gracias!</h3>
              <p className="text-gray-600">
                Hemos recibido tu mensaje. Nos pondremos en contacto en breve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Tu nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Juan García"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="+595 900 000000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email (opcional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Tipo de seguro
                </label>
                <select
                  name="insuranceType"
                  value={formData.insuranceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="auto">Seguro de auto</option>
                  <option value="vida">Seguro de vida</option>
                  <option value="hogar">Seguro de hogar</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Cuéntanos sobre tu necesidad..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105"
              >
                <Send size={20} />
                Enviar
              </button>

              <p className="text-sm text-gray-500 text-center">
                También puedes contactarnos por WhatsApp
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
