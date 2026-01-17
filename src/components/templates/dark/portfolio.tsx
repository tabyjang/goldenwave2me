"use client"

import { motion } from "motion/react"
import { ArrowUpRight, Gem } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface PortfolioProps {
  config: SiteConfig
}

export function Portfolio({ config }: PortfolioProps) {
  const { portfolio } = config

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Gradient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px]" />

      {/* Floating Particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#D4AF37]"
          style={{
            width: 2,
            height: 2,
            right: `${20 + i * 15}%`,
            top: `${25 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-gradient-to-r from-[#D4AF37]/10 to-transparent backdrop-blur px-5 py-2 mb-6"
            >
              <Gem className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-sm font-medium text-[#D4AF37] tracking-wide">
                Portfolio
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight">
              <span className="text-white/90">최근</span>
              <br />
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#B8860B] bg-clip-text text-transparent font-semibold">
                프로젝트
              </span>
            </h2>
          </div>
          <a
            href="#"
            className="group/link inline-flex items-center gap-2 text-[#D4AF37] font-medium transition-all"
          >
            모든 프로젝트 보기
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </a>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {portfolio.map((item, index) => {
            const isFeature = index === 0

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-[#141414] to-[#0a0a0a] cursor-pointer transition-all duration-500 hover:border-[#D4AF37]/20 ${
                  isFeature ? "md:row-span-2 aspect-square" : "aspect-[16/10]"
                }`}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-[#D4AF37]/0 transition-all duration-500 group-hover:border-[#D4AF37]/20" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="inline-block self-start rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-4 py-1.5 text-xs font-medium text-[#D4AF37] mb-4 backdrop-blur">
                    {item.category}
                  </span>
                  <h3 className={`font-semibold mb-2 text-white/90 group-hover:text-white transition-colors ${isFeature ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
                    {item.title}
                  </h3>
                  <p className="text-white/40 mb-4 font-light">{item.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags?.map((tag, i) => (
                      <span key={i} className="text-xs text-white/25">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow Button */}
                <div className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/5 backdrop-blur border border-white/10 flex items-center justify-center opacity-0 scale-75 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 group-hover:bg-gradient-to-br group-hover:from-[#D4AF37] group-hover:to-[#B8860B] group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-[#D4AF37]/20">
                  <ArrowUpRight className="h-5 w-5 text-[#D4AF37] group-hover:text-black transition-colors" />
                </div>

                {/* Bottom Glow Line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] group-hover:w-full transition-all duration-700" />
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] border-r border-t border-[#D4AF37]/5" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border-l border-b border-[#D4AF37]/5" />
    </section>
  )
}
