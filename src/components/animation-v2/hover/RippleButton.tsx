/**
 * RippleButton - 물결 효과 버튼
 *
 * 클릭 시 원형 물결 애니메이션
 * 여러 번 클릭 시 ripple 중첩 효과
 */

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import { useReducedMotion } from '../utils/motion'

interface Ripple {
  id: number
  x: number
  y: number
}

export interface RippleButtonProps {
  /** 버튼 내부 콘텐츠 */
  children: React.ReactNode

  /** CSS 클래스 */
  className?: string

  /** Ripple 색상 (default: CSS 변수 --color-primary) */
  rippleColor?: string

  /** Ripple 지속 시간 (ms, default: 600) */
  rippleDuration?: number

  /** onClick 이벤트 */
  onClick?: () => void

  /** as 컴포넌트 (default: 'button') */
  as?: 'button' | 'a' | 'div'

  /** 비활성화 여부 */
  disabled?: boolean

  /** 기타 HTML 속성 */
  [key: string]: any
}

/**
 * RippleButton 컴포넌트
 *
 * @example
 * <RippleButton onClick={() => alert('클릭!')}>
 *   클릭하세요
 * </RippleButton>
 *
 * @example
 * <RippleButton
 *   rippleColor="#FFD700"
 *   rippleDuration={800}
 *   className="px-6 py-3 bg-primary text-white rounded-lg"
 * >
 *   프리미엄 버튼
 * </RippleButton>
 */
export function RippleButton({
  children,
  className,
  rippleColor = 'var(--color-primary)',
  rippleDuration = 600,
  onClick,
  as = 'button',
  disabled = false,
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const prefersReducedMotion = useReducedMotion()

  const Component = as

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled || prefersReducedMotion) {
      onClick?.()
      return
    }

    const element = e.currentTarget
    const rect = element.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // 새 ripple 생성
    const newRipple: Ripple = {
      id: Date.now() + Math.random(), // 고유 ID
      x,
      y,
    }

    setRipples((prev) => [...prev, newRipple])

    // 지정된 시간 후 ripple 제거
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
    }, rippleDuration)

    // 원래 onClick 핸들러 실행
    onClick?.()
  }

  return (
    <Component
      onClick={handleClick}
      className={cn(
        'relative overflow-hidden',
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {/* 실제 콘텐츠 */}
      {children}

      {/* Ripple 애니메이션 레이어 */}
      {!prefersReducedMotion && (
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              initial={{ scale: 0, opacity: 0.6 }}
              animate={{ scale: 4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: rippleDuration / 1000 }}
              style={{
                position: 'absolute',
                left: ripple.x,
                top: ripple.y,
                width: 20,
                height: 20,
                borderRadius: '50%',
                backgroundColor: rippleColor,
                pointerEvents: 'none',
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </AnimatePresence>
      )}
    </Component>
  )
}
