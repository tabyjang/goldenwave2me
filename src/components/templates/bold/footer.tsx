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
    <footer className="relative overflow-hidden border-t border-[#FFD700]/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FFD700]/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-3xl font-black mb-4">
              <span className="text-[#FFD700]">{config.name.charAt(0)}</span>
              {config.name.slice(1)}
            </h3>
            <p className="text-white/50 max-w-md mb-6">
              {config.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {social?.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full bg-[#FFD700]/10 flex items-center justify-center text-[#FFD700] font-bold transition hover:bg-[#FFD700] hover:text-black"
                >
                  Ig
                </a>
              )}
              {social?.youtube && (
                <a
                  href={social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full bg-[#FFD700]/10 flex items-center justify-center text-[#FFD700] font-bold transition hover:bg-[#FFD700] hover:text-black"
                >
                  Yt
                </a>
              )}
              {social?.blog && (
                <a
                  href={social.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full bg-[#FFD700]/10 flex items-center justify-center text-[#FFD700] font-bold transition hover:bg-[#FFD700] hover:text-black"
                >
                  B
                </a>
              )}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#FFD700] mb-6">
              메뉴
            </h4>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/50 transition hover:text-[#FFD700]"
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
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#FFD700] mb-6">
              연락처
            </h4>
            <ul className="space-y-4 text-white/50">
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
          className="mt-16 pt-8 border-t border-[#FFD700]/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} {config.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/30">
            <a href="#" className="hover:text-[#FFD700]">개인정보처리방침</a>
            <a href="#" className="hover:text-[#FFD700]">이용약관</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
