"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Mesh } from "three"

interface RotatingBoxProps {
  color?: string
  size?: [number, number, number]
  speed?: number
}

export function RotatingBox({
  color = "#6366f1",
  size = [1, 1, 1],
  speed = 1,
}: RotatingBoxProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed * 0.5
      meshRef.current.rotation.y += delta * speed
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
