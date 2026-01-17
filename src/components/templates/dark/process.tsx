"use client"

import { motion } from "motion/react"
import { ChevronRight } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface ProcessProps {
  config: SiteConfig
}

export function Process({ config }: ProcessProps) {
  const { process } = config

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      {/* Luxury Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

        {/* Radial Gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-radial from-[#D4AF37]/5 to-transparent" />
      </div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[#D4AF37]/30"
          style={{
            top: `${10 + i * 12}%`,
            left: `${5 + i * 12}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
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
          className="text-center mb-24"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8"
          />
          <span className="text-[#D4AF37] text-sm font-medium tracking-[0.3em] uppercase mb-4 block">
            Our Process
          </span>
          <h2 className="text-4xl sm:text-6xl font-semibold">
            작업 <span className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">프로세스</span>
          </h2>
          <p className="mt-6 text-white/40 max-w-lg mx-auto">
            체계적인 프로세스로 완성도 높은 결과물을 제공합니다
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Central Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                {/* Connector Arrow (except last) */}
                {index < process.length - 1 && (
                  <motion.div
                    className="hidden md:flex absolute top-1/2 -right-4 z-10 text-[#D4AF37]/30 group-hover:text-[#D4AF37]/60 transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.15 }}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </motion.div>
                )}

                {/* Card */}
                <div className="relative h-full">
                  {/* Glow Effect */}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                  <div className="relative h-full rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-8 backdrop-blur group-hover:border-[#D4AF37]/20 transition-all duration-500">
                    {/* Step Number */}
                    <div className="relative mb-8">
                      <motion.div
                        className="relative z-10 inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a] group-hover:border-[#D4AF37]/30 transition-colors duration-500"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="text-2xl font-bold bg-gradient-to-b from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                          {String(step.step).padStart(2, "0")}
                        </span>
                      </motion.div>

                      {/* Decorative Ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border border-[#D4AF37]/20"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-[#D4AF37] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Bottom Accent */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.15 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <div className="inline-flex items-center gap-8 px-10 py-6 rounded-2xl border border-white/5 bg-white/[0.02]">
            {[
              { value: "2-4주", label: "평균 소요 기간" },
              { value: "100%", label: "고객 만족도" },
              { value: "24시간", label: "응답 시간" },
            ].map((stat, i) => (
              <div key={i} className="text-center px-6">
                <div className="text-xl font-semibold bg-gradient-to-b from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-white/40 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
