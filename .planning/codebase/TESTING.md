# Testing Patterns

**Analysis Date:** 2026-01-17

## Test Framework

**E2E Runner:**
- Playwright 1.57.0
- Config: `playwright.config.ts` in project root

**Unit Testing:**
- Vitest 4.0.17 (configured but minimal usage)
- Coverage: @vitest/coverage-v8

**Component Testing:**
- Storybook 10.1.11 with @storybook/addon-vitest
- Stories double as visual tests

**Run Commands:**
```bash
npm run test:e2e              # Run all E2E tests
npm run test:e2e:ui           # Playwright UI mode
npm run test:e2e:report       # View test report
npm run storybook             # Run Storybook dev
npm run build-storybook       # Build static Storybook
```

## Test File Organization

**E2E Tests:**
- Location: `e2e/*.spec.ts`
- Pattern: `{feature}.spec.ts`
- Current tests:
  - `auth.spec.ts` - Authentication flows
  - `homepage.spec.ts` - Homepage rendering
  - `i18n.spec.ts` - Internationalization
  - `navigation.spec.ts` - Navigation behavior

**Storybook Stories:**
- Location: `src/stories/*.stories.tsx`
- Pattern: `{Component}.stories.tsx`
- Current stories:
  - `Button.stories.tsx`
  - `Card.stories.tsx`
  - `Input.stories.tsx`
  - `Animation.stories.tsx`
  - `Layout.stories.tsx`

**Structure:**
```
project/
├── e2e/                     # E2E tests
│   ├── auth.spec.ts
│   ├── homepage.spec.ts
│   ├── i18n.spec.ts
│   └── navigation.spec.ts
└── src/stories/             # Storybook stories
    ├── Button.stories.tsx
    ├── Card.stories.tsx
    └── ...
```

## E2E Test Structure

**Playwright Pattern:**
```typescript
import { test, expect } from "@playwright/test"

test.describe("Feature Name", () => {
  test("should do something", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator("selector")).toBeVisible()
  })
})
```

**Playwright Config (`playwright.config.ts`):**
- Test directory: `./e2e`
- Base URL: `http://localhost:3000`
- Browsers: Chromium, Firefox, WebKit
- Web server: Starts Next.js before tests
- Retries: 2 on CI, 0 locally

## Storybook Structure

**Story Pattern:**
```typescript
import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Click me",
  },
}
```

**Storybook Addons:**
- @storybook/addon-a11y - Accessibility checks
- @storybook/addon-docs - Documentation
- @storybook/addon-vitest - Vitest integration
- @storybook/addon-onboarding - Getting started

## Coverage

**Requirements:**
- No enforced coverage target
- E2E covers critical user paths
- Storybook covers component states

**Current Coverage:**
- Authentication flows: E2E tested
- Homepage: E2E tested
- i18n routing: E2E tested
- Navigation: E2E tested
- UI components: Storybook stories

## Test Types

**E2E Tests (`e2e/`):**
- Full browser automation
- Test user flows end-to-end
- Run against built Next.js app
- Cross-browser (Chrome, Firefox, Safari)

**Visual Tests (Storybook):**
- Component isolation
- State variations
- Accessibility checks (a11y addon)
- Manual review of visual output

**Unit Tests:**
- Minimal current usage
- Vitest configured but not heavily used
- Consider adding for utility functions

## Common Patterns

**Page Navigation:**
```typescript
test("navigates to about page", async ({ page }) => {
  await page.goto("/")
  await page.click('a[href="/about"]')
  await expect(page).toHaveURL("/en/about")
})
```

**Locale Testing:**
```typescript
test("switches language", async ({ page }) => {
  await page.goto("/en")
  await page.click('[data-testid="language-switcher"]')
  await page.click('text=한국어')
  await expect(page).toHaveURL("/ko")
})
```

**Auth Flow:**
```typescript
test("shows login page", async ({ page }) => {
  await page.goto("/auth/signin")
  await expect(page.locator('text=Sign In')).toBeVisible()
})
```

## Test Data

**Fixtures:**
- Not currently structured in separate directory
- Inline data in test files
- Consider adding `e2e/fixtures/` if needed

**Mocking:**
- No mock server currently
- Tests run against real (dev) environment
- Supabase in demo mode for unauthenticated tests

## Running Tests

**Local Development:**
```bash
# Start dev server, then run tests
npm run dev
npm run test:e2e

# Or use Playwright UI
npm run test:e2e:ui
```

**CI (GitHub Actions):**
- `.github/workflows/ci.yml` runs tests
- Uses production build for testing
- Reports uploaded as artifacts

---

*Testing analysis: 2026-01-17*
*Update when test patterns change*
