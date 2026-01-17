"use client"

import { motion } from "motion/react"
import { Globe, FileText, Zap, ArrowUpRight, Gem } from "lucide-react"
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
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Deep Background */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Luxury Gradient Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[150px]" />
      </div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#D4AF37]"
          style={{
            width: 2,
            height: 2,
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
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
          className="max-w-2xl mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-gradient-to-r from-[#D4AF37]/10 to-transparent backdrop-blur px-5 py-2 mb-8"
          >
            <Gem className="h-4 w-4 text-[#D4AF37]" />
            <span className="text-sm font-medium text-[#D4AF37] tracking-wide">
              Services
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            <span className="text-white/90">비즈니스를 위한</span>
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#B8860B] bg-clip-text text-transparent font-semibold">
              프리미엄 솔루션
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-16 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent mb-6"
          />
          <p className="text-white/40 text-lg font-light leading-relaxed">
            최신 기술과 창의적인 디자인으로 고객의 비즈니스 성장을 돕습니다.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-8 backdrop-blur transition-all duration-500 hover:border-[#D4AF37]/20 hover:bg-[#D4AF37]/[0.03]">
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-r border-t border-[#D4AF37]/0 transition-all duration-500 group-hover:border-[#D4AF37]/20" />

                  {/* Icon */}
                  <div className="relative mb-8">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-[#D4AF37] group-hover:to-[#B8860B] group-hover:text-black group-hover:shadow-lg group-hover:shadow-[#D4AF37]/20"
                    >
                      <Icon className="h-7 w-7" />
                    </motion.div>
                    {/* Icon Glow */}
                    <div className="absolute -inset-2 bg-[#D4AF37]/0 rounded-full blur-xl transition-all duration-500 group-hover:bg-[#D4AF37]/10" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-white/90 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/35 mb-6 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Features */}
                  {service.features && (
                    <ul className="space-y-2.5 mb-6">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-white/45">
                          <span className="h-1 w-1 rounded-full bg-[#D4AF37]/60" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Link */}
                  <a
                    href={service.href || "#"}
                    className="group/link inline-flex items-center gap-2 text-[#D4AF37] text-sm font-medium transition-all"
                  >
                    자세히 보기
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </a>

                  {/* Bottom Glow */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-[#D4AF37]/0 blur-3xl transition-all duration-500 group-hover:bg-[#D4AF37]/10" />
                </div>
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
