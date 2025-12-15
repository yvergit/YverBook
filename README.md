# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

# 3D Portfolio Book - React TypeScript Version

A modern, interactive 3D portfolio book built with React, TypeScript, and SCSS. This project converts the original static HTML/CSS/JS portfolio into a component-based React application with improved maintainability and type safety.

## Features

- **3D Book Animation**: Smooth page-turning animations with CSS 3D transforms
- **TypeScript Support**: Full type safety with well-defined interfaces
- **SCSS Styling**: Modern CSS with variables, mixins, and modular structure
- **Responsive Design**: Optimized for different screen sizes
- **Component Architecture**: Reusable React components for easy maintenance
- **Modern Tooling**: Vite for fast development and building

## Project Structure

```
src/
├── components/           # React components
│   ├── BookPortfolio.tsx    # Main container component
│   ├── BookCover.tsx        # Book cover component
│   ├── BookPage.tsx         # Individual page wrapper
│   ├── ProfilePage.tsx      # Profile/landing page
│   ├── WorkEducationPage.tsx # Work experience & education
│   ├── ServicesPage.tsx     # Services offered
│   ├── SkillsPage.tsx       # Technical skills
│   ├── PortfolioPage.tsx    # Latest projects
│   ├── ContactPage.tsx      # Contact form
│   └── NavigationButton.tsx # Page navigation controls
├── styles/              # SCSS stylesheets
│   ├── _variables.scss      # Color scheme, fonts, etc.
│   ├── _mixins.scss         # Reusable CSS mixins
│   ├── _base.scss           # Global styles and reset
│   ├── main.scss            # Main stylesheet entry point
│   └── components/          # Component-specific styles
├── types/               # TypeScript type definitions
│   └── index.ts             # All interface definitions
├── data/                # Static data
│   └── portfolioData.ts     # Portfolio content and configuration
└── App.tsx              # Root application component
```

## Technologies Used

- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development with full IntelliSense support
- **SCSS**: Enhanced CSS with variables, mixins, and nested rules
- **Vite**: Next-generation frontend build tool for faster development
- **BoxIcons**: Beautiful icon library for UI elements

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Key Components

### BookPortfolio
The main container managing the entire book state, including:
- Page turning animations
- Auto-opening sequence
- Navigation between sections
- State management for all pages

### Individual Pages
- **ProfilePage**: Personal information and social links
- **WorkEducationPage**: Professional experience and education timeline
- **ServicesPage**: Services offered in a card-based layout
- **SkillsPage**: Technical skills organized by category
- **PortfolioPage**: Featured project showcase
- **ContactPage**: Contact form with validation

## Customization

### Updating Content
Modify the data in `src/data/portfolioData.ts` to customize:
- Personal information
- Work experience and education
- Services offered
- Technical skills
- Project details

### Styling Changes
Update SCSS variables in `src/styles/_variables.scss` for:
- Color scheme
- Typography
- Spacing and sizing
- Animation timings

## Migration from Static Version

This React version maintains feature parity with the original static version while adding:
- Better code organization and maintainability
- Type safety with TypeScript
- Component reusability
- Modern development tooling
- Improved performance and bundle optimization

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
