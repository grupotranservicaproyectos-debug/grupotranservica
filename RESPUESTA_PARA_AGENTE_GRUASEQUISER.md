# 📝 RESPUESTA COMPLETA PARA EL AGENTE DE DESARROLLO

## ✅ CONFIRMACIONES

### 1️⃣ Stack Tecnológico CONFIRMADO
✅ **Next.js 14** (necesita adaptación de código de TRANSERVICA)
✅ **Prisma + PostgreSQL**
✅ **TypeScript + Tailwind CSS**

**Entendido:** Necesitas adaptar el código de React+Vite a Next.js. Es factible en 3-4 horas.

---

### 2️⃣ API KEYS - CONFIGURACIÓN

#### APIs que YA TIENES:
✅ **ABACUSAI_API_KEY** → Úsala en lugar de OpenRouter para generación de contenido
✅ **FREEPIK_API_KEY**
✅ **SHUTTERSTOCK_CONSUMER_KEY** y **SECRET**
✅ **DATABASE_URL**
✅ **EMAIL_USER** y **EMAIL_PASS**

#### APIs que FALTAN:
❌ **PEXELS_API_KEY** (prioridad 1) → Solicitar al usuario (es GRATIS)

#### OpenRouter API Key:
✅ **Agregar esta al .env:**
```env
OPENROUTER_API_KEY=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
```

**Orden de fallback para imágenes:**
1. Pexels (si usuario proporciona key - GRATIS)
2. Freepik (ya tienes)
3. Shutterstock (ya tienes)
4. Unsplash (opcional)

---

### 3️⃣ DATOS DE CONTACTO DE GRUASEQUISER

Extraídos del sitio web oficial:

```javascript
const contactInfo = {
  empresa: "EQUISER C.A.",
  nombreComercial: "GRÚAS EQUISER",
  telefono: "+58 XXX-XXX-XXXX", // SOLICITAR AL USUARIO
  email: "info@gruasequiser.com", // Verificar con usuario
  whatsapp: "https://wa.me/message/IOBBJVBBVWNOI1", // Extraído del sitio
  ubicacion: "Barcelona, Anzoátegui, Venezuela",
  añosExperiencia: "30+",
  descripcion: "Líder en Grúas Industriales y Transporte Terrestre Pesado Venezuela",
  capacidadMaxima: "1600 toneladas",
  capacidadMinima: "25 toneladas",
  proyectosEjecutados: "500+",
  disponibilidad: "24/7"
};
```

**NOTA:** Verifica el teléfono y email exactos con el usuario.

---

### 4️⃣ COLORES CORPORATIVOS CONFIRMADOS

Extraídos del CSS actual de GruasEquiser:

```css
:root {
  /* Colores Principales GruasEquiser */
  --equiser-yellow: #FFD700;  /* Amarillo dorado - Principal */
  --equiser-blue: #1976D2;    /* Azul corporativo - Secundario */
  --equiser-dark: #1a1a1a;    /* Negro/Gris oscuro */
  --equiser-orange: #FF9800;  /* Naranja (acento) */
}
```

**IMPORTANTE:**
- ❌ NUNCA uses verde #155d29 de TRANSERVICA
- ✅ USA SIEMPRE amarillo #FFD700 y azul #1976D2

---

## 🎯 REQUISITO CRÍTICO: USAR CONTENIDO Y KEYWORDS DE GRUASEQUISER.COM

### SERVICIOS PRINCIPALES (para títulos de blogs y slugs):

```javascript
const servicios = [
  // Servicios Core
  "Alquiler de Grúas Móviles",
  "Alquiler de Grúas Sobre Oruga",
  "Grúas Telescópicas Hidráulicas",
  "Transporte Pesado y Extrapesado",
  "Izamiento Industrial Especializado",
  "Super Lowboy Hidráulico",
  "Ingeniería y Planificación 3D",
  "Rigging Especializado",
  
  // Equipos Específicos
  "Grúas Liebherr",
  "Grúas Grove",
  "Grúas Manitowoc",
  "Grúas Demag",
  "Grúas 25-500 Toneladas",
  "Grúas 300-1600 Toneladas",
  
  // Servicios Especializados
  "Movilización de Transformadores",
  "Transporte de Turbinas",
  "Izamiento de Generadores",
  "Movilización de Vagones de Metro",
  "Transporte de Reactores Petroquímicos",
  "Montaje de Equipos Industriales"
];
```

