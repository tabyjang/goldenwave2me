"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface AuroraBackgroundProps {
  children?: React.ReactNode
  className?: string
  showRadialGradient?: boolean
  animated?: boolean
  intensity?: "subtle" | "medium" | "vibrant"
}

const intensityConfig = {
  subtle: {
    opacity: 0.3,
    blur: 80,
    scale: 1.2,
  },
  medium: {
    opacity: 0.5,
    blur: 60,
    scale: 1.5,
  },
  vibrant: {
    opacity: 0.7,
    blur: 40,
    scale: 1.8,
  },
}

export function AuroraBackground({
  children,
  className,
  showRadialGradient = true,
  animated = true,
  intensity = "medium",
}: AuroraBackgroundProps) {
  const config = intensityConfig[intensity]

  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background transition-colors",
        className
      )}
    >
      {/* Aurora Blobs */}
      <div className="pointer-events-none absolute inset-0">
        {/* Primary Pink Blob */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            animated
              ? {
                  opacity: [config.opacity, config.opacity * 0.7, config.opacity],
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                  scale: [config.scale, config.scale * 1.1, config.scale],
                }
              : { opacity: config.opacity }
          }
          transition={
            animated
              ? {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : { duration: 0.5 }
          }
          className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.25 350) 0%, transparent 70%)",
            filter: `blur(${config.blur}px)`,
          }}
        />

        {/* Secondary Cyan Blob */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            animated
              ? {
                  opacity: [config.opacity * 0.8, config.opacity, config.opacity * 0.8],
                  x: [0, -40, 0],
                  y: [0, 40, 0],
                  scale: [config.scale * 0.9, config.scale, config.scale * 0.9],
                }
              : { opacity: config.opacity * 0.8 }
          }
          transition={
            animated
              ? {
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }
              : { duration: 0.5 }
          }
          className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.7 0.15 195) 0%, transparent 70%)",
            filter: `blur(${config.blur}px)`,
          }}
        />

        {/* Tertiary Purple Blob */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            animated
              ? {
                  opacity: [config.opacity * 0.6, config.opacity * 0.9, config.opacity * 0.6],
                  x: [0, 30, 0],
                  y: [0, -50, 0],
                  scale: [config.scale * 0.8, config.scale * 0.95, config.scale * 0.8],
                }
              : { opacity: config.opacity * 0.6 }
          }
          transition={
            animated
              ? {
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }
              : { duration: 0.5 }
          }
          className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.6 0.2 280) 0%, transparent 70%)",
            filter: `blur(${config.blur}px)`,
          }}
        />

        {/* Extra Secondary Pink Blob for depth */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            animated
              ? {
                  opacity: [config.opacity * 0.5, config.opacity * 0.7, config.opacity * 0.5],
                  x: [0, -20, 0],
                  y: [0, 20, 0],
                }
              : { opacity: config.opacity * 0.5 }
          }
          transition={
            animated
              ? {
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3,
                }
              : { duration: 0.5 }
          }
          className="absolute right-1/4 top-1/2 h-[350px] w-[350px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.75 0.15 350) 0%, transparent 70%)",
            filter: `blur(${config.blur * 1.2}px)`,
          }}
        />
      </div>

      {/* Radial Gradient Overlay */}
      {showRadialGradient && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 0%, var(--background) 100%)",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  )
}

// Simpler static version for performance-sensitive areas
export function AuroraBackgroundStatic({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden",
        className
      )}
    >
      <div className="gradient-mesh absolute inset-0" />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  )
}

// Compact Aurora for sections (not full screen)
export function AuroraSection({
  children,
  className,
  intensity = "subtle",
}: {
  children?: React.ReactNode
  className?: string
  intensity?: "subtle" | "medium" | "vibrant"
}) {
  const config = intensityConfig[intensity]

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-background py-20",
        className
      )}
    >
      {/* Left Blob */}
      <div
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.25 350) 0%, transparent 70%)",
          filter: `blur(${config.blur}px)`,
          opacity: config.opacity,
        }}
      />

      {/* Right Blob */}
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.7 0.15 195) 0%, transparent 70%)",
          filter: `blur(${config.blur}px)`,
          opacity: config.opacity * 0.8,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  )
}
