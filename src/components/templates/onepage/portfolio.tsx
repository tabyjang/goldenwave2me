"use client"

import { motion } from "motion/react"
import { ArrowUpRight, Zap } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface PortfolioProps {
  config: SiteConfig
}

export function Portfolio({ config }: PortfolioProps) {
  const { portfolio } = config

  return (
    <section id="portfolio" className="snap-start min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Deep Black Background */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Side Accent Lines */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent" />

      {/* Horizontal Accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent origin-right"
      />

      {/* Corner Numbers */}
      <div className="absolute top-8 right-8 text-[8rem] font-black text-white/[0.02] leading-none select-none">
        03
      </div>
      <div className="absolute bottom-8 left-8 text-[6rem] font-black text-white/[0.02] leading-none select-none">
        WRK
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-right"
        >
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-6">
            Portfolio
            <Zap className="h-3 w-3" />
            <span className="h-px w-8 bg-[#D4AF37]" />
          </span>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="block text-white"
            >
              최근
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="block bg-gradient-to-r from-[#D4AF37] via-[#f0c850] to-[#D4AF37] bg-clip-text text-transparent"
            >
              프로젝트
            </motion.span>
          </h2>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-1">
          {portfolio.map((item, index) => {
            const isFeature = index === 0

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative overflow-hidden bg-[#0a0a0a] cursor-pointer ${
                  isFeature ? "md:col-span-2 aspect-[2/1]" : "aspect-[4/3]"
                }`}
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/5 transition-colors duration-500" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Number Watermark */}
                <div className="absolute top-6 left-6 text-[6rem] sm:text-[8rem] font-black text-white/[0.03] leading-none group-hover:text-[#D4AF37]/10 transition-colors duration-500">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Left Border Accent */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#D4AF37] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-3">
                    {item.category}
                  </span>
                  <h3 className={`font-black text-white group-hover:text-[#D4AF37] transition-colors duration-500 ${isFeature ? "text-2xl sm:text-4xl" : "text-xl sm:text-2xl"}`}>
                    {item.title}
                  </h3>
                  <p className="text-white/30 mt-2 max-w-lg text-sm tracking-wide">{item.description}</p>
                </div>

                {/* Arrow Button */}
                <div className="absolute top-6 right-6 group-hover:opacity-100 transition-all duration-500">
                  <div className="h-12 w-12 border border-white/10 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37] flex items-center justify-center transition-all duration-500">
                    <ArrowUpRight className="h-5 w-5 text-white/30 group-hover:text-black transition-colors duration-500" />
                  </div>
                </div>

                {/* Bottom Gold Line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] group-hover:w-full transition-all duration-700" />
              </motion.div>
            )
          })}
        </div>

        {/* View All Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex justify-between items-center"
        >
          <a
            href="#"
            className="group/link flex items-center gap-3"
          >
            <div className="h-10 w-10 border border-white/10 group-hover/link:border-[#D4AF37]/50 group-hover/link:bg-[#D4AF37] flex items-center justify-center transition-all duration-500">
              <ArrowUpRight className="h-4 w-4 text-white/30 group-hover/link:text-black transition-colors" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 group-hover/link:text-[#D4AF37]/50 transition-colors">
              모든 프로젝트 보기
            </span>
          </a>

          <div className="flex gap-10">
            {[
              { value: "50+", label: "프로젝트" },
              { value: "100%", label: "성공률" },
            ].map((stat, i) => (
              <div key={i} className="text-right">
                <div className="text-xl font-black bg-gradient-to-b from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/20 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
