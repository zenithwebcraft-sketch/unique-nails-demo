🚀 Plantilla Genérica - Zenith WebCraft
Plantilla profesional de landing page con sistema de citas integrado, multiidioma (ES/EN) y arquitectura basada en configuración JSON.

🤖 Quick Start para IA
Para Claude/ChatGPT/Asistentes IA: Esta sección contiene toda la información estructurada necesaria para ayudar a personalizar esta plantilla sin necesidad de acceder al código fuente. Lee esta sección primero para entender la arquitectura completa.

📐 Arquitectura de la Plantilla
Principio fundamental: Todo está en JSON, nada hardcodeado.

text
Datos del negocio → JSON → Componentes React → UI final
📄 Archivos de Configuración - Estructura Completa
1. business.json (Información del negocio - NO necesita traducción)
Ubicación: src/config/business.json

json
{
  "business": {
    "name": "Tu Negocio Profesional",
    "description": "Servicios de calidad con profesionales certificados",
    "contact": {
      "phone": "+34 600 000 000",
      "email": "info@tunegocio.com",
      "whatsapp": "https://wa.me/34600000000"
    },
    "hours": {
      "weekdays": "Lun - Vie: 09:00 - 20:00",
      "weekend": "Sáb: 10:00 - 14:00",
      "sunday": "Domingo: Cerrado"
    },
    "locations": [
      {
        "id": "main",
        "name": "Sede Principal",
        "address": "Calle Principal 123",
        "city": "00000 Ciudad, País",
        "mapUrl": "https://maps.google.com/?q=Calle+Principal+123+Ciudad"
      }
    ],
    "navigation": [
      { "label": "Servicios", "href": "#servicios" },
      { "label": "Precios", "href": "#precios" },
      { "label": "Equipo", "href": "#equipo" },
      { "label": "Opiniones", "href": "#opiniones" },
      { "label": "Ubicación", "href": "#ubicacion" }
    ],
    "bookingUrl": "/booking"
  }
}
Campos importantes:

locations[0].id: Debe coincidir con defaultLocationId en booking.json

bookingUrl: Ruta de la página de citas (siempre /booking)

contact.whatsapp: Formato https://wa.me/[código país][número sin espacios]

2. services.json (Servicios - NECESITA traducción ES/EN)
Ubicación:

src/config/es/services.json (Español)

src/config/en/services.json (Inglés)

Estructura completa:

json
{
  "services": [
    {
      "id": "service-1",
      "categoryId": "categoria-principal",
      "title": "Nombre del Servicio",
      "description": "Descripción detallada de qué incluye el servicio y sus beneficios",
      "benefits": [
        "Beneficio 1 del servicio",
        "Beneficio 2 del servicio",
        "Beneficio 3 del servicio"
      ],
      "icon": "Sparkles",
      "durationMin": 60,
      "priceEUR": 50,
      "image": "images/placeholder/service-1.svg",
      "imageAlt": "Descripción accesible de la imagen",
      "popular": false,
      "bookable": true
    }
  ]
}
Iconos disponibles (Lucide React):

Sparkles, Eye, Brush, Hand, Footprints, Flower2, Zap, Heart, Scissors, Palette, Star

Reglas importantes:

id debe ser único y coincidir en ambos idiomas (ES/EN)

priceEUR y durationMin deben ser idénticos en ambos idiomas

popular: true destaca el servicio con un badge

bookable: false oculta el servicio del sistema de citas

3. staff.json (Equipo - NECESITA traducción ES/EN)
Ubicación:

src/config/es/staff.json (Español)

src/config/en/staff.json (Inglés)

json
{
  "staff": [
    {
      "id": "staff-1",
      "name": "María González",
      "role": "Especialista Senior",
      "bio": "Más de 10 años de experiencia en el sector. Certificada en técnicas avanzadas y especialista en tratamientos personalizados.",
      "image": "images/placeholder/staff-1.svg",
      "specialties": [
        "Especialidad 1",
        "Especialidad 2",
        "Especialidad 3"
      ],
      "active": true,
      "bookable": true
    }
  ]
}
Reglas importantes:

