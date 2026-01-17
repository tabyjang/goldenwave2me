"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { colorSchemes, type ColorSchemeName } from "@/styles/color-schemes"
import { ArrowRight, Palette } from "lucide-react"

export default function ThemesPage() {
  const schemes = Object.entries(colorSchemes) as [ColorSchemeName, typeof colorSchemes[ColorSchemeName]][]

  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            골든웨이브
          </Link>
          <nav className="flex gap-6">
            <Link href="/templates/bold" className="text-white/60 hover:text-white transition">
              Bold
            </Link>
            <Link href="/templates/dark" className="text-white/60 hover:text-white transition">
              Dark
            </Link>
            <Link href="/templates/wave" className="text-white/60 hover:text-white transition">
              Wave
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Palette className="h-4 w-4" />
            <span className="text-sm">6 Balanced 3-Color Palettes</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-7xl font-black mb-6"
          >
            색상 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-violet-500">패키지</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-xl max-w-2xl mx-auto"
          >
            2026 트렌드 기반의 고급스러운 3색 조합 팔레트
          </motion.p>
        </div>
      </section>

      {/* Color Schemes Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schemes.map(([slug, scheme], index) => (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/themes/${slug}`} className="block group">
                  <div
                    className="rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                    style={{ backgroundColor: scheme.colors.bgDark }}
                  >
                    {/* 3-Color Preview Header */}
                    <div className="h-36 relative overflow-hidden flex">
                      {/* Color 1: Primary */}
                      <div
                        className="flex-1 relative"
                        style={{ backgroundColor: scheme.colors.primary }}
                      >
                        <div
                          className="absolute inset-0 opacity-30"
                          style={{
                            background: `radial-gradient(circle at 30% 70%, ${scheme.colors.primaryLight}, transparent 60%)`
                          }}
                        />
                      </div>
                      {/* Color 2: Secondary */}
                      <div
                        className="flex-1 relative"
                        style={{ backgroundColor: scheme.colors.secondary }}
                      >
                        <div
                          className="absolute inset-0 opacity-30"
                          style={{
                            background: `radial-gradient(circle at 50% 50%, ${scheme.colors.secondaryLight}, transparent 60%)`
                          }}
                        />
                      </div>
                      {/* Color 3: Accent */}
                      <div
                        className="flex-1 relative"
                        style={{ backgroundColor: scheme.colors.accent }}
                      >
                        <div
                          className="absolute inset-0 opacity-30"
                          style={{
                            background: `radial-gradient(circle at 70% 30%, ${scheme.colors.accentLight}, transparent 60%)`
                          }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6" style={{ backgroundColor: scheme.colors.bgLight }}>
                      <h3
                        className="text-xl font-bold mb-1"
                        style={{ color: scheme.colors.textPrimary }}
                      >
                        {scheme.name}
                      </h3>
                      <p
                        className="text-sm mb-4"
                        style={{ color: scheme.colors.textMuted }}
                      >
                        {scheme.description}
                      </p>

                      {/* 3-Color Swatches with Labels */}
                      <div className="flex gap-3 mb-4">
                        <div className="flex flex-col items-center gap-1">
                          <div
                            className="h-10 w-10 rounded-lg border border-white/20 shadow-lg"
                            style={{ backgroundColor: scheme.colors.primary }}
                          />
                          <span className="text-[10px]" style={{ color: scheme.colors.textMuted }}>Primary</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div
                            className="h-10 w-10 rounded-lg border border-white/20 shadow-lg"
                            style={{ backgroundColor: scheme.colors.secondary }}
                          />
                          <span className="text-[10px]" style={{ color: scheme.colors.textMuted }}>Secondary</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div
                            className="h-10 w-10 rounded-lg border border-white/20 shadow-lg"
                            style={{ backgroundColor: scheme.colors.accent }}
                          />
                          <span className="text-[10px]" style={{ color: scheme.colors.textMuted }}>Accent</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <div
                        className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                        style={{ color: scheme.colors.primary }}
                      >
                        미리보기
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">구현 가이드</h2>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-bold mb-4">사용 방법</h3>
            <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto text-sm text-white/80">
{`import { ColorSchemeProvider } from "@/components/providers/ColorSchemeProvider"

export default function MyPage() {
  return (
    <ColorSchemeProvider schemeName="warm-elegance">
      <YourContent />
    </ColorSchemeProvider>
  )
}`}
            </pre>

            <h3 className="text-xl font-bold mt-8 mb-4">3색 조합 활용</h3>
            <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto text-sm text-white/80">
{`/* Color 1: Primary - 주요 브랜드 색상 */
.brand-element {
  background: var(--color-primary);
}

/* Color 2: Secondary - 보조 색상 (다른 색조) */
.secondary-element {
  background: var(--color-secondary);
}

/* Color 3: Accent - 강조 색상 (CTA, 버튼) */
.cta-button {
  background: var(--color-accent);
}

/* 3색 그라데이션 */
.hero-gradient {
  background: var(--color-gradient-primary);
}`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  )
}
