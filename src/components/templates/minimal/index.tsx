"use client"

import type { SiteConfig } from "@/types/theme"
import { Header } from "./header"
import { Hero } from "./hero"
import { Services } from "./services"
import { Portfolio } from "./portfolio"
import { Process } from "./process"
import { Testimonials } from "./testimonials"
import { Pricing } from "./pricing"
import { CTA } from "./cta"
import { Footer } from "./footer"

interface MinimalTemplateProps {
  config: SiteConfig
}

export function MinimalTemplate({ config }: MinimalTemplateProps) {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <Header config={config} />
      <main>
        <Hero config={config} />
        <Services config={config} />
        <Portfolio config={config} />
        <Process config={config} />
        <Testimonials config={config} />
        {config.pricing && <Pricing config={config} />}
        <CTA config={config} />
      </main>
      <Footer config={config} />
    </div>
  )
}
