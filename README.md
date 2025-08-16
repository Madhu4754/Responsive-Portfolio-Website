# Responsive Portfolio Website (React + Vite)

A fast, accessible, and responsive portfolio built with **React 18 + Vite**.
- **Tech:** HTML, CSS, JavaScript (ES6+), React
- **Features:** Responsive layout, dark/light theme, accessible components, projects grid
- **CI/CD:** GitHub Actions workflow to deploy to **GitHub Pages**

## Quick Start

```bash
npm install
npm run dev
```

Build for production:
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages (Workflow)

1. Push this project to a public repo on GitHub (e.g., `username/portfolio`).
2. Ensure GitHub Pages is set to **Deploy from GitHub Actions** in your repo settings.
3. The provided workflow (`.github/workflows/deploy.yml`) builds the app and publishes the `dist/` folder to Pages on each push to `main`.

> Note: `vite.config.js` uses `base: './'` so assets work on GitHub Pages without extra config.

## Customize

- Update content in components under `src/components/` (Hero, About, Skills, Projects, Contact).
- Change brand/links in `Navbar.jsx` and `Hero.jsx`.
- Modify colors and spacing in `src/styles/global.css`.
- Replace the repo links in `Projects.jsx` with your repositories.
- Favicon lives at `public/favicon.svg`.

## Accessibility & Performance

- Semantic HTML, focus on color contrast and keyboard-friendly components.
- No large UI libraries; minimal CSS for fast loads.
- Light/dark theme via `useTheme()` with `localStorage` persistence.

## License

MIT