id y name deben coincidir en ambos idiomas

role, bio y specialties se traducen

active: false oculta al miembro del equipo

image: Fotos cuadradas 400x400px recomendado

4. booking.json (Config de sistema de citas - NO necesita traducción)
Ubicación: src/config/booking.json

json
{
  "bookingConfig": {
    "timezone": "Europe/Madrid",
    "slotIntervalMin": 30,
    "currency": "EUR",
    "defaultLocationId": "main",
    "openDays": ["mon", "tue", "wed", "thu", "fri", "sat"],
    "openHours": {
      "start": "09:00",
      "end": "20:00"
    },
    "closedDates": [
      "2026-12-25",
      "2026-01-01"
    ],
    "policies": {
      "paymentMethod": "Pago en persona después del servicio",
      "cancellationWindow": "24 horas de anticipación",
      "depositRequired": false,
      "depositAmount": 0
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

Argentina: America/Argentina/Buenos_Aires

Monedas disponibles: EUR, USD, MXN, COP, ARS, CLP

Días de la semana: mon, tue, wed, thu, fri, sat, sun

5. i18n/es.json y i18n/en.json (Traducciones de UI)
Ubicación:

src/i18n/es.json

src/i18n/en.json

Secciones principales:

json
{
  "hero": { ... },
  "services": { ... },
  "pricing": { ... },
  "team": { ... },
  "testimonials": { ... },
  "location": { ... },
  "footer": { ... },
  "navigation": { ... },
  "booking": {
    "title": "Reservar Cita / Book Appointment",
    "stepper": {
      "step": "Paso / Step",
      "of": "de / of",
      "service": "Servicio / Service",
      "dateTime": "Fecha/Hora / Date/Time",
      "email": "Email",
      "details": "Datos / Details"
    },
    "summary": {
      "title": "Resumen de Cita / Appointment Summary",
      "service": "Servicio / Service",
      "dateTime": "Fecha y Hora / Date & Time",
      "stylist": "Estilista / Stylist",
      "email": "Email",
      "client": "Cliente / Client",
      "subtotal": "Subtotal",
      "total": "Total",
      "payInPerson": "Pay in person",
      "chargedToday": "Charged today",
      "paymentNote": "El pago se realizará en el salón / Payment at salon"
    },
    "navigation": {
      "backHome": "Volver al inicio / Back to Home",
      "back": "Volver / Back",
      "continue": "Continuar / Continue"
    },
    "messages": {
      "creating": "Creando tu reserva... / Creating your booking...",
      "confirmed": "¡Cita confirmada! / Booking Confirmed!",
      "error": "Error"
    }
  }
}
Nota: Estos archivos NO se modifican para cada cliente (salvo casos muy específicos). Solo se modifican services.json y staff.json.

✅ Checklist de Personalización para IA
Usa este checklist cuando un usuario te pida adaptar la plantilla para un nuevo cliente:

Paso 1: Recopilar información del cliente (5 min)
 Nombre del negocio

 Tipo de negocio (salón, clínica, spa, etc.)

 Teléfono, email, WhatsApp

 Dirección completa

 Horarios de apertura

 Zona horaria

 Moneda que usan

Paso 2: Personalizar business.json (5 min)
 name → Nombre del negocio

 description → Descripción breve

 contact.phone → Teléfono con código país (+34, +1, etc.)

 contact.email → Email corporativo

 contact.whatsapp → Link de WhatsApp

 hours.weekdays → Horario entre semana

 hours.weekend → Horario fin de semana

 hours.sunday → Horario domingo o "Cerrado"

 locations[0].id → ID único (ej: "main", "sede-centro")

 locations[0].name → Nombre de la ubicación

 locations[0].address → Dirección completa

 locations[0].city → Código postal, ciudad, país

 locations[0].mapUrl → Link de Google Maps

Paso 3: Crear services.json en español (10 min)
Para cada servicio del cliente:

 id → Identificador único (ej: "corte-pelo", "limpieza-facial")

 title → Nombre del servicio en español

 description → Descripción detallada en español

 benefits → Array con 3-4 beneficios

 icon → Elegir de la lista de iconos disponibles

 durationMin → Duración en minutos

 priceEUR → Precio (ajustar moneda después)

 popular → true para destacarlo

 bookable → true si se puede reservar online

Paso 4: Traducir services.json al inglés (10 min)
 Copiar estructura de es/services.json

 Mantener id, priceEUR, durationMin, icon idénticos

 Traducir title, description, benefits

 Guardar en en/services.json

Paso 5: Crear staff.json en español (5 min)
Para cada miembro del equipo:

 id → Identificador único (ej: "maria-gonzalez")

 name → Nombre completo

 role → Cargo/Especialidad en español

 bio → Biografía breve en español (2-3 líneas)

 specialties → Array con especialidades

 active → true para mostrarlo

Paso 6: Traducir staff.json al inglés (5 min)
 Copiar estructura de es/staff.json

 Mantener id y name idénticos

 Traducir role, bio, specialties

 Guardar en en/staff.json

Paso 7: Configurar booking.json (5 min)
 timezone → Zona horaria correcta

 currency → Moneda del país (EUR, USD, MXN, etc.)

 defaultLocationId → Debe coincidir con business.json

 openDays → Días que abren

 openHours.start → Hora de apertura (formato 24h)

 openHours.end → Hora de cierre (formato 24h)

 slotIntervalMin → Intervalo de citas (30 o 60 min)

 policies.paymentMethod → Método de pago

 emailConfig → Email del negocio

Paso 8: Verificación final (5 min)
 Todos los id coinciden en ES/EN

 Precios y duraciones idénticos en ES/EN

 defaultLocationId coincide con locations[0].id

 Zona horaria correcta

 Moneda correcta

 Emails válidos

Tiempo total estimado: 50-60 minutos ⏱️

💡 Casos de Uso: Transformaciones Reales
Ejemplo 1: De "Salón de Belleza" → "Clínica Dental"
ANTES (Salón de Belleza):

json
// business.json
{
  "business": {
    "name": "Vanyti Center Beauty",
    "description": "Tu salón de belleza de confianza"
  }
}

// es/services.json
{
  "services": [
    {
      "id": "corte-pelo",
      "title": "Corte de Pelo",
      "description": "Corte personalizado con las últimas tendencias",
      "icon": "Scissors",
      "durationMin": 45,
      "priceEUR": 25
    },
    {
      "id": "manicura",
      "title": "Manicura Completa",
      "icon": "Hand",
      "durationMin": 60,
      "priceEUR": 30
    }
  ]
}
DESPUÉS (Clínica Dental):

json
// business.json
{
  "business": {
    "name": "Clínica Dental SmileMax",
    "description": "Cuidado dental profesional con tecnología avanzada"
  }
}

// es/services.json
{
  "services": [
    {
      "id": "limpieza-dental",
      "title": "Limpieza Dental",
      "description": "Limpieza profunda con ultrasonido y pulido profesional",
      "icon": "Sparkles",
      "durationMin": 45,
      "priceEUR": 60
    },
    {
      "id": "ortodoncia",
      "title": "Consulta Ortodoncia",
      "icon": "Eye",
      "durationMin": 30,
      "priceEUR": 40
    }
  ]
}
Cambios clave:

✅ Nombre y descripción adaptados

✅ Servicios completamente reemplazados

✅ Iconos cambiados (Scissors → Sparkles, Hand → Eye)

✅ Precios ajustados al mercado dental

✅ Duraciones ajustadas

Ejemplo 2: De "España (EUR)" → "México (MXN)"
ANTES (España):

json
// booking.json
{
  "bookingConfig": {
    "timezone": "Europe/Madrid",
    "currency": "EUR",
    "openHours": {
      "start": "09:00",
      "end": "20:00"
    }
  }
}

// es/services.json
{
  "services": [
    {
      "priceEUR": 50
    }
  ]
}
DESPUÉS (México):

json
// booking.json
{
  "bookingConfig": {
    "timezone": "America/Mexico_City",
    "currency": "MXN",
    "openHours": {
      "start": "10:00",
      "end": "20:00"
    }
  }
}

// es/services.json
{
  "services": [
    {
      "priceEUR": 850  // ⚠️ Nombre del campo sigue siendo "priceEUR" pero valor en MXN
    }
  ]
}
Nota importante: El campo se llama priceEUR por razones técnicas, pero el valor se adapta a la moneda configurada en booking.json. No cambies el nombre del campo.

Ejemplo 3: Negocio multiubicación
json
// business.json
{
  "business": {
    "name": "FitLife Gym",
    "locations": [
      {
        "id": "centro",
        "name": "FitLife Centro",
        "address": "Av. Principal 100",
        "city": "28001 Madrid, España",
        "mapUrl": "https://maps.google.com/..."
      },
      {
        "id": "norte",
        "name": "FitLife Norte",
        "address": "C/ Norte 50",
        "city": "28050 Madrid, España",
        "mapUrl": "https://maps.google.com/..."
      }
    ]
  }
}

// booking.json
{
  "bookingConfig": {
    "defaultLocationId": "centro"  // ⚠️ Debe coincidir con uno de los IDs
  }
}
🎯 Instrucciones para IA al recibir este README
Cuando un usuario te diga "usa esta plantilla de Zenith WebCraft" o te comparta este README:

Primero pregunta:

Nombre del negocio

Tipo de negocio (salón, clínica, spa, gimnasio, etc.)

Ubicación (país/ciudad)

Servicios que ofrecen (lista básica)

Luego genera:

business.json completo

es/services.json con todos los servicios en español

en/services.json con traducciones

es/staff.json si tienen equipo

en/staff.json con traducciones

booking.json configurado correctamente

Verifica siempre:

Que todos los id coincidan en ES/EN

Que defaultLocationId exista en locations

Que la zona horaria sea correcta para el país

Que los precios estén en la moneda correcta

Que las duraciones sean realistas

Formatea la salida:

Muestra cada archivo JSON completo

Usa bloques de código con syntax highlighting

Indica claramente la ruta de cada archivo

Agrega comentarios donde sea necesario

No olvides mencionar:

Que las imágenes deben reemplazarse después

Que el sistema está 100% traducido ES/EN

Que pueden ajustar traducciones de UI si es necesario

El tiempo estimado de implementación

📋 Tabla de Contenidos
Características

Stack Tecnológico

Instalación

Configuración Rápida

Personalización Detallada

Sistema Multiidioma

Sistema de Citas

Estructura del Proyecto

Deployment

Troubleshooting

✨ Características
✅ Config-Based Architecture: Toda la información en archivos JSON centralizados

🌐 Sistema Multiidioma: Detección automática del navegador (ES/EN)

📅 Sistema de Citas Integrado: Reservas online con confirmación por email

🎨 Diseño Moderno: Tailwind CSS + shadcn/ui components

⚡ Ultra Rápido: Vite + React + TypeScript

📱 100% Responsive: Diseño adaptable a todos los dispositivos

🔧 Fácil Personalización: Cambia datos sin tocar código

🛠️ Stack Tecnológico
Frontend: React 18 + TypeScript

Build Tool: Vite 5

Styling: Tailwind CSS 3

UI Components: shadcn/ui

Icons: Lucide React

Routing: React Router

Deployment: Vercel (recomendado)

📦 Instalación
1. Clonar el repositorio
bash
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
    "bookingUrl": "/booking"
  }
}
Paso 2: Servicios
📁 Archivos:

src/config/es/services.json (Español)

src/config/en/services.json (Inglés)

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
  "imageAlt": "Descripción de la imagen",
  "popular": false,
  "bookable": true
}
Iconos disponibles: Sparkles, Eye, Brush, Hand, Footprints, Flower2, Zap, Heart, Scissors

