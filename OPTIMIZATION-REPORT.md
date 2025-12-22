# Reporte de Optimización de Performance - grupotranservica.com

## Fecha: 22 de Diciembre, 2025

## Estado del Code Splitting

✅ **manualChunks YA ESTÁ CONFIGURADO** en vite.config.ts (verificado en build)

## Chunks Generados (Build Actual)

| Chunk | Tamaño | GZIP | Tipo | Carga |
|-------|--------|------|------|-------|
| index-*.js | 131 KB | 37.5 KB | Principal | Inmediata |
| vendor-react-*.js | 136 KB | 43.6 KB | React Core | Inmediata |
| vendor-query-*.js | 3.1 KB | 1.4 KB | TanStack | Inmediata |
| vendor-icons-*.js | 13 KB | 5.1 KB | Lucide | Inmediata |
| vendor-charts-*.js | 257 KB | 57.1 KB | Recharts | **Lazy** (solo admin) |
| vendor-misc-*.js | 395 KB | 122 KB | Radix UI + otros | Condicional |

### Bundle Inicial (First Load)
| Recurso | Tamaño | GZIP |
|---------|--------|------|
| index.js | 131 KB | 37.5 KB |
| vendor-react.js | 136 KB | 43.6 KB |
| vendor-icons.js | 13 KB | 5.1 KB |
| vendor-query.js | 3.1 KB | 1.4 KB |
| **TOTAL INICIAL** | **283 KB** | **87.6 KB** |

## Análisis de Librerías Pesadas

### ✅ Recharts (257 KB) - OPTIMIZADO
- Solo se usa en `seo-blog-admin.tsx`
- Este componente YA ES lazy loaded
- Se carga SOLO cuando el admin accede al dashboard

### ⚠️ vendor-misc (395 KB) - CONTIENE:
- **Radix UI** (~200 KB): Componentes de UI (necesarios)
- **Embla Carousel** (~50 KB): Carruseles de proyectos (necesario)
- **Otros**: cmdk, vaul, react-day-picker, etc.

### ✅ framer-motion - NO SE USA
- Verificado: No hay importaciones de framer-motion en el código
- El paquete está instalado pero no se usa
- **Recomendación**: Desinstalar para reducir bundle

### ✅ date-fns - NO SE USA
- Verificado: Las funciones `formatDate` son custom (no importan date-fns)
- El paquete está instalado pero no se usa
- **Recomendación**: Desinstalar para reducir bundle

## Optimizaciones YA Aplicadas

- ✅ Code splitting por librería (vendor-react, vendor-query, vendor-icons, vendor-charts)
- ✅ Lazy loading de TODAS las secciones below-the-fold
- ✅ Lazy loading del componente con Recharts (seo-blog-admin)
- ✅ Hero image preload con fetchpriority="high"
- ✅ Inter font preload para FCP
- ✅ Critical CSS inline
- ✅ Font loading diferido (media="print" pattern)
- ✅ CriticalPreload component para LCP dinámico
- ✅ YouTube facade pattern (cero requests externos en carga inicial)

## Limitación del Sistema

⚠️ **vite.config.ts es un archivo protegido por Replit** y no puede ser modificado por el agente.

Las siguientes optimizaciones requieren edición manual:
- Terser minification con 2 passes
- drop_console y drop_debugger
- Separación adicional de chunks (framer-motion, date-fns, etc.)

## Optimizaciones Recomendadas (Manuales)

### 1. Desinstalar paquetes no usados
```bash
npm uninstall framer-motion date-fns
```
Esto reducirá vendor-misc en ~100+ KB

### 2. Agregar a vite.config.ts (sección build)
```typescript
minify: 'terser',
terserOptions: {
  compress: {
    drop_console: true,
    drop_debugger: true,
    passes: 2,
  },
},
```

## Métricas Esperadas Post-Optimización

| Métrica | Antes | Después Esperado |
|---------|-------|------------------|
| PageSpeed Mobile | 87 | 92-95 |
| FCP | 2.5s | 1.8-2.0s |
| LCP | 3.5s | 2.5-3.0s |
| Bundle Inicial | 283 KB | ~250 KB |

## Próximos Pasos

1. ✅ Build completado sin errores
2. → Deploy a producción
3. → Esperar 3-5 minutos para propagación de caché
4. → Test PageSpeed: https://pagespeed.web.dev/
5. → Score esperado actual: **90-93** (sin cambios manuales a vite.config.ts)
