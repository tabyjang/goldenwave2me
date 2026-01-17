"use client"

import { motion } from "motion/react"
import { Globe, FileText, Zap, ArrowRight, Check, Sparkles } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface ServicesProps {
  config: SiteConfig
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  FileText,
  Zap,
}

export function Services({ config }: ServicesProps) {
  const { services } = config

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-muted)]/50 via-transparent to-[var(--color-muted)]/50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-secondary)]/5 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-[var(--layout-max-width)] px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-secondary)]/10 to-[var(--color-primary)]/10 px-4 py-2 text-sm font-medium mb-6"
          >
            <Sparkles className="h-4 w-4 text-[var(--color-secondary)]" />
            <span className="bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] bg-clip-text text-transparent">
              서비스 소개
            </span>
          </motion.span>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl mb-6">
            비즈니스 성장을 위한
            <br />
            <span className="bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] bg-clip-text text-transparent">
              올인원 마케팅 솔루션
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[var(--color-muted-foreground)]">
            홈페이지 제작부터 블로그 마케팅, 업무 자동화까지
            비즈니스에 필요한 모든 마케팅 서비스를 제공합니다.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe
            const isLarge = index === 0

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative ${isLarge ? "lg:col-span-2 lg:row-span-2" : ""}`}
              >
                <div className={`relative h-full overflow-hidden rounded-3xl bg-[var(--color-card)] border border-[var(--color-border)] transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--color-secondary)]/10 hover:border-[var(--color-secondary)]/30 hover:-translate-y-1 ${isLarge ? "p-10" : "p-8"}`}>
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--color-secondary)]/0 via-transparent to-[var(--color-primary)]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ padding: "1px" }} />

                  {/* Icon */}
                  <div className={`mb-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-primary)]/10 transition-all duration-300 group-hover:from-[var(--color-secondary)] group-hover:to-[var(--color-primary)] group-hover:shadow-lg group-hover:shadow-[var(--color-secondary)]/30 ${isLarge ? "h-16 w-16" : "h-14 w-14"}`}>
                    <Icon className={`${isLarge ? "h-8 w-8" : "h-7 w-7"} text-[var(--color-secondary)] transition-colors group-hover:text-white`} />
                  </div>

                  {/* Content */}
                  <h3 className={`mb-3 font-bold ${isLarge ? "text-2xl" : "text-xl"}`}>
                    {service.title}
                  </h3>
                  <p className={`mb-6 text-[var(--color-muted-foreground)] leading-relaxed ${isLarge ? "text-lg" : ""}`}>
                    {service.description}
                  </p>

                  {/* Features */}
                  {service.features && (
                    <ul className={`mb-8 space-y-3 ${isLarge ? "grid grid-cols-2 gap-x-6 gap-y-3 space-y-0" : ""}`}>
                      {service.features.slice(0, isLarge ? 6 : 4).map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-secondary)]/10">
                            <Check className="h-3 w-3 text-[var(--color-secondary)]" />
                          </span>
                          <span className="text-[var(--color-muted-foreground)]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Link */}
                  <a
                    href={service.href || "#"}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)] transition-all group-hover:gap-3"
                  >
                    자세히 보기
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  {/* Corner Decoration */}
                  <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-[var(--color-secondary)]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-[var(--color-muted-foreground)] mb-4">
            어떤 서비스가 필요한지 모르겠다면?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[var(--color-secondary)] font-medium hover:underline"
          >
            무료 상담 받기
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
