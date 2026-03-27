'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: '~/', href: '#home' },
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'projects', href: '#projects' },
  { label: 'services', href: '#services' },
  { label: 'tools', href: '#tools' },
  { label: 'contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0d1117]/95 backdrop-blur-md border-b border-[#30363d]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-[#3fb950] font-bold text-sm">kamalesh@dev</span>
          <span className="text-[#8b949e]">:</span>
          <span className="text-[#58a6ff]">~</span>
          <span className="text-[#8b949e]">$</span>
          <span className="cursor-blink ml-0.5 group-hover:hidden" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.slice(1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`px-3 py-1.5 text-xs rounded transition-all duration-200 ${
                active === link.href
                  ? 'text-[#3fb950] bg-[#3fb950]/10'
                  : 'text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#21262d]'
              }`}
            >
              ./{link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 px-4 py-1.5 text-xs border border-[#3fb950] text-[#3fb950] rounded hover:bg-[#3fb950]/10 transition-all duration-200"
          >
            hire_me()
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#8b949e] hover:text-[#e6edf3] text-xl"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#161b22] border-b border-[#30363d] px-6 py-4 flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-[#8b949e] hover:text-[#3fb950] py-1 transition-colors"
              >
                <span className="text-[#3fb950]">$ </span>{link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
