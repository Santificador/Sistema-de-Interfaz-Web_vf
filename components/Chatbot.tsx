import React, { useState } from 'react';
import { X, MessageCircle, Send } from 'lucide-react';

const initialMessages = [
  {
    type: 'bot',
    text: 'Hola. Elegí una pregunta frecuente para ver la respuesta.',
    timestamp: new Date()
  }
];

const Chatbot = () => {
  const faqOptions = [
    {
      id: '1',
      question: '¿Cuánto cuesta un seguro de auto?',
      answer: 'Desde Gs. 120.000 hasta Gs. 450.000 por mes. El valor varía según la marca, el año y la aseguradora.'
    },
    {
      id: '2',
      question: '¿Qué aseguradora es mejor?',
      answer: 'La plataforma te muestra la opción más conveniente según tu vehículo.'
    },
    {
      id: '3',
      question: '¿Puedo asegurar un auto usado?',
      answer: 'Sí, incluso autos de más de 20 años.'
    },
    {
      id: '4',
      question: '¿El precio es igual que directo a la compañía?',
      answer: 'Sí. Por ley, el precio del seguro es el mismo compres donde compres.'
    },
    {
      id: '5',
      question: '¿Cuánto tarda la emisión?',
      answer: 'Entre 15 y 30 minutos.'
    },
    {
      id: '6',
      question: '¿Qué necesito para contratar?',
      answer: 'Necesitas cédula, registro del vehículo y en algunos casos una foto.'
    }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');

  const resetChat = () => {
    setMessages([
      {
        type: 'bot',
        text: 'Hola. Elegí una pregunta frecuente para ver la respuesta.',
        timestamp: new Date()
      }
    ]);
    setInputValue('');
  };

  const handleSendMessage = (text = inputValue) => {
    if (!text.trim()) return;

    const normalizedText = text.trim().toLowerCase();
    const selectedFaq = faqOptions.find(
      (option) => option.id === normalizedText || option.question.toLowerCase() === normalizedText
    );

    const userMessage = {
      type: 'user',
      text: selectedFaq ? `${selectedFaq.id}. ${selectedFaq.question}` : text,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const botResponse = selectedFaq
        ? selectedFaq.answer
        : 'Elegí una de las preguntas frecuentes para ver la respuesta. Si prefieres, también puedes escribir al 0985335598 por WhatsApp.';

      const bot = {
        type: 'bot',
        text: botResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, bot]);

      if (selectedFaq) {
        setTimeout(() => {
          resetChat();
        }, 2500);
      }
    }, 500);
  };

  const handleOptionClick = (option) => {
    handleSendMessage(option.id);
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
              <h3 className="font-bold text-lg">AseguraPy</h3>
              <p className="text-xs text-blue-100">Asistente en línea</p>
            </div>
            <button
              onClick={() => {
                resetChat();
                setIsOpen(false);
              }}
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
              <p className="text-xs text-gray-600 font-semibold">Preguntas frecuentes:</p>
              <div className="grid grid-cols-1 gap-2">
                {faqOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionClick(option)}
                    className="bg-blue-50 hover:bg-blue-100 text-blue-600 text-xs font-semibold py-2 px-3 rounded transition"
                  >
                    {option.id}. {option.question}
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
                placeholder="Escribe el número de una pregunta..."
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
