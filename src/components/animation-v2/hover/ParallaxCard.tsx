/**
 * ParallaxCard - 3D 틸트 효과 카드
 *
 * 마우스 위치에 따라 3D 회전 효과
 * perspective를 사용한 깊이감
 */

'use client'

import { useRef, useState } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { smoothSpring, useReducedMotion, getRelativePosition } from '../utils/motion'

export interface ParallaxCardProps {
  /** 카드 내부 콘텐츠 */
  children: React.ReactNode

  /** CSS 클래스 */
  className?: string

  /** 최대 회전 각도 (degree, default: 15) */
  maxRotation?: number

  /** perspective 거리 (px, default: 1000) */
  perspective?: number

  /** 비활성화 여부 */
  disabled?: boolean
}

/**
 * ParallaxCard 컴포넌트
 *
 * @example
 * <ParallaxCard className="p-6 bg-card rounded-lg">
 *   <h3>3D 카드</h3>
 *   <p>마우스를 올려보세요</p>
 * </ParallaxCard>
 *
 * @example
 * <ParallaxCard maxRotation={25} perspective={800}>
 *   강한 3D 효과
 * </ParallaxCard>
 */
export function ParallaxCard({
  children,
  className,
  maxRotation = 15,
  perspective = 1000,
  disabled = false,
}: ParallaxCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const prefersReducedMotion = useReducedMotion()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || disabled || prefersReducedMotion) return

    const { normalizedX, normalizedY } = getRelativePosition(e, ref.current)

    // 마우스 위치를 -0.5 ~ 0.5 범위로 변환
    const x = normalizedX - 0.5
    const y = normalizedY - 0.5

    // 회전 각도 계산 (Y축은 반대로)
    const rotateX = y * maxRotation * -1
    const rotateY = x * maxRotation

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={
        prefersReducedMotion
          ? {}
          : {
              rotateX: rotation.x,
              rotateY: rotation.y,
            }
      }
      transition={smoothSpring}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d',
      }}
      className={cn(
        // GPU 가속 사용
        'transform-gpu',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

/**
 * ParallaxLayer - ParallaxCard 내부에서 사용하는 레이어
 *
 * z축 깊이를 달리하여 parallax 효과 생성
 *
 * @example
 * <ParallaxCard>
 *   <ParallaxLayer depth={-50}>
 *     <div>배경 레이어</div>
 *   </ParallaxLayer>
 *   <ParallaxLayer depth={0}>
 *     <div>중간 레이어</div>
 *   </ParallaxLayer>
 *   <ParallaxLayer depth={50}>
 *     <div>전면 레이어</div>
 *   </ParallaxLayer>
 * </ParallaxCard>
 */
export function ParallaxLayer({
  children,
  depth = 0,
  className,
}: {
  children: React.ReactNode
  depth?: number
  className?: string
}) {
  return (
    <div
      style={{
        transform: `translateZ(${depth}px)`,
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      {children}
    </div>
  )
}
