"use client"

import dynamic from "next/dynamic"

// Dynamic import inside client component to avoid SSR issues with Three.js
const Scene3DContent = dynamic(() => import("./scene-3d-content"), {
  ssr: false,
})

export function DemoScene() {
  return (
    <div className="h-[200px] w-[300px] rounded-lg border bg-background/50">
      <Scene3DContent />
    </div>
  )
}
