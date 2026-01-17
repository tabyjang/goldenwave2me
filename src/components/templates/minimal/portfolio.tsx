"use client"

import { motion } from "motion/react"
import { ExternalLink } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface PortfolioProps {
  config: SiteConfig
}

export function Portfolio({ config }: PortfolioProps) {
  const { portfolio } = config

  return (
    <section id="portfolio" className="py-[var(--layout-section-padding)]">
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
            포트폴리오
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            성공적인 프로젝트 사례
          </h2>
          <p className="max-w-2xl mx-auto text-[var(--color-muted-foreground)]">
            다양한 업종의 클라이언트와 함께 성과를 만들어왔습니다.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {portfolio.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-[var(--color-muted)] aspect-[4/3]"
            >
              {/* Placeholder Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/80 to-[var(--color-secondary)]/80" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                {/* Category Tag */}
                <span className="inline-block self-start rounded-full bg-[var(--color-secondary)] px-3 py-1 text-xs font-medium text-black mb-3">
                  {item.category}
                </span>

                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                {item.tags && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-secondary)]/90 opacity-0 transition-opacity group-hover:opacity-100">
                <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black">
                  <ExternalLink className="h-5 w-5" />
                  자세히 보기
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-8 py-4 font-medium transition hover:bg-[var(--color-muted)]"
          >
            전체 포트폴리오 보기
            <ExternalLink className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
