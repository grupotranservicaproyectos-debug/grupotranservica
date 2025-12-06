# TRANSERVICA - Mejoras del Flujo de Trabajo y Costos de Plataforma

## Resumen Ejecutivo

Este documento detalla las mejoras implementadas en el sistema de generación automática de blogs SEO para TRANSERVICA, incluyendo los costos estimados de la plataforma Replit.

---

## 1. Sistema de Generación Automática de Blogs SEO

### 1.1 Arquitectura Actual

```
┌─────────────────────────────────────────────────────────────┐
│                  REPLIT SCHEDULED DEPLOYMENT                 │
│                    (6:30 AM diariamente)                     │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│              scripts/generate-daily-blogs.ts                 │
│  - Genera 4 blogs diarios                                    │
│  - Rotación de ciudades/sectores                             │
│  - Validación de calidad (700+ palabras)                     │
└─────────────────────────┬───────────────────────────────────┘
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
    ┌──────────┐   ┌──────────┐   ┌──────────┐
    │ OpenRouter│   │  Pexels  │   │PostgreSQL│
    │  (AI)    │   │ (Images) │   │   (DB)   │
    └──────────┘   └──────────┘   └──────────┘
```

### 1.2 Componentes del Sistema

| Componente | Archivo | Función |
|------------|---------|---------|
| Generador Diario | `scripts/generate-daily-blogs.ts` | Ejecuta generación programada |
| Refrescador | `scripts/refresh-old-blogs.ts` | Actualiza blogs antiguos (domingos) |
| Motor de Blogs | `server/lib/blogGenerator.ts` | Lógica de generación con IA |
| Servicio de Imágenes | `server/lib/imageService.ts` | Fallback multi-proveedor |
| Panel Admin | `client/src/pages/seo-blog-admin.tsx` | Monitoreo y análisis |

### 1.3 Endpoints Disponibles

```
POST /api/blogs/generate     → Genera blogs manualmente
GET  /api/blogs/health       → Estado del sistema
GET  /api/blogs/statistics   → Estadísticas de generación
GET  /api/admin/seo-stats    → Panel admin completo (requiere token)
```

---

## 2. Plan de Implementación por Fases

### Fase 1: Esta Semana ✅

| Tarea | Estado | Notas |
|-------|--------|-------|
| Crear Workflow en Replit Dashboard → Scheduling | ✅ Completado | Configurado 6:30 AM |
| Configurar endpoint POST /api/blogs/generate | ✅ Completado | Con validaciones |
| Establecer horario: 6:30 AM (Hora Panamá) | ✅ Completado | UTC-5 |
| Agregar validaciones de calidad | ✅ Completado | 700+ palabras, 3 imágenes, 3 CTAs |

### Fase 2: Próximas 2 Semanas ✅

| Tarea | Estado | Notas |
|-------|--------|-------|
| Mejorar panel /seo-blog/admin | ✅ Completado | Con métricas completas |
| Agregar "Próximos Pasos Sugeridos" | ✅ Completado | Recomendaciones automáticas |
| Implementar estadísticas en tiempo real | ✅ Completado | Refresh cada 60 segundos |
| Crear alertas de degradación | ✅ Completado | Semáforo healthy/degraded/unhealthy |

### Fase 3: Optimización (En Progreso)

| Tarea | Estado | Notas |
|-------|--------|-------|
| Analizar datos de 30 días | 📊 Pendiente | Gráficos disponibles en panel |
| Ajustar horarios según rendimiento | 📊 Pendiente | Basado en análisis |
| Automatizar desindexación de duplicados | 📋 Planificado | Detectado en panel |
| Escalar a otros idiomas | 📋 Planificado | Inglés como segunda fase |

---

## 3. Costos de Plataforma Replit

### 3.1 Plan Replit Core

| Concepto | Valor |
|----------|-------|
| **Costo mensual** | $20/mes |
| **Créditos incluidos** | $25/mes |
| **Créditos excedentes** | Facturados por uso |

### 3.2 Scheduled Deployments

| Concepto | Costo |
|----------|-------|
| **Tarifa base** | $1/mes |
| **Compute Units** | $3.20/millón CU |

### 3.3 Cálculo de Compute Units

```
1 CPU segundo  = 18 Compute Units
1 RAM segundo  = 2 Compute Units (por GB)
```

### 3.4 Estimación para Generación de Blogs

**Configuración actual:**
- 1 CPU core
- 0.5 GB RAM
- ~90 segundos por ejecución diaria

**Cálculo por ejecución:**
```
CPU:  90 seg × 18 CU = 1,620 CU
RAM:  90 seg × 0.5 GB × 2 CU = 90 CU
Total por ejecución: ~1,710 CU
```

