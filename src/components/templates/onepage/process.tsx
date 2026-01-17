"use client"

import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface ProcessProps {
  config: SiteConfig
}

export function Process({ config }: ProcessProps) {
  const { process } = config

  return (
    <section id="process" className="snap-start min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Deep Black Background */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Horizontal Gold Lines */}
      <motion.div
        className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />

      {/* Corner Watermarks */}
      <div className="absolute top-8 right-8 text-[8rem] font-black text-white/[0.02] leading-none select-none">
        03
      </div>
      <div className="absolute bottom-8 left-8 text-[6rem] font-black text-white/[0.02] leading-none select-none">
        PROC
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-6">
            <span className="h-px w-8 bg-[#D4AF37]" />
            03 / Process
          </span>
          <h2 className="text-5xl sm:text-8xl font-black leading-[0.9]">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="block text-white"
            >
              작업
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="block bg-gradient-to-r from-[#D4AF37] via-[#f0c850] to-[#D4AF37] bg-clip-text text-transparent"
            >
              프로세스
            </motion.span>
          </h2>
        </motion.div>

        {/* Process Steps - Horizontal Layout */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px">
            <motion.div
              className="h-full bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37]/30 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-0">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative border-l border-white/5 first:border-l-0"
              >
                {/* Step Number Background */}
                <div className="absolute -top-4 left-0 right-0 text-[10rem] font-black text-white/[0.02] leading-none select-none group-hover:text-[#D4AF37]/10 transition-colors duration-700">
                  {String(step.step).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="relative px-8 py-12">
                  {/* Step Indicator */}
                  <div className="relative mb-8">
                    <motion.div
                      className="h-16 w-16 border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/5 transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-2xl font-black bg-gradient-to-b from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                        {String(step.step).padStart(2, "0")}
                      </span>
                    </motion.div>

                    {/* Dot on Timeline */}
                    <div className="hidden md:block absolute top-1/2 -left-[2.05rem] h-3 w-3 bg-[#D4AF37]/50 group-hover:bg-[#D4AF37] transition-colors" />
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow (except last) */}
                  {index < process.length - 1 && (
                    <motion.div
                      className="hidden md:block absolute top-1/2 -right-3 text-white/20 group-hover:text-[#D4AF37]/50 transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.15 }}
                    >
                      <ArrowRight className="h-6 w-6" />
                    </motion.div>
                  )}
                </div>

                {/* Bottom Gold Line on Hover */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#D4AF37] to-transparent group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex justify-between items-center"
        >
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 border border-white/10 flex items-center justify-center">
              <span className="text-[#D4AF37] text-xs font-bold">AVG</span>
            </div>
            <div>
              <div className="text-2xl font-black bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                2-4주
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                평균 완료 기간
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            {[
              { value: "100%", label: "만족도" },
              { value: "24h", label: "응답시간" },
            ].map((stat, i) => (
              <div key={i} className="text-right">
                <div className="text-xl font-black text-[#D4AF37]">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/30">
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
