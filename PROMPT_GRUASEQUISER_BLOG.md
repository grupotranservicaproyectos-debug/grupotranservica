# 🚛 PROMPT COMPLETO: Sistema de Blogs Automatizados para GruasEquiser.com

## 📋 CONTEXTO DEL PROYECTO

Necesitas clonar el sistema completo de blogs automatizados de **TRANSERVICA** (grupotranservica.com) al sitio web de **GruasEquiser** (gruasequiser.com), manteniendo toda la funcionalidad, diseño visual y sistema de generación automática, pero adaptando los colores corporativos, información de la empresa y contenido específico de GruasEquiser.

### URLs de Referencia (TRANSERVICA):
- **Blog principal**: https://grupotranservica.com/blog?lang=es
- **Blog SEO automatizado**: https://grupotranservica.com/seo-blog
- **Artículo individual**: https://grupotranservica.com/seo-blog/transporte-petrolero-caracas

### URLs Objetivo (GruasEquiser):
- **Blog principal**: https://gruasequiser.com/blog
- **Artículo individual**: https://gruasequiser.com/es/blog/:slug (ejemplo: `/es/blog/gruas-proyectos-infraestructura-vial`)

---

## 🎯 OBJETIVOS PRINCIPALES

1. ✅ **Replicar visualmente** el diseño y layout de los blogs de TRANSERVICA
2. ✅ **Mantener funcionalidad** de generación automática con IA (OpenRouter)
3. ✅ **Adaptar colores corporativos** de GruasEquiser (NUNCA usar verde #155d29 de TRANSERVICA)
4. ✅ **Preservar información** existente de GruasEquiser
5. ✅ **Implementar APIs** completas (OpenRouter, Pexels, Freepik, Shutterstock, Unsplash)
6. ✅ **Configurar Scheduled Deployment** para generación diaria automática
7. ✅ **SEO completo** con meta tags dinámicos, sitemap, hreflang, Open Graph
8. ✅ **Sistema bilingüe** (Español/Inglés) con cambio de idioma fluido

---

## 🛠️ STACK TECNOLÓGICO

### Frontend:
- **React 18** + **TypeScript** + **Vite**
- **Wouter** para routing
- **TailwindCSS** para estilos
- **Radix UI** + **shadcn/ui** para componentes
- **TanStack Query** para estado del servidor
- **React Hook Form** + **Zod** para formularios
- **react-helmet-async** para meta tags dinámicos

### Backend:
- **Express.js** + **TypeScript**
- **Drizzle ORM** + **PostgreSQL** (Neon Database)
- **OpenRouter API** para generación de contenido IA
- **Pexels/Freepik/Shutterstock/Unsplash APIs** para imágenes
- **Nodemailer** + **Gmail SMTP** para notificaciones

### Infraestructura:
- **Replit Scheduled Deployment** para generación automática diaria
- **PostgreSQL** para almacenamiento de blogs y contactos
- **Multi-dominio**: blogs disponibles en todos los dominios de GruasEquiser

---

## 🚨 REQUISITOS CRÍTICOS Y MANDATORIOS

### ⚠️ COLORES CORPORATIVOS (CRÍTICO):

**NUNCA USES LOS COLORES DE TRANSERVICA (#155d29, #0f4a21)**

**DEBES investigar y extraer los colores corporativos actuales de GruasEquiser.com:**

1. Visita https://gruasequiser.com
2. Inspecciona el sitio actual para identificar:
   - Color primario principal
   - Color secundario
   - Colores de acentos
   - Gradientes corporativos
3. **Ejemplo típico de empresas de grúas**: amarillo (#FFC107, #FFD700), naranja (#FF9800), negro (#000000), gris oscuro (#333333)
4. Actualiza `client/src/index.css` con los colores correctos:

```css
:root {
  /* GruasEquiser Brand Colors */
  --gruasequiser-primary: #TU_COLOR_AQUI;
  --gruasequiser-secondary: #TU_COLOR_AQUI;
  --gruasequiser-accent: #TU_COLOR_AQUI;
  --gruasequiser-dark: #TU_COLOR_AQUI;
  
  /* Update CSS variables */
  --primary: var(--gruasequiser-primary);
  --primary-foreground: hsl(0, 0%, 100%);
  --accent: var(--gruasequiser-accent);
  
  /* Gradientes corporativos */
  --gradient-primary: linear-gradient(135deg, var(--gruasequiser-primary) 0%, var(--gruasequiser-dark) 100%);
}
```

### 📝 REQUISITOS DE CONTENIDO PARA CADA BLOG AUTOMATIZADO:

**CADA BLOG GENERADO DEBE INCLUIR OBLIGATORIAMENTE:**

1. ✅ **Mínimo 3 imágenes** (1 cover + 2 secundarias)
2. ✅ **Exactamente 3 CTAs** (Call-to-Actions) con información de contacto de GruasEquiser
3. ✅ **Formulario de contacto** integrado en el artículo
4. ✅ **Datos de contacto visibles**: teléfono, email, WhatsApp de GruasEquiser
5. ✅ **Enlaces a artículos relacionados** (internal linking)
6. ✅ **Meta tags completos**: title, description, keywords, Open Graph, Twitter Cards
7. ✅ **Estructura SEO**: H1, H2, H3 correctamente jerarquizados
8. ✅ **Palabras clave localizadas**: ciudades y sectores de Venezuela

### 🔑 APIs Y SECRETS NECESARIOS:

**Debes solicitar al usuario los siguientes secrets:**

```bash
OPENROUTER_API_KEY      # Para generación de contenido IA
PEXELS_API_KEY          # Para imágenes (prioridad 1)
FREEPIK_API_KEY         # Para imágenes (prioridad 2)
SHUTTERSTOCK_CONSUMER_KEY    # Para imágenes (prioridad 3)
SHUTTERSTOCK_CONSUMER_SECRET # Para imágenes (prioridad 3)
UNSPLASH_ACCESS_KEY     # Para imágenes (prioridad 4)
GMAIL_USER              # Para notificaciones email
GMAIL_APP_PASSWORD      # Para SMTP Gmail
DATABASE_URL            # PostgreSQL connection string
```

**Orden de fallback para imágenes:**
1. Pexels (primera opción)
2. Freepik (si Pexels falla)
3. Shutterstock (si Freepik falla)
4. Unsplash (última opción)

---

## 📂 PASO A PASO: IMPLEMENTACIÓN COMPLETA

### FASE 1: PREPARACIÓN Y CONFIGURACIÓN

#### 1.1 Investigar Colores Corporativos de GruasEquiser

```bash
# Visita https://gruasequiser.com y extrae los colores corporativos
# Documenta los colores en un archivo temporal
```

#### 1.2 Actualizar Schema de Base de Datos

**Archivo: `shared/schema.ts`**

Asegúrate de que existe la tabla `blogs` con todos los campos necesarios:

```typescript
export const blogs = pgTable("blogs", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  keywords: text("keywords").array(),
  city: text("city"),
  sector: text("sector"),
  template: text("template"),
  coverImage: text("cover_image"),
  secondaryImages: text("secondary_images").array(),
  ogImage: text("og_image"),
  published: text("published").notNull().default("true"),
  autoGenerated: text("auto_generated").notNull().default("false"),
  views: integer("views").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  publishedAt: timestamp("published_at").defaultNow(),
});
```

#### 1.3 Ejecutar Migración de Base de Datos

```bash
npm run db:push
```

Si hay advertencias de pérdida de datos:

```bash
npm run db:push --force
```

---

### FASE 2: BACKEND - SERVICIOS Y LÓGICA DE NEGOCIO

#### 2.1 Crear Servicio de Imágenes Multi-Provider

**Archivo: `server/lib/imageService.ts`**

Copia el servicio completo de TRANSERVICA que incluye:
- `PexelsImageService`
- `FreepikImageService`
- `ShutterstockImageService`
- `UnsplashImageService`
- `MultiProviderImageService` (orquestador con fallback)

**Importante**: Este servicio ya está implementado en TRANSERVICA, cópialo directamente.

#### 2.2 Crear Keywords SEO de GruasEquiser

**Archivo: `server/lib/seoKeywords.ts`**

Adapta las keywords al negocio de GruasEquiser (grúas, servicios de izaje, rescate vehicular):

```typescript
export const CITIES = [
  'Caracas',
  'Maracaibo',
  'Valencia',
  'Maracay',
  'Barquisimeto',
  'Barcelona',
  'Puerto Ordaz',
  'Punto Fijo',
];

export const SECTORS = [
  'Infraestructura Vial',
  'Construcción',
  'Industrial',
  'Rescate Vehicular',
  'Transporte Pesado',
  'Petrolero',
];

export const SEO_KEYWORDS = {
  tier1: [
    'servicio de grúas venezuela',
    'grúas industriales venezuela',
    'izaje especializado venezuela',
    'rescate vehicular venezuela',
    'grúas para construcción venezuela',
    'alquiler de grúas venezuela',
    'servicios de izaje venezuela',
    'grúas telescópicas venezuela',
    'grúas hidráulicas venezuela',
    'empresa de grúas venezuela',
  ],

  caracas: [
    'servicio de grúas caracas',
    'grúas industriales caracas',
    'rescate vehicular caracas',
    'alquiler grúas caracas',
    'izaje caracas',
    'grúas telescópicas caracas',
    'grúas construcción caracas',
  ],
  
  // ... continuar con todas las ciudades
};
```

#### 2.3 Crear Generador de Blogs con IA

**Archivo: `server/lib/blogGenerator.ts`**

Este archivo debe:
1. Conectarse a OpenRouter API (modelo: `deepseek/deepseek-chat`)
2. Generar contenido optimizado para SEO
3. Incluir obligatoriamente:
   - 3 CTAs con datos de contacto de GruasEquiser
   - Formulario de contacto integrado
   - Enlaces a artículos relacionados
   - Datos de contacto visibles (teléfono, email, WhatsApp)
4. Solicitar imágenes al `MultiProviderImageService`
5. Validar que tenga mínimo 3 imágenes antes de guardar

**Template de prompt para OpenRouter:**

```typescript
const promptTemplate = `
Eres un experto en contenido SEO y especialista en servicios de grúas e izaje industrial.

Crea un artículo de blog optimizado para SEO sobre: "${keyword}"

INFORMACIÓN DE LA EMPRESA (GruasEquiser):
- Nombre: GruasEquiser, C.A.
- Especialidad: Servicios de grúas, izaje industrial, rescate vehicular
- Ubicación: ${city}, Venezuela
- Sector: ${sector}
- Teléfono: [INSERTAR TELÉFONO REAL DE GRUASEQUISER]
- Email: [INSERTAR EMAIL REAL DE GRUASEQUISER]
- WhatsApp: [INSERTAR WHATSAPP REAL DE GRUASEQUISER]

REQUISITOS OBLIGATORIOS:

1. **Estructura del Artículo**:
   - Título atractivo y optimizado para SEO (H1)
   - Introducción convincente (150-200 palabras)
   - 5-7 secciones con subtítulos (H2)
   - Conclusión con llamado a la acción
   - Longitud total: 1500-2000 palabras

2. **CTAs (Call-to-Actions) - OBLIGATORIO 3 CTAs**:
   Debes incluir EXACTAMENTE 3 CTAs distribuidos en el artículo:
   
   CTA 1 (después de la introducción):
   <div class="cta-box">
     <h3>🚛 ¿Necesitas Servicio de Grúas Profesional?</h3>
     <p>En GruasEquiser contamos con más de [X años] de experiencia en ${sector}. Contáctanos ahora:</p>
     <ul>
       <li>📞 Teléfono: [TELÉFONO]</li>
       <li>📧 Email: [EMAIL]</li>
       <li>💬 WhatsApp: [WHATSAPP]</li>
     </ul>
     <a href="#contact-form" class="cta-button">Solicitar Cotización Gratis</a>
   </div>

   CTA 2 (mitad del artículo):
   [Similar estructura con diferente mensaje]

   CTA 3 (antes de la conclusión):
   [Similar estructura con diferente mensaje]

3. **Formulario de Contacto** (al final del artículo):
   <div id="contact-form" class="contact-form-section">
     <h2>Solicita una Cotización Sin Compromiso</h2>
     <p>Completa el formulario y te responderemos en menos de 24 horas:</p>
     [El formulario se insertará automáticamente aquí]
   </div>

4. **Datos de Contacto Visibles**:
   Incluye un bloque de contacto visible en el sidebar o footer del artículo:
   <div class="contact-info">
     <h3>Contáctanos Directamente</h3>
     <p>📞 <strong>Teléfono:</strong> [TELÉFONO]</p>
     <p>📧 <strong>Email:</strong> [EMAIL]</p>
     <p>💬 <strong>WhatsApp:</strong> [WHATSAPP]</p>
     <p>📍 <strong>Ubicación:</strong> ${city}, Venezuela</p>
   </div>

5. **Enlaces Internos**:
   Incluye al menos 3 enlaces a artículos relacionados:
   - Formato: <a href="/es/blog/[slug-relacionado]">[Texto ancla]</a>
   - Ejemplo: <a href="/es/blog/gruas-telescopicas-caracas">Conoce nuestras grúas telescópicas</a>

6. **Keywords SEO**:
   - Keyword principal: "${keyword}"
   - Keywords secundarias: ${relatedKeywords.join(', ')}
   - Densidad de keyword: 1-2%
   - Incluir variaciones naturales

7. **Meta Tags**:
   - Meta Title (50-60 caracteres): optimizado para "${keyword}"
   - Meta Description (150-160 caracteres): incluir CTA
   - Keywords: 8-12 palabras clave relevantes

8. **Formato HTML**:
   - Usa etiquetas semánticas: <article>, <section>, <aside>
   - Imágenes con ALT descriptivos (se insertarán automáticamente)
   - Listas numeradas y con viñetas donde sea apropiado
   - Negritas y énfasis en puntos importantes

IMPORTANTE: 
- Habla en tono profesional pero accesible
- Usa ejemplos específicos de ${city} y ${sector}
- Menciona casos de éxito de GruasEquiser
- Incluye datos técnicos relevantes (capacidades de grúas, certificaciones)
- Mantén el foco en los beneficios para el cliente

Genera el artículo completo en formato HTML limpio.
`;
```

#### 2.4 Crear API Routes

**Archivo: `server/routes.ts`**

Añade los siguientes endpoints:

```typescript
// GET /api/blogs - Listar todos los blogs (con filtros opcionales)
app.get('/api/blogs', async (req, res) => {
  try {
    const { city, sector, published, limit } = req.query;
    
    let query = db.select().from(blogs);
    
    const conditions = [];
    if (city) conditions.push(eq(blogs.city, city as string));
    if (sector) conditions.push(eq(blogs.sector, sector as string));
    if (published) conditions.push(eq(blogs.published, published as string));
    
    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }
    
    query = query.orderBy(desc(blogs.publishedAt));
    
    if (limit) {
      query = query.limit(parseInt(limit as string));
    }
    
    const result = await query;
    
    res.json({
      success: true,
      data: result,
      total: result.length
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Error al obtener blogs' 
    });
  }
});

// GET /api/blogs/:slug - Obtener blog por slug
app.get('/api/blogs/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    
    const blog = await db
      .select()
      .from(blogs)
      .where(eq(blogs.slug, slug))
      .limit(1);
    
    if (blog.length === 0) {
      return res.status(404).json({ 
        success: false, 
        error: 'Blog no encontrado' 
      });
    }
    
    // Incrementar contador de vistas
    await db
      .update(blogs)
      .set({ views: blog[0].views + 1 })
      .where(eq(blogs.slug, slug));
    
    res.json({
      success: true,
      data: blog[0]
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Error al obtener blog' 
    });
  }
});

// GET /api/sitemap.xml - Sitemap dinámico
app.get('/api/sitemap.xml', async (req, res) => {
  try {
    const allBlogs = await db
      .select({ slug: blogs.slug, updatedAt: blogs.updatedAt })
      .from(blogs)
      .where(eq(blogs.published, 'true'))
      .orderBy(desc(blogs.updatedAt));
    
    const domain = 'https://gruasequiser.com'; // Actualizar con dominio real
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${domain}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${domain}/blog</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  ${allBlogs.map(blog => `
  <url>
    <loc>${domain}/es/blog/${blog.slug}</loc>
    <lastmod>${new Date(blog.updatedAt).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="es" href="${domain}/es/blog/${blog.slug}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${domain}/en/blog/${blog.slug}"/>
  </url>`).join('')}
</urlset>`;
    
    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).send('Error generating sitemap');
  }
});
```

---

### FASE 3: FRONTEND - COMPONENTES Y PÁGINAS

#### 3.1 Crear Componente SEO Reutilizable

**Archivo: `client/src/components/seo.tsx`**

```typescript
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export default function SEO({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = 'https://gruasequiser.com/og-image.jpg', // Actualizar con imagen real
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'GruasEquiser',
  section,
  tags = []
}: SEOProps) {
  const domain = 'https://gruasequiser.com';
  const fullTitle = `${title} | GruasEquiser`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={`${domain}${canonicalUrl}`} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={`${domain}${canonicalUrl}`} />}
      <meta property="og:site_name" content="GruasEquiser" />
      
      {/* Article Meta (solo para artículos) */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Hreflang para bilingüe */}
      {canonicalUrl && (
        <>
          <link rel="alternate" hrefLang="es" href={`${domain}/es${canonicalUrl}`} />
          <link rel="alternate" hrefLang="en" href={`${domain}/en${canonicalUrl}`} />
          <link rel="alternate" hrefLang="x-default" href={`${domain}${canonicalUrl}`} />
        </>
      )}
    </Helmet>
  );
}
```

#### 3.2 Crear Página de Lista de Blogs

**Archivo: `client/src/pages/blog.tsx`**

Copia la estructura visual de `seo-blog.tsx` de TRANSERVICA, pero:
1. Reemplaza todos los colores verdes por los colores de GruasEquiser
2. Actualiza textos y branding
3. Mantén la funcionalidad de búsqueda, filtros y paginación
4. Añade el componente SEO

```typescript
import SEO from '@/components/seo';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-[TU_COLOR]/30">
      <SEO
        title="Blog de Servicios de Grúas e Izaje"
        description="Guías especializadas sobre servicios de grúas, izaje industrial y rescate vehicular en Venezuela"
        keywords={['grúas venezuela', 'izaje industrial', 'rescate vehicular', 'grúas caracas']}
        canonicalUrl="/blog"
        type="website"
      />
      
      <BlogHeader showBackButton={false} />
      
      {/* Hero Section - Usar colores de GruasEquiser */}
      <section className="bg-gradient-to-r from-[TU_COLOR_PRIMARY] to-[TU_COLOR_DARK] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="page-title">
              Blog de Grúas y Servicios de Izaje
            </h1>
            <p className="text-lg lg:text-xl text-white/90">
              Guías especializadas sobre servicios de grúas en Venezuela
            </p>
          </div>
        </div>
      </section>
      
      {/* Resto del código... copiar estructura de TRANSERVICA */}
    </div>
  );
}
```

#### 3.3 Crear Página de Artículo Individual

**Archivo: `client/src/pages/blog-article.tsx`**

Copia la estructura de `seo-blog-article.tsx` de TRANSERVICA, incluyendo:
1. Diseño de artículo con sidebar
2. Breadcrumbs de navegación
3. Tabla de contenidos automática
4. Formulario de contacto integrado
5. Artículos relacionados
6. Share buttons
7. Schema markup para Article

```typescript
import { useRoute } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import SEO from '@/components/seo';
import BlogContactForm from '@/components/blog-contact-form';
import type { Blog } from '@shared/schema';

