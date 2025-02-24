'use client'

import { motion } from 'framer-motion'
import { 
  Mic,
  FileText,
  Image as ImageIcon,
  Video,
  Scan,
  MessageSquare,
  Brain,
  Code,
  FileSearch,
  BookOpen,
  PenTool,
  Network,
  BarChart,
  Languages,
  Lightbulb,
  Workflow,
  Users,
  Mountain,
  Copy,
  Check,
  Timer,
  Medal,
  Map,
  Compass,
  History,
  Globe,
  Presentation,
  Share2,
  Camera,
  Smartphone,
  Tablet,
  Monitor,
  Keyboard,
  MousePointer,
  ClipboardCopy,
  Scissors,
  Settings
} from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { MermaidChart } from './mermaid-chart'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { Button } from './ui/button'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const practicalTips = [
  {
    title: "Device-Specific Tips",
    icon: <Smartphone className="h-6 w-6" />,
    description: "Learn how to effectively use AI tools on different devices",
    sections: [
      {
        title: "iPad & Tablets",
        icon: <Tablet className="h-5 w-5" />,
        tips: [
          "Use split screen for reference materials",
          "Enable keyboard shortcuts for faster input",
          "Utilize Apple Pencil/stylus for annotations",
          "Configure gesture controls for quick actions",
          "Set up text replacement shortcuts"
        ]
      },
      {
        title: "Screenshots & Screen Recording",
        icon: <Camera className="h-5 w-5" />,
        tips: [
          "iPad: Press top + home/power button",
          "Use built-in screen recording for tutorials",
          "Edit screenshots with markup tools",
          "Organize screenshots in albums",
          "Share directly to AI tools for analysis"
        ]
      },
      {
        title: "Copy & Paste",
        icon: <ClipboardCopy className="h-5 w-5" />,
        tips: [
          "Use three-finger pinch gesture",
          "Long press for context menu",
          "Double tap to select words",
          "Triple tap to select paragraphs",
          "Drag and drop between apps"
        ]
      }
    ]
  },
  {
    title: "Input Methods",
    icon: <Keyboard className="h-6 w-6" />,
    description: "Different ways to interact with AI tools",
    sections: [
      {
        title: "Voice Input",
        icon: <Mic className="h-5 w-5" />,
        tips: [
          "Speak clearly and at a moderate pace",
          "Use punctuation commands",
          "Review and edit transcriptions",
          "Find quiet environment for accuracy",
          "Learn voice command shortcuts"
        ]
      },
      {
        title: "Text Selection",
        icon: <MousePointer className="h-5 w-5" />,
        tips: [
          "Double-click to select words",
          "Triple-click for paragraphs",
          "Shift+arrow keys for precise selection",
          "Use keyboard shortcuts for faster editing",
          "Learn text manipulation gestures"
        ]
      },
      {
        title: "File Handling",
        icon: <FileText className="h-5 w-5" />,
        tips: [
          "Organize files by project/topic",
          "Use consistent naming conventions",
          "Check file size limits",
          "Convert to supported formats",
          "Back up important files"
        ]
      }
    ]
  },
  {
    title: "Prompt Structure",
    icon: <MessageSquare className="h-6 w-6" />,
    description: "How to structure effective prompts",
    sections: [
      {
        title: "Basic Structure",
        icon: <PenTool className="h-5 w-5" />,
        tips: [
          "Start with clear instruction",
          "Provide relevant context",
          "Specify desired output format",
          "Include any constraints",
          "Use examples when helpful"
        ]
      },
      {
        title: "Advanced Techniques",
        icon: <Brain className="h-5 w-5" />,
        tips: [
          "Chain multiple instructions",
          "Use step-by-step reasoning",
          "Include system-role prompts",
          "Leverage few-shot learning",
          "Implement error handling"
        ]
      },
      {
        title: "Optimization",
        icon: <Settings className="h-5 w-5" />,
        tips: [
          "Test with different phrasings",
          "Iterate based on responses",
          "Document successful patterns",
          "Create template library",
          "Share and learn from others"
        ]
      }
    ]
  },
  {
    title: "Context Management",
    icon: <Network className="h-6 w-6" />,
    description: "Managing context and conversation flow",
    sections: [
      {
        title: "Context Setting",
        icon: <Globe className="h-5 w-5" />,
        tips: [
          "Start with clear project scope",
          "Define relevant constraints",
          "Specify output requirements",
          "Include necessary background",
          "Set tone and style preferences"
        ]
      },
      {
        title: "Memory Management",
        icon: <Brain className="h-5 w-5" />,
        tips: [
          "Break complex tasks into steps",
          "Reference previous responses",
          "Use conversation markers",
          "Clear context when switching topics",
          "Maintain conversation threads"
        ]
      },
      {
        title: "Error Recovery",
        icon: <History className="h-5 w-5" />,
        tips: [
          "Save important responses",
          "Document error patterns",
          "Use iterative refinement",
          "Implement fallback strategies",
          "Learn from mistakes"
        ]
      }
    ]
  },
  {
    title: "Output Optimization",
    icon: <BarChart className="h-6 w-6" />,
    description: "Getting better results from AI tools",
    sections: [
      {
        title: "Quality Control",
        icon: <Medal className="h-5 w-5" />,
        tips: [
          "Review outputs thoroughly",
          "Validate against requirements",
          "Check for consistency",
          "Test edge cases",
          "Document successful patterns"
        ]
      },
      {
        title: "Refinement Process",
        icon: <PenTool className="h-5 w-5" />,
        tips: [
          "Use iterative improvement",
          "Provide specific feedback",
          "Focus on key issues",
          "Track changes over time",
          "Build on successful outputs"
        ]
      },
      {
        title: "Performance Tuning",
        icon: <Timer className="h-5 w-5" />,
        tips: [
          "Monitor response times",
          "Optimize prompt length",
          "Balance detail vs. brevity",
          "Use appropriate models",
          "Consider resource usage"
        ]
      }
    ]
  },
  {
    title: "Workflow Integration",
    icon: <Workflow className="h-6 w-6" />,
    description: "Incorporating AI tools into your workflow",
    sections: [
      {
        title: "Task Planning",
        icon: <Map className="h-5 w-5" />,
        tips: [
          "Identify AI-suitable tasks",
          "Create process templates",
          "Set clear objectives",
          "Define success criteria",
          "Plan review cycles"
        ]
      },
      {
        title: "Collaboration",
        icon: <Users className="h-5 w-5" />,
        tips: [
          "Share prompt libraries",
          "Document best practices",
          "Coordinate on projects",
          "Review outputs together",
          "Learn from team feedback"
        ]
      },
      {
        title: "Progress Tracking",
        icon: <Mountain className="h-5 w-5" />,
        tips: [
          "Set measurable goals",
          "Track improvement metrics",
          "Document learnings",
          "Review periodically",
          "Adjust strategies"
        ]
      }
    ]
  }
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      <Button
        size="sm"
        variant="outline"
        className={cn(
          "absolute top-2 right-2 h-8 w-8 p-0",
          "bg-emerald-50 dark:bg-emerald-900/20",
          "hover:bg-emerald-100 dark:hover:bg-emerald-900/40",
          "transition-all duration-200"
        )}
        onClick={handleCopy}
      >
        {copied ? (
          <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
        ) : (
          <Copy className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
        )}
      </Button>
      {copied && (
        <div className={cn(
          "absolute -top-8 right-0",
          "px-2 py-1 rounded-md text-xs",
          "bg-emerald-100 dark:bg-emerald-900",
          "text-emerald-700 dark:text-emerald-300",
          "animate-in fade-in slide-in-from-top-1"
        )}>
          Copied!
        </div>
      )}
    </div>
  )
}

export function Guide() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12"
    >
      {/* Practical Tips */}
      <motion.section variants={itemVariants} className="space-y-6">
        <h2 className="text-2xl font-bold text-emerald-800 dark:text-emerald-400">
          Practical Usage Tips
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {practicalTips.map((category) => (
            <Card key={category.title} className="bg-white dark:bg-zinc-900">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg">
                    {category.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-emerald-800 dark:text-emerald-400">
                      {category.title}
                    </CardTitle>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {category.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.sections.map((section, idx) => (
                    <AccordionItem key={section.title} value={`${category.title}-${idx}`}>
                      <AccordionTrigger className="text-emerald-700 dark:text-emerald-300">
                        <div className="flex items-center gap-2">
                          {section.icon}
                          <span>{section.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {section.tips.map((tip, i) => (
                            <li 
                              key={i}
                              className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 flex-shrink-0" />
                              {tip}
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
      </motion.section>
    </motion.div>
  )
} 