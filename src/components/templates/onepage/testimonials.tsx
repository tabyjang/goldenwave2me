"use client"

import { motion } from "motion/react"
import { Star } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface TestimonialsProps {
  config: SiteConfig
}

export function Testimonials({ config }: TestimonialsProps) {
  const { testimonials } = config

  return (
    <section id="testimonials" className="snap-start min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Deep Black Background */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Corner Watermarks */}
      <div className="absolute top-8 right-8 text-[8rem] font-black text-white/[0.02] leading-none select-none">
        04
      </div>
      <div className="absolute bottom-8 left-8 text-[6rem] font-black text-white/[0.02] leading-none select-none">
        SAY
      </div>

      {/* Vertical Gold Lines */}
      <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/10 to-transparent" />
      <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-6">
            <span className="h-px w-8 bg-[#D4AF37]" />
            04 / Testimonials
          </span>
          <h2 className="text-5xl sm:text-8xl font-black leading-[0.9]">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="block text-white"
            >
              고객의
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="block text-white/30"
            >
              목소리
            </motion.span>
          </h2>

          {/* Stars */}
          <div className="flex items-center gap-2 mt-8">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <Star className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]" />
              </motion.div>
            ))}
            <span className="ml-2 text-white/40 text-sm">4.9점 평균</span>
          </div>
        </motion.div>

        {/* Testimonials - Editorial Style */}
        <div className="space-y-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`group relative py-12 border-t border-white/5 first:border-t-0 ${
                index % 2 === 0 ? "" : "md:pl-[20%]"
              }`}
            >
              {/* Large Quote Number */}
              <div className="absolute top-8 right-0 text-[8rem] font-black text-white/[0.02] leading-none select-none group-hover:text-[#D4AF37]/10 transition-colors duration-700">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Quote */}
              <div className={`relative max-w-4xl ${index % 2 === 0 ? "" : "ml-auto text-right"}`}>
                <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-light leading-[1.2] mb-10">
                  <motion.span
                    className="text-[#D4AF37] text-6xl font-serif leading-none"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.2 }}
                  >
                    "
                  </motion.span>
                  <span className="text-white/80">{testimonial.content}</span>
                  <motion.span
                    className="text-[#D4AF37] text-6xl font-serif leading-none"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                  >
                    "
                  </motion.span>
                </blockquote>

                {/* Author */}
                <div className={`flex items-center gap-4 ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>
                  <motion.div
                    className="h-1 w-16 bg-gradient-to-r from-[#D4AF37] to-[#B8860B]"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.2 }}
                  />
                  <div className={`flex items-center gap-4 ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>
                    <div className="h-12 w-12 border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                      <span className="text-[#D4AF37] font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div className={index % 2 === 0 ? "" : "text-right"}>
                      <div className="font-bold group-hover:text-[#D4AF37] transition-colors">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-white/40">{testimonial.company}</div>
                    </div>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className={`flex gap-1 mt-4 ${index % 2 === 0 ? "" : "justify-end"}`}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < (testimonial.rating || 5)
                          ? "fill-[#D4AF37]/50 text-[#D4AF37]/50"
                          : "text-white/10"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Hover Line */}
              <motion.div
                className={`absolute bottom-0 h-px bg-gradient-to-r from-[#D4AF37] to-transparent ${
                  index % 2 === 0 ? "left-0" : "right-0"
                }`}
                initial={{ width: 0 }}
                whileInView={{ width: "30%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.2 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-12 border-t border-white/5 flex justify-between items-center"
        >
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {["김", "이", "박", "최", "+"].map((char, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, x: -20 }}
                  whileInView={{ scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="h-10 w-10 border border-[#D4AF37]/30 bg-[#030303] flex items-center justify-center text-sm text-[#D4AF37]"
                >
                  {char}
                </motion.div>
              ))}
            </div>
            <span className="text-white/40 text-sm">100+ 만족 고객</span>
          </div>

          <div className="flex gap-10">
            {[
              { value: "4.9", label: "평균 평점" },
              { value: "98%", label: "재계약률" },
            ].map((stat, i) => (
              <div key={i} className="text-right">
                <div className="text-2xl font-black bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
