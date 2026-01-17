import type { ThemeConfig, ThemeName } from "@/types/theme"
import { minimalTheme } from "./minimal"
import { boldTheme } from "./bold"
import { darkTheme } from "./dark"
import { waveTheme } from "./wave"
import { onepageTheme } from "./onepage"

// 모든 테마 맵
export const themes: Record<ThemeName, ThemeConfig> = {
  minimal: minimalTheme,
  bold: boldTheme,
  dark: darkTheme,
  wave: waveTheme,
  onepage: onepageTheme,
}

// 테마 목록
export const themeList: ThemeConfig[] = [
  minimalTheme,
  boldTheme,
  darkTheme,
  waveTheme,
  onepageTheme,
]

// 기본 테마
export const defaultTheme: ThemeName = "minimal"

// 테마 가져오기
export function getTheme(name: ThemeName): ThemeConfig {
  return themes[name] || themes[defaultTheme]
}

// CSS 변수 생성
export function generateCSSVariables(
  theme: ThemeConfig,
  mode: "light" | "dark"
): Record<string, string> {
  const colors = theme.colors[mode]

  return {
    "--color-primary": colors.primary,
    "--color-primary-foreground": colors.primaryForeground,
    "--color-secondary": colors.secondary,
    "--color-secondary-foreground": colors.secondaryForeground,
    "--color-accent": colors.accent,
    "--color-accent-foreground": colors.accentForeground,
    "--color-background": colors.background,
    "--color-foreground": colors.foreground,
    "--color-muted": colors.muted,
    "--color-muted-foreground": colors.mutedForeground,
    "--color-card": colors.card,
    "--color-card-foreground": colors.cardForeground,
    "--color-border": colors.border,
    "--color-destructive": colors.destructive,
    "--color-destructive-foreground": colors.destructiveForeground,

    "--font-family": theme.typography.fontFamily,
    "--font-heading": theme.typography.headingFontFamily || theme.typography.fontFamily,
    "--font-heading-weight": String(theme.typography.headingWeight),
    "--font-body-weight": String(theme.typography.bodyWeight),
    "--font-base-size": theme.typography.baseSize,

    "--layout-max-width": theme.layout.maxWidth,
    "--layout-header-height": theme.layout.headerHeight,
    "--layout-border-radius": theme.layout.borderRadius,
    "--layout-section-padding": theme.layout.sectionPadding,

    "--animation-duration": `${theme.animation.duration}s`,
    "--animation-easing": theme.animation.easing,
    "--animation-stagger": `${theme.animation.stagger}s`,
  }
}

// 개별 테마 내보내기
export { minimalTheme, boldTheme, darkTheme, waveTheme, onepageTheme }
