# Technology Stack

**Analysis Date:** 2026-01-17

## Languages

**Primary:**
- TypeScript 5.x - All application code (`src/**/*.ts`, `src/**/*.tsx`)

**Secondary:**
- JavaScript - Config files (`eslint.config.mjs`, `postcss.config.mjs`)
- MDX - Blog content (`content/blog/**/*.mdx`)

## Runtime

**Environment:**
- Node.js (Next.js 16.1.1 runtime)
- React 19.2.3 (latest)

**Package Manager:**
- npm
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- Next.js 16.1.1 - Full-stack web framework with App Router (`src/app/`)
- React 19.2.3 - UI library
- Tailwind CSS 4 - Utility-first CSS (`postcss.config.mjs`)

**Testing:**
- Playwright 1.57.0 - E2E testing (`e2e/*.spec.ts`)
- Vitest 4.0.17 - Unit testing (configured but minimal usage)
- Storybook 10.1.11 - Component documentation (`src/stories/`)

**Build/Dev:**
- Vite 7.3.1 - Build tool (via Storybook)
- ESLint 9 - Linting (`eslint.config.mjs`)
- Prettier 3.7.4 - Code formatting (`.prettierrc`)

## Key Dependencies

**Critical:**
- next-intl 4.7.0 - Internationalization (en/ko) (`src/i18n/`)
- next-themes 0.4.6 - Dark mode support (`src/components/theme-provider.tsx`)
- @supabase/supabase-js 2.90.1 - Authentication & database (`src/lib/supabase/`)

**UI:**
- @radix-ui/* - Accessible UI primitives (accordion, avatar, dropdown-menu, label, slot)
- lucide-react 0.562.0 - Icon library
- class-variance-authority 0.7.1 - Component variants
- tailwind-merge 3.4.0 - Tailwind class merging
- motion 12.26.2 - Animations (Framer Motion successor)

**3D/Visual:**
- three 0.182.0 - 3D graphics (`src/components/3d/`)
- @react-three/fiber 9.5.0 - React renderer for Three.js
- @react-three/drei 10.7.7 - Three.js helpers

**Content:**
- next-mdx-remote 5.0.0 - MDX rendering (`src/lib/mdx/`)
- gray-matter 4.0.3 - Frontmatter parsing

## Configuration

**Environment:**
- `.env.local` (gitignored) for Supabase credentials
- Required vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Graceful fallback to demo mode when Supabase not configured (`src/lib/supabase/client.ts`)

**Build:**
- `tsconfig.json` - TypeScript config (strict mode, `@/*` path alias)
- `next.config.ts` - Next.js configuration
- `postcss.config.mjs` - PostCSS with Tailwind
- `playwright.config.ts` - E2E test config

## Platform Requirements

**Development:**
- Any platform with Node.js
- No Docker required
- Optional: Supabase local development

**Production:**
- Vercel (primary target)
- Static export possible
- SSR/ISR supported

---

*Stack analysis: 2026-01-17*
*Update after major dependency changes*
