# Portfolio Application

## Overview

This is a professional portfolio website built as a full-stack application showcasing administrative and executive support expertise. The application features a modern, responsive design with a contact form, project showcase, skills section, and blog content. It's built using React with TypeScript for the frontend and Express.js for the backend, with PostgreSQL database integration using Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints
- **Request Handling**: Express middleware for JSON parsing and logging
- **Error Handling**: Centralized error handling middleware

### Database Architecture
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM for type-safe database operations
- **Migrations**: Drizzle Kit for database schema management
- **Connection**: Neon Database serverless connection

## Key Components

### Frontend Components
1. **Layout Components**
   - Responsive navigation bar with theme switching
   - Footer with social links and contact information

2. **Section Components**
   - Hero section with animated background and call-to-action
   - About section with professional image and description
   - Skills showcase with categorized competencies
   - Projects portfolio with filtering and detailed cards
   - Blog section with article previews
   - Contact form with validation and submission

3. **UI System**
   - Complete shadcn/ui component library
   - Dark/light theme support with system preference detection
   - Responsive design with mobile-first approach
   - Glassmorphism design elements

### Backend Components
1. **API Routes**
   - `/api/contact` - Contact form submission endpoint
   - `/api/resume` - Resume download endpoint

2. **Data Storage**
   - In-memory storage implementation for users
   - Database storage for contact form submissions

3. **Middleware**
   - Request logging with performance metrics
   - JSON body parsing
   - Error handling and status code management

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Form validation using Zod schemas
3. Data submission via TanStack Query mutation
4. Backend validates data against shared schema
5. Contact information stored in PostgreSQL database
6. Success/error response returned to frontend
7. Toast notification displayed to user

### Theme Management
1. Theme preference stored in localStorage
2. System theme detection as fallback
3. CSS custom properties for consistent styling
4. Smooth transitions between themes

### Navigation and Scrolling
1. Intersection Observer API for active section detection
2. Smooth scrolling to sections via JavaScript
3. Responsive mobile menu with hamburger toggle

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Routing**: wouter
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **UI Components**: Radix UI primitives, Lucide React icons
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Hookform Resolvers
- **HTTP Client**: TanStack Query
- **Date Handling**: date-fns
- **Carousel**: Embla Carousel

### Backend Dependencies
- **Server**: Express.js
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Validation**: Zod with drizzle-zod integration
- **Session Management**: connect-pg-simple
- **Development**: tsx for TypeScript execution

### Build and Development Tools
- **Build Tool**: Vite with React plugin
- **TypeScript**: Full type checking and compilation
- **PostCSS**: Tailwind CSS processing
- **ESBuild**: Backend bundling for production

## Deployment Strategy

### Development Environment
- Vite development server with HMR (Hot Module Replacement)
- Express server with TypeScript execution via tsx
- Database migrations via Drizzle Kit
- Replit-specific development banner and cartographer integration

### Production Build Process
1. Frontend build via Vite to `dist/public`
2. Backend bundling via ESBuild to `dist/index.js`
3. Static file serving from Express server
4. Environment variable configuration for database connection

### Database Management
- PostgreSQL database with Neon serverless connection
- Schema definitions in shared TypeScript files
- Type-safe database operations with Drizzle ORM
- Migration management via `drizzle-kit push` command

### Environment Configuration
- `NODE_ENV` for environment detection
- `DATABASE_URL` for PostgreSQL connection
- TypeScript path mapping for clean imports
- Replit-specific environment detection and tooling