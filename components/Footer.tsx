'use client'
import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-[#21262d] py-8 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#484f58]">
        <div>
          <span className="text-[#3fb950]">kamalesh@dev</span>
          <span className="text-[#8b949e]">:~$ </span>
          <span className="text-[#8b949e]">echo "© {year} Kamalesh B. All rights reserved."</span>
        </div>
        <div className="flex items-center gap-6">
          {['GitHub', 'LinkedIn', 'Email'].map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-[#3fb950] transition-colors duration-200"
            >
              {link.toLowerCase()}
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}
