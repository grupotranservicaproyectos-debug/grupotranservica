# TRANSERVICA Website

## Overview
This project is a professional corporate website for TRANSERVICA, C.A., a leading heavy cargo transportation company in Venezuela. The site showcases their 40 years of expertise in transporting exceptional loads up to 1,100 tons using specialized hydraulic modular trailers and equipment. It features corporate video integration, project galleries, contact forms, a comprehensive blog, and is optimized for search engines, targeting "transporte cargas excepcionales Venezuela". The website is built as a modern React single-page application with an Express.js backend and is designed for high performance with sub-2-second load times and a target PageSpeed score of 90+. It includes a comprehensive bilingual system (Spanish-English) with advanced language management, dynamic meta tags, hreflang support, and Google Analytics 4 integration. The project aims to achieve #1 Google ranking in Venezuela for specialized heavy cargo transportation keywords.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend uses **React 18** with **TypeScript** and **Vite**. It follows a component-based architecture with **Wouter** for routing, **Tailwind CSS** for styling (custom Transervica green and orange theme), **Radix UI** primitives and **shadcn/ui** for UI components, **TanStack Query** for server state management, and **React Hook Form** with **Zod** for form handling. Corporate videos are integrated via YouTube iframes. The design system is responsive and mobile-first, using CSS variables for brand consistency.

### Backend Architecture
The backend is built with **Express.js** and **TypeScript** (ESM format). It provides RESTful APIs for contact form submissions and data retrieval, with custom middleware for request logging, centralized error handling, and security measures like CORS.

### Data Storage Solutions
The application utilizes **Drizzle ORM** with **PostgreSQL** (Neon Database) as the primary database. It features type-safe schemas, a storage abstraction layer, in-memory storage for development, and **Drizzle Kit** for migrations.

### Development and Build System
The project uses **Vite** for fast development and optimized production builds, with full **TypeScript** support, HMR, and efficient asset handling.

### UI Component System
A comprehensive design system includes reusable UI components, a dedicated blog system, CSS variables for theming, **Radix UI** for accessibility, and a mobile-first responsive design.

### Blog Architecture
The blog system features a professional layout with a carousel showcase, a dedicated blog page with search, categories, pagination, and individual article pages. It includes real project documentation with technical specifications, project achievements, publication dates, view/comment counts, and embedded YouTube videos for flagship projects. Articles are categorized under "Proyectos Especiales" / "Special Projects" and optimized with Schema.org markup and relevant keywords. **The entire blog system is fully bilingual** - all 6 blog posts (IDs: 1, 2, 3, 4, 7, 8) include complete Spanish and English translations for titles, excerpts, and full content. Language switching works seamlessly in both blog list view and article detail view, with automatic category filter synchronization and selectedPost updates.

### Performance Optimizations
The website implements extensive performance optimizations targeting <1.5s desktop, <2s mobile, PageSpeed >95:
- **Image Optimization**: All images converted to WebP format, significantly compressed, and lazy-loaded for below-the-fold content. Critical above-the-fold images (logos) load eagerly.
- **YouTube Lazy Loading**: Custom YouTubeLazy component (client/src/components/youtube-lazy.tsx) with intersection observer support. Videos display thumbnails initially and load iframes automatically when entering viewport (autoLoad mode). This maintains autoplay functionality while reducing initial page weight. Applied to about-section and blog-section videos. Hero background video uses eager loading for UX.
- **Server Compression**: GZIP compression enabled (level 6, 1KB threshold) for all text-based responses via compression middleware.
- **Aggressive Caching**: Static assets cached for 1 year (max-age=31536000, immutable) including images, JS, CSS. HTML cached for 1 hour with must-revalidate.
- **Security Headers**: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy applied to all responses.
- **Resource Preloading**: Strategic `preconnect`, `dns-prefetch`, `preload`, and `prefetch` directives for critical resources like Google Fonts, YouTube embeds, and main logo.
- **Font Optimization**: Preload directive for Google Fonts with `font-display: swap` for instant text rendering.
- **Static Asset Serving**: Efficient serving with correct MIME types and immutable cache headers.
- **Build Optimizations**: Vite handles minification, code splitting, tree shaking, and asset optimization automatically.

## External Dependencies

### Database and Storage
- **Neon Database**: Serverless PostgreSQL.
- **Drizzle ORM**: TypeScript ORM.
- **connect-pg-simple**: PostgreSQL-based session management.

### UI and Design
- **Radix UI**: Accessible UI primitives.
- **Tailwind CSS**: Utility-first CSS framework.
- **Lucide Icons**: Icon library.
- **Embla Carousel**: Lightweight carousel component.

### Forms and Validation
- **React Hook Form**: Performant forms library.
- **Zod**: TypeScript-first schema validation.
- **Hookform Resolvers**: Integration for React Hook Form and Zod.

### Development Tools
- **Vite**: Build tool and development server.
- **TypeScript**: Static type checking.
- **ESBuild**: Fast JavaScript bundler.

### External Services
- **YouTube**: Video embedding.
- **Google Fonts**: Typography.
- **WhatsApp**: Direct messaging integration.