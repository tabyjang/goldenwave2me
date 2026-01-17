"use client"

import { motion } from "motion/react"
import type { SiteConfig } from "@/types/theme"

interface FooterProps {
  config: SiteConfig
}

const navItems = [
  { label: "서비스", href: "#services" },
  { label: "포트폴리오", href: "#portfolio" },
  { label: "프로세스", href: "#process" },
  { label: "문의하기", href: "#contact" },
]

export function Footer({ config }: FooterProps) {
  const { contact, social } = config

  return (
    <footer className="relative border-t border-white/10">
      {/* Wave Top */}
      <div className="absolute -top-1 left-0 right-0">
        <svg viewBox="0 0 1440 50" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,25 C360,50 720,0 1080,25 C1260,37 1380,12 1440,25 L1440,0 L0,0 Z"
            fill="rgba(255,255,255,0.05)"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-[#0369a1] font-bold text-lg">G</span>
              </div>
              <span className="text-lg font-bold">{config.name}</span>
            </div>
            <p className="text-white/50 max-w-sm mb-6">
              {config.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {social?.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 text-sm transition-all hover:bg-white hover:text-[#0369a1]"
                >
                  Ig
                </a>
              )}
              {social?.youtube && (
                <a
                  href={social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 text-sm transition-all hover:bg-white hover:text-[#0369a1]"
                >
                  Yt
                </a>
              )}
              {social?.blog && (
                <a
                  href={social.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 text-sm transition-all hover:bg-white hover:text-[#0369a1]"
                >
                  B
                </a>
              )}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
              메뉴
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
              연락처
            </h4>
            <ul className="space-y-3 text-white/50">
              <li>{contact.email}</li>
              {contact.phone && <li>{contact.phone}</li>}
              {contact.address && <li>{contact.address}</li>}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} {config.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/30">
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
