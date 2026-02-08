import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Glassmorphism Card Component
 *
 * Implements frosted glass effects with backdrop-blur and semi-transparent backgrounds.
 * Supports multiple intensity levels and hover states.
 *
 * Phase 4: Glassmorphism Components
 */

const glassCardVariants = cva(
  "relative overflow-hidden rounded-xl border transition-all duration-300",
  {
    variants: {
      intensity: {
        subtle: [
          // Light mode
          "bg-white/40 border-white/60",
          "backdrop-blur-sm",
          // Dark mode
          "dark:bg-gray-900/30 dark:border-gray-700/40",
        ],
        medium: [
          // Light mode
          "bg-white/60 border-white/80",
          "backdrop-blur-md",
          "shadow-lg shadow-black/5",
          // Dark mode
          "dark:bg-gray-900/50 dark:border-gray-700/60",
          "dark:shadow-black/20",
        ],
        strong: [
          // Light mode
          "bg-white/80 border-white/90",
          "backdrop-blur-lg",
          "shadow-xl shadow-black/10",
          // Dark mode
          "dark:bg-gray-900/70 dark:border-gray-700/80",
          "dark:shadow-black/30",
        ],
        vibrant: [
          // Light mode with gradient tint
          "bg-gradient-to-br from-white/80 via-primary/5 to-accent/5",
          "border-primary/20",
          "backdrop-blur-xl",
          "shadow-2xl shadow-primary/10",
          // Dark mode
          "dark:from-gray-900/80 dark:via-primary/10 dark:to-accent/10",
          "dark:border-primary/30",
          "dark:shadow-primary/20",
        ],
      },
      hover: {
        none: "",
        lift: "hover:-translate-y-1 hover:shadow-2xl",
        glow: [
          "hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20",
          "dark:hover:border-primary/60 dark:hover:shadow-primary/30",
        ],
        scale: "hover:scale-[1.02]",
        intense: [
          "hover:-translate-y-2 hover:scale-[1.02]",
          "hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/25",
          "dark:hover:border-primary/70 dark:hover:shadow-primary/40",
        ],
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
    },
    defaultVariants: {
      intensity: "medium",
      hover: "lift",
      padding: "md",
    },
  }
)

interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {
  /**
   * Add inner glow effect
   */
  innerGlow?: boolean
  /**
   * Add noise texture overlay
   */
  noiseTexture?: boolean
}

function GlassCard({
  className,
  intensity,
  hover,
  padding,
  innerGlow = false,
  noiseTexture = false,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        glassCardVariants({ intensity, hover, padding }),
        className
      )}
      {...props}
    >
      {/* Inner glow effect */}
      {innerGlow && (
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(236, 72, 153, 0.1), transparent 70%)",
          }}
        />
      )}

      {/* Noise texture overlay */}
      {noiseTexture && (
        <div
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

// Glass Card Sub-components for structured content

function GlassCardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-2 pb-4", className)}
      {...props}
    />
  )
}

function GlassCardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function GlassCardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function GlassCardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("", className)} {...props} />
}

function GlassCardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center pt-4 border-t border-white/20 dark:border-gray-700/40", className)}
      {...props}
    />
  )
}

// Specialized Glass Components

/**
 * Floating Glass Navigation Bar
 * Perfect for sticky headers with glassmorphism effect
 */
interface GlassNavProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Navigation position
   */
  position?: "fixed" | "sticky" | "static"
}

function GlassNav({
  className,
  position = "sticky",
  children,
  ...props
}: GlassNavProps) {
  return (
    <nav
      className={cn(
        "z-50 w-full",
        position === "fixed" && "fixed top-0 left-0",
        position === "sticky" && "sticky top-0",
        // Glassmorphism
        "bg-white/70 dark:bg-gray-900/70",
        "backdrop-blur-lg",
        "border-b border-white/80 dark:border-gray-700/60",
        "shadow-lg shadow-black/5 dark:shadow-black/20",
        // Support for backdrop-filter
        "supports-[backdrop-filter]:bg-white/60",
        "supports-[backdrop-filter]:dark:bg-gray-900/60",
        className
      )}
      {...props}
    >
      {children}
    </nav>
  )
}

/**
 * Glass Modal Overlay
 * For modal backgrounds with blur effect
 */
function GlassModalOverlay({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50",
        "bg-black/40 dark:bg-black/60",
        "backdrop-blur-sm",
        "animate-in fade-in duration-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * Glass Notification Card
 * For toast notifications or alerts with glassmorphism
 */
function GlassNotification({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl p-4",
        "bg-white/90 dark:bg-gray-900/90",
        "backdrop-blur-lg",
        "border border-white/90 dark:border-gray-700/70",
        "shadow-2xl shadow-black/10 dark:shadow-black/40",
        "animate-in slide-in-from-top-2 duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export {
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
  GlassCardContent,
  GlassCardFooter,
  GlassNav,
  GlassModalOverlay,
  GlassNotification,
  glassCardVariants,
}
