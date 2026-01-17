"use client"

import { motion } from "motion/react"
import { Waves } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface ProcessProps {
  config: SiteConfig
}

export function Process({ config }: ProcessProps) {
  const { process } = config

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <svg
            key={i}
            className="absolute w-full opacity-[0.03]"
            style={{ top: `${20 + i * 20}%` }}
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d={`M0,50 C${240 + i * 50},${100 - i * 15} ${480 + i * 30},${i * 15} ${720},50 C${960 - i * 30},${100 - i * 15} ${1200 - i * 50},${i * 15} 1440,50`}
              fill="none"
              stroke="white"
              strokeWidth="2"
              animate={{
                d: [
                  `M0,50 C${240 + i * 50},${100 - i * 15} ${480 + i * 30},${i * 15} ${720},50 C${960 - i * 30},${100 - i * 15} ${1200 - i * 50},${i * 15} 1440,50`,
                  `M0,50 C${240 + i * 50},${i * 15} ${480 + i * 30},${100 - i * 15} ${720},50 C${960 - i * 30},${i * 15} ${1200 - i * 50},${100 - i * 15} 1440,50`,
                  `M0,50 C${240 + i * 50},${100 - i * 15} ${480 + i * 30},${i * 15} ${720},50 C${960 - i * 30},${100 - i * 15} ${1200 - i * 50},${i * 15} 1440,50`,
                ],
              }}
              transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        ))}
      </div>

      {/* Floating Bubbles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/5 backdrop-blur-sm"
          style={{
            width: 8 + i * 4,
            height: 8 + i * 4,
            left: `${5 + i * 10}%`,
            bottom: "10%",
          }}
          animate={{
            y: [0, -200 - i * 50, 0],
            x: [0, (i % 2 === 0 ? 20 : -20), 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: i * 0.8,
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
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/10 backdrop-blur mb-6"
          >
            <Waves className="h-8 w-8 text-white" />
          </motion.div>
          <span className="text-white/60 text-sm tracking-[0.3em] uppercase mb-4 block">
            Our Process
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold">
            작업 프로세스
          </h2>
          <p className="mt-6 text-white/50 max-w-lg mx-auto">
            물 흐르듯 자연스럽게 진행되는 체계적인 프로세스
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Curved Connection Line */}
          <svg className="hidden md:block absolute top-24 left-0 right-0 w-full h-20" preserveAspectRatio="none">
            <motion.path
              d="M80,40 Q260,80 440,40 Q620,0 800,40 Q980,80 1160,40"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="2"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />
          </svg>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group text-center"
              >
                {/* Step Circle */}
                <div className="relative z-10 mb-8 flex justify-center">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Ripple Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white/20"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    />

                    {/* Main Circle */}
                    <div className="relative h-24 w-24 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-500">
                      <span className="text-3xl font-bold">{step.step}</span>
                    </div>

                    {/* Outer Ring */}
                    <div className="absolute -inset-2 rounded-full border border-white/10 group-hover:border-white/30 transition-colors" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  className="relative rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>

                  {/* Wave Decoration */}
                  <svg className="absolute bottom-0 left-0 right-0 h-8 opacity-20" preserveAspectRatio="none" viewBox="0 0 100 20">
                    <motion.path
                      d="M0,10 Q25,20 50,10 Q75,0 100,10"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                      animate={{
                        d: [
                          "M0,10 Q25,20 50,10 Q75,0 100,10",
                          "M0,10 Q25,0 50,10 Q75,20 100,10",
                          "M0,10 Q25,20 50,10 Q75,0 100,10",
                        ],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                  </svg>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Wave Decoration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-5 rounded-full bg-white/10 backdrop-blur border border-white/10">
            <div className="flex items-center gap-2">
              <Waves className="h-5 w-5 text-white/60" />
              <span className="text-white/60">평균 완료 기간</span>
            </div>
            <div className="h-6 w-px bg-white/20" />
            <span className="text-xl font-bold">2-4주</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
