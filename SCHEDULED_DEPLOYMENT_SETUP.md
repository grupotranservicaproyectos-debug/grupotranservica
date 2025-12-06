# 🤖 Configuración de Generación Automática Diaria de Blogs SEO

## 📋 Resumen

Este documento explica cómo configurar la generación automática diaria de blogs SEO usando **Replit Scheduled Deployment** en lugar del cron job tradicional.

---

## ✅ Cambios Implementados (Actualización Diciembre 2025)

### 1. **Script de Generación Diaria Optimizado**
- **Ubicación**: `scripts/generate-daily-blogs.ts`
- **Función**: Genera 4 blogs SEO optimizados diariamente con control de calidad
- **Características**:
  - ✅ Conexión directa a PostgreSQL (Neon)
  - ✅ Generación de 4 blogs (optimizado para mejor calidad vs cantidad)
  - ✅ **Logging estructurado JSON** para fácil análisis
  - ✅ **Control de calidad**: validación de longitud mínima (1500 caracteres)
  - ✅ **Detección de duplicados**: valida títulos y slugs únicos
  - ✅ **Sistema de cooldown**: evita repetir ciudad/sector más de 3 veces/mes
  - ✅ **Batch tracking**: cada ejecución tiene un `generation_batch_id` único
  - ✅ Exit codes apropiados (0 = éxito, 1 = error)

### 2. **Script de Refresh Semanal** (NUEVO)
- **Ubicación**: `scripts/refresh-old-blogs.ts`
- **Función**: Refresca 2 posts antiguos semanalmente para mejorar señales de frescura
- **Cron recomendado**: `0 10 * * 0` (Domingos 10:00 AM Panama)
- **Características**:
  - ✅ Actualiza fechas de posts con más de 30 días
  - ✅ Actualiza años en el contenido (2024 → 2025)
  - ✅ Añade nota de "Artículo actualizado"
  - ✅ Registra en `lastRefreshedAt`

### 3. **Endpoint de Monitoreo** (NUEVO)
- **URL**: `/api/blogs/health`
- **Función**: Dashboard de estado del sistema de generación
- **Retorna**:
  - ✅ Último blog auto-generado
  - ✅ Blogs generados en últimos 7 y 30 días
  - ✅ Logs de las últimas 5 ejecuciones
  - ✅ Errores detectados
  - ✅ Configuración del schedule

### 4. **Nuevas Tablas en Base de Datos**
- `blog_generation_logs`: Registro de cada ejecución del generador
- `city_sector_cooldown`: Control de cooldown por ciudad/sector/mes
- Nuevos campos en `blogs`: `generation_batch_id`, `generation_source`, `last_refreshed_at`

### 5. **Cron Job del Servidor Removido**
- ❌ Eliminado `node-cron` del servidor principal
- ✅ El servidor ahora es más liviano y solo maneja peticiones HTTP

---

## 🚀 Instrucciones de Configuración en Replit

### Paso 1: Acceder a Deployments

1. En tu proyecto de Replit, haz clic en el panel lateral izquierdo
2. Selecciona **"All tools"** (Todas las herramientas)
3. Busca y selecciona **"Deployments"**

### Paso 2: Crear Scheduled Deployment

1. En la pantalla de Deployments, selecciona **"Scheduled"**
2. Haz clic en **"Set up your published app"**

### Paso 3: Configurar el Schedule

#### **Schedule Description** (Descripción de horario)
```
Every day at 6:30 AM
```

#### **Timezone** (Zona horaria)
```
America/Panama
```

#### **Cron Expression** (Expresión cron - se genera automáticamente)
```
30 6 * * *
```

### Paso 4: Configurar Commands

#### **Build Command** (Comando de construcción)
```bash
npm install
```

#### **Run Command** (Comando de ejecución)
```bash
tsx scripts/generate-daily-blogs.ts
```

#### **Job Timeout** (Tiempo máximo de ejecución)
```
300 seconds (5 minutos) - Optimizado para 4 blogs
```

### Paso 5: Configurar Secrets (Variables de Entorno)

En la sección **"Deployment secrets"**, asegúrate de que estén configurados:

- ✅ `DATABASE_URL` - URL de conexión a PostgreSQL
- ✅ `OPENROUTER_API_KEY` - Clave API de OpenRouter para generación de contenido
- ✅ `PEXELS_API_KEY` - Clave API de Pexels para imágenes

