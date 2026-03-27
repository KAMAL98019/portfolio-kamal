import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kamalesh B | Full Stack Developer – React, Next.js, Flutter, Python',
  description:
    'Kamalesh B is a B.Tech AI & DS graduate and freelance full-stack developer with 2+ years experience building web and mobile apps using React, Next.js, Vue.js, Flutter, NestJS, Flask, and Node.js. Available for freelance projects.',
  keywords: [
    'Kamalesh B',
    'Full Stack Developer',
    'Freelance Developer India',
    'React Developer',
    'Next.js Developer',
    'Flutter Developer',
    'Python Backend Developer',
    'NestJS Developer',
    'Vue.js Developer',
    'Hire Freelance Developer',
    'Web Development India',
    'AI DS Developer',
  ],
  authors: [{ name: 'Kamalesh B' }],
  creator: 'Kamalesh B',
  openGraph: {
    title: 'Kamalesh B | Full Stack Developer',
    description:
      'Freelance Full Stack Developer specializing in React, Next.js, Flutter & Python. B.Tech AI & DS Graduate with 2+ years experience.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://kamaleshb.dev',
    siteName: 'Kamalesh B Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kamalesh B | Full Stack Developer',
    description: 'Freelance Full Stack Developer – React, Next.js, Flutter, Python, NestJS',
    creator: '@kamaleshb',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://kamaleshb.dev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Kamalesh B',
              jobTitle: 'Full Stack Developer',
              description:
                'Freelance Full Stack Developer with 2+ years experience in React, Next.js, Vue.js, Flutter, Python, NestJS, Flask, Node.js',
              url: 'https://kamaleshb.dev',
              sameAs: [
                'https://github.com/kamaleshb',
                'https://linkedin.com/in/kamaleshb',
              ],
              knowsAbout: [
                'React.js',
                'Next.js',
                'Vue.js',
                'Flutter',
                'Python',
                'NestJS',
                'Flask',
                'Node.js',
                'Full Stack Development',
                'Mobile Application Development',
              ],
            }),
          }}
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] font-mono antialiased">{children}</body>
    </html>
  )
}
