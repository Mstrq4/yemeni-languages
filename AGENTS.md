# AGENTS.md — Yemeni Languages Project

## CRITICAL: Read .design/ folder before writing ANY code
- `.design/linear-design-system.md` — Linear's dark glass design tokens
- `.design/tailwind-patterns.md` — Tailwind v4 patterns
- `.design/color-library.json` — Color palettes (use Gold & Crimson: #59171B, #FED7B8)

## Tech Stack
- Next.js 16.2.9 (App Router, Turbopack)
- Tailwind CSS v4 (CSS-first, @theme in globals.css)
- Framer Motion (animations)
- next-themes (dark/light toggle)
- lucide-react (icons)
- @fontsource/cairo (local Arabic font — UI text)
- @fontsource/amiri (local Arabic font — Musnad script display)

## CRITICAL: Tailwind v4 Dark Mode
globals.css MUST contain:
```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```
Without `@custom-variant dark`, next-themes class switching does NOT work.

## CRITICAL: Theme Rules (NEVER violate)
Every text/bg/border MUST have dark: variant:
- Primary text: `text-stone-900 dark:text-stone-50`
- Secondary text: `text-stone-600 dark:text-stone-300`
- Tertiary text: `text-stone-500 dark:text-stone-400`
- Muted text: `text-stone-400 dark:text-stone-500`
- Page bg: `bg-stone-50 dark:bg-[#030712]`
- Card bg (glass): `bg-white/70 dark:bg-white/5 backdrop-blur-xl`
- Borders: `border-stone-200 dark:border-white/10`
- Nav bg: `bg-white/80 dark:bg-[#030712]/80 backdrop-blur-xl`
- Footer bg: `bg-stone-100/80 dark:bg-[#030712]/80 backdrop-blur-xl`
- Amber buttons: `bg-amber-500 text-white` (NO dark: — stays white)
- Gradient headings: `from-amber-400 to-amber-600 bg-clip-text text-transparent`

## NEVER
- NEVER use bare `text-white` (except on amber/colored buttons)
- NEVER use `bg-white/5` without `dark:` variant
- NEVER use `!important`
- NEVER use JavaScript to manipulate theme colors
- NEVER use next/font/google — fonts are local via @fontsource

## Design Language (Linear-inspired dark glass)
- Glassmorphism: `backdrop-blur-xl` on all cards, nav, footer
- Semi-transparent borders: `dark:border-white/10`
- Luminance stacking: deeper = darker bg, elevated = slightly lighter
- Amber accent used SPARINGLY — only CTAs, active states, brand elements
- Responsive: mobile-first, `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`
- RTL: `dir="rtl"` on html, Arabic content only

## Font Usage
- Cairo (font-sans): ALL UI text, body, headings, labels
- Amiri (font-serif): ONLY for Musnad script display (𐩣𐩡𐩢)

## Responsive Grid
- Cards: `grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6`
- Sections: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5`
- Flip cards: `h-40 sm:h-48 md:h-52`

## Accessibility
- FlipCard: `role="button"`, `tabIndex={0}`, `onKeyDown` for Enter/Space
- Nav: `aria-label`, `aria-expanded`
- Theme toggle: `aria-label`

## DO NOT MODIFY
- `src/lib/data.ts` — data is final and correct
