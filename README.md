# SeguroAutoPY - Plataforma de Cotización de Seguros Automotrices

¡Bienvenido a SeguroAutoPY! Este es un proyecto web completo para cotizar seguros de vehículos con un chatbot integrado.

## 📋 Descripción del Proyecto

SeguroAutoPY es una aplicación web moderna que permite a los usuarios:

1. **Cotizar seguros automotrices** en línea de forma rápida
2. **Hablar con un chatbot** que responde preguntas frecuentes
3. **Explorar diferentes tipos de coberturas**
4. **Contactar al equipo de soporte**

### Características principales:

- ✅ Cotización instantánea
- ✅ Chatbot inteligente con respuestas predefinidas
- ✅ Diseño responsivo (funciona en móvil y desktop)
- ✅ Interfaz moderna y amigable
- ✅ API REST backend
- ✅ Ejecutable con Docker

---

## 🏗️ Estructura del Proyecto

```
SeguroAutoPY/
├── app.py                    # Aplicación principal Flask
├── chatbot.py               # Lógica del chatbot
├── requirements.txt         # Dependencias Python
├── Dockerfile               # Configuración Docker
├── docker-compose.yml       # Orquestación Docker
├── templates/               # Archivos HTML
│   ├── index.html          # Página de inicio
│   ├── faq.html            # Preguntas frecuentes
│   ├── contacto.html       # Página de contacto
│   ├── 404.html            # Error 404
│   └── 500.html            # Error 500
├── static/                  # Archivos estáticos
│   ├── css/
│   │   └── style.css       # Estilos CSS
│   └── js/
│       └── main.js         # JavaScript frontend
└── README.md               # Este archivo
```

---

## 🚀 Cómo Ejecutar el Proyecto

### Opción 1: Ejecutar con Docker (RECOMENDADO - Más fácil)

#### Requisitos:
- Docker instalado (descárgalo desde docker.com)
- Docker Compose (incluido en Docker Desktop)

#### Pasos:

1. **Abre PowerShell/Terminal** en el directorio del proyecto

2. **Ejecuta el proyecto:**
   ```powershell
   docker-compose up
   ```

3. **Espera a que termine** el proceso de construcción (puede tomar 1-2 minutos)

4. **Abre tu navegador** y ve a:
   ```
   http://localhost:5000
   ```

5. **¡Listo!** Ya puedes usar la aplicación

6. **Para detener** presiona `Ctrl + C` en la terminal

---

### Opción 2: Ejecutar sin Docker (Requiere Python)

#### Requisitos:
- Python 3.8+ instalado
- pip (administrador de paquetes de Python)

#### Pasos:

1. **Abre PowerShell/Terminal** en el directorio del proyecto

2. **Instala las dependencias:**
   ```powershell
   pip install -r requirements.txt
   ```

3. **Ejecuta la aplicación:**
   ```powershell
   python app.py
   ```

4. **Verás algo como:**
   ```
   * Running on http://127.0.0.1:5000
   * Press CTRL+C to quit
   ```

5. **Abre tu navegador** y ve a:
   ```
   http://localhost:5000
   ```

6. **¡Listo!** Ya puedes usar la aplicación

---

## 📱 Cómo Usar la Aplicación

### 1. Cotizar un Seguro

1. Haz clic en **"Cotizar Seguro"** en el menú o página principal
2. Completa los datos:
   - **Marca**: Selecciona la marca de tu vehículo
   - **Modelo**: Escribe el modelo (ej: Corolla)
   - **Año**: Selecciona el año de fabricación
   - **Tipo de Seguro**: Elige entre Básico, Completo o Premium
3. Haz clic en **"Cotizar Ahora"**
4. **¡Listo!** Verás el precio estimado al instante

### 2. Usar el Chatbot

1. En la página de inicio, ve a la sección **"¿Tienes Preguntas?"**
2. Escribe tu pregunta (ej: "¿Cuánto cuesta un seguro?")
3. El chatbot responderá automáticamente
4. Puedes hacer múltiples preguntas

