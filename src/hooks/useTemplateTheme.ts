"use client"

import { createContext, useContext } from "react"
import type { ThemeConfig, ThemeName } from "@/types/theme"
import { getTheme, defaultTheme } from "@/themes"

interface TemplateThemeContextValue {
  theme: ThemeConfig
  themeName: ThemeName
}

export const TemplateThemeContext = createContext<TemplateThemeContextValue>({
  theme: getTheme(defaultTheme),
  themeName: defaultTheme,
})

export function useTemplateTheme() {
  const context = useContext(TemplateThemeContext)
  if (!context) {
    throw new Error("useTemplateTheme must be used within TemplateThemeProvider")
  }
  return context
}
