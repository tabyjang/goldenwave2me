/**
 * Animation Utilities - Common Motion Functions
 *
 * 모든 애니메이션 컴포넌트에서 공통으로 사용하는 유틸리티 함수들
 */

'use client'

import { useEffect, useState } from 'react'
import { warmElegance } from '@/tokens'

// ============================================================================
// Motion Configurations
// ============================================================================

/**
 * 공통 Spring 애니메이션 설정
 */
export const spring = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
} as const

/**
 * 부드러운 Spring 설정
 */
export const smoothSpring = {
  type: 'spring',
  stiffness: 200,
  damping: 25,
} as const

/**
 * 빠른 Spring 설정
 */
export const fastSpring = {
  type: 'spring',
  stiffness: 400,
  damping: 17,
} as const

// ============================================================================
// Token Colors
// ============================================================================

/**
 * 토큰 시스템의 색상을 애니메이션에서 쉽게 사용
 */
export const tokenColors = {
  primary: warmElegance.colors.primary[500],
  primaryLight: warmElegance.colors.primary[400],
  primaryDark: warmElegance.colors.primary[600],
  accent: warmElegance.colors.accent[500],
  accentLight: warmElegance.colors.accent[400],
  success: warmElegance.colors.semantic.success[500],
  warning: warmElegance.colors.semantic.warning[500],
  error: warmElegance.colors.semantic.error[500],
}

// ============================================================================
// Accessibility - Reduced Motion
// ============================================================================

/**
 * prefers-reduced-motion 미디어 쿼리 감지
 *
 * 사용자가 애니메이션 줄이기를 선호하는지 확인
 * 접근성 지원을 위해 필수
 *
 * @returns true if user prefers reduced motion
 *
 * @example
 * const prefersReducedMotion = useReducedMotion()
 * if (prefersReducedMotion) {
 *   // 애니메이션 비활성화 또는 단순화
 * }
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return prefersReducedMotion
}

// ============================================================================
// Math Utilities
// ============================================================================

/**
 * 두 점 사이의 거리 계산
 */
export function calculateDistance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  const dx = x2 - x1
  const dy = y2 - y1
  return Math.sqrt(dx * dx + dy * dy)
}

/**
 * 값을 특정 범위에서 다른 범위로 매핑
 *
 * @example
 * mapRange(5, 0, 10, 0, 100) // 50
 * mapRange(2, 0, 10, -1, 1) // -0.6
 */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

/**
 * 값을 min과 max 사이로 제한
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * 선형 보간 (Linear Interpolation)
 */
export function lerp(start: number, end: number, t: number): number {
  return start * (1 - t) + end * t
}

// ============================================================================
// Element Utilities
// ============================================================================

/**
 * 요소의 중심점 좌표 계산
 */
export function getElementCenter(element: HTMLElement): { x: number; y: number } {
  const rect = element.getBoundingClientRect()
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  }
}

/**
 * 마우스 이벤트로부터 요소 내부의 상대 좌표 계산
 */
export function getRelativePosition(
  event: React.MouseEvent,
  element: HTMLElement
): { x: number; y: number; normalizedX: number; normalizedY: number } {
  const rect = element.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  return {
    x,
    y,
    normalizedX: x / rect.width, // 0-1 범위
    normalizedY: y / rect.height, // 0-1 범위
  }
}

// ============================================================================
// Animation Variants (Framer Motion용)
// ============================================================================

/**
 * 자주 사용하는 Framer Motion variants
 */
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const slideUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const slideDownVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}
