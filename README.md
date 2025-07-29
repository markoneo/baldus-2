# BALDUS Odškodnine - Professional Legal Services Website

A modern, responsive website for BALDUS Odškodnine, a Slovenian legal firm specializing in compensation claims for traffic accidents, workplace injuries, medical malpractice, and other damages.

![BALDUS Odškodnine](https://baldus.sirv.com/Baldus%20ods%CC%8Ckodnine%20logo%20(2).png)

## 🌟 Features

- **Modern Design**: Clean, professional interface with gold and navy branding
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Contact Form**: Integrated contact system with database storage
- **Multi-Section Layout**: Hero, services, process, testimonials, FAQ, and contact sections
- **Professional Branding**: Authentic BALDUS logo integration
- **Slovenian Language**: Complete localization for Slovenian market

## 🛠 Technology Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Vite** for build tooling
- **Wouter** for client-side routing
- **React Hook Form** with Zod validation
- **TanStack Query** for server state management

### Backend
- **Express.js** with TypeScript
- **PostgreSQL** database
- **Drizzle ORM** for database operations
- **Zod** for schema validation

### UI Components
- **Radix UI** primitives
- **Lucide React** icons
- **Framer Motion** for animations
- **Date-fns** for date handling

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/baldus-odskodnine.git
cd baldus-odskodnine
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy example environment file
cp .env.example .env

# Add your database URL
DATABASE_URL=your_postgresql_database_url
```

4. Set up the database:
```bash
npm run db:push
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Deploy database schema changes

## 🏗 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
├── server/                # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Database interface
├── shared/                # Shared types and schemas
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary Gold**: `#D4AF37` - Professional, trustworthy accent
- **Navy Blue**: `#1e3a8a` - Professional, corporate base
- **Light Gray**: Clean backgrounds and subtle text
- **White**: Primary content backgrounds

### Typography
- Clean, professional fonts optimized for readability
- Responsive typography scaling

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🔧 Database Schema

### Contact Messages
Stores contact form submissions with:
- Personal information (name, email, phone)
- Damage type and description
- Submission timestamp

## 🚀 Deployment

### Replit Deployment
The application is optimized for Replit deployment:
1. Push code to your Replit
2. Set `DATABASE_URL` environment variable
3. Click the Deploy button

### Other Platforms
The application can be deployed to:
- Vercel
- Netlify
- Heroku
- Railway
- Any Node.js hosting provider

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for BALDUS Odškodnine.

## 📞 Contact

For questions about this website or legal services:

**BALDUS Odškodnine**
- Website: [Your deployed URL]
- Email: [Contact email]
- Phone: [Contact phone]

---

*Vaša pravica, naša skrb – z nami zanesljivo do pravične odškodnine.*