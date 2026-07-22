Plan: Interior design website

Note on framework
- The current project is initialized as TanStack Start (React 19 + Tailwind CSS v4 + Vite), and Lovable projects run on TanStack Start. Next.js is not supported in this environment.
- I will build the exact same visual result and behavior using TanStack Start file-based routing, React, Tailwind CSS v4, and the existing design token system.

Design tokens
- Background: minimal ivory `#F8F7F4` (not too creamy).
- Text/on-black surfaces: `#1A0F0A` everywhere.
- Nav: pill shape, cream/ivory background, `#1A0F0A` text.
- All cards use Apple-like minimal rounded corners (`--radius: 1rem` or similar, scaled per card).
- Typography: use a clean, high-quality sans-serif loaded via `<link>` in `__root.tsx` (e.g. Inter or DM Sans).

Sections & routes
1. `src/routes/index.tsx` (home page, `/`)
   - Full-viewport hero image banner with generated interior design photo.
   - Fixed-position hero: on scroll the hero stays in place, its overlay darkens slightly, and the following section slides up over it.
   - Pill-shaped nav bar centered at the top; normal size on load, grows 2–4 px after scrolling past the hero threshold.
   - Nav links: Home, About, Services, Projects, Inquiry, Contact (or equivalent).
   - Mobile hamburger using a bottom sheet or dropdown.

2. Section 2: About interior design text
   - Centered or left-justified text block on ivory background, generous whitespace, scroll-reveal animation.

3. Section 3: Two-column layout
   - Left: descriptive text.
   - Right: two cards stacked vertically, each ~70% of container width with 100% relative height, minimal rounded corners.
   - Zoom-in / scale animation triggered by scroll entry (transform from 0.9 to 1.0 with opacity).

4. Section 4: Auto-scrolling horizontal card strip
   - Full-width cards for Bathroom, Balcony, Bedroom, Hall, Kitchen, etc.
   - Infinite/auto-moving horizontal animation (CSS marquee or Framer-style translate loop).
   - Minimal rounded corners on every card.

5. Inquiry section on home page (`/`) + dedicated route `src/routes/inquiry.tsx` (`/inquiry`)
   - Form fields: Name, Email, Phone, Project type, Message.
   - Submit shows a toast confirmation.

6. Footer
   - Minimal social icons (Instagram, Pinterest, Facebook, X, LinkedIn) from Lucide or simple SVG.
   - Copyright, address, and quick links.

Technical implementation
- Use Tailwind CSS v4 tokens in `src/styles.css` for colors, radii, and font.
- Use React state and scroll listener for the dynamic nav sizing.
- Use `position: sticky` or fixed pinning + transform for the hero parallax effect.
- Use CSS `@keyframes` for the marquee and scroll-reveal zoom.
- Generate the hero image and save it to `src/assets/hero-interior.jpg` using the agent image generator.
- Add a route for `/inquiry` so navigation works.
- Update SEO head for home and inquiry routes with title, description, OG, and Twitter tags.

Out of scope
- No backend / database / form submission persistence (will be client-side confirmation toast only). If you want actual form handling via email or Lovable Cloud, let me know and I’ll extend the plan.
- No blog or project detail pages unless requested.

Deliverables
- Polished home page matching the described scroll behavior and visual hierarchy.
- Dedicated inquiry page.
- Responsive layout for mobile and desktop.
- Generated hero image asset.
