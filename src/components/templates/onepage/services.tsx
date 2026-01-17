"use client"

import { motion } from "motion/react"
import { Globe, FileText, Zap, ArrowRight } from "lucide-react"
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
    <section id="services" className="snap-start min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Deep Black Background */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Side Accent Lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      {/* Horizontal Accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent origin-left"
      />

      {/* Corner Number */}
      <div className="absolute top-8 left-8 text-[8rem] font-black text-white/[0.02] leading-none select-none">
        02
      </div>
      <div className="absolute bottom-8 right-8 text-[6rem] font-black text-white/[0.02] leading-none select-none">
        SVC
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-6">
            <span className="h-px w-8 bg-[#D4AF37]" />
            <Zap className="h-3 w-3" />
            Services
          </span>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="block text-white"
            >
              우리가
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="block bg-gradient-to-r from-[#D4AF37] via-[#f0c850] to-[#D4AF37] bg-clip-text text-transparent"
            >
              하는 일
            </motion.span>
          </h2>
        </motion.div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative"
              >
                {/* Item Container */}
                <div className="relative border-t border-white/10 py-10 flex items-center justify-between hover:bg-[#D4AF37]/5 transition-all duration-500 px-6 -mx-6 cursor-pointer">
                  {/* Hover Fill Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/5 group-hover:via-transparent group-hover:to-[#D4AF37]/5 transition-all duration-500" />

                  {/* Left Border Accent on Hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#D4AF37] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

                  <div className="relative flex items-center gap-8">
                    {/* Number */}
                    <span className="text-sm text-[#D4AF37]/70 font-mono tracking-wider">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Icon */}
                    <div className="relative">
                      <div className="h-14 w-14 flex items-center justify-center border border-white/10 group-hover:border-[#D4AF37]/30 group-hover:bg-[#D4AF37]/10 transition-all duration-500">
                        <Icon className="h-7 w-7 text-white/40 group-hover:text-[#D4AF37] transition-colors duration-500" />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-500">
                        {service.title}
                      </h3>
                      <p className="text-white/30 mt-2 text-sm sm:text-base tracking-wide">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="relative flex items-center gap-4">
                    <span className="hidden sm:block text-[10px] uppercase tracking-[0.3em] text-white/20 group-hover:text-[#D4AF37]/50 transition-colors duration-500">
                      자세히 보기
                    </span>
                    <div className="h-12 w-12 flex items-center justify-center border border-white/10 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37] transition-all duration-500">
                      <ArrowRight className="h-5 w-5 text-white/30 group-hover:text-black group-hover:translate-x-1 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}

          {/* Bottom Border */}
          <div className="border-t border-white/10" />
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex justify-end gap-12"
        >
          {[
            { value: "3+", label: "서비스 분야" },
            { value: "10년", label: "업계 경력" },
          ].map((stat, i) => (
            <div key={i} className="text-right">
              <div className="text-2xl font-black bg-gradient-to-b from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/20 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
