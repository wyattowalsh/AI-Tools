import { LucideIcon } from 'lucide-react'

export type AITool = 'ChatGPT' | 'Gemini' | 'Perplexity' | 'NotebookLM Plus'

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'

export type UseCase = 
  | 'Code Generation'
  | 'Code Review'
  | 'Testing'
  | 'Documentation'
  | 'Debugging'
  | 'Architecture'
  | 'Performance'
  | 'Security'
  | 'Data Analysis'
  | 'Machine Learning'
  | 'Writing'
  | 'Research'
  | 'Brainstorming'
  | 'Problem Solving'
  | 'Education'
  | 'Creative Writing'
  | 'Business'
  | 'Marketing'
  | 'Translation'
  | 'Summarization'

export type PromptStyle = 'Standard' | 'Zero-Shot' | 'Few-Shot' | 'Chain-of-Thought' | 'Panel Discussion'

export interface Prompt {
  title: string
  text: string
  category: string
  difficulty: Difficulty
  bestTools: AITool[]
  tags: string[]
  tips: string[]
  useCases: UseCase[]
  style: PromptStyle
  icon?: LucideIcon // Optional icon override for special prompts
}

export interface PromptCategory {
  name: string
  description: string
  icon: LucideIcon
  prompts: Prompt[]
}

export interface PromptFilter {
  category?: string
  tool?: AITool
  tag?: string
  difficulty?: Difficulty
  useCase?: UseCase
  style?: PromptStyle
} 