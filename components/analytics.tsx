'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import va from '@vercel/analytics'
import { useTheme } from 'next-themes'

// Performance metrics to track
const PERFORMANCE_METRICS = [
  'FCP',  // First Contentful Paint
  'LCP',  // Largest Contentful Paint
  'CLS',  // Cumulative Layout Shift
  'FID',  // First Input Delay
  'TTFB', // Time to First Byte
  'INP',  // Interaction to Next Paint
] as const

type PerformanceMetric = typeof PERFORMANCE_METRICS[number]
type AllowedPropertyValues = string | number | boolean | null

type AnalyticsData = Record<string, AllowedPropertyValues>

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { theme, resolvedTheme } = useTheme()
  const currentTheme = (theme || resolvedTheme || 'system') as string

  // Track page views
  useEffect(() => {
    const url = pathname + searchParams.toString()
    
    const data: AnalyticsData = {
      path: url,
      theme: currentTheme,
      referrer: document.referrer,
      language: navigator.language,
      screenSize: `${window.innerWidth}x${window.innerHeight}`,
      timestamp: new Date().toISOString(),
    }
    
    va.track('pageview', data)
  }, [pathname, searchParams, currentTheme])

  // Track web vitals
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          const metricName = entry.name as PerformanceMetric
          
          if (PERFORMANCE_METRICS.includes(metricName)) {
            // Handle different performance entry types
            let value = 0
            if (entry instanceof PerformanceNavigationTiming) {
              value = entry.duration
            } else if ('value' in entry) {
              value = (entry as any).value
            } else {
              value = entry.startTime
            }

            const data: AnalyticsData = {
              value: Math.round(value),
              path: pathname,
              theme: currentTheme,
            }
            
            va.track(`web-vital-${metricName.toLowerCase()}`, data)
          }
        })
      })

      observer.observe({ 
        entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift', 'first-input', 'navigation'] 
      })

      return () => observer.disconnect()
    }
  }, [pathname, currentTheme])

  // Track errors
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      const data: AnalyticsData = {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        path: pathname,
        theme: currentTheme,
      }
      
      va.track('error', data)
    }

    window.addEventListener('error', handleError)
    return () => window.removeEventListener('error', handleError)
  }, [pathname, currentTheme])

  // Track user interactions
  useEffect(() => {
    const handleInteraction = (event: MouseEvent | KeyboardEvent) => {
      const target = event.target as HTMLElement
      if (target && target.tagName) {
        const data: AnalyticsData = {
          type: event.type,
          element: target.tagName.toLowerCase(),
          path: pathname,
          theme: currentTheme,
          timestamp: new Date().toISOString(),
        }
        
        va.track('interaction', data)
      }
    }

    window.addEventListener('click', handleInteraction, { passive: true })
    window.addEventListener('keypress', handleInteraction, { passive: true })

    return () => {
      window.removeEventListener('click', handleInteraction)
      window.removeEventListener('keypress', handleInteraction)
    }
  }, [pathname, currentTheme])

  // Track session duration
  useEffect(() => {
    const startTime = Date.now()

    return () => {
      const data: AnalyticsData = {
        duration: Date.now() - startTime,
        path: pathname,
        theme: currentTheme,
      }
      
      va.track('session-duration', data)
    }
  }, [pathname, currentTheme])

  return null
} 