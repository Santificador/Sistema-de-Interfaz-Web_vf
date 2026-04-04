import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '595985335598';
  const message = encodeURIComponent('Hola, quiero consultar sobre seguros en AseguraPy.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 z-40 flex items-center justify-center"
      title="Contactar por WhatsApp"
    >
      <svg
        className="w-6 h-6 md:w-8 md:h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.732 5.41 2.125 7.722l-2.262 6.541 6.782-2.243a9.847 9.847 0 004.73 1.201h.004c5.402 0 9.847-4.426 9.877-9.843 0-2.633-.565-5.12-1.636-7.544-1.071-2.424-2.596-4.604-4.428-6.294-1.832-1.69-3.97-3.003-6.26-3.766-2.289-.763-4.719-.896-7.001-.383 0 0 0 0 0 0z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
