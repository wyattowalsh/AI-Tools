"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const iconVariants = {
  initial: { scale: 0, rotate: -180 },
  animate: { scale: 1, rotate: 0 },
  exit: { scale: 0, rotate: 180 }
}

const menuVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -10 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 10 }
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)

  // Handle keyboard shortcuts
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'j') {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }
    }
    
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [theme, setTheme])

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative w-10 h-10 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait">
            {theme !== "dark" ? (
              <motion.div
                key="sun"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute"
              >
                <Sun className="h-[1.4rem] w-[1.4rem] text-amber-500 rotate-0 scale-100 transition-all" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute"
              >
                <Moon className="absolute h-[1.4rem] w-[1.4rem] text-slate-300 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </DropdownMenuTrigger>
      <AnimatePresence>
        {isOpen && (
          <DropdownMenuContent
            align="end"
            asChild
          >
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="min-w-[140px] rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg"
            >
              <DropdownMenuItem
                onClick={() => {
                  setTheme("light")
                  setIsOpen(false)
                }}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Sun className="h-4 w-4" />
                <span>Light</span>
                {theme === 'light' && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto text-primary-accent dark:text-primary"
                  >
                    ✓
                  </motion.span>
                )}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setTheme("dark")
                  setIsOpen(false)
                }}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Moon className="h-4 w-4" />
                <span>Dark</span>
                {theme === 'dark' && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto text-primary-accent dark:text-primary"
                  >
                    ✓
                  </motion.span>
                )}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setTheme("system")
                  setIsOpen(false)
                }}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span className="h-4 w-4 flex items-center justify-center">⚙️</span>
                <span>System</span>
                {theme === 'system' && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto text-primary-accent dark:text-primary"
                  >
                    ✓
                  </motion.span>
                )}
              </DropdownMenuItem>
            </motion.div>
          </DropdownMenuContent>
        )}
      </AnimatePresence>
    </DropdownMenu>
  )
} 