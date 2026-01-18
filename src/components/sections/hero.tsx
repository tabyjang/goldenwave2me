"use client"

import { Container } from "@/components/layout"
import { FadeIn, SlideIn, AnimatedButton } from "@/components/animation"
import { DemoScene } from "@/components/3d"

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
}

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  tertiaryCta,
  showDemo = false,
}: HeroProps) {
  return (
    <section className="relative py-20 lg:py-32">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <FadeIn>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {title}
              </h1>
            </FadeIn>
            <SlideIn direction="up" delay={0.1}>
              <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
                {subtitle}
              </p>
            </SlideIn>
            {(primaryCta || secondaryCta || tertiaryCta) && (
              <SlideIn direction="up" delay={0.2}>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  {primaryCta && (
                    <AnimatedButton asChild size="lg">
                      <a href={primaryCta.href}>{primaryCta.text}</a>
                    </AnimatedButton>
                  )}
                  {secondaryCta && (
                    <AnimatedButton variant="outline" asChild size="lg">
                      <a href={secondaryCta.href}>{secondaryCta.text}</a>
                    </AnimatedButton>
                  )}
                  {tertiaryCta && (
                    <AnimatedButton variant="secondary" asChild size="lg">
                      <a href={tertiaryCta.href}>{tertiaryCta.text}</a>
                    </AnimatedButton>
                  )}
                </div>
              </SlideIn>
            )}
          </div>

          {/* 3D Demo */}
          {showDemo && (
            <SlideIn direction="right" delay={0.3} className="flex-1">
              <div className="flex justify-center lg:justify-end">
                <DemoScene />
              </div>
            </SlideIn>
          )}
        </div>
      </Container>
    </section>
  )
}
