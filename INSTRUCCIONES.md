# 🚗 INSTRUCCIONES - SeguroAutoPY

## PASO A PASO - Para Principiantes

---

## 📌 ANTES DE EMPEZAR

### Opción A: Con Docker (RECOMENDADO - Más fácil)

**Necesitas tener instalado:**
- Docker Desktop (descárga lo desde docker.com)

### Opción B: Sin Docker (Solo Python)

**Necesitas tener instalado:**
- Python 3.8+ (descargá desde python.org)

---

## 🚀 OPCIÓN A: EJECUTAR CON DOCKER

### Paso 1: Abre PowerShell

1. Presiona `Win + X`
2. Selecciona "Windows PowerShell (Administrador)"
3. O busca "PowerShell" en el menú de inicio

### Paso 2: Navega a la carpeta del proyecto

```powershell
cd "C:\Users\HP\OneDrive\Documentos\SeguroAutoPY"
```

### Paso 3: Ejecuta Docker Compose

```powershell
docker-compose up
```

### Paso 4: Espera el mensaje

Deberías ver algo como:
```
web    |  * Running on http://0.0.0.0:5000
```

### Paso 5: Abre tu navegador

1. Ve a: `http://localhost:5000`
2. ¡Listo! Ya está funcionando

### Para detener:

Presiona `Ctrl + C` en PowerShell

---

## 🐍 OPCIÓN B: EJECUTAR CON PYTHON

### Paso 1: Abre PowerShell

1. Presiona `Win + X`
2. Selecciona "Windows PowerShell"

### Paso 2: Navega a la carpeta

```powershell
cd "C:\Users\HP\OneDrive\Documentos\SeguroAutoPY"
```

### Paso 3: Verifica que Python está instalado

```powershell
python --version
```

Deberías ver algo como: `Python 3.11.0`

### Paso 4: Instala las dependencias

```powershell
pip install -r requirements.txt
```

Esto instalará Flask.

### Paso 5: Ejecuta la aplicación

```powershell
python app.py
```

Verás:
```
 * Running on http://127.0.0.1:5000
```

### Paso 6: Abre tu navegador

Ve a: `http://localhost:5000`

### Para detener:

Presiona `Ctrl + C`

---

## 📖 CÓMO USAR LA APLICACIÓN

### 1️⃣ Cotizar un Seguro

1. En la página principal, ve a **"Cotizar Seguro"**
2. Rellena:
   - **Marca**: Toyota, Honda, Ford, etc.
   - **Modelo**: Corolla, Civic, Fiesta, etc.
   - **Año**: 2023, 2022, etc.
   - **Tipo**: Básico, Completo, Premium
3. Haz clic en **"Cotizar Ahora"**
4. ¡Verás el precio al instante!

**Ejemplo:**
- Marca: Toyota
- Modelo: Corolla
- Año: 2022
- Tipo: Completo
- **Resultado: $3,000/mes**

### 2️⃣ Usar el Chatbot

1. En la página principal, ve a **"¿Tienes Preguntas?"**
2. Escribe tu pregunta:
   - "¿Cuánto cuesta?"
   - "¿Qué documentos necesito?"
   - "¿Cómo pago?"
   - "Hola"
3. El bot responderá en segundos

### 3️⃣ Ver Preguntas Frecuentes

1. Haz clic en **"FAQ"** en el menú
2. Haz clic en cualquier pregunta para expandirla
3. Lee la respuesta

### 4️⃣ Contactar

1. Haz clic en **"Contacto"**
2. Rellena el formulario
3. Haz clic en "Enviar"

---

## 🔧 CAMBIAR COSAS

### Cambiar Precios del Seguro

**Archivo:** `app.py`

Busca esto (está cerca del inicio del archivo):

```python
PRECIOS_BASE = {
    "basico": 1500,      
    "completo": 2500,    
    "premium": 3500      
}
```

**Ejemplo:**
```python
PRECIOS_BASE = {
    "basico": 800,       # Cambié de 1500 a 800
    "completo": 1200,    # Cambié de 2500 a 1200
    "premium": 1500      # Cambié de 3500 a 1500
}
```

Luego reinicia la aplicación.

### Cambiar Colores

**Archivo:** `static/css/style.css`

Busca estos colores:
- `#667eea` - Azul (color principal)
- `#764ba2` - Morado (secundario)

**Ejemplo:**
Reemplaza `#667eea` con `#FF0000` (rojo) en todo el archivo.

### Agregar Preguntas al Chatbot

**Archivo:** `chatbot.py`

Busca `BASE_RESPUESTAS` (es una lista con diccionarios).

Agrega al final de la lista:

