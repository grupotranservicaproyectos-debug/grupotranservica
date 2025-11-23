# TRANSERVICA Website

## Overview
This project is the official corporate website for TRANSERVICA, C.A., a Venezuelan heavy cargo transportation company. It highlights their 40 years of experience with exceptional loads up to 1,100 tons using specialized equipment. The site features corporate videos, project galleries, contact forms, and a comprehensive bilingual blog. It's built as a React SPA with an Express.js backend, prioritizing high performance (sub-2-second load times, PageSpeed 90+), SEO (targeting "transporte cargas excepcionales Venezuela"), and a sophisticated bilingual system (Spanish-English) with dynamic meta tags and hreflang support. The project aims for a #1 Google ranking in Venezuela for relevant keywords and integrates Google Analytics 4.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
The frontend uses React 18 with TypeScript and Vite, following a component-based architecture. It utilizes Wouter for routing, Tailwind CSS for styling (custom Transervica theme), Radix UI primitives and shadcn/ui for UI components, TanStack Query for server state management, and React Hook Form with Zod for form handling. The design system is responsive, mobile-first, and uses CSS variables for brand consistency. Corporate videos are integrated via YouTube iframes with a custom lazy-loading component for performance. Dynamic meta tags and hreflang support are implemented using `react-helmet-async` for SEO and bilingual content. The logo is implemented consistently across the site with responsive and performance optimizations.

### Backend
The backend is built with Express.js and TypeScript, providing RESTful APIs for contact form submissions and data retrieval. It includes custom middleware for request logging, centralized error handling, CORS, and security measures. It also manages an automated SEO blog generation system.

### Data Storage
Drizzle ORM with PostgreSQL (Neon Database) is used for primary data storage, featuring type-safe schemas and Drizzle Kit for migrations.

### UI Component System
A comprehensive design system includes reusable UI components, a dedicated blog system, CSS variables for theming, Radix UI for accessibility, and a mobile-first responsive design.

### Blog Architecture
The blog system features a professional layout with a carousel showcase, a dedicated blog page with search, categories, pagination, and individual article pages. Articles include real project documentation, technical specifications, and embedded YouTube videos. The entire blog is fully bilingual, with complete Spanish and English translations for all content, including 6 initial blog posts (IDs: 1, 2, 3, 4, 7, 8). Language switching seamlessly updates content, categories, and selected posts. An automated SEO blog generation system (OpenRouter + Pexels API) is implemented to create content with specific requirements: minimum 3 images, 3 CTAs, contact form, visible contact data, and internal linking to related articles.

### Performance Optimizations
Extensive optimizations target <1.5s desktop, <2s mobile load times, and PageSpeed >95. This includes WebP image optimization with lazy loading (except critical above-the-fold), a custom YouTube lazy-loading component, GZIP server compression, aggressive caching (1 year for static assets), security headers, resource preloading/prefetching, font optimization with `font-display: swap`, and Vite's build optimizations (minification, code splitting, tree shaking).

### Automated Contact Form System
A complete automated contact form system is implemented with PostgreSQL storage (`contactos_recibidos` table), email notifications to administrators via Gmail SMTP, and user confirmation emails. Both frontend and backend utilize Zod for schema validation.

## External Dependencies

### Database and Storage
- **Neon Database**: Serverless PostgreSQL.
- **Drizzle ORM**: TypeScript ORM for database interaction.
- **connect-pg-simple**: PostgreSQL-based session management.

### UI and Design
- **Radix UI**: Accessible UI primitives.
- **Tailwind CSS**: Utility-first CSS framework.
- **Lucide Icons**: Icon library.
- **Embla Carousel**: Lightweight carousel component.
- **shadcn/ui**: Reusable UI components built on Radix UI and Tailwind CSS.

### Forms and Validation
- **React Hook Form**: Performant forms library.
- **Zod**: TypeScript-first schema validation.
- **Hookform Resolvers**: Integration for React Hook Form and Zod.

### Development Tools
- **Vite**: Build tool and development server.
- **TypeScript**: Static type checking.
- **ESBuild**: Fast JavaScript bundler.
- **react-helmet-async**: For dynamic meta tag management in SPAs.

### External Services
- **YouTube**: Video embedding.
- **Google Fonts**: Typography.
- **WhatsApp**: Direct messaging integration.
- **OpenRouter API**: For AI-driven content generation (blog).
- **Pexels API**: For automated image fetching (blog).
- **Gmail SMTP (via Nodemailer)**: For email notifications from contact forms.

