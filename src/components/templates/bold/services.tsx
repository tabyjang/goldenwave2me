"use client"

import { motion } from "motion/react"
import { Globe, FileText, Zap, ArrowUpRight, Sparkles } from "lucide-react"
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
      {/* Background */}
      <div className="absolute inset-0 bg-[#050403]" />

      {/* Gold Gradient Accents */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FFD700]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FFA500]/5 rounded-full blur-[120px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Decorative Numbers */}
      <div className="absolute top-20 right-20 text-[#FFD700]/5 text-[15rem] font-black leading-none select-none">
        02
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
              Services
            </span>
          </motion.span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">우리가 하는</span>
            <br />
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FFED4A] to-[#FFA500] bg-clip-text text-transparent">
              특별한 일
            </span>
          </h2>
        </motion.div>

        {/* Services Grid - Dynamic Layout */}
        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe
            const isFeature = index === 0

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group relative ${isFeature ? "lg:col-span-2 lg:row-span-2" : ""}`}
              >
                <div className={`relative h-full overflow-hidden rounded-3xl border border-[#FFD700]/10 bg-gradient-to-br from-[#1c1608]/80 to-[#0a0805]/80 backdrop-blur transition-all duration-500 hover:border-[#FFD700]/30 ${isFeature ? "p-12" : "p-8"}`}>
                  {/* Glow Effect */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FFD700]/0 rounded-full blur-3xl transition-all duration-500 group-hover:bg-[#FFD700]/20" />

                  {/* Number Badge */}
                  <div className="absolute top-6 right-6 text-[#FFD700]/10 text-4xl font-black">
                    0{index + 1}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`mb-8 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-black shadow-lg shadow-[#FFD700]/20 ${isFeature ? "h-20 w-20" : "h-16 w-16"}`}
                  >
                    <Icon className={isFeature ? "h-10 w-10" : "h-8 w-8"} />
                  </motion.div>

                  {/* Content */}
                  <h3 className={`font-black mb-4 ${isFeature ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
                    {service.title}
                  </h3>
                  <p className={`text-white/50 mb-8 ${isFeature ? "text-lg" : ""}`}>
                    {service.description}
                  </p>

                  {/* Features */}
                  {service.features && (
                    <ul className={`space-y-3 mb-8 ${isFeature ? "grid sm:grid-cols-2 gap-x-6 space-y-0" : ""}`}>
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/60">
                          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Link */}
                  <a
                    href={service.href || "#"}
                    className="group/link inline-flex items-center gap-2 text-[#FFD700] font-bold uppercase tracking-wider text-sm"
                  >
                    자세히 보기
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </a>

                  {/* Bottom Gradient Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700]/0 to-transparent group-hover:via-[#FFD700]/50 transition-all duration-500" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