---

### SECTORES INDUSTRIALES (para segmentación de contenido):

```javascript
const sectores = [
  "Petrolero",
  "Petroquímico",
  "Energético",
  "Siderúrgico",
  "Portuario",
  "Industrial",
  "Construcción Mayor",
  "Minería"
];
```

---

### CIUDADES DE OPERACIÓN (para SEO local):

```javascript
const ciudades = [
  // Ciudades Principales
  "Barcelona",      // Base de operaciones
  "Maracaibo",
  "Valencia",
  "Puerto Cabello",
  "Puerto La Cruz",
  "Ciudad Guayana",
  "Caracas",
  "Maturín",
  
  // Zonas Especiales
  "Faja del Orinoco",
  "Complejo José",
  "Refinería El Palito",
  "Morón"
];
```

---

### KEYWORDS SEO TIER 1 (para títulos de blogs):

```javascript
const keywordsTier1 = [
  // Grúas Generales
  "alquiler de grúas venezuela",
  "grúas industriales venezuela",
  "grúas móviles venezuela",
  "grúas sobre oruga venezuela",
  "grúas telescópicas venezuela",
  "grúas hidráulicas venezuela",
  
  // Servicios
  "izamiento industrial venezuela",
  "transporte pesado venezuela",
  "transporte extrapesado venezuela",
  "super lowboy hidráulico venezuela",
  "rigging especializado venezuela",
  
  // Capacidades
  "grúas 1600 toneladas venezuela",
  "grúas alta capacidad venezuela",
  "grúas 300 toneladas venezuela",
  "grúas 500 toneladas venezuela",
  
  // Sectores
  "grúas sector petrolero venezuela",
  "grúas sector petroquímico venezuela",
  "grúas sector energético venezuela",
  "grúas sector siderúrgico venezuela",
  
  // Marcas
  "grúas liebherr venezuela",
  "grúas grove venezuela",
  "grúas manitowoc venezuela",
  
  // Servicios Específicos
  "movilización transformadores venezuela",
  "transporte turbinas industriales venezuela",
  "izamiento generadores venezuela",
  "transporte vagones metro venezuela"
];
```

---

### KEYWORDS SEO POR CIUDAD (para slugs localizados):

```javascript
const keywordsPorCiudad = {
  barcelona: [
    "grúas industriales barcelona",
    "alquiler grúas barcelona anzoátegui",
    "izamiento industrial barcelona",
    "transporte pesado barcelona",
    "grúas móviles barcelona",
    "grúas sector petrolero barcelona"
  ],
  
  maracaibo: [
    "grúas industriales maracaibo",
    "alquiler grúas maracaibo zulia",
    "grúas sector petrolero maracaibo",
    "transporte pesado maracaibo",
    "grúas 300 toneladas maracaibo",
    "izamiento especializado maracaibo"
  ],
  
  valencia: [
    "grúas industriales valencia",
    "alquiler grúas valencia carabobo",
    "grúas sector petroquímico valencia",
    "transporte pesado valencia",
    "grúas móviles valencia",
    "izamiento industrial valencia"
  ],
  
  puertoLaCruz: [
    "grúas industriales puerto la cruz",
    "grúas sector portuario",
    "izamiento portuario puerto la cruz",
    "transporte pesado puerto la cruz",
    "grúas móviles puerto la cruz"
  ],
  
  ciudadGuayana: [
    "grúas industriales ciudad guayana",
    "grúas sector siderúrgico",
    "grúas sidor ciudad guayana",
    "izamiento industrial ciudad guayana",
    "transporte pesado ciudad guayana"
  ],
  
  caracas: [
    "grúas industriales caracas",
    "alquiler grúas caracas",
    "grúas sector energético caracas",
    "transporte pesado caracas",
    "izamiento especializado caracas"
  ]
};
```

---

## 📋 EJEMPLOS DE TÍTULOS Y SLUGS PARA BLOGS

### Formato: Servicio + Ciudad + Sector

