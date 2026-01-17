# External Integrations

**Analysis Date:** 2026-01-17

## APIs & External Services

**Payment Processing:**
- Not currently integrated
- Planned for future (pricing page exists but no checkout)

**Email/SMS:**
- Not currently integrated
- Contact form exists but needs backend

**External APIs:**
- None beyond authentication

## Data Storage

**Database:**
- Supabase PostgreSQL (optional)
  - Connection: via `NEXT_PUBLIC_SUPABASE_URL` env var
  - Client: `@supabase/supabase-js` v2.90.1
  - Schema: `supabase/schema.sql`
  - Types: `src/lib/supabase/types.ts`

**File Storage:**
- Static assets in `public/`
- No user upload functionality currently
- Supabase Storage available if needed

**Caching:**
- Next.js built-in caching (ISR, SSG)
- No Redis or external cache

## Authentication & Identity

**Auth Provider:**
- Supabase Auth
  - Implementation: `@supabase/ssr` for SSR-compatible auth
  - Token storage: httpOnly cookies
  - Session management: Supabase handles refresh tokens

**Client Setup (`src/lib/supabase/client.ts`):**
```typescript
export function createClient() {
  if (!isSupabaseConfigured()) {
    return null  // Demo mode fallback
  }
  return createBrowserClient<Database>(...)
}
```

**Server Setup (`src/lib/supabase/server.ts`):**
- Cookie-based session for Server Components
- Used in server actions and API routes

**Middleware (`src/lib/supabase/middleware.ts`):**
- Session refresh on each request
- Integrated with Next.js middleware

**OAuth Integrations:**
- Google OAuth (configured via Supabase dashboard)
- GitHub OAuth (configured via Supabase dashboard)
- UI: `src/components/auth/oauth-buttons.tsx`

**Auth Pages:**
- Sign in: `src/app/[locale]/auth/signin/page.tsx`
- Sign up: `src/app/[locale]/auth/signup/page.tsx`
- Error: `src/app/[locale]/auth/error/page.tsx`
- Forgot password: `src/app/[locale]/auth/forgot-password/page.tsx`
- Update password: `src/app/[locale]/auth/update-password/page.tsx`

## Monitoring & Observability

**Error Tracking:**
- Not currently integrated
- Candidate: Sentry

**Analytics:**
- Not currently integrated
- Candidate: Google Analytics, Mixpanel

**Logs:**
- Vercel built-in logs (stdout)
- No structured logging

## CI/CD & Deployment

**Hosting:**
- Target: Vercel
  - Deployment: Git push triggers deploy
  - Preview: Per-branch preview deployments
  - Environment vars: Configured in Vercel dashboard

**CI Pipeline:**
- GitHub Actions (`.github/workflows/ci.yml`)
  - Runs: Lint, type check, E2E tests
  - Triggers: Push to main, pull requests

**Build Process:**
```bash
npm run build    # Next.js production build
npm run start    # Start production server
```

## Environment Configuration

**Development:**
- Required env vars:
  - `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anon key
- Optional (works without - demo mode):
  - All Supabase vars (graceful fallback)
- Secrets location: `.env.local` (gitignored)

**Demo Mode:**
- When Supabase not configured, site runs in demo mode
- Auth disabled, all pages accessible
- Detected in `src/lib/supabase/client.ts`

**Production:**
- Secrets management: Vercel environment variables
- Same vars as development, real Supabase credentials

## Webhooks & Callbacks

**Incoming:**
- Supabase Auth Callback: `/api/auth/callback`
  - Location: `src/app/api/auth/callback/route.ts`
  - Purpose: Exchange auth code for session after OAuth
  - Verification: Supabase SDK handles token exchange

**Outgoing:**
- None currently

## Third-Party SDKs

**Supabase:**
- `@supabase/supabase-js` - Core client
- `@supabase/ssr` - Server-side auth helpers

**UI Libraries:**
- Radix UI - Accessible primitives
- Lucide React - Icons
- Motion (Framer) - Animations

**3D:**
- Three.js - 3D graphics
- React Three Fiber - React renderer
- React Three Drei - Helpers

## Integration Status

| Service | Status | Location |
|---------|--------|----------|
| Supabase Auth | ✅ Integrated | `src/lib/supabase/` |
| Supabase DB | ✅ Integrated | `src/lib/supabase/` |
| OAuth (Google) | ✅ Configured | Supabase dashboard |
| OAuth (GitHub) | ✅ Configured | Supabase dashboard |
| Payment | ❌ Not started | - |
| Email | ❌ Not started | - |
| Analytics | ❌ Not started | - |
| Error tracking | ❌ Not started | - |

---

*Integration audit: 2026-01-17*
*Update when adding/removing external services*
