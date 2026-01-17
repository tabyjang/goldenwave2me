"use client"

import { motion } from "motion/react"
import { ArrowRight, Mail, Phone, Waves, Send, MessageCircle } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface CTAProps {
  config: SiteConfig
}

export function CTA({ config }: CTAProps) {
  const { contact } = config

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Ocean Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#0369a1] to-[#0284c7]" />

      {/* Light Rays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-white/10 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Animated Wave Layers */}
      <div className="absolute inset-0">
        {/* Top Wave */}
        <svg
          className="absolute top-0 w-full h-32 opacity-20"
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

        {/* Bottom Wave Layers */}
        <svg
          className="absolute bottom-0 w-full h-48"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="rgba(255,255,255,0.1)"
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
            fill="rgba(255,255,255,0.05)"
            animate={{
              d: [
                "M0,130 C240,170 480,90 720,130 C960,170 1200,90 1440,130 L1440,200 L0,200 Z",
                "M0,130 C240,90 480,170 720,130 C960,90 1200,170 1440,130 L1440,200 L0,200 Z",
                "M0,130 C240,170 480,90 720,130 C960,170 1200,90 1440,130 L1440,200 L0,200 Z",
              ],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      </div>

      {/* Rising Bubbles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 6 + (i % 3) * 4,
            height: 6 + (i % 3) * 4,
            left: `${15 + i * 12}%`,
            bottom: "-5%",
            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), rgba(255,255,255,0.1))`,
          }}
          animate={{
            y: [0, -600],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.7],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeOut",
          }}
        />
      ))}

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-6 py-3 mb-10"
          >
            <Waves className="h-4 w-4" />
            <span className="text-sm font-medium tracking-wide">무료 상담</span>
            <MessageCircle className="h-4 w-4" />
          </motion.div>

          {/* Title */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="block drop-shadow-lg">함께</span>
            <span className="block relative">
              <span className="text-white/80">시작하세요</span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute -bottom-2 left-0 h-1 bg-white/30 rounded-full"
              />
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-white/60 mb-14 max-w-2xl mx-auto leading-relaxed">
            물결처럼 퍼져나가는 비즈니스 성장을 경험하세요.
            무료 상담을 통해 맞춤형 솔루션을 제안해드립니다.
          </p>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href={`mailto:${contact.email}`}
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-10 py-4 font-semibold text-[#0369a1] transition-all hover:shadow-2xl hover:shadow-white/30"
            >
              {/* Ripple Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0369a1]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Mail className="relative h-5 w-5" />
              <span className="relative">이메일 문의</span>
              <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            {contact.phone && (
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4 font-semibold transition-all hover:bg-white/20 hover:border-white/30"
              >
                <Phone className="h-5 w-5" />
                {contact.phone}
              </a>
            )}
          </motion.div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-lg mx-auto"
          >
            <p className="text-sm text-white/50 mb-4 tracking-wide">또는 빠른 문의</p>
            <form className="relative">
              <div className="flex gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 p-2">
                <input
                  type="email"
                  placeholder="이메일 주소를 입력하세요"
                  className="flex-1 bg-transparent px-6 py-3 text-white placeholder:text-white/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="group rounded-full bg-white px-6 py-3 text-[#0369a1] transition-all hover:shadow-lg hover:shadow-white/20"
                >
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </form>
            <p className="mt-4 text-xs text-white/40">
              24시간 이내 답변드립니다
            </p>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 inline-flex items-center rounded-2xl bg-white/10 backdrop-blur border border-white/10 divide-x divide-white/10"
          >
            {["빠른 응대", "무료 상담", "맞춤 제안"].map((badge, i) => (
              <div key={i} className="px-6 py-3 text-sm text-white/60">
                {badge}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
