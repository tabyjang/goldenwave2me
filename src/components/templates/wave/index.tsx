"use client"

import type { SiteConfig } from "@/types/theme"
import { Header } from "./header"
import { Hero } from "./hero"
import { Services } from "./services"
import { Portfolio } from "./portfolio"
import { Process } from "./process"
import { Testimonials } from "./testimonials"
import { CTA } from "./cta"
import { Footer } from "./footer"

interface WaveTemplateProps {
  config: SiteConfig
}

export function WaveTemplate({ config }: WaveTemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c4a6e] via-[#0369a1] to-[#0ea5e9] text-white">
      <Header config={config} />
      <main>
        <Hero config={config} />
        <Services config={config} />
        <Portfolio config={config} />
        <Process config={config} />
        <Testimonials config={config} />
        <CTA config={config} />
      </main>
      <Footer config={config} />
    </div>
  )
}
