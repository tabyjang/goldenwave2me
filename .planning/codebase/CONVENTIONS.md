# Coding Conventions

**Analysis Date:** 2026-01-17

## Naming Patterns

**Files:**
- kebab-case for all source files (`hero.tsx`, `site-config.ts`, `blog-data.ts`)
- PascalCase for Storybook story files (`Button.stories.tsx`, `Card.stories.tsx`)
- `*.spec.ts` for E2E tests (`auth.spec.ts`, `navigation.spec.ts`)
- `index.ts` for barrel exports

**Functions:**
- camelCase for all functions (`getTheme`, `createClient`, `generateCSSVariables`)
- Async functions: no special prefix
- Event handlers: `handle*` pattern where applicable

**Variables:**
- camelCase for variables
- UPPER_SNAKE_CASE not commonly used (prefer const objects)
- Destructured imports preferred

**Types:**
- PascalCase for interfaces and types (`ThemeConfig`, `ThemeName`, `Database`)
- No I prefix for interfaces
- Type suffix for type aliases (`ThemeName` not `ThemeType`)

## Code Style

**Formatting (`.prettierrc`):**
- No semicolons (`"semi": false`)
- Double quotes (`"singleQuote": false`)
- 2-space indentation (`"tabWidth": 2`)
- 80 character line length (`"printWidth": 80`)
- Trailing commas in ES5 positions (`"trailingComma": "es5"`)

**Linting:**
- ESLint 9 with Next.js config
- Prettier integration (`eslint-config-prettier`)
- Run: `npm run lint`
- Format: `npm run format`

## Import Organization

**Order:**
1. React/Next.js imports
2. External packages (@radix-ui, lucide-react, etc.)
3. Internal modules with path alias (`@/components/`, `@/lib/`)
4. Relative imports (., ..)
5. Type imports

**Path Aliases:**
- `@/*` maps to `src/*` (configured in `tsconfig.json`)
- Example: `import { Button } from "@/components/ui/button"`

**Grouping:**
- Blank lines between groups
- Named imports preferred over default

## Error Handling

**Patterns:**
- Optional chaining for potentially null values
- Nullish coalescing for defaults
- Graceful fallback when Supabase not configured

**Example pattern (`src/lib/supabase/client.ts`):**
```typescript
export function createClient() {
  if (!isSupabaseConfigured()) {
    return null  // Demo mode
  }
  return createBrowserClient<Database>(...)
}
```

**Auth errors:**
- Redirect to `/auth/error` page
- Error messages via URL params

## Logging

**Framework:**
- No explicit logging framework
- Console.log for development only
- Next.js built-in logging in production

**Patterns:**
- Avoid console.log in committed code
- Use error boundaries for React errors

## Comments

**When to Comment:**
- Korean comments used for explanations (bilingual codebase)
- JSDoc not commonly used
- Inline comments for complex logic

**Examples from codebase:**
```typescript
// 모든 테마 맵
export const themes: Record<ThemeName, ThemeConfig> = {...}

// Check if Supabase is properly configured
function isSupabaseConfigured(): boolean {...}
```

**TODO Comments:**
- `// TODO:` format
- Not frequently used in current codebase

## Function Design

**Size:**
- Small, focused functions preferred
- Component functions kept under 100 lines typically

**Parameters:**
- Destructured props in components
- Type annotations always present
- Default values in function signatures

**Return Values:**
- Explicit return types for public functions
- React components return JSX.Element
- Null returned for missing/unconfigured state

## Module Design

**Exports:**
- Named exports preferred
- Default exports for page components (Next.js convention)
- Barrel exports via `index.ts`

**Barrel Files:**
- `src/components/ui/index.ts` - UI components
- `src/components/layout/index.ts` - Layout components
- `src/themes/index.ts` - Theme exports

**Component Structure:**
```typescript
// Imports
import { ... } from "..."

// Types (if local)
interface Props { ... }

// Component
export function ComponentName({ prop1, prop2 }: Props) {
  // hooks
  // logic
  // return JSX
}
```

## React Patterns

**Server Components:**
- Default for pages and layouts
- `"use client"` directive only when needed

**Client Components:**
- Marked with `"use client"` at top
- Used for interactivity, hooks, browser APIs

**Providers:**
- Located in `src/components/providers/`
- Composed in layout files

---

*Convention analysis: 2026-01-17*
*Update when patterns change*
