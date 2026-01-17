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
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center">
                <span className="text-black font-bold text-lg">G</span>
              </div>
              <span className="text-lg font-semibold">{config.name}</span>
            </div>
            <p className="text-white/40 max-w-sm mb-6">
              {config.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {social?.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 text-sm transition-all hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
                >
                  Ig
                </a>
              )}
              {social?.youtube && (
                <a
                  href={social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 text-sm transition-all hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
                >
                  Yt
                </a>
              )}
              {social?.blog && (
                <a
                  href={social.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 text-sm transition-all hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
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
            <h4 className="text-sm font-medium text-[#D4AF37] uppercase tracking-wider mb-6">
              메뉴
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/40 hover:text-white transition-colors"
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
            <h4 className="text-sm font-medium text-[#D4AF37] uppercase tracking-wider mb-6">
              연락처
            </h4>
            <ul className="space-y-3 text-white/40">
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
          className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} {config.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/30">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">이용약관</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
