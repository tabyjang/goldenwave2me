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

interface DarkTemplateProps {
  config: SiteConfig
}

export function DarkTemplate({ config }: DarkTemplateProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
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
