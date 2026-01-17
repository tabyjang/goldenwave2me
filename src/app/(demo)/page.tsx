"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { themeList } from "@/themes"
import { ArrowRight, Eye, Sparkles } from "lucide-react"

export default function TemplateGalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Sparkles className="h-6 w-6 text-[#d4af37]" />
            <span>골든웨이브 마케팅</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#d4af37] px-4 py-2 text-sm font-medium text-black transition hover:bg-[#c4a030]"
            >
              상담 문의
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl px-4"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            마케팅 웹사이트{" "}
            <span className="bg-gradient-to-r from-[#d4af37] to-[#f0c850] bg-clip-text text-transparent">
              템플릿 갤러리
            </span>
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            비즈니스에 맞는 스타일을 선택하세요.
            <br />
            5가지 프리미엄 템플릿을 지금 바로 확인해보세요.
          </p>
        </motion.div>
      </section>

      {/* Template Grid */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {themeList.map((theme, index) => (
            <motion.div
              key={theme.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/templates/${theme.name}`}
                className="group block overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-xl"
              >
                {/* Preview Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <div
                    className="absolute inset-0 flex items-center justify-center text-6xl"
                    style={{
                      background:
                        theme.name === "dark"
                          ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)"
                          : theme.name === "bold"
                            ? "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)"
                            : theme.name === "wave"
                              ? "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)"
                              : theme.name === "onepage"
                                ? "linear-gradient(135deg, #18181b 0%, #3f3f46 100%)"
                                : "linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)",
                    }}
                  >
                    <span
                      className={
                        theme.name === "minimal"
                          ? "text-[#1a1a2e]"
                          : "text-white"
                      }
                    >
                      {theme.name === "minimal" && "✨"}
                      {theme.name === "bold" && "⚡"}
                      {theme.name === "dark" && "🌙"}
                      {theme.name === "wave" && "🌊"}
                      {theme.name === "onepage" && "🎯"}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black">
                      <Eye className="h-5 w-5" />
                      미리보기
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-bold">{theme.displayName}</h3>
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="text-muted-foreground">{theme.description}</p>

                  {/* Features */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {theme.features?.particles && (
                      <span className="rounded-full bg-muted px-3 py-1 text-xs">
                        파티클
                      </span>
                    )}
                    {theme.features?.waves && (
                      <span className="rounded-full bg-muted px-3 py-1 text-xs">
                        웨이브
                      </span>
                    )}
                    {theme.features?.glassmorphism && (
                      <span className="rounded-full bg-muted px-3 py-1 text-xs">
                        글라스
                      </span>
                    )}
                    {theme.features?.gradients && (
                      <span className="rounded-full bg-muted px-3 py-1 text-xs">
                        그라데이션
                      </span>
                    )}
                    {theme.features?.scrollSnap && (
                      <span className="rounded-full bg-muted px-3 py-1 text-xs">
                        스냅 스크롤
                      </span>
                    )}
                    <span className="rounded-full bg-muted px-3 py-1 text-xs">
                      {theme.animation.type}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-muted py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            마음에 드는 템플릿을 찾으셨나요?
          </h2>
          <p className="mb-8 text-muted-foreground">
            무료 상담을 통해 비즈니스에 맞는 맞춤 제작을 시작하세요.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-8 py-4 font-medium text-black transition hover:bg-[#c4a030]"
          >
            무료 상담 신청하기
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground">
          © 2026 골든웨이브 마케팅. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
