# Codebase Concerns

**Analysis Date:** 2026-01-17

## Tech Debt

**Template components duplication:**
- Issue: Each of 5 templates has similar section components with minor variations
- Files: `src/components/templates/*/hero.tsx`, `src/components/templates/*/services.tsx`, etc.
- Why: Quick prototyping to establish visual differences
- Impact: Changes to section logic require updating 5 files
- Fix approach: Extract shared logic to base components, use composition for variants

**Storybook stories not comprehensive:**
- Issue: Only basic UI components have stories, template sections missing
- Files: `src/stories/` (limited coverage)
- Why: Development prioritized features over documentation
- Impact: New developers can't easily explore all component states
- Fix approach: Add stories for sections, templates, and composed pages

## Known Bugs

**No critical bugs currently documented.**

Minor issues to verify:
- Mobile navigation behavior with i18n switching
- Dark mode flash on initial load (common with SSR)

## Security Considerations

**Supabase credentials in client bundle:**
- Risk: Anon key exposed (by design, but requires proper RLS)
- Files: `src/lib/supabase/client.ts`
- Current mitigation: Anon key is meant to be public; RLS policies control access
- Recommendations: Ensure RLS policies are properly configured in Supabase dashboard

**No rate limiting on contact form:**
- Risk: Form spam if contact form connected to backend
- Files: `src/components/sections/contact-form.tsx`
- Current mitigation: Form not connected to backend (demo only)
- Recommendations: Add rate limiting when implementing form handler

**Admin routes not protected:**
- Risk: No admin functionality exists yet, but route protection needed when added
- Current mitigation: No admin routes exist
- Recommendations: Add middleware protection before creating admin features

## Performance Bottlenecks

**Three.js bundle size:**
- Problem: 3D components add significant JS payload
- Files: `src/components/3d/*.tsx`
- Measurement: ~500KB+ for Three.js ecosystem
- Cause: Three.js is inherently large
- Improvement path: Lazy load 3D components, use dynamic imports

**All templates bundled:**
- Problem: All 5 template variants load even when viewing one
- Files: `src/components/templates/**/*.tsx`
- Measurement: Not measured but potentially impactful
- Cause: No code splitting by template
- Improvement path: Dynamic imports for template components based on route

**MDX processing on each request:**
- Problem: Blog posts processed at request time (SSR)
- Files: `src/lib/mdx/index.ts`
- Measurement: Not measured
- Cause: Dynamic MDX compilation
- Improvement path: Use ISR (Incremental Static Regeneration) for blog pages

## Fragile Areas

**Theme CSS variable generation:**
- Files: `src/themes/index.ts` - `generateCSSVariables()`
- Why fragile: Must match CSS variable names used in Tailwind config
- Common failures: Typo in variable name breaks styling silently
- Safe modification: Add TypeScript types for variable names
- Test coverage: None - consider adding unit tests

**i18n routing middleware:**
- Files: `src/middleware.ts`, `src/i18n/routing.ts`
- Why fragile: Complex interaction between next-intl, Supabase, and Next.js middleware
- Common failures: Wrong redirect loops, missing locale prefix
- Safe modification: Test all locale combinations after changes
- Test coverage: Basic E2E tests in `e2e/i18n.spec.ts`

## Scaling Limits

**Static file content (blog):**
- Current capacity: Works for dozens of posts
- Limit: Hundreds of MDX files may slow builds
- Symptoms at limit: Long build times
- Scaling path: Move to CMS (Contentful, Sanity) or database

**Template variants:**
- Current capacity: 5 templates manageable
- Limit: Adding more increases bundle and maintenance
- Scaling path: Template selection at build time or separate deployments

## Dependencies at Risk

**next-intl 4.x:**
- Risk: Relatively new major version, API may evolve
- Impact: i18n functionality
- Migration plan: Monitor for updates, pin version

**Motion (Framer Motion successor):**
- Risk: New package name, ecosystem still stabilizing
- Impact: All animations
- Migration plan: Watch for API changes

**Tailwind CSS 4.x:**
- Risk: Major version with breaking changes from v3
- Impact: All styling
- Migration plan: Already on v4, stable

## Missing Critical Features

**Contact form backend:**
- Problem: Contact form has no submit handler
- Files: `src/components/sections/contact-form.tsx`
- Current workaround: Form is visual only
- Blocks: Lead capture functionality
- Implementation: Add API route or Supabase function

**Payment integration:**
- Problem: Pricing page exists but no checkout
- Files: `src/app/[locale]/(marketing)/pricing/page.tsx`
- Current workaround: Placeholder content
- Blocks: Monetization
- Implementation: Stripe integration, subscription management

**Blog comments:**
- Problem: No commenting system
- Current workaround: None (blog is read-only)
- Blocks: User engagement
- Implementation: Supabase-based comments or third-party (Disqus)

## Test Coverage Gaps

**Unit tests:**
- What's not tested: Utility functions, theme generation, MDX processing
- Files: `src/lib/utils.ts`, `src/themes/*.ts`, `src/lib/mdx/*.ts`
- Risk: Logic bugs go unnoticed
- Priority: Medium
- Difficulty to test: Low - pure functions

**Template component visual regression:**
- What's not tested: Visual appearance of template sections
- Risk: CSS changes break design
- Priority: Medium
- Difficulty to test: Need Chromatic or similar service

**Server actions:**
- What's not tested: `src/lib/actions/auth.ts`
- Risk: Auth actions may fail silently
- Priority: High
- Difficulty to test: Need to mock Supabase

---

*Concerns audit: 2026-01-17*
*Update as issues are fixed or new ones discovered*
