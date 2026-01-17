"use client"

import { motion } from "motion/react"
import { Globe, FileText, Zap, ArrowUpRight, Waves } from "lucide-react"
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
      {/* Ocean Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0369a1] via-[#0284c7] to-[#0ea5e9]" />

      {/* Wave Dividers */}
      <svg
        className="absolute top-0 left-0 w-full h-32 opacity-30"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <motion.path
          fill="white"
          animate={{
            d: [
              "M0,50 C240,80 480,20 720,50 C960,80 1200,20 1440,50 L1440,0 L0,0 Z",
              "M0,50 C240,20 480,80 720,50 C960,20 1200,80 1440,50 L1440,0 L0,0 Z",
              "M0,50 C240,80 480,20 720,50 C960,80 1200,20 1440,50 L1440,0 L0,0 Z",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-full h-32 opacity-20"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <motion.path
          fill="white"
          animate={{
            d: [
              "M0,50 C360,80 720,20 1080,50 C1260,80 1380,30 1440,50 L1440,100 L0,100 Z",
              "M0,50 C360,20 720,80 1080,50 C1260,20 1380,70 1440,50 L1440,100 L0,100 Z",
              "M0,50 C360,80 720,20 1080,50 C1260,80 1380,30 1440,50 L1440,100 L0,100 Z",
            ],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Floating Bubbles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 8 + (i % 3) * 6,
            height: 8 + (i % 3) * 6,
            left: `${10 + i * 18}%`,
            bottom: "10%",
            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), rgba(255,255,255,0.1))`,
          }}
          animate={{
            y: [0, -400],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.7],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            delay: i * 1.2,
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
            <span className="text-sm font-medium tracking-wide">Services</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="drop-shadow-lg">우리가 하는 일</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-white/30 rounded-full mx-auto"
          />
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
                <div className="relative h-full overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 p-8 transition-all duration-500 hover:bg-white/15 hover:border-white/25 hover:shadow-xl hover:shadow-white/5">
                  {/* Ripple Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:via-transparent group-hover:to-white/5 transition-all duration-700 rounded-3xl" />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-white transition-all duration-500 group-hover:bg-white group-hover:text-[#0369a1] group-hover:shadow-lg group-hover:shadow-white/30"
                  >
                    <Icon className="h-8 w-8" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 drop-shadow">{service.title}</h3>
                  <p className="text-white/65 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  {service.features && (
                    <ul className="space-y-2.5 mb-6">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-white/55">
                          <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Link */}
                  <a
                    href={service.href || "#"}
                    className="group/link inline-flex items-center gap-2 text-white font-medium text-sm transition-all hover:gap-3"
                  >
                    자세히 보기
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
