'use client'
import { motion } from 'framer-motion'

const skillGroups = [
  {
    category: 'frontend',
    color: '#58a6ff',
    icon: '🖥️',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'Vue.js', level: 82 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 88 },
    ],
  },
  {
    category: 'backend',
    color: '#3fb950',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'NestJS', level: 82 },
      { name: 'Python / Flask', level: 84 },
      { name: 'REST APIs', level: 90 },
      { name: 'PostgreSQL / MongoDB', level: 78 },
    ],
  },
  {
    category: 'mobile',
    color: '#f0883e',
    icon: '📱',
    skills: [
      { name: 'Flutter', level: 65 },
      { name: 'Dart', level: 65 },
      { name: 'Firebase', level: 70 },
    ],
  },
  {
    category: 'ai_tools',
    color: '#bc8cff',
    icon: '🤖',
    skills: [
      { name: 'Claude AI', level: 88 },
      { name: 'ChatGPT / OpenAI', level: 90 },
      { name: 'Gemini AI', level: 82 },
      { name: 'GitHub Copilot', level: 85 },
      { name: 'Prompt Engineering', level: 85 },
    ],
  },
  {
    category: 'devops',
    color: '#f0883e',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 88 },
      { name: 'Docker', level: 70 },
      { name: 'Vercel / Netlify', level: 85 },
      { name: 'Linux / Bash', level: 75 },
    ],
  },
]

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="mb-3"
    >
      <div className="flex justify-between text-xs mb-1">
        <span className="text-[#c9d1d9] font-sans">{name}</span>
        <span style={{ color }} className="font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-[#21262d] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}60` }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#3fb950] text-sm">$</span>
            <span className="text-[#8b949e] text-sm">ls -la skills/</span>
          </div>
          <h2 className="text-3xl font-bold text-[#e6edf3]">
            Tech <span className="text-[#58a6ff]">Stack</span>
          </h2>
          <div className="w-24 h-px bg-[#58a6ff] mt-3 opacity-50" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className="terminal-window hover:border-[#30363d] hover:shadow-lg transition-all duration-300"
              style={{ borderColor: `${group.color}30` }}
            >
              <div className="terminal-titlebar">
                <div className="terminal-dot dot-red" />
                <div className="terminal-dot dot-yellow" />
                <div className="terminal-dot dot-green" />
                <span className="ml-2 text-xs" style={{ color: group.color }}>
                  {group.icon} /{group.category}
                </span>
              </div>
              <div className="p-5">
                <div className="text-xs text-[#484f58] mb-4">
                  // {group.skills.length} packages installed
                </div>
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={group.color}
                    delay={gi * 0.1 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="terminal-window"
          >
            <div className="terminal-titlebar">
              <div className="terminal-dot dot-red" />
              <div className="terminal-dot dot-yellow" />
              <div className="terminal-dot dot-green" />
              <span className="ml-2 text-xs text-[#8b949e]">📦 /all_techs</span>
            </div>
            <div className="p-5">
              <div className="text-xs text-[#484f58] mb-4">// npm list --global</div>
              <div className="flex flex-wrap gap-2">
                {[
                  'React','Next.js','Vue.js','TypeScript','JavaScript',
                  'Python','Flask','NestJS','Node.js','Flutter','Dart',
                  'PostgreSQL','MongoDB','Redis','Docker','Git','REST',
                  'GraphQL','Tailwind','Firebase','Vercel','Linux',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-0.5 border border-[#30363d] text-[#8b949e] rounded hover:border-[#3fb950] hover:text-[#3fb950] transition-all duration-200 cursor-default font-sans"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
