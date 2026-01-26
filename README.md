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

## 🌍 Sistema Multiidioma

La plantilla incluye soporte completo para español e inglés en **todos los componentes**, incluyendo el sistema de citas.

### Detección automática de idioma

El idioma se detecta automáticamente según el navegador del usuario:
- Navegador en español → Sitio en español
- Otros idiomas → Sitio en inglés (por defecto)

### Estructura de archivos de traducción

src/
├── i18n/
│ ├── es.json # Traducciones UI español
│ └── en.json # Traducciones UI inglés
├── config/
│ ├── business.json # NO necesita traducción
│ ├── booking.json # NO necesita traducción
│ ├── es/
│ │ ├── services.json # Servicios en español
│ │ └── staff.json # Equipo en español
│ └── en/
│ ├── services.json # Servicios en inglés
│ └── staff.json # Equipo en inglés

text

### Personalización para clientes

Al clonar la plantilla para un nuevo cliente:

1. **Traduce servicios**: Edita `config/es/services.json` y `config/en/services.json`
2. **Traduce staff**: Edita `config/es/staff.json` y `config/en/staff.json`
3. **Mantén business.json único**: No necesita traducción (nombre, teléfono, dirección son los mismos)
4. **Verifica traducciones de UI**: Revisa `i18n/es.json` y `i18n/en.json` por si necesitas ajustar algún texto genérico

### Componentes traducidos

✅ **Landing Page**
- Hero, Services, Pricing, Team, Testimonials, Location, Footer, Header

✅ **Sistema de Booking (100% completo)**
- Stepper de navegación (Paso 1 de 4, etc.)
- Selección de servicio
- Selección de fecha y hora
- Captura de email
- Formulario de datos personales
- Confirmación de reserva
- Sidebar de resumen de cita
- Mensajes de validación y errores
- Notificaciones toast

### Textos clave del booking traducidos

Los archivos `i18n/es.json` y `i18n/en.json` incluyen las siguientes secciones para el sistema de citas:

- **`booking.stepper`**: Indicadores de paso (Paso X de Y, nombres de pasos)
- **`booking.summary`**: Sidebar de resumen (Servicio, Fecha, Cliente, Total, etc.)
- **`booking.navigation`**: Botones de navegación (Volver, Continuar, etc.)
- **`booking.messages`**: Mensajes de éxito/error y validaciones
- **`booking.emailCapture`**: Pantalla de captura de email
- **`booking.serviceSelection`**: Selección de servicio
- **`booking.dateTime`**: Selección de fecha y hora
- **`booking.personalDetails`**: Formulario de datos personales
- **`booking.confirmationPage`**: Página de confirmación final

**Ejemplo de estructura en `i18n/es.json`:**
```json
{
  "booking": {
    "title": "Reservar Cita",
    "stepper": {
      "step": "Paso",
      "of": "de",
      "service": "Servicio"
    },
    "summary": {
      "title": "Resumen de Cita",
      "service": "Servicio",
      "total": "Total"
    },
    "messages": {
      "confirmed": "¡Cita confirmada!",
      "error": "Error"
    }
  }
}
Personalizar traducciones del booking
Si necesitas ajustar los textos del sistema de citas:

Abre src/i18n/es.json y src/i18n/en.json

Busca la sección "booking": { ... }

Modifica los textos que necesites:

json
"booking": {
  "title": "Agenda tu Cita",  // Cambiado de "Reservar Cita"
  "stepper": {
    "step": "Etapa"  // Cambiado de "Paso"
  }
}
Guarda y recarga la aplicación

Nota: Los cambios en los JSON de traducción se reflejan inmediatamente sin necesidad de recompilar.

Agregar más idiomas (avanzado)
Para agregar francés, alemán, etc.:

Crea archivos de traducción:

src/i18n/fr.json, src/i18n/de.json

src/config/fr/services.json, src/config/fr/staff.json

Copia la estructura completa de es.json o en.json como base:

powershell
# Copia el archivo español como base para francés
cp src/i18n/es.json src/i18n/fr.json
cp src/config/es/services.json src/config/fr/services.json
cp src/config/es/staff.json src/config/fr/staff.json
Traduce todos los textos en los archivos copiados, incluyendo la sección booking completa

Actualiza src/hooks/useLanguage.ts:

typescript
import es from '@/i18n/es.json';
import en from '@/i18n/en.json';
import fr from '@/i18n/fr.json';  // ⬅️ NUEVO

import servicesDataES from '@/config/es/services.json';
import servicesDataEN from '@/config/en/services.json';
import servicesDataFR from '@/config/fr/services.json';  // ⬅️ NUEVO

import staffDataES from '@/config/es/staff.json';
import staffDataEN from '@/config/en/staff.json';
import staffDataFR from '@/config/fr/staff.json';  // ⬅️ NUEVO

// En la función de detección:
const detectedLang = browserLang.startsWith('es') ? 'es' 
  : browserLang.startsWith('fr') ? 'fr'  // ⬅️ NUEVO
  : 'en';

// En el switch del estado:
case 'fr':
  return { 
    language: 'fr', 
    translations: fr,
    // ... resto
  };
Actualiza src/config/siteConfig.ts:

typescript
import { useLanguage } from '@/hooks/useLanguage';

export const { language, translations } = useLanguage();

export const services = language === 'es' ? servicesES 
  : language === 'fr' ? servicesFR  // ⬅️ NUEVO
  : servicesEN;

export const staff = language === 'es' ? staffES 
  : language === 'fr' ? staffFR  // ⬅️ NUEVO
  : staffEN;
Actualiza componentes con formateo de fechas:

DateTimeSelection.tsx y BookingConfirmation.tsx usan date-fns con locales

Importa el locale francés:

typescript
import { es, enUS, fr } from 'date-fns/locale';

const locale = language === 'es' ? es 
  : language === 'fr' ? fr 
  : enUS;
Selector manual de idioma (opcional)
Si quieres agregar un selector de idioma en el header:

tsx
// En Header.tsx
import { useLanguage } from '@/hooks/useLanguage';

const Header = () => {
  const { language, changeLanguage } = useLanguage();
  
  return (
    <header>
      {/* ... tu header actual ... */}
      <select 
        value={language} 
        onChange={(e) => changeLanguage(e.target.value as 'es' | 'en')}
      >
        <option value="es">🇪🇸 ES</option>
        <option value="en">🇬🇧 EN</option>
        <option value="fr">🇫🇷 FR</option>
      </select>
    </header>
  );
};
Verificar que todo funciona
Después de hacer cambios en traducciones:

Navega a /booking en tu aplicación

Completa el flujo de reserva paso por paso

Verifica que todos los textos estén en el idioma correcto:

Título principal

Indicador de pasos (Paso 1 de 4)

Nombres de los pasos del stepper

Sidebar de resumen

Botones de navegación

Mensajes de validación

Pantalla de confirmación

Cambia el idioma del navegador o usa el selector manual y repite la prueba

Archivos que usan traducciones
Landing Page:

src/components/Hero.tsx

src/components/Services.tsx

src/components/Pricing.tsx

src/components/Team.tsx

src/components/Testimonials.tsx

src/components/Location.tsx

src/components/Footer.tsx

src/components/Header.tsx

Sistema de Booking:

src/pages/booking/Booking.tsx ✅ Página principal con stepper y resumen

src/components/booking/EmailCapture.tsx ✅

src/components/booking/ServiceSelection.tsx ✅

src/components/booking/DateTimeSelection.tsx ✅

src/components/booking/PersonalDetailsForm.tsx ✅

src/components/booking/BookingConfirmation.tsx ✅

