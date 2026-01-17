"use client"

import { motion } from "motion/react"
import { ArrowRight, Mail, Phone, Gem, Sparkles, Send } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface CTAProps {
  config: SiteConfig
}

export function CTA({ config }: CTAProps) {
  const { contact } = config

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Deep Dark Background */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Luxury Gradient Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#B8860B]/8 rounded-full blur-[100px]" />
      </div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Floating Gold Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#D4AF37]"
          style={{
            width: 2 + (i % 3),
            height: 2 + (i % 3),
            left: `${15 + i * 12}%`,
            top: `${25 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-gradient-to-r from-[#D4AF37]/10 to-transparent backdrop-blur px-6 py-3 mb-10"
          >
            <Gem className="h-4 w-4 text-[#D4AF37]" />
            <span className="text-sm font-medium text-[#D4AF37] tracking-wide">
              Premium Consultation
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          </motion.div>

          {/* Title */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light leading-tight mb-6">
            <span className="block text-white/90">프로젝트를</span>
            <span className="block relative mt-2">
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#B8860B] bg-clip-text text-transparent font-semibold">
                시작하세요
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#B8860B] bg-clip-text text-transparent blur-2xl opacity-50 -z-10 font-semibold">
                시작하세요
              </span>
            </span>
          </h2>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-20 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto mb-8"
          />

          <p className="text-lg text-white/40 mb-14 max-w-2xl mx-auto font-light leading-relaxed">
            비즈니스 성장을 위한 첫 걸음을 함께하세요.
            무료 상담을 통해 맞춤형 프리미엄 솔루션을 제안해드립니다.
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
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-10 py-4 font-medium text-black transition-all"
            >
              {/* Button Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#B8860B]" />
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              {/* Glow */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_40px_rgba(212,175,55,0.5)]" />
              <Mail className="relative h-5 w-5" />
              <span className="relative">이메일 문의</span>
              <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            {contact.phone && (
              <a
                href={`tel:${contact.phone}`}
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-10 py-4 font-medium text-white/80 backdrop-blur transition-all hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10"
              >
                <Phone className="h-5 w-5 text-[#D4AF37]" />
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
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-4 w-4 text-[#D4AF37]/50" />
              <p className="text-sm text-white/30 uppercase tracking-wider">빠른 문의</p>
              <Sparkles className="h-4 w-4 text-[#D4AF37]/50" />
            </div>
            <form className="relative">
              <div className="flex gap-2 rounded-full border border-[#D4AF37]/10 bg-[#D4AF37]/5 backdrop-blur p-2">
                <input
                  type="email"
                  placeholder="이메일 주소를 입력하세요"
                  className="flex-1 bg-transparent px-6 py-3 text-white placeholder:text-white/25 focus:outline-none"
                />
                <button
                  type="submit"
                  className="group rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-6 py-3 transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  <Send className="h-5 w-5 text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </form>
            <p className="mt-4 text-xs text-white/20">
              24시간 이내 답변 · 무료 상담
            </p>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-8"
          >
            {["프리미엄 서비스", "맞춤 솔루션", "빠른 응대"].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-white/25">
                <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]/40" />
                <span className="text-xs uppercase tracking-wider">{badge}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] border-r border-t border-[#D4AF37]/5" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border-l border-b border-[#D4AF37]/5" />
    </section>
  )
}
