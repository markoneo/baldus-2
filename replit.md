# BALDUS Odškodnine Website

## Overview

This is a full-stack web application for BALDUS Odškodnine, a Slovenian legal services company specializing in compensation claims. The application is built as a modern landing page with contact form functionality, featuring a React frontend and Express.js backend with PostgreSQL database integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared components:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Component Structure**: Modular React components using shadcn/ui design system
- **Styling**: Tailwind CSS with custom color scheme (gold/navy theme matching brand)
- **Form Handling**: React Hook Form with Zod validation
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Backend Architecture
- **API Structure**: RESTful endpoints for contact form submission
- **Database Layer**: Drizzle ORM with PostgreSQL adapter (@neondatabase/serverless)
- **Storage Abstraction**: Interface-based storage layer with in-memory fallback
- **Error Handling**: Centralized error handling middleware

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Messages Table**: Stores contact form submissions with fields for personal info, damage type, and description
- **Migration System**: Drizzle Kit for database migrations

## Data Flow

1. **Contact Form Submission**: User fills out contact form → React Hook Form validates → API request to `/api/contact`
2. **Server Processing**: Express route validates with Zod schema → Stores in database via storage interface
3. **Response Handling**: Success/error response → Toast notification to user
4. **Admin Access**: Contact messages retrievable via `/api/contact-messages` endpoint

## External Dependencies

### Frontend Dependencies
- **UI Components**: Comprehensive Radix UI components via shadcn/ui
- **Icons**: Lucide React icon library
- **Date Handling**: date-fns for date formatting
- **Carousel**: Embla Carousel for image sliders

### Backend Dependencies
- **Database**: Neon serverless PostgreSQL
- **ORM**: Drizzle ORM with Zod integration
- **Session Management**: connect-pg-simple for PostgreSQL session store

### Development Tools
- **Build System**: Vite with React plugin
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESLint configuration (inherited from Vite)

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

- **Development**: `npm run dev` - Runs TSX server with hot reload
- **Build**: `npm run build` - Vite builds client, esbuild bundles server
- **Production**: `npm run start` - Runs built server from dist directory
- **Database**: `npm run db:push` - Deploys schema changes to database

### Environment Requirements
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment specification (development/production)

### Build Output
- Client builds to `dist/public` for static serving
- Server bundles to `dist/index.js` as ESM module
- Assets resolved via Vite alias configuration

The application uses a hybrid approach where the Express server serves both API endpoints and static files, with Vite middleware in development for hot module replacement.