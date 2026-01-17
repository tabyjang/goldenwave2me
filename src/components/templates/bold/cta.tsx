"use client"

import { motion } from "motion/react"
import { ArrowRight, Mail, Phone, Sparkles, Send } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface CTAProps {
  config: SiteConfig
}

export function CTA({ config }: CTAProps) {
  const { contact } = config

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700] via-[#FFC000] to-[#FFB000]" />

      {/* Animated Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.1),transparent)] rounded-full"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-black/5 text-[12rem] font-black leading-none select-none">
        G
      </div>
      <div className="absolute bottom-10 right-10 text-black/5 text-[12rem] font-black leading-none select-none">
        W
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-black/10 backdrop-blur px-5 py-2 mb-8"
          >
            <Sparkles className="h-4 w-4 text-black/70" />
            <span className="text-sm font-bold uppercase tracking-wider text-black/70">
              무료 상담
            </span>
          </motion.span>

          {/* Title */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-black mb-6 leading-[0.95]">
            <span className="block">프로젝트를</span>
            <span className="block relative">
              시작하시겠습니까?
              <motion.svg
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 w-full h-4"
                viewBox="0 0 300 12"
              >
                <path
                  d="M2 10 Q 75 2, 150 6 T 298 6"
                  fill="none"
                  stroke="rgba(0,0,0,0.2)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </h2>

          <p className="text-xl text-black/50 mb-12 max-w-2xl mx-auto">
            비즈니스에 맞는 최적의 솔루션을 무료 상담을 통해 제안해드립니다.
            지금 바로 문의하세요.
          </p>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
          >
            <a
              href={`mailto:${contact.email}`}
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-black px-10 py-5 text-lg font-bold text-white transition-all hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Mail className="relative h-5 w-5" />
              <span className="relative">이메일 문의</span>
              <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            {contact.phone && (
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white/30 backdrop-blur-sm border-2 border-black/10 px-10 py-5 text-lg font-bold text-black transition-all hover:bg-white/50 hover:border-black/20"
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
            className="max-w-xl mx-auto"
          >
            <p className="text-sm font-bold uppercase tracking-wider text-black/50 mb-4">
              또는 빠른 문의
            </p>
            <form className="relative">
              <div className="flex gap-3 rounded-full bg-black/10 p-2">
                <input
                  type="email"
                  placeholder="이메일 주소를 입력하세요"
                  className="flex-1 bg-transparent px-6 py-4 text-black placeholder:text-black/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 font-bold text-white transition-all hover:bg-black/80"
                >
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </form>
            <p className="mt-4 text-sm text-black/40">
              24시간 이내 답변드립니다
            </p>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-8"
          >
            {["빠른 응대", "무료 상담", "맞춤 제안"].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-black/50">
                <div className="h-2 w-2 rounded-full bg-black/30" />
                <span className="text-sm font-medium">{badge}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
