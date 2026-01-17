"use client"

import { motion } from "motion/react"
import type { SiteConfig } from "@/types/theme"

interface FooterProps {
  config: SiteConfig
}

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
]

export function Footer({ config }: FooterProps) {
  const { contact, social } = config

  return (
    <footer className="snap-start min-h-[50vh] flex items-end border-t border-white/10">
      <div className="w-full max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black mb-4">{config.name}</h3>
            <p className="text-sm text-white/40">{config.description}</p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-6">
              Menu
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
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
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-6">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-white/40">
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
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} {config.name}
          </p>
          <div className="flex gap-8 text-xs text-white/30">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
