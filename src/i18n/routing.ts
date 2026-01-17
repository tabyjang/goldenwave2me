import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  // Supported locales
  locales: ["ko", "en"],

  // Default locale (Korean)
  defaultLocale: "ko",

  // Only show locale prefix when not default
  localePrefix: "as-needed",
})

// Type-safe locale type
export type Locale = (typeof routing.locales)[number]