**Nota**: Estos secrets ya están configurados en tu proyecto y se heredarán automáticamente.

### Paso 6: Publicar (Deploy)

1. Revisa toda la configuración
2. Haz clic en **"Deploy"** o **"Publish"**
3. Espera a que Replit configure el deployment
4. ✅ ¡Listo! La tarea se ejecutará automáticamente cada día a las 3:00 AM (hora de Venezuela)

---

## 💰 Costos de Replit Scheduled Deployment

### Cómo Funciona el Cobro

Replit cobra por **Compute Units (CU)**, que miden el trabajo computacional realizado:

- **1 CPU second** = 18 Compute Units
- **1 GB-second RAM** = 2 Compute Units

### Estimación de Costos para Generación Diaria

#### Recursos Estimados por Ejecución:
- **Tiempo de ejecución**: ~60-120 segundos (generación de 5 blogs con imágenes)
- **CPU**: ~1 core activo
- **RAM**: ~0.5 GB promedio

#### Cálculo de Compute Units por Ejecución:
```
CPU: 90 segundos × 18 CU/seg = 1,620 CU
RAM: 90 segundos × 0.5 GB × 2 CU/GB-seg = 90 CU
Total por ejecución: ~1,710 Compute Units
```

#### Costo Mensual (30 días):
```
1,710 CU × 30 días = 51,300 Compute Units/mes
```

### Planes de Replit y Créditos Incluidos

#### **Replit Core** ($20/mes por editor)
- ✅ **$25 en créditos mensuales** incluidos
- ✅ Suficiente para la generación diaria de blogs
- ✅ Sobran créditos para otros deployments

#### **Replit Teams** ($40/usuario/mes)
- ✅ **$40 en créditos mensuales** por usuario
- ✅ Más que suficiente para generación diaria + otros servicios

### Estimación de Costo Real

Según la documentación de Replit, los Scheduled Deployments tienen:
- **Base fee**: Pequeña tarifa mensual por deployment activo
- **Compute Units**: Facturados según uso real

**Estimación conservadora**: 
- Con Replit Core ($20/mes), los **$25 en créditos incluidos son más que suficientes** para:
  - ✅ Generación diaria de blogs (51,300 CU/mes)
  - ✅ Tu deployment principal (frontend + backend)
  - ✅ Otros servicios y workflows

**Conclusión**: Con el plan Core actual, **NO deberías pagar costos adicionales** por la generación automática diaria de blogs.

---

## 🔄 Configuración del Refresh Semanal (Opcional)

### Paso 1: Crear Segundo Scheduled Deployment

1. En Replit, ve a **Deployments** > **Scheduled**
2. Crea un nuevo scheduled deployment

### Paso 2: Configuración del Schedule

#### **Schedule Description**
```
Every Sunday at 10:00 AM
```

#### **Timezone**
```
America/Panama
```

#### **Cron Expression**
```
0 10 * * 0
```

### Paso 3: Configurar Commands

#### **Build Command**
```bash
npm install
```

#### **Run Command**
```bash
tsx scripts/refresh-old-blogs.ts
```

#### **Job Timeout**
```
300 seconds (5 minutos)
```

### Beneficios del Refresh Semanal

- ✅ Mejora señales de "frescura" para Google
- ✅ Actualiza años desactualizados en el contenido
- ✅ Añade nota de última actualización
- ✅ Bajo costo (solo 2 blogs por semana)

---

## 📍 Enlaces de Blogs Automatizados

### Dominios Disponibles

Los blogs SEO se generan diariamente y están disponibles en **ambos dominios**:

#### 🌐 **Dominio Principal: GrupoTranservica.com**
```
https://grupotranservica.com/seo-blog
```

#### 🌐 **Dominio Secundario: Transervica.net**
```
https://transervica.net/seo-blog
```

### Últimos Blogs Generados Automáticamente

Los blogs se generan con slugs automáticos basados en keywords geográficos de Venezuela. Ejemplos de URLs en **ambos dominios**:

