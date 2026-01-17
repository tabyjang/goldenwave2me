// 색상 패키지 시스템
// 2026 트렌드: 차분하면서도 고급스러운 3색 조합
// 참조: Elegant Themes "5 Color Palettes For Balanced Web Design In 2026"

export interface ColorScheme {
  name: string
  slug: string
  description: string
  colors: {
    // Primary brand colors (Color 1 - 주요 브랜드 색상)
    primary: string
    primaryLight: string
    primaryDark: string

    // Secondary colors (Color 2 - 보조 색상, 다른 색조)
    secondary: string
    secondaryLight: string

    // Accent for CTAs (Color 3 - 강조 색상, 완전히 다른 색조)
    accent: string
    accentLight: string

    // Backgrounds
    bgDark: string
    bgLight: string
    bgCard: string

    // Text
    textPrimary: string
    textSecondary: string
    textMuted: string

    // Borders
    borderDefault: string
    borderStrong: string

    // Gradients (3색 조합 그라데이션)
    gradientPrimary: string
    gradientAccent: string

    // States
    success: string
    warning: string
    error: string
  }
}

// 패키지 1: Warm Elegance - 따뜻한 고급스러움 (이미지 참조)
// Color 1: Warm Tan (따뜻한 탄)
// Color 2: Golden Amber (골든 앰버)
// Color 3: Deep Rust (딥 러스트/테라코타)
export const warmElegance: ColorScheme = {
  name: "Warm Elegance",
  slug: "warm-elegance",
  description: "따뜻하고 세련된 느낌의 고급스러운 조합",
  colors: {
    // Color 1: Warm Tan
    primary: "#C4A77D",
    primaryLight: "#D9C5A7",
    primaryDark: "#A68B5B",

    // Color 2: Golden Amber (다른 색조)
    secondary: "#D4A373",
    secondaryLight: "#E8C4A0",

    // Color 3: Deep Rust/Terracotta (완전히 다른 색조)
    accent: "#9C4221",
    accentLight: "#C65D3A",

    // Backgrounds - 부드러운 크림/차콜
    bgDark: "#1A1814",
    bgLight: "#2D2923",
    bgCard: "#37322C",

    // Text
    textPrimary: "#FAF7F2",
    textSecondary: "#D9C5A7",
    textMuted: "#8C8378",

    // Borders
    borderDefault: "rgba(196, 167, 125, 0.2)",
    borderStrong: "rgba(196, 167, 125, 0.4)",

    // Gradients - 3색 조합
    gradientPrimary: "linear-gradient(135deg, #C4A77D 0%, #D4A373 50%, #9C4221 100%)",
    gradientAccent: "linear-gradient(135deg, #D4A373 0%, #9C4221 100%)",

    success: "#6B8E50",
    warning: "#D4A373",
    error: "#9C4221",
  },
}

// 패키지 2: Royal Mauve - 왕실의 우아함
// Color 1: Dusty Mauve (더스티 모브)
// Color 2: Deep Navy (딥 네이비)
// Color 3: Rose Gold (로즈 골드)
export const royalMauve: ColorScheme = {
  name: "Royal Mauve",
  slug: "royal-mauve",
  description: "우아하고 신비로운 왕실 느낌의 조합",
  colors: {
    // Color 1: Dusty Mauve
    primary: "#8B6F7D",
    primaryLight: "#B49AAA",
    primaryDark: "#6D5563",

    // Color 2: Deep Navy (완전히 다른 색조)
    secondary: "#1E3A5F",
    secondaryLight: "#2D5A8A",

    // Color 3: Rose Gold (따뜻한 메탈릭)
    accent: "#B4838D",
    accentLight: "#D4A8B0",

    // Backgrounds
    bgDark: "#12101A",
    bgLight: "#1E1B28",
    bgCard: "#2A2635",

    // Text
    textPrimary: "#F5F0F2",
    textSecondary: "#B49AAA",
    textMuted: "#7A7284",

    // Borders
    borderDefault: "rgba(139, 111, 125, 0.2)",
    borderStrong: "rgba(139, 111, 125, 0.4)",

    // Gradients
    gradientPrimary: "linear-gradient(135deg, #8B6F7D 0%, #1E3A5F 50%, #B4838D 100%)",
    gradientAccent: "linear-gradient(135deg, #1E3A5F 0%, #B4838D 100%)",

    success: "#6B9080",
    warning: "#D4A373",
    error: "#A85B5B",
  },
}

