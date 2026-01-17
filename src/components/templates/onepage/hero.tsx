"use client"

import { motion } from "motion/react"
import { ArrowDown, Zap } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface HeroProps {
  config: SiteConfig
}

export function Hero({ config }: HeroProps) {
  const { hero } = config

  return (
    <section className="snap-start h-screen flex items-center justify-center relative overflow-hidden">
      {/* Deep Black Background */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Dramatic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[150px]" />

      {/* Accent Lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent origin-center"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent origin-center"
      />

      {/* Vertical Accent Lines */}
      <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="absolute top-0 bottom-0 right-1/4 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      {/* Corner Numbers */}
      <div className="absolute top-8 left-8 text-[8rem] font-black text-white/[0.02] leading-none select-none">
        01
      </div>
      <div className="absolute bottom-8 right-8 text-[8rem] font-black text-white/[0.02] leading-none select-none">
        GW
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[#D4AF37]">
            <span className="h-px w-8 bg-[#D4AF37]" />
            <Zap className="h-3 w-3" />
            Digital Marketing Agency
            <Zap className="h-3 w-3" />
            <span className="h-px w-8 bg-[#D4AF37]" />
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl sm:text-8xl lg:text-[11rem] font-black leading-[0.85] tracking-tighter mb-8"
        >
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block text-white"
          >
            비즈니스
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="block relative"
          >
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#f0c850] to-[#B8860B] bg-clip-text text-transparent">
              임팩트
            </span>
            {/* Glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#f0c850] to-[#B8860B] bg-clip-text text-transparent blur-3xl opacity-50 -z-10">
              임팩트
            </span>
          </motion.span>
        </motion.h1>

        {/* Decorative Element */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg text-white/30 max-w-lg mx-auto mb-14 tracking-wide"
        >
          {hero.subtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="#services"
            className="group relative inline-block overflow-hidden"
          >
            {/* Button Border */}
            <span className="absolute inset-0 border border-white/20 group-hover:border-[#D4AF37]/50 transition-colors duration-500" />

            {/* Fill Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

            {/* Text */}
            <span className="relative block px-14 py-5 text-sm uppercase tracking-[0.2em] font-medium text-white group-hover:text-black transition-colors duration-500">
              {hero.primaryCta?.text || "시작하기"}
            </span>
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 flex justify-center gap-16"
        >
          {[
            { value: "200+", label: "프로젝트" },
            { value: "98%", label: "만족도" },
            { value: "10년", label: "경력" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-black bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/20 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="h-5 w-5 text-[#D4AF37]/50" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
