'use client'
import { motion } from 'framer-motion'

const stats = [
  { value: '2+', label: 'Years Experience', icon: '📅' },
  { value: '15+', label: 'Projects Delivered', icon: '🚀' },
  { value: '8+', label: 'Tech Stacks', icon: '⚡' },
  { value: '100%', label: 'Client Satisfaction', icon: '⭐' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#3fb950] text-sm">$</span>
            <span className="text-[#8b949e] text-sm">cat about.md</span>
          </div>
          <h2 className="text-3xl font-bold text-[#e6edf3]">
            About <span className="text-[#3fb950]">Me</span>
          </h2>
          <div className="w-24 h-px bg-[#3fb950] mt-3 opacity-50" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — terminal file content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="terminal-window">
              <div className="terminal-titlebar">
                <div className="terminal-dot dot-red" />
                <div className="terminal-dot dot-yellow" />
                <div className="terminal-dot dot-green" />
                <span className="ml-2 text-xs text-[#8b949e]">about.md — kamalesh</span>
              </div>
              <div className="p-6 space-y-4 text-sm font-sans">
                <div>
                  <span className="text-[#f0883e]"># </span>
                  <span className="text-[#e6edf3] font-semibold">Kamalesh B</span>
                </div>
                <p className="text-[#8b949e] leading-relaxed">
                  I'm a B.Tech graduate in{' '}
                  <span className="text-[#58a6ff]">Artificial Intelligence & Data Science</span>{' '}
                  and a full-stack developer with 2+ years of professional experience building
                  scalable web applications at a product company.
                </p>
                <p className="text-[#8b949e] leading-relaxed">
                  I work across the full stack — crafting responsive frontends with{' '}
                  <span className="text-[#3fb950]">React, Next.js, and Vue.js</span>, building
                  robust backends with{' '}
                  <span className="text-[#bc8cff]">Python (Flask), NestJS, and Node.js</span>,
                  and shipping cross-platform mobile apps using{' '}
                  <span className="text-[#f0883e]">Flutter</span>.
                </p>
                <p className="text-[#8b949e] leading-relaxed">
                  I also leverage AI tools like{' '}
                  <span className="text-[#58a6ff]">Claude, ChatGPT, Gemini & GitHub Copilot</span>{' '}
                  to build smarter and ship faster. Based in{' '}
                  <span className="text-[#e6edf3]">India 🇮🇳</span>, open to remote
                  freelance work globally.
                </p>

                <div className="border-t border-[#30363d] pt-4 space-y-1 text-xs">
                  <div className="flex gap-2">
                    <span className="text-[#484f58] w-20 shrink-0">location:</span>
                    <span className="text-[#58a6ff]">India (Remote-first)</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[#484f58] w-20 shrink-0">degree:</span>
                    <span className="text-[#3fb950]">B.Tech AI & DS</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[#484f58] w-20 shrink-0">status:</span>
                    <span className="text-[#3fb950]">● Open to work</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[#484f58] w-20 shrink-0">english:</span>
                    <span className="text-[#e6edf3]">Professional</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 hover:border-[#3fb950]/50 transition-all duration-300 group"
                >
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="text-2xl font-bold text-[#3fb950] glow-green group-hover:scale-105 transition-transform">
                    {s.value}
                  </div>
                  <div className="text-xs text-[#8b949e] mt-1 font-sans">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-[#161b22] border border-[#30363d] rounded-lg p-5"
            >
              <div className="text-xs text-[#8b949e] mb-3">// working_principles</div>
              {[
                'Clean, maintainable code over quick hacks',
                'Communication-first with every client',
                'Ship fast, iterate based on feedback',
                'AI-augmented development for speed',
              ].map((val, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#8b949e] mb-2 font-sans">
                  <span className="text-[#3fb950] mt-0.5 shrink-0">→</span>
                  <span>{val}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