```javascript
const ejemplosTitulosSlugs = [
  {
    titulo: "Alquiler de Grúas Móviles 300 Toneladas en Maracaibo - Sector Petrolero",
    slug: "gruas-moviles-300-toneladas-maracaibo-petrolero",
    ciudad: "Maracaibo",
    sector: "Petrolero",
    keywords: ["grúas móviles maracaibo", "grúas 300 toneladas", "sector petrolero"]
  },
  
  {
    titulo: "Izamiento Industrial Especializado en Valencia - Sector Petroquímico",
    slug: "izamiento-industrial-valencia-petroquimico",
    ciudad: "Valencia",
    sector: "Petroquímico",
    keywords: ["izamiento industrial valencia", "sector petroquímico", "grúas valencia"]
  },
  
  {
    titulo: "Transporte de Transformadores en Puerto Cabello - Guía Completa 2024",
    slug: "transporte-transformadores-puerto-cabello",
    ciudad: "Puerto Cabello",
    sector: "Energético",
    keywords: ["transporte transformadores", "puerto cabello", "super lowboy"]
  },
  
  {
    titulo: "Grúas Liebherr 1600 Toneladas en Ciudad Guayana - Sector Siderúrgico",
    slug: "gruas-liebherr-1600-toneladas-ciudad-guayana",
    ciudad: "Ciudad Guayana",
    sector: "Siderúrgico",
    keywords: ["grúas liebherr", "1600 toneladas", "sidor"]
  },
  
  {
    titulo: "Movilización de Vagones de Metro en Caracas - Proyecto Especial",
    slug: "movilizacion-vagones-metro-caracas",
    ciudad: "Caracas",
    sector: "Infraestructura",
    keywords: ["vagones metro", "movilización caracas", "transporte ferroviario"]
  },
  
  {
    titulo: "Grúas Sobre Oruga para Refinería El Palito - Sector Petroquímico",
    slug: "gruas-sobre-oruga-refineria-el-palito",
    ciudad: "Morón",
    sector: "Petroquímico",
    keywords: ["refinería el palito", "grúas sobre oruga", "pequiven"]
  },
  
  {
    titulo: "Super Lowboy Hidráulico 250 Toneladas en Barcelona - Guía Técnica",
    slug: "super-lowboy-hidraulico-250-toneladas-barcelona",
    ciudad: "Barcelona",
    sector: "Industrial",
    keywords: ["super lowboy", "250 toneladas", "barcelona anzoátegui"]
  },
  
  {
    titulo: "Rigging Especializado para Proyectos en Faja del Orinoco",
    slug: "rigging-especializado-faja-del-orinoco",
    ciudad: "Faja del Orinoco",
    sector: "Petrolero",
    keywords: ["rigging especializado", "faja del orinoco", "sector petrolero"]
  }
];
```

---

## 🎯 TEMPLATE DE PROMPT PARA GENERACIÓN DE CONTENIDO

**Usa este template en el blogGenerator adaptado:**

```typescript
const promptTemplate = `
Eres un experto en contenido SEO especializado en servicios de grúas industriales e izamiento.

Crea un artículo de blog optimizado para SEO sobre: "${keyword}"

INFORMACIÓN DE LA EMPRESA (EQUISER/GruasEquiser):
- Nombre oficial: EQUISER C.A.
- Nombre comercial: GRÚAS EQUISER
- Especialidad: Grúas industriales 25-1600 toneladas, transporte pesado
- Marcas: Liebherr, Grove, Manitowoc, Demag
- Ubicación base: Barcelona, Anzoátegui, Venezuela
- Cobertura: Nacional (Maracaibo, Valencia, Puerto Cabello, Ciudad Guayana, Caracas)
- Sector: ${sector}
- Ciudad objetivo: ${ciudad}
- Experiencia: 30+ años
- Proyectos ejecutados: 500+
- Capacidad máxima: 1600 toneladas
- Disponibilidad: 24/7
- WhatsApp: https://wa.me/message/IOBBJVBBVWNOI1
- Email: [VERIFICAR CON USUARIO]
- Teléfono: [SOLICITAR AL USUARIO]

SERVICIOS PRINCIPALES A MENCIONAR:
- Alquiler de Grúas Móviles (25-500 ton)
- Alquiler de Grúas Sobre Oruga (300-1600 ton)
- Transporte Pesado y Extrapesado (Super Lowboy Hidráulico hasta 250 ton)
- Izamiento Industrial Especializado
- Ingeniería y Planificación 3D
- Rigging Especializado

