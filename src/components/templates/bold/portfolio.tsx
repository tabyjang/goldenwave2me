"use client"

import { motion } from "motion/react"
import { ArrowUpRight, Sparkles, Eye } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface PortfolioProps {
  config: SiteConfig
}

export function Portfolio({ config }: PortfolioProps) {
  const { portfolio } = config

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050403]" />

      {/* Gold Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#FFD700]/3 rounded-full blur-[150px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Decorative Number */}
      <div className="absolute top-20 left-20 text-[#FFD700]/5 text-[15rem] font-black leading-none select-none">
        03
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 border border-[#FFD700]/30 px-5 py-2 mb-8"
          >
            <Sparkles className="h-4 w-4 text-[#FFD700]" />
            <span className="text-[#FFD700] text-sm font-bold uppercase tracking-[0.2em]">
              Portfolio
            </span>
          </motion.span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-4">
            <span className="text-white">성과로</span>
            <br />
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FFED4A] to-[#FFA500] bg-clip-text text-transparent">
              증명합니다
            </span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            골든웨이브와 함께한 성공적인 프로젝트들을 확인하세요
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {portfolio.map((item, index) => {
            const isFeature = index === 0

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer ${isFeature ? "md:col-span-2 aspect-[2/1]" : "aspect-[4/3]"}`}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1c1608] via-[#0f0a03] to-[#050403]" />

                {/* Gold Shimmer on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Number Watermark */}
                <div className="absolute top-6 left-6 text-[8rem] font-black text-[#FFD700]/5 leading-none group-hover:text-[#FFD700]/10 transition-colors duration-500">
                  0{index + 1}
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="inline-block self-start rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] px-4 py-1.5 text-xs font-bold uppercase text-black mb-4 shadow-lg shadow-[#FFD700]/20">
                    {item.category}
                  </span>
                  <h3 className={`font-black mb-2 text-white group-hover:text-[#FFD700] transition-colors duration-500 ${isFeature ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"}`}>
                    {item.title}
                  </h3>
                  <p className="text-white/50 mb-4 max-w-lg">{item.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags?.map((tag, i) => (
                      <span key={i} className="text-xs text-[#FFD700]/60 uppercase tracking-wider">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-6 right-6 h-14 w-14 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 shadow-xl shadow-[#FFD700]/30"
                >
                  <ArrowUpRight className="h-6 w-6 text-black" />
                </motion.div>

                {/* Bottom Gold Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500] group-hover:w-full transition-all duration-700" />

                {/* Border */}
                <div className="absolute inset-0 border border-[#FFD700]/10 group-hover:border-[#FFD700]/30 rounded-3xl transition-colors duration-500 pointer-events-none" />
              </motion.div>
            )
          })}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="group/link inline-flex items-center gap-3 text-[#FFD700] font-bold uppercase tracking-wider text-sm"
          >
            <Eye className="h-4 w-4" />
            모든 프로젝트 보기
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