export default function BlogArticlePage() {
  const [, params] = useRoute('/es/blog/:slug');
  const slug = params?.slug;
  
  const { data: blog, isLoading } = useQuery<Blog>({
    queryKey: ['/api/blogs', slug],
    enabled: !!slug,
  });
  
  if (!blog) return null;
  
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={blog.metaTitle || blog.title}
        description={blog.metaDescription || blog.excerpt || ''}
        keywords={blog.keywords || []}
        canonicalUrl={`/es/blog/${blog.slug}`}
        ogImage={blog.ogImage || blog.coverImage || undefined}
        type="article"
        publishedTime={blog.publishedAt?.toISOString()}
        modifiedTime={blog.updatedAt?.toISOString()}
        section={blog.sector || undefined}
        tags={blog.keywords || []}
      />
      
      {/* Article Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": blog.title,
          "image": blog.coverImage,
          "author": {
            "@type": "Organization",
            "name": "GruasEquiser"
          },
          "publisher": {
            "@type": "Organization",
            "name": "GruasEquiser",
            "logo": {
              "@type": "ImageObject",
              "url": "https://gruasequiser.com/logo.png"
            }
          },
          "datePublished": blog.publishedAt?.toISOString(),
          "dateModified": blog.updatedAt?.toISOString(),
          "description": blog.excerpt
        })}
      </script>
      
      {/* Resto del layout del artículo */}
      <article className="container mx-auto px-4 py-12">
        {/* Cover Image */}
        {blog.coverImage && (
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-[400px] object-cover rounded-xl mb-8"
            loading="eager"
          />
        )}
        
        {/* Content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        
        {/* Formulario de Contacto */}
        <div id="contact-form" className="mt-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-6">Solicita una Cotización</h2>
          <BlogContactForm />
        </div>
        
        {/* Artículos Relacionados */}
        {/* ... */}
      </article>
    </div>
  );
}
```

#### 3.4 Actualizar Colores en CSS

**Archivo: `client/src/index.css`**

```css
:root {
  /* GruasEquiser Brand Colors - ACTUALIZAR CON COLORES REALES */
  --gruasequiser-primary: #FFC107; /* Ejemplo: amarillo */
  --gruasequiser-secondary: #FF9800; /* Ejemplo: naranja */
  --gruasequiser-dark: #333333; /* Ejemplo: gris oscuro */
  --gruasequiser-accent: #FFD700; /* Ejemplo: dorado */
  
  /* Override primary colors */
  --primary: var(--gruasequiser-primary);
  --primary-foreground: hsl(0, 0%, 0%);
  --accent: var(--gruasequiser-accent);
  
  /* Gradientes */
  --gradient-primary: linear-gradient(135deg, var(--gruasequiser-primary) 0%, var(--gruasequiser-secondary) 100%);
}

