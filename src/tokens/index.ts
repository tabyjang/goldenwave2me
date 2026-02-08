/**
 * Color Tokens Module
 *
 * 색상 패키지 시스템의 토큰 정의
 * Phase 4 (Dynamic Theme Switcher)에서 확장 예정
 */

// ============================================================================
// Types
// ============================================================================

export interface ColorScale {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  950: string
}

export interface SemanticColors {
  success: ColorScale
  warning: ColorScale
  error: ColorScale
  info: ColorScale
}

export interface ColorPackage {
  name: string
  description: string
  colors: {
    primary: ColorScale
    accent: ColorScale
    neutral: ColorScale
    semantic: SemanticColors
  }
}

// ============================================================================
// Default Color Packages
// ============================================================================

export const warmElegance: ColorPackage = {
  name: 'Warm Elegance',
  description: '따뜻하고 우아한 핑크 계열 색상',
  colors: {
    primary: {
      50: 'oklch(0.98 0.01 350)',
      100: 'oklch(0.95 0.03 350)',
      200: 'oklch(0.90 0.08 350)',
      300: 'oklch(0.82 0.15 350)',
      400: 'oklch(0.75 0.20 350)',
      500: 'oklch(0.65 0.25 350)', // Main primary
      600: 'oklch(0.55 0.22 350)',
      700: 'oklch(0.45 0.18 350)',
      800: 'oklch(0.35 0.14 350)',
      900: 'oklch(0.25 0.10 350)',
      950: 'oklch(0.15 0.06 350)',
    },
    accent: {
      50: 'oklch(0.98 0.01 195)',
      100: 'oklch(0.95 0.03 195)',
      200: 'oklch(0.88 0.08 195)',
      300: 'oklch(0.80 0.12 195)',
      400: 'oklch(0.75 0.14 195)',
      500: 'oklch(0.70 0.15 195)', // CTA cyan
      600: 'oklch(0.60 0.13 195)',
      700: 'oklch(0.50 0.11 195)',
      800: 'oklch(0.40 0.09 195)',
      900: 'oklch(0.30 0.07 195)',
      950: 'oklch(0.20 0.05 195)',
    },
    neutral: {
      50: 'oklch(0.98 0.005 350)',
      100: 'oklch(0.95 0.01 350)',
      200: 'oklch(0.90 0.02 350)',
      300: 'oklch(0.80 0.02 350)',
      400: 'oklch(0.65 0.03 350)',
      500: 'oklch(0.50 0.04 350)',
      600: 'oklch(0.40 0.05 350)',
      700: 'oklch(0.32 0.05 350)',
      800: 'oklch(0.25 0.06 350)',
      900: 'oklch(0.18 0.06 350)',
      950: 'oklch(0.12 0.05 350)',
    },
    semantic: {
      success: {
        50: 'oklch(0.98 0.02 145)',
        100: 'oklch(0.95 0.05 145)',
        200: 'oklch(0.88 0.10 145)',
        300: 'oklch(0.78 0.15 145)',
        400: 'oklch(0.68 0.18 145)',
        500: 'oklch(0.60 0.20 145)',
        600: 'oklch(0.52 0.18 145)',
        700: 'oklch(0.45 0.15 145)',
        800: 'oklch(0.38 0.12 145)',
        900: 'oklch(0.30 0.10 145)',
        950: 'oklch(0.20 0.08 145)',
      },
      warning: {
        50: 'oklch(0.98 0.02 85)',
        100: 'oklch(0.95 0.05 85)',
        200: 'oklch(0.90 0.12 85)',
        300: 'oklch(0.85 0.18 85)',
        400: 'oklch(0.78 0.20 85)',
        500: 'oklch(0.72 0.18 85)',
        600: 'oklch(0.62 0.16 85)',
        700: 'oklch(0.52 0.14 85)',
        800: 'oklch(0.42 0.12 85)',
        900: 'oklch(0.32 0.10 85)',
        950: 'oklch(0.22 0.08 85)',
      },
      error: {
        50: 'oklch(0.98 0.02 25)',
        100: 'oklch(0.95 0.05 25)',
        200: 'oklch(0.88 0.12 25)',
        300: 'oklch(0.78 0.18 25)',
        400: 'oklch(0.68 0.22 25)',
        500: 'oklch(0.58 0.24 25)',
        600: 'oklch(0.50 0.22 25)',
        700: 'oklch(0.42 0.18 25)',
        800: 'oklch(0.35 0.14 25)',
        900: 'oklch(0.28 0.10 25)',
        950: 'oklch(0.18 0.08 25)',
      },
      info: {
        50: 'oklch(0.98 0.01 230)',
        100: 'oklch(0.95 0.03 230)',
        200: 'oklch(0.88 0.08 230)',
        300: 'oklch(0.78 0.12 230)',
        400: 'oklch(0.68 0.15 230)',
        500: 'oklch(0.60 0.16 230)',
        600: 'oklch(0.52 0.14 230)',
        700: 'oklch(0.44 0.12 230)',
        800: 'oklch(0.36 0.10 230)',
        900: 'oklch(0.28 0.08 230)',
        950: 'oklch(0.18 0.06 230)',
      },
    },
  },
}

// Additional packages (stubs for now)
export const royalMauve: ColorPackage = {
  ...warmElegance,
  name: 'Royal Mauve',
  description: '권위있고 신뢰감 있는 보라 계열',
}

export const modernSage: ColorPackage = {
  ...warmElegance,
  name: 'Modern Sage',
  description: '안정감 있는 세이지 그린',
}

export const midnightLuxe: ColorPackage = {
  ...warmElegance,
  name: 'Midnight Luxe',
  description: '럭셔리한 미드나잇 블루',
}

export const nordicFrost: ColorPackage = {
  ...warmElegance,
  name: 'Nordic Frost',
  description: '현대적인 노르딕 프로스트',
}

export const classicGold: ColorPackage = {
  ...warmElegance,
  name: 'Classic Gold',
  description: '프리미엄 클래식 골드',
}

// ============================================================================
// Package Registry
// ============================================================================

const packages: ColorPackage[] = [
  warmElegance,
  royalMauve,
  modernSage,
  midnightLuxe,
  nordicFrost,
  classicGold,
]

// ============================================================================
// Exports
// ============================================================================

/**
 * 모든 색상 패키지 가져오기
 */
export function getAllPackages(): ColorPackage[] {
  return packages
}

/**
 * 이름으로 색상 패키지 가져오기
 */
export function getColorPackage(name: string): ColorPackage | undefined {
  return packages.find((pkg) => pkg.name === name)
}
