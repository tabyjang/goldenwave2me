"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, Sparkles } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface HeaderProps {
  config: SiteConfig
}

const navItems = [
  { href: "#services", label: "서비스" },
  { href: "#portfolio", label: "포트폴리오" },
  { href: "#process", label: "프로세스" },
  { href: "#contact", label: "문의" },
]

export function Header({ config }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl shadow-2xl shadow-[#FFD700]/10"
          : "bg-transparent"
      }`}
    >
      <div className="flex h-20 items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-[#FFD700]" />
          <span className="text-2xl font-black tracking-tight">{config.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold uppercase tracking-widest text-white/60 transition hover:text-[#FFD700]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] px-8 py-3 text-sm font-black uppercase tracking-wider text-black transition hover:shadow-lg hover:shadow-[#FFD700]/30 sm:block"
          >
            시작하기
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-full p-2 text-[#FFD700] lg:hidden"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[#FFD700]/20 lg:hidden"
          >
            <nav className="flex flex-col p-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-4 text-lg font-bold uppercase tracking-widest text-white/80 transition hover:text-[#FFD700]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
