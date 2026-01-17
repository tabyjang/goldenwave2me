"use client"

import { motion } from "motion/react"
import { Star, Quote } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface TestimonialsProps {
  config: SiteConfig
}

export function Testimonials({ config }: TestimonialsProps) {
  const { testimonials } = config

  return (
    <section id="testimonials" className="py-[var(--layout-section-padding)]">
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
            고객 후기
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            고객님들의 생생한 후기
          </h2>
          <p className="max-w-2xl mx-auto text-[var(--color-muted-foreground)]">
            골든웨이브와 함께 성장한 고객님들의 이야기를 들어보세요.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl bg-[var(--color-card)] p-8 border border-[var(--color-border)]"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-10 w-10 text-[var(--color-secondary)]/20" />

              {/* Rating */}
              {testimonial.rating && (
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating!
                          ? "fill-[var(--color-secondary)] text-[var(--color-secondary)]"
                          : "text-[var(--color-muted)]"
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Content */}
              <p className="mb-6 text-[var(--color-muted-foreground)] leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-[var(--color-muted-foreground)]">
                    {testimonial.company}
                    {testimonial.role && ` · ${testimonial.role}`}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
