/**
 * Animation V2 - Premium Micro-Interaction Library
 *
 * 재사용 가능한 프리미엄급 애니메이션 컴포넌트 라이브러리
 *
 * @example
 * import { MagneticButton, GlowCard } from '@/components/animation-v2'
 *
 * @example
 * import { MagneticButton } from '@/components/animation-v2/hover'
 */

// ============================================================================
// Hover Effects (Phase 3.1)
// ============================================================================

export {
  MagneticButton,
  GlowCard,
  ParallaxCard,
  ParallaxLayer,
  RippleButton,
} from './hover'

export type {
  MagneticButtonProps,
  GlowCardProps,
  ParallaxCardProps,
  RippleButtonProps,
} from './hover'

// ============================================================================
// Scroll Effects (Phase 3.2 - 예정)
// ============================================================================

// export { RevealOnScroll, ParallaxSection, CountUp } from './scroll'

// ============================================================================
// Transitions (Phase 3.2 - 예정)
// ============================================================================

// export { PageTransition, Morphing } from './transitions'

// ============================================================================
// Utilities
// ============================================================================

export {
  spring,
  smoothSpring,
  fastSpring,
  tokenColors,
  useReducedMotion,
  calculateDistance,
  mapRange,
  clamp,
  lerp,
  getElementCenter,
  getRelativePosition,
  fadeInVariants,
  slideUpVariants,
  slideDownVariants,
  scaleInVariants,
  staggerContainer,
} from './utils/motion'
