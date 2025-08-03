# TRANSERVICA Website

## Overview

This is a professional corporate website for TRANSERVICA, C.A., Venezuela's leading specialized heavy cargo transportation company with 40 years of experience. The site showcases their capabilities in transporting exceptional loads up to 1,100 tons using hydraulic modular trailers and specialized equipment. Built as a modern React single-page application with Express.js backend, the website features corporate video integration, project galleries, contact forms, comprehensive blog section with dedicated page, and is optimized for search engines targeting "transporte cargas excepcionales Venezuela."

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built with **React 18** using **TypeScript** and **Vite** as the build tool. The application follows a component-based architecture with:

- **Routing**: Wouter for lightweight client-side routing (Home `/` and Blog `/blog` pages)
- **Styling**: Tailwind CSS with custom Transervica brand colors (green and orange theme)
- **UI Components**: Radix UI primitives with shadcn/ui component system for consistent design
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Video Integration**: YouTube iframe embedding for corporate video content

The design system uses a "new-york" style variant with neutral base colors and custom CSS variables for brand consistency. All components are fully responsive and optimized for mobile devices.

### Backend Architecture
The backend uses **Express.js** with **TypeScript** in ESM format, providing:

- **API Routes**: RESTful endpoints for contact form submissions and data retrieval
- **Request Logging**: Custom middleware for API request monitoring and debugging
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **CORS and Security**: Express middleware for request parsing and security

The server architecture separates route handling, storage abstractions, and development tooling for clean separation of concerns.

### Data Storage Solutions
The application uses **Drizzle ORM** with **PostgreSQL** as the primary database:

- **Schema Definition**: Type-safe database schemas using Drizzle with Zod integration
- **Storage Abstraction**: Interface-based storage layer allowing for different implementations
- **Memory Storage**: In-memory storage implementation for development and testing
- **Database Migrations**: Drizzle Kit for schema migrations and database management

The storage layer supports both users and contact requests with proper TypeScript types and validation.

### Development and Build System
The project uses a modern development stack:

- **Build Tools**: Vite for fast development and optimized production builds
- **TypeScript**: Full TypeScript support with strict mode and path mapping
- **Hot Reload**: Vite HMR for fast development iteration
- **Static Assets**: Vite asset handling with proper imports and optimization
- **Environment**: Separate development and production configurations

### UI Component System
The application implements a comprehensive design system:

- **Component Library**: Complete set of reusable UI components (buttons, forms, dialogs, etc.)
- **Blog System**: Dedicated blog page with professional layout, search/filter functionality, pagination, and article detail views
- **Theming**: CSS variables for consistent colors and spacing
- **Accessibility**: Radix UI primitives ensure proper ARIA attributes and keyboard navigation
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Brand Integration**: Custom Transervica colors and typography

### Blog Architecture
The blog system features a complete corporate blog implementation:

- **Blog Homepage**: Professional carousel showcase with manual navigation controls and article previews
- **Dedicated Blog Page**: Full-featured blog page (`/blog`) with search, categories, pagination, and article management
- **Article Categories**: Organized by "Proyectos Especiales", "Equipos y Tecnología", "Normativas y Seguridad", "Logística Multimodal", "Historia Corporativa", and "Mantenimiento"
- **Content Management**: Complete articles with real company projects, equipment updates, safety regulations, and corporate history
- **Navigation Integration**: Blog access from footer navigation and dedicated "Ver Todos los Artículos" button
- **Professional Design**: Consistent with corporate branding using green color scheme (#155d29) and high-contrast elements

## External Dependencies

### Database and Storage
- **Neon Database**: Serverless PostgreSQL database (@neondatabase/serverless)
- **Drizzle ORM**: Modern TypeScript ORM for database operations
- **Session Storage**: connect-pg-simple for PostgreSQL-based session management

### UI and Design
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide Icons**: Modern icon library for consistent iconography
- **Embla Carousel**: Lightweight carousel component for project galleries

### Forms and Validation
- **React Hook Form**: Performant forms library with minimal re-renders
- **Zod**: TypeScript-first schema validation for forms and API data
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Development environment optimization for Replit platform

### External Services
- **YouTube**: Corporate video embedding through iframe integration
- **Google Fonts**: Inter font family for modern typography
- **WhatsApp**: Direct messaging integration for customer contact

The architecture prioritizes performance, type safety, and maintainability while providing a professional presentation of Transervica's specialized transportation services.