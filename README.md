# Promac Electrical

A modern full-stack application for electrical component distribution, featuring a React frontend and scalable backend architecture.

## 🚀 Features

### Frontend
- **React 18** - React version with improved rendering and concurrent features
- **Vite** - Lightning-fast build tool and development server
- **Redux Toolkit** - State management with simplified Redux setup
- **TailwindCSS** - Utility-first CSS framework with extensive customization
- **React Router v6** - Declarative routing for React applications
- **Data Visualization** - Integrated D3.js and Recharts for powerful data visualization
- **Form Management** - React Hook Form for efficient form handling
- **Animation** - Framer Motion for smooth UI animations
- **Testing** - Jest and React Testing Library setup

### Backend
- **Scalable Architecture** - Ready for backend services integration
- **API Ready** - Structured for RESTful API development
- **Database Integration** - Prepared for database connections

## 📋 Prerequisites

- Node.js (v14.x or higher)
- npm or yarn

## 🛠️ Installation

1. Install all dependencies:
   ```bash
   npm run install-all
   ```
   
2. Start the development server:
   ```bash
   npm run dev
   # or
   npm start
   ```

## 📁 Project Structure

```
promac_electrical/
├── frontend/           # React frontend application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Page components
│   │   ├── contexts/   # React contexts
│   │   ├── hooks/      # Custom React hooks
│   │   ├── lib/        # Utility functions
│   │   ├── styles/     # Global styles and Tailwind configuration
│   │   ├── App.jsx     # Main application component
│   │   ├── Routes.jsx  # Application routes
│   │   └── index.jsx   # Application entry point
│   ├── public/         # Static assets
│   ├── build/          # Production build output
│   ├── package.json    # Frontend dependencies and scripts
│   ├── tailwind.config.js # Tailwind CSS configuration
│   └── vite.config.mjs # Vite configuration
├── backend/            # Backend services (currently empty)
│   └── README.md       # Backend setup instructions
├── package.json        # Root project configuration
└── README.md           # This file
```

## 🧩 Adding Routes

To add new routes to the application, update the `Routes.jsx` file:

```jsx
import { useRoutes } from "react-router-dom";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    // Add more routes as needed
  ]);

  return element;
};
```

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration includes:

- Forms plugin for form styling
- Typography plugin for text styling
- Aspect ratio plugin for responsive elements
- Container queries for component-specific responsive design
- Fluid typography for responsive text
- Animation utilities

## 📱 Responsive Design

The app is built with responsive design using Tailwind CSS breakpoints.


## 📦 Deployment

Build the application for production:

```bash
npm run build
```

## 🙏 Acknowledgments

- Built with [Rocket.new](https://rocket.new)
- Powered by React and Vite
- Styled with Tailwind CSS

Built with ❤️ on Rocket.new
