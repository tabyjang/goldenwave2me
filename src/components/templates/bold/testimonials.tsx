"use client"

import { motion } from "motion/react"
import { Star, Quote, Sparkles } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface TestimonialsProps {
  config: SiteConfig
}

export function Testimonials({ config }: TestimonialsProps) {
  const { testimonials } = config

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/5 via-transparent to-[#FFD700]/5" />
        {/* Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#FFD700]/5 blur-3xl" />
      </div>

      {/* Floating Stars */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-[#FFD700]/20"
          style={{
            top: `${15 + i * 15}%`,
            left: `${5 + i * 18}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          <Sparkles className="h-6 w-6" />
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Star className="h-6 w-6 fill-[#FFD700] text-[#FFD700]" />
              </motion.div>
            ))}
          </div>
          <span className="text-[#FFD700] text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
            Testimonials
          </span>
          <h2 className="text-5xl sm:text-7xl font-black">
            고객의 <span className="text-[#FFD700]">목소리</span>
          </h2>
          <p className="mt-6 text-white/40 max-w-xl mx-auto">
            실제 고객님들의 생생한 후기를 확인하세요
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group perspective-1000"
            >
              <div className="relative h-full rounded-3xl bg-gradient-to-br from-[#1c1608] via-[#0f0c04] to-[#0a0805] border border-[#FFD700]/10 p-8 transition-all duration-500 hover:border-[#FFD700]/30 hover:shadow-xl hover:shadow-[#FFD700]/10 hover:-translate-y-2">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Quote Icon */}
                <motion.div
                  className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center shadow-lg shadow-[#FFD700]/30"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                >
                  <Quote className="h-8 w-8 text-black" />
                </motion.div>

                {/* Stars */}
                <div className="relative flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                    >
                      <Star
                        className={`h-5 w-5 transition-all duration-300 ${
                          i < (testimonial.rating || 5)
                            ? "fill-[#FFD700] text-[#FFD700] group-hover:scale-110"
                            : "text-white/20"
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Quote Content */}
                <div className="relative">
                  <p className="text-white/70 text-lg mb-8 leading-relaxed">
                    <span className="text-[#FFD700] text-2xl font-serif">"</span>
                    {testimonial.content}
                    <span className="text-[#FFD700] text-2xl font-serif">"</span>
                  </p>
                </div>

                {/* Author */}
                <div className="relative flex items-center gap-4 pt-6 border-t border-white/5">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center text-xl font-black text-black shadow-lg shadow-[#FFD700]/20">
                      {testimonial.name.charAt(0)}
                    </div>
                    {/* Online indicator */}
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-[#0a0805]" />
                  </motion.div>
                  <div>
                    <div className="font-bold text-lg group-hover:text-[#FFD700] transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-white/40">{testimonial.company}</div>
                  </div>
                </div>

                {/* Bottom Accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] rounded-b-3xl"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {[
            { value: "100+", label: "만족 고객" },
            { value: "4.9", label: "평균 평점" },
            { value: "98%", label: "재계약률" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-black text-[#FFD700]">{stat.value}</div>
              <div className="text-sm text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
