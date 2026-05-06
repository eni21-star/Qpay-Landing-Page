# QPay Landing Page

Marketing landing page for QPay, built with React, Vite, Tailwind CSS, GSAP, and Framer Motion.

## Scripts

- `npm run dev` starts the local Vite dev server.
- `npm run build` creates a production build in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run lint` runs ESLint across the project.

## Project Structure

- `src/App.jsx` composes the landing page sections.
- `src/components/` contains the page sections and shared UI helpers.
- `src/assets/` stores imported app assets.
- `public/` stores static images served directly by Vite.

## Notes

- The contact modal is shared across sections through a small custom event helper in `src/utils/contactModal.js`.
- Store badge clicks currently route visitors into the contact flow so they can request access without changing the page design.
