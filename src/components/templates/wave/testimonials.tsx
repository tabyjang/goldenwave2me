"use client"

import { motion } from "motion/react"
import { Star, MessageCircle } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface TestimonialsProps {
  config: SiteConfig
}

export function Testimonials({ config }: TestimonialsProps) {
  const { testimonials } = config

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Wave Background */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
          <motion.path
            d="M0,50 C240,0 480,100 720,50 C960,0 1200,100 1440,50 L1440,0 L0,0 Z"
            fill="rgba(255,255,255,0.03)"
            animate={{
              d: [
                "M0,50 C240,0 480,100 720,50 C960,0 1200,100 1440,50 L1440,0 L0,0 Z",
                "M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,0 L0,0 Z",
                "M0,50 C240,0 480,100 720,50 C960,0 1200,100 1440,50 L1440,0 L0,0 Z",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Floating Bubbles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/5"
          style={{
            width: 10 + i * 5,
            height: 10 + i * 5,
            left: `${10 + i * 12}%`,
            bottom: "5%",
          }}
          animate={{
            y: [0, -150 - i * 30, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.6,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/10 backdrop-blur mb-6"
          >
            <MessageCircle className="h-8 w-8 text-white" />
          </motion.div>
          <span className="text-white/60 text-sm tracking-[0.3em] uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold">
            고객 후기
          </h2>
          <div className="flex items-center justify-center gap-1 mt-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Star className="h-5 w-5 fill-white text-white" />
              </motion.div>
            ))}
            <span className="ml-2 text-white/60">4.9 / 5.0</span>
          </div>
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
              className="group"
            >
              <motion.div
                className="h-full rounded-3xl bg-white/10 backdrop-blur-lg border border-white/10 p-8 transition-all duration-500 hover:bg-white/15 hover:border-white/20"
                whileHover={{ y: -5 }}
              >
                {/* Wave Decoration */}
                <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden rounded-t-3xl">
                  <motion.div
                    className="h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                    >
                      <Star
                        className={`h-4 w-4 transition-transform duration-300 group-hover:scale-110 ${
                          i < (testimonial.rating || 5)
                            ? "fill-white text-white"
                            : "text-white/20"
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/70 leading-relaxed mb-8">
                  <span className="text-white/40 text-2xl font-serif">"</span>
                  {testimonial.content}
                  <span className="text-white/40 text-2xl font-serif">"</span>
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    {/* Ripple */}
                    <motion.div
                      className="absolute inset-0 rounded-full border border-white/30"
                      animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/50">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
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
            <motion.div
              key={i}
              className="text-center px-8 py-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-white/50 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
