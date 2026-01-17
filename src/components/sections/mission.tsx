"use client"

import { ReactNode } from "react"
import { Container } from "@/components/layout"
import { FadeIn, SlideIn } from "@/components/animation"

interface Value {
  icon: ReactNode
  title: string
  text: string
}

interface MissionProps {
  title: string
  description: string
  values?: Value[]
}

export function Mission({ title, description, values }: MissionProps) {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
          </FadeIn>
          <SlideIn direction="up" delay={0.1}>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {description}
            </p>
          </SlideIn>
        </div>

        {values && values.length > 0 && (
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <SlideIn key={index} direction="up" delay={0.1 * (index + 2)}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.text}
                  </p>
                </div>
              </SlideIn>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
