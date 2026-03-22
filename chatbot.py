"""
Chatbot simple para SeguroAutoPY
Responde preguntas frecuentes usando coincidencia de palabras clave
"""

# Base de datos de respuestas del chatbot
# Cada pregunta tiene palabras clave y una respuesta asociada
BASE_RESPUESTAS = [
    {
        'palabras_clave': ['costo', 'precio', 'cuánto', 'cuanto', 'cuesta', 'asegurar', 'auto', 'coche', 'vehículo', 'vehiculo'],
        'respuesta': 'El costo de asegurar un auto depende de varios factores:\n\n'
                   '• Marca y modelo del vehículo\n'
                   '• Año de fabricación\n'
                   '• Tipo de cobertura (Basic, Completo, Premium)\n\n'
                   'Nuestros precios base son:\n'
                   '- Seguro Básico: desde $1,500 mensuales\n'
                   '- Seguro Completo: desde $2,500 mensuales\n'
                   '- Seguro Premium: desde $3,500 mensuales\n\n'
                   '¡Prueba nuestro cotizador para obtener un precio exacto!'
    },
    {
        'palabras_clave': ['documentos', 'documento', 'requisitos', 'qué', 'que', 'necesito', 'papeles'],
        'respuesta': 'Para cotizar y contratar un seguro necesitas:\n\n'
                   '• Documento de identidad (DNI o Cédula)\n'
                   '• Número de patente del vehículo\n'
                   '• Número de chasis del vehículo\n'
                   '• Comprobante de dominio o título\n'
                   '• Datos de contacto (teléfono y email)\n\n'
                   'Una vez contrates, necesitarás:\n'
                   '• Comprobante de pago del seguro\n'
                   '• Póliza de seguro\n\n'
                   'Puedes enviar los documentos digitalmente a través de nuestra plataforma.'
    },
    {
        'palabras_clave': ['pago', 'pagar', 'formas de pago', 'cómo', 'como', 'tarjeta', 'banco', 'transferencia'],
        'respuesta': 'Aceptamos los siguientes métodos de pago:\n\n'
                   '• Tarjetas de crédito (VISA, MasterCard, American Express)\n'
                   '• Tarjetas de débito\n'
                   '• Transferencia bancaria\n'
                   '• Billetera virtual\n'
                   '• Efectivo en sucursales autorizadas\n\n'
                   'Puedes pagar:\n'
                   '- Mensualmente (con tarjeta)\n'
                   '- Cada 3 meses\n'
                   '- Semestralmente\n'
                   '- Anualmente (con descuento)\n\n'
                   'Nuestro sistema es 100% seguro con encriptación SSL.'
    },
    {
        'palabras_clave': ['tardar', 'tiempo', 'cuánto', 'cuanto', 'demora', 'dura', 'cotización', 'cuanto tarda'],
        'respuesta': 'El tiempo de cotización es muy rápido:\n\n'
                   '• Cotización online: 1-2 minutos\n'
                   '• Aprobación: 24 horas\n'
                   '• Emisión de póliza: 48 horas después del pago\n\n'
                   'En nuestro sitio puedes:\n'
                   '1. Hacer cotización GRATIS y sin compromiso\n'
                   '2. Ver el precio al instante\n'
                   '3. Decidir si contratar o no\n\n'
                   'El proceso es muy simple y rápido. ¡Inténtalo ahora!'
    },
    {
        'palabras_clave': ['coberturas', 'cobertura', 'qué', 'que', 'incluye', 'cubre', 'protege'],
        'respuesta': 'Nuestros tipos de seguros incluyen:\n\n'
                   '✓ SEGURO BÁSICO:\n'
                   '  - Responsabilidad Civil\n'
                   '  - Asistencia en Ruta 24/7\n\n'
                   '✓ SEGURO COMPLETO:\n'
                   '  - Responsabilidad Civil\n'
                   '  - Cobertura Total del Vehículo\n'
                   '  - Cristales\n'
                   '  - Asistencia en Ruta 24/7\n\n'
                   '✓ SEGURO PREMIUM:\n'
                   '  - Todas las coberturas del Completo\n'
                   '  - Chofer de Remplazo\n'
                   '  - Póliza Multivehicular con Descuento\n'
                   '  - Atención Premium\n\n'
                   'Usa nuestro cotizador para ver todas las opciones disponibles.'
    },
    {
        'palabras_clave': ['cómo', 'como', 'cotizar', 'usar', 'utilizar', 'función', 'funciona', 'cotizador'],
        'respuesta': 'Es muy fácil usar nuestro cotizador:\n\n'
                   '1. Haz clic en "Cotizar Seguro"\n'
                   '2. Completa los datos:\n'
                   '   - Marca de tu vehículo\n'
                   '   - Modelo\n'
                   '   - Año de fabricación\n'
                   '   - Tipo de seguro deseado\n'
                   '3. Haz clic en "Cotizar"\n'
                   '4. ¡Listo! Verás el precio al instante\n\n'
                   'La cotización es:\n'
                   '✓ Gratis\n'
                   '✓ Sin compromiso\n'
                   '✓ Sin dejar datos\n'
                   '✓ Resultado instantáneo\n\n'
                   'Si te interesa, puedes contratar directamente desde ahí.'
    },
    {
        'palabras_clave': ['empresa', 'quiénes', 'quienes', 'somos', 'acerca', 'sobre', 'historia'],
        'respuesta': 'SeguroAutoPY es una empresa de seguros automotrices moderna y confiable:\n\n'
                   '✓ Más de 10 años en el mercado\n'
                   '✓ Más de 500,000 clientes satisfechos\n'
                   '✓ Cotizaciones online al instante\n'
                   '✓ Trámites 100% digitales\n'
                   '✓ Soporte disponible 24/7\n\n'
                   'Nuestro compromiso:\n'
                   '• Transparencia en precios\n'
                   '• Atención rápida\n'
                   '• Soluciones adaptadas a cada cliente\n'
                   '• Tecnología moderna\n\n'
                   '¡Confía en nosotros para asegurar tu vehículo!'
    },
    {
        'palabras_clave': ['contacto', 'teléfono', 'número', 'ayuda', 'soporte', 'email', 'correo', 'teléfono'],
        'respuesta': 'Puedes contactarnos de varias formas:\n\n'
                   '📞 Teléfono: 0800-123-4567\n'
                   '   (Disponible 24 horas)\n\n'
                   '📧 Email: info@seguroautopy.com\n'
                   '   (Respondemos en 24 horas)\n\n'
                   '💬 Chat en vivo:\n'
                   '   (Disponible en nuestro sitio)\n\n'
                   '📍 Visítanos:\n'
                   '   Calle Principal 123, Ciudad\n\n'
                   'También puedes usar este chatbot para preguntas rápidas.\n'
                   '¿Hay algo más en lo que pueda ayudarte?'
    },
    {
        'palabras_clave': ['hola', 'hello', 'hi', 'buenos', 'buenas', 'saludos'],
        'respuesta': '¡Hola! 👋 Bienvenido a SeguroAutoPY.\n\n'
                   'Soy tu asistente virtual y estoy aquí para ayudarte.\n\n'
                   'Puedo responder preguntas sobre:\n'
                   '• Cotización de seguros\n'
                   '• Coberturas disponibles\n'
                   '• Métodos de pago\n'
                   '• Documentos necesarios\n'
                   '• Nuestra empresa\n'
                   '• Contacto y soporte\n\n'
                   '¿Qué deseas saber?'
    },
    {
        'palabras_clave': ['ayuda', 'help', 'socorro', 'no entiendo', 'no sé', 'no se'],
        'respuesta': 'Claro, estoy aquí para ayudarte.\n\n'
                   'Puedo responder preguntas sobre:\n\n'
                   '💵 Precios y coutas\n'
                   '📋 Documentos necesarios\n'
                   '💳 Formas de pago\n'
                   '⏱️ Tiempo de cotización\n'
                   '🛡️ Tipos de cobertura\n'
                   '🚗 Cómo usar el cotizador\n'
                   '👥 Información de la empresa\n'
                   '📞 Contacto\n\n'
                   'Por favor, hazme tu pregunta y haré mi mejor esfuerzo para ayudarte.\n'
                   'Si necesitas hablar con un agente, escribe "contacto".'
    }
]