**Preguntas que puede responder el chatbot:**
- ¿Cuánto cuesta asegurar un auto?
- ¿Qué documentos necesito?
- ¿Cómo puedo pagar?
- ¿Cuánto tarda una cotización?
- ¿Cuáles son las coberturas?
- Contacto/Soporte
- Y más...

### 3. Explorar Preguntas Frecuentes

1. Haz clic en **"FAQ"** en el menú
2. Haz clic en cualquier pregunta para expandirla
3. Lee las respuestas detalladas

### 4. Contactar al Equipo

1. Haz clic en **"Contacto"** en el menú
2. Completa el formulario con tu información
3. Selecciona el asunto
4. Envía tu mensaje

---

## 💻 Explicación del Código

### app.py (Aplicación Principal)

**¿Qué hace?**
- Crea la aplicación web con Flask
- Define las rutas (URLs)
- Procesa las cotizaciones
- Integra el chatbot

**Rutas principales:**
- `/` - Página de inicio
- `/api/cotizar` - Endpoint para cotizaciones (POST)
- `/api/chatbot` - Endpoint para chatbot (POST)
- `/faq` - Página de FAQ
- `/contacto` - Página de contacto

### chatbot.py (Chatbot)

**¿Qué hace?**
- Define respuestas a preguntas frecuentes
- Busca palabras clave en las preguntas
- Devuelve la respuesta más apropiada

**Cómo funciona:**
1. Recibe una pregunta del usuario
2. Identifica palabras clave
3. Busca una respuesta coincidente
4. Devuelve la respuesta

### HTML Templates (Interfaces)

- **index.html**: Página principal con cotizador y chatbot
- **faq.html**: Preguntas frecuentes expandibles
- **contacto.html**: Formulario de contacto
- **404.html**: Página de error no encontrado
- **500.html**: Página de error del servidor

### CSS (Estilos)

