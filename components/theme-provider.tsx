"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

const STORAGE_KEY = 'ai-tools-theme'
const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)'

interface ThemeProviderState {
  theme: string
  resolvedTheme: string | undefined
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)
  const [state, setState] = React.useState<ThemeProviderState>({
    theme: 'system',
    resolvedTheme: undefined,
  })

  // Handle system theme changes
  React.useEffect(() => {
    const mediaQuery = window.matchMedia(COLOR_SCHEME_QUERY)
    
    const handleChange = () => {
      if (state.theme === 'system') {
        setState(prev => ({
          ...prev,
          resolvedTheme: mediaQuery.matches ? 'dark' : 'light'
        }))
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [state.theme])

  // Handle initial mount
  React.useEffect(() => {
    setMounted(true)
    
    // Get stored theme
    const storedTheme = localStorage.getItem(STORAGE_KEY)
    if (storedTheme) {
      setState(prev => ({ ...prev, theme: storedTheme }))
    }
    
    // Get system preference
    const mediaQuery = window.matchMedia(COLOR_SCHEME_QUERY)
    setState(prev => ({
      ...prev,
      resolvedTheme: mediaQuery.matches ? 'dark' : 'light'
    }))
  }, [])

  // Prevent flash of wrong theme
  if (!mounted) {
    return null
  }

  return (
    <NextThemesProvider
      {...props}
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey={STORAGE_KEY}
      attribute="class"
      value={{
        light: "light",
        dark: "dark",
        system: state.resolvedTheme ?? "light"
      }}
    >
      <div className="contents transition-colors duration-300">
        {children}
      </div>
    </NextThemesProvider>
  )
} 