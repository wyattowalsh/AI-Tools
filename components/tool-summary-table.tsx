'use client'

import { motion } from 'framer-motion'
import { Tool } from '@/types/tools'
import { cn } from '@/lib/utils'
import { ExternalLink } from 'lucide-react'

interface ToolSummaryTableProps {
  tools: Tool[]
}

// Helper function to clean bullet points from text
const cleanBulletPoints = (text: string) => {
  return text.replace(/^[•·\-\u2022\u2023\u2043\u2219]+\s*/, '').trim()
}

const tableVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.1
    }
  }
}

const rowVariants = {
  hidden: { 
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
  hover: {
    backgroundColor: "rgba(241, 248, 233, 0.5)",
    transition: {
      duration: 0.2
    }
  }
}

export function ToolSummaryTable({ tools }: ToolSummaryTableProps) {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-xl",
        "border border-zinc-200 dark:border-zinc-800",
        "bg-white dark:bg-zinc-900",
        "shadow-sm"
      )}
      role="region"
      aria-label="AI Tools Summary"
    >
      {/* Background decorative elements */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-zinc-50/50 to-white dark:from-zinc-900/50 dark:to-zinc-900" 
        aria-hidden="true"
      />
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={tableVariants}
        className="relative overflow-x-auto"
      >
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className={cn(
              "border-b border-zinc-200 dark:border-zinc-800",
              "bg-[#F1F8E9] dark:bg-zinc-800/50"
            )}>
              <th 
                scope="col"
                className={cn(
                  "py-4 px-6 text-sm font-semibold",
                  "text-[#2D5A27] dark:text-[#9FE88D]",
                  "tracking-wide"
                )}
              >
                Tool
              </th>
              <th 
                scope="col"
                className={cn(
                  "py-4 px-6 text-sm font-semibold",
                  "text-[#2D5A27] dark:text-[#9FE88D]",
                  "tracking-wide"
                )}
              >
                Website
              </th>
              <th 
                scope="col"
                className={cn(
                  "py-4 px-6 text-sm font-semibold",
                  "text-[#2D5A27] dark:text-[#9FE88D]",
                  "tracking-wide"
                )}
              >
                Docs
              </th>
              <th 
                scope="col"
                className={cn(
                  "py-4 px-6 text-sm font-semibold",
                  "text-[#2D5A27] dark:text-[#9FE88D]",
                  "tracking-wide"
                )}
              >
                Examples of Use
              </th>
              <th 
                scope="col"
                className={cn(
                  "py-4 px-6 text-sm font-semibold",
                  "text-[#2D5A27] dark:text-[#9FE88D]",
                  "tracking-wide"
                )}
              >
                Notes
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {tools.map((tool, index) => (
              <motion.tr
                key={tool.name}
                variants={rowVariants}
                whileHover="hover"
                className={cn(
                  "group transition-colors duration-200",
                  "hover:bg-[#F1F8E9]/50 dark:hover:bg-zinc-800/50"
                )}
              >
                <td className="py-4 px-6">
                  <a 
                    href={tool.name === "NotebookLM Plus" ? tool.homepage : tool.appLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex flex-col items-center text-center gap-3",
                      "group/link"
                    )}
                    title={tool.name === "NotebookLM Plus" ? "Open in browser" : "Open in App Store (will open in app if installed)"}
                  >
                    <div className={cn(
                      "h-12 w-12 rounded-xl p-0.5",
                      "bg-gradient-to-br from-[#9FE88D] to-[#7CB342]",
                      "group-hover/link:shadow-md transition-shadow duration-200"
                    )}>
                      <div className="h-full w-full flex items-center justify-center text-white scale-[1.8]">
                        <tool.icon />
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className={cn(
                        "font-medium text-lg text-zinc-900 dark:text-zinc-100",
                        "group-hover/link:text-[#2D5A27] dark:group-hover/link:text-[#9FE88D]",
                        "transition-colors duration-200"
                      )}>
                        {tool.name}
                      </span>
                      {tool.name !== "NotebookLM Plus" && (
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                          iOS App
                        </span>
                      )}
                    </div>
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                </td>
                <td className="py-4 px-6">
                  <a 
                    href={tool.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center gap-2",
                      "text-[#2D5A27] dark:text-[#9FE88D]",
                      "hover:text-[#7CB342] dark:hover:text-[#F1F8E9]",
                      "transition-colors duration-200",
                      "group/link"
                    )}
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                </td>
                <td className="py-4 px-6">
                  <a 
                    href={tool.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center gap-2",
                      "text-[#2D5A27] dark:text-[#9FE88D]",
                      "hover:text-[#7CB342] dark:hover:text-[#F1F8E9]",
                      "transition-colors duration-200",
                      "group/link"
                    )}
                  >
                    <span>Docs 🔗</span>
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                </td>
                <td className="py-4 px-6">
                  <ul className="space-y-1.5">
                    {tool.examples.map((example, idx) => (
                      <li 
                        key={idx} 
                        className={cn(
                          "text-zinc-600 dark:text-zinc-400",
                          "group-hover:text-zinc-900 dark:group-hover:text-zinc-300",
                          "transition-colors duration-200"
                        )}
                      >
                        {cleanBulletPoints(example)}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="py-4 px-6">
                  <ul className="space-y-1.5">
                    {tool.notes?.map((note, idx) => (
                      <li 
                        key={idx} 
                        className={cn(
                          "text-zinc-600 dark:text-zinc-400",
                          "group-hover:text-zinc-900 dark:group-hover:text-zinc-300",
                          "transition-colors duration-200"
                        )}
                      >
                        {cleanBulletPoints(note)}
                      </li>
                    ))}
                  </ul>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  )
} 