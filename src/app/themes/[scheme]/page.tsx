"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { colorSchemes, type ColorSchemeName } from "@/styles/color-schemes"
import {
  ArrowRight,
  ArrowLeft,
  Star,
  Zap,
  Globe,
  Sparkles,
  Check,
  Send,
  MessageCircle,
} from "lucide-react"

export default function ThemeDemoPage() {
  const params = useParams()
  const schemeName = params.scheme as ColorSchemeName

  const scheme = colorSchemes[schemeName]

  if (!scheme) {
    return (
      <div className="min-h-screen bg-[#09090b] flex items-center justify-center">
        <p className="text-white">Theme not found</p>
      </div>
    )
  }

  const c = scheme.colors

  return (
    <div className="min-h-screen" style={{ backgroundColor: c.bgDark, color: c.textPrimary }}>
      {/* Navigation */}
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b"
        style={{ borderColor: c.borderDefault, backgroundColor: `${c.bgDark}CC` }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/themes"
            className="flex items-center gap-2 transition-opacity hover:opacity-70"
            style={{ color: c.textSecondary }}
          >
            <ArrowLeft className="h-4 w-4" />
            모든 테마
          </Link>
          <div className="flex items-center gap-3">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: c.primary }}
            />
            <span className="font-bold">{scheme.name}</span>
          </div>
          <div className="flex gap-2">
            {Object.keys(colorSchemes).map((key) => (
              <Link
                key={key}
                href={`/themes/${key}`}
                className={`h-6 w-6 rounded-full border-2 transition-transform hover:scale-110 ${
                  key === schemeName ? "ring-2 ring-offset-2 ring-offset-black" : ""
                }`}
                style={{
                  backgroundColor: colorSchemes[key as ColorSchemeName].colors.primary,
                  borderColor: key === schemeName ? c.textPrimary : "transparent",
                }}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: c.primary }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
            style={{ backgroundColor: c.accent }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                style={{ backgroundColor: `${c.primary}20`, border: `1px solid ${c.borderDefault}` }}
              >
                <Sparkles className="h-4 w-4" style={{ color: c.primary }} />
                <span style={{ color: c.textSecondary }}>{scheme.name} Theme</span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl sm:text-7xl font-black leading-tight mb-6"
              >
                비즈니스 성장의{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: c.gradientPrimary }}
                >
                  새로운 시작
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl mb-10"
                style={{ color: c.textSecondary }}
              >
                데이터 기반 마케팅 전략으로 당신의 브랜드를 한 단계 높여드립니다.
                홈페이지, 브랜드블로그, 자동화 솔루션까지.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  className="group flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all hover:scale-105"
                  style={{ background: c.gradientPrimary, color: c.bgDark }}
                >
                  무료 상담 신청
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  className="flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all hover:bg-opacity-20"
                  style={{
                    backgroundColor: `${c.primary}15`,
                    border: `1px solid ${c.borderDefault}`,
                    color: c.primary,
                  }}
                >
                  포트폴리오 보기
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex gap-8 mt-12"
              >
                {[
                  { value: "200+", label: "완료 프로젝트" },
                  { value: "98%", label: "고객 만족도" },
                  { value: "10년", label: "업계 경력" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-black" style={{ color: c.primary }}>
                      {stat.value}
                    </div>
                    <div className="text-sm" style={{ color: c.textMuted }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div
                className="rounded-3xl p-8 relative overflow-hidden"
                style={{ backgroundColor: c.bgLight, border: `1px solid ${c.borderDefault}` }}
              >
                {/* Decorative gradient */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-30"
                  style={{ backgroundColor: c.primary }}
                />

                <div className="relative space-y-6">
                  {/* Service Cards */}
                  {[
                    { icon: Globe, title: "홈페이지 제작", desc: "전환율 높은 반응형 웹사이트" },
                    { icon: MessageCircle, title: "브랜드블로그", desc: "검색 최적화된 콘텐츠 마케팅" },
                    { icon: Zap, title: "업무 자동화", desc: "효율적인 마케팅 자동화 시스템" },
                  ].map((service, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl transition-all hover:translate-x-2"
                      style={{ backgroundColor: `${c.primary}10`, border: `1px solid ${c.borderDefault}` }}
                    >
                      <div
                        className="h-12 w-12 rounded-xl flex items-center justify-center"
                        style={{ background: c.gradientPrimary }}
                      >
                        <service.icon className="h-6 w-6" style={{ color: c.bgDark }} />
                      </div>
                      <div>
                        <div className="font-bold">{service.title}</div>
                        <div className="text-sm" style={{ color: c.textMuted }}>
                          {service.desc}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative" style={{ backgroundColor: c.bgLight }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span
              className="text-sm font-medium tracking-widest uppercase mb-4 block"
              style={{ color: c.primary }}
            >
              Our Services
            </span>
            <h2 className="text-4xl sm:text-6xl font-black">
              제공 서비스
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "홈페이지 제작",
                desc: "SEO 최적화된 모던 웹사이트로 온라인 존재감을 높이세요.",
                features: ["반응형 디자인", "SEO 최적화", "빠른 로딩 속도"],
              },
              {
                icon: MessageCircle,
                title: "브랜드블로그",
                desc: "전문 콘텐츠로 브랜드 신뢰도와 검색 노출을 동시에.",
                features: ["키워드 분석", "콘텐츠 기획", "정기 포스팅"],
              },
              {
                icon: Zap,
                title: "업무 자동화",
                desc: "반복 작업을 자동화하여 업무 효율을 극대화하세요.",
                features: ["워크플로우 설계", "API 연동", "리포팅 자동화"],
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2"
                style={{
                  backgroundColor: c.bgDark,
                  border: `1px solid ${c.borderDefault}`,
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{ backgroundColor: `${c.primary}20` }}
                />

                <div className="relative">
                  <div
                    className="h-16 w-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: c.gradientPrimary }}
                  >
                    <service.icon className="h-8 w-8" style={{ color: c.bgDark }} />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="mb-6" style={{ color: c.textMuted }}>
                    {service.desc}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-sm"
                        style={{ color: c.textSecondary }}
                      >
                        <Check className="h-4 w-4" style={{ color: c.primary }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span
              className="text-sm font-medium tracking-widest uppercase mb-4 block"
              style={{ color: c.primary }}
            >
              Testimonials
            </span>
            <h2 className="text-4xl sm:text-6xl font-black">
              고객 후기
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "김민준",
                company: "테크스타트업 대표",
                content: "골든웨이브와 함께한 후 매출이 3배 증가했습니다. 전문적인 접근 방식이 인상적이었어요.",
              },
              {
                name: "이서연",
                company: "이커머스 마케팅 팀장",
                content: "브랜드블로그 서비스로 검색 노출이 크게 개선되었습니다. 적극 추천드립니다!",
              },
              {
                name: "박지훈",
                company: "제조업체 CEO",
                content: "업무 자동화 덕분에 주 10시간 이상 절약하고 있어요. 최고의 투자였습니다.",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: c.bgLight,
                  border: `1px solid ${c.borderDefault}`,
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-5 w-5"
                      style={{ fill: c.primary, color: c.primary }}
                    />
                  ))}
                </div>

                <p className="mb-8 leading-relaxed" style={{ color: c.textSecondary }}>
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className="h-12 w-12 rounded-full flex items-center justify-center font-bold"
                    style={{ background: c.gradientPrimary, color: c.bgDark }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm" style={{ color: c.textMuted }}>
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden" style={{ backgroundColor: c.bgLight }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: c.primary }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-black mb-6"
          >
            지금 바로{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: c.gradientPrimary }}
            >
              시작하세요
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl mb-10"
            style={{ color: c.textSecondary }}
          >
            무료 상담을 통해 비즈니스에 맞는 최적의 솔루션을 제안받으세요.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <input
              type="email"
              placeholder="이메일을 입력하세요"
              className="px-6 py-4 rounded-full text-center sm:text-left"
              style={{
                backgroundColor: c.bgDark,
                border: `1px solid ${c.borderDefault}`,
                color: c.textPrimary,
              }}
            />
            <button
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold transition-all hover:scale-105"
              style={{ background: c.gradientPrimary, color: c.bgDark }}
            >
              <Send className="h-5 w-5" />
              무료 상담 신청
            </button>
          </motion.div>
        </div>
      </section>

      {/* Color Palette Display */}
      <section className="py-20 border-t" style={{ borderColor: c.borderDefault }}>
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-4 text-center">3색 조합 팔레트</h3>
          <p className="text-center mb-12" style={{ color: c.textMuted }}>
            {scheme.description}
          </p>

          {/* Main 3 Colors */}
          <div className="flex justify-center gap-8 mb-12">
            {[
              { name: "Color 1", label: "Primary", color: c.primary, light: c.primaryLight },
              { name: "Color 2", label: "Secondary", color: c.secondary, light: c.secondaryLight },
              { name: "Color 3", label: "Accent", color: c.accent, light: c.accentLight },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-xs font-bold mb-2" style={{ color: c.primary }}>
                  {item.name}
                </div>
                <div className="flex gap-2 mb-2">
                  <div
                    className="h-20 w-20 rounded-xl border shadow-lg"
                    style={{ backgroundColor: item.color, borderColor: c.borderDefault }}
                  />
                  <div
                    className="h-20 w-10 rounded-xl border"
                    style={{ backgroundColor: item.light, borderColor: c.borderDefault }}
                  />
                </div>
                <div className="text-sm font-medium" style={{ color: c.textSecondary }}>
                  {item.label}
                </div>
                <div className="text-xs font-mono" style={{ color: c.textMuted }}>
                  {item.color}
                </div>
              </div>
            ))}
          </div>

          {/* Supporting Colors */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "BG Dark", color: c.bgDark },
              { name: "BG Light", color: c.bgLight },
              { name: "Text Primary", color: c.textPrimary },
              { name: "Text Secondary", color: c.textSecondary },
              { name: "Text Muted", color: c.textMuted },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div
                  className="h-12 w-12 rounded-lg mb-2 border"
                  style={{ backgroundColor: item.color, borderColor: c.borderDefault }}
                />
                <div className="text-xs" style={{ color: c.textMuted }}>
                  {item.name}
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Preview */}
          <div className="mt-12">
            <h4 className="text-lg font-bold mb-4 text-center">그라데이션</h4>
            <div className="flex justify-center gap-4">
              <div className="text-center">
                <div
                  className="h-16 w-48 rounded-xl mb-2"
                  style={{ background: c.gradientPrimary }}
                />
                <div className="text-xs" style={{ color: c.textMuted }}>Primary Gradient (3색)</div>
              </div>
              <div className="text-center">
                <div
                  className="h-16 w-48 rounded-xl mb-2"
                  style={{ background: c.gradientAccent }}
                />
                <div className="text-xs" style={{ color: c.textMuted }}>Accent Gradient</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t" style={{ borderColor: c.borderDefault }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p style={{ color: c.textMuted }}>
            © 2026 골든웨이브 마케팅. {scheme.name} Theme Demo.
          </p>
        </div>
      </footer>
    </div>
  )
}