SECTORES QUE ATENDEMOS:
- Petrolero (Faja del Orinoco, operadoras sector petrolero)
- Petroquímico (Pequiven, Refinería El Palito, Complejo José)
- Energético (plantas eléctricas, transformadores)
- Siderúrgico (SIDOR, Ciudad Guayana)
- Portuario (Puerto La Cruz, Puerto Cabello)
- Industrial (manufactura pesada)
- Construcción Mayor (infraestructura)

REQUISITOS OBLIGATORIOS:

1. **Estructura del Artículo**:
   - Título atractivo optimizado para SEO (H1): incluir ciudad y servicio específico
   - Introducción convincente (150-200 palabras)
   - 5-7 secciones con subtítulos (H2)
   - Conclusión con llamado a la acción
   - Longitud total: 1500-2000 palabras

2. **CTAs (Call-to-Actions) - OBLIGATORIO 3 CTAs**:
   
   CTA 1 (después de la introducción):
   <div class="cta-box bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
     <h3 class="text-2xl font-bold text-yellow-800 mb-4">🏗️ ¿Necesitas Grúas Industriales en ${ciudad}?</h3>
     <p class="text-gray-700 mb-4">EQUISER cuenta con más de 30 años de experiencia en ${sector}. Grúas de 25 a 1600 toneladas disponibles 24/7.</p>
     <ul class="space-y-2 mb-4">
       <li class="flex items-center">
         <span class="text-yellow-600 mr-2">📞</span>
         <strong>Teléfono:</strong> [SOLICITAR AL USUARIO]
       </li>
       <li class="flex items-center">
         <span class="text-yellow-600 mr-2">💬</span>
         <strong>WhatsApp:</strong> <a href="https://wa.me/message/IOBBJVBBVWNOI1" class="text-blue-600 hover:underline">Chatear Ahora</a>
       </li>
       <li class="flex items-center">
         <span class="text-yellow-600 mr-2">📧</span>
         <strong>Email:</strong> info@gruasequiser.com
       </li>
     </ul>
     <a href="https://wa.me/message/IOBBJVBBVWNOI1" class="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition">
       Solicitar Cotización Gratis →
     </a>
   </div>

   CTA 2 (mitad del artículo - enfocado en capacidades):
   <div class="cta-box bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
     <h3 class="text-2xl font-bold text-blue-800 mb-4">⚙️ Equipos de Alta Tecnología para ${sector}</h3>
     <p class="text-gray-700 mb-4">Contamos con grúas Liebherr, Grove, Manitowoc y Demag certificadas para el sector industrial venezolano.</p>
     <ul class="grid md:grid-cols-2 gap-3 mb-4">
       <li>✅ Grúas Móviles 25-500 ton</li>
       <li>✅ Grúas Sobre Oruga 300-1600 ton</li>
       <li>✅ Super Lowboy Hidráulico 250 ton</li>
       <li>✅ Ingeniería 3D avanzada</li>
       <li>✅ Operadores certificados</li>
       <li>✅ Disponibilidad 24/7</li>
     </ul>
     <a href="https://wa.me/message/IOBBJVBBVWNOI1" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition">
       Ver Nuestra Flota →
     </a>
   </div>

   CTA 3 (antes de la conclusión - urgencia):
   <div class="cta-box bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 my-8 rounded-lg">
     <h3 class="text-2xl font-bold mb-4">🚀 ¿Tu Proyecto No Puede Esperar?</h3>
     <p class="mb-4">Atención inmediata las 24 horas del día, los 7 días de la semana. Cotizaciones personalizadas en menos de 2 horas.</p>
     <div class="bg-white/20 backdrop-blur rounded p-4 mb-4">
       <p class="font-bold">📍 Ubicación: Barcelona, Anzoátegui</p>
       <p class="font-bold">📊 Proyectos ejecutados: 500+</p>
       <p class="font-bold">⭐ Experiencia: 30+ años</p>
     </div>
     <a href="https://wa.me/message/IOBBJVBBVWNOI1" class="inline-block bg-white text-yellow-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
       💬 Contactar por WhatsApp Ahora
     </a>
   </div>