## Recent Changes

### Migración a Replit Scheduled Deployment (November 23, 2025)
Migrado sistema de generación automática de blogs de node-cron a Replit Scheduled Deployment:

#### Cambios Implementados:
- **Script Independiente**: Creado `scripts/generate-daily-blogs.ts` que se ejecuta como tarea programada independiente del servidor principal.
- **Cron Job Removido**: Eliminado node-cron del servidor principal (server/routes.ts) para reducir carga y mejorar eficiencia.
- **Scheduled Deployment**: Sistema ahora usa infraestructura nativa de Replit para tareas programadas diarias.
- **Documentación Completa**: Creado `SCHEDULED_DEPLOYMENT_SETUP.md` con instrucciones paso a paso, estimación de costos y troubleshooting.

#### Ventajas del Nuevo Sistema:
- ✅ Servidor principal más liviano (solo maneja HTTP requests, no tareas cron)
- ✅ Logs dedicados y organizados por ejecución
- ✅ Costos optimizados (solo cobra durante ejecución, no 24/7)
- ✅ Escalabilidad automática por Replit
- ✅ Mayor confiabilidad con infraestructura managed de Replit

#### Costos Estimados (Replit Scheduled Deployment):
- **Compute Units por ejecución**: ~1,710 CU (90 segundos @ 1 CPU + 0.5GB RAM)
- **Costo mensual (30 días)**: ~51,300 Compute Units
- **Costo real**: $0 adicional - Cubierto completamente por créditos incluidos en Replit Core ($25/mes en créditos)
- **Plan recomendado**: Replit Core ($20/mes) es más que suficiente

#### Enlaces de Blogs SEO Automatizados:
- **Página principal**: https://www.transervica.net/seo-blog
- **API endpoint**: https://www.transervica.net/api/seo-blogs
- **Sitemap**: https://www.transervica.net/api/sitemap.xml
- **Ejemplos de artículos**:
  - https://www.transervica.net/seo-blog/transporte-petrolero-caracas
  - https://www.transervica.net/seo-blog/lowboy-caracas
  - https://www.transervica.net/seo-blog/sector-petrolero-venezuela
  - https://www.transervica.net/seo-blog/precio-transporte-punto-fijo

### Technical SEO and Accessibility Improvements (November 22, 2025)
Implemented comprehensive technical improvements based on complete site audit:

#### SEO Enhancements:
- **Dynamic Meta Tags System**: Created reusable SEO component (client/src/components/seo.tsx) with react-helmet-async for per-page meta management. Each page now has unique title, description, keywords, canonical URLs, Open Graph tags, Twitter Cards, and hreflang tags for ES/EN.
- **Enhanced Sitemap.xml**: Updated sitemap to include all site pages (/, /blog, /seo-blog, /terms, /privacy, /cookies, /security) with proper priority and changefreq. Dynamic blog article URLs included.
- **Article Schema Markup**: Blog articles now include complete Article schema with author, publishedTime, modifiedTime, section, and tags metadata.
- **Canonical URLs**: Properly configured canonical URLs across all pages to avoid duplicate content penalties.

#### Accessibility Improvements (WCAG AA):
- **ARIA Labels**: Added descriptive aria-label attributes to interactive elements in projects-carousel and projects-gallery components (navigation buttons, slide indicators, autoplay controls).
- **Keyboard Navigation**: All carousel controls support keyboard navigation with proper ARIA labels.
- **Screen Reader Support**: Improved screen reader experience with descriptive labels for all interactive UI elements.

#### Performance Optimizations:
- **Lazy Loading Images**: Implemented loading="lazy" attribute on below-the-fold images in projects-gallery and other components.
- **Improved ALT Texts**: Enhanced ALT attributes with descriptive context (e.g., "Proyecto TRANSERVICA: [title] - Transporte de [weight]").
- **Statistics Fix**: Corrected initial statistics display to show final values (40 años, 1100 toneladas, 100%) immediately instead of animating from 0.

#### Technical Infrastructure:
- **React Helmet Async**: Integrated react-helmet-async for dynamic meta tag management in SPA architecture.
- **HelmetProvider**: App.tsx wrapped with HelmetProvider for centralized meta tag control.
- **Date Handling**: Fixed blog article date handling to support both Date objects and ISO strings with proper null guards.