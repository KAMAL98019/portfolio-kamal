'use client'
import { motion } from 'framer-motion'

const aiTools = [
  {
    name: 'Claude AI',
    maker: 'Anthropic',
    usage: 'Code review, architecture planning, writing documentation, complex reasoning tasks.',
    icon: '◆',
    color: '#f0883e',
    proficiency: 88,
  },
  {
    name: 'ChatGPT',
    maker: 'OpenAI',
    usage: 'Rapid prototyping, debugging, API integration, and generating boilerplate code.',
    icon: '⬡',
    color: '#3fb950',
    proficiency: 90,
  },
  {
    name: 'Gemini AI',
    maker: 'Google',
    usage: 'Multimodal tasks, code explanation, research, and integrating with Google APIs.',
    icon: '✦',
    color: '#58a6ff',
    proficiency: 82,
  },
  {
    name: 'GitHub Copilot',
    maker: 'GitHub × OpenAI',
    usage: 'In-editor autocomplete, inline suggestions, and speeding up repetitive coding patterns.',
    icon: '◉',
    color: '#bc8cff',
    proficiency: 85,
  },
]

export default function AITools() {
  return (
    <section id="tools" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#3fb950] text-sm">$</span>
            <span className="text-[#8b949e] text-sm">pip list | grep ai-tools</span>
          </div>
          <h2 className="text-3xl font-bold text-[#e6edf3]">
            AI <span className="text-[#bc8cff]">Toolset</span>
          </h2>
          <div className="w-24 h-px bg-[#bc8cff] mt-3 opacity-50" />
          <p className="text-[#8b949e] text-sm mt-4 font-sans max-w-xl">
            I actively use AI tools to build faster and smarter — not as a crutch, but as a force multiplier.
            Here's my AI stack:
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {aiTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="terminal-window group transition-all duration-300"
              style={{ borderColor: `${tool.color}25` }}
            >
              <div className="terminal-titlebar">
                <div className="terminal-dot dot-red" />
                <div className="terminal-dot dot-yellow" />
                <div className="terminal-dot dot-green" />
                <span className="ml-2 text-xs text-[#8b949e]">{tool.maker}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-2xl font-bold"
                    style={{ color: tool.color, textShadow: `0 0 12px ${tool.color}60` }}
                  >
                    {tool.icon}
                  </span>
                  <h3 className="text-lg font-bold text-[#e6edf3]">{tool.name}</h3>
                </div>

                <p className="text-xs text-[#8b949e] leading-relaxed mb-5 font-sans">
                  {tool.usage}
                </p>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#484f58]">proficiency</span>
                    <span style={{ color: tool.color }}>{tool.proficiency}%</span>
                  </div>
                  <div className="h-1.5 bg-[#21262d] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.15 + 0.3, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{
                        backgroundColor: tool.color,
                        boxShadow: `0 0 8px ${tool.color}60`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#161b22] border border-[#bc8cff]/30 rounded-lg p-6"
        >
          <div className="flex items-start gap-4">
            <div className="text-2xl shrink-0">⚡</div>
            <div>
              <h4 className="font-bold text-[#e6edf3] mb-2 text-sm">
                AI-Augmented Development
              </h4>
              <p className="text-xs text-[#8b949e] leading-relaxed font-sans">
                By combining my deep technical knowledge with AI tools, I can deliver projects
                significantly faster than traditional workflows — while maintaining high code quality,
                best practices, and full understanding of everything I ship. You get a developer
                who leverages the best of human expertise <span className="text-[#bc8cff]">+</span>{' '}
                AI productivity.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
