"use client"

import Link from "next/link"
import { MainLayout } from "@/components/layout"
import { Container } from "@/components/layout"
import { FadeIn, SlideIn, AnimatedButton } from "@/components/animation"

export default function NotFound() {
  return (
    <MainLayout>
      <section className="py-20 lg:py-32">
        <Container>
          <div className="flex flex-col items-center justify-center text-center">
            <FadeIn>
              <div className="text-[10rem] font-bold leading-none text-primary/20 sm:text-[14rem]">
                404
              </div>
            </FadeIn>

            <SlideIn direction="up" delay={0.1}>
              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Page Not Found
              </h1>
            </SlideIn>

            <SlideIn direction="up" delay={0.2}>
              <p className="mt-4 max-w-md text-lg text-muted-foreground">
                Oops! The page you&apos;re looking for doesn&apos;t exist or has
                been moved.
              </p>
            </SlideIn>

            <SlideIn direction="up" delay={0.3}>
              <div className="mt-8 flex gap-4">
                <AnimatedButton asChild size="lg">
                  <Link href="/">Go Home</Link>
                </AnimatedButton>
                <AnimatedButton asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Support</Link>
                </AnimatedButton>
              </div>
            </SlideIn>
          </div>
        </Container>
      </section>
    </MainLayout>
  )
}
