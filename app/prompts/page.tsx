import { Metadata } from 'next'
import { PromptDatabase } from '@/components/prompt-database'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CopyButton } from '@/components/copy-button'
import { NotebookLMPlusIcon } from '@/components/notebooklm-plus-icon'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'AI Prompts',
  description: 'Collection of effective prompts for various AI models'
}

const tools = [
  {
    name: 'NotebookLM Plus',
    description: 'Google\'s premium AI research companion powered by Gemini 2.0 Flash. Features 5x more Audio Overviews with interactive hosts, custom response styles, team notebooks with analytics, and enterprise-grade security. Available via Google Workspace, Google Cloud, and Google One AI Premium.',
    icon: NotebookLMPlusIcon,
    prompts: [
      {
        text: "Analyze this research paper and help me understand its key findings and methodology. Focus on the most impactful conclusions and their practical applications.",
        description: "For deep research paper analysis with practical insights"
      },
      {
        text: "Create a comprehensive study guide from these lecture notes, highlighting key concepts and their relationships. Include examples and potential test questions.",
        description: "For organizing study materials with interactive elements"
      },
      {
        text: "Compare and contrast the main arguments from these multiple sources about [topic]. Identify areas of consensus and disagreement, and evaluate the strength of evidence.",
        description: "For comparative analysis and critical evaluation"
      },
      {
        text: "Create an Audio Overview of this content with two hosts discussing the key points in an engaging way. Make it interactive so I can ask questions.",
        description: "For creating interactive audio summaries"
      }
    ]
  },
  // ... other tools ...
]

export default function PromptsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">AI Prompts</h1>
      <PromptDatabase />
      <div className="grid gap-8 mt-12">
        <h2 className="text-3xl font-bold">Tool-Specific Prompts</h2>
        {tools.map((tool) => (
          <Card key={tool.name}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {tool.icon ? <tool.icon /> : null}
                {tool.name}
              </CardTitle>
              <p className="text-muted-foreground">{tool.description}</p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {tool.prompts.map((prompt, index) => (
                  <div key={index} className="relative p-4 bg-muted rounded-lg">
                    <CopyButton text={prompt.text} />
                    <p className="font-mono text-sm mt-2">{prompt.text}</p>
                    {prompt.description && (
                      <p className="text-sm text-muted-foreground mt-2">{prompt.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 