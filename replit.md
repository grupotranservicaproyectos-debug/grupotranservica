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