- **style.css**: Todos los estilos visuales
  - Colores y tipografía
  - Responsive design
  - Animaciones y efectos
  - Variables de color (#667eea es el color principal)

### JavaScript (Interactividad)

- **main.js**: Maneja interacciones en el navegador
  - Formulario de cotización
  - Chatbot comunicación
  - Animaciones
  - Validaciones

---

## 🔧 Configuración y Personalización

### Cambiar Precios del Seguro

**Archivo:** `app.py`

Busca esto:
```python
PRECIOS_BASE = {
    "basico": 1500,      # Cambiar este número
    "completo": 2500,    # Cambiar este número
    "premium": 3500      # Cambiar este número
}
```

Edita los números para cambiar los precios base.

### Cambiar Nombre de la Empresa

1. **En Python (app.py)**: Busca "SeguroAutoPY" y reemplaza
2. **En HTML**: Busca "SeguroAutoPY" en los templates
3. **En CSS**: Puedes cambiar colores editando `style.css`

### Agregar Nuevas Preguntas al Chatbot

**Archivo:** `chatbot.py`

Busca `BASE_RESPUESTAS` y agrega un nuevo elemento:

```python
{
    'palabras_clave': ['palabra1', 'palabra2', 'palabra3'],
    'respuesta': 'Tu respuesta aquí'
}
```

---

## 🐛 Solución de Problemas

### El sitio no carga

**Problema:** `ERR_CONNECTION_REFUSED`

**Solución:**
1. Verifica que la aplicación esté ejecutándose
2. Asegúrate de que estés visitando `http://localhost:5000`
3. Reinicia la aplicación

### Docker no funciona

**Problema:** `docker: command not found`

**Solución:**
1. Instala Docker desde docker.com
2. Reinicia tu computadora
3. Abre Docker Desktop

### Puerto 5000 ya está en uso

**Problema:** `Address already in use`

**Solución:**

Con Docker:
```powershell
docker-compose.yml
```

Edita la línea de puertos (primera 5000):
```yaml
ports:
  - "5001:5000"  # Cambia 5000 a otro número
```

Sin Docker:
```powershell
# Busca qué usa el puerto
netstat -ano | findstr :5000

# Mata el proceso (reemplaza PID)
taskkill /PID <PID> /F
```

### El chatbot no responde

**Solución:**
1. Intenta preguntas más simples
2. Verifica la consola para errores
3. Reinicia la aplicación

---

## 📊 Arquitectura Técnica

```
┌─────────────────┐
│   Navegador     │ (Usuario)
└────────┬────────┘
         │ HTTP
         ▼
┌─────────────────────────────┐
│   HTML/CSS/JavaScript (UI)  │
└────────┬────────────────────┘
         │ AJAX (JSON)
         ▼
┌─────────────────────────────┐
│   Flask (Backend)           │
│  - Rutas                    │
│  - API REST                 │
└────────┬────────────────────┘
         │
         ├─ Cotizador        → Calcula precios
         └─ Chatbot          → Responde preguntas
```

---

## 📚 Tecnologías Utilizadas

### Backend:
- **Python 3.11**: Lenguaje de programación
- **Flask 3.0**: Framework web
- **Werkzeug**: Librería WSGI

### Frontend:
- **HTML5**: Estructura
- **CSS3**: Estilos y responsive
- **JavaScript (Vanilla)**: Interactividad
- **Fetch API**: Comunicación con servidor

### DevOps:
- **Docker**: Containerización
- **Docker Compose**: Orquestación

---

## 🎨 Características de Diseño

- **Responsive Design**: Funciona en dispositivos móviles
- **Tema de Color**: Azul morado (#667eea y #764ba2)
- **Animaciones Suaves**: Transiciones agradables
- **Accesibilidad**: Cumple estándares básicos
- **Performance**: Carga rápida y eficiente

---

## 📝 Próximas Mejoras

Estas features podrían agregarse en futuras versiones:

- [ ] Base de datos (guardar cotizaciones)
- [ ] Autenticación de usuarios
- [ ] Integración con email
- [ ] Dashboard de administrador
- [ ] Más opciones de personalización
- [ ] Integración con API de seguros real
- [ ] Pago en línea
- [ ] Generación de PDF

---

## ❓ Preguntas Frecuentes

### ¿Puedo usar esto en producción?

No, esto es un proyecto educativo. Para producción necesitarías:
- Certificado SSL
- Base de datos
- Autenticación segura
- Validaciones más robustas

### ¿Puedo cambiar los colores?

Claro, edita `static/css/style.css` busca los colores:
- `#667eea` - Color principal azul
- `#764ba2` - Color secundario morado
- Reemplaza con tus colores

### ¿Cómo agrego más tipos de seguros?

En `app.py`, edita `PRECIOS_BASE`:
```python
PRECIOS_BASE = {
    "basico": 1500,
    "completo": 2500,
    "premium": 3500,
    "tu_nuevo_tipo": 2000  # Agrega aquí
}
```

### ¿Puedo usar otro framework en lugar de Flask?

Claro, puedes usar:
- Django
- FastAPI
- Otros frameworks Python

Pero tendrías que reescribir el código.

---

## 📞 Soporte

Si tienes problemas:

1. Revisa las secciones "Solución de Problemas"
2. Verifica la consola del navegador (F12)
3. Verifica los logs de la aplicación

---

## 📄 Licencia

Este proyecto es educativo y de código abierto.

---

## 🎓 Aprendizajes

Este proyecto te enseña:

- ✅ Crear aplicaciones web con Flask
- ✅ Trabajar con APIs REST
- ✅ JavaScript para interactividad
- ✅ HTML y CSS moderno
- ✅ Usar Docker para aplicaciones
- ✅ Diseño web responsivo
- ✅ Lógica de chatbot simple

---

## 👨‍💻 Autor

Creado como proyecto educativo para estudiantes de desarrollo web.

---

## ✨ ¡Felicidades!

¡Has completado la instalación y estás listo para explorar! 

Si es tu primera vez con web development, te recomendamos:

1. Jugar con los precios del seguro
2. Agregar nuevas preguntas al chatbot
3. Cambiar colores en el CSS
4. Modificar el contenido HTML
5. Aprender JavaScript leyendo main.js

**¡Diviértete desarrollando! 🚀**
