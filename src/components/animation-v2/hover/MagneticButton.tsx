/**
 * MagneticButton - 자석 효과 버튼
 *
 * 마우스 위치에 따라 버튼이 끌려가는 자석 효과
 * 부드러운 spring 애니메이션으로 원위치 복귀
 */

'use client'

import { useRef, useState } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { spring, useReducedMotion } from '../utils/motion'

export interface MagneticButtonProps {
  /** 버튼 내부 콘텐츠 */
  children: React.ReactNode

  /** 자석 강도 (0-1, default: 0.5) */
  strength?: number

  /** CSS 클래스 */
  className?: string

  /** onClick 이벤트 */
  onClick?: () => void

  /** as 컴포넌트 (default: 'button') */
  as?: React.ElementType

  /** 비활성화 여부 */
  disabled?: boolean
}

/**
 * MagneticButton 컴포넌트
 *
 * @example
 * <MagneticButton strength={0.8}>
 *   클릭하세요
 * </MagneticButton>
 *
 * @example
 * <MagneticButton as="a" href="/contact" strength={0.3}>
 *   문의하기
 * </MagneticButton>
 */
export function MagneticButton({
  children,
  strength = 0.5,
  className,
  onClick,
  as = 'button',
  disabled = false,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const prefersReducedMotion = useReducedMotion()

  const Component = motion[as as keyof typeof motion] || motion.button

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || disabled || prefersReducedMotion) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // 마우스와 중심점 사이의 거리 계산
    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength

    setPosition({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={disabled ? undefined : onClick}
      animate={{ x: position.x, y: position.y }}
      transition={spring}
      className={cn(
        'inline-block cursor-pointer select-none',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
