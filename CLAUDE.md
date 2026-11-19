# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Personal portfolio website of **Vishwajeet Kumar**: a full-stack developer (React, Next.js, Node.js) who also builds Generative AI solutions (LLMs, RAG, Agentic AI) at **Royal Cyber**.

## Tech stack

- Next.js 13 (Pages Router), React 18, TypeScript
- Tailwind CSS 3 (+ `tailwind-scrollbar`)
- framer-motion for animations, react-icons for icons

## Commands

```bash
npm install     # install dependencies
npm run dev     # dev server at http://localhost:3000
npm run build   # production build (also type-checks)
npm run lint    # ESLint
```

## Structure

```
pages/index.tsx          Single page; composes all sections, sets <Head> meta
pages/_app.tsx           Global CSS import
pages/_document.tsx      Google Fonts (Inter, Montserrat)
components/
  Navbar.tsx             Sticky nav + mobile drawer (driven by navLinks)
  Banner.tsx             Hero: rotating roles, CTAs, stats
  About.tsx              Bio + grouped skills (driven by skillGroups)
  Experience.tsx         Tabbed work history (single `active` state)
  works/*.tsx            One file per employer (RoyalCyber, Amazon=BSS, ReactBD=eSSL, Google=Newton School, Apple=Acent)
  Projects.tsx           Featured projects carousel (data array, autoplay + arrows + dots)
  Archive.tsx / ArchiveCard.tsx   "Other noteworthy projects" grid
  SocialLinks.tsx        Shared social icon row
  Reveal.tsx             Scroll-reveal animation wrapper
  SectionTitle.tsx
lib/data.ts              Profile details, social links, nav links, roles, skills
public/assets/           index.ts re-exports images; Vishwajeet.pdf is the resume
styles/globals.css       Tailwind layers + small global rules
```

## Conventions

- **Edit personal data in `lib/data.ts`** (email, social URLs, nav, skills, roles). Do not hard-code these in components.
- Theme colors live in `tailwind.config.js`: `bodyColor` (white), `surface` (light slate sections/cards), `accent` (indigo), `accentLight`, `highlight` (amber, small touches), `textLight` (ink), `textDark` (slate), `hoverColor`. Use these tokens, not raw hex, where possible.
- Custom breakpoints (`sml`, `md`, `mdl`, `lg`, `lgl`, `xl`) and container widths (`containerxs`, `containerSmall`, `contentContainer`, `container`) are defined in `tailwind.config.js`.
- Imports use the `@/` alias (maps to the project root).
- The page uses normal window scrolling. Every section uses `section-y` (vertical spacing) and an inner `container-x` (max-width 1120px) from `styles/globals.css` so all sections align. Sections alternate white / `bg-surface`. Navbar highlights the active section via IntersectionObserver.
- Shared button styles: `btn-primary`, `btn-outline` (globals.css).
- External links should use `target="_blank"` with `rel="noopener noreferrer"` and absolute `https://` URLs.
- Adding an employer: create `components/works/<Name>.tsx`, then add an entry to the `jobs` array in `Experience.tsx`.
- Adding a featured project: add an object to the `projects` array in `Projects.tsx` (image goes in `public/assets/images` and is exported from `public/assets/index.ts`).

## Known TODOs

- Confirm Royal Cyber job title and start date in `components/works/RoyalCyber.tsx`.
- Confirm the stats shown in `Banner.tsx` (years of experience, projects delivered).
- Some GitHub links point to the profile root rather than the specific repository.
- Component filenames in `works/` (Amazon, Apple, Google, ReactBD) do not match the employers they render; renaming would be a worthwhile cleanup.
