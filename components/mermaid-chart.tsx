'use client'

import React, { useEffect, useRef, useMemo } from 'react'
import type { MermaidConfig } from 'mermaid'
import { cn } from '@/lib/utils'

interface MermaidChartProps {
  chart: string
  className?: string
}

export const MermaidChart = React.forwardRef<HTMLDivElement, MermaidChartProps>(
  ({ chart, className }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const chartId = useMemo(
      () => "mermaid-" + Math.random().toString(36).substring(2, 9),
      []
    )

    useEffect(() => {
      let isMounted = true

      async function renderMermaid() {
        try {
          const mermaidModule = await import("mermaid")
          const mermaid = mermaidModule.default

          const config: MermaidConfig = {
            startOnLoad: false,
            theme: 'default',
            flowchart: {
              curve: 'basis',
              padding: 20,
              useMaxWidth: true,
              htmlLabels: true,
              nodeSpacing: 50,
              rankSpacing: 50,
            },
            themeVariables: {
              fontFamily: 'var(--font-inter)',
              fontSize: '14px',
              primaryColor: '#9FE88D',
              primaryTextColor: '#2D5A27',
              primaryBorderColor: '#7CB342',
              lineColor: '#7CB342',
              secondaryColor: '#F1F8E9',
              tertiaryColor: '#fff',
            },
            securityLevel: 'loose',
          }

          await mermaid.initialize(config)

          if (containerRef.current && isMounted) {
            containerRef.current.innerHTML = ''
            const { svg } = await mermaid.render(chartId, chart)
            if (isMounted) {
              containerRef.current.innerHTML = svg
            }
          }
        } catch (error) {
          console.error("Error rendering Mermaid chart:", error)
          if (containerRef.current && isMounted) {
            containerRef.current.innerHTML = '<p class="text-red-500">Error rendering chart</p>'
          }
        }
      }

      renderMermaid()

      return () => {
        isMounted = false
      }
    }, [chart, chartId])

    return (
      <div
        ref={containerRef}
        className={cn("w-full overflow-x-auto py-4", className)}
        style={{ minHeight: '200px' }}
      />
    )
  }
)

MermaidChart.displayName = "MermaidChart" 