// 패키지 3: Modern Sage - 모던 세이지
// Color 1: Sage Green (세이지 그린)
// Color 2: Warm Gray (웜 그레이)
// Color 3: Copper (코퍼/구리)
export const modernSage: ColorScheme = {
  name: "Modern Sage",
  slug: "modern-sage",
  description: "자연스럽고 현대적인 세련된 조합",
  colors: {
    // Color 1: Sage Green
    primary: "#87A878",
    primaryLight: "#A8C49A",
    primaryDark: "#6B8A5E",

    // Color 2: Warm Gray (중립적이면서 따뜻한)
    secondary: "#6B6458",
    secondaryLight: "#8A8275",

    // Color 3: Copper (메탈릭 따뜻함)
    accent: "#B87333",
    accentLight: "#D4944F",

    // Backgrounds
    bgDark: "#141612",
    bgLight: "#1F211C",
    bgCard: "#2A2D27",

    // Text
    textPrimary: "#F2F5EF",
    textSecondary: "#A8C49A",
    textMuted: "#7D8577",

    // Borders
    borderDefault: "rgba(135, 168, 120, 0.2)",
    borderStrong: "rgba(135, 168, 120, 0.4)",

    // Gradients
    gradientPrimary: "linear-gradient(135deg, #87A878 0%, #6B6458 50%, #B87333 100%)",
    gradientAccent: "linear-gradient(135deg, #87A878 0%, #B87333 100%)",

    success: "#87A878",
    warning: "#D4944F",
    error: "#A85B5B",
  },
}

// 패키지 4: Midnight Luxe - 미드나잇 럭스
// Color 1: Deep Navy (딥 네이비)
// Color 2: Champagne (샴페인)
// Color 3: Burgundy (버건디)
export const midnightLuxe: ColorScheme = {
  name: "Midnight Luxe",
  slug: "midnight-luxe",
  description: "깊고 럭셔리한 밤의 고급스러움",
  colors: {
    // Color 1: Deep Navy
    primary: "#1A1F3A",
    primaryLight: "#2D3557",
    primaryDark: "#0F1226",

    // Color 2: Champagne (따뜻하고 밝은 대비)
    secondary: "#F5E6C8",
    secondaryLight: "#FFF5E0",

    // Color 3: Burgundy (깊은 레드 계열)
    accent: "#722F37",
    accentLight: "#8B3D47",

    // Backgrounds
    bgDark: "#0C0E18",
    bgLight: "#151828",
    bgCard: "#1E2235",

    // Text
    textPrimary: "#F5F5F5",
    textSecondary: "#F5E6C8",
    textMuted: "#6B7194",

    // Borders
    borderDefault: "rgba(245, 230, 200, 0.15)",
    borderStrong: "rgba(245, 230, 200, 0.3)",

    // Gradients
    gradientPrimary: "linear-gradient(135deg, #1A1F3A 0%, #F5E6C8 50%, #722F37 100%)",
    gradientAccent: "linear-gradient(135deg, #F5E6C8 0%, #722F37 100%)",

    success: "#6B9080",
    warning: "#D4A373",
    error: "#722F37",
  },
}