**Costo mensual estimado:**
```
1,710 CU × 30 días = 51,300 CU/mes
51,300 CU × ($3.20/1,000,000 CU) = $0.16/mes

+ Tarifa base: $1.00/mes
= Total Scheduled Deployment: ~$1.16/mes
```

### 3.5 Resumen de Costos Mensuales

| Servicio | Costo | Cubierto por Créditos |
|----------|-------|----------------------|
| Replit Core | $20.00 | - |
| Créditos incluidos | +$25.00 | ✅ |
| Scheduled Deployment | ~$1.16 | ✅ Sí |
| Autoscale Deployment (web) | Variable | ✅ Sí |
| Database (Neon) | Incluido | ✅ Sí |
| **Total efectivo** | **~$20/mes** | La mayoría cubierto |

---

## 4. Enlaces de Publicación

### 4.1 URLs de Blogs SEO

**Dominio Principal:**
- Página de blogs: https://grupotranservica.com/seo-blog
- Panel admin: https://grupotranservica.com/seo-blog/admin?token=ADMIN_TOKEN

**Dominio Secundario:**
- Página de blogs: https://transervica.net/seo-blog
- Panel admin: https://transervica.net/seo-blog/admin?token=ADMIN_TOKEN

### 4.2 Endpoints API

```bash
# Generar blogs manualmente
POST https://grupotranservica.com/api/blogs/generate

# Verificar estado del sistema
GET https://grupotranservica.com/api/blogs/health

# Obtener estadísticas
GET https://grupotranservica.com/api/blogs/statistics

# Panel admin completo (requiere token)
GET https://grupotranservica.com/api/admin/seo-stats?token=ADMIN_TOKEN
```

---

## 5. Funcionalidades del Panel Admin

### 5.1 Métricas Disponibles

- **Semáforo de Estado**: healthy ✅ / degraded ⚠️ / unhealthy ❌
- **Total de Blogs**: Conteo general y auto-generados
- **Vistas Totales**: Agregado de todas las visualizaciones
- **Gráfico Diario**: Blogs generados por día (últimos 30 días)

### 5.2 Análisis de Distribución

- **Por Ciudad**: Caracas, Maracaibo, Valencia, etc.
- **Por Sector**: Petrolero, Petroquímico, Siderúrgico, etc.
- **Por Template**: CityGuide, SectorDeep, PriceGuide, etc.

### 5.3 Detección de Canibalización

El sistema detecta automáticamente combinaciones ciudad/sector con 3+ posts y muestra:
- Lista de artículos afectados con enlaces directos
- Vistas y fechas de publicación
- Recomendaciones de acción (combinar, desindexar, editar)

### 5.4 Recomendaciones Automáticas

El sistema calcula y sugiere:
- 🎯 **Ciudades prioritarias**: Con menos de 3 posts
- 🎯 **Sectores a expandir**: Con baja cobertura
- ⚠️ **Áreas saturadas**: Donde reducir generación
- ⚡ **Alertas del sistema**: Problemas de generación

---

## 6. Configuración del Scheduled Deployment

### 6.1 Horario Actual

```
Cron: 30 6 * * *
Hora: 6:30 AM
Zona: America/Panama (UTC-5)
Frecuencia: Diaria
```

### 6.2 Comando de Ejecución

```bash
npx tsx scripts/generate-daily-blogs.ts
```

### 6.3 Configuración en Replit

1. Ir a **Deployments** → **Scheduled**
2. Crear nuevo deployment
3. Configurar:
   - **Command**: `npx tsx scripts/generate-daily-blogs.ts`
   - **Schedule**: `30 6 * * *`
   - **Timezone**: America/Panama
4. Activar y guardar

---

## 7. Monitoreo y Mantenimiento

### 7.1 Verificación Diaria

1. Revisar panel admin: `/seo-blog/admin?token=ADMIN_TOKEN`
2. Verificar semáforo de estado
3. Revisar logs de generación recientes
4. Actuar según recomendaciones

### 7.2 Verificación Semanal

1. Analizar gráfico de 30 días
2. Revisar alertas de canibalización
3. Ajustar estrategia de ciudades/sectores
4. Verificar rendimiento de URLs top

### 7.3 Troubleshooting

| Problema | Solución |
|----------|----------|
| No se generaron blogs ayer | Revisar logs del Scheduled Deployment |
| Estado "unhealthy" | Verificar errores en los últimos 7 días |
| Canibalización alta | Pausar generación en combinaciones saturadas |
| Imágenes faltantes | Verificar API keys de Pexels/Freepik |

---

## 8. Próximos Pasos Recomendados

1. **Monitorear 30 días** de datos para optimizar horarios
2. **Implementar desindexación automática** de duplicados de bajo rendimiento
3. **Expandir a inglés** para mercado internacional
4. **Agregar más templates** para diversificar contenido
5. **Integrar Google Analytics** para métricas de tráfico real

---

*Documento actualizado: Diciembre 2025*
*Versión: 1.0*