#### GrupoTranservica.com:
1. `https://grupotranservica.com/seo-blog/transporte-petrolero-caracas`
2. `https://grupotranservica.com/seo-blog/lowboy-caracas`
3. `https://grupotranservica.com/seo-blog/sector-petrolero-venezuela`
4. `https://grupotranservica.com/seo-blog/precio-transporte-punto-fijo`

#### Transervica.net:
1. `https://transervica.net/seo-blog/transporte-petrolero-caracas`
2. `https://transervica.net/seo-blog/lowboy-caracas`
3. `https://transervica.net/seo-blog/sector-petrolero-venezuela`
4. `https://transervica.net/seo-blog/precio-transporte-punto-fijo`

### API Endpoints

**GrupoTranservica.com:**
```
GET https://grupotranservica.com/api/seo-blogs
GET https://grupotranservica.com/api/sitemap.xml
```

**Transervica.net:**
```
GET https://transervica.net/api/seo-blogs
GET https://transervica.net/api/sitemap.xml
```

---

## 🔍 Monitoreo y Logs

### Ver Logs de Ejecución

1. En Replit, ve a **Deployments**
2. Selecciona tu **Scheduled Deployment**
3. Haz clic en la pestaña **"Logs"**
4. Verás el output completo de cada ejecución, incluyendo:
   - ✅ Blogs creados
   - ✅ Títulos y slugs
   - ✅ Número de imágenes
   - ✅ Errores (si los hay)

### Horario de Ejecución

Los blogs se generan automáticamente:
- ⏰ **Hora**: 6:30 AM
- 🌎 **Zona horaria**: America/Panama (UTC-5)
- 📅 **Frecuencia**: Todos los días

### Ejecución Manual

Si necesitas generar blogs manualmente sin esperar al scheduled run:

1. En tu proyecto Replit, abre la terminal
2. Ejecuta:
```bash
tsx scripts/generate-daily-blogs.ts
```

---

## 📊 Características de los Blogs Generados

Cada blog generado automáticamente incluye:

✅ **Mínimo 3 imágenes** (Pexels con fallback a otros proveedores)  
✅ **Exactamente 3 CTAs** con información de contacto  
✅ **Formulario de contacto** integrado  
✅ **Contacto visible** (3 teléfonos, 2 emails, WhatsApp)  
✅ **Enlaces internos** a artículos relacionados  
✅ **Optimización SEO** completa (meta tags, keywords, schema.org)  
✅ **Contenido bilingüe** (Español + English)  
✅ **Geo-targeting** Venezuela  

---

## 🛠️ Troubleshooting

### Error: "DATABASE_URL not configured"
- Verifica que el secret `DATABASE_URL` esté configurado en Deployment secrets

### Error: "OPENROUTER_API_KEY not configured"
- Verifica que el secret `OPENROUTER_API_KEY` esté configurado en Deployment secrets

### Timeout después de 600 segundos
- Aumenta el **Job timeout** en la configuración del Scheduled Deployment

### No se ejecuta a la hora programada
- Verifica que la **timezone** esté configurada como `America/Panama`
- Revisa la **cron expression** sea `30 6 * * *`

---

## 📝 Notas Importantes

1. **No elimines** el directorio `server/lib/blogCron.ts` - aunque ya no se usa en el servidor, se mantiene como referencia
2. **El script** `scripts/generate-daily-blogs.ts` es independiente y puede ejecutarse desde cualquier lugar
3. **Los blogs generados** se guardan directamente en PostgreSQL (producción)
4. **La base de datos** usada es la misma del deployment principal

---

## ✨ Ventajas de Scheduled Deployment vs Cron Job

| Característica | Cron Job (anterior) | Scheduled Deployment (nuevo) |
|----------------|---------------------|------------------------------|
| **Servidor principal** | Debe estar corriendo 24/7 | Independiente |
| **Recursos** | Consume recursos constantemente | Solo consume durante ejecución |
| **Logs** | Mezclados con logs del servidor | Logs dedicados y organizados |
| **Escalabilidad** | Limitada | Escalable automáticamente |
| **Costos** | Cobra por servidor corriendo | Cobra solo por tiempo de ejecución |
| **Confiabilidad** | Depende del servidor | Infraestructura de Replit |

---

¿Necesitas ayuda con la configuración? Revisa este documento o consulta la [documentación oficial de Replit Deployments](https://docs.replit.com/deployments/scheduled-deployments).
