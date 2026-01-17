"use client"

import { useEffect, useMemo } from "react"
import { useTheme } from "next-themes"
import type { ThemeName } from "@/types/theme"
import { getTheme, generateCSSVariables } from "@/themes"
import { TemplateThemeContext } from "@/hooks/useTemplateTheme"

interface TemplateThemeProviderProps {
  children: React.ReactNode
  themeName: ThemeName
}

export function TemplateThemeProvider({
  children,
  themeName,
}: TemplateThemeProviderProps) {
  const { resolvedTheme } = useTheme()
  const theme = useMemo(() => getTheme(themeName), [themeName])

  // CSS 변수 적용
  useEffect(() => {
    const mode = resolvedTheme === "dark" ? "dark" : "light"
    const variables = generateCSSVariables(theme, mode)

    Object.entries(variables).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value)
    })

    // 테마 데이터 속성 설정
    document.documentElement.setAttribute("data-template-theme", themeName)
  }, [theme, themeName, resolvedTheme])

  const contextValue = useMemo(
    () => ({
      theme,
      themeName,
    }),
    [theme, themeName]
  )

  return (
    <TemplateThemeContext.Provider value={contextValue}>
      {children}
    </TemplateThemeContext.Provider>
  )
}
