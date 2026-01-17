"use client"

import { motion } from "motion/react"
import { Check, Sparkles } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface PricingProps {
  config: SiteConfig
}

export function Pricing({ config }: PricingProps) {
  const { pricing } = config

  if (!pricing || pricing.length === 0) return null

  return (
    <section id="pricing" className="py-[var(--layout-section-padding)] bg-[var(--color-muted)]/30">
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
            가격 안내
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            합리적인 가격, 확실한 성과
          </h2>
          <p className="max-w-2xl mx-auto text-[var(--color-muted-foreground)]">
            비즈니스 규모와 목표에 맞는 플랜을 선택하세요.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricing.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-2xl scale-105"
                  : "bg-[var(--color-card)] border border-[var(--color-border)]"
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-secondary)] px-4 py-1 text-sm font-medium text-black">
                    <Sparkles className="h-4 w-4" />
                    인기
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
              <p
                className={`text-sm mb-6 ${
                  plan.highlighted
                    ? "text-white/70"
                    : "text-[var(--color-muted-foreground)]"
                }`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold">₩{plan.price}</span>
                {plan.period && (
                  <span
                    className={`text-sm ${
                      plan.highlighted
                        ? "text-white/70"
                        : "text-[var(--color-muted-foreground)]"
                    }`}
                  >
                    /{plan.period}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      className={`h-5 w-5 shrink-0 ${
                        plan.highlighted
                          ? "text-[var(--color-secondary)]"
                          : "text-[var(--color-secondary)]"
                      }`}
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`block w-full rounded-full py-3 text-center font-medium transition ${
                  plan.highlighted
                    ? "bg-[var(--color-secondary)] text-black hover:opacity-90"
                    : "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:opacity-90"
                }`}
              >
                {plan.cta || "시작하기"}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 text-sm text-[var(--color-muted-foreground)]"
        >
          * 모든 가격은 VAT 별도입니다. 상세 견적은 상담을 통해 안내드립니다.
        </motion.p>
      </div>
    </section>
  )
}
