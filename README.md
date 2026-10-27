# Gbolahan Alaba — Portfolio

Personal portfolio site, built with React 18 and Vite. Light and dark themes follow the visitor's system setting.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Editing content

All copy lives in [`src/data/portfolio.js`](src/data/portfolio.js): contact details, bio, stats, projects, the journey timeline and skills. The sections read from it, so most updates don't touch any component.

- **Projects**: set `live` to a URL to show a "Visit" link, or `null` for private builds. Add `github` to show a repo icon. `featured: true` gives the card an accent bar and puts the project in the hero's "Live in production" strip.
- **Contact**: `email` is used by the hero, navbar, contact section and footer.

## Structure

```
src/
  data/portfolio.js     content
  sections/             Hero, About, Projects, Journey, Skills, Contact
  components/           Navbar, Footer, shared Icons
  hooks/                scroll reveal + active-section tracking
  styles/global.css     theme tokens (light/dark), base styles
```
