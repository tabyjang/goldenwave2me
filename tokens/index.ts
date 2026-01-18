/**
 * Design Token System - Main Export
 *
 * 모든 디자인 토큰을 한 곳에서 import할 수 있도록 제공
 *
 * @example
 * import { warmElegance, typography, spacing } from '@/tokens'
 * import { getAllPackages, getCSSVariables } from '@/tokens'
 */

// ============================================================================
// Color Tokens
// ============================================================================

export {
  warmElegance,
  royalMauve,
  modernSage,
  midnightLuxe,
  nordicFrost,
  classicGold,
} from './colors'

export type {
  ColorScale,
  SemanticColors,
  ColorToken,
  ColorPackage,
} from './colors'

// ============================================================================
// Typography Tokens
// ============================================================================

export { typography } from './typography'
export type { Typography } from './typography'

// ============================================================================
// Spacing Tokens
// ============================================================================

export { spacing } from './spacing'
export type { Spacing } from './spacing'

// ============================================================================
// Shadow Tokens
// ============================================================================

export { shadows } from './shadows'
export type { Shadows } from './shadows'

// ============================================================================
// Animation Tokens
// ============================================================================

export { animations } from './animations'
export type { Animations } from './animations'

// ============================================================================
// Utility Functions
// ============================================================================

export {
  getAllPackages,
  getColorPackage,
  getPackageNames,
  getCSSVariables,
  getCSSVariablesString,
  getTailwindConfig,
  hexToOklch,
  getOklchCSSVariables,
  isDark,
  hexToRgb,
  rgbToHex,
  comparePackages,
} from './utils'

// ============================================================================
// Default Export (기본 색상 패키지)
// ============================================================================

export { warmElegance as default } from './colors'