/* Utility classes específicas */
.bg-gruasequiser-primary {
  background-color: var(--gruasequiser-primary);
}

.text-gruasequiser-primary {
  color: var(--gruasequiser-primary);
}

.border-gruasequiser-primary {
  border-color: var(--gruasequiser-primary);
}
```

---

### FASE 4: AUTOMATIZACIÓN CON SCHEDULED DEPLOYMENT

#### 4.1 Crear Script de Generación Diaria

**Archivo: `scripts/generate-daily-blogs.ts`**

```typescript
import { neonConfig, Pool } from '@neondatabase/serverless';
import ws from 'ws';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { blogs } from '../shared/schema';
import { generateBlogPost } from '../server/lib/blogGenerator';
import { CITIES, SECTORS } from '../server/lib/seoKeywords';

neonConfig.webSocketConstructor = ws;

async function main() {
  console.log('🚀 Iniciando generación automática de blogs SEO...');
  console.log(`📅 Fecha: ${new Date().toLocaleString('es-PA', { timeZone: 'America/Panama' })}`);
  console.log('⏰ Zona horaria: America/Panama (6:30 AM diariamente)\n');

  try {
    // Conectar a la base de datos
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error('DATABASE_URL no configurada');
    }

    const pool = new Pool({ connectionString });
    const db = drizzle(pool);

    // Generar 2 blogs diarios (1 español + 1 inglés, o según estrategia)
    const numberOfBlogs = 2;
    const createdBlogs = [];

    for (let i = 0; i < numberOfBlogs; i++) {
      console.log(`\n📝 Generando blog ${i + 1}/${numberOfBlogs}...`);
      
      // Seleccionar ciudad y sector aleatorios
      const randomCity = CITIES[Math.floor(Math.random() * CITIES.length)];
      const randomSector = SECTORS[Math.floor(Math.random() * SECTORS.length)];
      
      console.log(`   Ciudad: ${randomCity}`);
      console.log(`   Sector: ${randomSector}`);
      
      try {
        const blogPost = await generateBlogPost(randomCity, randomSector);
        
        // Validar requisitos obligatorios
        const imageCount = 1 + (blogPost.secondaryImages?.length || 0);
        if (imageCount < 3) {
          console.error(`❌ Blog rechazado: solo tiene ${imageCount} imágenes (mínimo 3)`);
          continue;
        }
        
        const ctaCount = (blogPost.content.match(/cta-box/g) || []).length;
        if (ctaCount !== 3) {
          console.error(`❌ Blog rechazado: tiene ${ctaCount} CTAs (debe tener exactamente 3)`);
          continue;
        }
        
        const hasContactForm = blogPost.content.includes('contact-form');
        if (!hasContactForm) {
          console.error(`❌ Blog rechazado: no tiene formulario de contacto`);
          continue;
        }
        
        // Guardar en base de datos
        await db.insert(blogs).values(blogPost);
        createdBlogs.push(blogPost);
        
        console.log(`✅ Blog creado exitosamente: ${blogPost.title}`);
        console.log(`   Slug: ${blogPost.slug}`);
        console.log(`   Imágenes: ${imageCount}`);
        console.log(`   CTAs: ${ctaCount}`);
        
      } catch (error) {
        console.error(`❌ Error generando blog ${i + 1}:`, error);
      }
    }

    console.log(`\n✅ ${createdBlogs.length} blogs guardados exitosamente\n`);
    
    // Mostrar resumen
    console.log('📝 Blogs creados:');
    createdBlogs.forEach((blog, index) => {
      const totalImages = 1 + (blog.secondaryImages?.length || 0);
      console.log(`   ${index + 1}. ${blog.title} (${blog.slug})`);
      console.log(`      Ciudad: ${blog.city || 'Venezuela'} | Imágenes: ${totalImages}`);
    });

    console.log('\n✨ Generación automática completada exitosamente');
    
    await pool.end();
    process.exit(0);
    
  } catch (error) {
    console.error('💥 Error en la generación automática:', error);
    process.exit(1);
  }
}

