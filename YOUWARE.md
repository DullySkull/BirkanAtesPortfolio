# Birkan Ates - Gameplay Programmer Portfolio

This project is a professional portfolio website for Birkan Ates, a gameplay programmer. It showcases his projects, skills, and experience with a custom pixel art medieval fantasy theme.

## Project Overview

- **Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Styling**: Tailwind CSS with custom configuration for Light/Dark modes and specific color palettes (Parchment/Midnight Blue).
- **Icons**: Lucide React
- **Routing**: React Router DOM (HashRouter for broad compatibility)
- **Build Config**: Relative base path (`./`) for flexible deployment
- **Robustness**: Fallback styles in `index.html` and error logging in `main.tsx`

## Features

- **Light/Dark Mode**: Fully supported with persistent state and distinct visual themes (Day/Night pixel art backgrounds).
- **Responsive Design**: Mobile-friendly navigation and layout.
- **Project Showcase**: Detailed project pages with metadata, tech overview, and deep dives.
- **Custom Assets**: AI-generated pixel art backgrounds and project placeholders.

## Directory Structure

- `src/components`: Reusable UI components (Layout, ProjectCard, ThemeToggle, etc.)
- `src/pages`: Page components (Home, About, Contact, ProjectDetail)
- `src/data`: Static data for projects (`projects.ts`)
- `src/assets/images`: Project assets (backgrounds, screenshots)

## Development

To run the project locally:

```bash
npm install
npm run dev
```

To build for production:

```bash
npm run build
```

## Customization

- **Projects**: Edit `src/data/projects.ts` to add or modify projects.
- **Theme**: Edit `tailwind.config.js` to change colors or fonts.
- **Assets**: Replace images in `src/assets/images` with real project screenshots.
