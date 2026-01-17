"use client"

import { motion } from "motion/react"
import { ArrowUpRight, Waves } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface PortfolioProps {
  config: SiteConfig
}

export function Portfolio({ config }: PortfolioProps) {
  const { portfolio } = config

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Ocean Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0ea5e9] via-[#0284c7] to-[#0369a1]" />

      {/* Animated Wave Background */}
      <svg
        className="absolute top-0 left-0 w-full h-40 opacity-20"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <motion.path
          fill="white"
          animate={{
            d: [
              "M0,60 C240,90 480,30 720,60 C960,90 1200,30 1440,60 L1440,0 L0,0 Z",
              "M0,60 C240,30 480,90 720,60 C960,30 1200,90 1440,60 L1440,0 L0,0 Z",
              "M0,60 C240,90 480,30 720,60 C960,90 1200,30 1440,60 L1440,0 L0,0 Z",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Floating Bubbles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 8 + (i % 3) * 6,
            height: 8 + (i % 3) * 6,
            left: `${15 + i * 20}%`,
            bottom: "10%",
            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), rgba(255,255,255,0.1))`,
          }}
          animate={{
            y: [0, -350],
            opacity: [0, 0.5, 0],
            scale: [0.5, 1, 0.7],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeOut",
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-5 py-2.5 mb-8"
          >
            <Waves className="h-4 w-4" />
            <span className="text-sm font-medium tracking-wide">Portfolio</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="drop-shadow-lg">최근 프로젝트</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-white/30 rounded-full mx-auto"
          />
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
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 cursor-pointer transition-all duration-500 hover:bg-white/15 hover:border-white/25 hover:shadow-xl hover:shadow-white/5 ${isFeature ? "md:col-span-2 aspect-[2/1]" : "aspect-[4/3]"}`}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0c4a6e]/60 to-[#0ea5e9]/40" />

                {/* Wave Animation on Hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <svg className="absolute bottom-0 w-full h-40" viewBox="0 0 1440 150" preserveAspectRatio="none">
                    <motion.path
                      fill="rgba(255,255,255,0.08)"
                      animate={{
                        d: [
                          "M0,75 C240,120 480,30 720,75 C960,120 1200,30 1440,75 L1440,150 L0,150 Z",
                          "M0,75 C240,30 480,120 720,75 C960,30 1200,120 1440,75 L1440,150 L0,150 Z",
                          "M0,75 C240,120 480,30 720,75 C960,120 1200,30 1440,75 L1440,150 L0,150 Z",
                        ],
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </svg>
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="inline-block self-start rounded-full bg-white/20 backdrop-blur-md border border-white/20 px-4 py-1.5 text-xs font-medium mb-4">
                    {item.category}
                  </span>
                  <h3 className={`font-bold mb-2 drop-shadow-lg ${isFeature ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
                    {item.title}
                  </h3>
                  <p className="text-white/65 mb-4">{item.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags?.map((tag, i) => (
                      <span key={i} className="text-xs text-white/45">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 scale-75 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 group-hover:bg-white group-hover:border-transparent"
                >
                  <ArrowUpRight className="h-5 w-5 text-white group-hover:text-[#0369a1] transition-colors" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="group/link inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 font-medium transition-all hover:bg-white/20 hover:border-white/30"
          >
            모든 프로젝트 보기
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
