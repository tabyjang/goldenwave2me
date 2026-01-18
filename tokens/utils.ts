/**
 * Design Token System - Utility Functions
 *
 * 토큰을 CSS 변수, Tailwind Config 등으로 변환하는 유틸리티
 */

import type { ColorPackage, ColorScale } from './colors'
import {
  warmElegance,
  royalMauve,
  modernSage,
  midnightLuxe,
  nordicFrost,
  classicGold,
} from './colors'

// ============================================================================
// Color Package Management
// ============================================================================

/**
 * 모든 색상 패키지 가져오기
 */
export function getAllPackages(): ColorPackage[] {
  return [
    warmElegance,
    royalMauve,
    modernSage,
    midnightLuxe,
    nordicFrost,
    classicGold,
  ]
}

/**
 * 이름으로 색상 패키지 가져오기
 */
export function getColorPackage(name: string): ColorPackage | undefined {
  const packages = getAllPackages()
  return packages.find((pkg) => pkg.name === name)
}

/**
 * 색상 패키지 이름 목록 가져오기
 */
export function getPackageNames(): string[] {
  return getAllPackages().map((pkg) => pkg.name)
}

// ============================================================================
// CSS Variables Generation
// ============================================================================

/**
 * CSS 변수 형식으로 변환
 * 예: { '--color-primary-500': '#C4A77D' }
 */
export function getCSSVariables(pkg: ColorPackage): Record<string, string> {
  const cssVars: Record<string, string> = {}

  // Primary colors
  Object.entries(pkg.colors.primary).forEach(([scale, value]) => {
    cssVars[`--color-primary-${scale}`] = value
  })

  // Accent colors
  Object.entries(pkg.colors.accent).forEach(([scale, value]) => {
    cssVars[`--color-accent-${scale}`] = value
  })

  // Neutral colors
  Object.entries(pkg.colors.neutral).forEach(([scale, value]) => {
    cssVars[`--color-neutral-${scale}`] = value
  })

  // Semantic colors
  Object.entries(pkg.colors.semantic.success).forEach(([scale, value]) => {
    cssVars[`--color-success-${scale}`] = value
  })
  Object.entries(pkg.colors.semantic.warning).forEach(([scale, value]) => {
    cssVars[`--color-warning-${scale}`] = value
  })
  Object.entries(pkg.colors.semantic.error).forEach(([scale, value]) => {
    cssVars[`--color-error-${scale}`] = value
  })
  Object.entries(pkg.colors.semantic.info).forEach(([scale, value]) => {
    cssVars[`--color-info-${scale}`] = value
  })

  return cssVars
}

/**
 * CSS 변수를 문자열로 변환 (스타일 태그에 삽입용)
 */
export function getCSSVariablesString(pkg: ColorPackage): string {
  const vars = getCSSVariables(pkg)
  return Object.entries(vars)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join('\n')
}

// ============================================================================
// Tailwind CSS Integration
// ============================================================================

/**
 * Tailwind CSS theme 객체로 변환
 */
export function getTailwindConfig(pkg: ColorPackage) {
  return {
    colors: {
      // Primary scale
      primary: scaleToTailwindColors(pkg.colors.primary),
      // Accent scale
      accent: scaleToTailwindColors(pkg.colors.accent),
      // Neutral scale
      neutral: scaleToTailwindColors(pkg.colors.neutral),
      // Semantic colors
      success: scaleToTailwindColors(pkg.colors.semantic.success),
      warning: scaleToTailwindColors(pkg.colors.semantic.warning),
      error: scaleToTailwindColors(pkg.colors.semantic.error),
      info: scaleToTailwindColors(pkg.colors.semantic.info),
    },
  }
}

/**
 * ColorScale을 Tailwind 색상 객체로 변환
 */
function scaleToTailwindColors(scale: ColorScale): Record<string, string> {
  return {
    50: scale[50],
    100: scale[100],
    200: scale[200],
    300: scale[300],
    400: scale[400],
    500: scale[500],   // DEFAULT
    600: scale[600],
    700: scale[700],
    800: scale[800],
    900: scale[900],
    950: scale[950],
    DEFAULT: scale[500], // 숫자 없이 사용 시 기본값
  }
}

// ============================================================================
// Hex to OKLCH Conversion
// ============================================================================

/**
 * Hex 색상을 OKLCH 형식으로 변환
 * 참고: 정확한 변환을 위해서는 culori 같은 라이브러리 사용 권장
 * 현재는 간단한 RGB → OKLCH 근사 변환
 */
export function hexToOklch(hex: string): string {
  // TODO: 향후 culori 라이브러리를 사용한 정확한 변환 구현
  // 현재는 플레이스홀더
  return `oklch(from ${hex} l c h)`
}

/**
 * 색상 패키지를 OKLCH CSS 변수로 변환
 */
export function getOklchCSSVariables(pkg: ColorPackage): Record<string, string> {
  const cssVars: Record<string, string> = {}

  Object.entries(pkg.colors.primary).forEach(([scale, value]) => {
    cssVars[`--color-primary-${scale}`] = hexToOklch(value)
  })

  // 나머지 색상도 동일하게 변환...
  // (필요 시 구현)

  return cssVars
}

// ============================================================================
// Color Utilities
// ============================================================================

/**
 * 색상 밝기 확인 (어두운 색인지 밝은 색인지)
 */
export function isDark(hex: string): boolean {
  const rgb = hexToRgb(hex)
  if (!rgb) return false

  // Relative luminance 계산
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255
  return luminance < 0.5
}

/**
 * Hex를 RGB로 변환
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

/**
 * RGB를 Hex로 변환
 */
export function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')
}

// ============================================================================
// Package Comparison
// ============================================================================

/**
 * 두 색상 패키지 비교
 */
export function comparePackages(pkg1: ColorPackage, pkg2: ColorPackage) {
  return {
    name1: pkg1.name,
    name2: pkg2.name,
    primaryDiff: pkg1.colors.primary[500] !== pkg2.colors.primary[500],
    accentDiff: pkg1.colors.accent[500] !== pkg2.colors.accent[500],
  }
}
