"use client"

import { motion } from "motion/react"
import { ArrowRight, Mail, Phone, Zap, Send } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface CTAProps {
  config: SiteConfig
}

export function CTA({ config }: CTAProps) {
  const { contact } = config

  return (
    <section id="contact" className="snap-start min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Deep Black Background */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Dramatic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px]" />

      {/* Animated Circles */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#D4AF37]/10 rounded-full"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[#D4AF37]/5 rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-[#D4AF37]/3 rounded-full"
      />

      {/* Accent Lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent origin-center"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent origin-center"
      />

      {/* Vertical Lines */}
      <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="absolute top-0 bottom-0 right-1/4 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      {/* Corner Numbers */}
      <div className="absolute top-8 left-8 text-[6rem] font-black text-white/[0.02] leading-none select-none">
        05
      </div>
      <div className="absolute bottom-8 right-8 text-[6rem] font-black text-white/[0.02] leading-none select-none">
        CTA
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[#D4AF37]">
              <span className="h-px w-8 bg-[#D4AF37]" />
              <Zap className="h-3 w-3" />
              Contact
              <Zap className="h-3 w-3" />
              <span className="h-px w-8 bg-[#D4AF37]" />
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9] mb-8"
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="block text-white"
            >
              프로젝트를
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="block relative"
            >
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#f0c850] to-[#B8860B] bg-clip-text text-transparent">
                시작하세요
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#f0c850] to-[#B8860B] bg-clip-text text-transparent blur-2xl opacity-50 -z-10">
                시작하세요
              </span>
            </motion.span>
          </motion.h2>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-base text-white/30 max-w-lg mx-auto mb-14 tracking-wide"
          >
            강렬한 임팩트로 비즈니스를 성장시키세요.
            무료 상담을 통해 맞춤형 솔루션을 제안해드립니다.
          </motion.p>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
          >
            <a
              href={`mailto:${contact.email}`}
              className="group relative inline-block overflow-hidden"
            >
              {/* Border */}
              <span className="absolute inset-0 border border-white/20 group-hover:border-[#D4AF37]/50 transition-colors duration-500" />
              {/* Fill Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              {/* Content */}
              <span className="relative flex items-center justify-center gap-3 px-12 py-5 text-sm uppercase tracking-[0.2em] font-medium text-white group-hover:text-black transition-colors duration-500">
                <Mail className="h-4 w-4" />
                이메일 문의
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            {contact.phone && (
              <a
                href={`tel:${contact.phone}`}
                className="group relative inline-block overflow-hidden"
              >
                <span className="absolute inset-0 border border-[#D4AF37]/30 group-hover:border-[#D4AF37]/60 transition-colors duration-500" />
                <span className="absolute inset-0 bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 transition-colors duration-500" />
                <span className="relative flex items-center justify-center gap-3 px-12 py-5 text-sm uppercase tracking-[0.2em] font-medium text-[#D4AF37]">
                  <Phone className="h-4 w-4" />
                  {contact.phone}
                </span>
              </a>
            )}
          </motion.div>

          {/* Quick Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="max-w-md mx-auto"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 mb-4">
              또는 빠른 문의
            </p>
            <form className="relative">
              <div className="flex border border-white/10 hover:border-white/20 transition-colors">
                <input
                  type="email"
                  placeholder="이메일 주소"
                  className="flex-1 bg-transparent px-6 py-4 text-white placeholder:text-white/20 focus:outline-none text-sm"
                />
                <button
                  type="submit"
                  className="group px-6 py-4 border-l border-white/10 text-white/50 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all"
                >
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </form>
          </motion.div>

          {/* Email Display */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-12 text-xs text-white/15 tracking-wider"
          >
            {contact.email}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
