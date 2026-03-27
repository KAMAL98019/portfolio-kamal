'use client'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 'proj_001',
    name: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with Next.js storefront, NestJS API, PostgreSQL, Stripe payments, and admin dashboard.',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Stripe', 'Tailwind'],
    type: 'Web App',
    status: 'production',
    color: '#58a6ff',
    link: '#',
    github: '#',
    year: '2024',
  },
  {
    id: 'proj_002',
    name: 'Politics News App',
    description:
      'Cross-platform Flutter mobile app for political news aggregation with real-time updates, categories, and bookmarking.',
    stack: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    type: 'Mobile App',
    status: 'production',
    color: '#f0883e',
    link: '#',
    github: '#',
    year: '2024',
  },
  {
    id: 'proj_003',
    name: 'SaaS Dashboard',
    description:
      'Analytics dashboard built with React and Vue.js, featuring real-time charts, user management, and role-based access.',
    stack: ['React', 'Vue.js', 'Python', 'Flask', 'MongoDB'],
    type: 'SaaS',
    status: 'production',
    color: '#3fb950',
    link: '#',
    github: '#',
    year: '2023',
  },
  {
    id: 'proj_004',
    name: 'REST API Service',
    description:
      'Scalable REST API backend with Node.js/NestJS, JWT auth, rate limiting, caching with Redis, and full test coverage.',
    stack: ['NestJS', 'Node.js', 'Redis', 'PostgreSQL', 'Docker'],
    type: 'Backend',
    status: 'production',
    color: '#bc8cff',
    link: '#',
    github: '#',
    year: '2023',
  },
  {
    id: 'proj_005',
    name: 'AI-Powered Chatbot',
    description:
      'Intelligent chatbot integration using Claude & OpenAI APIs, with context memory, streaming responses, and custom UI.',
    stack: ['Next.js', 'Claude API', 'OpenAI', 'TypeScript'],
    type: 'AI App',
    status: 'active',
    color: '#f85149',
    link: '#',
    github: '#',
    year: '2024',
  },
  {
    id: 'proj_006',
    name: 'Portfolio CMS',
    description:
      'Headless CMS with Vue.js admin panel, Flask backend, image uploads, markdown support, and SEO management.',
    stack: ['Vue.js', 'Flask', 'Python', 'SQLite', 'Cloudinary'],
    type: 'CMS',
    status: 'production',
    color: '#39d353',
    link: '#',
    github: '#',
    year: '2023',
  },
]

const statusColors: Record<string, string> = {
  production: '#3fb950',
  active: '#58a6ff',
  archived: '#8b949e',
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#3fb950] text-sm">$</span>
            <span className="text-[#8b949e] text-sm">git log --oneline --all</span>
          </div>
          <h2 className="text-3xl font-bold text-[#e6edf3]">
            Featured <span className="text-[#3fb950]">Projects</span>
          </h2>
          <div className="w-24 h-px bg-[#3fb950] mt-3 opacity-50" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="terminal-window group cursor-pointer transition-all duration-300"
              style={{ borderColor: `${proj.color}20` }}
            >
              <div className="terminal-titlebar group-hover:bg-[#1c2128] transition-colors">
                <div className="terminal-dot dot-red" />
                <div className="terminal-dot dot-yellow" />
                <div className="terminal-dot dot-green" />
                <span className="ml-auto text-xs text-[#484f58]">{proj.year}</span>
              </div>

              <div className="p-5">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-xs text-[#484f58] mb-1">{proj.id}</div>
                    <h3
                      className="font-bold text-sm text-[#e6edf3] group-hover:transition-colors"
                      style={{ color: 'inherit' }}
                    >
                      <span
                        className="group-hover:text-current transition-colors"
                        style={{ '--hover-color': proj.color } as React.CSSProperties}
                      >
                        {proj.name}
                      </span>
                    </h3>
                  </div>
                  <span
                    className="text-xs px-2 py-0.5 rounded border shrink-0"
                    style={{ color: proj.color, borderColor: `${proj.color}40` }}
                  >
                    {proj.type}
                  </span>
                </div>

                <p className="text-xs text-[#8b949e] leading-relaxed mb-4 font-sans">
                  {proj.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {proj.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-1.5 py-0.5 bg-[#21262d] text-[#8b949e] rounded font-sans"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-[#21262d] pt-3">
                  <div className="flex items-center gap-1.5 text-xs">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: statusColors[proj.status] }}
                    />
                    <span className="text-[#484f58]">{proj.status}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <a
                      href={proj.github}
                      className="text-[#484f58] hover:text-[#e6edf3] transition-colors"
                    >
                      github
                    </a>
                    <a
                      href={proj.link}
                      className="hover:opacity-80 transition-opacity"
                      style={{ color: proj.color }}
                    >
                      live →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/kamaleshb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#8b949e] border border-[#30363d] px-6 py-2.5 rounded hover:border-[#58a6ff] hover:text-[#58a6ff] transition-all duration-200"
          >
            <span>View all repositories on GitHub</span>
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
