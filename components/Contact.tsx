'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const contactInfo = [
  { label: 'email', value: 'kamaleshb.dev@gmail.com', href: 'mailto:kamaleshb.dev@gmail.com', color: '#58a6ff' },
  { label: 'github', value: 'github.com/kamaleshb', href: 'https://github.com/kamaleshb', color: '#3fb950' },
  { label: 'linkedin', value: 'linkedin.com/in/kamaleshb', href: 'https://linkedin.com/in/kamaleshb', color: '#58a6ff' },
  { label: 'location', value: 'India (Remote-first)', href: null, color: '#f0883e' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    await new Promise((r) => setTimeout(r, 1500))
    setSent(true)
    setSending(false)
  }

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#3fb950] text-sm">$</span>
            <span className="text-[#8b949e] text-sm">./send_message --to kamalesh</span>
          </div>
          <h2 className="text-3xl font-bold text-[#e6edf3]">
            Get In <span className="text-[#3fb950]">Touch</span>
          </h2>
          <div className="w-24 h-px bg-[#3fb950] mt-3 opacity-50" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="terminal-window mb-6">
              <div className="terminal-titlebar">
                <div className="terminal-dot dot-red" />
                <div className="terminal-dot dot-yellow" />
                <div className="terminal-dot dot-green" />
                <span className="ml-2 text-xs text-[#8b949e]">contact.json</span>
              </div>
              <div className="p-5 space-y-3">
                <div className="text-[#3fb950] text-xs mb-2">{'{'}</div>
                {contactInfo.map((c) => (
                  <div key={c.label} className="pl-4 flex items-start gap-2 text-xs">
                    <span className="text-[#bc8cff] shrink-0">"{c.label}":</span>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                        style={{ color: c.color }}
                      >
                        "{c.value}"
                      </a>
                    ) : (
                      <span style={{ color: c.color }}>"{c.value}"</span>
                    )}
                  </div>
                ))}
                <div className="text-[#3fb950] text-xs">{'}'}</div>
              </div>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="text-xs text-[#484f58] mb-3">// availability</div>
              <div className="space-y-2">
                {[
                  { k: 'Response time', v: '< 24 hours' },
                  { k: 'Availability', v: 'Full-time freelance' },
                  { k: 'Timezone', v: 'IST (UTC+5:30)' },
                  { k: 'Remote', v: 'Yes, worldwide' },
                  { k: 'Min project', v: '₹5,000 / $60' },
                ].map((row) => (
                  <div key={row.k} className="flex justify-between text-xs font-sans">
                    <span className="text-[#8b949e]">{row.k}</span>
                    <span className="text-[#3fb950]">{row.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="terminal-window">
              <div className="terminal-titlebar">
                <div className="terminal-dot dot-red" />
                <div className="terminal-dot dot-yellow" />
                <div className="terminal-dot dot-green" />
                <span className="ml-2 text-xs text-[#8b949e]">new_message.sh</span>
              </div>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center"
                >
                  <div className="text-4xl mb-4">✅</div>
                  <div className="text-[#3fb950] font-bold mb-2">Message sent!</div>
                  <div className="text-xs text-[#8b949e] font-sans">
                    I'll reply within 24 hours. Talk soon!
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  {[
                    { name: 'name', label: 'your_name', type: 'text', placeholder: 'John Doe' },
                    { name: 'email', label: 'your_email', type: 'email', placeholder: 'john@company.com' },
                    { name: 'project', label: 'project_type', type: 'text', placeholder: 'e.g. E-commerce Web App' },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs text-[#8b949e] mb-1">
                        <span className="text-[#3fb950]">$</span> {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.name as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                        required
                        className="w-full bg-[#21262d] border border-[#30363d] rounded px-3 py-2 text-sm text-[#e6edf3] placeholder-[#484f58] focus:outline-none focus:border-[#3fb950] transition-colors font-sans"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-xs text-[#8b949e] mb-1">
                      <span className="text-[#3fb950]">$</span> message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      className="w-full bg-[#21262d] border border-[#30363d] rounded px-3 py-2 text-sm text-[#e6edf3] placeholder-[#484f58] focus:outline-none focus:border-[#3fb950] transition-colors resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-2.5 bg-[#3fb950] text-[#0d1117] text-sm font-bold rounded hover:bg-[#56d364] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? '> sending...' : '> ./send_message.sh'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
