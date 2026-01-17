"use client"

import Link from "next/link"
import { Sparkles, Instagram, Youtube } from "lucide-react"
import type { SiteConfig } from "@/types/theme"

interface FooterProps {
  config: SiteConfig
}

export function Footer({ config }: FooterProps) {
  const { contact, social } = config
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-muted)]/30">
      <div className="mx-auto max-w-[var(--layout-max-width)] px-4 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Sparkles className="h-6 w-6 text-[var(--color-secondary)]" />
              <span>{config.name}</span>
            </Link>
            <p className="text-[var(--color-muted-foreground)] mb-4 max-w-md">
              {config.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {social?.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-muted)] text-[var(--color-muted-foreground)] transition hover:bg-[var(--color-secondary)] hover:text-[var(--color-secondary-foreground)]"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {social?.youtube && (
                <a
                  href={social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-muted)] text-[var(--color-muted-foreground)] transition hover:bg-[var(--color-secondary)] hover:text-[var(--color-secondary-foreground)]"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              )}
              {social?.blog && (
                <a
                  href={social.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-muted)] text-[var(--color-muted-foreground)] transition hover:bg-[var(--color-secondary)] hover:text-[var(--color-secondary-foreground)]"
                  aria-label="Blog"
                >
                  <span className="text-xs font-bold">B</span>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">서비스</h4>
            <ul className="space-y-2 text-sm text-[var(--color-muted-foreground)]">
              <li>
                <a href="#services" className="hover:text-[var(--color-foreground)] transition">
                  홈페이지 제작
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--color-foreground)] transition">
                  브랜드 블로그
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--color-foreground)] transition">
                  업무 자동화
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[var(--color-foreground)] transition">
                  포트폴리오
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">연락처</h4>
            <ul className="space-y-2 text-sm text-[var(--color-muted-foreground)]">
              <li>{contact.email}</li>
              {contact.phone && <li>{contact.phone}</li>}
              {contact.address && <li>{contact.address}</li>}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--color-muted-foreground)]">
          <p>© {currentYear} {config.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[var(--color-foreground)] transition">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="hover:text-[var(--color-foreground)] transition">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
