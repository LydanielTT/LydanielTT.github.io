# LydanielTT.github.io

Personal portfolio / CV website for **Daniel LY** — Fullstack JS Developer (React / NodeJS).

## Stack

- **React 19** + **TypeScript**
- **Vite 8** (with React Compiler via Babel)
- **SCSS** for styling
- **Prettier** for formatting

## Structure

```
src/
├── data.json              # CV content (experience, skills, languages, education)
├── App.tsx                # Root layout
├── components/
│   ├── Header.tsx/scss    # Sticky header with scroll behavior
│   ├── Profile.tsx        # Skills & education section
│   ├── Experience.tsx/scss
│   ├── ExperienceHelix.tsx  # Animated helix tied to scroll position
│   ├── ProgressRing.tsx   # Circular scroll progress indicator
│   ├── Language.tsx/scss  # Language proficiency display
│   ├── Contact.tsx/scss   # LinkedIn / GitHub links
│   ├── Skills.tsx/scss
│   └── Toggle.tsx/scss    # Theme toggle
└── hooks/
    ├── useScrollY.ts       # Track vertical scroll position
    ├── useScrollProgress.ts
    ├── useScrollSnap.ts
    └── useTheme.ts
```

## Getting started

```bash
npm install
npm run dev      # dev server
npm run build    # production build
npm run preview  # preview build
npm run format   # format with Prettier
```

## Deploy

Hosted on GitHub Pages at [LydanielTT.github.io](https://LydanielTT.github.io).
