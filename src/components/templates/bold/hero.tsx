"use client"

import { motion } from "motion/react"
import { ArrowRight, Sparkles, Zap } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface HeroProps {
  config: SiteConfig
}

export function Hero({ config }: HeroProps) {
  const { hero } = config

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-[#050403]" />

      {/* Gold Gradient Mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-b from-[#FFD700]/15 via-[#FFD700]/5 to-transparent blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[#FFA500]/10 blur-[120px]" />
        <div className="absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-[#FFD700]/8 blur-[100px]" />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[#FFD700]"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 px-4 text-center max-w-6xl mx-auto pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 border border-[#FFD700]/30 px-6 py-3 mb-10">
            <Sparkles className="h-4 w-4 text-[#FFD700]" />
            <span className="text-[#FFD700] text-sm font-bold uppercase tracking-[0.2em]">
              Premium Marketing Agency
            </span>
            <Zap className="h-4 w-4 text-[#FFD700]" />
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-[8rem] font-black leading-[0.85] tracking-tighter mb-8"
        >
          <span className="block text-white">비즈니스의</span>
          <span className="block relative">
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FFED4A] to-[#FFA500] bg-clip-text text-transparent">
              골든타임
            </span>
            {/* Glow Effect */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-[#FFD700] via-[#FFED4A] to-[#FFA500] bg-clip-text text-transparent blur-2xl -z-10"
            >
              골든타임
            </motion.span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-white/50 mb-12 leading-relaxed"
        >
          {hero.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          {hero.primaryCta && (
            <a
              href={hero.primaryCta.href}
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-10 py-5 text-lg font-black uppercase tracking-wider text-black transition-all"
            >
              {/* Button Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] via-[#FFED4A] to-[#FFA500]" />
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              {/* Shadow */}
              <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(255,215,0,0.4)] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">{hero.primaryCta.text}</span>
              <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          )}
          {hero.secondaryCta && (
            <a
              href={hero.secondaryCta.href}
              className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#FFD700]/40 px-10 py-5 text-lg font-bold uppercase tracking-wider text-[#FFD700] transition-all hover:border-[#FFD700] hover:bg-[#FFD700]/10 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]"
            >
              {hero.secondaryCta.text}
            </a>
          )}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 inline-flex items-center gap-12 rounded-2xl border border-[#FFD700]/10 bg-[#FFD700]/5 backdrop-blur px-10 py-6"
        >
          {[
            { value: "200+", label: "완료 프로젝트" },
            { value: "98%", label: "고객 만족도" },
            { value: "10년", label: "업계 경력" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center relative">
              {index > 0 && (
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 h-8 w-px bg-[#FFD700]/20" />
              )}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-3xl sm:text-4xl font-black bg-gradient-to-b from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent"
              >
                {stat.value}
              </motion.div>
              <div className="text-xs text-white/40 uppercase tracking-wider mt-1">{stat.label}</div>
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
        <div className="w-7 h-12 rounded-full border-2 border-[#FFD700]/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-[#FFD700] to-[#FFA500]"
          />
        </div>
      </motion.div>

      {/* Corner Decorations */}
      <div className="absolute top-20 left-10 text-[#FFD700]/10 text-9xl font-black select-none">G</div>
      <div className="absolute bottom-20 right-10 text-[#FFD700]/10 text-9xl font-black select-none">W</div>
    </section>
  )
}
