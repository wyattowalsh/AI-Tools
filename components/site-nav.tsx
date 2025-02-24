'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ModeToggle } from './mode-toggle'
import { Book, Sparkles, MessageSquare } from 'lucide-react'

const navItems = [
  {
    name: 'Tools',
    href: '/',
    icon: Book
  },
  {
    name: 'Guide',
    href: '/guide',
    icon: Sparkles
  },
  {
    name: 'Prompts',
    href: '/prompts',
    icon: MessageSquare
  }
]

export function SiteNav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-cal-sans text-xl font-bold">AI Tools Guide</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-2 text-muted-foreground transition-colors hover:text-foreground",
                    pathname === item.href && "text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                  {pathname === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-foreground"
                      layoutId="navbar-active"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Add search or other utilities here */}
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
} 