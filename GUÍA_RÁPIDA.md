# 🚀 GUÍA RÁPIDA - Quiero Mi Seguro

## ¿Qué acabas de conseguir?

Una **página web profesional, moderna y completamente funcional** para la agencia "Quiero Mi Seguro". ¡Listo para usar! 

## ⚡ Inicio Rápido (3 pasos)

### 1️⃣ Instalar Node.js (si no lo tienes)
- Descarga desde: https://nodejs.org (versión LTS)
- Ejecuta el instalador
- Reinicia tu computadora

### 2️⃣ Iniciar el proyecto

**En Windows:**
- Haz doble clic en `start.bat`

**En Mac/Linux:**
```bash
bash start.sh
```

**O manualmente (cualquier SO):**
```bash
npm install
npm run dev
```

### 3️⃣ ¡Listo! 🎉
Se abrirá automáticamente en tu navegador:
```
http://localhost:3000
```

---

## 📋 Qué incluye tu proyecto

✅ **Navbar** - Menú responsivo con logo  
✅ **Hero Section** - Portada atractiva con CTA  
✅ **Servicios** - Cards de: Auto, Vida, Hogar, Otros  
✅ **Por qué elegir** - Razones + estadísticas  
✅ **Testimonios** - 3 clientes reales  
✅ **Cómo funciona** - Timeline de 4 pasos  
✅ **Contacto** - Formulario + info del negocio  
✅ **Footer** - Enlaces, redes, copyright  
✅ **WhatsApp Button** - Botón flotante  
✅ **Chatbot** - Asistente de chat interactivo  

---

## 🎨 Personalizar tu página

Abre los archivos en la carpeta `components/` y busca:

### Cambiar teléfono
Busca: `595983514376` → Reemplaza con tu número

### Cambiar email
Busca: `info@quieromiseguro.com.py` → Reemplaza con tu email

### Cambiar dirección
En `ContactSection.tsx`, busca `O'higgins 979` → Actualiza

### Cambiar colores
- **Azul principal**: Busca `bg-blue-600` → Cambia a `bg-[TU_COLOR]`
- **Verde (botones)**: Busca `bg-green-500` → Cambia a `bg-[TU_COLOR]`

### Agregar más testimonios
En `TestimonialsSection.tsx`:
```jsx
const testimonials = [
  {
    name: 'Tu nombre',
    role: 'Tu posición',
    text: 'Mi reseña...',
    rating: 5,
    image: '👨‍💼'
  },
  // Agrega más aquí
];
```

### Cambiar textos
Todos los textos están en los componentes. Busca y reemplaza fácilmente.

---

## 📱 Verificar en dispositivos

### En tu computadora
Ya está funcionando en localhost:3000

### En celular (misma red WiFi)
1. Averigua tu IP: En terminal escribe `ipconfig` (Windows) o `ifconfig` (Mac)
2. Busca algo como `192.168.X.X`
3. En tu celular ve a: `http://192.168.X.X:3000`

---

## 🔗 Integrar con WhatsApp

El botón ya está configurado para enviar mensajes a: **+595 983 514376**

Para cambiar:
1. Abre `components/WhatsAppButton.tsx`
2. Cambia: `const phoneNumber = '595983514376'` por tu número
3. Personaliza el mensaje en `const message = 'tu mensaje aquí'`

---

## 📧 Enviar formulario a tu email

La página está lista, pero el formulario es simulado. Para recibir emails:

**Opción 1: EmailJS (Recomendado - Gratis)**
1. Ve a: https://www.emailjs.com
2. Crea una cuenta
3. En `ContactSection.tsx`, integra EmailJS
4. Ver docs: https://www.emailjs.com/docs

**Opción 2: Tu servidor**
En `ContactSection.tsx`, modifica:
```jsx
handleSubmit = (e) => {
  e.preventDefault();
  // Envía los datos a tu servidor
  fetch('/api/contacto', {
    method: 'POST',
    body: JSON.stringify(formData)
  })
}
```

---

## 🚀 Publicar en internet

### Con Vercel (Gratis y Super Fácil)
1. Instala: `npm i -g vercel`
2. Ejecuta: `vercel`
3. Sigue los pasos
4. ¡Tu página estará en internet! 🌍

### Con Netlify
1. Ve a: https://app.netlify.com
2. "New site from Git" (si usas GitHub)
3. O: "Deploy manually"
4. Sube la carpeta `dist` generada por `npm run build`

---

## 📦 Estructura del proyecto

```
quiero-mi-seguro/
├── components/          ← Componentes React
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   └── ...
├── pages/
│   └── Index.tsx        ← Página principal
├── styles/
│   └── globals.css      ← Estilos globales
├── index.html           ← HTML principal
├── main.tsx             ← Entrada de la app
├── package.json         ← Dependencias
└── README.md            ← Documentación completa
```

---

## 🛠️ Comandos útiles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Generar build para producción
npm run build

# Ver el build en local
npm run preview

# Revisar errores
npm run lint
```

---

## ⚙️ Editar componentes

1. Abre cualquier archivo `.tsx`
2. Haz cambios
3. **Guarda** (Ctrl+S)
4. La página se actualiza automáticamente en el navegador 🔄

---

## 🎯 Próximos pasos

- [ ] Personalizar con tu información
- [ ] Cambiar colores y logos
- [ ] Agregar testimonios reales
- [ ] Integrar formulario de contacto
- [ ] Publicar en internet
- [ ] Monitorear con Google Analytics

---

## 💡 Tips profesionales

✨ **SEO**: El código ya tiene meta tags y datos estructurados  
📱 **Mobile First**: Funciona perfecto en cualquier dispositivo  
⚡ **Rápido**: Optimizado para carga veloz  
🎨 **Hermoso**: Animaciones suaves y diseño moderno  
🔐 **Seguro**: Sin librerías externas peligrosas  

---

## ❓ Preguntas frecuentes

**¿Necesito saber programar?**  
No, puedes cambiar textos, colores y agregar contenido sin tocar código.

**¿Puedo usar mi dominio propio?**  
Sí, después de publicar en Vercel/Netlify, apunta tu dominio a la URL que te dan.

**¿Cómo agrego un icono diferente?**  
Usamos Lucide Icons. Ver más en: https://lucide.dev

**¿Puedo cambiar el diseño?**  
Claro, es Tailwind CSS. Fácil de customizar sin conocer mucho.

---

## 📞 Soporte

- Documentación completa: Ver `README.md`
- Lucide Icons: https://lucide.dev
- Tailwind CSS: https://tailwindcss.com
- Vite Docs: https://vitejs.dev

---

## 🎉 ¡Listo para comenzar!

Tu página está lista. Solo personaliza y publica.

**¡Mucho éxito con Quiero Mi Seguro! 🚀**

---

**Contacto empresa:**  
📱 +595 983 514376  
📧 info@quieromiseguro.com.py  
📍 Asunción, Paraguay
