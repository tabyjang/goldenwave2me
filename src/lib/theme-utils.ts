/**
 * Theme Switcher Utilities
 *
 * 런타임에 색상 패키지를 동적으로 전환하는 유틸리티 함수들
 * Phase 4 (Dynamic Theme Switcher)의 기반이 됩니다.
 */

'use client'

import { getAllPackages, getColorPackage, type ColorPackage } from '@/tokens'

// ============================================================================
// Types
// ============================================================================

export type ColorPackageName =
  | 'Warm Elegance'
  | 'Royal Mauve'
  | 'Modern Sage'
  | 'Midnight Luxe'
  | 'Nordic Frost'
  | 'Classic Gold'

// ============================================================================
// LocalStorage Keys
// ============================================================================

const STORAGE_KEY = 'goldenwave-color-package'

// ============================================================================
// Package Management
// ============================================================================

/**
 * 현재 활성화된 색상 패키지 이름 가져오기
 */
export function getActivePackageName(): ColorPackageName {
  if (typeof window === 'undefined') return 'Warm Elegance'

  const saved = localStorage.getItem(STORAGE_KEY)
  return (saved as ColorPackageName) || 'Warm Elegance'
}

/**
 * 현재 활성화된 색상 패키지 객체 가져오기
 */
export function getActivePackage(): ColorPackage {
  const name = getActivePackageName()
  const pkg = getColorPackage(name)
  if (!pkg) {
    console.warn(`Package "${name}" not found, falling back to Warm Elegance`)
    return getColorPackage('Warm Elegance')!
  }
  return pkg
}

/**
 * 사용 가능한 모든 패키지 이름 목록
 */
export function getAvailablePackageNames(): ColorPackageName[] {
  return getAllPackages().map((pkg) => pkg.name) as ColorPackageName[]
}

// ============================================================================
// Theme Switching
// ============================================================================

/**
 * CSS 변수를 :root에 주입하는 헬퍼 함수
 */
function setCSSVariable(name: string, value: string) {
  document.documentElement.style.setProperty(name, value)
}

/**
 * 색상 패키지를 활성화 (CSS 변수 업데이트)
 *
 * @param packageName - 활성화할 색상 패키지 이름
 * @returns 성공 여부
 */
export function setColorPackage(packageName: ColorPackageName): boolean {
  if (typeof window === 'undefined') return false

  const pkg = getColorPackage(packageName)
  if (!pkg) {
    console.error(`Package "${packageName}" not found`)
    return false
  }

  try {
    // Primary colors
    setCSSVariable('--primary', pkg.colors.primary[500])
    setCSSVariable('--primary-foreground', pkg.colors.primary[50])

    // Accent colors
    setCSSVariable('--accent', pkg.colors.accent[100])
    setCSSVariable('--accent-foreground', pkg.colors.accent[950])

    // Muted colors
    setCSSVariable('--muted', pkg.colors.neutral[100])
    setCSSVariable('--muted-foreground', pkg.colors.neutral[500])

    // Secondary colors
    setCSSVariable('--secondary', pkg.colors.neutral[100])
    setCSSVariable('--secondary-foreground', pkg.colors.neutral[900])

    // Border & Input
    setCSSVariable('--border', pkg.colors.neutral[200])
    setCSSVariable('--input', pkg.colors.neutral[200])

    // Ring (focus outline)
    setCSSVariable('--ring', pkg.colors.primary[400])

    // Chart colors
    setCSSVariable('--chart-1', pkg.colors.primary[500])
    setCSSVariable('--chart-2', pkg.colors.accent[500])
    setCSSVariable('--chart-3', pkg.colors.semantic.info[500])
    setCSSVariable('--chart-4', pkg.colors.semantic.success[500])
    setCSSVariable('--chart-5', pkg.colors.semantic.warning[500])

    // Sidebar
    setCSSVariable('--sidebar', pkg.colors.neutral[50])
    setCSSVariable('--sidebar-foreground', pkg.colors.neutral[900])
    setCSSVariable('--sidebar-primary', pkg.colors.primary[500])
    setCSSVariable('--sidebar-primary-foreground', pkg.colors.primary[50])
    setCSSVariable('--sidebar-accent', pkg.colors.accent[100])
    setCSSVariable('--sidebar-accent-foreground', pkg.colors.accent[950])
    setCSSVariable('--sidebar-border', pkg.colors.neutral[200])
    setCSSVariable('--sidebar-ring', pkg.colors.primary[400])

    // Dark mode용 변수도 업데이트 (CSS에서 .dark 선택자가 우선하지만)
    // 필요시 여기에 dark mode 변수 업데이트 추가

    // LocalStorage에 저장
    localStorage.setItem(STORAGE_KEY, packageName)

    console.log(`✅ Color package changed to: ${packageName}`)
    return true
  } catch (error) {
    console.error('Failed to set color package:', error)
    return false
  }
}

/**
 * 저장된 색상 패키지 불러오기 (페이지 로드 시 호출)
 */
export function loadSavedPackage() {
  const savedName = getActivePackageName()
  if (savedName !== 'Warm Elegance') {
    setColorPackage(savedName)
  }
}

// ============================================================================
// Industry Recommendations (Phase 4용 준비)
// ============================================================================

export type IndustryType =
  | 'cafe'
  | 'legal'
  | 'medical'
  | 'tech'
  | 'luxury'
  | 'finance'
  | 'creative'

/**
 * 업종별 추천 색상 패키지
 */
export const industryRecommendations: Record<IndustryType, ColorPackageName> = {
  cafe: 'Warm Elegance',        // 카페, 베이커리 - 따뜻함
  legal: 'Royal Mauve',          // 법률, 컨설팅 - 권위, 신뢰
  medical: 'Modern Sage',        // 의료, 웰니스 - 안정감
  tech: 'Nordic Frost',          // IT, 테크 - 현대적
  luxury: 'Midnight Luxe',       // 고급 브랜드 - 럭셔리
  finance: 'Classic Gold',       // 금융, 보석 - 프리미엄
  creative: 'Warm Elegance',     // 크리에이티브 - 따뜻함
}

/**
 * 업종에 맞는 색상 패키지 추천
 */
export function recommendPackageForIndustry(industry: IndustryType): ColorPackageName {
  return industryRecommendations[industry]
}

// ============================================================================
// React Hook (Phase 4에서 사용 예정)
// ============================================================================

/**
 * React Hook: 색상 패키지 상태 관리
 *
 * @example
 * const { currentPackage, setPackage, availablePackages } = useColorPackage()
 */
export function useColorPackage() {
  const [current, setCurrent] = React.useState<ColorPackageName>(getActivePackageName())

  const setPackage = (name: ColorPackageName) => {
    if (setColorPackage(name)) {
      setCurrent(name)
    }
  }

  return {
    currentPackage: current,
    setPackage,
    availablePackages: getAvailablePackageNames(),
  }
}

// Note: React import는 실제 사용 시 추가
// import React from 'react'
