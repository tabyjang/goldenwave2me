/**
 * Design Token System - Animation Tokens
 *
 * 애니메이션 타이밍 및 이징 토큰
 */

export const animations = {
  // 애니메이션 지속 시간
  duration: {
    instant: '0ms',
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
    slower: '500ms',
    slowest: '700ms',
  },

  // 이징 함수
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',

    // 커스텀 이징
    spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',  // 바운스 효과
    smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',    // 부드러운 효과
  },

  // 의미론적 애니메이션
  transition: {
    default: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '350ms cubic-bezier(0.4, 0, 0.2, 1)',
    spring: '250ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },

  // 키프레임 애니메이션
  keyframes: {
    fadeIn: {
      from: { opacity: '0' },
      to: { opacity: '1' },
    },
    fadeOut: {
      from: { opacity: '1' },
      to: { opacity: '0' },
    },
    slideInUp: {
      from: { transform: 'translateY(10px)', opacity: '0' },
      to: { transform: 'translateY(0)', opacity: '1' },
    },
    slideInDown: {
      from: { transform: 'translateY(-10px)', opacity: '0' },
      to: { transform: 'translateY(0)', opacity: '1' },
    },
    scaleIn: {
      from: { transform: 'scale(0.95)', opacity: '0' },
      to: { transform: 'scale(1)', opacity: '1' },
    },
  },
}

export type Animations = typeof animations
