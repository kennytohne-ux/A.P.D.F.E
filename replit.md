# A.P.D.F.E - Building Better Futures

## Overview
A.P.D.F.E is a React-based nonprofit organization website focused on education and community development in Central Africa. The application provides information about programs, events, publications, and donation options.

## Tech Stack
- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (via CDN)
- **Routing**: React Router DOM 7
- **Charts**: Recharts
- **Icons**: Lucide React

## Project Structure
```
├── index.html          # Entry HTML file
├── index.tsx           # React entry point
├── App.tsx             # Main app component with routing
├── components/         # Reusable components
│   └── Layout.tsx      # Main layout wrapper
├── pages/              # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Programs.tsx
│   ├── Impact.tsx
│   ├── Publication.tsx
│   ├── Events.tsx
│   ├── GetInvolved.tsx
│   ├── Contact.tsx
│   ├── Donate.tsx
│   ├── Login.tsx
│   ├── Dashboard.tsx
│   ├── ProjectManagement.tsx
│   └── ProjectReport.tsx
├── context/            # React context providers
│   └── MockDataContext.tsx
├── constants.tsx       # App constants
├── types.ts            # TypeScript type definitions
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies
```

## Development
- **Dev Server**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build`
- **Preview**: `npm run preview`

## Environment Variables
- `GEMINI_API_KEY`: Optional API key for AI features

## Deployment
Static deployment configured to build with `npm run build` and serve from `dist/` directory.
