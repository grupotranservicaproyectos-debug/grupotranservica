# 🚛 PROMPT SIMPLIFICADO: Clonar Sistema de Blogs de TRANSERVICA a GruasEquiser

## ⚠️ IMPORTANTE: ESTO ES UNA OPERACIÓN DE COPIA, NO DESARROLLO DESDE CERO

**NO estás creando un sistema nuevo. Estás COPIANDO código ya funcional y ADAPTANDO colores/contenido.**

---

## 📋 CONTEXTO

TRANSERVICA (grupotranservica.com) tiene un sistema de blogs automatizado **100% funcional** que genera contenido SEO diariamente con IA.

**Tu tarea:** Copiar este sistema a GruasEquiser.com y adaptar:
- ✅ Colores corporativos (NUNCA usar verde #155d29 de TRANSERVICA)
- ✅ Información de contacto (teléfono, email, WhatsApp de GruasEquiser)
- ✅ Keywords SEO (servicios de grúas en lugar de transporte pesado)
- ✅ Contenido específico (grúas, izaje, rescate vehicular)

**Todo lo demás SE COPIA TAL CUAL.**

---

## 🎯 PASO A PASO: OPERACIÓN DE CLONACIÓN

### PASO 1: Verificar Stack Tecnológico de GruasEquiser

**Pregunta al usuario:**
```
¿GruasEquiser usa React + Vite + Express (como TRANSERVICA)?
¿O usa Next.js u otro framework?
```

#### SI USA REACT + VITE + EXPRESS (igual que TRANSERVICA):
✅ **Perfecto, puedes copiar directamente todo el código**
✅ Complejidad: BAJA (solo copiar/pegar y adaptar)
✅ Tiempo: 2-3 horas
✅ Créditos: 1000-1500

#### SI USA NEXT.JS U OTRO FRAMEWORK:
⚠️ Necesitas adaptar el código al framework específico
⚠️ Complejidad: MEDIA
⚠️ Tiempo: 4-6 horas
⚠️ Créditos: 2000-3000

---

### PASO 2: Copiar Archivos de TRANSERVICA

**NO INVENTES NADA. COPIA ESTOS ARCHIVOS TAL CUAL:**

#### Backend (Copiar completos):
```bash
✅ server/lib/blogGenerator.ts        → Generador de blogs con IA
✅ server/lib/imageService.ts         → Sistema multi-provider de imágenes
✅ server/lib/seoKeywords.ts          → Keywords SEO (ESTE SÍ adaptarlo)
✅ scripts/generate-daily-blogs.ts    → Script de generación automática
```

#### Frontend (Copiar completos):
```bash
✅ client/src/pages/seo-blog.tsx              → Página lista de blogs
✅ client/src/pages/seo-blog-article.tsx      → Página artículo individual
✅ client/src/components/seo.tsx              → Componente meta tags
✅ client/src/components/blog-contact-form.tsx → Formulario de contacto
```

#### Schema (Copiar tabla blogs):
```bash
✅ shared/schema.ts → Copiar solo la tabla "blogs" y sus schemas
```

---

### PASO 3: Adaptar Colores Corporativos

**Archivo: `client/src/index.css`**

**ANTES (TRANSERVICA):**
```css
:root {
  --transervica-green: #155d29;
  --transervica-dark-green: #0f4a21;
  --primary: #155d29;
}
```

**DESPUÉS (GruasEquiser - EJEMPLO):**
```css
:root {
  /* Colores GruasEquiser - SOLICITAR COLORES REALES AL USUARIO */
  --gruasequiser-primary: #FFC107;      /* Amarillo */
  --gruasequiser-secondary: #FF9800;    /* Naranja */
  --gruasequiser-dark: #1976D2;         /* Azul */
  --primary: var(--gruasequiser-primary);
}
```

**Luego, reemplazar en TODO el código:**
- `#155d29` → `var(--gruasequiser-primary)`
- `#0f4a21` → `var(--gruasequiser-dark)`
- `bg-[#155d29]` → `bg-[var(--gruasequiser-primary)]`

---

### PASO 4: Adaptar Keywords SEO

**Archivo: `server/lib/seoKeywords.ts`**

**ANTES (TRANSERVICA):**
```typescript
export const SECTORS = [
  'Petrolero',
  'Petroquímico',
  'Siderúrgico',
];

export const SEO_KEYWORDS = {
  tier1: [
    'transporte carga pesada venezuela',
    'logística industrial venezuela',
  ],
};
```

**DESPUÉS (GruasEquiser):**
```typescript
export const SECTORS = [
  'Infraestructura Vial',
  'Construcción',
  'Industrial',
  'Rescate Vehicular',
  'Petrolero',
];

export const SEO_KEYWORDS = {
  tier1: [
    'servicio de grúas venezuela',
    'grúas industriales venezuela',
    'izaje especializado venezuela',
    'rescate vehicular venezuela',
    'alquiler de grúas venezuela',
  ],
  
  caracas: [
    'servicio de grúas caracas',
    'grúas industriales caracas',
    'rescate vehicular caracas',
  ],
  // ... copiar resto de ciudades y adaptar
};
```

---

### PASO 5: Adaptar Información de Contacto

**Archivo: `server/lib/blogGenerator.ts`**

**Buscar y reemplazar:**

```typescript
// TRANSERVICA
const contactInfo = {
  empresa: "TRANSERVICA, C.A.",
  telefono: "+58 212-XXX-XXXX",
  email: "contacto@transervica.net",
  whatsapp: "+58 XXX-XXX-XXXX",
};

// GruasEquiser (SOLICITAR AL USUARIO)
const contactInfo = {
  empresa: "GruasEquiser, C.A.",
  telefono: "[SOLICITAR AL USUARIO]",
  email: "[SOLICITAR AL USUARIO]",
  whatsapp: "[SOLICITAR AL USUARIO]",
};
```

---

### PASO 6: Configurar APIs (Reutilizar las Mismas)

**Pregunta al usuario:**
```
¿Ya tienes configurados estos secrets en GruasEquiser?
- OPENROUTER_API_KEY
- PEXELS_API_KEY
- FREEPIK_API_KEY
- SHUTTERSTOCK_CONSUMER_KEY
- SHUTTERSTOCK_CONSUMER_SECRET
- UNSPLASH_ACCESS_KEY
```

#### SI RESPONDE "SÍ":
✅ No necesitas hacer nada, solo copiar el código

#### SI RESPONDE "NO":
✅ Pídele que copie los mismos secrets de TRANSERVICA a GruasEquiser
✅ Son las MISMAS APIs, no necesita crear cuentas nuevas

---

### PASO 7: Ejecutar Migración de Base de Datos

**Solo necesitas crear la tabla `blogs`:**

```bash
# Copiar la definición de la tabla blogs de TRANSERVICA a shared/schema.ts
# Luego ejecutar:
npm run db:push --force
```

**Eso es todo. NO necesitas crear schemas complejos desde cero.**

---

### PASO 8: Configurar Scheduled Deployment

**En Replit de GruasEquiser:**

1. Ve a **"Deployments"** → **"Create Deployment"** → **"Scheduled"**
2. Copia la MISMA configuración de TRANSERVICA:

```
Schedule: Every day at 6:30 AM
Timezone: America/Panama
Cron: 30 6 * * *
Build: npm install
Run: tsx scripts/generate-daily-blogs.ts
Timeout: 600
```

3. Asegúrate de que los secrets estén configurados en Deployment

**Eso es todo. NO necesitas configurar infraestructura compleja.**

---

### PASO 9: Testing

**Ejecuta manualmente el script:**
```bash
tsx scripts/generate-daily-blogs.ts
```

**Verifica:**
- ✅ Se genera contenido
- ✅ Se descargan imágenes
- ✅ Se guarda en base de datos
- ✅ Colores de GruasEquiser aparecen correctamente

---

## 📊 ESTIMACIÓN REAL DE COMPLEJIDAD

### SI GruasEquiser usa React + Vite + Express (igual que TRANSERVICA):

| Tarea | Tiempo | Complejidad |
|-------|--------|-------------|
| Copiar archivos backend | 15 min | Copiar/pegar |
| Copiar archivos frontend | 20 min | Copiar/pegar |
| Adaptar colores CSS | 10 min | Find & replace |
| Adaptar keywords SEO | 15 min | Edición simple |
| Adaptar contacto | 5 min | Find & replace |
| Migración DB | 5 min | `npm run db:push` |
| Scheduled Deployment | 10 min | Copiar config |
| Testing | 20 min | Ejecutar script |
| **TOTAL** | **~2 horas** | **BAJA** |

**Créditos estimados: 1000-1500**

---

### SI GruasEquiser usa Next.js u otro framework:

| Tarea | Tiempo | Complejidad |
|-------|--------|-------------|
| Adaptar código a Next.js | 2 horas | Media |
| Adaptar rutas | 30 min | Media |
| Adaptar API routes | 1 hora | Media |
| Resto (colores, keywords, etc.) | 1 hora | Baja |
| Testing | 30 min | Media |
| **TOTAL** | **~5 horas** | **MEDIA** |

**Créditos estimados: 2500-3500**

---

## 🚨 INFORMACIÓN CRÍTICA QUE NECESITAS DEL USUARIO

**ANTES DE EMPEZAR, pregunta:**

1. **¿Qué stack usa GruasEquiser?**
   - React + Vite + Express (como TRANSERVICA) → Fácil
   - Next.js → Necesita adaptación
   - Otro → Evaluar viabilidad

2. **¿Ya tienes las APIs configuradas?**
   - OPENROUTER_API_KEY
   - PEXELS_API_KEY
   - Otros proveedores de imágenes

3. **Datos de contacto de GruasEquiser:**
   - Teléfono
   - Email
   - WhatsApp
   - Dirección

4. **Colores corporativos exactos:**
   - Color primario (hex)
   - Color secundario (hex)
   - Color oscuro (hex)

---

## ✅ LO QUE SÍ VAS A HACER

1. ✅ Copiar código de TRANSERVICA
2. ✅ Adaptar colores CSS
3. ✅ Adaptar keywords SEO
4. ✅ Adaptar información de contacto
5. ✅ Configurar Scheduled Deployment (copiar config)
6. ✅ Testing básico

---

## ❌ LO QUE NO VAS A HACER

1. ❌ Crear sistema de IA desde cero
2. ❌ Configurar APIs desde cero (ya están configuradas)
3. ❌ Diseñar sistema de generación (ya existe)
4. ❌ Crear backend completo (solo copiar)
5. ❌ Inventar código nuevo

---

## 🎯 RESULTADO ESPERADO

**Después de 2-5 horas, GruasEquiser tendrá:**

✅ Sistema de blogs automatizado idéntico a TRANSERVICA
✅ Generación diaria de 2 artículos SEO a las 6:30 AM
✅ Colores corporativos de GruasEquiser (NO verde de TRANSERVICA)
✅ Keywords adaptadas a servicios de grúas
✅ Información de contacto de GruasEquiser
✅ Todo funcionando igual que en TRANSERVICA

---

## 💬 PREGUNTA INICIAL PARA EL AGENTE

**Comienza preguntando esto al usuario:**

```
Antes de comenzar, necesito confirmar:

1. ¿GruasEquiser usa el mismo stack que TRANSERVICA?
   - React + Vite + Express ✅
   - Next.js ⚠️ (necesita adaptación)
   - Otro ❌ (difícil)

2. ¿Ya tienes configuradas las APIs de TRANSERVICA en GruasEquiser?
   - OPENROUTER_API_KEY
   - PEXELS_API_KEY
   
3. ¿Tienes acceso a los siguientes datos de GruasEquiser?
   - Teléfono de contacto
   - Email de contacto
   - WhatsApp
   - Colores corporativos (hex codes)

Con esta información podré estimar la complejidad real.
```

---

## 🚀 CONCLUSIÓN

**Este NO es un proyecto de 5000-8000 créditos.**

**Es una operación de COPIA/ADAPTACIÓN que debería costar:**
- Stack igual: ~1000-1500 créditos
- Stack diferente: ~2500-3500 créditos

**La clave es NO reinventar la rueda. Todo ya existe en TRANSERVICA.**

---

## 📝 NOTA FINAL

Si el agente sigue insistiendo en que es muy complejo, **está malinterpretando el proyecto**.

**Enfatiza:**
- "COPIA este archivo de TRANSERVICA"
- "REEMPLAZA estos colores"
- "ADAPTA estas keywords"
- "USA las mismas APIs que ya tienes"

**NO:**
- "Crea un sistema nuevo"
- "Diseña una arquitectura"
- "Configura infraestructura compleja"

🚀 **¡Adelante con la clonación!**
