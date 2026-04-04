# 🚀 AseguraPy - Landing Page

Página web moderna, atractiva y funcional para la agencia de seguros "Quiero Mi Seguro" (Eheja Na Che Cargope).

## 📋 Características

✅ Diseño moderno y responsivo (mobile-first)  
✅ Secciones completas: Hero, Servicios, Por qué elegir, Testimonios, Cómo funciona, Contacto  
✅ Botón flotante de WhatsApp  
✅ Chatbot asistente integrado  
✅ Formulario de contacto con validación  
✅ Animaciones suaves  
✅ Optimizado para conversión  

## 🛠️ Tecnologías Utilizadas

- **React** - Marco de desarrollo UI
- **Tailwind CSS** - Estilos modernos y responsivos
- **Lucide Icons** - Iconografía profesional
- **TypeScript** - Tipado seguro (opcional)

## 📦 Instalación y Configuración

### Opción 1: En un proyecto React existente

1. **Copia todos los componentes** a tu carpeta `/components`
2. **Instala las dependencias**:
   ```bash
   npm install lucide-react
   ```
3. **Importa el componente principal** en tu página:
   ```jsx
   import Index from './pages/Index';
   
   export default function App() {
     return <Index />;
   }
   ```

### Opción 2: Crear un nuevo proyecto React + Vite

```bash
npm create vite@latest quiero-mi-seguro -- --template react
cd quiero-mi-seguro
npm install lucide-react
# Copia la carpeta 'components' al proyecto
npm run dev
```

### Opción 3: Con Next.js

```bash
npx create-next-app@latest quiero-mi-seguro
# Selecciona: TypeScript (No), Tailwind (Yes)
npm install lucide-react
# Copia la carpeta 'components' a app/components/
```

## 📁 Estructura de Carpetas

```
quiero-mi-seguro/
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── WhyUsSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── HowItWorksSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx
│   └── Chatbot.tsx
├── pages/
│   └── Index.tsx (o index.tsx en Next.js)
├── tailwind.config.js
├── package.json
└── README.md
```

## 🎯 Funcionalidades Principales

### 1. **Navbar Responsivo**
- Logo y novedades de branding
- Menú desktop y móvil
- Enlaces de navegación suave

### 2. **Hero Section**
- Título impactante: "Dejá tu seguro en nuestras manos"
- Botones de CTA (Cotizar, WhatsApp)
- Calificación de reseñas (4.8 estrellas)

### 3. **Servicios**
- Cards con iconos para: Auto, Vida, Hogar, Otros
- Efecto hover con escala

### 4. **Por Qué Elegir**
- 4 razones con iconos
- Estadísticas de clientes
- Sección destacada con números

### 5. **Testimonios**
- 3 testimonios reales de clientes
- Calificación en estrellas
- Avatares personalizados

### 6. **Cómo Funciona**
- 4 pasos visuales en timeline
- Líneas conectoras
- CTA final

### 7. **Contacto**
- Formulario con validación
- Información de ubicación, teléfono, email
- Mapa simulado
- Agregar integración real de mapa si es necesario

### 8. **Footer**
- Enlaces rápidos
- Información de contacto
- Redes sociales
- Copyright

### 9. **WhatsApp Button**
- Botón flotante fijo
- Abre chat pre-fabricado con mensaje
- Responsive en móviles

### 10. **Chatbot**
- Botón flotante dedicado
- Conversación interactiva
- Opciones de seguros
- Respuestas automáticas

## 🔧 Configuración de Tailwind CSS

Si necesitas Tailwind en tu proyecto:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Luego en `tailwind.config.js`:
```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 📱 Personalización

### Cambiar colores
Busca `bg-blue-600`, `text-green-500` etc. y reemplaza con tus colores.

### Cambiar información de contacto
Actualiza estos valores en los componentes:
- Teléfono: `+595 983 514376`
- Email: `info@quieromiseguro.com.py`
- Dirección: `O'higgins 979, Asunción`

### Agregar más testimonios
En `TestimonialsSection.tsx`, expande el array `testimonials`.

### Integrar con backend
En `ContactSection.tsx`, modifica `handleSubmit()` para enviar datos a tu servidor.

## 🚀 Deploy

### Vercel (Recomendado para Next.js)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### Github Pages
```bash
npm run build
# Luego usa gh-pages para deploy
```

## 📞 Información de Contacto (Empresa)

**Quiero Mi Seguro**  
Eheja Na Che Cargope

📍 O'higgins 979, Asunción, Paraguay  
📱 +595 983 514376  
📧 info@quieromiseguro.com.py  
⭐ 4.8 / 5 (15 reseñas)  

## 📝 Notas Importantes

- Todos los componentes son funcionales y listos para producción
- El código está optimizado para SEO y velocidad
- Es totalmente responsive en todos los dispositivos
- Las animaciones son suaves y no afectan el rendimiento
- El chatbot es simulado (añade backend si necesitas integración real)

## 🎨 Paleta de Colores

- **Azul primario**: `#2563eb` (Confianza)
- **Verde destaque**: `#22c55e` (CTA)
- **Blanco fondo**: `#ffffff`
- **Gris neutral**: `#6b7280`

## 📄 Licencia

Este código está disponible para uso libre.

---

**¿Necesitas ayuda?** Contacta al equipo de Quiero Mi Seguro  
📱 +595 983 514376
