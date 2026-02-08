"use client"

import Link from "next/link"
import { useState } from "react"
import { Container } from "./container"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { defaultSiteConfig } from "@/config/site.config"

const navLinks = [
  { href: "/services", label: "서비스" },
  { href: "/pricing", label: "요금제" },
  { href: "/about", label: "소개" },
  { href: "/blog", label: "블로그" },
  { href: "/faq", label: "FAQ" },
] as const

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            {defaultSiteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <ThemeSwitcher />
              <LanguageSwitcher />
              <ModeToggle />
              <Link href="/contact">
                <Button size="sm">무료 상담 신청</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-4 border-t">
                <ThemeSwitcher />
                <LanguageSwitcher />
                <ModeToggle />
              </div>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">무료 상담 신청</Button>
              </Link>
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}
