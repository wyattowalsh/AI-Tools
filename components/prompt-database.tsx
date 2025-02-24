'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Copy, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { promptCategories } from '@/data/prompts'
import type { Prompt, PromptFilter, AITool } from '@/types/prompts'
import { tools } from '@/data/tools'

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
        size="lg"
        variant="outline"
        className={cn(
          "absolute -top-2 -right-2 h-12 w-12 p-0",
          "bg-emerald-100 dark:bg-emerald-800/50",
          "hover:bg-emerald-200 dark:hover:bg-emerald-700/50",
          "border-2 border-emerald-500/20",
          "shadow-lg hover:shadow-xl",
          "transform hover:scale-105",
          "transition-all duration-200"
        )}
        onClick={handleCopy}
      >
        {copied ? (
          <Check className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
        ) : (
          <Copy className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
        )}
      </Button>
      {copied && (
        <div className={cn(
          "absolute -top-10 right-0",
          "px-3 py-1.5 rounded-md text-sm font-medium",
          "bg-emerald-100 dark:bg-emerald-800",
          "text-emerald-700 dark:text-emerald-300",
          "shadow-lg",
          "animate-in fade-in slide-in-from-top-1"
        )}>
          Copied!
        </div>
      )}
    </div>
  )
}

function ToolBadge({ tool }: { tool: AITool }) {
  const colors = {
    ChatGPT: "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300",
    Gemini: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
    Perplexity: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300",
    "NotebookLM Plus": "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300"
  }

  const toolData = tools.find(t => t.name.startsWith(tool))
  const Icon = toolData?.icon

  return (
    <Badge variant="outline" className={cn("font-mono flex items-center gap-2", colors[tool])}>
      {Icon && (
        <div className="w-4 h-4">
          <Icon />
        </div>
      )}
      {tool}
    </Badge>
  )
}

export function PromptDatabase() {
  const [filter, setFilter] = useState<PromptFilter>({})
  const [searchTerm, setSearchTerm] = useState("")

  const allTags = Array.from(new Set(
    promptCategories.flatMap(cat => cat.prompts.flatMap(p => p.tags))
  )).sort()

  const filteredPrompts = promptCategories.map(category => ({
    ...category,
    prompts: category.prompts.filter(prompt => {
      const matchesCategory = !filter.category || prompt.category === filter.category
      const matchesTool = !filter.tool || prompt.bestTools.includes(filter.tool)
      const matchesTag = !filter.tag || prompt.tags.includes(filter.tag)
      const matchesDifficulty = !filter.difficulty || prompt.difficulty === filter.difficulty
      const matchesSearch = !searchTerm || 
        prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prompt.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prompt.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      return matchesCategory && matchesTool && matchesTag && matchesDifficulty && matchesSearch
    })
  })).filter(category => category.prompts.length > 0)

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <Input
              placeholder="Search prompts..."
              className="pl-10"
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select 
            value={filter.category || 'all'} 
            onValueChange={(value) => setFilter({ ...filter, category: value === 'all' ? undefined : value })}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {promptCategories.map(cat => (
                <SelectItem key={cat.name} value={cat.name}>{cat.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select 
            value={filter.tool || 'all'} 
            onValueChange={(value) => setFilter({ ...filter, tool: value === 'all' ? undefined : value as AITool })}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="AI Tool" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Tools</SelectItem>
              <SelectItem value="ChatGPT">ChatGPT</SelectItem>
              <SelectItem value="Gemini">Gemini</SelectItem>
              <SelectItem value="Perplexity">Perplexity</SelectItem>
              <SelectItem value="NotebookLM Plus">NotebookLM Plus</SelectItem>
            </SelectContent>
          </Select>
          <Select 
            value={filter.difficulty || 'all'} 
            onValueChange={(value) => setFilter({ ...filter, difficulty: value === 'all' ? undefined : value as Prompt['difficulty'] })}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <Badge
              key={tag}
              variant="outline"
              className={cn(
                "cursor-pointer transition-colors",
                filter.tag === tag ? "bg-zinc-200 text-zinc-800" : "hover:bg-zinc-100"
              )}
              onClick={() => setFilter({ ...filter, tag: filter.tag === tag ? undefined : tag })}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Prompt Categories */}
      <div className="grid grid-cols-1 gap-6">
        {filteredPrompts.map((category) => (
          <Card key={category.name} className="bg-white dark:bg-zinc-900">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                  <category.icon className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
                    {category.name}
                  </CardTitle>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {category.description}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {category.prompts.map((prompt, idx) => (
                  <AccordionItem key={prompt.title} value={`${category.name}-${idx}`}>
                    <AccordionTrigger className="text-zinc-700 dark:text-zinc-300">
                      <div className="flex items-center gap-2">
                        <span>{prompt.title}</span>
                        <Badge variant="outline" className={cn(
                          "ml-2",
                          prompt.difficulty === "Beginner" ? "bg-zinc-100 text-zinc-800" :
                          prompt.difficulty === "Intermediate" ? "bg-zinc-200 text-zinc-800" :
                          "bg-zinc-300 text-zinc-800"
                        )}>
                          {prompt.difficulty}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div className="relative bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-lg">
                          <p className="text-zinc-700 dark:text-zinc-300 font-mono text-sm pr-10">
                            {prompt.text}
                          </p>
                          <CopyButton text={prompt.text} />
                        </div>
                        <div className="space-y-2">
                          <div>
                            <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                              Best Tools:
                            </h4>
                            <div className="flex gap-2">
                              {prompt.bestTools.map(tool => (
                                <ToolBadge key={tool} tool={tool} />
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                              Tips:
                            </h4>
                            <ul className="list-none space-y-1">
                              {prompt.tips.map((tip, i) => (
                                <li 
                                  key={i}
                                  className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 text-sm"
                                >
                                  <div className="w-1 h-1 rounded-full bg-zinc-500 dark:bg-zinc-400 flex-shrink-0" />
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                              Tags:
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {prompt.tags.map(tag => (
                                <Badge
                                  key={tag}
                                  variant="outline"
                                  className="text-xs"
                                  onClick={() => setFilter({ ...filter, tag })}
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 