main();
```

#### 4.2 Configurar Replit Scheduled Deployment

**Sigue estos pasos EN REPLIT:**

1. Ve a la pestaña **"Deployments"** en tu proyecto Replit
2. Haz clic en **"Create Deployment"**
3. Selecciona **"Scheduled"**
4. Configura:

**Schedule Description:**
```
Every day at 6:30 AM
```

**Timezone:**
```
America/Panama
```

**Cron Expression:**
```
30 6 * * *
```

**Build Command:**
```
npm install
```

**Run Command:**
```
tsx scripts/generate-daily-blogs.ts
```

**Job Timeout:**
```
600
```
(10 minutos)

5. En **"Deployment secrets"**, asegúrate de que estos secrets estén configurados:
   - `DATABASE_URL`
   - `OPENROUTER_API_KEY`
   - `PEXELS_API_KEY`
   - `FREEPIK_API_KEY`
   - `SHUTTERSTOCK_CONSUMER_KEY`
   - `SHUTTERSTOCK_CONSUMER_SECRET`
   - `UNSPLASH_ACCESS_KEY`

6. Haz clic en **"Deploy"**

---

### FASE 5: TESTING Y VALIDACIÓN

#### 5.1 Testing Manual del Script

```bash
# Ejecuta manualmente para probar
tsx scripts/generate-daily-blogs.ts
```

**Verifica que:**
- ✅ Se genera contenido con IA correctamente
- ✅ Se descargan mínimo 3 imágenes
- ✅ Hay exactamente 3 CTAs en el contenido
- ✅ El formulario de contacto está presente
- ✅ Los datos de contacto son visibles
- ✅ Hay enlaces a artículos relacionados
- ✅ Se guarda en la base de datos

#### 5.2 Testing de Frontend

**Verifica visualmente:**

1. **Página de lista de blogs** (`/blog`):
   - ✅ Colores corporativos de GruasEquiser correctos
   - ✅ Búsqueda funciona
   - ✅ Filtros por ciudad y sector funcionan
   - ✅ Paginación funciona
   - ✅ Cards de blogs se muestran correctamente

2. **Página de artículo** (`/es/blog/:slug`):
   - ✅ Layout similar a TRANSERVICA
   - ✅ Imágenes se cargan correctamente
   - ✅ CTAs visibles y con información correcta
   - ✅ Formulario de contacto funciona
   - ✅ Artículos relacionados se muestran
   - ✅ Meta tags correctos (inspeccionar con DevTools)

#### 5.3 Testing de SEO

Usa herramientas como:
- **Google Search Console**
- **Schema.org Validator** (https://validator.schema.org/)
- **Facebook Debugger** (https://developers.facebook.com/tools/debug/)
- **Twitter Card Validator**

**Verifica:**
- ✅ Sitemap.xml accesible en `/api/sitemap.xml`
- ✅ Meta tags únicos por página
- ✅ Open Graph tags correctos
- ✅ Schema markup válido
- ✅ Canonical URLs correctos
- ✅ Hreflang tags para ES/EN

---

## 📊 CHECKLIST FINAL DE VALIDACIÓN

Antes de dar por completado el proyecto, verifica:

### ✅ Diseño Visual:
- [ ] Colores corporativos de GruasEquiser aplicados (NO verde de TRANSERVICA)
- [ ] Logo de GruasEquiser visible en todas las páginas
- [ ] Layout de blog similar a TRANSERVICA
- [ ] Responsive en móvil, tablet y desktop
- [ ] Imágenes con lazy loading (excepto above-the-fold)
- [ ] Tipografía consistente

### ✅ Funcionalidad:
- [ ] Búsqueda de blogs funciona
- [ ] Filtros por ciudad y sector funcionan
- [ ] Paginación funciona
- [ ] Vista de artículo individual funciona
- [ ] Formulario de contacto funciona y guarda en DB
- [ ] Contador de vistas incrementa
- [ ] Enlaces internos funcionan

### ✅ Contenido Obligatorio (cada blog):
- [ ] Mínimo 3 imágenes (1 cover + 2 secundarias)
- [ ] Exactamente 3 CTAs con contacto de GruasEquiser
- [ ] Formulario de contacto integrado
- [ ] Datos de contacto visibles (teléfono, email, WhatsApp)
- [ ] Mínimo 3 enlaces a artículos relacionados
- [ ] Estructura H1, H2, H3 correcta

### ✅ SEO:
- [ ] Meta tags únicos por página
- [ ] Open Graph tags configurados
- [ ] Twitter Cards configurados
- [ ] Schema markup Article en artículos
- [ ] Sitemap.xml dinámico funcionando
- [ ] Canonical URLs correctos
- [ ] Hreflang ES/EN configurado
- [ ] Keywords localizadas (ciudades de Venezuela)

### ✅ Backend:
- [ ] API `/api/blogs` funciona
- [ ] API `/api/blogs/:slug` funciona
- [ ] API `/api/sitemap.xml` funciona
- [ ] Generador de blogs con IA funciona
- [ ] Multi-provider de imágenes funciona (fallback Pexels→Freepik→Shutterstock→Unsplash)
- [ ] Validación de 3 imágenes mínimo
- [ ] Validación de 3 CTAs exactamente
- [ ] PostgreSQL guarda correctamente

### ✅ Automatización:
- [ ] Script `scripts/generate-daily-blogs.ts` funciona manualmente
- [ ] Scheduled Deployment configurado (6:30 AM Panama)
- [ ] Secrets configurados en Deployment
- [ ] Logs de ejecución visibles en Replit
- [ ] Blogs se generan automáticamente diariamente

### ✅ Multi-dominio:
- [ ] Blogs accesibles en todos los dominios de GruasEquiser
- [ ] Canonical URLs apuntan al dominio principal
- [ ] Sitemap incluye todas las URLs

---

## 🚨 ERRORES COMUNES A EVITAR

### ❌ NO HAGAS ESTO:

1. **NO uses los colores de TRANSERVICA** (#155d29, #0f4a21)
2. **NO generes blogs sin validar** 3 imágenes mínimo
3. **NO generes blogs sin validar** 3 CTAs exactamente
4. **NO olvides incluir** formulario de contacto en cada blog
5. **NO uses información de TRANSERVICA** (teléfono, email, dirección)
6. **NO olvides actualizar** canonical URLs a gruasequiser.com
7. **NO uses** slugs genéricos (deben incluir ciudad y sector)
8. **NO generes contenido** sin keywords SEO localizadas

### ✅ SÍ HAZLO ASÍ:

1. ✅ Investiga los colores corporativos reales de GruasEquiser
2. ✅ Valida cada blog antes de guardarlo en DB
3. ✅ Usa datos de contacto reales de GruasEquiser
4. ✅ Genera slugs descriptivos: `gruas-telescopicas-caracas`
5. ✅ Incluye keywords con ciudades de Venezuela
6. ✅ Prueba el script manualmente antes de configurar Scheduled Deployment
7. ✅ Revisa los logs de cada ejecución

---

## 💰 COSTOS ESTIMADOS

### Replit Scheduled Deployment:
- **Por ejecución**: ~1,710 Compute Units (90 segundos)
- **Mensual (30 días)**: ~51,300 Compute Units
- **Costo real**: **$0 adicional** (cubierto por créditos de Replit Core)

### APIs Externas:
- **OpenRouter** (deepseek/deepseek-chat): ~$0.14 por 1M tokens (muy económico)
- **Pexels**: GRATIS
- **Freepik**: Depende del plan
- **Shutterstock**: Depende del plan
- **Unsplash**: GRATIS

---

## 📚 RECURSOS Y DOCUMENTACIÓN

### Documentación de TRANSERVICA:
- Revisa `SCHEDULED_DEPLOYMENT_SETUP.md` en el proyecto de TRANSERVICA
- Revisa `replit.md` para entender la arquitectura completa

### APIs:
- OpenRouter: https://openrouter.ai/docs
- Pexels: https://www.pexels.com/api/documentation/
- Freepik: https://www.freepik.com/api
- Shutterstock: https://www.shutterstock.com/developers
- Unsplash: https://unsplash.com/documentation

### React Helmet Async:
- https://github.com/staylor/react-helmet-async

### Drizzle ORM:
- https://orm.drizzle.team/docs/overview

---

## 🎯 RESULTADO ESPERADO

Al finalizar, GruasEquiser.com debe tener:

1. ✅ **Sistema de blogs automatizado** que genera 2 artículos SEO diariamente a las 6:30 AM
2. ✅ **Diseño visual idéntico** a TRANSERVICA pero con colores de GruasEquiser
3. ✅ **Contenido optimizado** con 3 imágenes, 3 CTAs, formulario, contacto visible
4. ✅ **SEO completo** con meta tags, sitemap, schema markup, hreflang
5. ✅ **Multi-dominio** accesible en todos los dominios de GruasEquiser
6. ✅ **Performance optimizado** con lazy loading, caching, compresión
7. ✅ **Bilingual support** (Español/Inglés) con alternadores de idioma

---

## 📞 INFORMACIÓN DE CONTACTO DE GRUASEQUISER

**IMPORTANTE**: Antes de ejecutar la generación de blogs, solicita al usuario los siguientes datos reales de GruasEquiser:

```
EMPRESA: GruasEquiser, C.A.
TELÉFONO: [SOLICITAR AL USUARIO]
EMAIL: [SOLICITAR AL USUARIO]
WHATSAPP: [SOLICITAR AL USUARIO]
DIRECCIÓN: [SOLICITAR AL USUARIO]
AÑOS DE EXPERIENCIA: [SOLICITAR AL USUARIO]
SERVICIOS PRINCIPALES: [SOLICITAR AL USUARIO]
```

Estos datos se usarán en:
- CTAs de cada artículo
- Formulario de contacto
- Bloque de información de contacto
- Footer del sitio

---

## 🚀 ¡LISTO PARA COMENZAR!

Con este prompt completo, tienes toda la información necesaria para clonar el sistema de blogs de TRANSERVICA a GruasEquiser.com.

**Orden recomendado de implementación:**
1. Investigar colores corporativos de GruasEquiser
2. Actualizar CSS con colores correctos
3. Configurar base de datos (schema + migraciones)
4. Implementar backend (APIs, servicios, generador)
5. Implementar frontend (componentes, páginas)
6. Testing manual completo
7. Configurar Scheduled Deployment
8. Validación final

**¿Alguna duda? ¡Comienza ahora! 🚀**
