"use client"

import { createContext, useContext, useEffect, type ReactNode } from "react"
import {
  type ColorScheme,
  type ColorSchemeName,
  colorSchemes,
  generateCSSVariables,
} from "@/styles/color-schemes"

interface ColorSchemeContextValue {
  scheme: ColorScheme
  schemeName: ColorSchemeName
}

const ColorSchemeContext = createContext<ColorSchemeContextValue | null>(null)

interface ColorSchemeProviderProps {
  children: ReactNode
  schemeName: ColorSchemeName
}

export function ColorSchemeProvider({ children, schemeName }: ColorSchemeProviderProps) {
  const scheme = colorSchemes[schemeName]

  useEffect(() => {
    // CSS 변수를 :root에 주입
    const cssVariables = generateCSSVariables(scheme)
    const root = document.documentElement

    Object.entries(cssVariables).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })

    return () => {
      // cleanup
      Object.keys(cssVariables).forEach((key) => {
        root.style.removeProperty(key)
      })
    }
  }, [scheme])

  return (
    <ColorSchemeContext.Provider value={{ scheme, schemeName }}>
      {children}
    </ColorSchemeContext.Provider>
  )
}

export function useColorScheme() {
  const context = useContext(ColorSchemeContext)
  if (!context) {
    throw new Error("useColorScheme must be used within a ColorSchemeProvider")
  }
  return context
}

// 서버사이드에서 사용할 인라인 스타일 생성
export function getColorSchemeStyle(schemeName: ColorSchemeName): string {
  const scheme = colorSchemes[schemeName]
  const cssVariables = generateCSSVariables(scheme)

  return Object.entries(cssVariables)
    .map(([key, value]) => `${key}: ${value}`)
    .join("; ")
}
