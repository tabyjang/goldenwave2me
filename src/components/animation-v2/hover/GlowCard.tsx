/**
 * GlowCard - 빛나는 카드
 *
 * 마우스 위치를 따라 그라데이션 빛이 생성됨
 * 토큰 시스템의 primary 색상 사용
 */

'use client'

import { useRef } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { useReducedMotion } from '../utils/motion'

export interface GlowCardProps {
  /** 카드 내부 콘텐츠 */
  children: React.ReactNode

  /** CSS 클래스 */
  className?: string

  /** Glow 색상 (default: CSS 변수 --color-primary) */
  glowColor?: string

  /** Glow 강도 (default: 0.6) */
  glowIntensity?: number

  /** Glow 크기 (px, default: 600) */
  glowSize?: number

  /** 비활성화 여부 */
  disabled?: boolean
}

/**
 * GlowCard 컴포넌트
 *
 * @example
 * <GlowCard className="p-6 bg-card">
 *   <h3>카드 제목</h3>
 *   <p>카드 내용</p>
 * </GlowCard>
 *
 * @example
 * <GlowCard glowColor="#FFD700" glowSize={800}>
 *   프리미엄 카드
 * </GlowCard>
 */
export function GlowCard({
  children,
  className,
  glowColor = 'var(--color-primary)',
  glowIntensity = 0.6,
  glowSize = 600,
  disabled = false,
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || disabled || prefersReducedMotion) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // CSS 변수로 마우스 위치 업데이트
    ref.current.style.setProperty('--mouse-x', `${x}px`)
    ref.current.style.setProperty('--mouse-y', `${y}px`)
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    // 마우스가 벗어나면 glow 제거
    ref.current.style.setProperty('--mouse-x', '-1000px')
    ref.current.style.setProperty('--mouse-y', '-1000px')
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative overflow-hidden',
        // Glow 효과 레이어 (pseudo-element)
        'before:absolute before:inset-0 before:opacity-0',
        !prefersReducedMotion && 'before:transition-opacity before:duration-500',
        'hover:before:opacity-100',
        className
      )}
      style={
        {
          '--glow-color': glowColor,
          '--glow-size': `${glowSize}px`,
          '--glow-intensity': glowIntensity,
          '--mouse-x': '-1000px',
          '--mouse-y': '-1000px',
        } as React.CSSProperties
      }
    >
      {/* Glow 효과 배경 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(var(--glow-size) circle at var(--mouse-x) var(--mouse-y), ${glowColor}, transparent 40%)`,
          opacity: disabled ? 0 : glowIntensity,
        }}
      />

      {/* 실제 콘텐츠 */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
