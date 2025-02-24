'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  Sparkles, 
  Lightbulb, 
  Search,
  PenTool,
  Code,
  Bot,
  Workflow,
  Settings,
  Users,
  Network,
  Database,
  Shield,
  Zap
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { MermaidChart } from './mermaid-chart'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

interface TipItem {
  title: string
  description: string
  icon: React.ReactNode
  sections: {
    title: string
    items: string[]
  }[]
}

const tips: TipItem[] = [
  {
    title: "Getting Started",
    description: "Essential tips for beginning your AI journey",
    icon: <Bot className="h-6 w-6" />,
    sections: [
      {
        title: "Understanding AI",
        items: [
          "Learn basic AI concepts and terminology",
          "Understand different types of AI tools",
          "Know the capabilities and limitations",
          "Start with simple tasks and build up"
        ]
      },
      {
        title: "Tool Selection",
        items: [
          "Choose tools based on your needs",
          "Consider ease of use vs. power",
          "Start with free tiers when available",
          "Read documentation before starting"
        ]
      }
    ]
  },
  {
    title: "Best Practices",
    description: "Optimize your AI tool usage",
    icon: <Sparkles className="h-6 w-6" />,
    sections: [
      {
        title: "Communication",
        items: [
          "Be clear and specific in requests",
          "Provide necessary context",
          "Break down complex tasks",
          "Use appropriate formatting"
        ]
      },
      {
        title: "Workflow",
        items: [
          "Develop consistent processes",
          "Document successful approaches",
          "Create reusable templates",
          "Regular practice and iteration"
        ]
      }
    ]
  },
  {
    title: "Advanced Usage",
    description: "Take your AI skills to the next level",
    icon: <Zap className="h-6 w-6" />,
    sections: [
      {
        title: "Advanced Techniques",
        items: [
          "Chain multiple commands",
          "Create complex workflows",
          "Combine different tools",
          "Optimize for efficiency"
        ]
      },
      {
        title: "Integration",
        items: [
          "Connect with other tools",
          "Automate repetitive tasks",
          "Build custom solutions",
          "Scale your workflows"
        ]
      }
    ]
  },
  {
    title: "Problem Solving",
    description: "Handle challenges effectively",
    icon: <Lightbulb className="h-6 w-6" />,
    sections: [
      {
        title: "Troubleshooting",
        items: [
          "Identify root causes",
          "Test different approaches",
          "Document solutions",
          "Learn from failures"
        ]
      },
      {
        title: "Optimization",
        items: [
          "Improve response quality",
          "Reduce processing time",
          "Enhance accuracy",
          "Refine workflows"
        ]
      }
    ]
  },
  {
    title: "Security & Privacy",
    description: "Keep your data safe",
    icon: <Shield className="h-6 w-6" />,
    sections: [
      {
        title: "Data Protection",
        items: [
          "Understand data handling",
          "Use appropriate security measures",
          "Follow best practices",
          "Regular security reviews"
        ]
      },
      {
        title: "Privacy",
        items: [
          "Control information sharing",
          "Manage access permissions",
          "Monitor usage patterns",
          "Regular privacy audits"
        ]
      }
    ]
  },
  {
    title: "Future Growth",
    description: "Stay ahead in AI technology",
    icon: <Network className="h-6 w-6" />,
    sections: [
      {
        title: "Learning",
        items: [
          "Keep up with updates",
          "Explore new features",
          "Join communities",
          "Share knowledge"
        ]
      },
      {
        title: "Innovation",
        items: [
          "Experiment with new approaches",
          "Create custom solutions",
          "Contribute to development",
          "Build on successes"
        ]
      }
    ]
  }
]

const flowchart = `
  graph TB
    A[Start] --> B[Foundation]
    B --> C[Practice]
    C --> D[Mastery]
    D --> E[Innovation]

    subgraph foundation[Building Foundation]
      B1[Learn Basics]
      B2[Understand Tools]
      B3[Set Up Environment]
    end

    subgraph practice[Regular Practice]
      C1[Start Simple]
      C2[Increase Complexity]
      C3[Document Learning]
    end

    subgraph mastery[Achieving Mastery]
      D1[Advanced Techniques]
      D2[Optimize Workflows]
      D3[Solve Complex Problems]
    end

    subgraph innovation[Continuous Innovation]
      E1[Explore New Features]
      E2[Create Solutions]
      E3[Share Knowledge]
    end

    style A fill:#9FE88D,stroke:#2D5A27,stroke-width:2px
    style B fill:#9FE88D,stroke:#2D5A27,stroke-width:2px
    style C fill:#9FE88D,stroke:#2D5A27,stroke-width:2px
    style D fill:#9FE88D,stroke:#2D5A27,stroke-width:2px
    style E fill:#9FE88D,stroke:#2D5A27,stroke-width:2px
`

export function AppendixTips() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      {/* Overview Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-emerald-800 dark:text-emerald-400">
            AI Learning Journey
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              Master AI tools through continuous learning and practice. Follow this guide to develop your skills and create effective solutions.
            </p>
          </div>
          <div className="mt-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl">
            <div className="h-[400px]">
              <MermaidChart chart={flowchart} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tips.map((tip, idx) => (
          <Card key={tip.title} className="bg-white dark:bg-zinc-900">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg">
                  {tip.icon}
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-emerald-800 dark:text-emerald-400">
                    {tip.title}
                  </CardTitle>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {tip.description}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {tip.sections.map((section, sectionIdx) => (
                  <AccordionItem key={section.title} value={`${idx}-${sectionIdx}`}>
                    <AccordionTrigger className="text-emerald-700 dark:text-emerald-300">
                      {section.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIdx) => (
                          <li 
                            key={itemIdx}
                            className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  )
} 