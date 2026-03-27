'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const TITLES = [
  'Full Stack Developer',
  'React / Next.js Engineer',
  'Flutter Developer',
  'Python Backend Dev',
]

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const full = TITLES[titleIdx]
    if (typing) {
      if (displayed.length < full.length) {
        const t = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
        return () => clearTimeout(t)
      } else {
        setTitleIdx((i) => (i + 1) % TITLES.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, titleIdx])

  const commands = [
    { prompt: 'whoami', output: 'kamalesh-b -- full-stack-developer' },
    { prompt: 'cat education.txt', output: 'B.Tech AI & Data Science | 2022–2026' },
    { prompt: 'cat experience.txt', output: '2+ years @ company | web development' },
    { prompt: 'echo $STATUS', output: '✅ Available for freelance' },
  ]

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16"
    >
      {/* Radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3fb950]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Left — Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-3 flex items-center gap-2 text-xs text-[#8b949e]"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#3fb950]" />
            Available for freelance projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-2 text-4xl font-bold leading-tight text-[#e6edf3] md:text-5xl"
          >
            Hi, I'm{' '}
            <span className="glow-green text-[#3fb950]">Kamalesh B</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 flex h-8 items-center text-xl text-[#58a6ff] md:text-2xl"
          >
            <span className="mr-2 text-[#8b949e]">$&gt;</span>
            <span>{displayed}</span>
            <span className="cursor-blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8 max-w-md font-sans text-sm leading-relaxed text-[#8b949e]"
          >
            B.Tech AI & DS graduate with 2+ years building production-grade web and mobile apps.
            I ship fast, write clean code, and turn ideas into real products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="rounded bg-[#3fb950] px-6 py-2.5 text-sm font-bold text-[#0d1117] transition-all duration-200 hover:bg-[#56d364]"
            >
              ./view_projects
            </a>
            <a
              href="#contact"
              className="rounded border border-[#30363d] px-6 py-2.5 text-sm text-[#e6edf3] transition-all duration-200 hover:border-[#58a6ff] hover:text-[#58a6ff]"
            >
              ./hire_me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded border border-[#30363d] px-6 py-2.5 text-sm text-[#8b949e] transition-all duration-200 hover:border-[#f0883e] hover:text-[#f0883e]"
            >
              ./resume.pdf
            </a>
          </motion.div>
        </div>

        {/* Right — Terminal Window */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="terminal-window"
        >
          <div className="terminal-titlebar">
            <div className="terminal-dot dot-red" />
            <div className="terminal-dot dot-yellow" />
            <div className="terminal-dot dot-green" />
            <span className="ml-2 text-xs text-[#8b949e]">kamalesh@portfolio:~</span>
          </div>
          <div className="space-y-3 p-5">
            {commands.map((cmd, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.2 }}
                className="space-y-1"
              >
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#3fb950]">kamalesh@dev</span>
                  <span className="text-[#8b949e]">~$</span>
                  <span className="text-[#e6edf3]">{cmd.prompt}</span>
                </div>
                <div className="pl-4 font-sans text-xs text-[#58a6ff]">{cmd.output}</div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex items-center gap-2 pt-1 text-sm"
            >
              <span className="text-[#3fb950]">kamalesh@dev</span>
              <span className="text-[#8b949e]">~$</span>
              <span className="cursor-blink" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-xs text-[#484f58]"
      >
        <span>scroll_down()</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="text-[#3fb950]"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}
