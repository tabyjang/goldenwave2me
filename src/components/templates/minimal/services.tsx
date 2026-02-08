"use client"

import { motion } from "motion/react"
import { Globe, FileText, Zap, ArrowRight, Check, Sparkles } from "lucide-react"
import type { SiteConfig } from "@/types/theme"
import {
  BentoGrid,
  BentoCard,
  BentoCardContent,
} from "@/components/ui/bento-grid"

interface ServicesProps {
  config: SiteConfig
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  FileText,
  Zap,
}

// Bento layout pattern: first card is 2x2, rest are 1x1
const getSizeForIndex = (index: number, total: number): "1x1" | "2x1" | "1x2" | "2x2" => {
  if (index === 0) return "2x2"
  if (total > 4 && index === 3) return "2x1"
  return "1x1"
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

        {/* Bento Grid Services */}
        <BentoGrid columns={3}>
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe
            const size = getSizeForIndex(index, services.length)
            const isLarge = size === "2x2" || size === "2x1"

            return (
              <BentoCard
                key={service.id}
                size={size}
                variant={index === 0 ? "gradient" : "default"}
                index={index}
                className="group"
              >
                {/* Icon */}
                <div
                  className={`mb-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-primary)]/10 transition-all duration-300 group-hover:from-[var(--color-secondary)] group-hover:to-[var(--color-primary)] group-hover:shadow-lg group-hover:shadow-[var(--color-secondary)]/30 ${
                    isLarge ? "h-16 w-16" : "h-14 w-14"
                  }`}
                >
                  <Icon
                    className={`${
                      isLarge ? "h-8 w-8" : "h-7 w-7"
                    } text-[var(--color-secondary)] transition-colors group-hover:text-white`}
                  />
                </div>

                {/* Content */}
                <h3
                  className={`mb-3 font-bold ${isLarge ? "text-2xl" : "text-xl"}`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mb-6 text-[var(--color-muted-foreground)] leading-relaxed ${
                    isLarge ? "text-lg" : ""
                  }`}
                >
                  {service.description}
                </p>

                {/* Features - shown in large cards */}
                {service.features && isLarge && (
                  <BentoCardContent position="bottom" className="mt-auto">
                    <ul
                      className={`mb-6 ${
                        size === "2x2"
                          ? "grid grid-cols-2 gap-x-6 gap-y-3"
                          : "space-y-3"
                      }`}
                    >
                      {service.features
                        .slice(0, size === "2x2" ? 6 : 4)
                        .map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary)]/10">
                              <Check className="h-3 w-3 text-[var(--color-secondary)]" />
                            </span>
                            <span className="text-[var(--color-muted-foreground)]">
                              {feature}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </BentoCardContent>
                )}

                {/* Link */}
                <div className={isLarge ? "" : "mt-auto pt-4"}>
                  <a
                    href={service.href || "#"}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)] transition-all group-hover:gap-3"
                  >
                    자세히 보기
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </BentoCard>
            )
          })}
        </BentoGrid>

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
