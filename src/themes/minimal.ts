import type { ThemeConfig } from "@/types/theme"

export const minimalTheme: ThemeConfig = {
  name: "minimal",
  displayName: "미니멀 프로페셔널",
  description: "깔끔하고 신뢰감 있는 기업형 디자인",

  colors: {
    light: {
      primary: "#1a1a2e",
      primaryForeground: "#ffffff",
      secondary: "#d4af37",
      secondaryForeground: "#1a1a1a",
      accent: "#f8f9fa",
      accentForeground: "#1a1a1a",

      background: "#ffffff",
      foreground: "#1a1a1a",
      muted: "#f5f5f5",
      mutedForeground: "#737373",

      card: "#ffffff",
      cardForeground: "#1a1a1a",
      border: "#e5e5e5",

      destructive: "#ef4444",
      destructiveForeground: "#ffffff",
    },
    dark: {
      primary: "#d4af37",
      primaryForeground: "#1a1a1a",
      secondary: "#1a1a2e",
      secondaryForeground: "#ffffff",
      accent: "#262626",
      accentForeground: "#ffffff",

      background: "#0a0a0a",
      foreground: "#fafafa",
      muted: "#171717",
      mutedForeground: "#a3a3a3",

      card: "#171717",
      cardForeground: "#fafafa",
      border: "#262626",

      destructive: "#dc2626",
      destructiveForeground: "#ffffff",
    },
  },

  typography: {
    fontFamily: "var(--font-pretendard), system-ui, sans-serif",
    headingWeight: 700,
    bodyWeight: 400,
    baseSize: "16px",
    scale: 1.25,
  },

  layout: {
    maxWidth: "1200px",
    headerHeight: "72px",
    headerStyle: "fixed",
    footerStyle: "minimal",
    borderRadius: "8px",
    sectionPadding: "96px",
  },

  animation: {
    type: "subtle",
    duration: 0.4,
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    stagger: 0.1,
  },

  features: {
    particles: false,
    waves: false,
    glassmorphism: false,
    gradients: false,
    scrollSnap: false,
  },
}
