import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@/components/analytics'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { SiteNav } from '@/components/site-nav'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
})

const mono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-mono',
  display: 'swap',
  preload: true,
  fallback: ['Consolas', 'Monaco', 'Courier New', 'monospace'],
})

const calSans = localFont({
  src: '../public/fonts/CalSans-SemiBold.woff2',
  variable: '--font-cal-sans',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F1F8E9' },
    { media: '(prefers-color-scheme: dark)', color: '#2D5A27' }
  ],
  colorScheme: 'light dark'
}

export const metadata: Metadata = {
  title: {
    default: 'AI Tools Guide',
    template: '%s | AI Tools Guide'
  },
  description: 'A comprehensive guide to modern AI tools, featuring detailed comparisons, usage tutorials, and best practices for artificial intelligence applications.',
  applicationName: 'AI Tools Guide',
  authors: [
    {
      name: 'AI Tools Guide Team',
      url: 'https://ai-tools-guide.com',
    },
  ],
  generator: 'Next.js',
  keywords: [
    'AI Tools',
    'Artificial Intelligence',
    'Machine Learning',
    'ChatGPT',
    'Gemini',
    'Perplexity',
    'NotebookLM Plus',
    'AI Guide',
    'AI Tutorial',
    'AI Learning',
    'AI Best Practices',
    'AI Comparison'
  ],
  creator: 'AI Tools Guide Team',
  publisher: 'AI Tools Guide',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ai-tools-guide.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ai-tools-guide.com',
    title: 'AI Tools Guide',
    description: 'Your comprehensive guide to modern AI tools and how to use them effectively',
    siteName: 'AI Tools Guide',
    images: [{
      url: '/ai_tools_guide_icon.svg',
      width: 240,
      height: 240,
      alt: 'AI Tools Guide Logo'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools Guide',
    description: 'Your comprehensive guide to modern AI tools and how to use them effectively',
    creator: '@AIToolsGuide',
    images: ['/ai_tools_guide_icon.svg'],
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon/safari-pinned-tab.svg',
        color: '#9FE88D'
      }
    ]
  },
  manifest: '/favicon/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'AI Tools Guide',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={`${inter.variable} ${mono.variable} ${calSans.variable}`}
    >
      <body 
        className={`${inter.className} min-h-screen flex flex-col antialiased`} 
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="ai-tools-theme"
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteNav />
            <div className="flex-1">{children}</div>
          </div>
          <TailwindIndicator />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
