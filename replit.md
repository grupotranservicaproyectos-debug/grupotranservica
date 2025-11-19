# TRANSERVICA Website

## Overview
This project is a professional corporate website for TRANSERVICA, C.A., a leading heavy cargo transportation company in Venezuela. The site showcases their 40 years of expertise in transporting exceptional loads up to 1,100 tons using specialized hydraulic modular trailers and equipment. It features corporate video integration, project galleries, contact forms, a comprehensive blog, and is optimized for search engines, targeting "transporte cargas excepcionales Venezuela". The website is built as a modern React single-page application with an Express.js backend and is designed for high performance with sub-2-second load times and a target PageSpeed score of 90+. It includes a comprehensive bilingual system (Spanish-English) with advanced language management, dynamic meta tags, hreflang support, and Google Analytics 4 integration. The project aims to achieve #1 Google ranking in Venezuela for specialized heavy cargo transportation keywords.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend uses **React 18** with **TypeScript** and **Vite**. It follows a component-based architecture with **Wouter** for routing, **Tailwind CSS** for styling (custom Transervica red and blue corporate theme), **Radix UI** primitives and **shadcn/ui** for UI components, **TanStack Query** for server state management, and **React Hook Form** with **Zod** for form handling. Corporate videos are integrated via YouTube iframes. The design system is responsive and mobile-first, using CSS variables for brand consistency.

### Corporate Brand Colors
The website uses the official TRANSERVICA corporate color palette matching grupotranservica.com:
- **Primary Red**: #DC2626 (main brand color for CTAs, headings, and key elements)
- **Secondary Blue**: #1E3A8A (supporting color for accents and secondary elements)
- **Accent Yellow**: #FFC107 (limited use for highlights and special accents)
- **Grays**: #374151 (text), #1F2937 (dark), #F3F4F6 (light backgrounds)

All colors are defined in `client/src/index.css` as CSS variables and extended in `tailwind.config.ts` for Tailwind utility classes.

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

### Corporate Logo Implementation
The company logo is strategically implemented across the site with HD retina-ready quality and professional specifications. The logo URL constant (LOGO_URL: https://page.gensparksite.com/v1/base64_upload/effd6e03d44742614215e90a841dd3a8) is defined in affected components and wrapped in Wouter Link components for home navigation. **Desktop specifications**: 60px height (flexible responsive sizing), hover scale animation (1.05), subtle shadow effects, and absolute top-left positioning. **Mobile specifications**: 45px height, fixed positioning with backdrop blur effect, translucent background (rgba), and maintained z-index layering. The logo features eager loading priority via preload directive in client/index.html. CSS class `.transervica-logo` (client/src/index.css) defines responsive behavior with @media queries, smooth transitions, image sharpening filters (brightness, contrast), and professional shadow effects. The logo appears in hero-section.tsx (both desktop and mobile navigation), blog-header.tsx, and footer.tsx, maintaining consistency across all pages with clickable home navigation.

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

## Recent Changes (November 19, 2025)

### Corporate Color Palette Update
Updated all brand colors to match the official grupotranservica.com corporate identity:
- **Changed from**: Green (#155d29) and orange theme
- **Changed to**: Red (#DC2626) and blue (#1E3A8A) corporate theme
- Updated CSS variables in `client/src/index.css`
- Extended Tailwind config in `tailwind.config.ts` with full color scales
- All utility classes updated (.text-transervica-red, .bg-transervica-blue, etc.)
- Primary color changed to red, accent color changed to blue
- Headings now use corporate red instead of green

### Automated Contact Form System (November 17, 2025)
Implemented complete automated contact form with database storage and email notifications:
- **Database**: PostgreSQL table `contactos_recibidos` with all required fields
- **Email Notifications**: Automated emails sent to 5 specified addresses via Gmail SMTP
- **User Confirmation**: Automatic confirmation email sent to form submitter
- **API Endpoints**: POST /api/contacto (submit), GET /api/contactos (retrieve)
- **Validation**: Zod schema validation on frontend and backend
- **Storage**: Both in-memory (MemStorage) and PostgreSQL support
- **Email Service**: Nodemailer with HTML templates for professional notifications

## Previous Changes (November 17, 2025)

### Contact Information Update
All contact information across the website has been updated to reflect the new primary contact number and WhatsApp link:

**Primary Contact Number**: +58 422-6361047 (now listed first in all locations)
- Secondary numbers preserved: +58 412-367-5636, +58 414-277-6340

**WhatsApp Direct Message Link**: https://wa.me/message/WAKKACM55ESHC1
- Replaced all previous WhatsApp links with the new direct message URL
- Updated across all CTA buttons and contact sections

**Updated Components and Pages**:
- Hero section (desktop top bar and mobile menu)
- Equipment section (WhatsApp CTA button)
- Services section (2 WhatsApp CTA buttons)
- Contact section (primary WhatsApp button and contact information display)
- Footer (contact information)
- Blog header (top bar contact info)
- About section (tel: link)
- All legal pages (Terms, Privacy, Cookies, Security)

All changes maintain consistency across Spanish and English versions.