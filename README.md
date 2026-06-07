# Hajar Elyazri — Portfolio

React + Vite portfolio. Clean folder structure, CSS Modules per component.

## Project Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── assets/          ← your photos (hh.png, actin.jpg, debate.png, nasa.png, iccem.png)
└── src/
    ├── main.jsx         ← entry point
    ├── App.jsx          ← root, assembles all sections
    ├── styles/
    │   └── global.css   ← CSS variables, base styles, shared classes
    ├── data/
    │   └── content.js   ← ALL text content (projects, skills, stats…) — edit here
    ├── hooks/
    │   └── index.js     ← useTypewriter, useScrollReveal
    └── components/
        ├── StarCanvas.jsx / (no CSS)
        ├── Nav.jsx          + Nav.module.css
        ├── Hero.jsx         + Hero.module.css
        ├── About.jsx        + About.module.css
        ├── Skills.jsx       + Skills.module.css
        ├── Projects.jsx     + Projects.module.css
        ├── Contact.jsx      + Contact.module.css
        └── Footer.jsx       + Footer.module.css
```

## Getting Started

```bash
npm install
npm run dev
```

## Adding your photo

Place your profile photo at:
```
public/assets/hh.png
```
The `hajar.png` and `hh.png` from your original zip are already in `public/assets/`.

## Updating content

All text, projects, and skills live in one file:
```
src/data/content.js
```
Edit there — no need to touch components.

## Build for production

```bash
npm run build
```
Output goes to `dist/`.
