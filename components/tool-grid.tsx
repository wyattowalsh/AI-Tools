'use client'

import { motion } from 'framer-motion'
import { Tool } from '@/types/tools'
import { ToolCard } from './tool-card'
import { cn } from '@/lib/utils'

interface ToolGridProps {
  tools: Tool[]
}

const containerVariants = {
  hidden: { 
    opacity: 0,
    transition: {
      when: "afterChildren"
    }
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      ease: [0.25, 0.1, 0.25, 1],
      duration: 0.5
    }
  }
}

const gridVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.9,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      ease: [0.25, 0.1, 0.25, 1],
      duration: 0.5
    }
  }
}

export function ToolGrid({ tools }: ToolGridProps) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "relative w-full max-w-8xl mx-auto",
        "px-4 sm:px-6 lg:px-8",
        "py-8 sm:py-12 lg:py-16"
      )}
      role="region"
      aria-label="AI Tools Grid"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50/50 to-white dark:from-zinc-900/50 dark:to-zinc-900" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-zinc-900/[0.02] dark:bg-grid-zinc-100/[0.02] bg-[size:32px_32px]" aria-hidden="true" />
      
      <div className="relative">
        {/* Grid layout */}
        <motion.div
          variants={gridVariants}
          className={cn(
            "grid gap-6 md:gap-8",
            "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
            "auto-rows-fr"
          )}
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <div className="relative w-full">
                {/* Decorative elements */}
                <div 
                  className={cn(
                    "absolute -inset-x-4 -inset-y-4 z-0",
                    "bg-gradient-to-r from-primary/5 to-transparent",
                    "opacity-0 group-hover:opacity-100",
                    "transition-all duration-500 rounded-2xl"
                  )}
                  aria-hidden="true"
                />
                
                <div 
                  className={cn(
                    "absolute inset-0",
                    "bg-white dark:bg-zinc-900",
                    "rounded-xl shadow-xl shadow-zinc-900/5",
                    "ring-1 ring-zinc-900/5 dark:ring-white/10"
                  )}
                  aria-hidden="true"
                />
                
                {/* Card content */}
                <div className="relative">
                  <ToolCard tool={tool} index={index} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
} 