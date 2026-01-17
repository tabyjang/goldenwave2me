import type { ThemeConfig } from "@/types/theme"

export const onepageTheme: ThemeConfig = {
  name: "onepage",
  displayName: "원페이지 임팩트",
  description: "빠르고 강렬한 원페이지 랜딩",

  colors: {
    light: {
      primary: "#18181b",
      primaryForeground: "#ffffff",
      secondary: "#D4AF37",
      secondaryForeground: "#18181b",
      accent: "#f4f4f5",
      accentForeground: "#18181b",

      background: "#ffffff",
      foreground: "#18181b",
      muted: "#f4f4f5",
      mutedForeground: "#71717a",

      card: "#ffffff",
      cardForeground: "#18181b",
      border: "#e4e4e7",

      destructive: "#dc2626",
      destructiveForeground: "#ffffff",
    },
    dark: {
      primary: "#fafafa",
      primaryForeground: "#18181b",
      secondary: "#D4AF37",
      secondaryForeground: "#18181b",
      accent: "#27272a",
      accentForeground: "#fafafa",

      background: "#09090b",
      foreground: "#fafafa",
      muted: "#18181b",
      mutedForeground: "#a1a1aa",

      card: "#18181b",
      cardForeground: "#fafafa",
      border: "#27272a",

      destructive: "#ef4444",
      destructiveForeground: "#ffffff",
    },
  },

  typography: {
    fontFamily: "var(--font-pretendard), system-ui, sans-serif",
    headingWeight: 800,
    bodyWeight: 400,
    baseSize: "18px",
    scale: 1.414,
  },

  layout: {
    maxWidth: "100%",
    headerHeight: "64px",
    headerStyle: "fixed",
    footerStyle: "minimal",
    borderRadius: "0px",
    sectionPadding: "0px",
  },

  animation: {
    type: "bold",
    duration: 0.5,
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    stagger: 0.08,
  },

  features: {
    particles: false,
    waves: false,
    glassmorphism: false,
    gradients: true,
    scrollSnap: true,
  },
}
