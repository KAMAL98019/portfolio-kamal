# Kamalesh B — Portfolio Website

A professional Linux terminal-inspired portfolio built with **Next.js 14**, **Framer Motion**, **TypeScript**, and **Tailwind CSS**. Designed to rank on Google and convert visitors to freelance clients.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build
npm start
```

---

## 📁 Project Structure

```
kamalesh-portfolio/
├── app/
│   ├── layout.tsx        ← SEO metadata, JSON-LD schema, fonts
│   ├── page.tsx          ← Main page (assembles all sections)
│   ├── globals.css       ← Linux terminal design system + CSS vars
│   ├── sitemap.ts        ← Auto-generated XML sitemap
│   └── robots.ts         ← robots.txt for crawlers
│
├── components/
│   ├── Navbar.tsx        ← Fixed nav with mobile menu
│   ├── Hero.tsx          ← Typing animation + terminal window
│   ├── About.tsx         ← Bio, stats, terminal file viewer
│   ├── Skills.tsx        ← Animated skill bars by category
│   ├── Projects.tsx      ← Project cards with stack badges
│   ├── Services.tsx      ← Service offerings with pricing
│   ├── AITools.tsx       ← Claude, ChatGPT, Gemini, Copilot
│   ├── Contact.tsx       ← Contact form + JSON info panel
│   └── Footer.tsx        ← Footer with links
│
├── public/
│   └── resume.pdf        ← Add your resume here
│
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

**Theme:** Linux terminal / GitHub dark
**Colors:**
- Background: `#0d1117` (GitHub dark)
- Green accent: `#3fb950` (terminal green)  
- Blue accent: `#58a6ff`
- Orange accent: `#f0883e`
- Purple accent: `#bc8cff`

**Fonts:**
- Mono: JetBrains Mono (code, headings)
- Sans: IBM Plex Sans (body, descriptions)

---

## 🔧 Customization Checklist

### 1. Personal Info
- [ ] `app/layout.tsx` — Update title, description, keywords, OG tags, JSON-LD
- [ ] `components/Hero.tsx` — Update name, title list, terminal commands
- [ ] `components/About.tsx` — Update bio text, stats, principles
- [ ] `components/Contact.tsx` — Update email, GitHub, LinkedIn URLs

### 2. Projects
- [ ] `components/Projects.tsx` — Replace with your real projects, GitHub/live links

### 3. Services & Pricing
- [ ] `components/Services.tsx` — Adjust pricing (₹ to $ for international, etc.)

### 4. SEO
- [ ] `app/layout.tsx` — Replace `https://kamaleshb.dev` with your real domain
- [ ] `app/sitemap.ts` — Replace domain URL
- [ ] `app/robots.ts` — Replace domain URL
- [ ] Add `public/favicon.ico`
- [ ] Add `public/og-image.png` (1200×630px) for social sharing

### 5. Resume
- [ ] Add your PDF resume at `public/resume.pdf`

---

## 📈 SEO Features Built-In

| Feature | Implementation |
|---|---|
| Meta title & description | `app/layout.tsx` |
| Open Graph tags | `app/layout.tsx` |
| Twitter card | `app/layout.tsx` |
| JSON-LD Schema (Person) | `app/layout.tsx` |
| XML Sitemap | `app/sitemap.ts` |
| robots.txt | `app/robots.ts` |
| Semantic HTML | All components |
| Canonical URL | `app/layout.tsx` |
| Keyword targeting | Meta keywords + content |

---

## 🌐 Deployment

### Vercel (Recommended — Free)
```bash
npm install -g vercel
vercel
# Follow prompts — connects to GitHub automatically
```

### Netlify
```bash
npm run build
# Drag & drop the .next folder to Netlify
```

---

## 🔍 Post-Deploy SEO Checklist

1. **Google Search Console** — Submit sitemap: `https://yourdomain.com/sitemap.xml`
2. **Google Analytics** — Add GA4 tracking ID in `layout.tsx`
3. **PageSpeed Insights** — Target Lighthouse 90+ score
4. **Backlinks** — List on:
   - [Contra](https://contra.com)
   - [Toptal](https://toptal.com)
   - [Upwork](https://upwork.com)
   - [LinkedIn](https://linkedin.com) (link back to portfolio)
   - [GitHub profile](https://github.com) README

---

## 💡 UI Stitch Prompt (for v0 / Figma / Lovable)

> Design a professional freelance developer portfolio website with a **Linux terminal aesthetic** inspired by GitHub's dark theme. Use a dark background `#0d1117`, terminal-green accents `#3fb950`, blue `#58a6ff`, and orange `#f0883e`. All UI elements should look like terminal windows with macOS-style red/yellow/green window buttons. Typography should use JetBrains Mono for headings/code and IBM Plex Sans for body text. Sections include: sticky nav with command-style links, hero with typewriter job title and a terminal window showing shell commands, about section with a markdown-styled file viewer, skill bars organized in terminal windows by category (frontend/backend/mobile/ai), project cards styled as git commits with stack badges and status dots, services section with pricing as function calls, AI tools section (Claude, ChatGPT, Gemini, Copilot) with proficiency bars, and a contact section with a JSON info panel and form styled as a shell script. Add scanline texture overlay, dot-grid background, and smooth Framer Motion fade-up animations on scroll. The overall feel should be professional, technical, trust-building — like a senior developer's personal OS.

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `next@14` | Framework, SSR, routing |
| `react@18` | UI library |
| `framer-motion` | Animations |
| `lucide-react` | Icons |
| `tailwindcss` | Utility CSS |
| `typescript` | Type safety |

---

Built by Kamalesh B 🚀
