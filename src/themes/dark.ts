import type { ThemeConfig } from "@/types/theme"

export const darkTheme: ThemeConfig = {
  name: "dark",
  displayName: "다크 프리미엄",
  description: "고급스러운 다크 테마 + 골드 악센트",

  colors: {
    light: {
      // 라이트 모드에서도 다크 베이스 유지
      primary: "#D4AF37",
      primaryForeground: "#0a0a0a",
      secondary: "#B8860B",
      secondaryForeground: "#0a0a0a",
      accent: "#1a1a1a",
      accentForeground: "#D4AF37",

      background: "#f5f5f5",
      foreground: "#1a1a1a",
      muted: "#e5e5e5",
      mutedForeground: "#525252",

      card: "#ffffff",
      cardForeground: "#1a1a1a",
      border: "#d4d4d4",

      destructive: "#dc2626",
      destructiveForeground: "#ffffff",
    },
    dark: {
      primary: "#D4AF37",
      primaryForeground: "#0a0a0a",
      secondary: "#B8860B",
      secondaryForeground: "#ffffff",
      accent: "#1f1f1f",
      accentForeground: "#D4AF37",

      background: "#0a0a0a",
      foreground: "#fafafa",
      muted: "#1a1a1a",
      mutedForeground: "#a1a1aa",

      card: "#141414",
      cardForeground: "#fafafa",
      border: "#262626",

      destructive: "#ef4444",
      destructiveForeground: "#ffffff",
    },
  },

  typography: {
    fontFamily: "var(--font-pretendard), system-ui, sans-serif",
    headingWeight: 600,
    bodyWeight: 400,
    baseSize: "16px",
    scale: 1.25,
  },

  layout: {
    maxWidth: "1280px",
    headerHeight: "72px",
    headerStyle: "floating",
    footerStyle: "dark",
    borderRadius: "12px",
    sectionPadding: "100px",
  },

  animation: {
    type: "subtle",
    duration: 0.5,
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    stagger: 0.12,
  },

  features: {
    particles: true,
    waves: false,
    glassmorphism: true,
    gradients: true,
    scrollSnap: false,
  },
}