3. **Formulario de Contacto** (al final del artículo):
   <div id="contact-form" class="contact-form-section bg-gray-50 p-8 rounded-xl my-12">
     <h2 class="text-3xl font-bold text-gray-800 mb-4">Solicita una Cotización Sin Compromiso</h2>
     <p class="text-gray-600 mb-6">Completa el formulario y nuestro equipo técnico te responderá en menos de 24 horas con una cotización personalizada para tu proyecto en ${ciudad}.</p>
     [El formulario se insertará automáticamente aquí]
   </div>

4. **Datos de Contacto Visibles** (sidebar o bloque destacado):
   <div class="contact-info bg-yellow-50 border border-yellow-200 rounded-lg p-6 sticky top-4">
     <h3 class="text-xl font-bold text-yellow-800 mb-4">📞 Contáctanos Directamente</h3>
     <div class="space-y-3">
       <p class="flex items-start">
         <span class="text-yellow-600 mr-2 mt-1">🏢</span>
         <span><strong>Empresa:</strong> GRÚAS EQUISER C.A.</span>
       </p>
       <p class="flex items-start">
         <span class="text-yellow-600 mr-2 mt-1">📞</span>
         <span><strong>Teléfono:</strong> [SOLICITAR]</span>
       </p>
       <p class="flex items-start">
         <span class="text-yellow-600 mr-2 mt-1">💬</span>
         <span><strong>WhatsApp:</strong> <a href="https://wa.me/message/IOBBJVBBVWNOI1" class="text-blue-600 hover:underline">Chat directo</a></span>
       </p>
       <p class="flex items-start">
         <span class="text-yellow-600 mr-2 mt-1">📧</span>
         <span><strong>Email:</strong> info@gruasequiser.com</span>
       </p>
       <p class="flex items-start">
         <span class="text-yellow-600 mr-2 mt-1">📍</span>
         <span><strong>Base:</strong> Barcelona, Anzoátegui</span>
       </p>
       <p class="flex items-start">
         <span class="text-yellow-600 mr-2 mt-1">🌎</span>
         <span><strong>Cobertura:</strong> Nacional</span>
       </p>
       <p class="flex items-start">
         <span class="text-yellow-600 mr-2 mt-1">⏰</span>
         <span><strong>Horario:</strong> 24/7</span>
       </p>
     </div>
     <a href="https://wa.me/message/IOBBJVBBVWNOI1" class="block w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded text-center transition">
       💬 Escribir por WhatsApp
     </a>
   </div>

5. **Enlaces Internos** (mínimo 3):
   Incluye enlaces a artículos relacionados de GruasEquiser:
   - <a href="/es/blog/gruas-moviles-${ciudad.toLowerCase().replace(' ', '-')}" class="text-blue-600 hover:underline">Grúas móviles en ${ciudad}</a>
   - <a href="/es/blog/izamiento-industrial-${sector.toLowerCase()}" class="text-blue-600 hover:underline">Izamiento especializado sector ${sector}</a>
   - <a href="/es/blog/transporte-pesado-venezuela" class="text-blue-600 hover:underline">Transporte pesado en Venezuela</a>

6. **Keywords SEO**:
   - Keyword principal: "${keyword}"
   - Keywords secundarias: ${relatedKeywords.join(', ')}
   - Densidad de keyword: 1-2%
   - Mencionar siempre: EQUISER, GruasEquiser, Barcelona, ${ciudad}, ${sector}
   - Incluir marcas: Liebherr, Grove, Manitowoc, Demag

7. **Meta Tags**:
   - Meta Title (50-60 caracteres): "${keyword} | EQUISER - Grúas 1600 ton"
   - Meta Description (150-160 caracteres): "✓ Grúas industriales en ${ciudad}. EQUISER: 30+ años experiencia, equipos 25-1600 ton. Cotización gratis 24/7. Sector ${sector}."
   - Keywords: ${keyword}, grúas ${ciudad}, ${sector}, EQUISER, alquiler grúas venezuela

