"use client"

import { motion } from "motion/react"
import { ArrowRight, Gem } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface HeroProps {
  config: SiteConfig
}

export function Hero({ config }: HeroProps) {
  const { hero } = config

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep Dark Background */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Luxury Gradient Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#D4AF37]/8 via-[#D4AF37]/3 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#B8860B]/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[100px]" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Floating Gold Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#D4AF37]"
          style={{
            width: 2 + (i % 3),
            height: 2 + (i % 3),
            left: `${10 + i * 10}%`,
            top: `${20 + (i % 4) * 15}%`,
          }}
          animate={{
            y: [-30, 30, -30],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center pt-20">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-gradient-to-r from-[#D4AF37]/10 to-transparent backdrop-blur px-6 py-3 mb-10"
        >
          <Gem className="h-4 w-4 text-[#D4AF37]" />
          <span className="text-sm font-medium text-[#D4AF37] tracking-wide">
            Premium Digital Agency
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-light leading-[1.05] mb-8 tracking-tight"
        >
          <span className="block text-white/90 font-normal">
            비즈니스 성장의
          </span>
          <span className="block relative mt-2">
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#B8860B] bg-clip-text text-transparent font-semibold">
              프리미엄 파트너
            </span>
            {/* Glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#B8860B] bg-clip-text text-transparent blur-2xl opacity-50 -z-10 font-semibold">
              프리미엄 파트너
            </span>
          </span>
        </motion.h1>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto mb-8"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/40 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          {hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-10 py-4 font-medium text-black transition-all"
          >
            {/* Button Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#B8860B]" />
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            {/* Glow */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_40px_rgba(212,175,55,0.4)]" />
            <span className="relative">{hero.primaryCta?.text || "시작하기"}</span>
            <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#portfolio"
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-10 py-4 font-medium text-white/80 backdrop-blur transition-all hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10"
          >
            포트폴리오 보기
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 inline-flex items-center rounded-2xl border border-[#D4AF37]/10 bg-[#D4AF37]/5 backdrop-blur divide-x divide-[#D4AF37]/10"
        >
          {[
            { value: "200+", label: "완료 프로젝트" },
            { value: "98%", label: "고객 만족도" },
            { value: "10년", label: "업계 경력" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="px-10 py-6 text-center"
            >
              <div className="text-3xl sm:text-4xl font-semibold bg-gradient-to-b from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-white/30 mt-1 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
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
        <div className="w-6 h-12 rounded-full border border-[#D4AF37]/20 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-[#D4AF37]"
          />
        </div>
      </motion.div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] border-r border-t border-[#D4AF37]/5" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] border-l border-b border-[#D4AF37]/5" />
    </section>
  )
}
