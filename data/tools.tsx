'use client'

import { Tool } from '@/types/tools'
import Image from 'next/image'
import {
  Settings,
  Lock,
  MessageSquare,
  Layers,
  Brain,
  Search,
  FileSearch,
  BookOpen,
  FileText,
  PenTool,
} from 'lucide-react'
import { FC, ReactElement } from 'react'

export const ChatGPTIcon: FC<{}> = (): ReactElement => (
  <div className="relative w-full h-full flex items-center justify-center">
    <Image 
      src="/logos/chatgpt-logo.svg" 
      alt="ChatGPT Logo" 
      width={24} 
      height={24} 
      className="rounded-sm" 
      priority 
    />
  </div>
)

export const GeminiIcon: FC<{}> = (): ReactElement => (
  <div className="relative w-full h-full flex items-center justify-center">
    <Image 
      src="/logos/gemini-logo.svg" 
      alt="Gemini Logo" 
      width={24} 
      height={24} 
      className="rounded-sm" 
      priority 
    />
  </div>
)

export const PerplexityIcon: FC<{}> = (): ReactElement => (
  <div className="relative w-full h-full flex items-center justify-center">
    <Image 
      src="/logos/perplexity.webp" 
      alt="Perplexity Logo" 
      width={32} 
      height={32} 
      className="rounded-sm" 
      priority 
    />
  </div>
)

export const NotebookLMPlusIcon: FC<{}> = (): ReactElement => (
  <Image
    className="h-6 w-6"
    src="/logos/notebooklmplus.webp"
    alt="NotebookLM Plus Logo"
    width={24}
    height={24}
  />
)

