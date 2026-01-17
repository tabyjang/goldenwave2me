import type { ThemeConfig } from "@/types/theme"

export const boldTheme: ThemeConfig = {
  name: "bold",
  displayName: "대담한 골드러시",
  description: "네온 골드와 대담한 타이포그래피로 강렬한 인상",

  colors: {
    light: {
      primary: "#FFD700",
      primaryForeground: "#1a1a1a",
      secondary: "#FF8C00",
      secondaryForeground: "#1a1a1a",
      accent: "#FFF8DC",
      accentForeground: "#1a1a1a",

      background: "#fffef5",
      foreground: "#1a1a1a",
      muted: "#fef3c7",
      mutedForeground: "#92400e",

      card: "#ffffff",
      cardForeground: "#1a1a1a",
      border: "#fcd34d",

      destructive: "#dc2626",
      destructiveForeground: "#ffffff",
    },
    dark: {
      primary: "#FFD700",
      primaryForeground: "#0a0a0a",
      secondary: "#FFA500",
      secondaryForeground: "#0a0a0a",
      accent: "#2d2006",
      accentForeground: "#FFD700",

      background: "#0a0805",
      foreground: "#fefce8",
      muted: "#1c1608",
      mutedForeground: "#fcd34d",

      card: "#1c1608",
      cardForeground: "#fefce8",
      border: "#422006",

      destructive: "#ef4444",
      destructiveForeground: "#ffffff",
    },
  },

  typography: {
    fontFamily: "var(--font-pretendard), system-ui, sans-serif",
    headingFontFamily: "var(--font-pretendard), system-ui, sans-serif",
    headingWeight: 900,
    bodyWeight: 400,
    baseSize: "18px",
    scale: 1.333,
  },

  layout: {
    maxWidth: "1400px",
    headerHeight: "80px",
    headerStyle: "floating",
    footerStyle: "detailed",
    borderRadius: "16px",
    sectionPadding: "120px",
  },

  animation: {
    type: "bold",
    duration: 0.6,
    easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    stagger: 0.15,
  },

  features: {
    particles: true,
    waves: false,
    glassmorphism: false,
    gradients: true,
    scrollSnap: false,
  },
}