8. **Contenido Específico a Incluir**:
   - Mencionar proyectos reales: Pequiven, Refinería El Palito, SIDOR, Faja del Orinoco
   - Destacar capacidades: 25 a 1600 toneladas
   - Mencionar cobertura: Barcelona, Maracaibo, Valencia, Puerto Cabello, Ciudad Guayana, Caracas
   - Certificaciones para sector petrolero y petroquímico
   - Casos de éxito: movilización de transformadores, turbinas, vagones de metro
   - Tecnología: Sistema de monitoreo satelital, ingeniería 3D

9. **Formato HTML**:
   - Usa Tailwind CSS para estilos
   - Etiquetas semánticas: <article>, <section>, <aside>
   - Imágenes con ALT descriptivos (se insertarán automáticamente)
   - Listas numeradas y con viñetas
   - Negritas (<strong>) en datos importantes
   - Código responsivo mobile-first

10. **Tono y Estilo**:
   - Profesional pero accesible
   - Enfocado en B2B (empresas industriales)
   - NO mencionar servicios residenciales o vehículos ligeros
   - Destacar: seguridad, certificaciones, experiencia, tecnología
   - Incluir datos técnicos: capacidades de carga, alcances, especificaciones
   - Mencionar beneficios: disponibilidad 24/7, cobertura nacional, experiencia comprobada

Genera el artículo completo en formato HTML limpio y optimizado para SEO.
`;
```

---

## ✅ CONFIRMACIÓN FINAL DE DATOS

### ¿Qué TIENES confirmado?
✅ Stack: Next.js 14 + Prisma + PostgreSQL
✅ Colores: #FFD700 (amarillo) y #1976D2 (azul)
✅ APIs: ABACUSAI, FREEPIK, SHUTTERSTOCK
✅ Contenido y keywords de GruasEquiser
✅ Servicios, sectores y ciudades
✅ Template de generación de contenido

### ¿Qué FALTA solicitar al usuario?
❌ Teléfono de contacto exacto
❌ Email de contacto exacto (confirmar si es info@gruasequiser.com)
❌ Pexels API Key (opcional pero recomendado - es GRATIS)

---

## 🚀 SIGUIENTE PASO

**Procede con la implementación siguiendo estos pasos:**

1. **Adaptar código de TRANSERVICA a Next.js:**
   - Convierte `server/lib/blogGenerator.ts` a Next.js API route
   - Convierte `server/lib/imageService.ts` a servicio de Next.js
   - Usa Prisma en lugar de Drizzle ORM

2. **Usar el template de prompt proporcionado arriba**
   - Incluye todos los servicios de GruasEquiser
   - Incluye todos los sectores y ciudades
   - Usa los ejemplos de títulos y slugs proporcionados

3. **Generar blogs con esta estructura de slug:**
   ```
   /es/blog/[servicio]-[ciudad]-[sector]
   
   Ejemplos:
   /es/blog/gruas-moviles-300-toneladas-maracaibo
   /es/blog/izamiento-industrial-valencia-petroquimico
   /es/blog/transporte-transformadores-puerto-cabello
   ```

4. **Validar requisitos obligatorios:**
   - ✅ 3 imágenes mínimo
   - ✅ 3 CTAs exactamente
   - ✅ Formulario de contacto
   - ✅ Datos de contacto visibles
   - ✅ Enlaces internos (mínimo 3)

---

## 📊 ESTIMACIÓN ACTUALIZADA

| Fase | Tiempo | Descripción |
|------|--------|-------------|
| Adaptar blogGenerator a Next.js | 1.5h | Convertir lógica a API routes |
| Adaptar imageService a Next.js | 1h | Servicio multi-provider |
| Crear páginas de blog en Next.js | 1h | Lista + artículo individual |
| Adaptar colores y estilos | 30min | Yellow/Blue en lugar de Green |
| Testing y ajustes | 1h | Validar generación completa |
| **TOTAL** | **~5 horas** | **Complejidad MEDIA** |

**Créditos estimados: 2500-3000**

---

## 🎯 ¡ADELANTE!

Tienes toda la información necesaria para proceder. El sistema quedará idéntico a TRANSERVICA pero adaptado a:
- ✅ Next.js (en lugar de React+Vite)
- ✅ Colores de GruasEquiser (amarillo/azul)
- ✅ Contenido de servicios de grúas
- ✅ Keywords de GruasEquiser
- ✅ Sectores y ciudades correctas

**¿Alguna duda antes de empezar? ¡Manos a la obra! 🚀**
