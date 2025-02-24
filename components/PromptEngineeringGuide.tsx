import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Bot, Brain, Code, FileText, GitBranch, MessageSquare, Settings, Shield, Zap } from "lucide-react"

interface TechniqueCard {
  title: string
  description: string
  icon: React.ReactNode
  key: string
  content: string[]
}

interface ApplicationCard {
  title: string
  description: string
  icon: React.ReactNode
  examples: string[]
}

const techniques: TechniqueCard[] = [
  {
    title: "Zero-shot Prompting",
    description: "Direct instruction without examples",
    icon: <Zap className="h-5 w-5" />,
    key: "zero-shot",
    content: [
      "Give clear, direct instructions",
      "Be specific about the desired output format",
      "Include context and constraints",
      "Use clear delimiters for different parts",
      "Specify the role or perspective needed"
    ]
  },
  {
    title: "Few-shot Prompting",
    description: "Learning from examples",
    icon: <Brain className="h-5 w-5" />,
    key: "few-shot",
    content: [
      "Provide 2-3 high-quality examples",
      "Maintain consistent format across examples",
      "Include diverse cases",
      "Show both input and output clearly",
      "Use explicit separators between examples"
    ]
  },
  {
    title: "Chain-of-Thought",
    description: "Breaking down complex reasoning",
    icon: <GitBranch className="h-5 w-5" />,
    key: "cot",
    content: [
      "Break down complex problems into steps",
      "Show intermediate reasoning",
      "Include explicit logical connections",
      "Use clear step numbering",
      "Connect conclusions to premises"
    ]
  }
]

const applications: ApplicationCard[] = [
  {
    title: "Code Generation",
    description: "Generate and modify code effectively",
    icon: <Code className="h-5 w-5" />,
    examples: [
      "Specify programming language and version",
      "Include error handling requirements",
      "Define input/output formats",
      "Request specific optimizations",
      "Include test cases"
    ]
  },
  {
    title: "Content Creation",
    description: "Generate various types of content",
    icon: <FileText className="h-5 w-5" />,
    examples: [
      "Define tone and style",
      "Specify target audience",
      "Include formatting requirements",
      "Set content length",
      "Request specific sections"
    ]
  },
  {
    title: "Conversation Design",
    description: "Design effective chatbot interactions",
    icon: <MessageSquare className="h-5 w-5" />,
    examples: [
      "Define conversation goals",
      "Specify response style",
      "Include fallback options",
      "Set context boundaries",
      "Design multi-turn interactions"
    ]
  }
]

const bestPractices = [
  {
    title: "Clarity & Precision",
    items: [
      "Use clear, unambiguous language",
      "Be specific about requirements",
      "Define output format explicitly",
      "Include relevant constraints",
      "Specify the context clearly"
    ]
  },
  {
    title: "Structure & Organization",
    items: [
      "Use consistent formatting",
      "Separate different components",
      "Include clear delimiters",
      "Maintain logical flow",
      "Group related instructions"
    ]
  },
  {
    title: "Testing & Iteration",
    items: [
      "Start with simple prompts",
      "Test with various inputs",
      "Refine based on outputs",
      "Document successful patterns",
      "Build complexity gradually"
    ]
  }
]

export default function PromptEngineeringGuide() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-6 w-6" />
            Prompt Engineering Guide
          </CardTitle>
          <CardDescription>
            Based on DAIR.AI&apos;s comprehensive guide to effective prompt engineering
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="techniques" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="techniques">Techniques</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="practices">Best Practices</TabsTrigger>
        </TabsList>

        <TabsContent value="techniques" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techniques.map((technique) => (
              <Card key={technique.key}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {technique.icon}
                    {technique.title}
                  </CardTitle>
                  <CardDescription>{technique.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    {technique.content.map((item, index) => (
                      <li key={index} className="text-sm text-gray-600">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="applications" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((app, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {app.icon}
                    {app.title}
                  </CardTitle>
                  <CardDescription>{app.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    {app.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-gray-600">{example}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="practices">
          <Accordion type="single" collapsible className="w-full">
            {bestPractices.map((practice, index) => (
              <AccordionItem key={index} value={`practice-${index}`}>
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    {practice.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2">
                    {practice.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600">{item}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-6 w-6" />
            Safety & Ethics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-sm text-gray-600">Always validate generated content</li>
            <li className="text-sm text-gray-600">Consider potential biases in prompts</li>
            <li className="text-sm text-gray-600">Respect privacy and security guidelines</li>
            <li className="text-sm text-gray-600">Test for harmful or inappropriate outputs</li>
            <li className="text-sm text-gray-600">Document and version control prompts</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
} 