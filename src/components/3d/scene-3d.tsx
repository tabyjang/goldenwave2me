"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { Suspense, ReactNode } from "react"

interface Scene3DProps {
  children: ReactNode
  className?: string
  controls?: boolean
  environment?: boolean
}

export function Scene3D({
  children,
  className,
  controls = true,
  environment = true,
}: Scene3DProps) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          {environment && <Environment preset="city" />}
          {children}
          {controls && <OrbitControls enableZoom={false} />}
        </Suspense>
      </Canvas>
    </div>
  )
}
