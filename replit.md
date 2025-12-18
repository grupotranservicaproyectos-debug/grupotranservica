# TRANSERVICA Website

## Overview
The TRANSERVICA corporate website showcases the Venezuelan heavy cargo transportation company's 40 years of experience, specializing in loads up to 1,100 tons. The site features corporate videos, project galleries, contact forms, and a comprehensive bilingual blog. Built with React and Express.js, it prioritizes high performance (sub-2-second load times, PageSpeed 90+), robust SEO (targeting "transporte cargas excepcionales Venezuela" for #1 Google ranking), and a sophisticated Spanish-English bilingual system with dynamic meta tags and hreflang support. It integrates Google Analytics 4 to track performance and user engagement.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
The frontend is a React 18 SPA with TypeScript and Vite. It uses Wouter for routing, Tailwind CSS for styling (custom Transervica theme), Radix UI primitives and shadcn/ui for UI components, TanStack Query for server state, and React Hook Form with Zod for forms. The design is responsive, mobile-first, and uses CSS variables for branding. It includes a custom lazy-loading YouTube component, dynamic meta tags via `react-helmet-async`, and hreflang support for SEO.

### Backend
The backend uses Express.js with TypeScript, providing RESTful APIs for contact form submissions and data retrieval. It features custom middleware for request logging, error handling, CORS, security, and manages an automated SEO blog generation system.

### Data Storage
Drizzle ORM with PostgreSQL (Neon Database) is used for type-safe data storage, with Drizzle Kit for migrations.

### UI Component System
A comprehensive design system includes reusable UI components, a dedicated blog system, CSS variables for theming, Radix UI for accessibility, and a mobile-first responsive design.

### Blog Architecture
The blog system offers a professional layout with a carousel, a dedicated blog page with search, categories, and pagination, and individual article pages. Content is fully bilingual (Spanish/English) and includes real project documentation and technical specifications. An automated SEO blog generation system utilizes AI (OpenRouter + Google AI Studio) to create content with specific requirements, including images, CTAs, contact information, and internal linking.

### Performance Optimizations
Optimizations target <1.5s desktop and <2s mobile load times, aiming for PageSpeed >95. Techniques include WebP image optimization with lazy loading, a custom YouTube lazy-loading component, GZIP compression, aggressive caching (1 year for static assets), security headers, resource preloading/prefetching, font optimization, and Vite's build optimizations. A YouTube Facade pattern is implemented for the hero section to ensure zero YouTube resources on initial load.

### Automated Contact Form System
This system handles contact form submissions, storing data in PostgreSQL, sending email notifications to administrators via Gmail SMTP, and confirmation emails to users. Both frontend and backend use Zod for schema validation.

### Technical SEO and Accessibility
The site implements dynamic meta tags using `react-helmet-async` for per-page SEO, including titles, descriptions, Open Graph, Twitter Cards, and hreflang. The sitemap.xml is enhanced to include all pages and dynamic blog articles. Blog articles feature Article schema markup. Accessibility improvements include ARIA labels, keyboard navigation support, and enhanced screen reader compatibility.

## External Dependencies

### Database and Storage
- **Neon Database**: Serverless PostgreSQL.
- **Drizzle ORM**: TypeScript ORM for database interaction.

### UI and Design
- **Radix UI**: Accessible UI primitives.
- **Tailwind CSS**: Utility-first CSS framework.
- **Lucide Icons**: Icon library.
- **Embla Carousel**: Lightweight carousel component.
- **shadcn/ui**: Reusable UI components.

### Forms and Validation
- **React Hook Form**: Performant forms library.
- **Zod**: TypeScript-first schema validation.

### Development Tools
- **Vite**: Build tool and development server.
- **TypeScript**: Static type checking.
- **react-helmet-async**: For dynamic meta tag management.

### External Services
- **YouTube**: Video embedding.
- **Google Fonts**: Typography.
- **WhatsApp**: Direct messaging integration.
- **OpenRouter API**: For AI-driven content generation (Gemini Pro 1.5, Claude 3.5 Sonnet fallback).
- **Google AI Studio**: For AI image generation (Imagen 3.0) and primary image source.
- **Image APIs**: Pexels, Freepik, Shutterstock, Unsplash (fallback for blog images).
- **Gmail SMTP (via Nodemailer)**: For email notifications.