def normalizar_texto(texto):
    """
    Convierte el texto a minúsculas y lo limpia
    Esto ayuda a comparar preguntas de diferente forma
    """
    return texto.lower().strip()


def responder_pregunta(pregunta_usuario):
    """
    Procesa la pregunta del usuario y devuelve la respuesta más apropiada
    
    Parámetros:
        pregunta_usuario (str): La pregunta del usuario
    
    Retorna:
        str: La respuesta del chatbot
    """
    # Normalizar la pregunta
    pregunta_normalizada = normalizar_texto(pregunta_usuario)
    
    # Variable para contar coincidencias
    mejor_respuesta = None
    mayor_coincidencias = 0
    
    # Buscar la mejor respuesta basada en palabras clave
    for item in BASE_RESPUESTAS:
        coincidencias = 0
        
        # Contar cuántas palabras clave aparecen en la pregunta
        for palabra_clave in item['palabras_clave']:
            if palabra_clave in pregunta_normalizada:
                coincidencias += 1
        
        # Si encontramos más coincidencias, actualizar la mejor respuesta
        if coincidencias > mayor_coincidencias:
            mayor_coincidencias = coincidencias
            mejor_respuesta = item['respuesta']
    
    # Si no encontramos respuesta, devolver respuesta predeterminada
    if mejor_respuesta is None:
        mejor_respuesta = ('No entiendo muy bien tu pregunta. 😕\n\n'
                          'Intenta preguntar sobre:\n'
                          '• Precios y costos\n'
                          '• Documentos necesarios\n'
                          '• Formas de pago\n'
                          '• Coberturas disponibles\n'
                          '• Cómo usar el cotizador\n'
                          '• Contacto y soporte\n\n'
                          'O escribe "ayuda" para más información.')
    
    return mejor_respuesta


# Prueba del chatbot (ejecutar si se llama directamente)
if __name__ == "__main__":
    print("=== PRUEBA DEL CHATBOT ===\n")
    
    # Preguntas de prueba
    preguntas_prueba = [
        "¿Cuánto cuesta un seguro de auto?",
        "¿Qué documentos necesito?",
        "¿Cómo puedo pagar?",
        "¿Cuánto tarda la cotización?",
        "Hola"
    ]
    
    for pregunta in preguntas_prueba:
        print(f"👤 Pregunta: {pregunta}")
        respuesta = responder_pregunta(pregunta)
        print(f"🤖 Respuesta: {respuesta}\n")
        print("-" * 60 + "\n")
