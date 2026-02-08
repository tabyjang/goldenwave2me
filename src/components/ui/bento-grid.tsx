"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { type ReactNode } from "react"

// Bento Grid Container
interface BentoGridProps {
  children: ReactNode
  className?: string
  columns?: 2 | 3 | 4
}

export function BentoGrid({
  children,
  className,
  columns = 3,
}: BentoGridProps) {
  const columnClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:gap-6",
        columnClasses[columns],
        className
      )}
    >
      {children}
    </div>
  )
}

// Card size configurations
type CardSize = "1x1" | "2x1" | "1x2" | "2x2"

const sizeClasses: Record<CardSize, string> = {
  "1x1": "col-span-1 row-span-1",
  "2x1": "col-span-1 md:col-span-2 row-span-1",
  "1x2": "col-span-1 row-span-1 md:row-span-2",
  "2x2": "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
}

const minHeightClasses: Record<CardSize, string> = {
  "1x1": "min-h-[280px]",
  "2x1": "min-h-[280px]",
  "1x2": "min-h-[280px] md:min-h-[580px]",
  "2x2": "min-h-[280px] md:min-h-[580px]",
}

// Bento Card Component
interface BentoCardProps {
  children: ReactNode
  className?: string
  size?: CardSize
  variant?: "default" | "gradient" | "glass" | "outline"
  hoverEffect?: boolean
  index?: number
}

export function BentoCard({
  children,
  className,
  size = "1x1",
  variant = "default",
  hoverEffect = true,
  index = 0,
}: BentoCardProps) {
  const variantClasses = {
    default: cn(
      "bg-card border border-border",
      "hover:border-primary/30"
    ),
    gradient: cn(
      "bg-gradient-to-br from-primary/5 via-card to-accent/5",
      "border border-primary/10",
      "hover:border-primary/30"
    ),
    glass: cn(
      "bg-card/80 backdrop-blur-xl",
      "border border-white/10",
      "hover:bg-card/90"
    ),
    outline: cn(
      "bg-transparent border-2 border-dashed border-border",
      "hover:border-primary/50 hover:bg-primary/5"
    ),
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={hoverEffect ? { y: -4, scale: 1.01 } : undefined}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300",
        sizeClasses[size],
        minHeightClasses[size],
        variantClasses[variant],
        hoverEffect && "cursor-pointer shadow-sm hover:shadow-xl hover:shadow-primary/5",
        className
      )}
    >
      {children}
    </motion.div>
  )
}

// Bento Card Header
interface BentoCardHeaderProps {
  icon?: ReactNode
  iconClassName?: string
  title: string
  description?: string
  badge?: string
}

export function BentoCardHeader({
  icon,
  iconClassName,
  title,
  description,
  badge,
}: BentoCardHeaderProps) {
  return (
    <div className="flex flex-col gap-3">
      {/* Icon and Badge Row */}
      <div className="flex items-start justify-between">
        {icon && (
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-xl",
              "bg-gradient-to-br from-primary/10 to-accent/10",
              "text-primary transition-transform duration-300 group-hover:scale-110",
              iconClassName
            )}
          >
            {icon}
          </div>
        )}
        {badge && (
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {badge}
          </span>
        )}
      </div>

      {/* Title and Description */}
      <div>
        <h3 className="text-lg font-semibold tracking-tight lg:text-xl">
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

// Bento Card Content (for illustrations/images)
interface BentoCardContentProps {
  children: ReactNode
  className?: string
  position?: "bottom" | "center" | "fill"
}

export function BentoCardContent({
  children,
  className,
  position = "bottom",
}: BentoCardContentProps) {
  const positionClasses = {
    bottom: "mt-auto pt-6",
    center: "my-auto",
    fill: "flex-1",
  }

  return (
    <div className={cn(positionClasses[position], className)}>
      {children}
    </div>
  )
}

// Bento Card Image Slot
interface BentoCardImageProps {
  src?: string
  alt?: string
  className?: string
  gradient?: boolean
  children?: ReactNode
}

