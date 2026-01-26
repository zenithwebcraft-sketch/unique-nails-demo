# 🚀 Plantilla Genérica - Zenith WebCraft

Plantilla profesional de landing page con sistema de citas integrado, multiidioma (ES/EN) y arquitectura basada en configuración JSON.

---

## 📋 Tabla de Contenidos

1. [Características](#-características)
2. [Stack Tecnológico](#-stack-tecnológico)
3. [Instalación](#-instalación)
4. [Configuración Rápida](#-configuración-rápida)
5. [Personalización Detallada](#-personalización-detallada)
6. [Sistema Multiidioma](#-sistema-multiidioma)
7. [Sistema de Citas](#-sistema-de-citas)
8. [Estructura del Proyecto](#-estructura-del-proyecto)
9. [Deployment](#-deployment)
10. [Troubleshooting](#-troubleshooting)
11. [Sistema Multiidioma](#-sistema-multiidioma)


---

## ✨ Características

- ✅ **Config-Based Architecture**: Toda la información en archivos JSON centralizados
- 🌐 **Sistema Multiidioma**: Detección automática del navegador (ES/EN)
- 📅 **Sistema de Citas Integrado**: Reservas online con confirmación por email
- 🎨 **Diseño Moderno**: Tailwind CSS + shadcn/ui components
- ⚡ **Ultra Rápido**: Vite + React + TypeScript
- 📱 **100% Responsive**: Diseño adaptable a todos los dispositivos
- 🔧 **Fácil Personalización**: Cambia datos sin tocar código

---

## 🛠️ Stack Tecnológico

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router
- **Deployment**: Vercel (recomendado)

---

## 📦 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
2. Instalar dependencias
bash
npm install
3. Ejecutar en desarrollo
bash
npm run dev
La aplicación se abrirá en http://localhost:8080/

⚡ Configuración Rápida
Para personalizar la plantilla para un nuevo cliente, sigue estos pasos en orden:

Paso 1: Información del Negocio
📁 Archivo: src/config/business.json

json
{
  "business": {
    "name": "Nombre del Negocio",
    "description": "Descripción breve del negocio",
    "contact": {
      "phone": "+34 XXX XXX XXX",
      "email": "info@negocio.com",
      "whatsapp": "https://wa.me/34XXXXXXXXX"
    },
    "hours": {
      "weekdays": "Lun - Vie: 09:00 - 20:00",
      "weekend": "Sáb: 10:00 - 14:00",
      "sunday": "Domingo: Cerrado"
    },
    "locations": [
      {
        "id": "principal",
        "name": "Ubicación Principal",
        "address": "Calle Principal 123",
        "city": "00000 Ciudad, País",
        "mapUrl": "https://maps.google.com/?q=..."
      }
    ],
    "navigation": [
      { "label": "Servicios", "href": "#servicios" },
      { "label": "Precios", "href": "#precios" },
      { "label": "Equipo", "href": "#equipo" },
      { "label": "Opiniones", "href": "#opiniones" },
      { "label": "Ubicación", "href": "#ubicacion" }
    ],
    "bookingUrl": "/citas"
  }
}
Paso 2: Servicios
📁 Archivo: src/config/services.json

Estructura de cada servicio:

json
{
  "id": "servicio-unico-id",
  "categoryId": "categoria",
  "title": "Nombre del Servicio",
  "description": "Descripción detallada del servicio",
  "benefits": [
    "Beneficio 1",
    "Beneficio 2",
    "Beneficio 3"
  ],
  "icon": "Sparkles",
  "durationMin": 60,
  "priceEUR": 50,
  "image": "images/placeholder/servicio.jpg",
  "imageAlt": "Descripción de la imagen"
}
Iconos disponibles: Sparkles, Eye, Brush, Hand, Footprints, Flower2, Zap, Heart

Paso 3: Equipo/Staff
📁 Archivo: src/config/staff.json

json
{
  "id": "staff-id",
  "name": "Nombre Profesional",
  "role": "Cargo/Especialidad",
  "bio": "Breve biografía profesional",
  "image": "images/tu-negocio/staff-1.jpg",
  "active": true
}
Paso 4: Configuración de Citas
📁 Archivo: src/config/booking.json

json
{
  "bookingConfig": {
    "timezone": "Europe/Madrid",
    "slotIntervalMin": 30,
    "currency": "EUR",
    "defaultLocationId": "principal",
    "openDays": ["mon", "tue", "wed", "thu", "fri", "sat"],
    "openHours": {
      "start": "09:00",
      "end": "20:00"
    },
    "policies": {
      "paymentMethod": "Pago en persona",
      "cancellationWindow": "24 horas",
      "depositRequired": false
    },
    "emailConfig": {
      "fromAddress": "no-reply@zenithwebcraft.com",
      "fromName": "Tu Negocio",
      "replyTo": "info@tunegocio.com"
    }
  }
}
Zonas horarias comunes:

España: Europe/Madrid

USA Este: America/New_York

USA Oeste: America/Los_Angeles

México: America/Mexico_City

Colombia: America/Bogota

Monedas disponibles: EUR, USD, MXN, COP, ARS, CLP

🎨 Personalización Detallada
Colores y Branding
📁 Archivo: tailwind.config.ts

Personaliza la paleta de colores del negocio:

typescript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: "#tu-color-principal",
        foreground: "#ffffff",
      },
      secondary: {
        DEFAULT: "#tu-color-secundario",
      }
    }
  }
}
Generador de paletas: Coolors.co o Tailwind Shades

Imágenes
Estructura recomendada:
text
public/images/
  └── tu-negocio/
      ├── hero.jpg           (1920x1080px recomendado)
      ├── servicios/
      │   ├── servicio-1.jpg (800x600px recomendado)
      │   ├── servicio-2.jpg
      │   └── ...
      └── equipo/
          ├── staff-1.jpg    (400x400px cuadrado)
          ├── staff-2.jpg
          └── ...
Pasos:
Crear carpeta con el nombre del negocio:

bash
mkdir public/images/nombre-negocio
Subir imágenes optimizadas (usar TinyPNG)

Actualizar rutas en services.json y staff.json:

json
"image": "images/nombre-negocio/foto.jpg"
Logo
📁 Archivos:

src/assets/logo.png - Logo para header/footer

public/favicon.ico - Icono del navegador

Recomendaciones:

Logo: PNG transparente, 200-300px de ancho

Favicon: 32x32px o 64x64px, formato ICO

🌐 Sistema Multiidioma
Cómo funciona
El sistema detecta automáticamente el idioma del navegador:

🇪🇸 Español: Si el navegador está configurado en español

🇬🇧 Inglés: Para cualquier otro idioma

Archivos de traducción
📁 Archivos:

src/i18n/es.json - Traducciones en español

src/i18n/en.json - Traducciones en inglés

Agregar nuevos textos traducibles
Agrega la clave en ambos archivos:

es.json:

json
{
  "nuevaSeccion": {
    "titulo": "Texto en español",
    "subtitulo": "Descripción en español"
  }
}
en.json:

json
{
  "nuevaSeccion": {
    "titulo": "Text in English",
    "subtitulo": "Description in English"
  }
}
Usa el hook en tu componente:

tsx
import { useLanguage } from "@/hooks/useLanguage";

export const MiComponente = () => {
  const { translations: t } = useLanguage();
  
  return (
    <h1>{t.nuevaSeccion.titulo}</h1>
  );
};
Agregar más idiomas
Para agregar francés, alemán, etc.:

Crea src/i18n/fr.json, src/i18n/de.json, etc.

Actualiza src/hooks/useLanguage.ts:

typescript
import fr from '@/i18n/fr.json';

const detectedLang = browserLang.startsWith('es') ? 'es' 
  : browserLang.startsWith('fr') ? 'fr'
  : 'en';
📅 Sistema de Citas
Archivos del Sistema
El sistema de citas es modular y reutilizable:

text
src/
├── components/booking/
│   ├── BookingConfirmation.tsx
│   ├── DateTimeSelection.tsx
│   ├── EmailCapture.tsx
│   ├── PersonalDetailsForm.tsx
│   └── ServiceSelection.tsx
├── lib/booking/
│   ├── api.ts
│   ├── dateUtils.ts
│   ├── types.ts
│   └── useBookingFlow.ts
├── pages/booking/
│   └── Booking.tsx
└── config/
    └── booking.json

api/booking/
├── availability.ts
├── create.ts
└── send-confirmation-email.ts
Configuración de Emails
Para que funcione el envío de emails de confirmación:

Configura variables de entorno (.env.local):

text
VITE_EMAIL_SERVICE_KEY=tu-clave-api
VITE_SENDGRID_API_KEY=tu-clave-sendgrid
Actualiza booking.json con tu email corporativo

Personaliza la plantilla de email en api/booking/send-confirmation-email.ts

📂 Estructura del Proyecto
text
plantilla-generica/
├── public/
│   ├── images/
│   │   └── placeholder/          # Imágenes placeholder SVG
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   ├── booking/              # Sistema de citas
│   │   ├── ui/                   # Componentes shadcn/ui
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Location.tsx
│   │   ├── Pricing.tsx
│   │   ├── Services.tsx
│   │   ├── Team.tsx
│   │   └── Testimonials.tsx
│   ├── config/
│   │   ├── booking.json          # ⚙️ Config de citas
│   │   ├── business.json         # ⚙️ Info del negocio
│   │   ├── services.json         # ⚙️ Servicios
│   │   ├── staff.json            # ⚙️ Equipo
│   │   └── siteConfig.ts         # Exportaciones centralizadas
│   ├── hooks/
│   │   ├── useLanguage.ts        # 🌐 Hook multiidioma
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── i18n/
│   │   ├── es.json               # 🇪🇸 Traducciones español
│   │   └── en.json               # 🇬🇧 Traducciones inglés
│   ├── lib/
│   │   ├── booking/              # Lógica del sistema de citas
│   │   └── utils.ts
│   ├── pages/
│   │   ├── booking/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── api/
│   └── booking/                  # API serverless para citas
├── .gitignore
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── README.md
🚀 Deployment
Vercel (Recomendado)
Push a GitHub:

bash
git add .
git commit -m "Proyecto personalizado listo"
git push origin main
Conectar con Vercel:

Ve a vercel.com

Importa tu repositorio

Vercel detectará automáticamente Vite

Deploy automático

Variables de entorno (si usas el sistema de citas):

En Vercel → Settings → Environment Variables

Agrega las claves de API necesarias

Netlify
bash
npm run build
Sube la carpeta dist/ a Netlify.

Otros proveedores
La plantilla es compatible con cualquier hosting que soporte sitios estáticos:

Cloudflare Pages

GitHub Pages

Firebase Hosting

🐛 Troubleshooting
Problema: Página en blanco después de cambios
Solución:

Revisa la consola del navegador (F12)

Verifica que todos los archivos JSON tengan sintaxis correcta

Hard refresh: Ctrl + Shift + R (Windows) o Cmd + Shift + R (Mac)

Problema: Imágenes no se muestran
Solución:

Verifica que las rutas en JSON no tengan / al inicio: ✅ images/... ❌ /images/...

Confirma que las imágenes existan en public/images/

Revisa que los nombres de archivo coincidan exactamente (case-sensitive)

Problema: Traducciones no funcionan
Solución:

Verifica que useLanguage() esté importado en el componente

Confirma que las claves existan en ambos archivos (es.json y en.json)

Revisa la consola por errores de importación

Problema: Sistema de citas no funciona
Solución:

Verifica que booking.json tenga defaultLocationId correcto

Confirma que el ID coincida con uno en business.json → locations

Revisa que las horas de apertura sean válidas

📞 Soporte
Para soporte técnico o consultas:

Email: soporte@zenithwebcraft.com

Documentación: Docs Zenith WebCraft

📄 Licencia
© 2026 Zenith WebCraft. Plantilla de uso interno para proyectos de clientes.

🎯 Checklist de Personalización
Usa este checklist para cada nuevo proyecto:

text
□ Actualizar business.json (nombre, contacto, ubicación)
□ Actualizar services.json (servicios del cliente)
□ Actualizar staff.json (equipo del cliente)
□ Actualizar booking.json (horarios, políticas)
□ Cambiar colores en tailwind.config.ts
□ Reemplazar logo en src/assets/logo.png
□ Reemplazar favicon en public/favicon.ico
□ Crear carpeta de imágenes public/images/nombre-cliente/
□ Subir imágenes del cliente (hero, servicios, equipo)
□ Actualizar rutas de imágenes en JSON
□ Probar sistema de citas localmente
□ Configurar variables de entorno para emails
□ Hacer build de producción (npm run build)
□ Deploy en Vercel
□ Probar en dispositivos móviles
□ Verificar SEO (meta tags, title)
□ Entregar al cliente

## 🌐 Sistema Multiidioma

### Cómo funciona

El sistema detecta automáticamente el idioma del navegador:
- 🇪🇸 **Español**: Si el navegador está configurado en español
- 🇬🇧 **Inglés**: Para cualquier otro idioma

### Estructura de archivos

```
src/
├── i18n/
│   ├── es.json              # 🇪🇸 Traducciones de UI (español)
│   └── en.json              # 🇬🇧 Traducciones de UI (inglés)
└── config/
    ├── business.json        # Datos del negocio (sin traducir)
    ├── booking.json         # Configuración técnica (sin traducir)
    ├── es/
    │   ├── services.json    # 🇪🇸 Servicios en español
    │   └── staff.json       # 🇪🇸 Staff en español
    └── en/
        ├── services.json    # 🇬🇧 Servicios en inglés
        └── staff.json       # 🇬🇧 Staff en inglés
```

### Qué está traducido

✅ **Textos de UI** (en `i18n/es.json` y `i18n/en.json`):
- Hero (títulos, botones, stats)
- Servicios (títulos de sección, botones)
- Precios (títulos, períodos)
- Equipo (títulos de sección)
- Testimonios (títulos de sección)
- Ubicación (títulos, botones)
- Footer (navegación, contacto)
- Navegación (menú del header)
- Sistema de citas (labels, botones) - **EN DESARROLLO**

✅ **Contenido dinámico** (en `config/es/` y `config/en/`):
- Servicios (títulos, descripciones, beneficios)
- Staff (nombres, roles, biografías)
- Planes de precios (nombres, descripciones, features)
- Testimonios (nombres, textos)

❌ **NO traducido** (datos únicos):
- Nombre del negocio (es el mismo en todos los idiomas)
- Teléfono y email (son los mismos)
- Dirección física (es la misma ubicación real)
- Configuración técnica de booking

### Agregar nuevos textos traducibles

1. **Para textos de UI**, agrega en ambos archivos `i18n/`:

   **`es.json`:**
   ```json
   {
     "nuevaSeccion": {
       "titulo": "Texto en español",
       "subtitulo": "Descripción en español"
     }
   }
   ```

   **`en.json`:**
   ```json
   {
     "nuevaSeccion": {
       "titulo": "Text in English",
       "subtitulo": "Description in English"
     }
   }
   ```

2. **Usa el hook en tu componente**:
   ```tsx
   import { useLanguage } from "@/hooks/useLanguage";

   export const MiComponente = () => {
     const { translations: t } = useLanguage();
     
     return (
       <h1>{t.nuevaSeccion.titulo}</h1>
     );
   };
   ```

3. **Para contenido de servicios/staff**, edita los archivos JSON en ambas carpetas:
   - `src/config/es/services.json`
   - `src/config/en/services.json`

### Personalización para clientes

Al clonar la plantilla para un nuevo cliente:

1. **Traduce servicios**: Edita `config/es/services.json` y `config/en/services.json`
2. **Traduce staff**: Edita `config/es/staff.json` y `config/en/staff.json`
3. **Mantén business.json único**: No necesita traducción (nombre, teléfono, dirección son los mismos)
4. **Verifica traducciones de UI**: Revisa `i18n/es.json` y `i18n/en.json` por si necesitas ajustar algún texto genérico

### Agregar más idiomas (avanzado)

Para agregar francés, alemán, etc.:

1. Crea archivos de traducción:
   - `src/i18n/fr.json`, `src/i18n/de.json`
   - `src/config/fr/services.json`, `src/config/fr/staff.json`

2. Actualiza `src/hooks/useLanguage.ts`:
   ```typescript
   import fr from '@/i18n/fr.json';
   import servicesDataFR from '@/config/fr/services.json';
   
   const detectedLang = browserLang.startsWith('es') ? 'es' 
     : browserLang.startsWith('fr') ? 'fr'
     : 'en';
   ```

3. Actualiza `src/config/siteConfig.ts` para importar y exportar los nuevos idiomas.

---
