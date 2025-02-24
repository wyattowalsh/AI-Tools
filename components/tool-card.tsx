'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, ChevronRight, Check, ArrowUpRight } from 'lucide-react'
import { Tool } from '@/types/tools'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ToolCardProps {
  tool: Tool
  index: number
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.1
    }
  },
  hover: {
    y: -4,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3
    }
  }
}

export function ToolCard({ tool, index }: ToolCardProps) {
  const Icon = tool.icon

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900",
        "border border-zinc-200 dark:border-zinc-800",
        "transition-all duration-300",
        "hover:border-primary/20 dark:hover:border-primary/20",
        "hover:shadow-lg dark:hover:shadow-primary/5"
      )}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-6 sm:p-8">
        {/* Header */}
        <motion.div 
          variants={contentVariants}
          className="flex items-start justify-between mb-8"
        >
          <Link 
            href={tool.homepage}
            className="flex items-start space-x-4 group/link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div 
              className={cn(
                "relative h-16 w-16 rounded-xl p-3 shadow-sm transition-all duration-300",
                "bg-gradient-to-br from-primary to-primary-accent",
                "group-hover/link:shadow-md group-hover/link:scale-105"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-white w-full h-full">
                <Icon />
              </div>
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10" />
            </motion.div>
            
            <div>
              <h3 className={cn(
                "text-2xl font-semibold tracking-tight",
                "text-zinc-900 dark:text-zinc-50",
                "group-hover/link:text-primary dark:group-hover/link:text-primary",
                "transition-colors duration-300"
              )}>
                {tool.name}
              </h3>
              <div className={cn(
                "flex items-center mt-2 text-sm font-medium",
                "text-primary-dark dark:text-primary",
                "opacity-0 translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0",
                "transition-all duration-300"
              )}>
                <span>View Details</span>
                <ArrowUpRight className="h-4 w-4 ml-1.5" />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Features */}
        <motion.div variants={contentVariants} className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3 tracking-wide uppercase">
              Key Features
            </h4>
            <ul className="space-y-2.5">
              {tool.useCases.slice(0, 3).map((useCase, idx) => (
                <motion.li
                  key={idx}
                  variants={contentVariants}
                  className="flex items-center text-base text-zinc-700 dark:text-zinc-300"
                >
                  <Check className="h-5 w-5 text-primary-accent dark:text-primary mr-3 flex-shrink-0" />
                  <span className="group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors duration-300">
                    {useCase}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3 tracking-wide uppercase">
              Quick Links
            </h4>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className={cn(
                  "group/button",
                  "bg-primary-light dark:bg-zinc-800",
                  "text-primary-dark dark:text-primary",
                  "hover:bg-primary-light/80 dark:hover:bg-zinc-700/80",
                  "transition-all duration-300"
                )}
                asChild
              >
                <Link href={tool.docs} target="_blank" rel="noopener noreferrer">
                  Documentation
                  <ChevronRight className="h-4 w-4 ml-1.5 transition-transform duration-300 group-hover/button:translate-x-0.5" />
                </Link>
              </Button>
              
              {tool.appLink && (
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    "group/button",
                    "bg-primary-light dark:bg-zinc-800",
                    "text-primary-dark dark:text-primary",
                    "hover:bg-primary-light/80 dark:hover:bg-zinc-700/80",
                    "transition-all duration-300"
                  )}
                  asChild
                >
                  <Link href={tool.appLink} target="_blank" rel="noopener noreferrer">
                    Download App
                    <ChevronRight className="h-4 w-4 ml-1.5 transition-transform duration-300 group-hover/button:translate-x-0.5" />
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Notes */}
          {tool.notes && tool.notes.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3 tracking-wide uppercase">
                Notes
              </h4>
              <ul className="space-y-2">
                {tool.notes.slice(0, 2).map((note, idx) => (
                  <motion.li
                    key={idx}
                    variants={contentVariants}
                    className={cn(
                      "text-base flex items-start",
                      "text-zinc-600 dark:text-zinc-400",
                      "group-hover:text-zinc-900 dark:group-hover:text-zinc-300",
                      "transition-colors duration-300"
                    )}
                  >
                    <span className="mr-2 text-primary-accent dark:text-primary">•</span>
                    {note}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <div className={cn(
        "relative px-6 sm:px-8 py-4",
        "bg-gradient-to-r from-primary-light to-white dark:from-zinc-800 dark:to-zinc-800/50",
        "border-t border-zinc-100 dark:border-zinc-700"
      )}>
        <div className="flex items-center justify-between">
          <span className="text-sm text-primary-dark dark:text-primary font-medium">
            {tool.examples.length} Example Uses
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "text-sm font-medium flex items-center",
              "text-primary-dark dark:text-primary",
              "hover:text-primary-accent dark:hover:text-primary-light",
              "transition-colors duration-300"
            )}
          >
            Learn More
            <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-0.5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
} 