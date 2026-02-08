"use client"

import { Container } from "@/components/layout"
import { SlideIn } from "@/components/animation"
import {
  BentoGrid,
  BentoCard,
  BentoCardHeader,
  BentoCardContent,
  BentoCardIllustration,
  BentoCardStats,
} from "@/components/ui/bento-grid"
import { GradientText } from "@/components/ui/animated-hero"
import { type ReactNode } from "react"

// Card size type
type CardSize = "1x1" | "2x1" | "1x2" | "2x2"

interface Feature {
  icon: ReactNode
  title: string
  description: string
  size?: CardSize
  variant?: "default" | "gradient" | "glass" | "outline"
  illustration?: "chart" | "grid" | "dots" | "waves" | "gradient"
  stats?: { label: string; value: string; trend?: "up" | "down" }[]
  badge?: string
}

interface FeaturesProps {
  title?: string
  subtitle?: string
  highlightWord?: string
  features: Feature[]
  columns?: 2 | 3 | 4
}

export function Features({
  title,
  subtitle,
  highlightWord,
  features,
  columns = 3,
}: FeaturesProps) {
  // Function to render title with highlighted word
  const renderTitle = () => {
    if (!title) return null
    if (!highlightWord) return title

    const parts = title.split(highlightWord)
    if (parts.length === 1) return title

    return (
      <>
        {parts[0]}
        <GradientText animate={false}>{highlightWord}</GradientText>
        {parts[1]}
      </>
    )
  }

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -right-64 top-0 h-[500px] w-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, oklch(0.7 0.15 195) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute -left-64 bottom-0 h-[400px] w-[400px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.25 350) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        {(title || subtitle) && (
          <div className="mb-16 text-center">
            {title && (
              <SlideIn direction="up">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  {renderTitle()}
                </h2>
              </SlideIn>
            )}
            {subtitle && (
              <SlideIn direction="up" delay={0.1}>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                  {subtitle}
                </p>
              </SlideIn>
            )}
          </div>
        )}

        {/* Bento Grid */}
        <BentoGrid columns={columns}>
          {features.map((feature, index) => {
            const isLarge =
              feature.size === "2x1" ||
              feature.size === "1x2" ||
              feature.size === "2x2"

            return (
              <BentoCard
                key={index}
                size={feature.size || "1x1"}
                variant={feature.variant || "default"}
                index={index}
              >
                <BentoCardHeader
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  badge={feature.badge}
                />

                {/* Show illustration for larger cards */}
                {feature.illustration && isLarge && (
                  <BentoCardContent position="bottom">
                    <BentoCardIllustration
                      type={feature.illustration}
                      className={
                        feature.size === "1x2" || feature.size === "2x2"
                          ? "h-48"
                          : "h-32"
                      }
                    />
                  </BentoCardContent>
                )}

                {/* Show stats if provided */}
                {feature.stats && (
                  <BentoCardContent position="bottom">
                    <BentoCardStats stats={feature.stats} />
                  </BentoCardContent>
                )}
              </BentoCard>
            )
          })}
        </BentoGrid>
      </Container>
    </section>
  )
}

// Legacy wrapper for backwards compatibility
interface LegacyFeature {
  icon: ReactNode
  title: string
  description: string
}

interface LegacyFeaturesProps {
  title?: string
  subtitle?: string
  features: LegacyFeature[]
}

export function FeaturesLegacy({ title, subtitle, features }: LegacyFeaturesProps) {
  // Convert legacy features to new format with automatic sizing
  const bentofiedFeatures: Feature[] = features.map((f, i) => ({
    ...f,
    // Make first and fourth items larger for visual interest
    size: i === 0 ? "2x1" : i === 3 ? "1x2" : "1x1",
    variant: i === 0 ? "gradient" : "default",
    illustration: i === 0 ? "chart" : i === 3 ? "grid" : undefined,
  }))

  return (
    <Features
      title={title}
      subtitle={subtitle}
      features={bentofiedFeatures}
    />
  )
}
