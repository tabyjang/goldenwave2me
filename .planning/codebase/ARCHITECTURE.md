# Architecture

**Analysis Date:** 2026-01-17

## Pattern Overview

**Overall:** Multi-Template Marketing Website with Theme System

**Key Characteristics:**
- Next.js App Router architecture
- 5 switchable template themes (minimal, bold, dark, wave, onepage)
- Internationalization (en/ko) via next-intl
- Supabase for authentication (optional - works in demo mode)
- MDX-based blog system

## Layers

**App Layer (Routes):**
- Purpose: Page routing and server-side rendering
- Location: `src/app/`
- Contains: Route handlers, layouts, pages
- Route groups: `(demo)`, `(marketing)`, `[locale]`

**Components Layer:**
- Purpose: Reusable UI components
- Location: `src/components/`
- Sublayers:
  - `ui/` - Base UI primitives (Button, Card, Input)
  - `sections/` - Page sections (Hero, Features, CTA)
  - `templates/` - Template-specific variants (5 themes)
  - `layout/` - Shared layout components (Header, Footer)
  - `auth/` - Authentication components
  - `3d/` - Three.js components
  - `animation/` - Motion components

**Theme Layer:**
- Purpose: Theme configuration and CSS variable generation
- Location: `src/themes/`
- Contains: 5 theme configs (minimal, bold, dark, wave, onepage)
- Pattern: Each theme defines colors, typography, layout, animation

**Library Layer:**
- Purpose: Shared utilities and integrations
- Location: `src/lib/`
- Contains: Supabase clients, MDX utils, auth helpers, site config

**I18n Layer:**
- Purpose: Internationalization
- Location: `src/i18n/`, `messages/`
- Contains: Routing config, navigation helpers, translation files

## Data Flow

**Page Request Flow:**

1. Request → `src/middleware.ts` (i18n routing, Supabase session)
2. Route matched → `src/app/[locale]/(marketing)/page.tsx`
3. Layout chain → Root → Locale → Marketing layouts
4. Page renders → Fetches data (static/dynamic)
5. Components render → Theme applied via CSS variables

**Theme Application:**
1. Theme selected (URL param or config)
2. `src/themes/index.ts` → `getTheme(name)`
3. `generateCSSVariables()` → CSS custom properties
4. Components use CSS variables for styling

**Authentication Flow:**
1. User action → `src/components/auth/oauth-buttons.tsx`
2. Redirect → Supabase OAuth provider
3. Callback → `src/app/api/auth/callback/route.ts`
4. Session → Stored in cookies via `@supabase/ssr`

**State Management:**
- Server-first (Next.js RSC)
- Supabase session for auth state
- next-themes for dark mode toggle
- URL params for template/theme selection

## Key Abstractions

**ThemeConfig:**
- Purpose: Define complete theme styling
- Location: `src/types/theme.ts`
- Properties: colors (light/dark), typography, layout, animation
- Usage: `src/themes/*.ts` implementations

**Template Components:**
- Purpose: Theme-specific section variants
- Location: `src/components/templates/{theme}/`
- Pattern: Each template has Hero, Services, Portfolio, CTA, etc.
- Example: `src/components/templates/dark/hero.tsx`

**Supabase Client:**
- Purpose: Database and auth access
- Location: `src/lib/supabase/`
- Variants: `client.ts` (browser), `server.ts` (server), `middleware.ts`
- Pattern: Returns null when not configured (demo mode)

## Entry Points

**Web App:**
- Location: `src/app/layout.tsx` (root layout)
- Triggers: HTTP requests
- Responsibilities: HTML shell, providers, fonts

**Demo Routes:**
- Location: `src/app/(demo)/`
- Purpose: Template showcase without locale
- Entry: `src/app/(demo)/page.tsx`

**Marketing Routes:**
- Location: `src/app/[locale]/(marketing)/`
- Purpose: Actual site pages with i18n
- Pages: home, about, blog, contact, pricing, services, faq

**API Routes:**
- Location: `src/app/api/`
- Contains: Auth callback handler

## Error Handling

**Strategy:** Next.js error boundaries + not-found pages

**Patterns:**
- `src/app/[locale]/not-found.tsx` for 404
- `src/app/[locale]/auth/error/page.tsx` for auth errors
- Supabase client returns null when not configured (graceful fallback)

## Cross-Cutting Concerns

**Internationalization:**
- next-intl with middleware routing
- Messages: `messages/en.json`, `messages/ko.json`
- Helper: `src/i18n/navigation.ts` for localized links

**Dark Mode:**
- next-themes provider
- `src/components/mode-toggle.tsx` toggle component
- Each theme has light/dark color variants

**SEO:**
- `src/app/sitemap.ts` - Dynamic sitemap
- `src/app/robots.ts` - Robots.txt
- `src/components/json-ld.tsx` - Structured data
- `src/lib/metadata.ts` - Metadata generation

---

*Architecture analysis: 2026-01-17*
*Update when major patterns change*
