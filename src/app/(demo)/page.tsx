"use client"

import Link from "next/link"
import { motion } from "motion/react"
import {
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  TrendingUp,
  Users,
  BarChart3,
  Rocket,
  CheckCircle2,
  Play,
  Star,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-0 right-0 h-[800px] w-[800px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-lg cursor-pointer">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span>GoldenWave</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              서비스
            </Link>
            <Link href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              프로세스
            </Link>
            <Link href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              고객 후기
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 cursor-pointer"
            >
              무료 상담
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-6"
              >
                <Zap className="h-4 w-4" />
                <span>2026년 마케팅 트렌드 리더</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                <span className="block">당신의 브랜드를</span>
                <span className="block mt-2">
                  <span className="bg-gradient-to-r from-primary via-pink-400 to-accent bg-clip-text text-transparent">
                    빛나게
                  </span>
                  {" "}만들어 드립니다
                </span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                데이터 기반 전략과 크리에이티브 디자인으로
                매출 성장을 이끄는 마케팅 파트너.
                <span className="text-foreground font-medium"> 평균 ROI 340% 달성.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 cursor-pointer"
                >
                  무료 마케팅 진단받기
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <button className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-border bg-background/50 px-8 py-4 text-base font-semibold transition-all hover:border-primary/50 hover:bg-primary/5 cursor-pointer">
                  <Play className="h-5 w-5 text-primary" />
                  성공 사례 보기
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-background bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-xs font-semibold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">200+</span> 기업이 신뢰합니다
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Visual - Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              {/* Main Card */}
              <div className="relative rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-8 backdrop-blur-xl shadow-2xl">
                <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-2xl" />

                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-lg">실시간 성과 대시보드</h3>
                  <span className="flex h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-4">
                    <TrendingUp className="h-8 w-8 text-primary mb-2" />
                    <p className="text-3xl font-bold">340%</p>
                    <p className="text-sm text-muted-foreground">평균 ROI</p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 p-4">
                    <Users className="h-8 w-8 text-accent mb-2" />
                    <p className="text-3xl font-bold">2.5M</p>
                    <p className="text-sm text-muted-foreground">도달 고객</p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-500/5 p-4">
                    <BarChart3 className="h-8 w-8 text-amber-500 mb-2" />
                    <p className="text-3xl font-bold">89%</p>
                    <p className="text-sm text-muted-foreground">전환율 증가</p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-green-500/10 to-green-500/5 p-4">
                    <Rocket className="h-8 w-8 text-green-500 mb-2" />
                    <p className="text-3xl font-bold">14일</p>
                    <p className="text-sm text-muted-foreground">평균 런칭</p>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="h-32 rounded-xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 flex items-end justify-around p-4">
                  {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                      className="w-6 rounded-t-lg bg-gradient-to-t from-primary to-accent"
                    />
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 rounded-2xl border border-border/50 bg-card/90 p-4 backdrop-blur-xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold">신규 계약 체결</p>
                    <p className="text-sm text-muted-foreground">방금 전</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features - Bento Grid */}
      <section id="features" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              성공을 위한{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                올인원 솔루션
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              전략부터 실행까지, 비즈니스 성장에 필요한 모든 것을 제공합니다
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {/* Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 lg:col-span-2 group"
            >
              <div className="h-full rounded-3xl border border-border/50 bg-gradient-to-br from-primary/5 via-card to-card p-8 transition-all hover:border-primary/30 hover:shadow-xl cursor-pointer">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-pink-400 mb-6">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">퍼포먼스 마케팅</h3>
                <p className="text-muted-foreground mb-6 max-w-lg">
                  Google, Meta, 네이버 광고 최적화로 ROAS를 극대화합니다.
                  AI 기반 타겟팅과 A/B 테스트로 광고비 대비 최대 효율을 달성하세요.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Google Ads", "Meta Ads", "네이버 검색광고", "카카오모먼트"].map((tag) => (
                    <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="h-full rounded-3xl border border-border/50 bg-gradient-to-br from-accent/5 via-card to-card p-8 transition-all hover:border-accent/30 hover:shadow-xl cursor-pointer">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-cyan-400 mb-6">
                  <BarChart3 className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">데이터 분석</h3>
                <p className="text-muted-foreground">
                  실시간 대시보드로 모든 마케팅 성과를 한눈에 파악하고 인사이트를 도출합니다.
                </p>
              </div>
            </motion.div>

            {/* Small Cards Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <div className="h-full rounded-3xl border border-border/50 bg-card p-8 transition-all hover:border-primary/30 hover:shadow-xl cursor-pointer">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 mb-4">
                  <Sparkles className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">콘텐츠 제작</h3>
                <p className="text-sm text-muted-foreground">
                  브랜드 스토리를 담은 고퀄리티 콘텐츠
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group"
            >
              <div className="h-full rounded-3xl border border-border/50 bg-card p-8 transition-all hover:border-accent/30 hover:shadow-xl cursor-pointer">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 mb-4">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">그로스 해킹</h3>
                <p className="text-sm text-muted-foreground">
                  빠른 실험과 검증으로 성장 가속화
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group"
            >
              <div className="h-full rounded-3xl border border-border/50 bg-card p-8 transition-all hover:border-primary/30 hover:shadow-xl cursor-pointer">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 mb-4">
                  <Users className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">CRM 마케팅</h3>
                <p className="text-sm text-muted-foreground">
                  고객 생애 가치 극대화 전략
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              4단계로 완성되는 성공 여정
            </h2>
            <p className="text-lg text-muted-foreground">
              체계적인 프로세스로 확실한 결과를 만들어냅니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "무료 상담", desc: "비즈니스 현황 분석 및 목표 설정", color: "primary" },
              { step: "02", title: "전략 수립", desc: "맞춤형 마케팅 전략 및 예산 계획", color: "accent" },
              { step: "03", title: "실행 & 최적화", desc: "캠페인 런칭 및 실시간 성과 관리", color: "amber-500" },
              { step: "04", title: "성과 분석", desc: "상세 리포트 및 개선안 제안", color: "green-500" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-muted/30 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
                {i < 3 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-4 h-6 w-6 text-muted-foreground/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              고객들이 말하는{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                GoldenWave
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "마케팅 예산 대비 3배 이상의 매출 성장을 달성했습니다. 데이터 기반 의사결정이 핵심이었어요.",
                name: "김민수",
                role: "스타트업 대표",
                metric: "+320% 매출",
              },
              {
                quote: "다른 에이전시와는 차원이 다른 전문성. 매주 미팅에서 인사이트가 쏟아집니다.",
                name: "이지연",
                role: "이커머스 마케팅 팀장",
                metric: "ROAS 450%",
              },
              {
                quote: "브랜드 인지도가 확 올라갔어요. SNS 팔로워가 한 달 만에 5배 증가했습니다.",
                name: "박준혁",
                role: "패션 브랜드 CEO",
                metric: "+500% 팔로워",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="h-full rounded-3xl border border-border/50 bg-card p-8 transition-all hover:border-primary/30 hover:shadow-xl">
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">"{item.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.role}</p>
                    </div>
                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-500">
                      {item.metric}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-pink-500 to-accent p-12 lg:p-20 text-center text-white"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 h-40 w-40 rounded-full border-2 border-white" />
              <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full border-2 border-white" />
              <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white" />
            </div>

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                지금 바로 성장을 시작하세요
              </h2>
              <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                무료 마케팅 진단으로 비즈니스의 숨겨진 가능성을 발견하세요.
                <br />
                첫 상담은 100% 무료입니다.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-bold text-primary shadow-2xl transition-all hover:shadow-white/25 hover:-translate-y-1 cursor-pointer"
              >
                무료 상담 신청하기
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 font-bold">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span>GoldenWave Marketing</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 GoldenWave Marketing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
