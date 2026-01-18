/**
 * Color Schemes - Token System Integration
 *
 * ⚠️ 이 파일은 이제 /tokens 폴더의 디자인 토큰을 재사용합니다.
 * 하드코딩된 색상 값은 토큰 시스템으로 마이그레이션되었습니다.
 *
 * 기존 ColorScheme 인터페이스는 하위 호환성을 위해 유지됩니다.
 */

import {
  warmElegance as warmEleganceToken,
  royalMauve as royalMauveToken,
  modernSage as modernSageToken,
  midnightLuxe as midnightLuxeToken,
  nordicFrost as nordicFrostToken,
  classicGold as classicGoldToken,
  type ColorPackage,
} from '@/tokens'

// ============================================================================
// Legacy Interface (하위 호환성)
// ============================================================================

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

// ============================================================================
// Token to Legacy Adapter
// ============================================================================

/**
 * ColorPackage (토큰 시스템)을 ColorScheme (레거시 형식)으로 변환
 */
function tokenToLegacy(pkg: ColorPackage): ColorScheme {
  const slugify = (name: string) =>
    name.toLowerCase().replace(/\s+/g, '-')

  return {
    name: pkg.name,
    slug: slugify(pkg.name),
    description: pkg.description,
    colors: {
      // Primary colors - 토큰의 primary 스케일 사용
      primary: pkg.colors.primary[500],       // BASE
      primaryLight: pkg.colors.primary[400],
      primaryDark: pkg.colors.primary[600],

      // Secondary colors - 토큰의 neutral 스케일 사용
      secondary: pkg.colors.neutral[600],
      secondaryLight: pkg.colors.neutral[400],

      // Accent colors - 토큰의 accent 스케일 사용
      accent: pkg.colors.accent[700],
      accentLight: pkg.colors.accent[500],

      // Backgrounds - neutral 어두운 톤
      bgDark: pkg.colors.neutral[950],
      bgLight: pkg.colors.neutral[900],
      bgCard: pkg.colors.neutral[800],

      // Text - neutral 밝은 톤
      textPrimary: pkg.colors.neutral[50],
      textSecondary: pkg.colors.primary[400],
      textMuted: pkg.colors.neutral[400],

      // Borders - primary 투명도
      borderDefault: `${pkg.colors.primary[500]}33`,  // 20% opacity
      borderStrong: `${pkg.colors.primary[500]}66`,   // 40% opacity

      // Gradients - 3색 조합
      gradientPrimary: `linear-gradient(135deg, ${pkg.colors.primary[500]} 0%, ${pkg.colors.accent[500]} 50%, ${pkg.colors.accent[700]} 100%)`,
      gradientAccent: `linear-gradient(135deg, ${pkg.colors.accent[500]} 0%, ${pkg.colors.accent[700]} 100%)`,

      // Semantic States - 토큰의 semantic 색상 사용
      success: pkg.colors.semantic.success[500],
      warning: pkg.colors.semantic.warning[500],
      error: pkg.colors.semantic.error[500],
    },
  }
}

// ============================================================================
// Color Packages (토큰 기반)
// ============================================================================

/**
 * 패키지 1: Warm Elegance - 따뜻한 고급스러움
 * 토큰: warmElegance from /tokens
 */
export const warmElegance: ColorScheme = tokenToLegacy(warmEleganceToken)

/**
 * 패키지 2: Royal Mauve - 왕실의 우아함
 * 토큰: royalMauve from /tokens
 */
export const royalMauve: ColorScheme = tokenToLegacy(royalMauveToken)

/**
 * 패키지 3: Modern Sage - 모던 세이지
 * 토큰: modernSage from /tokens
 */
export const modernSage: ColorScheme = tokenToLegacy(modernSageToken)

/**
 * 패키지 4: Midnight Luxe - 미드나잇 럭스
 * 토큰: midnightLuxe from /tokens
 */
export const midnightLuxe: ColorScheme = tokenToLegacy(midnightLuxeToken)

/**
 * 패키지 5: Nordic Frost - 노르딕 프로스트
 * 토큰: nordicFrost from /tokens
 */
export const nordicFrost: ColorScheme = tokenToLegacy(nordicFrostToken)

/**
 * 패키지 6: Classic Gold - 클래식 골드
 * 토큰: classicGold from /tokens
 */
export const classicGold: ColorScheme = tokenToLegacy(classicGoldToken)

// ============================================================================
// Exports
// ============================================================================

/**
 * 모든 색상 패키지 (slug 기반 접근)
 */
export const colorSchemes = {
  'warm-elegance': warmElegance,
  'royal-mauve': royalMauve,
  'modern-sage': modernSage,
  'midnight-luxe': midnightLuxe,
  'nordic-frost': nordicFrost,
  'classic-gold': classicGold,
} as const

export type ColorSchemeName = keyof typeof colorSchemes

/**
 * CSS 변수 생성 유틸리티 (레거시 형식)
 */
export function generateCSSVariables(scheme: ColorScheme): Record<string, string> {
  return {
    '--color-primary': scheme.colors.primary,
    '--color-primary-light': scheme.colors.primaryLight,
    '--color-primary-dark': scheme.colors.primaryDark,
    '--color-secondary': scheme.colors.secondary,
    '--color-secondary-light': scheme.colors.secondaryLight,
    '--color-accent': scheme.colors.accent,
    '--color-accent-light': scheme.colors.accentLight,
    '--color-bg-dark': scheme.colors.bgDark,
    '--color-bg-light': scheme.colors.bgLight,
    '--color-bg-card': scheme.colors.bgCard,
    '--color-text-primary': scheme.colors.textPrimary,
    '--color-text-secondary': scheme.colors.textSecondary,
    '--color-text-muted': scheme.colors.textMuted,
    '--color-border-default': scheme.colors.borderDefault,
    '--color-border-strong': scheme.colors.borderStrong,
    '--color-gradient-primary': scheme.colors.gradientPrimary,
    '--color-gradient-accent': scheme.colors.gradientAccent,
    '--color-success': scheme.colors.success,
    '--color-warning': scheme.colors.warning,
    '--color-error': scheme.colors.error,
  }
}

// ============================================================================
// Migration Notes
// ============================================================================

/**
 * 🚀 마이그레이션 가이드:
 *
 * 기존 코드는 그대로 작동합니다:
 * ```ts
 * import { warmElegance } from '@/styles/color-schemes'
 * console.log(warmElegance.colors.primary) // #C4A77D
 * ```
 *
 * 새로운 토큰 시스템 사용 (권장):
 * ```ts
 * import { warmElegance } from '@/tokens'
 * console.log(warmElegance.colors.primary[500]) // #C4A77D
 * ```
 *
 * 차이점:
 * - 레거시: warmElegance.colors.primary (단일 값)
 * - 토큰: warmElegance.colors.primary[500] (11단계 스케일)
 */
