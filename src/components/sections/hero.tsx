"use client"

import { Container } from "@/components/layout"
import { DemoScene } from "@/components/3d"
import { AuroraBackground } from "@/components/ui/aurora-background"
import {
  GradientText,
  StaggeredContent,
  StaggeredItem,
  AnimatedHeroButton,
  ScrollIndicator,
} from "@/components/ui/animated-hero"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

interface HeroProps {
  title: string
  subtitle: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  tertiaryCta?: {
    text: string
    href: string
  }
  showDemo?: boolean
  showScrollIndicator?: boolean
}

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  tertiaryCta,
  showDemo = false,
  showScrollIndicator = true,
}: HeroProps) {
  // Split title for gradient effect on key words
  const titleWords = title.split(" ")
  const gradientWordIndex = Math.floor(titleWords.length / 2)

  return (
    <AuroraBackground
      intensity="medium"
      showRadialGradient={true}
      className="min-h-[100vh] pt-20"
    >
      <Container>
        <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center gap-8 py-12 text-center lg:flex-row lg:text-left">
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <StaggeredContent staggerDelay={0.15}>
              {/* Badge */}
              <StaggeredItem>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>데이터 기반 마케팅 파트너</span>
                </motion.div>
              </StaggeredItem>

              {/* Title with Gradient Text */}
              <StaggeredItem>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                  {titleWords.map((word, index) => (
                    <span key={index}>
                      {index === gradientWordIndex ? (
                        <GradientText animate={false} className="font-extrabold">
                          {word}
                        </GradientText>
                      ) : (
                        word
                      )}
                      {index < titleWords.length - 1 && " "}
                    </span>
                  ))}
                </h1>
              </StaggeredItem>

              {/* Subtitle */}
              <StaggeredItem>
                <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl lg:text-2xl">
                  {subtitle}
                </p>
              </StaggeredItem>

              {/* CTA Buttons */}
              {(primaryCta || secondaryCta || tertiaryCta) && (
                <StaggeredItem>
                  <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                    {primaryCta && (
                      <AnimatedHeroButton variant="primary" href={primaryCta.href}>
                        {primaryCta.text}
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </AnimatedHeroButton>
                    )}
                    {secondaryCta && (
                      <AnimatedHeroButton variant="outline" href={secondaryCta.href}>
                        {secondaryCta.text}
                      </AnimatedHeroButton>
                    )}
                    {tertiaryCta && (
                      <AnimatedHeroButton variant="secondary" href={tertiaryCta.href}>
                        {tertiaryCta.text}
                      </AnimatedHeroButton>
                    )}
                  </div>
                </StaggeredItem>
              )}
            </StaggeredContent>
          </div>

          {/* 3D Demo */}
          {showDemo && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex-1"
            >
              <div className="flex justify-center lg:justify-end">
                <DemoScene />
              </div>
            </motion.div>
          )}
        </div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <ScrollIndicator />
          </div>
        )}
      </Container>
    </AuroraBackground>
  )
}

// Alternative compact hero for inner pages
interface CompactHeroProps {
  title: string
  subtitle?: string
  breadcrumb?: { label: string; href: string }[]
}

export function CompactHero({ title, subtitle, breadcrumb }: CompactHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent py-16 lg:py-24">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-32 -top-32 h-64 w-64 rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, oklch(0.65 0.25 350) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, oklch(0.7 0.15 195) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              {breadcrumb.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  {index > 0 && <span>/</span>}
                  <a
                    href={item.href}
                    className="transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </motion.nav>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
        >
          <GradientText animate={false}>{title}</GradientText>
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            {subtitle}
          </motion.p>
        )}
      </Container>
    </section>
  )
}
