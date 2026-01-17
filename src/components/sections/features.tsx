"use client"

import { Container } from "@/components/layout"
import { SlideIn } from "@/components/animation"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { type ReactNode } from "react"

interface Feature {
  icon: ReactNode
  title: string
  description: string
}

interface FeaturesProps {
  title?: string
  subtitle?: string
  features: Feature[]
}

export function Features({ title, subtitle, features }: FeaturesProps) {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <SlideIn direction="up">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {title}
                </h2>
              </SlideIn>
            )}
            {subtitle && (
              <SlideIn direction="up" delay={0.1}>
                <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
              </SlideIn>
            )}
          </div>
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <SlideIn key={index} direction="up" delay={0.1 * (index + 1)}>
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </SlideIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
