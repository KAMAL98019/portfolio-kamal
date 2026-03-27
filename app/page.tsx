import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import AITools from '@/components/AITools'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative z-10">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <AITools />
      <Contact />
      <Footer />
    </main>
  )
}
