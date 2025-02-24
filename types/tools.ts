import type { LucideIcon } from 'lucide-react'
import type { FC } from 'react'

export interface WorkflowStep {
  title: string
  description: string
  icon?: LucideIcon
  substeps?: string[]
}

export interface Workflow {
  title: string
  description: string
  steps: WorkflowStep[]
}

export interface ToolStep {
  title: string
  items: string[]
}

export interface ToolDetail {
  title: string
  content: string[]
}

export interface Tool {
  name: string
  icon: FC
  appLink: string
  flowchart: string
  steps: ToolStep[]
  details: ToolDetail[]
  homepage: string
  docs: string
  useCases: string[]
  examples: string[]
  notes: string[]
  workflows?: Workflow[]
} 