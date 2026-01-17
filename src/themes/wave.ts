import type { ThemeConfig } from "@/types/theme"

export const waveTheme: ThemeConfig = {
  name: "wave",
  displayName: "인터랙티브 웨이브",
  description: "파도/물결 모션으로 브랜드 아이덴티티 표현",

  colors: {
    light: {
      primary: "#0ea5e9",
      primaryForeground: "#ffffff",
      secondary: "#D4AF37",
      secondaryForeground: "#1a1a1a",
      accent: "#f0f9ff",
      accentForeground: "#0369a1",

      background: "#ffffff",
      foreground: "#0c4a6e",
      muted: "#e0f2fe",
      mutedForeground: "#0369a1",

      card: "#ffffff",
      cardForeground: "#0c4a6e",
      border: "#bae6fd",

      destructive: "#dc2626",
      destructiveForeground: "#ffffff",
    },
    dark: {
      primary: "#38bdf8",
      primaryForeground: "#0c4a6e",
      secondary: "#D4AF37",
      secondaryForeground: "#0a0a0a",
      accent: "#0c4a6e",
      accentForeground: "#38bdf8",

      background: "#0c1929",
      foreground: "#f0f9ff",
      muted: "#164e63",
      mutedForeground: "#7dd3fc",

      card: "#0e2439",
      cardForeground: "#f0f9ff",
      border: "#0369a1",

      destructive: "#ef4444",
      destructiveForeground: "#ffffff",
    },
  },

  typography: {
    fontFamily: "var(--font-pretendard), system-ui, sans-serif",
    headingWeight: 700,
    bodyWeight: 400,
    baseSize: "17px",
    scale: 1.25,
  },

  layout: {
    maxWidth: "1320px",
    headerHeight: "76px",
    headerStyle: "fixed",
    footerStyle: "detailed",
    borderRadius: "20px",
    sectionPadding: "110px",
  },

  animation: {
    type: "wave",
    duration: 0.7,
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    stagger: 0.1,
  },

  features: {
    particles: false,
    waves: true,
    glassmorphism: true,
    gradients: true,
    scrollSnap: false,
  },
}
