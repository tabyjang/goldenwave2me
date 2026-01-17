"use client"

import { Float } from "@react-three/drei"
import { ReactNode } from "react"

interface FloatingObjectProps {
  children: ReactNode
  speed?: number
  floatIntensity?: number
}

export function FloatingObject({
  children,
  speed = 1,
  floatIntensity = 1,
}: FloatingObjectProps) {
  return (
    <Float speed={speed} floatIntensity={floatIntensity}>
      {children}
    </Float>
  )
}
