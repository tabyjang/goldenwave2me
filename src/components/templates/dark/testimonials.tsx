"use client"

import { motion } from "motion/react"
import { Star, Quote } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface TestimonialsProps {
  config: SiteConfig
}

export function Testimonials({ config }: TestimonialsProps) {
  const { testimonials } = config

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5" />
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#D4AF37]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#D4AF37]/10 to-transparent blur-3xl" />
      </div>

      {/* Floating Quote Marks */}
      <motion.div
        className="absolute top-20 left-20 text-[#D4AF37]/5"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Quote className="h-32 w-32" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-20 text-[#D4AF37]/5 rotate-180"
        animate={{ y: [0, 20, 0], rotate: [180, 175, 180] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <Quote className="h-32 w-32" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Star className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]" />
              </motion.div>
            ))}
          </div>
          <span className="text-[#D4AF37] text-sm font-medium tracking-[0.3em] uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-6xl font-semibold">
            고객 <span className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">후기</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card Glow */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

              <div className="relative h-full rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-8 backdrop-blur transition-all duration-500 hover:border-[#D4AF37]/20">
                {/* Quote Icon */}
                <motion.div
                  className="absolute -top-3 -right-3 h-12 w-12 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/20 border border-[#D4AF37]/20 flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                >
                  <Quote className="h-5 w-5 text-[#D4AF37]" />
                </motion.div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 transition-all duration-300 ${
                        i < (testimonial.rating || 5)
                          ? "fill-[#D4AF37] text-[#D4AF37]"
                          : "text-white/10"
                      }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-white/60 leading-relaxed mb-8">
                  <span className="text-[#D4AF37] text-lg">"</span>
                  {testimonial.content}
                  <span className="text-[#D4AF37] text-lg">"</span>
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/20 border border-[#D4AF37]/20 flex items-center justify-center">
                    <span className="text-[#D4AF37] font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium group-hover:text-[#D4AF37] transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-white/40">{testimonial.company}</div>
                  </div>
                </div>

                {/* Bottom Line */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "50%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-full border border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["김", "이", "박", "최"].map((char, i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full bg-gradient-to-br from-[#D4AF37]/30 to-[#B8860B]/30 border-2 border-[#0a0a0a] flex items-center justify-center text-xs text-[#D4AF37]"
                  >
                    {char}
                  </div>
                ))}
              </div>
              <span className="text-sm text-white/40">+100명의 만족 고객</span>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
              <span className="text-sm text-white/40">평균 4.9점</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
