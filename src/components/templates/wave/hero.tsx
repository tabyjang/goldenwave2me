"use client"

import { motion } from "motion/react"
import { ArrowRight, Waves } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface HeroProps {
  config: SiteConfig
}

export function Hero({ config }: HeroProps) {
  const { hero } = config

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#0369a1] to-[#0ea5e9]" />

      {/* Light Rays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-white/10 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Animated Wave Layers */}
      <div className="absolute inset-0">
        {/* Wave Layer 1 - Top */}
        <svg
          className="absolute top-0 left-0 w-full h-40 opacity-30"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="white"
            animate={{
              d: [
                "M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,0 L0,0 Z",
                "M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,0 L0,0 Z",
                "M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,0 L0,0 Z",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* Wave Layer 2 - Middle */}
        <svg
          className="absolute top-1/3 left-0 w-full h-24 opacity-10"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="white"
            animate={{
              d: [
                "M0,50 C360,80 720,20 1080,50 C1260,65 1380,35 1440,50",
                "M0,50 C360,20 720,80 1080,50 C1260,35 1380,65 1440,50",
                "M0,50 C360,80 720,20 1080,50 C1260,65 1380,35 1440,50",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* Wave Layer 3 - Bottom (Main) */}
        <svg
          className="absolute bottom-0 left-0 w-full h-48"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="rgba(255,255,255,0.15)"
            animate={{
              d: [
                "M0,100 C180,150 360,50 540,100 C720,150 900,50 1080,100 C1260,150 1350,50 1440,100 L1440,200 L0,200 Z",
                "M0,100 C180,50 360,150 540,100 C720,50 900,150 1080,100 C1260,50 1350,150 1440,100 L1440,200 L0,200 Z",
                "M0,100 C180,150 360,50 540,100 C720,150 900,50 1080,100 C1260,150 1350,50 1440,100 L1440,200 L0,200 Z",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            fill="rgba(255,255,255,0.08)"
            animate={{
              d: [
                "M0,120 C240,160 480,80 720,120 C960,160 1200,80 1440,120 L1440,200 L0,200 Z",
                "M0,120 C240,80 480,160 720,120 C960,80 1200,160 1440,120 L1440,200 L0,200 Z",
                "M0,120 C240,160 480,80 720,120 C960,160 1200,80 1440,120 L1440,200 L0,200 Z",
              ],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      </div>

      {/* Rising Bubbles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 8 + (i % 4) * 6,
            height: 8 + (i % 4) * 6,
            left: `${10 + i * 11}%`,
            bottom: "-5%",
            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), rgba(255,255,255,0.1))`,
          }}
          animate={{
            y: [0, -800],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.8],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-3 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-6 py-3 mb-10">
            <Waves className="h-4 w-4" />
            <span className="text-sm font-medium tracking-wide">Digital Marketing Agency</span>
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8"
        >
          <span className="block drop-shadow-lg">비즈니스 성장의</span>
          <span className="block relative">
            <span className="text-white/70">새로운 물결</span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-2 left-0 h-1 bg-white/30 rounded-full"
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
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
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-10 py-4 font-semibold text-[#0369a1] transition-all hover:shadow-2xl hover:shadow-white/30"
          >
            {/* Ripple Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0369a1]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative">{hero.primaryCta?.text || "시작하기"}</span>
            <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4 font-semibold transition-all hover:bg-white/20 hover:border-white/30"
          >
            포트폴리오
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 inline-flex items-center rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 divide-x divide-white/10"
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
              className="px-8 sm:px-10 py-6 text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold">{stat.value}</div>
              <div className="text-xs text-white/50 mt-1">{stat.label}</div>
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
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </motion.div>
      </motion.div>
    </section>
  )
}
