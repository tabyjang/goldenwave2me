/**
 * CSS Variables Generator
 *
 * 토큰 시스템에서 CSS 변수를 생성하여 globals.css에 적용할 수 있도록 합니다.
 * warmElegance를 기본 색상 패키지로 사용합니다.
 */

import { warmElegance, getCSSVariables } from '../tokens'

/**
 * Hex 색상을 OKLCH 근사값으로 변환
 * 참고: 정확한 변환을 위해서는 culori 라이브러리 사용 권장
 */
function hexToOklch(hex: string): string {
  // Hex to RGB
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255

  // Simple RGB to approximate OKLCH
  // 실제로는 더 복잡한 변환이 필요하지만, 근사값으로 사용
  const lightness = (0.2126 * r + 0.7152 * g + 0.0722 * b) * 100
  const chroma = Math.sqrt(
    Math.pow(r - g, 2) + Math.pow(g - b, 2) + Math.pow(b - r, 2)
  ) * 0.5

  // Hue 계산 (간단한 근사)
  let hue = 0
  if (r >= g && r >= b) {
    hue = 60 * ((g - b) / (r - Math.min(g, b)))
  } else if (g >= r && g >= b) {
    hue = 60 * (2 + (b - r) / (g - Math.min(r, b)))
  } else {
    hue = 60 * (4 + (r - g) / (b - Math.min(r, g)))
  }
  if (hue < 0) hue += 360

  return `oklch(${(lightness / 100).toFixed(3)} ${chroma.toFixed(3)} ${hue.toFixed(1)})`
}

/**
 * Tailwind 시맨틱 색상에 매핑
 */
function generateSemanticColors() {
  const pkg = warmElegance

  return {
    // Primary 색상 (브랜드 메인 컬러)
    '--color-primary': pkg.colors.primary[500],
    '--color-primary-foreground': pkg.colors.primary[50],

    // Secondary 색상
    '--color-secondary': pkg.colors.neutral[100],
    '--color-secondary-foreground': pkg.colors.neutral[900],

    // Accent 색상
    '--color-accent': pkg.colors.accent[100],
    '--color-accent-foreground': pkg.colors.accent[900],

    // Muted 색상
    '--color-muted': pkg.colors.neutral[100],
    '--color-muted-foreground': pkg.colors.neutral[500],

    // Destructive (Error) 색상
    '--color-destructive': pkg.colors.semantic.error[500],
    '--color-destructive-foreground': pkg.colors.semantic.error[50],

    // Border 색상
    '--color-border': pkg.colors.neutral[200],
    '--color-input': pkg.colors.neutral[200],

    // Ring 색상 (포커스)
    '--color-ring': pkg.colors.primary[400],

    // Background & Foreground
    '--background': 'oklch(1 0 0)',           // 흰색
    '--foreground': pkg.colors.neutral[950],   // 거의 검정

    // Card 색상
    '--card': 'oklch(1 0 0)',
    '--card-foreground': pkg.colors.neutral[950],

    // Popover 색상
    '--popover': 'oklch(1 0 0)',
    '--popover-foreground': pkg.colors.neutral[950],

    // Chart 색상 (데이터 시각화용)
    '--chart-1': pkg.colors.primary[500],
    '--chart-2': pkg.colors.accent[500],
    '--chart-3': pkg.colors.semantic.info[500],
    '--chart-4': pkg.colors.semantic.success[500],
    '--chart-5': pkg.colors.semantic.warning[500],

    // Sidebar 색상
    '--sidebar': pkg.colors.neutral[50],
    '--sidebar-foreground': pkg.colors.neutral[900],
    '--sidebar-primary': pkg.colors.primary[500],
    '--sidebar-primary-foreground': pkg.colors.primary[50],
    '--sidebar-accent': pkg.colors.accent[100],
    '--sidebar-accent-foreground': pkg.colors.accent[900],
    '--sidebar-border': pkg.colors.neutral[200],
    '--sidebar-ring': pkg.colors.primary[400],
  }
}

/**
 * 다크모드 시맨틱 색상 생성
 */
function generateDarkModeColors() {
  const pkg = warmElegance

  return {
    '--background': pkg.colors.neutral[950],
    '--foreground': pkg.colors.neutral[50],

    '--card': pkg.colors.neutral[900],
    '--card-foreground': pkg.colors.neutral[50],

    '--popover': pkg.colors.neutral[900],
    '--popover-foreground': pkg.colors.neutral[50],

    '--primary': pkg.colors.primary[400],      // 다크모드에서는 밝은 색
    '--primary-foreground': pkg.colors.primary[950],

    '--secondary': pkg.colors.neutral[800],
    '--secondary-foreground': pkg.colors.neutral[50],

    '--muted': pkg.colors.neutral[800],
    '--muted-foreground': pkg.colors.neutral[400],

    '--accent': pkg.colors.accent[800],
    '--accent-foreground': pkg.colors.accent[50],

    '--destructive': pkg.colors.semantic.error[600],
    '--destructive-foreground': pkg.colors.semantic.error[50],

    '--border': `${pkg.colors.neutral[800]}`,
    '--input': `${pkg.colors.neutral[700]}`,
    '--ring': pkg.colors.primary[400],

    // Chart colors (다크모드)
    '--chart-1': pkg.colors.primary[400],
    '--chart-2': pkg.colors.accent[400],
    '--chart-3': pkg.colors.semantic.info[400],
    '--chart-4': pkg.colors.semantic.success[400],
    '--chart-5': pkg.colors.semantic.warning[400],

    // Sidebar (다크모드)
    '--sidebar': pkg.colors.neutral[900],
    '--sidebar-foreground': pkg.colors.neutral[50],
    '--sidebar-primary': pkg.colors.primary[400],
    '--sidebar-primary-foreground': pkg.colors.primary[950],
    '--sidebar-accent': pkg.colors.accent[800],
    '--sidebar-accent-foreground': pkg.colors.accent[50],
    '--sidebar-border': pkg.colors.neutral[800],
    '--sidebar-ring': pkg.colors.primary[400],
  }
}

/**
 * CSS 변수를 문자열로 포맷
 */
function formatCSSVars(vars: Record<string, string>, indent = '  '): string {
  return Object.entries(vars)
    .map(([key, value]) => `${indent}${key}: ${value};`)
    .join('\n')
}

/**
 * 전체 CSS 출력 생성
 */
function generateCSS(): string {
  const lightVars = generateSemanticColors()
  const darkVars = generateDarkModeColors()

  return `
/* ============================================================================
   Design Token System - Generated CSS Variables

   이 파일은 /tokens 폴더의 디자인 토큰에서 자동 생성되었습니다.
   수동으로 편집하지 마세요. tokens/ 파일을 수정하고 재생성하세요.

   기본 색상 패키지: Warm Elegance
   생성 날짜: ${new Date().toISOString()}
   ============================================================================ */

:root {
  /* Radius */
  --radius: 0.625rem;

  /* Light Mode Colors */
${formatCSSVars(lightVars)}
}

.dark {
  /* Dark Mode Colors */
${formatCSSVars(darkVars)}
}
`
}

// 실행
console.log(generateCSS())

// 파일로 저장하려면:
// import { writeFileSync } from 'fs'
// writeFileSync('src/app/token-vars.css', generateCSS())
