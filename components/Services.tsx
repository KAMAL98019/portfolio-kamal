'use client'
import { motion } from 'framer-motion'

const services = [
  {
    cmd: 'web_dev()',
    title: 'Full Stack Web Development',
    desc: 'End-to-end web apps — from pixel-perfect UI to scalable backend APIs. Next.js, React, Vue.js on the front; Node.js, NestJS, Python on the back.',
    deliverables: ['Responsive SPA / SSR apps', 'REST/GraphQL APIs', 'Database design', 'Auth & payments'],
    price: 'From ₹15,000 / project',
    color: '#58a6ff',
    icon: '🖥️',
  },
  {
    cmd: 'mobile_dev()',
    title: 'Mobile App Development',
    desc: 'Cross-platform mobile applications using Flutter. Single codebase for Android & iOS. Integrated with Firebase or custom backends.',
    deliverables: ['Flutter Android & iOS', 'Firebase integration', 'REST API integration', 'App store support'],
    price: 'From ₹20,000 / project',
    color: '#f0883e',
    icon: '📱',
  },
  {
    cmd: 'backend_api()',
    title: 'Backend & API Services',
    desc: 'Production-grade backend systems. NestJS microservices, Flask REST APIs, database schema design, and deployment on cloud infrastructure.',
    deliverables: ['NestJS / Flask APIs', 'Database schema', 'Authentication (JWT/OAuth)', 'Docker deployment'],
    price: 'From ₹10,000 / project',
    color: '#3fb950',
    icon: '⚙️',
  },
  {
    cmd: 'ai_integration()',
    title: 'AI Integration & Chatbots',
    desc: 'Embed AI into your products — Claude, OpenAI, Gemini API integration, custom chatbots, content generation, and AI-powered features.',
    deliverables: ['LLM API integration', 'Custom chatbot UI', 'Prompt engineering', 'Streaming responses'],
    price: 'From ₹12,000 / project',
    color: '#bc8cff',
    icon: '🤖',
  },
  {
    cmd: 'seo_optimize()',
    title: 'SEO & Performance',
    desc: 'Technical SEO, Core Web Vitals optimization, structured data markup, and site speed improvements for better search ranking.',
    deliverables: ['On-page SEO audit', 'Meta & schema markup', 'Lighthouse 90+ score', 'Sitemap & robots.txt'],
    price: 'From ₹5,000 / project',
    color: '#39d353',
    icon: '🔍',
  },
  {
    cmd: 'consult()',
    title: 'Code Review & Consulting',
    desc: 'Architecture review, code audit, tech stack guidance, and mentoring. Ideal for teams who want a second opinion or direction.',
    deliverables: ['Architecture review', 'Code quality audit', 'Tech stack advice', 'Hour-based consultation'],
    price: '₹1,500 / hour',
    color: '#f85149',
    icon: '💡',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#3fb950] text-sm">$</span>
            <span className="text-[#8b949e] text-sm">./services --list</span>
          </div>
          <h2 className="text-3xl font-bold text-[#e6edf3]">
            What I <span className="text-[#f0883e]">Build</span>
          </h2>
          <div className="w-24 h-px bg-[#f0883e] mt-3 opacity-50" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={svc.cmd}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="terminal-window group transition-all duration-300"
              style={{ borderColor: `${svc.color}25` }}
            >
              <div className="terminal-titlebar">
                <div className="terminal-dot dot-red" />
                <div className="terminal-dot dot-yellow" />
                <div className="terminal-dot dot-green" />
                <span className="ml-2 text-xs" style={{ color: svc.color }}>
                  {svc.icon} {svc.cmd}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-sm text-[#e6edf3] mb-2">{svc.title}</h3>
                <p className="text-xs text-[#8b949e] leading-relaxed mb-4 font-sans">{svc.desc}</p>

                <div className="space-y-1 mb-4">
                  {svc.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs font-sans">
                      <span style={{ color: svc.color }}>✓</span>
                      <span className="text-[#8b949e]">{d}</span>
                    </div>
                  ))}
                </div>

                <div
                  className="text-xs font-bold pt-3 border-t border-[#21262d]"
                  style={{ color: svc.color }}
                >
                  {svc.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
