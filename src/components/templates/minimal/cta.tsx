"use client"

import { motion } from "motion/react"
import { ArrowRight, Phone, Mail, MessageCircle, Send, Clock, CheckCircle2 } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface CTAProps {
  config: SiteConfig
}

export function CTA({ config }: CTAProps) {
  const { contact } = config

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[var(--layout-max-width)] px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] p-1"
        >
          {/* Inner Container */}
          <div className="relative rounded-[2.25rem] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] p-10 lg:p-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/3 rounded-full bg-white blur-[120px]" />
              <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/3 rounded-full bg-white blur-[100px]" />
              {/* Grid Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left Content */}
              <div className="text-white">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-sm mb-6">
                    <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    지금 상담 가능합니다
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold sm:text-4xl lg:text-5xl mb-6 leading-tight"
                >
                  지금 바로
                  <br />
                  <span className="text-white/80">무료 상담</span> 받아보세요
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-white/70 text-lg mb-10 max-w-md leading-relaxed"
                >
                  비즈니스 상황을 분석하고 맞춤 전략을 제안해드립니다.
                  부담 없이 문의해주세요.
                </motion.p>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="space-y-3 mb-10"
                >
                  {[
                    "전문 컨설턴트의 1:1 맞춤 상담",
                    "비즈니스 현황 분석 리포트 제공",
                    "최적의 마케팅 전략 제안",
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/80">
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  {contact.phone && (
                    <a
                      href={`tel:${contact.phone}`}
                      className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-5 py-3 text-white/90 hover:bg-white/20 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      {contact.phone}
                    </a>
                  )}
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-5 py-3 text-white/90 hover:bg-white/20 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    이메일 문의
                  </a>
                  {contact.kakao && (
                    <a
                      href={`https://pf.kakao.com/${contact.kakao}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#FEE500] px-5 py-3 text-[#3C1E1E] font-medium hover:bg-[#FEE500]/90 transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                      카카오톡
                    </a>
                  )}
                </motion.div>
              </div>

              {/* Right - Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="rounded-3xl bg-[var(--color-card)] p-8 shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-primary)] flex items-center justify-center">
                    <Send className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-foreground)]">
                      상담 신청
                    </h3>
                    <p className="text-sm text-[var(--color-muted-foreground)]">
                      24시간 내 연락드립니다
                    </p>
                  </div>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[var(--color-foreground)]">
                        이름
                      </label>
                      <input
                        type="text"
                        placeholder="홍길동"
                        className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[var(--color-foreground)]">
                        연락처
                      </label>
                      <input
                        type="tel"
                        placeholder="010-0000-0000"
                        className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]/20 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[var(--color-foreground)]">
                      관심 서비스
                    </label>
                    <select className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-[var(--color-foreground)] focus:border-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]/20 transition-all">
                      <option value="">선택해주세요</option>
                      <option value="homepage">홈페이지 제작</option>
                      <option value="blog">브랜드 블로그</option>
                      <option value="automation">업무 자동화</option>
                      <option value="all">전체 서비스</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[var(--color-foreground)]">
                      문의 내용
                    </label>
                    <textarea
                      rows={3}
                      placeholder="궁금하신 내용을 자유롭게 작성해주세요."
                      className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]/20 resize-none transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] py-4 font-semibold text-white shadow-lg shadow-[var(--color-secondary)]/25 transition-all hover:shadow-xl hover:shadow-[var(--color-secondary)]/30 hover:-translate-y-0.5"
                  >
                    무료 상담 신청하기
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>

                {/* Response Time */}
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[var(--color-muted-foreground)]">
                  <Clock className="h-4 w-4" />
                  평균 응답 시간: 2시간 이내
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
