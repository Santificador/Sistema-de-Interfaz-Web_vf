import React, { useState } from 'react';
import { X, MessageCircle, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hola 👋 ¿En qué tipo de seguro estás interesado?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const insuranceOptions = [
    { label: 'Seguro de auto', value: 'auto' },
    { label: 'Seguro de vida', value: 'vida' },
    { label: 'Seguro de hogar', value: 'hogar' },
    { label: 'Otro seguro', value: 'otro' }
  ];

  const responses = {
    auto: 'Excelente. Para seguros de auto, comparamos múltiples opciones con cobertura integral. ¿Espera información de tu vehículo?',
    vida: 'Perfecto. Los seguros de vida son esenciales para proteger a tu familia. ¿Cuándo te gustaría contratarlo?',
    hogar: 'Genial. Protegemos tu hogar y todos tus bienes. ¿Cuándo podemos contactarte para una consulta?',
    otro: 'Entendido. También ofrecemos seguros para mascotas, viajes y más. ¿Cuál es tu necesidad específica?',
    contact: '¡Perfecto! Te conectamos con nuestro equipo. Escribe tu teléfono para que nos comuniquemos.'
  };

  const handleSendMessage = (text = inputValue) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      text: text,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      let botResponse = 'Gracias por tu interés. Por favor contáctanos para más información.';
      
      if (text.toLowerCase().includes('auto')) {
        botResponse = responses.auto;
      } else if (text.toLowerCase().includes('vida')) {
        botResponse = responses.vida;
      } else if (text.toLowerCase().includes('hogar')) {
        botResponse = responses.hogar;
      } else if (text.toLowerCase().includes('contacto') || text.toLowerCase().includes('teléfono')) {
        botResponse = '¡Perfecto! Nuestro equipo se comunicará contigo. También puedes escribir +595 983 514376 por WhatsApp.';
      }

      const bot = {
        type: 'bot',
        text: botResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, bot]);
    }, 500);
  };

  const handleOptionClick = (option) => {
    handleSendMessage(option.label);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 md:bottom-32 md:right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 z-40 flex items-center justify-center"
          title="Abrir chat"
        >
          <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-96 max-w-[calc(100vw-32px)] bg-white rounded-2xl shadow-2xl flex flex-col z-40 h-[600px] max-h-[80vh]">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">Quiero Mi Seguro</h3>
              <p className="text-xs text-blue-100">Asistente en línea</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-700 p-2 rounded transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Options */}
          {messages.length === 1 && (
            <div className="px-4 py-3 border-t border-gray-200 space-y-2">
              <p className="text-xs text-gray-600 font-semibold">Elige una opción:</p>
              <div className="grid grid-cols-2 gap-2">
                {insuranceOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleOptionClick(option)}
                    className="bg-blue-50 hover:bg-blue-100 text-blue-600 text-xs font-semibold py-2 px-3 rounded transition"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-gray-200 p-4 bg-gray-50 rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Escribe un mensaje..."
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <button
                onClick={() => handleSendMessage()}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
