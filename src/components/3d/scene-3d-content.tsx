"use client"

import { Scene3D } from "./scene-3d"
import { RotatingBox } from "./rotating-box"
import { FloatingObject } from "./floating-object"

export default function Scene3DContent() {
  return (
    <Scene3D className="h-full w-full" environment={false}>
      <FloatingObject speed={2} floatIntensity={0.5}>
        <RotatingBox color="#6366f1" size={[1.2, 1.2, 1.2]} speed={0.5} />
      </FloatingObject>
    </Scene3D>
  )
}
