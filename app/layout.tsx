import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kamalesh B | Full Stack Developer',
  description: 'Freelance Full Stack Developer...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0d1117] font-mono text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}