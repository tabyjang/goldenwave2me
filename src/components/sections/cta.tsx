"use client"

import { Container } from "@/components/layout"
import { SlideIn, AnimatedButton } from "@/components/animation"

interface CTAProps {
  title: string
  description?: string
  buttonText: string
  buttonHref: string
}

export function CTA({ title, description, buttonText, buttonHref }: CTAProps) {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 px-6 py-16 text-center sm:px-12 lg:px-16">
          <SlideIn direction="up">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
          </SlideIn>
          {description && (
            <SlideIn direction="up" delay={0.1}>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                {description}
              </p>
            </SlideIn>
          )}
          <SlideIn direction="up" delay={0.2}>
            <div className="mt-8">
              <AnimatedButton size="lg" asChild>
                <a href={buttonHref}>{buttonText}</a>
              </AnimatedButton>
            </div>
          </SlideIn>
        </div>
      </Container>
    </section>
  )
}