Paso 3: Equipo/Staff
📁 Archivos:

src/config/es/staff.json (Español)

src/config/en/staff.json (Inglés)

json
{
  "id": "staff-id",
  "name": "Nombre Profesional",
  "role": "Cargo/Especialidad",
  "bio": "Breve biografía profesional",
  "image": "images/placeholder/staff-1.svg",
  "specialties": ["Especialidad 1", "Especialidad 2"],
  "active": true,
  "bookable": true
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
La plantilla incluye soporte completo para español e inglés en todos los componentes, incluyendo el sistema de citas.

Detección automática de idioma
El idioma se detecta automáticamente según el navegador del usuario:

Navegador en español → Sitio en español

Otros idiomas → Sitio en inglés (por defecto)

Estructura de archivos de traducción
text
src/
├── i18n/
│   ├── es.json    # Traducciones UI español
│   └── en.json    # Traducciones UI inglés
├── config/
│   ├── business.json        # NO necesita traducción
│   ├── booking.json         # NO necesita traducción
│   ├── es/
│   │   ├── services.json    # Servicios en español
│   │   └── staff.json       # Equipo en español
│   └── en/
│       ├── services.json    # Servicios en inglés
│       └── staff.json       # Equipo en inglés
Personalización para clientes
Al clonar la plantilla para un nuevo cliente:

Traduce servicios: Edita config/es/services.json y config/en/services.json

Traduce staff: Edita config/es/staff.json y config/en/staff.json

Mantén business.json único: No necesita traducción (nombre, teléfono, dirección son los mismos)

Verifica traducciones de UI: Revisa i18n/es.json y i18n/en.json por si necesitas ajustar algún texto genérico

Componentes traducidos
✅ Landing Page

Hero, Services, Pricing, Team, Testimonials, Location, Footer, Header

✅ Sistema de Booking (100% completo)

Stepper de navegación (Paso 1 de 4, etc.)

Selección de servicio

Selección de fecha y hora

Captura de email

Formulario de datos personales

Confirmación de reserva

Sidebar de resumen de cita

Mensajes de validación y errores

Notificaciones toast

Textos clave del booking traducidos
Los archivos i18n/es.json y i18n/en.json incluyen las siguientes secciones para el sistema de citas:

booking.stepper: Indicadores de paso (Paso X de Y, nombres de pasos)

booking.summary: Sidebar de resumen (Servicio, Fecha, Cliente, Total, etc.)

booking.navigation: Botones de navegación (Volver, Continuar, etc.)

booking.messages: Mensajes de éxito/error y validaciones

booking.emailCapture: Pantalla de captura de email

booking.serviceSelection: Selección de servicio

booking.dateTime: Selección de fecha y hora

booking.personalDetails: Formulario de datos personales

booking.confirmationPage: Página de confirmación final

Ejemplo de estructura en i18n/es.json:

json
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

✅ Estado actual: El sistema está 100% traducido en español e inglés, incluyendo todo el flujo de reservas.

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
│   │   ├── es/
│   │   │   ├── services.json     # ⚙️ Servicios ES
│   │   │   └── staff.json        # ⚙️ Equipo ES
│   │   ├── en/
│   │   │   ├── services.json     # ⚙️ Servicios EN
│   │   │   └── staff.json        # ⚙️ Equipo EN
│   │   ├── booking.json          # ⚙️ Config de citas
│   │   ├── business.json         # ⚙️ Info del negocio
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
□ Actualizar es/services.json (servicios del cliente en español)
□ Actualizar en/services.json (servicios del cliente en inglés)
□ Actualizar es/staff.json (equipo del cliente en español)
□ Actualizar en/staff.json (equipo del cliente en inglés)
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
¡Listo para crear experiencias web increíbles! 🚀