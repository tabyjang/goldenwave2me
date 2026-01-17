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

interface OnepageTemplateProps {
  config: SiteConfig
}

export function OnepageTemplate({ config }: OnepageTemplateProps) {
  return (
    <div className="bg-[#09090b] text-white">
      <Header config={config} />
      <main className="snap-y snap-mandatory h-screen overflow-y-auto">
        <Hero config={config} />
        <Services config={config} />
        <Portfolio config={config} />
        <Process config={config} />
        <Testimonials config={config} />
        <CTA config={config} />
        <Footer config={config} />
      </main>
    </div>
  )
}