export function BentoCardImage({
  src,
  alt = "",
  className,
  gradient = true,
  children,
}: BentoCardImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl",
        "bg-gradient-to-br from-muted to-muted/50",
        className
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        children
      )}
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
      )}
    </div>
  )
}

// Bento Card Illustration (for abstract visuals)
interface BentoCardIllustrationProps {
  type?: "chart" | "grid" | "dots" | "waves" | "gradient"
  className?: string
}

export function BentoCardIllustration({
  type = "gradient",
  className,
}: BentoCardIllustrationProps) {
  const illustrations = {
    chart: (
      <div className="flex h-full items-end justify-around gap-2 p-4">
        {[40, 65, 45, 80, 55, 90, 70, 85].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${height}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="w-full rounded-t-md bg-gradient-to-t from-primary to-primary/50"
          />
        ))}
      </div>
    ),
    grid: (
      <div className="grid h-full grid-cols-4 gap-2 p-4">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            className={cn(
              "rounded-lg",
              i % 3 === 0
                ? "bg-primary/20"
                : i % 3 === 1
                ? "bg-accent/20"
                : "bg-secondary/30"
            )}
          />
        ))}
      </div>
    ),
    dots: (
      <div className="relative h-full overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute h-2 w-2 rounded-full bg-primary"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    ),
    waves: (
      <svg
        viewBox="0 0 100 50"
        className="h-full w-full"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,25 Q25,10 50,25 T100,25 V50 H0 Z"
          fill="url(#wave-gradient)"
          initial={{ d: "M0,25 Q25,10 50,25 T100,25 V50 H0 Z" }}
          animate={{
            d: [
              "M0,25 Q25,10 50,25 T100,25 V50 H0 Z",
              "M0,25 Q25,40 50,25 T100,25 V50 H0 Z",
              "M0,25 Q25,10 50,25 T100,25 V50 H0 Z",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    ),
    gradient: (
      <div className="h-full w-full bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 opacity-50" />
    ),
  }

  return (
    <div
      className={cn(
        "relative h-32 overflow-hidden rounded-xl bg-muted/50",
        className
      )}
    >
      {illustrations[type]}
    </div>
  )
}

// Bento Card Stats (for displaying metrics)
interface BentoCardStatsProps {
  stats: { label: string; value: string; trend?: "up" | "down" }[]
  className?: string
}

export function BentoCardStats({ stats, className }: BentoCardStatsProps) {
  return (
    <div className={cn("grid gap-4", className)}>
      {stats.map((stat, i) => (
        <div key={i} className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{stat.label}</span>
          <span
            className={cn(
              "font-semibold",
              stat.trend === "up" && "text-green-500",
              stat.trend === "down" && "text-red-500"
            )}
          >
            {stat.trend === "up" && "+"}
            {stat.value}
          </span>
        </div>
      ))}
    </div>
  )
}

// Feature-specific Bento Card
interface BentoFeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  size?: CardSize
  variant?: "default" | "gradient" | "glass" | "outline"
  illustration?: "chart" | "grid" | "dots" | "waves" | "gradient"
  stats?: { label: string; value: string; trend?: "up" | "down" }[]
  badge?: string
  index?: number
}

export function BentoFeatureCard({
  icon,
  title,
  description,
  size = "1x1",
  variant = "default",
  illustration,
  stats,
  badge,
  index = 0,
}: BentoFeatureCardProps) {
  const isLarge = size === "2x1" || size === "1x2" || size === "2x2"

  return (
    <BentoCard size={size} variant={variant} index={index}>
      <BentoCardHeader
        icon={icon}
        title={title}
        description={description}
        badge={badge}
      />

      {/* Show illustration for larger cards */}
      {illustration && isLarge && (
        <BentoCardContent position="bottom">
          <BentoCardIllustration
            type={illustration}
            className={size === "1x2" || size === "2x2" ? "h-48" : "h-32"}
          />
        </BentoCardContent>
      )}

      {/* Show stats if provided */}
      {stats && (
        <BentoCardContent position="bottom">
          <BentoCardStats stats={stats} />
        </BentoCardContent>
      )}
    </BentoCard>
  )
}