export const tools: Tool[] = [
  {
    name: "ChatGPT Free",
    icon: ChatGPTIcon,
    homepage: "https://chat.openai.com",
    docs: "https://help.openai.com/en/collections/3742473-chatgpt",
    appLink: "https://apps.apple.com/app/chatgpt/id6448311069",
    useCases: [
      "General Q&A and discussions",
      "Creative writing assistance",
      "Basic code help",
      "Text document analysis",
      "Image generation with DALL·E 3",
      "Learning and tutoring",
      "Content brainstorming",
    ],
    examples: [
      "Advanced language translation & localization",
      "Sentiment analysis & emotion detection",
      "Research paper analysis & summarization",
      "Code generation, review & optimization",
      "Data pattern recognition & insights",
      "Text classification & categorization",
      "Creative writing & content generation",
      "Mathematical problem-solving",
      "Educational tutoring & explanations",
      "Document formatting & structuring"
    ],
    notes: [
      "Message limits (varies by user)",
      "2 DALL·E images per day",
      "Limited web access",
      "No real-time data",
      "Basic file processing",
    ],
    flowchart: "",
    steps: [
      {
        title: "Basic Setup",
        items: ["Install app", "Sign in", "Configure settings"]
      }
    ],
    details: [
      {
        title: "Features",
        content: ["Basic chat", "Image generation", "Code assistance"]
      }
    ],
    workflows: [
      {
        title: "General Q&A",
        description: "Get answers to questions",
        steps: [
          {
            title: "Initial Setup",
            description: "Basic platform configuration",
            icon: Settings,
            substeps: [
              "Check system requirements",
              "Install required dependencies",
              "Configure environment variables",
            ]
          },
          {
            title: "Authentication",
            description: "Account setup and security",
            icon: Lock,
            substeps: [
              "Create or sign in to account",
              "Set up 2FA if available",
              "Configure API keys if needed",
            ]
          },
          {
            title: "Query Formulation",
            description: "Structure your questions",
            icon: MessageSquare,
            substeps: [
              "Define clear objectives",
              "Break down complex questions",
              "Include relevant context",
              "Specify output format"
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Gemini Pro",
    icon: GeminiIcon,
    homepage: "https://gemini.google.com",
    docs: "https://ai.google.dev/docs/gemini_api",
    appLink: "https://apps.apple.com/app/google-gemini/id6478305803",
    useCases: [
      "Advanced web search integration",
      "Multimodal processing",
      "Deep research capabilities",
      "Context-aware analysis",
      "Real-time information access",
      "Extended context processing",
      "Cross-modal reasoning",
    ],
    examples: [
      "Multimodal reasoning & analysis",
      "Cross-language translation & understanding",
      "Complex data visualization & insights",
      "Visual content analysis & processing",
      "Scientific research & methodology",
      "Real-time information synthesis",
      "Context-aware problem solving",
      "Multi-step reasoning tasks",
      "Image understanding & generation",
      "Technical documentation analysis"
    ],
    notes: [
      "API rate limits apply",
      "Some features in preview",
      "Region availability varies",
      "Enterprise features restricted",
    ],
    flowchart: "",
    steps: [
      {
        title: "Basic Setup",
        items: ["Install app", "Sign in with Google", "Configure preferences"]
      }
    ],
    details: [
      {
        title: "Features",
        content: ["Advanced AI", "Multimodal support", "API access"]
      }
    ],
    workflows: [
      {
        title: "Multimodal Analysis",
        description: "Process multiple types of content",
        steps: [
          {
            title: "Content Preparation",
            description: "Prepare mixed media content",
            icon: Layers,
            substeps: [
              "Organize media files",
              "Check format compatibility",
              "Prepare context details",
              "Set analysis parameters"
            ]
          },
          {
            title: "Analysis Execution",
            description: "Process and analyze content",
            icon: Brain,
            substeps: [
              "Run initial analysis",
              "Process relationships",
              "Generate insights",
              "Compile results"
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Perplexity Free",
    icon: PerplexityIcon,
    homepage: "https://www.perplexity.ai",
    docs: "https://docs.perplexity.ai",
    appLink: "https://apps.apple.com/app/perplexity/id1668000334",
    useCases: [
      "Academic research",
      "Fact-checking and verification",
      "Current events analysis",
      "Source credibility assessment",
      "Research report generation",
      "Citation management",
      "Knowledge synthesis",
    ],
    examples: [
      "Real-time research & fact-finding",
      "Academic paper analysis & review",
      "Fact verification with citations",
      "Data synthesis across sources",
      "Literature review & bibliography",
      "Current events analysis",
      "Source credibility evaluation",
      "Cross-reference verification",
      "Research methodology planning",
      "Automated citation generation"
    ],
    notes: [
      "Unlimited basic searches",
      "5 Deep Research queries/day",
      "3 file uploads/day",
      "Limited advanced searches",
      "Real-time web access",
    ],
    flowchart: "",
    steps: [
      {
        title: "Basic Setup",
        items: ["Access website", "Create account", "Set preferences"]
      }
    ],
    details: [
      {
        title: "Features",
        content: ["Research tools", "Citation support", "Real-time search"]
      }
    ],
    workflows: [
      {
        title: "Academic Research",
        description: "Conduct thorough research",
        steps: [
          {
            title: "Research Planning",
            description: "Plan research approach",
            icon: Search,
            substeps: [
              "Define research goals",
              "Identify key sources",
              "Create research timeline",
              "Set up tracking system"
            ]
          },
          {
            title: "Data Collection",
            description: "Gather and organize data",
            icon: FileSearch,
            substeps: [
              "Collect primary data",
              "Review secondary sources",
              "Organize findings",
              "Track references"
            ]
          }
        ]
      }
    ]
  },
  {
    name: "NotebookLM Plus",
    icon: NotebookLMPlusIcon,
    homepage: "https://notebooklm.google.com",
    docs: "https://support.google.com/notebooklm",
    appLink: "https://notebooklm.google.com",
    useCases: [
      "Document analysis and understanding",
      "Research synthesis",
      "Content summarization",
      "Knowledge extraction",
      "Document-based Q&A",
      "Literature review",
      "Study assistance",
    ],
    examples: [
      "Document semantic analysis & mapping",
      "Research paper comprehension",
      "Knowledge graph visualization",
      "Citation network analysis",
      "Study material optimization",
      "Content relationship mapping",
      "Key concept extraction",
      "Document comparison & analysis",
      "Learning path generation",
      "Contextual note organization"
    ],
    notes: [
      "Free for personal use",
      "Google account required",
      "Limited to supported file types",
      "Max document size limits",
      "English-only currently",
    ],
    flowchart: "",
    steps: [
      {
        title: "Basic Setup",
        items: ["Sign in with Google", "Upload documents", "Create notebooks"]
      }
    ],
    details: [
      {
        title: "Features",
        content: ["Document analysis", "Smart summaries", "Contextual Q&A"]
      }
    ],
    workflows: [
      {
        title: "Document Analysis",
        description: "Process and analyze documents effectively",
        steps: [
          {
            title: "Document Preparation",
            description: "Prepare documents for analysis",
            icon: FileText,
            substeps: [
              "Upload documents",
              "Organize into notebooks",
              "Set analysis goals",
              "Review document structure"
            ]
          },
          {
            title: "Content Analysis",
            description: "Extract and synthesize information",
            icon: BookOpen,
            substeps: [
              "Generate summaries",
              "Extract key points",
              "Create study notes",
              "Track insights"
            ]
          },
          {
            title: "Knowledge Synthesis",
            description: "Create comprehensive understanding",
            icon: PenTool,
            substeps: [
              "Connect related concepts",
              "Create study guides",
              "Generate questions",
              "Review and refine"
            ]
          }
        ]
      }
    ]
  }
] 