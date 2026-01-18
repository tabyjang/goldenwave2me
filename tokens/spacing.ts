/**
 * Design Token System - Spacing Tokens
 *
 * 8px 그리드 시스템 기반 간격 토큰
 */

export const spacing = {
  // 픽셀 값 (8px 그리드)
  0: '0',          // 0px
  0.5: '0.125rem', // 2px
  1: '0.25rem',    // 4px
  1.5: '0.375rem', // 6px
  2: '0.5rem',     // 8px  - BASE UNIT
  2.5: '0.625rem', // 10px
  3: '0.75rem',    // 12px
  3.5: '0.875rem', // 14px
  4: '1rem',       // 16px - 2x BASE
  5: '1.25rem',    // 20px
  6: '1.5rem',     // 24px - 3x BASE
  7: '1.75rem',    // 28px
  8: '2rem',       // 32px - 4x BASE
  9: '2.25rem',    // 36px
  10: '2.5rem',    // 40px - 5x BASE
  11: '2.75rem',   // 44px
  12: '3rem',      // 48px - 6x BASE
  14: '3.5rem',    // 56px - 7x BASE
  16: '4rem',      // 64px - 8x BASE
  20: '5rem',      // 80px - 10x BASE
  24: '6rem',      // 96px - 12x BASE
  28: '7rem',      // 112px - 14x BASE
  32: '8rem',      // 128px - 16x BASE
  36: '9rem',      // 144px - 18x BASE
  40: '10rem',     // 160px - 20x BASE
  44: '11rem',     // 176px
  48: '12rem',     // 192px - 24x BASE
  52: '13rem',     // 208px
  56: '14rem',     // 224px
  60: '15rem',     // 240px
  64: '16rem',     // 256px - 32x BASE
  72: '18rem',     // 288px
  80: '20rem',     // 320px
  96: '24rem',     // 384px

  // 의미론적 간격
  xs: '0.5rem',    // 8px
  sm: '1rem',      // 16px
  md: '1.5rem',    // 24px
  lg: '2rem',      // 32px
  xl: '3rem',      // 48px
  '2xl': '4rem',   // 64px
  '3xl': '6rem',   // 96px
}

export type Spacing = typeof spacing
