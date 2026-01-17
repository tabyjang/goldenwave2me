"use client"

import { motion } from "motion/react"
import { MessageSquare, Lightbulb, Hammer, TrendingUp } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface ProcessProps {
  config: SiteConfig
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare,
  Lightbulb,
  Hammer,
  TrendingUp,
}

export function Process({ config }: ProcessProps) {
  const { process } = config

  return (
    <section id="process" className="py-[var(--layout-section-padding)] bg-[var(--color-muted)]/30">
      <div className="mx-auto max-w-[var(--layout-max-width)] px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-[var(--color-secondary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-secondary)] mb-4">
            프로세스
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            체계적인 작업 프로세스
          </h2>
          <p className="max-w-2xl mx-auto text-[var(--color-muted-foreground)]">
            단계별 밀착 소통으로 최상의 결과물을 만들어드립니다.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[var(--color-border)] -translate-y-1/2 hidden lg:block" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => {
              const Icon = iconMap[step.icon || ""] || MessageSquare

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Step Number & Icon */}
                    <div className="relative mb-6">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-card)] border-2 border-[var(--color-secondary)] shadow-lg">
                        <Icon className="h-8 w-8 text-[var(--color-secondary)]" />
                      </div>
                      <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-secondary)] text-sm font-bold text-[var(--color-secondary-foreground)]">
                        {step.step}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="mb-3 text-lg font-bold">{step.title}</h3>
                    <p className="text-sm text-[var(--color-muted-foreground)]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