```python
{
    'palabras_clave': ['mi pregunta', 'palabra1', 'palabra2'],
    'respuesta': 'Esta es mi respuesta'
}
```

**Ejemplo:**
```python
{
    'palabras_clave': ['precio de licencia', 'cuánto cuesta licencia', 'costo licencia'],
    'respuesta': 'La licencia de conducir cuesta $150 por año.'
}
```

Reinicia la aplicación y prueba.

---

## 🐛 PROBLEMAS COMUNES

### ❌ Error: "Address already in use"

**Problema:** Puerto 5000 ya está siendo usado.

**Solución:**

En PowerShell (como Administrador):
```powershell
netstat -ano | findstr :5000
```

Busca el PID. Luego:
```powershell
taskkill /PID <NUMERO> /F
```

Reemplaza `<NUMERO>` con el número que salió.

### ❌ Error: "docker: command not found"

**Problema:** Docker no está instalado.

**Solución:**
1. Descarga Docker Desktop desde docker.com
2. Instálalo
3. Reinicia tu computadora
4. Abre PowerShell de nuevo

### ❌ El sitio no carga

**Problema:** La aplicación no está corriendo.

**Solución:**
1. Asegúrate de haber ejecutado `docker-compose up` o `python app.py`
2. Verifica que diga "Running on http://127.0.0.1:5000"
3. Abre http://localhost:5000 en tu navegador
4. Intenta con http://127.0.0.1:5000

### ❌ El chatbot no responde

**Problema:** El backend no responde.

**Solución:**
1. Presiona F12 en tu navegador (Consola del navegador)
2. Busca mensajes de error en rojo
3. Si dice "404", revisa que la URL sea correcta
4. Reinicia la aplicación

---

## 📝 ESTRUCTURA DE ARCHIVOS QUE NECESITAS SABER

```
SeguroAutoPY/
├── app.py                    👈 El corazón de la app (Python)
├── chatbot.py               👈 Las respuestas del bot
├── requirements.txt         👈 Las librerías necesarias
├── Dockerfile               👈 Para Docker
├── docker-compose.yml       👈 Para Docker
├── README.md                👈 Manual completo
├── INSTRUCCIONES.md         👈 Este archivo
├── templates/               👈 Páginas HTML
│   ├── index.html          👈 Página principal
│   ├── faq.html            👈 Preguntas frecuentes
│   ├── contacto.html       👈 Página de contacto
│   ├── 404.html            👈 Error
│   └── 500.html            👈 Error
└── static/                  👈 Código de navegador
    ├── css/style.css       👈 Estilos (colores, tamaño, etc)
    └── js/main.js          👈 JavaScript (interactividad)
```

---

## 🎯 RESUMEN RÁPIDO

### Para ejecutar RÁPIDO:

**Con Docker:**
```powershell
cd C:\Users\HP\OneDrive\Documentos\SeguroAutoPY
docker-compose up
```

**Sin Docker:**
```powershell
cd C:\Users\HP\OneDrive\Documentos\SeguroAutoPY
pip install -r requirements.txt
python app.py
```

### Luego:
Abre http://localhost:5000 en tu navegador.

---

## 💡 TIPS ÚTILES

### Recarga automática con Docker:
Si cambias archivos, Docker recarga automáticamente. No necesitas reiniciar.

### Ver logs:
Si algo va mal, los logs aparecen en PowerShell.

### Debug:
Presiona F12 en el navegador para abrir la consola de desarrollador.
Allí verás errores de JavaScript.

### Probar el chatbot:
Escribe preguntas simples como:
- "Hola"
- "Precio"
- "Documentos"
- "Ayuda"

---

## ✅ CHECKLIST DE INSTALACIÓN

- [ ] Descargué e instalé Docker (o Python)
- [ ] Abrí PowerShell
- [ ] Navegué a la carpeta del proyecto
- [ ] Ejecuté `docker-compose up` o `python app.py`
- [ ] Abrí http://localhost:5000
- [ ] Probé el cotizador
- [ ] Probé el chatbot
- [ ] Probé el FAQ
- [ ] Probé el contacto

---

## 🎓 PRÓXIMOS PASOS

Ahora que funciona, intenta:

1. **Cambiar precios** en `app.py`
2. **Cambiar colores** en `style.css`
3. **Agregar preguntas** al chatbot
4. **Cambiar el nombre** de la empresa
5. **Editar el contenido** de las páginas HTML
6. **Subir a GitHub** para compartir

---

## 📞 ¿NECESITAS AYUDA?

Consulta el archivo `README.md` para más información.

---

**¡Felicidades! 🎉 Ya tienes una aplicación web funcional!**

Ahora es tu turno de personalizarla y aprender cómo funciona.

¡Diviértete! 🚀
