// ==================== FUNCIONALIDAD DE COTIZACIÓN ====================

// Obtener el formulario
const formularioCotizacion = document.getElementById('formulario-cotizacion');

// Si el formulario existe, agregar event listener
if (formularioCotizacion) {
    formularioCotizacion.addEventListener('submit', async function(e) {
        e.preventDefault(); // Prevenir envío tradicional

        // Obtener valores del formulario
        const marca = document.getElementById('marca').value.trim();
        const modelo = document.getElementById('modelo').value.trim();
        const anio = document.getElementById('anio').value.trim();
        const tipoSeguro = document.getElementById('tipo_seguro').value.trim();

        // Validar que no haya campos vacíos
        if (!marca || !modelo || !anio || !tipoSeguro) {
            alert('Por favor completa todos los campos');
            return;
        }

        // Mostrar mensaje de cargando
        const btnCotizar = formularioCotizacion.querySelector('button[type="submit"]');
        const textoOriginal = btnCotizar.textContent;
        btnCotizar.textContent = 'Cotizando...';
        btnCotizar.disabled = true;

        try {
            // Enviar solicitud al servidor
            const respuesta = await fetch('/api/cotizar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    marca: marca,
                    modelo: modelo,
                    anio: anio,
                    tipo_seguro: tipoSeguro
                })
            });

            // Parsear respuesta JSON
            const datos = await respuesta.json();

            if (datos.exito) {
                // Mostrar resultado exitoso
                mostrarResultadoCotizacion(datos.datos);
            } else {
                // Mostrar error
                alert('Error: ' + datos.mensaje);
            }

        } catch (error) {
            console.error('Error:', error);
            alert('Ocurrió un error al procesar tu cotización. Intenta de nuevo.');
        } finally {
            // Restaurar botón
            btnCotizar.textContent = textoOriginal;
            btnCotizar.disabled = false;
        }
    });
}

/**
 * Función para mostrar el resultado de la cotización
 * @param {Object} datos - Datos de la cotización
 */
function mostrarResultadoCotizacion(datos) {
    const contenidoResultado = document.getElementById('resultado-contenido');
    
    // Crear contenido HTML con los datos
    const html = `
        <div class="resultado-detalle">
            <p><strong>Marca:</strong> ${datos.marca}</p>
            <p><strong>Modelo:</strong> ${datos.modelo}</p>
            <p><strong>Año:</strong> ${datos.anio}</p>
            <p><strong>Cobertura:</strong> ${datos.tipo_seguro}</p>
            <hr style="border: 1px solid rgba(255,255,255,0.2); margin: 15px 0;">
            <p style="font-size: 24px; font-weight: bold;">
                💰 Precio: $${datos.precio_mensual} por mes
            </p>
            <p style="font-size: 14px; opacity: 0.9;">
                Anual: $${datos.precio_anual}
            </p>
        </div>
    `;

    // Insertar contenido en el contenedor
    contenidoResultado.innerHTML = html;

    // Mostrar el contenedor de resultado
    const resultadoDiv = document.getElementById('resultado-cotizacion');
    resultadoDiv.classList.remove('resultado-oculto');

    // Hacer scroll hacia el resultado
    setTimeout(() => {
        resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
}

// ==================== FUNCIONALIDAD DEL CHATBOT ====================

// Obtener elementos del chatbot
const formularioChatbot = document.getElementById('chatbot-form');
const inputPregunta = document.getElementById('chatbot-pregunta');
const mensajesContainer = document.getElementById('chatbot-mensajes');

// Si el formulario del chatbot existe, agregar event listener
if (formularioChatbot) {
    formularioChatbot.addEventListener('submit', async function(e) {
        e.preventDefault(); // Prevenir envío tradicional

        // Obtener pregunta del usuario
        const pregunta = inputPregunta.value.trim();

        // Validar que no esté vacío
        if (!pregunta) {
            return;
        }

        // Mostrar mensaje del usuario en el chat
        agregarMensajeAlChat(pregunta, 'usuario');

        // Limpiar input
        inputPregunta.value = '';

        // Deshabilitar botón temporalmente
        const btnEnviar = formularioChatbot.querySelector('button[type="submit"]');
        btnEnviar.disabled = true;
        btnEnviar.textContent = 'Enviando...';

        try {
            // Enviar pregunta al servidor
            const respuesta = await fetch('/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    pregunta: pregunta
                })
            });

            // Parsear respuesta JSON
            const datos = await respuesta.json();

            if (datos.exito) {
                // Mostrar respuesta del chatbot
                agregarMensajeAlChat(datos.respuesta, 'bot');
            } else {
                // Mostrar mensaje de error
                agregarMensajeAlChat('Disculpa, ocurrió un error. Intenta de nuevo.', 'bot');
            }

        } catch (error) {
            console.error('Error:', error);
            agregarMensajeAlChat('Error de conexión. Por favor, intenta de nuevo.', 'bot');
        } finally {
            // Restaurar botón
            btnEnviar.disabled = false;
            btnEnviar.textContent = 'Enviar';
            
            // Enfocar input para continuar escribiendo
            inputPregunta.focus();
        }
    });
}

/**
 * Función para agregar un mensaje al chat
 * @param {String} mensaje - El contenido del mensaje
 * @param {String} tipo - Tipo de mensaje: 'usuario' o 'bot'
 */
function agregarMensajeAlChat(mensaje, tipo) {
    // Crear elemento del mensaje
    const divMensaje = document.createElement('div');
    divMensaje.className = tipo === 'usuario' ? 'mensaje-usuario' : 'mensaje-bot';
    divMensaje.textContent = mensaje;

    // Agregar mensaje al contenedor
    mensajesContainer.appendChild(divMensaje);

    // Hacer scroll al último mensaje
    mensajesContainer.scrollTop = mensajesContainer.scrollHeight;
}

// ==================== ANIMACIONES Y EFECTOS ====================

// Agregar animación cuando la página carga
document.addEventListener('DOMContentLoaded', function() {
    // Animar elementos al llegar a ellos (opcional)
    const elementos = document.querySelectorAll('.feature-card, .faq-item, .info-item');
    
    // Usar Intersection Observer para animaciones cuando sea visible
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        elementos.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s, transform 0.5s';
            observer.observe(el);
        });
    }
});

// ==================== FUNCIONES AUXILIARES ====================

/**
 * Función para formatear moneda
 * @param {Number} numero - Número a formatear
 * @returns {String} - Número formateado
 */
function formatoMoneda(numero) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS'
    }).format(numero);
}

/**
 * Función para validar email
 * @param {String} email - Email a validar
 * @returns {Boolean} - true si es válido
 */
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

console.log('✅ JavaScript cargado correctamente');
