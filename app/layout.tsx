import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Bhumitr Foundation Trust | Serving Humanity in Jammu',
  description: 'Serving Humanity | Empowering Youth | Supporting Communities in Jammu. Join us in making a difference through food drives, clothing donations, education support, and community outreach.',
  keywords: 'NGO Jammu, charity, food donation, clothing drive, education support, volunteer, donate',
  openGraph: {
    title: 'Bhumitr Foundation Trust | Serving Humanity in Jammu',
    description: 'Serving Humanity | Empowering Youth | Supporting Communities in Jammu',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://bhumitrfoundation.org',
    siteName: 'Bhumitr Foundation Trust',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bhumitr Foundation Trust',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhumitr Foundation Trust',
    description: 'Serving Humanity | Empowering Youth | Supporting Communities in Jammu',
    images: ['/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

