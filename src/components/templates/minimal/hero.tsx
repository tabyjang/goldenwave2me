"use client"

import { motion } from "motion/react"
import { ArrowRight, Play, CheckCircle2, Sparkles } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface HeroProps {
  config: SiteConfig
}

export function Hero({ config }: HeroProps) {
  const { hero } = config

  return (
    <section className="relative min-h-screen flex items-center pt-[var(--layout-header-height)] overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-gradient-to-br from-[var(--color-secondary)]/20 via-[var(--color-secondary)]/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-tr from-[var(--color-primary)]/15 via-[var(--color-primary)]/5 to-transparent blur-3xl" />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 h-3 w-3 rounded-full bg-[var(--color-secondary)]/40"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/3 h-2 w-2 rounded-full bg-[var(--color-primary)]/30"
        />
      </div>

      <div className="mx-auto max-w-[var(--layout-max-width)] px-4 py-20 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-secondary)]/10 to-[var(--color-primary)]/10 px-4 py-2 text-sm font-medium">
                <Sparkles className="h-4 w-4 text-[var(--color-secondary)]" />
                <span className="bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] bg-clip-text text-transparent">
                  마케팅 전문 에이전시
                </span>
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="block">비즈니스 성장을</span>
              <span className="block mt-2">
                <span className="relative">
                  <span className="bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] bg-clip-text text-transparent">
                    가속화
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute -bottom-2 left-0 h-1 w-full origin-left rounded-full bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)]"
                  />
                </span>
                {" "}하는 파트너
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-lg text-lg leading-relaxed text-[var(--color-muted-foreground)]"
            >
              {hero.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              {hero.primaryCta && (
                <a
                  href={hero.primaryCta.href}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-secondary)] px-8 py-4 font-medium text-[var(--color-secondary-foreground)] shadow-lg shadow-[var(--color-secondary)]/25 transition-all hover:shadow-xl hover:shadow-[var(--color-secondary)]/30 hover:-translate-y-0.5"
                >
                  {hero.primaryCta.text}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              )}
              {hero.secondaryCta && (
                <a
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--color-border)] bg-[var(--color-background)] px-8 py-4 font-medium transition-all hover:border-[var(--color-secondary)]/50 hover:bg-[var(--color-muted)]"
                >
                  {hero.secondaryCta.text}
                </a>
              )}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 pt-8 border-t border-[var(--color-border)]"
            >
              {[
                { value: "200+", label: "완료 프로젝트" },
                { value: "98%", label: "고객 만족도" },
                { value: "10년", label: "업계 경력" },
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--color-secondary)]" />
                  <div>
                    <span className="font-bold text-[var(--color-secondary)]">{stat.value}</span>
                    <span className="ml-1 text-sm text-[var(--color-muted-foreground)]">{stat.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main Card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[var(--color-secondary)] via-[var(--color-secondary)] to-[var(--color-primary)] p-[2px] shadow-2xl shadow-[var(--color-secondary)]/20">
              <div className="h-full w-full rounded-[22px] bg-[var(--color-card)] p-8">
                {/* Card Content */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-primary)] flex items-center justify-center">
                        <Sparkles className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">골든웨이브</div>
                        <div className="text-xs text-[var(--color-muted-foreground)]">마케팅 대시보드</div>
                      </div>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <div className="h-3 w-3 rounded-full bg-yellow-400" />
                      <div className="h-3 w-3 rounded-full bg-green-400" />
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "방문자", value: "+127%", color: "from-green-500 to-emerald-500" },
                      { label: "전환율", value: "+45%", color: "from-blue-500 to-cyan-500" },
                      { label: "매출", value: "+89%", color: "from-purple-500 to-pink-500" },
                    ].map((stat, i) => (
                      <div key={i} className="rounded-xl bg-[var(--color-muted)] p-3">
                        <div className="text-xs text-[var(--color-muted-foreground)]">{stat.label}</div>
                        <div className={`text-lg font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart Placeholder */}
                  <div className="h-32 rounded-xl bg-[var(--color-muted)] p-4">
                    <div className="flex h-full items-end justify-around gap-2">
                      {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                          className="w-full rounded-t-md bg-gradient-to-t from-[var(--color-secondary)] to-[var(--color-secondary)]/50"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex gap-3">
                    <div className="h-11 flex-1 rounded-xl bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] flex items-center justify-center text-sm font-medium text-white">
                      리포트 보기
                    </div>
                    <div className="h-11 w-11 rounded-xl bg-[var(--color-muted)] flex items-center justify-center">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-4 -left-4 rounded-2xl bg-[var(--color-card)] p-4 shadow-xl border border-[var(--color-border)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg shadow-green-500/30">
                  <Play className="h-5 w-5" fill="currentColor" />
                </div>
                <div>
                  <div className="font-semibold">1분 소개 영상</div>
                  <div className="text-sm text-[var(--color-muted-foreground)]">지금 바로 확인</div>
                </div>
              </div>
            </motion.div>

            {/* Notification Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -top-4 -right-4 rounded-2xl bg-[var(--color-card)] px-4 py-3 shadow-xl border border-[var(--color-border)]"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium">실시간 상담 가능</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
