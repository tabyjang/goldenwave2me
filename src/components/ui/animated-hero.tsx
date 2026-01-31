"use client"

import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface FloatingBlobProps {
  className?: string
  color: string
  delay?: number
  duration?: number
  size?: "sm" | "md" | "lg"
}

const blobSizes = {
  sm: "h-[200px] w-[200px]",
  md: "h-[300px] w-[300px]",
  lg: "h-[400px] w-[400px]",
}

function FloatingBlob({
  className,
  color,
  delay = 0,
  duration = 8,
  size = "md",
}: FloatingBlobProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.4, 0.6, 0.4],
        scale: [1, 1.1, 1],
        x: [0, 30, -20, 0],
        y: [0, -20, 30, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        blobSizes[size],
        className
      )}
      style={{
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
    />
  )
}

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
}

export function GradientText({
  children,
  className,
  animate = true,
}: GradientTextProps) {
  return (
    <motion.span
      initial={animate ? { opacity: 0, y: 20 } : false}
      animate={animate ? { opacity: 1, y: 0 } : false}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "bg-gradient-to-r from-primary via-pink-400 to-accent bg-clip-text text-transparent",
        "bg-[length:200%_auto]",
        className
      )}
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </motion.span>
  )
}

interface AnimatedHeroWrapperProps {
  children: React.ReactNode
  className?: string
  showBlobs?: boolean
  intensity?: "subtle" | "medium" | "vibrant"
}

export function AnimatedHeroWrapper({
  children,
  className,
  showBlobs = true,
  intensity = "medium",
}: AnimatedHeroWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const blobOpacity = {
    subtle: 0.3,
    medium: 0.5,
    vibrant: 0.7,
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative min-h-screen overflow-hidden bg-background",
        className
      )}
    >
      {/* Floating Gradient Blobs */}
      {showBlobs && (
        <motion.div style={{ opacity }} className="absolute inset-0">
          {/* Primary Pink Blob - Top Left */}
          <FloatingBlob
            color={`oklch(0.65 0.25 350 / ${blobOpacity[intensity]})`}
            className="-left-20 -top-20"
            size="lg"
            duration={10}
          />

          {/* Cyan Blob - Top Right */}
          <FloatingBlob
            color={`oklch(0.7 0.15 195 / ${blobOpacity[intensity]})`}
            className="-right-10 top-1/4"
            size="md"
            delay={2}
            duration={12}
          />

          {/* Purple Blob - Bottom Left */}
          <FloatingBlob
            color={`oklch(0.6 0.2 280 / ${blobOpacity[intensity] * 0.8})`}
            className="bottom-0 left-1/4"
            size="md"
            delay={4}
            duration={14}
          />

          {/* Secondary Pink Blob - Center Right */}
          <FloatingBlob
            color={`oklch(0.75 0.15 350 / ${blobOpacity[intensity] * 0.6})`}
            className="right-1/4 top-1/2"
            size="sm"
            delay={3}
            duration={16}
          />
        </motion.div>
      )}

      {/* Radial Gradient Overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 0%, transparent 0%, var(--background) 100%)",
        }}
      />

      {/* Scroll-animated Content */}
      <motion.div style={{ y }} className="relative z-10">
        {children}
      </motion.div>
    </div>
  )
}

// Staggered fade-in animation for hero content
interface StaggeredContentProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggeredContent({
  children,
  className,
  staggerDelay = 0.1,
}: StaggeredContentProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggeredItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animated button with micro-interactions
interface AnimatedHeroButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "outline"
  href?: string
  onClick?: () => void
}

export function AnimatedHeroButton({
  children,
  className,
  variant = "primary",
  href,
  onClick,
}: AnimatedHeroButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold transition-all duration-300 overflow-hidden"

  const variantStyles = {
    primary: cn(
      "bg-gradient-to-r from-primary to-accent text-white",
      "shadow-lg shadow-primary/25",
      "hover:shadow-xl hover:shadow-primary/30",
      "hover:scale-[1.02]"
    ),
    secondary: cn(
      "bg-secondary/80 text-secondary-foreground backdrop-blur-sm",
      "border border-secondary",
      "hover:bg-secondary hover:scale-[1.02]"
    ),
    outline: cn(
      "border-2 border-primary/30 text-foreground backdrop-blur-sm",
      "hover:border-primary/60 hover:bg-primary/5",
      "hover:scale-[1.02]"
    ),
  }

  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variantStyles[variant], className)}
    >
      {/* Shimmer effect on hover */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Component>
  )
}

// Scroll indicator animation
export function ScrollIndicator({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className={cn("flex flex-col items-center gap-2", className)}
    >
      <span className="text-sm text-muted-foreground">스크롤</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 p-1"
      >
        <motion.div
          animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-2 w-2 rounded-full bg-primary"
        />
      </motion.div>
    </motion.div>
  )
}
