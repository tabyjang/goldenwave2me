"use client"

import { motion } from "motion/react"
import { ArrowRight, Zap } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface ProcessProps {
  config: SiteConfig
}

export function Process({ config }: ProcessProps) {
  const { process } = config

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 via-transparent to-[#FFA500]/10" />
        {/* Diagonal Lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px w-full bg-[#FFD700]"
              style={{
                top: `${i * 8}%`,
                transform: "rotate(-15deg)",
                transformOrigin: "left center",
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 h-32 w-32 rounded-full bg-[#FFD700]/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 h-40 w-40 rounded-full bg-[#FFA500]/5 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 mb-6"
          >
            <Zap className="h-8 w-8 text-[#FFD700]" />
          </motion.div>
          <span className="text-[#FFD700] text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
            Our Process
          </span>
          <h2 className="text-5xl sm:text-7xl font-black">
            이렇게 <span className="text-[#FFD700]">진행</span>됩니다
          </h2>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Main Timeline Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 mb-8 flex justify-center">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Outer Glow Ring */}
                    <div className="absolute inset-0 rounded-full bg-[#FFD700]/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Main Circle */}
                    <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center shadow-lg shadow-[#FFD700]/30">
                      <span className="text-4xl font-black text-black">{step.step}</span>
                    </div>

                    {/* Pulse Ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#FFD700]"
                      animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </motion.div>
                </div>

                {/* Arrow Connector (except last) */}
                {index < process.length - 1 && (
                  <div className="hidden md:flex absolute top-[4.5rem] left-[60%] w-full items-center">
                    <motion.div
                      className="flex-1 h-0.5 bg-gradient-to-r from-[#FFD700]/50 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.2 }}
                    />
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.2 }}
                    >
                      <ArrowRight className="h-5 w-5 text-[#FFD700]/50" />
                    </motion.div>
                  </div>
                )}

                {/* Content Card */}
                <div className="relative bg-gradient-to-br from-[#1a1400] to-[#0d0a00] rounded-2xl p-6 border border-[#FFD700]/10 group-hover:border-[#FFD700]/30 transition-all duration-500">
                  {/* Card Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-[#FFD700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative text-center">
                    <h3 className="text-xl font-black mb-3 group-hover:text-[#FFD700] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "50%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-white/40 mb-6">평균 프로젝트 완료 기간</p>
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20">
            <span className="text-3xl font-black text-[#FFD700]">2-4</span>
            <span className="text-white/60">주</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