// 패키지 5: Nordic Frost - 노르딕 프로스트
// Color 1: Slate Blue (슬레이트 블루)
// Color 2: Soft Peach (소프트 피치)
// Color 3: Forest Green (포레스트 그린)
export const nordicFrost: ColorScheme = {
  name: "Nordic Frost",
  slug: "nordic-frost",
  description: "차가우면서도 따뜻한 북유럽 감성",
  colors: {
    // Color 1: Slate Blue
    primary: "#5B7089",
    primaryLight: "#7A92AD",
    primaryDark: "#465569",

    // Color 2: Soft Peach (따뜻한 대비)
    secondary: "#F5C6AA",
    secondaryLight: "#FFD9C4",

    // Color 3: Forest Green (자연 색상)
    accent: "#2D5A27",
    accentLight: "#3D7A35",

    // Backgrounds
    bgDark: "#0F1316",
    bgLight: "#1A1F24",
    bgCard: "#242B32",

    // Text
    textPrimary: "#F0F4F8",
    textSecondary: "#B8C9D9",
    textMuted: "#6B7A8A",

    // Borders
    borderDefault: "rgba(91, 112, 137, 0.2)",
    borderStrong: "rgba(91, 112, 137, 0.4)",

    // Gradients
    gradientPrimary: "linear-gradient(135deg, #5B7089 0%, #F5C6AA 50%, #2D5A27 100%)",
    gradientAccent: "linear-gradient(135deg, #F5C6AA 0%, #2D5A27 100%)",

    success: "#2D5A27",
    warning: "#D4944F",
    error: "#8B4444",
  },
}

// 패키지 6: Classic Gold - 클래식 골드 (기존 유지, 3색 조합으로 개선)
// Color 1: Classic Gold (클래식 골드)
// Color 2: Deep Charcoal (딥 차콜)
// Color 3: Burgundy Wine (버건디 와인)
export const classicGold: ColorScheme = {
  name: "Classic Gold",
  slug: "classic-gold",
  description: "시간을 초월한 클래식한 황금빛 고급스러움",
  colors: {
    // Color 1: Classic Gold
    primary: "#D4AF37",
    primaryLight: "#E8C85C",
    primaryDark: "#B8960B",

    // Color 2: Deep Charcoal (중립적 대비)
    secondary: "#2C2C2C",
    secondaryLight: "#404040",

    // Color 3: Burgundy Wine (럭셔리 레드)
    accent: "#6B2737",
    accentLight: "#8B3A4D",

    // Backgrounds
    bgDark: "#09090B",
    bgLight: "#141416",
    bgCard: "#1C1C1F",

    // Text
    textPrimary: "#FFFFFF",
    textSecondary: "#E8C85C",
    textMuted: "#71717A",

    // Borders
    borderDefault: "rgba(212, 175, 55, 0.2)",
    borderStrong: "rgba(212, 175, 55, 0.4)",

    // Gradients - 3색 조합
    gradientPrimary: "linear-gradient(135deg, #D4AF37 0%, #2C2C2C 50%, #6B2737 100%)",
    gradientAccent: "linear-gradient(135deg, #D4AF37 0%, #6B2737 100%)",

    success: "#10B981",
    warning: "#D4AF37",
    error: "#6B2737",
  },
}

// 모든 색상 패키지
export const colorSchemes = {
  "warm-elegance": warmElegance,
  "royal-mauve": royalMauve,
  "modern-sage": modernSage,
  "midnight-luxe": midnightLuxe,
  "nordic-frost": nordicFrost,
  "classic-gold": classicGold,
} as const

export type ColorSchemeName = keyof typeof colorSchemes

// CSS 변수 생성 유틸리티
export function generateCSSVariables(scheme: ColorScheme): Record<string, string> {
  return {
    "--color-primary": scheme.colors.primary,
    "--color-primary-light": scheme.colors.primaryLight,
    "--color-primary-dark": scheme.colors.primaryDark,
    "--color-secondary": scheme.colors.secondary,
    "--color-secondary-light": scheme.colors.secondaryLight,
    "--color-accent": scheme.colors.accent,
    "--color-accent-light": scheme.colors.accentLight,
    "--color-bg-dark": scheme.colors.bgDark,
    "--color-bg-light": scheme.colors.bgLight,
    "--color-bg-card": scheme.colors.bgCard,
    "--color-text-primary": scheme.colors.textPrimary,
    "--color-text-secondary": scheme.colors.textSecondary,
    "--color-text-muted": scheme.colors.textMuted,
    "--color-border-default": scheme.colors.borderDefault,
    "--color-border-strong": scheme.colors.borderStrong,
    "--color-gradient-primary": scheme.colors.gradientPrimary,
    "--color-gradient-accent": scheme.colors.gradientAccent,
    "--color-success": scheme.colors.success,
    "--color-warning": scheme.colors.warning,
    "--color-error": scheme.colors.error,
  }
}
