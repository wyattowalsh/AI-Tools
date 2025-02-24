'use client'

import { motion } from 'framer-motion'
import { ModeToggle } from './mode-toggle'

interface PageHeaderProps {
  title: string
  description: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative isolate overflow-hidden bg-gradient-to-b from-primary-light via-white to-white dark:from-primary-dark dark:via-zinc-900 dark:to-zinc-900"
      role="banner"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/20 to-transparent dark:from-primary/10" aria-hidden="true" />
      <div className="absolute -top-20 left-0 right-0 h-40 bg-gradient-radial from-primary/5 to-transparent" aria-hidden="true" />
      <div className="absolute top-0 right-0 -z-10 h-full w-full" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(159,232,141,0.12),transparent_50%)]" />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary-dark dark:text-primary bg-clip-text">
              {title}
            </h1>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.header>
  )
} 